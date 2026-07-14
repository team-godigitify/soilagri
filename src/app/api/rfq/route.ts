import { NextRequest, NextResponse } from "next/server";
import { rfqSchema } from "@/lib/validation/rfq.schema";
import { checkRateLimit } from "@/lib/rate-limit";
import { sendRfqNotification, sendRfqAutoAck } from "@/lib/email";
import { insertRfq } from "@/lib/db";

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

  // Honeypot filled → silent trap: 200, no email sent, no DB row (Section 8, step 3).
  if (data.honeypot) {
    return NextResponse.json({ success: true });
  }

  // Postgres is the system of record for the CRM when configured; email
  // notification/auto-ack are the resilient real-time layer regardless.
  // allSettled + per-channel logging so one channel's failure (e.g. a
  // cosmetic auto-ack bounce) never masks another's (the DB row, which the
  // CRM depends on, or the notification, which is the lead itself). The
  // submitter still sees success since their request was validated and
  // accepted — [CONFIRM monitoring channel] for alerting on repeated
  // failures.
  const [dbWrite, notification, autoAck] = await Promise.allSettled([
    insertRfq(data),
    sendRfqNotification(data),
    sendRfqAutoAck(data),
  ]);
  if (dbWrite.status === "rejected") {
    console.error("RFQ database write failed", dbWrite.reason);
  }
  if (notification.status === "rejected") {
    console.error("RFQ notification email failed", notification.reason);
  }
  if (autoAck.status === "rejected") {
    console.error("RFQ auto-ack email failed", autoAck.reason);
  }

  return NextResponse.json({ success: true });
}
