const ALPHA_VANTAGE_URL = "https://www.alphavantage.co/query";
const TREND_POINTS = 6;

export type LiveCommodityRate = {
  value: number;
  changePct: number;
  trend: number[];
  asOf: string;
};

type AlphaVantageResponse = {
  unit?: string;
  data?: { date: string; value: string }[];
};

/**
 * Global monthly benchmark price (IMF Primary Commodity Price data via
 * Alpha Vantage's free Commodities API). Falls back to the shared "demo"
 * key if ALPHA_VANTAGE_API_KEY isn't set — fine for development, but get
 * a free key at alphavantage.co for production (the demo key is shared
 * across every Alpha Vantage user and rate-limits fast).
 */
export async function getLiveCommodityRate(
  fn: "WHEAT" | "CORN"
): Promise<LiveCommodityRate | null> {
  const apiKey = process.env.ALPHA_VANTAGE_API_KEY || "demo";
  const url = `${ALPHA_VANTAGE_URL}?function=${fn}&interval=monthly&apikey=${apiKey}`;

  try {
    const res = await fetch(url, { next: { revalidate: 21600 } });
    if (!res.ok) return null;

    const json: AlphaVantageResponse = await res.json();
    const series = json.data;
    if (!series || series.length < 2) return null;

    const [latestPoint, previousPoint] = series;
    if (!latestPoint || !previousPoint) return null;

    const latest = Number(latestPoint.value);
    const previous = Number(previousPoint.value);
    if (!Number.isFinite(latest) || !Number.isFinite(previous) || previous === 0) return null;

    const trend = series
      .slice(0, TREND_POINTS)
      .map((point) => Number(point.value))
      .filter(Number.isFinite)
      .reverse();

    return {
      value: latest,
      changePct: ((latest - previous) / previous) * 100,
      trend: trend.length >= 2 ? trend : [previous, latest],
      asOf: latestPoint.date,
    };
  } catch {
    return null;
  }
}
