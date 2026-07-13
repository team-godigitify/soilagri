import type { ProductSpec } from "@/types/content";

/**
 * Renders specs[] exactly — Property | Test method | Value (Section 7.5,
 * step 4). Horizontal-scroll container on mobile, never font-shrink, so
 * spec rows stay legible at any viewport.
 */
export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  const hasTestMethods = specs.some((s) => s.testMethod);

  return (
    <div className="overflow-x-auto rounded-2xl border border-border shadow-elevated-xs">
      <table className="w-full min-w-120 border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-secondary/60 text-left">
            <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Property
            </th>
            {hasTestMethods ? (
              <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                Test method
              </th>
            ) : null}
            <th className="px-5 py-3.5 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.property}
              className={index % 2 === 1 ? "bg-muted/30" : undefined}
            >
              <td className="px-5 py-3.5 font-medium text-foreground">{spec.property}</td>
              {hasTestMethods ? (
                <td className="px-5 py-3.5 text-muted-foreground">
                  {spec.testMethod ?? "—"}
                </td>
              ) : null}
              <td className="px-5 py-3.5 font-medium text-primary">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
