import { cn } from "@/lib/utils";

export type Stat = { value: string; label: string };

/** TrackRecordSplit's metric-row grammar (big number + uppercase label, hairline dividers), standalone. */
export function StatRows({ stats, className }: { stats: Stat[]; className?: string }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex items-center justify-between gap-8 border-b border-border py-3 last:border-b-0 sm:py-4"
        >
          <span className="font-heading text-3xl font-semibold text-primary tabular-nums sm:text-4xl">
            {stat.value}
          </span>
          <span className="max-w-[22ch] text-right text-sm font-medium tracking-[0.04em] text-muted-foreground uppercase">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
