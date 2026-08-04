import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    SES_ACCESS_KEY_ID: z.string().min(1),
    SES_SECRET_ACCESS_KEY: z.string().min(1),
    BOOKING_EMAIL: z.string().email(),
    UPSTASH_REDIS_REST_URL: z.string().min(1),
    UPSTASH_REDIS_REST_TOKEN: z.string().min(1),
  },

  client: {},

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    SES_ACCESS_KEY_ID: process.env.SES_ACCESS_KEY_ID,
    SES_SECRET_ACCESS_KEY: process.env.SES_SECRET_ACCESS_KEY,
    BOOKING_EMAIL: process.env.BOOKING_EMAIL,
    UPSTASH_REDIS_REST_URL: process.env.UPSTASH_REDIS_REST_URL,
    UPSTASH_REDIS_REST_TOKEN: process.env.UPSTASH_REDIS_REST_TOKEN,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
  emptyStringAsUndefined: true,
});
