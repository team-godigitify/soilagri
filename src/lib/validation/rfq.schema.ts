import { z } from "zod";

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
