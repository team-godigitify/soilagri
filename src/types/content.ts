import type { LucideIcon } from "lucide-react";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavColumn = {
  heading?: string;
  items: NavChild[];
};

export type NavFeatured = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  icon?: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
  /** Flat list — renders as a simple single-column dropdown. */
  children?: NavChild[];
  /** Multi-column layout — renders as a full-width mega menu. */
  columns?: NavColumn[];
  /** Optional highlighted panel shown alongside mega-menu columns. */
  featured?: NavFeatured;
};

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  subhead: string;
  cta: { label: string; href: string };
  image: string;
};

export type MetricItem = {
  value: string;
  label: string;
};

export type MarketWatchItem = {
  key: string;
  name: string;
  category: string;
  unit: string;
  /** Illustrative price/change/trend shown until live data resolves (or always, for non-live rows). */
  sampleValue: number;
  sampleChangePct: number;
  sampleTrend: number[];
} & ({ source: "live"; vantageFn: "WHEAT" | "CORN" } | { source: "sample" });

export type ServiceItem = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export type ProductShowcaseItem = {
  name: string;
  category: string;
  blurb: string;
  image: string;
  href: string;
};

export type NewsItem = {
  date: string;
  title: string;
  href: string;
  image: string;
};

/* ---------------------------------------------------------------------- */
/* Interior-page content contracts — About, Products, Services,           */
/* Industries, Global Network, Resources. Pure data; templates render it. */
/* ---------------------------------------------------------------------- */

export type Office = {
  id: string;
  label: string;
  region: string;
  kind: "hq" | "office";
  address: string;
  email: string;
  /** Approximate city-center coordinates for the office's street address — public geographic fact, used to plot the Contact page map. */
  lat: number;
  lng: number;
};

export type TrustPillar = {
  icon: LucideIcon;
  title: string;
  body: string;
};

export type LeadershipProfile = {
  name: string;
  title: string;
  quote?: string;
  email?: string;
  /** Headshot crop for compact cards (avatar-sized placements). */
  image?: string;
  /** Full-length portrait for the dedicated leadership page's feature treatment. */
  portraitImage?: string;
};

export type ProductApplication = { title: string; body: string };

export type ProductSpecRow = { property: string; method?: string; value: string };

export type ProductCategorySlug =
  | "fertilizers"
  | "agricultural-commodities"
  | "industrial-raw-materials";

export type ProductDetail = {
  slug: string;
  category: ProductCategorySlug;
  name: string;
  /** One-line positioning shown as the hero subhead. */
  positioning: string;
  forms?: string[];
  overviewEyebrow?: string;
  overviewBody: string;
  image: string;
  /** Absent entirely for products without a confirmed spec sheet — the section simply doesn't render (Law 3). */
  specs?: ProductSpecRow[];
  packaging?: string[];
  origins?: string[];
  applications?: ProductApplication[];
  /** Short "why this product performs" bullet list (e.g. Urea's Ch.7 advantages) — absent when not confirmed. */
  advantages?: string[];
  qualityNote?: string;
  logisticsNote?: string;
  /** Slugs of related products (any category) to cross-link at the foot of the page. */
  relatedSlugs?: string[];
};

export type ServiceDetail = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  narrative: string;
  covers: string[];
  relatedSlugs?: string[];
};

export type IndustryProductLink = { category: ProductCategorySlug; slug: string; name: string };

export type IndustryDetail = {
  slug: string;
  name: string;
  icon: LucideIcon;
  summary: string;
  challenge: string;
  image: string;
  /** Customer segments served within this industry (Ch.9) — rendered as InfoChips. */
  servedSegments?: string[];
  relatedProducts?: IndustryProductLink[];
  relatedServiceSlugs?: string[];
};

export type FaqEntry = { question: string; answer: string };
