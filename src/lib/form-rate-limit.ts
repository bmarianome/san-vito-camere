import "server-only";

import { createHash } from "crypto";
import { headers } from "next/headers";

import { redis } from "@/lib/kv";

// Rate limit for public forms, per IP. Independent of any login/2FA rate
// limit: it never shares keys with those implementations.
const PREFIX = "san-vito-camere:form";
const MAX_PER_WINDOW = 5;
const WINDOW_SECONDS = 60 * 60; // 1h

async function getClientIp(): Promise<string> {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for");
  const candidate = forwarded ? forwarded.split(",")[0] : h.get("x-real-ip");
  const ip = candidate?.trim();
  return ip && ip.length > 0 ? ip : "unknown";
}

export type RateLimitResult = { ok: true } | { ok: false; error: string };

/** Consumes one unit of the current IP's form-submission quota. `scope`
 * separates the quota per form type; without `scope`, all forms share a
 * single per-IP quota. If Redis fails, it lets the request through
 * (fail-open) so legitimate submissions are never blocked. */
export async function checkFormRateLimit(
  scope?: string,
): Promise<RateLimitResult> {
  try {
    const ip = await getClientIp();
    const ipHash = createHash("sha256").update(ip).digest("hex").slice(0, 16);
    const key = scope ? `${PREFIX}:${scope}:${ipHash}` : `${PREFIX}:${ipHash}`;

    const count = await redis.incr(key);
    if (count === 1) await redis.expire(key, WINDOW_SECONDS);

    if (count > MAX_PER_WINDOW) {
      return {
        ok: false,
        error:
          "You've reached the submission limit for now. Please try again later or email us.",
      };
    }
    return { ok: true };
  } catch (error) {
    console.error("checkFormRateLimit:", error);
    return { ok: true };
  }
}
