import { createHash } from "crypto";
import { env } from "@/config/env";

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_REQUESTS = 5;

/**
 * In-memory sliding window (Section 8) — acceptable per spec for a single
 * Vercel region deployment. Swapping to Vercel KV later is a drop-in
 * replacement behind this same function signature.
 */
const hits = new Map<string, number[]>();

function hashKey(ip: string): string {
  return createHash("sha256").update(`${ip}:${env.RATE_LIMIT_SECRET}`).digest("hex");
}

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const key = hashKey(ip);
  const now = Date.now();
  const windowStart = now - WINDOW_MS;

  const timestamps = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (timestamps.length >= MAX_REQUESTS) {
    hits.set(key, timestamps);
    return { allowed: false, remaining: 0 };
  }

  timestamps.push(now);
  hits.set(key, timestamps);
  return { allowed: true, remaining: MAX_REQUESTS - timestamps.length };
}
