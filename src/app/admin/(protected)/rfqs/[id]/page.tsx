import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mail, Phone, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { getRfq } from "@/lib/db";
import { rfqStatuses, rfqStatusLabels } from "@/types/crm";
import { updateRfqAction } from "./actions";

export const metadata: Metadata = { title: "RFQ Detail" };

export default async function AdminRfqDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const rfqId = Number(id);
  if (!Number.isInteger(rfqId)) notFound();

  const rfq = await getRfq(rfqId);
  if (!rfq) notFound();

  const boundAction = updateRfqAction.bind(null, rfq.id);

  return (
    <div className="flex flex-col gap-6">
      <Link href="/admin/rfqs" className="flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to RFQs
      </Link>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h1 className="font-heading text-2xl font-semibold text-foreground">{rfq.name}</h1>
              <p className="text-sm text-muted-foreground">{rfq.company}</p>
            </div>
            <Badge variant="outline">{new Date(rfq.createdAt).toLocaleString("en-CA")}</Badge>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a href={`mailto:${rfq.email}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
              <Mail className="size-4" aria-hidden="true" />
              {rfq.email}
            </a>
            {rfq.phone && (
              <a href={`tel:${rfq.phone}`} className="flex items-center gap-2 text-sm text-primary hover:underline">
                <Phone className="size-4" aria-hidden="true" />
                {rfq.phone}
              </a>
            )}
          </div>

          <dl className="grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Inquiry Type</dt>
              <dd className="mt-1 text-sm text-foreground capitalize">{rfq.inquiryType}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Country</dt>
              <dd className="mt-1 text-sm text-foreground">{rfq.country}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Product Interest</dt>
              <dd className="mt-1 text-sm text-foreground">{rfq.productInterest ?? "—"}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Quantity</dt>
              <dd className="mt-1 text-sm text-foreground">{rfq.quantity ?? "—"}</dd>
            </div>
          </dl>

          <div className="border-t border-border pt-5">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">Message</span>
            <p className="mt-2 max-w-[70ch] text-sm text-foreground">{rfq.message}</p>
          </div>
        </div>

        <form action={boundAction} className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs">
          <div className="flex flex-col gap-2">
            <label htmlFor="status" className="text-sm font-medium text-foreground">
              Status
            </label>
            <select
              id="status"
              name="status"
              defaultValue={rfq.status}
              className="h-11 w-full rounded-lg border border-input bg-transparent px-2.5 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {rfqStatuses.map((status) => (
                <option key={status} value={status}>
                  {rfqStatusLabels[status]}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="text-sm font-medium text-foreground">
              Internal Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={6}
              defaultValue={rfq.notes ?? ""}
              placeholder="Not visible to the customer."
              className="w-full rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
            />
          </div>

          <button
            type="submit"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
}
