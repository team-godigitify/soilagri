import { Container } from "@/components/shared/Container";
import { LiveClock } from "@/components/home/LiveClock";
import { marketWatch } from "@/content/home";
import { getLiveCommodityRate } from "@/lib/marketRates";
import { cn } from "@/lib/utils";

const SPARK_WIDTH = 72;
const SPARK_HEIGHT = 24;

function Sparkline({ points, positive }: { points: number[]; positive: boolean }) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;
  const inset = 3;
  const innerHeight = SPARK_HEIGHT - inset * 2;
  const step = SPARK_WIDTH / (points.length - 1);

  const coords = points
    .map((p, i) => {
      const x = i * step;
      const y = inset + innerHeight - ((p - min) / range) * innerHeight;
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg
      width={SPARK_WIDTH}
      height={SPARK_HEIGHT}
      viewBox={`0 0 ${SPARK_WIDTH} ${SPARK_HEIGHT}`}
      className="hidden shrink-0 sm:block"
      aria-hidden="true"
    >
      <polyline
        points={coords}
        fill="none"
        stroke={positive ? "var(--success)" : "var(--destructive)"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function formatPrice(value: number, unit: string) {
  if (unit === "/kg") return value.toFixed(2);
  return Math.round(value).toLocaleString("en-US");
}

/** Compact off-white card widget: commodity name, category pill, sparkline, price + change. */
export async function MarketWatchBand() {
  const rows = await Promise.all(
    marketWatch.items.map(async (item) => {
      const live = item.source === "live" ? await getLiveCommodityRate(item.vantageFn) : null;
      return {
        key: item.key,
        name: item.name,
        category: item.category,
        unit: item.unit,
        isLive: Boolean(live),
        value: live?.value ?? item.sampleValue,
        changePct: live?.changePct ?? item.sampleChangePct,
        trend: live?.trend ?? item.sampleTrend,
      };
    })
  );

  return (
    <section className="bg-background">
      <Container className="py-16 sm:py-20">
        <div className="rounded-2xl border border-border p-5 sm:p-6">
          <div className="flex items-start justify-between gap-3">
            <h2 className="font-heading text-lg font-semibold text-primary">
              {marketWatch.title}
            </h2>
            {/* <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-cta/15 px-2.5 py-1 text-[10px] font-bold tracking-[0.06em] text-cta uppercase">
              <span className="size-1.5 rounded-full bg-cta" aria-hidden="true" />
              Sample Data
            </span> */}
          </div>

          <div className="mt-1.5 flex items-center gap-2 text-xs text-muted-foreground">
            <LiveClock />
            <span aria-hidden="true">·</span>
            <span className="text-[10px] font-bold tracking-[0.08em] text-cta uppercase">
              Illustrative Only
            </span>
          </div>

          <div className="-mx-5 mt-4 overflow-x-auto border-t border-border sm:-mx-6">
            <div className="flex flex-col divide-y divide-border px-5 sm:flex-row sm:divide-y-0 sm:divide-x sm:px-6">
              {rows.map((row) => {
                const positive = row.changePct >= 0;
                return (
                  <div
                    key={row.key}
                    className="flex items-center justify-between gap-3 py-3 sm:min-w-27.5 sm:flex-1 sm:flex-col sm:items-stretch sm:justify-start sm:gap-2 sm:px-4 sm:py-3 sm:first:pl-0 sm:last:pr-0"
                  >
                    <div className="flex min-w-0 items-center gap-2 sm:flex-col sm:items-start sm:gap-0.5">
                      <span className="truncate text-sm font-semibold text-primary">
                        {row.name}
                      </span>
                      <span className="hidden shrink-0 text-[10px] font-semibold tracking-[0.04em] text-muted-foreground uppercase sm:block">
                        {row.category}
                      </span>
                    </div>

                    <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                      <Sparkline points={row.trend} positive={positive} />
                      <div className="flex items-baseline gap-1.5 whitespace-nowrap">
                        <span className="text-sm font-bold text-primary">
                          ${formatPrice(row.value, row.unit)}
                          <span className="ml-0.5 text-[10px] font-medium text-muted-foreground">
                            {row.unit}
                          </span>
                        </span>
                        <span
                          className={cn(
                            "text-xs font-bold",
                            positive ? "text-success" : "text-destructive"
                          )}
                        >
                          {positive ? "+" : ""}
                          {row.changePct.toFixed(2)}%
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
