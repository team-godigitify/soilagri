import Link from "next/link";
import type { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { listRfqs } from "@/lib/db";
import { rfqStatuses, rfqStatusLabels, type RfqStatus } from "@/types/crm";

export const metadata: Metadata = { title: "RFQs" };

const badgeStyles: Record<RfqStatus, string> = {
  new: "",
  contacted: "",
  quoted: "",
  won: "bg-success text-success-foreground",
  lost: "",
};

const badgeVariants: Record<RfqStatus, "default" | "secondary" | "outline" | "destructive"> = {
  new: "default",
  contacted: "secondary",
  quoted: "outline",
  won: "default",
  lost: "destructive",
};

export default async function AdminRfqsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string }>;
}) {
  const { status } = await searchParams;
  const activeStatus = rfqStatuses.includes(status as RfqStatus) ? (status as RfqStatus) : undefined;
  const rfqs = await listRfqs(activeStatus);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="font-heading text-2xl font-semibold text-foreground">RFQ Submissions</h1>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/admin/rfqs"
            className={cn(
              "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
              !activeStatus ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
            )}
          >
            All
          </Link>
          {rfqStatuses.map((s) => (
            <Link
              key={s}
              href={`/admin/rfqs?status=${s}`}
              className={cn(
                "rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors",
                activeStatus === s ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"
              )}
            >
              {rfqStatusLabels[s]}
            </Link>
          ))}
        </div>
      </div>

      {rfqs.length === 0 ? (
        <p className="rounded-2xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
          No RFQs {activeStatus ? `with status "${rfqStatusLabels[activeStatus]}"` : "yet"}.
        </p>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-border bg-card shadow-elevated-xs">
          <table className="w-full min-w-175 border-collapse text-sm">
            <thead>
              <tr className="bg-secondary text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                <th className="px-5 py-3 text-left">Date</th>
                <th className="px-5 py-3 text-left">Name / Company</th>
                <th className="px-5 py-3 text-left">Type</th>
                <th className="px-5 py-3 text-left">Product Interest</th>
                <th className="px-5 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {rfqs.map((rfq) => (
                <tr key={rfq.id} className="border-t border-border transition-colors hover:bg-secondary/50">
                  <td className="px-5 py-3 whitespace-nowrap text-muted-foreground tabular-nums">
                    <Link href={`/admin/rfqs/${rfq.id}`} className="block">
                      {new Date(rfq.createdAt).toLocaleDateString("en-CA")}
                    </Link>
                  </td>
                  <td className="px-5 py-3">
                    <Link href={`/admin/rfqs/${rfq.id}`} className="block font-medium text-foreground hover:underline">
                      {rfq.name}
                      <span className="block text-xs font-normal text-muted-foreground">{rfq.company}</span>
                    </Link>
                  </td>
                  <td className="px-5 py-3 text-muted-foreground capitalize">{rfq.inquiryType}</td>
                  <td className="px-5 py-3 text-muted-foreground">{rfq.productInterest ?? "—"}</td>
                  <td className="px-5 py-3">
                    <Badge variant={badgeVariants[rfq.status]} className={badgeStyles[rfq.status]}>
                      {rfqStatusLabels[rfq.status]}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
