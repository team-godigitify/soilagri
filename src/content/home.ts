import {
  Package,
  Building2,
  Boxes,
  Clock,
  Sprout,
  FlaskConical,
  TreeDeciduous,
  Wheat,
  ShieldCheck,
  Handshake,
  Sparkles,
} from "lucide-react";
import { stockImages } from "@/content/images";
import type { HeroSlide, StatItem, ServiceItem, NewsItem } from "@/types/content";

/**
 * DRAFT copy — pending client sign-off. Every figure traces to the
 * confirmed company profile (src/content/company.ts); no invented claims.
 */
export const heroSlides: HeroSlide[] = [
  {
    eyebrow: "Fertilizers & Agricultural Commodities",
    headline: "Fertilizer trading built on measurable specs and dependable delivery.",
    subhead:
      "Agrisoil trades fertilizers and agricultural commodities from offices in Montreal, Canada and San Jose, USA.",
    cta: { label: "Request a Quote", href: "/contact" },
    image: stockImages.heroWheatField,
  },
  {
    eyebrow: "About Agrisoil",
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

export const stats: StatItem[] = [
  { icon: Clock, value: "25+", label: "Years of Leadership Experience" },
  { icon: Building2, value: "2", label: "North American Offices" },
  { icon: Boxes, value: "6", label: "Products Traded" },
  { icon: Package, value: "24-48h", label: "Typical Quote Turnaround" },
];

export const feature = {
  eyebrow: "About Agrisoil",
  title: "A strategic supply partner, built on 25 years of experience",
  body: "Agrisoil connects global producers with buyers through reliable sourcing, transparent business practices, and efficient supply chain management — coordinating procurement, quality assurance, documentation, logistics, and delivery for every transaction.",
  cta: { label: "Learn More", href: "/about" },
  image: stockImages.grainSilos,
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

export const growth = {
  eyebrow: "Supply Chain",
  title: "Firm foundations for dependable growth",
  body: "We build long-term relationships with trusted producers across the Middle East, Central Asia, North Africa, Europe, and the Americas — backing every shipment with a Certificate of Analysis and independent inspection on request.",
  cta: { label: "Discover More", href: "/services/supply-chain-management" },
  image: stockImages.handsInSoil,
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
  eyebrow: "Our Values",
  title: "Creating Reliable Partnerships",
  body: "We invest time understanding each customer's requirements rather than offering standardized services, and we pursue continuous improvement and disciplined execution at every stage of the procurement process.",
  cta: { label: "Discover More", href: "/about" },
  image: stockImages.cranesLoading,
  values: [
    { icon: ShieldCheck, label: "Integrity" },
    { icon: Handshake, label: "Reliability" },
    { icon: Sparkles, label: "Excellence" },
  ],
};

export const newsItems: NewsItem[] = [
  {
    date: "Draft",
    title: "Agrisoil expands supplier network across Central Asia and North Africa",
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
    title: "Agrisoil opens second North American office in San Jose, USA",
    href: "/resources",
    image: stockImages.cranesLoading,
  },
];
