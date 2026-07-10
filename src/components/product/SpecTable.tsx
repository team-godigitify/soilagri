import type { ProductSpec } from "@/types/content";

/**
 * Renders specs[] exactly — Property | Test method | Value (Section 7.5,
 * step 4). Horizontal-scroll container on mobile, never font-shrink, so
 * spec rows stay legible at any viewport.
 */
export function SpecTable({ specs }: { specs: ProductSpec[] }) {
  const hasTestMethods = specs.some((s) => s.testMethod);

  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[480px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50 text-left">
            <th className="px-4 py-3 font-medium text-foreground">
              Property
            </th>
            {hasTestMethods ? (
              <th className="px-4 py-3 font-medium text-foreground">
                Test method
              </th>
            ) : null}
            <th className="px-4 py-3 font-medium text-foreground">Value</th>
          </tr>
        </thead>
        <tbody>
          {specs.map((spec, index) => (
            <tr
              key={spec.property}
              className={
                index % 2 === 1 ? "bg-muted/20" : undefined
              }
            >
              <td className="px-4 py-3 text-foreground">{spec.property}</td>
              {hasTestMethods ? (
                <td className="px-4 py-3 text-muted-foreground">
                  {spec.testMethod ?? "—"}
                </td>
              ) : null}
              <td className="px-4 py-3 text-muted-foreground">
                {spec.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
