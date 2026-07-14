import Link from "next/link";
import { listRfqs } from "@/lib/db";
import { rfqStatuses, rfqStatusLabels } from "@/types/crm";

export default async function AdminDashboardPage() {
  const rfqs = await listRfqs();
  const counts = rfqStatuses.reduce(
    (acc, status) => ({ ...acc, [status]: rfqs.filter((r) => r.status === status).length }),
    {} as Record<string, number>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="font-heading text-2xl font-semibold text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground">{rfqs.length} total RFQ{rfqs.length === 1 ? "" : "s"}.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {rfqStatuses.map((status) => (
          <Link
            key={status}
            href={`/admin/rfqs?status=${status}`}
            className="flex flex-col gap-1 rounded-2xl border border-border bg-card p-5 shadow-elevated-xs transition-shadow hover:shadow-elevated"
          >
            <span className="text-3xl font-semibold text-primary tabular-nums">{counts[status] ?? 0}</span>
            <span className="text-sm font-medium text-muted-foreground">{rfqStatusLabels[status]}</span>
          </Link>
        ))}
      </div>

      <Link href="/admin/rfqs" className="w-fit text-sm font-semibold text-primary hover:underline">
        View all RFQs &rarr;
      </Link>
    </div>
  );
}
