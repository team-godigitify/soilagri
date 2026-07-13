import {
  Package,
  Building2,
  Boxes,
  Clock,
  Zap,
  ReceiptText,
  Headset,
  PackageOpen,
  Workflow,
} from "lucide-react";
import type { HeroSlide } from "@/types/content";
import { offices } from "@/content/offices";
import { stockImages } from "@/content/images";
import { getAllProducts } from "@/content/products";

/**
 * DRAFT copy — pending client sign-off (see M0.5 confirmation checklist).
 * Every word here traces to a confirmed fact (Section 5.4 product specs,
 * Section 5.2 office locations) or is reused verbatim from other sections
 * of the site (aboutTeaser / supplyChainTeaser below) — no invented claims,
 * no borrowed tagline. Swap slide 1's headline once the client picks from
 * the 3 options presented.
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
    cta: { label: "See Our Supply Chain", href: "/supply-chain" },
    image: stockImages.cranesLoading,
  },
  {
    eyebrow: "Products",
    headline: "Nitrogen fertilizers to grains and oilseeds",
    subhead:
      "Urea 46% N and blended NPK fertilizers, plus wood pulp, corn, wheat, and soybeans — sourced from trusted producers worldwide.",
    cta: { label: "View Products", href: "/products" },
    image: stockImages.grainSilos,
  },
];

/**
 * Real differentiators, client-confirmed — not the generic "Quality-
 * Assured Sourcing" placeholders the spec warned against. Kept to plain,
 * checkable statements about how Agrisoil actually operates.
 */
export const valueProps = [
  {
    icon: Zap,
    title: "Fast Quotations",
    description: "Quotes turned around in 24-48 hours.",
  },
  {
    icon: ReceiptText,
    title: "Transparent Pricing",
    description: "Competitive, straightforward pricing on every quote.",
  },
  {
    icon: Headset,
    title: "Personalized Support",
    description: "Direct, responsive communication throughout the order.",
  },
  {
    icon: PackageOpen,
    title: "Flexible Supply",
    description: "Supply solutions adapted to the size of your order.",
  },
  {
    icon: Workflow,
    title: "End-to-End Coordination",
    description: "Reliable coordination from sourcing through delivery.",
  },
];

/**
 * Stats band (Section 7.1) — real, countable numbers only. Office count
 * and product count are derived from content/offices.ts and
 * content/products (Law 5) so they update with zero code change.
 */
export const stats = [
  {
    icon: Package,
    value: "50,000",
    label: "tonnes urea capacity",
    footnote: "Per current supply capacity for Urea 46% N.",
  },
  {
    icon: Building2,
    value: String(offices.length),
    label: "North American offices",
    footnote: `${offices.map((o) => o.region).join(" & ")}.`,
  },
  {
    icon: Boxes,
    value: String(getAllProducts().length),
    label: "products traded",
  },
  {
    icon: Clock,
    value: "24-48h",
    label: "typical quote turnaround",
  },
];

export const aboutTeaser = {
  eyebrow: "About Agrisoil",
  title: "A strategic supply partner, not just a trader",
  body: [
    "Agrisoil is a Canadian international commodity trading company connecting global producers with buyers through reliable sourcing, transparent business practices, and efficient supply chain management.",
    "Built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading.",
  ],
  image: stockImages.handshake,
};

export const supplyChainTeaser = {
  eyebrow: "Supply Chain",
  title: "Sourcing to delivery, coordinated end to end",
  body: [
    "We coordinate every stage of the transaction — supplier selection, documentation, freight, and customs — under FOB, CFR, or CIF terms.",
  ],
  list: [
    "Bulk vessel and containerized shipments",
    "Certificate of Analysis with every shipment",
    "Independent third-party inspection on request",
  ],
  image: stockImages.cranesLoading,
};

