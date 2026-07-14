import { env } from "@/config/env";
import { inquiryTypeLabel, type RfqFormValues } from "@/lib/validation/rfq.schema";

const BREVO_ENDPOINT = "https://api.brevo.com/v3/smtp/email";

function subjectLine(data: RfqFormValues) {
  return `New ${inquiryTypeLabel(data.inquiryType)}: ${data.company} — ${data.productInterest ?? "General"}`;
}

async function sendBrevoEmail(payload: {
  to: { email: string; name?: string }[];
  subject: string;
  textContent: string;
  replyTo?: { email: string };
}) {
  const response = await fetch(BREVO_ENDPOINT, {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      sender: { email: env.RFQ_REPLY_FROM },
      to: payload.to,
      replyTo: payload.replyTo,
      subject: payload.subject,
      textContent: payload.textContent,
    }),
  });

  if (!response.ok) {
    const body = await response.text().catch(() => "");
    throw new Error(`Brevo send failed (${response.status}): ${body}`);
  }
}

/**
 * Postgres is the system of record when configured (crmEnabled — see
 * src/lib/db.ts); email is the resilient notification layer regardless,
 * so a delivery failure here must still be logged (Section 8: "never
 * silently lose a lead") even when the DB write already succeeded.
 * [CONFIRM monitoring channel] for alerting on repeated failures.
 */
export async function sendRfqNotification(data: RfqFormValues) {
  await sendBrevoEmail({
    to: env.RFQ_NOTIFY_TO.split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((email) => ({ email })),
    replyTo: { email: data.email },
    subject: subjectLine(data),
    textContent: [
      `Inquiry Type: ${inquiryTypeLabel(data.inquiryType)}`,
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Country: ${data.country}`,
      `Product interest: ${data.productInterest ?? "General inquiry"}`,
      `Quantity: ${data.quantity || "—"}`,
      "",
      "Message:",
      data.message,
    ].join("\n"),
  });
}

// SLA wording ("1-2 business days") is DRAFT copy pending client
// confirmation (Section 7.8) — only commit to a number the client can
// actually meet.
export async function sendRfqAutoAck(data: RfqFormValues) {
  await sendBrevoEmail({
    to: [{ email: data.email, name: data.name }],
    subject: "We received your request",
    textContent: [
      `Hi ${data.name},`,
      "",
      "Thanks for reaching out. We've received your request and will respond within 1-2 business days.",
    ].join("\n"),
  });
}
