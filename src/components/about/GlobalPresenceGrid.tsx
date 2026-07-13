import { Globe2 } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";

/** Decorative flight-path abstraction — not a literal map, just a premium backdrop. */
function RouteLines() {
  return (
    <svg
      viewBox="0 0 800 300"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 h-full w-full text-primary-foreground/15"
      aria-hidden="true"
    >
      <path
        d="M40 220 Q 220 40 420 140 T 760 90"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      <path
        d="M20 90 Q 250 260 480 180 T 780 220"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
      {[
        [40, 220],
        [420, 140],
        [760, 90],
        [20, 90],
        [480, 180],
        [780, 220],
      ].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="currentColor" />
      ))}
    </svg>
  );
}

export function GlobalPresenceGrid({ markets }: { markets: string[] }) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary py-14">
      <RouteLines />
      <div className="relative px-6 sm:px-10">
        <RevealGroup className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {markets.map((market) => (
            <RevealItem
              key={market}
              className="flex flex-col items-center gap-3 rounded-xl bg-primary-foreground/8 px-4 py-6 text-center backdrop-blur-sm"
            >
              <Globe2
                className="size-6 text-cta"
                aria-hidden="true"
                strokeWidth={1.75}
              />
              <span className="text-sm font-medium text-primary-foreground">
                {market}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </div>
  );
}
