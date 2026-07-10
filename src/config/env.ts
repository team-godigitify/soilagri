import { z } from "zod";

const envSchema = z.object({
  RESEND_API_KEY: z.string().min(1, "RESEND_API_KEY is required"),
  RFQ_NOTIFY_TO: z.string().min(1, "RFQ_NOTIFY_TO is required"),
  RFQ_REPLY_FROM: z.string().email("RFQ_REPLY_FROM must be a valid email"),
  NEXT_PUBLIC_SITE_URL: z.string().url("NEXT_PUBLIC_SITE_URL must be a valid URL"),
  RATE_LIMIT_SECRET: z.string().min(1, "RATE_LIMIT_SECRET is required"),
});

/**
 * Validated at import time so a missing/invalid env var fails the build or
 * boot, never a live request (Section 1.2 DoD: "boot fails loudly").
 */
function loadEnv() {
  const parsed = envSchema.safeParse({
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RFQ_NOTIFY_TO: process.env.RFQ_NOTIFY_TO,
    RFQ_REPLY_FROM: process.env.RFQ_REPLY_FROM,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    RATE_LIMIT_SECRET: process.env.RATE_LIMIT_SECRET,
  });

  if (!parsed.success) {
    throw new Error(
      `Invalid environment configuration:\n${parsed.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n")}`
    );
  }

  return parsed.data;
}

export const env = loadEnv();
