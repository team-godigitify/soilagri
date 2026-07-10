import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Office } from "@/types/content";

/**
 * Map pin only renders when lat/lng are confirmed (Edge case 5) — a
 * broken or guessed map is worse than an honest address-only card.
 */
export function OfficeCard({ office }: { office: Office }) {
  const hasMap = office.lat !== undefined && office.lng !== undefined;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-lg">
          {office.label}
          {office.isHeadquarters ? (
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
              Headquarters
            </span>
          ) : null}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
        {office.addressLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
        <span>{office.country}</span>
        {hasMap ? (
          <div className="mt-3 h-32 rounded-md bg-muted" aria-hidden />
        ) : null}
      </CardContent>
    </Card>
  );
}
