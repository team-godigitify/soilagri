import { MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Office } from "@/types/content";

/**
 * Map pin only renders when lat/lng are confirmed (Edge case 5) — a
 * broken or guessed map is worse than an honest address-only card.
 */
export function OfficeCard({ office }: { office: Office }) {
  const hasMap = office.lat !== undefined && office.lng !== undefined;

  return (
    <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
            <MapPin className="size-5" aria-hidden="true" strokeWidth={1.75} />
          </span>
          {office.isHeadquarters ? (
            <Badge variant="secondary" className="text-[0.65rem]">
              Headquarters
            </Badge>
          ) : null}
        </div>
        <CardTitle className="mt-2 font-heading text-lg font-medium">
          {office.label}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
        {office.addressLines.map((line) => (
          <span key={line}>{line}</span>
        ))}
        <span>{office.country}</span>
        {hasMap ? (
          <div className="mt-3 h-32 rounded-lg bg-muted" aria-hidden />
        ) : null}
      </CardContent>
    </Card>
  );
}
