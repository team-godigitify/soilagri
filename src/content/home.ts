import {
  Sprout,
  FlaskConical,
  TreeDeciduous,
  Wheat,
  ShieldCheck,
  Handshake,
  Sparkles,
} from "lucide-react";
import { stockImages } from "@/content/images";
import type {
  HeroSlide,
  MetricItem,
  MarketWatchItem,
  ServiceItem,
  ProductShowcaseItem,
  NewsItem,
} from "@/types/content";

/**
 * DRAFT copy — pending client sign-off. Every figure traces to the
 * confirmed company profile (src/content/company.ts); no invented claims.
 */
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Fertilizers & Agricultural Commodities",
    headline: "Fertilizer trading built on measurable specs and dependable delivery.",
    subhead:
      "SoilAgri trades fertilizers and agricultural commodities from offices in Montreal, Canada and San Jose, USA.",
    cta: { label: "Request a Quote", href: "/contact" },
    image: stockImages.heroWheatField,
  },
  {
    eyebrow: "About SoilAgri",
    headline: "A strategic supply partner, not just a trader",
    subhead:
      "Built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading.",
    cta: { label: "Learn More About Us", href: "/about" },
    image: stockImages.handshake,
  },
  {
    eyebrow: "Supply Chain",
    headline: "Sourcing to delivery, coordinated end to end",
    subhead:
      "We coordinate every stage of the transaction — supplier selection, documentation, freight, and customs — under FOB, CFR, or CIF terms.",
    cta: { label: "See Our Supply Chain", href: "/services/supply-chain-management" },
    image: stockImages.cargoShipPort,
  },
];

export const marketWatch = {
  title: "SoilAgri Market Watch",
  items: [
    {
      key: "urea",
      name: "Urea 46% N",
      category: "Fertilizers",
      unit: "/MT",
      source: "sample",
      sampleValue: 349,
      sampleChangePct: -1.8,
      sampleTrend: [360, 355, 358, 352, 347, 349],
    },
    {
      key: "wheat",
      name: "Wheat",
      category: "Grains",
      unit: "/MT",
      source: "live",
      vantageFn: "WHEAT",
      sampleValue: 220,
      sampleChangePct: 1.2,
      sampleTrend: [210, 213, 211, 215, 218, 220],
    },
    {
      key: "soybean",
      name: "Soybeans",
      category: "Grains",
      unit: "/MT",
      source: "sample",
      sampleValue: 402,
      sampleChangePct: 0.8,
      sampleTrend: [395, 397, 393, 398, 400, 402],
    },
    {
      key: "activated-carbon",
      name: "Activated Carbon",
      category: "Industrial Inputs",
      unit: "/MT",
      source: "sample",
      sampleValue: 1480,
      sampleChangePct: -0.5,
      sampleTrend: [1500, 1495, 1490, 1488, 1483, 1480],
    },
    {
      key: "corn",
      name: "Yellow Corn",
      category: "Grains",
      unit: "/MT",
      source: "live",
      vantageFn: "CORN",
      sampleValue: 215,
      sampleChangePct: 0.5,
      sampleTrend: [208, 210, 209, 212, 214, 215],
    },
    {
      key: "lamb",
      name: "Lamb",
      category: "Proteins",
      unit: "/kg",
      source: "sample",
      sampleValue: 6.85,
      sampleChangePct: 1.2,
      sampleTrend: [6.7, 6.72, 6.75, 6.78, 6.82, 6.85],
    },
    {
      key: "chicken",
      name: "Chicken",
      category: "Proteins",
      unit: "/kg",
      source: "sample",
      sampleValue: 2.15,
      sampleChangePct: -0.6,
      sampleTrend: [2.2, 2.19, 2.17, 2.16, 2.14, 2.15],
    },
    {
      key: "fish",
      name: "Fish",
      category: "Proteins",
      unit: "/kg",
      source: "sample",
      sampleValue: 4.3,
      sampleChangePct: 0.4,
      sampleTrend: [4.2, 4.24, 4.22, 4.27, 4.29, 4.3],
    },
  ] satisfies MarketWatchItem[],
};

export const trackRecord = {
  eyebrow: "About SoilAgri",
  headline: ["We Offer a Deeper", "Understanding of Market Needs"],
  body: "We coordinate procurement, quality assurance, documentation, logistics, and delivery for every transaction — built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading.",
  image: stockImages.grainSilos,
  metrics: [
    { value: "1", label: "Founder-Led Since Day One" },
    { value: "3", label: "Global Delivery Terms — FOB, CFR & CIF" },
    { value: "5", label: "Sourcing Regions Worldwide" },
    { value: "100%", label: "Shipments Certificate-Backed" },
  ] satisfies MetricItem[],
  note: "Figures reflect SoilAgri's confirmed company profile — founder Vivek Vohra's leadership, supported Incoterms, active sourcing regions, and Certificate of Analysis practice on every shipment.",
};

export const services: ServiceItem[] = [
  { icon: FlaskConical, name: "Urea 46% N", href: "/products/fertilizers" },
  { icon: FlaskConical, name: "NPK 14-23-14+6S-1B", href: "/products/fertilizers" },
  {
    icon: TreeDeciduous,
    name: "Wood Pulp",
    href: "/products/agricultural-commodities",
  },
  { icon: Wheat, name: "Yellow Corn", href: "/products/agricultural-commodities" },
  { icon: Wheat, name: "Wheat", href: "/products/agricultural-commodities" },
  { icon: Sprout, name: "Soybeans", href: "/products/agricultural-commodities" },
];

export const productShowcase: ProductShowcaseItem[] = [
  {
    name: "Urea 46% N",
    category: "Fertilizer",
    blurb: "High-analysis nitrogen fertilizer for staple crop programs",
    image: stockImages.grainSilos,
    href: "/products/fertilizers/urea-46-n",
  },
  {
    name: "NPK 14-23-14+6S-1B",
    category: "Fertilizer",
    blurb: "Balanced blend for demanding soil and crop needs",
    image: stockImages.handsInSoil,
    href: "/products/fertilizers/npk",
  },
  {
    name: "Wood Pulp",
    category: "Industrial Raw Material",
    blurb: "Bulk pulp supply for paper and packaging manufacturers",
    image: stockImages.cranesLoading,
    href: "/products/industrial-raw-materials/wood-pulp",
  },
  {
    name: "Yellow Corn",
    category: "Agricultural Commodity",
    blurb: "Feed-grade corn for livestock and processing markets",
    image: stockImages.heroWheatField,
    href: "/products/agricultural-commodities/yellow-corn",
  },
  {
    name: "Wheat",
    category: "Agricultural Commodity",
    blurb: "Milling-grade wheat for flour and feed markets",
    image: stockImages.wheatFieldSunset,
    href: "/products/agricultural-commodities/wheat",
  },
  {
    name: "Soybeans",
    category: "Agricultural Commodity",
    blurb: "Whole soybeans for crush, feed, and export markets",
    image: stockImages.seedlingsPropagation,
    href: "/products/agricultural-commodities/soybeans",
  },
];

export const supplyChainSpotlight = {
  headline: ["Cultivating Growth,", "Connecting Markets."],
  subheadline: "Building Tomorrow.",
  line1: "We coordinate supplier selection, documentation, freight, and customs for every transaction.",
  line2: "Every shipment is backed by a Certificate of Analysis and independent inspection on request.",
  primaryCta: { label: "Request a Quote", href: "/contact" },
  secondaryCta: { label: "See Our Supply Chain", href: "/services/supply-chain-management" },
  image: stockImages.cargoShipPort,
};

export const qualitySpotlight = {
  headline: ["Most fertilizer shipments", "never meet their spec sheet."],
  body: "Off-spec nutrient content, contamination, and inconsistent grading can undercut a shipment before it reaches port — which is why every SoilAgri shipment is backed by a Certificate of Analysis and independent inspection on request.",
  image: stockImages.grainSilos,
};

export const foodSecure = {
  eyebrow: "Our Commitment",
  title: "Striving for dependable, transparent trade",
  highlight: "transparent trade",
  body: "We conduct business with honesty and accountability in every agreement, quotation, and transaction — building relationships with suppliers, customers, and logistics partners rather than one-off deals.",
  cta: { label: "Discover More", href: "/about" },
  image: stockImages.wheatFieldSunset,
};

export const opportunities = {
  breadcrumb: "SoilAgri · Our Values",
  heading: "Our Values",
  statement: "Creating reliable partnerships.",
  body: "We invest time understanding each customer's requirements rather than offering standardized services, and we pursue continuous improvement and disciplined execution at every stage of the procurement process.",
  cta: { label: "Discover More", href: "/about" },
  image: stockImages.handshake,
  values: [
    { icon: ShieldCheck, label: "Integrity" },
    { icon: Handshake, label: "Reliability" },
    { icon: Sparkles, label: "Excellence" },
  ],
};

export const newsItems: NewsItem[] = [
  {
    date: "Draft",
    title: "SoilAgri expands supplier network across Central Asia and North Africa",
    href: "/resources",
    image: stockImages.cargoShipPort,
  },
  {
    date: "Draft",
    title: "New Certificate of Analysis process rolled out across all fertilizer shipments",
    href: "/resources",
    image: stockImages.seedlingsPropagation,
  },
  {
    date: "Draft",
    title: "SoilAgri opens second North American office in San Jose, USA",
    href: "/resources",
    image: stockImages.cranesLoading,
  },
];
