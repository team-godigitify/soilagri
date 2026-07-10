import { NextRequest, NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validation/rfq.schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendRfqNotification, sendRfqAutoAck } from "@/lib/email";

function getClientIp(request: NextRequest): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) return forwardedFor.split(",")[0]?.trim() ?? "unknown";
  return request.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);

  const { allowed } = checkRateLimit(ip);
  if (!allowed) {
    return NextResponse.json(
      { success: false, error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  if (!body) {
    return NextResponse.json(
      { success: false, error: "Invalid request body." },
      { status: 422 }
    );
  }

  const parsed = rfqSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { success: false, errors: parsed.error.flatten().fieldErrors },
      { status: 422 }
    );
  }

  const data = parsed.data;

  // Honeypot filled → silent trap: 200, no email sent (Section 8, step 3).
  if (data.honeypot) {
    return NextResponse.json({ success: true });
  }

  // Email is the system of record (Law 4) — a delivery failure here means
  // the lead is genuinely at risk. allSettled + per-email logging so a
  // failed auto-ack (cosmetic) doesn't mask a failed notification (the
  // lead itself). Log server-side and alert [CONFIRM monitoring channel];
  // the submitter still sees success since their request was validated
  // and accepted (Section 8).
  const [notification, autoAck] = await Promise.allSettled([
    sendRfqNotification(data),
    sendRfqAutoAck(data),
  ]);
  if (notification.status === "rejected") {
    console.error("RFQ notification email failed", notification.reason);
  }
  if (autoAck.status === "rejected") {
    console.error("RFQ auto-ack email failed", autoAck.reason);
  }

  return NextResponse.json({ success: true });
}
