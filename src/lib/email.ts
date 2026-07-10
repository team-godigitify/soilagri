import { Resend } from "resend";
import { env } from "@/config/env";
import type { RfqFormValues } from "@/lib/validation/rfq.schema";

const resend = new Resend(env.RESEND_API_KEY);

function subjectLine(data: RfqFormValues) {
  return `New RFQ: ${data.company} — ${data.productInterest ?? "General"}`;
}

/**
 * Email is the system of record (Law 4) — there is no database. A
 * delivery failure here means the lead is genuinely at risk, so callers
 * must log the error (Section 8: "never silently lose a lead").
 * [CONFIRM monitoring channel] for alerting on repeated failures.
 */
export async function sendRfqNotification(data: RfqFormValues) {
  const { error } = await resend.emails.send({
    from: env.RFQ_REPLY_FROM,
    to: env.RFQ_NOTIFY_TO.split(",").map((s) => s.trim()),
    replyTo: data.email,
    subject: subjectLine(data),
    text: [
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

  // The Resend SDK resolves with { data, error } instead of rejecting on
  // API-level failures — a bare `await` here would silently swallow a
  // failed send, which is exactly what Section 8 forbids.
  if (error) throw new Error(`Resend notification failed: ${error.message}`);
}

// SLA wording ("1-2 business days") is DRAFT copy pending client
// confirmation (Section 7.8) — only commit to a number the client can
// actually meet.
export async function sendRfqAutoAck(data: RfqFormValues) {
  const { error } = await resend.emails.send({
    from: env.RFQ_REPLY_FROM,
    to: data.email,
    subject: "We received your request — Agrisoil",
    text: [
      `Hi ${data.name},`,
      "",
      "Thanks for reaching out to Agrisoil. We've received your request and will respond within 1-2 business days.",
      "",
      "— Agrisoil",
    ].join("\n"),
  });

  if (error) throw new Error(`Resend auto-ack failed: ${error.message}`);
}
