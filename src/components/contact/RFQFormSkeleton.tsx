/**
 * Matches the real RFQForm's approximate height (8 fields + submit
 * button) so hydration doesn't shift the page — the earlier fallback of
 * `null` measured CLS 0.39 in Lighthouse, well past the <0.1 budget
 * (Section 9).
 */
export function RFQFormSkeleton() {
  return (
    <div className="flex flex-col gap-5" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-2">
          <div className="h-4 w-24 rounded bg-muted" />
          <div className="h-8 w-full rounded-lg bg-muted" />
        </div>
      ))}
      <div className="h-11 w-40 rounded-lg bg-muted" />
    </div>
  );
}
