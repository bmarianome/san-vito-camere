import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { env } from "@/env";

const ses = new SESv2Client({
  region: "sa-east-1",
  credentials: {
    accessKeyId: env.SES_ACCESS_KEY_ID,
    secretAccessKey: env.SES_SECRET_ACCESS_KEY,
  },
});

type Attachment = {
  filename: string;
  content: Buffer | Uint8Array | string;
  contentType?: string;
};

type SendEmailInput = {
  from: string;
  to: string | string[];
  replyTo?: string | string[];
  subject: string;
  html?: string;
  text?: string;
  attachments?: Attachment[];
};

// Envío transaccional por Amazon SES. Interfaz compatible con
// resend.emails.send: devuelve { error } para no tocar el manejo de errores
// de los call sites. Con adjuntos arma el MIME a mano y usa Content.Raw:
// el modo Simple de SES v2 no los soporta.
export async function sendEmail(
  input: SendEmailInput,
): Promise<{ error: Error | null }> {
  try {
    const html = input.html;

    if (input.attachments?.length) {
      await ses.send(
        new SendEmailCommand({
          FromEmailAddress: input.from,
          Destination: { ToAddresses: toArray(input.to) },
          ReplyToAddresses: input.replyTo ? toArray(input.replyTo) : undefined,
          Content: {
            Raw: {
              Data: buildRawMessage({ ...input, html }),
            },
          },
        }),
      );
      return { error: null };
    }

    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: input.from,
        Destination: { ToAddresses: toArray(input.to) },
        ReplyToAddresses: input.replyTo ? toArray(input.replyTo) : undefined,
        Content: {
          Simple: {
            Subject: { Data: input.subject },
            Body: {
              ...(html ? { Html: { Data: html } } : {}),
              ...(input.text ? { Text: { Data: input.text } } : {}),
            },
          },
        },
      }),
    );
    return { error: null };
  } catch (error) {
    return { error: error instanceof Error ? error : new Error(String(error)) };
  }
}

const toArray = (value: string | string[]) =>
  Array.isArray(value) ? value : [value];

const CONTENT_TYPES: Record<string, string> = {
  pdf: "application/pdf",
  jpg: "image/jpeg",
  jpeg: "image/jpeg",
  png: "image/png",
  webp: "image/webp",
  doc: "application/msword",
  docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  txt: "text/plain",
  csv: "text/csv",
  zip: "application/zip",
};

const guessContentType = (filename: string) =>
  CONTENT_TYPES[filename.split(".").pop()?.toLowerCase() ?? ""] ??
  "application/octet-stream";

/** Asunto y nombres de archivo con acentos: RFC 2047 en base64. */
const encodeHeader = (value: string) =>
  /^[\x20-\x7e]*$/.test(value)
    ? value
    : `=?UTF-8?B?${Buffer.from(value, "utf8").toString("base64")}?=`;

const chunk76 = (value: string) => value.match(/.{1,76}/g)?.join("\r\n") ?? "";

function buildRawMessage(input: SendEmailInput & { html?: string }): Buffer {
  const boundary = `bm_${Buffer.from(input.subject + input.from)
    .toString("base64url")
    .slice(0, 24)}`;
  const lines: string[] = [
    `From: ${input.from}`,
    `To: ${toArray(input.to).join(", ")}`,
  ];
  if (input.replyTo)
    lines.push(`Reply-To: ${toArray(input.replyTo).join(", ")}`);
  lines.push(
    `Subject: ${encodeHeader(input.subject)}`,
    "MIME-Version: 1.0",
    `Content-Type: multipart/mixed; boundary="${boundary}"`,
    "",
    `--${boundary}`,
  );

  const body = input.html ?? input.text ?? "";
  const bodyType = input.html ? "text/html" : "text/plain";
  lines.push(
    `Content-Type: ${bodyType}; charset=UTF-8`,
    "Content-Transfer-Encoding: base64",
    "",
    chunk76(Buffer.from(body, "utf8").toString("base64")),
  );

  for (const attachment of input.attachments ?? []) {
    // Igual que Resend: un string se interpreta como base64, no como texto.
    const content =
      typeof attachment.content === "string"
        ? Buffer.from(attachment.content, "base64")
        : Buffer.from(attachment.content);
    lines.push(
      `--${boundary}`,
      `Content-Type: ${attachment.contentType ?? guessContentType(attachment.filename)}; name="${encodeHeader(attachment.filename)}"`,
      `Content-Disposition: attachment; filename="${encodeHeader(attachment.filename)}"`,
      "Content-Transfer-Encoding: base64",
      "",
      chunk76(content.toString("base64")),
    );
  }

  lines.push(`--${boundary}--`, "");
  return Buffer.from(lines.join("\r\n"), "utf8");
}
