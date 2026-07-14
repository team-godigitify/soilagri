import { createHmac, timingSafeEqual } from "crypto";
import { env } from "@/config/env";

export const ADMIN_SESSION_COOKIE = "sa_admin_session";
const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12 hours
export const ADMIN_SESSION_MAX_AGE_SECONDS = SESSION_TTL_MS / 1000;

function sign(payload: string): string {
  return createHmac("sha256", env.ADMIN_SESSION_SECRET ?? "").update(payload).digest("base64url");
}

/** Single-operator session token — signed+expiring, not a per-user login system (Section: "simple CRM"). */
export function createSessionToken(): string {
  const payload = Buffer.from(JSON.stringify({ exp: Date.now() + SESSION_TTL_MS })).toString("base64url");
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined | null): boolean {
  if (!token || !env.ADMIN_SESSION_SECRET) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expected = Buffer.from(sign(payload));
  const actual = Buffer.from(signature);
  if (expected.length !== actual.length || !timingSafeEqual(expected, actual)) return false;

  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}

/** Constant-time comparison so response timing can't leak how much of the password guess was correct. */
export function verifyPassword(candidate: string): boolean {
  if (!env.ADMIN_PASSWORD) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(env.ADMIN_PASSWORD);
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}
