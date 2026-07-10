import { z } from "zod";
import { countries } from "@/content/countries";
import { getAllProducts } from "@/content/products";

const countryCodes = countries.map((c) => c.code) as [string, ...string[]];

export const generalInquiryOption = "General inquiry" as const;

const productOptions = [
  generalInquiryOption,
  ...getAllProducts().map((p) => p.name),
] as [string, ...string[]];

/**
 * Shared client + server schema (Section 8). The honeypot is validated as
 * an optional string, not rejected here — a bot that fills it should get
 * a normal 200 response with no email sent (silent trap), not a 422 that
 * teaches it what field to leave blank.
 */
export const rfqSchema = z.object({
  name: z.string().trim().min(2).max(100),
  company: z.string().trim().min(2).max(120),
  email: z.string().trim().email(),
  phone: z
    .union([z.literal(""), z.string().trim().min(7).max(20)])
    .optional(),
  country: z.enum(countryCodes),
  productInterest: z.enum(productOptions).optional(),
  quantity: z.string().trim().max(100).optional(),
  message: z.string().trim().min(10).max(2000),
  honeypot: z.string().optional(),
});

export type RfqFormValues = z.infer<typeof rfqSchema>;

export { productOptions };
