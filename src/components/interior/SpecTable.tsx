import { cn } from "@/lib/utils";

export type SpecRow = { property: string; method?: string; value: string };

/** Bordered rounded-2xl card, Label-role header row, hairline dividers. Never font-shrinks on mobile — scrolls instead. Test Method column only renders when at least one row actually carries one, so an unconfirmed method never renders as a silent "—". */
export function SpecTable({ rows, className }: { rows: SpecRow[]; className?: string }) {
  const hasMethod = rows.some((row) => row.method);

  return (
    <div
      className={cn(
        "overflow-x-auto rounded-2xl border border-border bg-card shadow-elevated-xs",
        className
      )}
    >
      <table className="w-full min-w-100 border-collapse text-sm">
        <thead>
          <tr className="bg-secondary text-xs font-semibold tracking-[0.08em] text-muted-foreground uppercase">
            <th className="px-5 py-3 text-left">Property</th>
            {hasMethod && <th className="px-5 py-3 text-left">Test Method</th>}
            <th className="px-5 py-3 text-left">Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.property} className="border-t border-border">
              <td className="px-5 py-3 font-medium text-foreground">{row.property}</td>
              {hasMethod && <td className="px-5 py-3 text-muted-foreground">{row.method ?? "—"}</td>}
              <td className="px-5 py-3 font-semibold tabular-nums text-primary">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
