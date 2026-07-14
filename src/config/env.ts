import { z } from "zod";

/**
 * Split into "core" (required — the site cannot function correctly without
 * these, so boot fails loudly per the existing convention) and "optional"
 * (new capabilities — the RFQ CRM database and admin auth — that must NOT
 * take the entire site down while they're still being provisioned. Each
 * optional capability checks its own env at the point of use and degrades
 * gracefully instead).
 */
const coreSchema = z.object({
  BREVO_API_KEY: z.string().min(1, "BREVO_API_KEY is required"),
  RFQ_NOTIFY_TO: z.string().min(1, "RFQ_NOTIFY_TO is required"),
  RFQ_REPLY_FROM: z.string().email("RFQ_REPLY_FROM must be a valid email"),
  NEXT_PUBLIC_SITE_URL: z.string().url("NEXT_PUBLIC_SITE_URL must be a valid URL"),
  RATE_LIMIT_SECRET: z.string().min(1, "RATE_LIMIT_SECRET is required"),
});

const optionalSchema = z.object({
  // RFQ CRM (Postgres) — absent until the database is provisioned.
  POSTGRES_URL: z.string().min(1).optional(),
  // Admin CRM login — absent until an operator sets a password.
  ADMIN_PASSWORD: z.string().min(8).optional(),
  ADMIN_SESSION_SECRET: z.string().min(16).optional(),
});

/**
 * Validated at import time so a missing/invalid CORE env var fails the
 * build or boot, never a live request (Section 1.2 DoD: "boot fails
 * loudly"). Optional vars are validated too (so a malformed value still
 * surfaces clearly) but their absence doesn't throw.
 */
function loadEnv() {
  const core = coreSchema.safeParse({
    BREVO_API_KEY: process.env.BREVO_API_KEY,
    RFQ_NOTIFY_TO: process.env.RFQ_NOTIFY_TO,
    RFQ_REPLY_FROM: process.env.RFQ_REPLY_FROM,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
    RATE_LIMIT_SECRET: process.env.RATE_LIMIT_SECRET,
  });

  if (!core.success) {
    throw new Error(
      `Invalid environment configuration:\n${core.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n")}`
    );
  }

  // An unset var in .env.local (e.g. `POSTGRES_URL=` with nothing after the
  // `=`) parses as `""`, not `undefined` — without this, .optional() still
  // fails the .min() check on every un-provisioned optional var.
  const emptyToUndefined = (value: string | undefined) => (value ? value : undefined);

  const optional = optionalSchema.safeParse({
    POSTGRES_URL: emptyToUndefined(process.env.POSTGRES_URL),
    ADMIN_PASSWORD: emptyToUndefined(process.env.ADMIN_PASSWORD),
    ADMIN_SESSION_SECRET: emptyToUndefined(process.env.ADMIN_SESSION_SECRET),
  });

  if (!optional.success) {
    throw new Error(
      `Invalid optional environment configuration:\n${optional.error.issues
        .map((issue) => `  - ${issue.path.join(".")}: ${issue.message}`)
        .join("\n")}`
    );
  }

  return { ...core.data, ...optional.data };
}

export const env = loadEnv();

/** True once Postgres is configured — gates the CRM (db, admin routes/pages) so it degrades instead of crashing. */
export const crmEnabled = Boolean(env.POSTGRES_URL && env.ADMIN_PASSWORD && env.ADMIN_SESSION_SECRET);
