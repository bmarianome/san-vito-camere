"use server";

import { Resend } from "resend";
import { env } from "@/env";
import { apartmentNames, emailTexts } from "./lib/constants";

const resend = new Resend(env.RESEND_API_KEY);

export async function submitBookingAction(
  data: BookingFormData & { totalPrice: number; lang: Locale },
) {
  try {
    const { firstName, lastName, lang, receipt } = data;

    const receiptArrayBuffer = await receipt.arrayBuffer();
    const receiptBase64 = Buffer.from(receiptArrayBuffer).toString("base64");

    const result = await resend.emails.send({
      from: "Central San Vito Camere <noreply@emails.bmariano.me>",
      to: env.BOOKING_EMAIL,
      subject: emailTexts[lang].subject,
      html: htmlContent(data),
      attachments: [
        {
          filename: `receipt-${firstName}-${lastName}.${receipt.type.includes("pdf") ? "pdf" : "jpg"}`,
          content: receiptBase64,
        },
      ],
    });

    if (result.error) {
      console.error("Error sending email:", result.error);
      throw new Error("Failed to send booking email");
    }

    console.log("Booking email sent successfully:", result.data?.id);
    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error("Error in submitBookingAction:", error);
    throw new Error("Failed to submit booking");
  }
}

function htmlContent(
  data: BookingFormData & { totalPrice: number; lang: Locale },
) {
  const {
    firstName,
    lastName,
    email,
    phone,
    apartment,
    adults,
    minors: children,
    dateRange,
    comments,
    totalPrice,
    lang,
  } = data;

  const apartmentName = apartmentNames[apartment][lang];

  const texts = emailTexts[lang] || emailTexts.en;

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${texts.subject}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      color: #333;
      background-color: #f8f6ff;
      margin: 0;
      padding: 20px;
    }
    .container {
      max-width: 600px;
      margin: 0 auto;
      background: white;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(110, 74, 141, 0.1);
      overflow: hidden;
    }
    .header {
      background: linear-gradient(135deg, #6e4a8d 0%, #4f2f70 100%);
      color: white;
      padding: 30px;
      text-align: center;
    }
    .header h1 {
      margin: 0;
      font-size: 24px;
      font-weight: 700;
    }
    .content {
      padding: 30px;
    }
    .section {
      margin-bottom: 30px;
    }
    .section h2 {
      color: #6e4a8d;
      font-size: 18px;
      font-weight: 600;
      margin: 0 0 15px 0;
      border-bottom: 2px solid #f8f6ff;
      padding-bottom: 8px;
    }
    .info-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 15px;
      margin-bottom: 15px;
    }
    .info-item {
      background: #f8f6ff;
      padding: 12px;
      border-radius: 8px;
      border-left: 3px solid #F59E0B;
    }
    .info-item strong {
      color: #6e4a8d;
      display: block;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 4px;
    }
    .info-item span {
      color: #4f2f70;
      font-weight: 500;
    }
    .price-highlight {
      background: linear-gradient(135deg, #F59E0B 0%, #f6a92a 100%);
      color: white;
      padding: 20px;
      border-radius: 8px;
      text-align: center;
      font-size: 20px;
      font-weight: 700;
      margin: 20px 0;
    }
    .comments {
      background: #f8f6ff;
      padding: 15px;
      border-radius: 8px;
      border: 1px solid #e5e7eb;
      font-style: italic;
      color: #6e4a8d;
    }
    .footer {
      background: #f8f6ff;
      padding: 20px;
      text-align: center;
      color: #6e4a8d;
      font-size: 14px;
    }
    @media (max-width: 600px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🏖️ Central San Vito Camere</h1>
      <p style="margin: 10px 0 0 0; opacity: 0.9;">${texts.greeting}</p>
    </div>
    
    <div class="content">
      <div class="section">
        <h2>👤 ${texts.personalInfo}</h2>
        <div class="info-grid">
          <div class="info-item">
            <strong>${texts.name}</strong>
            <span>${firstName} ${lastName}</span>
          </div>
          <div class="info-item">
            <strong>${texts.email}</strong>
            <span>${email}</span>
          </div>
          <div class="info-item">
            <strong>${texts.phone}</strong>
            <span>${phone}</span>
          </div>
        </div>
      </div>

      <div class="section">
        <h2>🏠 ${texts.stayDetails}</h2>
        <div class="info-grid">
          <div class="info-item">
            <strong>${texts.apartment}</strong>
            <span>${apartmentName}</span>
          </div>
          <div class="info-item">
            <strong>${texts.guests}</strong>
            <span>${adults} ${texts.adults}, ${children} ${texts.children}</span>
          </div>
          <div class="info-item">
            <strong>${texts.checkIn}</strong>
            <span>${new Date(dateRange.from).toLocaleDateString()}</span>
          </div>
          <div class="info-item">
            <strong>${texts.checkOut}</strong>
            <span>${new Date(dateRange.to).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div class="price-highlight">
          ${texts.totalPrice}: €${totalPrice}
        </div>
      </div>

      ${
        comments
          ? `
      <div class="section">
        <h2>💭 ${texts.comments}</h2>
        <div class="comments">
          ${comments}
        </div>
      </div>
      `
          : ""
      }

      <div class="section">
        <h2>📎 ${texts.receiptAttached}</h2>
      </div>
    </div>

    <div class="footer">
      <p><strong>Central San Vito Camere</strong></p>
      <p>Via Peralta 10, San Vito Lo Capo</p>
      <p>📧 centralsanvito@gmail.com | 📞 +39 329 068 9750</p>
    </div>
  </div>
</body>
</html>
`;
}
