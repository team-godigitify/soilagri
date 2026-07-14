import { neon, type NeonQueryFunction } from "@neondatabase/serverless";
import { env } from "@/config/env";
import type { RfqFormValues } from "@/lib/validation/rfq.schema";
import { rfqStatuses, type RfqStatus, type RfqRecord } from "@/types/crm";

/**
 * `sql` is null until POSTGRES_URL is provisioned — every function below
 * checks it and no-ops (rather than throwing) so the public RFQ flow keeps
 * working, and the CRM pages, on their own, show a "not configured" state
 * instead of a crash (see crmEnabled in src/config/env.ts).
 */
const sql: NeonQueryFunction<false, false> | null = env.POSTGRES_URL ? neon(env.POSTGRES_URL) : null;

let schemaReady: Promise<void> | null = null;

function ensureSchema(): Promise<void> {
  if (!sql) return Promise.resolve();
  if (!schemaReady) {
    schemaReady = sql`
      CREATE TABLE IF NOT EXISTS rfq_submissions (
        id SERIAL PRIMARY KEY,
        created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
        inquiry_type TEXT NOT NULL,
        name TEXT NOT NULL,
        company TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT,
        country TEXT NOT NULL,
        product_interest TEXT,
        quantity TEXT,
        message TEXT NOT NULL,
        status TEXT NOT NULL DEFAULT 'new',
        notes TEXT
      )
    `.then(() => undefined);
  }
  return schemaReady;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mapRow(row: any): RfqRecord {
  return {
    id: row.id,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    inquiryType: row.inquiry_type,
    name: row.name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    country: row.country,
    productInterest: row.product_interest,
    quantity: row.quantity,
    message: row.message,
    status: rfqStatuses.includes(row.status) ? row.status : "new",
    notes: row.notes,
  };
}

/** Called from the RFQ API route — a DB outage must never block the public form (Section 8), so callers wrap this in try/catch and fall through to email regardless. */
export async function insertRfq(data: RfqFormValues): Promise<void> {
  if (!sql) return;
  await ensureSchema();
  await sql`
    INSERT INTO rfq_submissions
      (inquiry_type, name, company, email, phone, country, product_interest, quantity, message)
    VALUES
      (${data.inquiryType}, ${data.name}, ${data.company}, ${data.email}, ${data.phone || null},
       ${data.country}, ${data.productInterest || null}, ${data.quantity || null}, ${data.message})
  `;
}

export async function listRfqs(status?: RfqStatus): Promise<RfqRecord[]> {
  if (!sql) return [];
  await ensureSchema();
  const rows = status
    ? await sql`SELECT * FROM rfq_submissions WHERE status = ${status} ORDER BY created_at DESC`
    : await sql`SELECT * FROM rfq_submissions ORDER BY created_at DESC`;
  return rows.map(mapRow);
}

export async function getRfq(id: number): Promise<RfqRecord | null> {
  if (!sql) return null;
  await ensureSchema();
  const rows = await sql`SELECT * FROM rfq_submissions WHERE id = ${id}`;
  return rows[0] ? mapRow(rows[0]) : null;
}

export async function updateRfq(id: number, updates: { status?: RfqStatus; notes?: string }): Promise<void> {
  if (!sql) return;
  await ensureSchema();
  await sql`
    UPDATE rfq_submissions
    SET status = COALESCE(${updates.status ?? null}, status),
        notes = COALESCE(${updates.notes ?? null}, notes),
        updated_at = now()
    WHERE id = ${id}
  `;
}
