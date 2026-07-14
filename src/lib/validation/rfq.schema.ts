import { z } from "zod";

/**
 * Extends the original RFQ contract (Law 5): the product/service catalog
 * now exists, so a caller can tell us which kind of enquiry this is
 * without us having to guess from free-text `productInterest`. The UI
 * always sends a default of "quote" — see ContactForm's defaultValues.
 */
export const inquiryTypes = [
  { value: "quote", label: "Request a Quote" },
  { value: "buyer", label: "Buyer Inquiry" },
  { value: "supplier", label: "Supplier Partnership" },
  { value: "general", label: "General" },
] as const;

export type InquiryType = (typeof inquiryTypes)[number]["value"];

export function inquiryTypeLabel(value: InquiryType): string {
  return inquiryTypes.find((type) => type.value === value)?.label ?? "General";
}

/**
 * Shared client + server schema. The honeypot is validated as an optional
 * string, not rejected here — a bot that fills it should get a normal 200
 * response with no email sent (silent trap), not a 422 that teaches it
 * what field to leave blank.
 *
 * `country` and `productInterest` are free text for now — swap to
 * `z.enum([...])` once the new site's country list / product catalog exists.
 */
export const rfqSchema = z.object({
  inquiryType: z.enum(["quote", "buyer", "supplier", "general"]),
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z
    .union([z.literal(""), z.string().trim().min(7).max(20)])
    .optional(),
  country: z.string().trim().min(2).max(100),
  productInterest: z.string().trim().max(200).optional(),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(2000),
  honeypot: z.string().optional(),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;
