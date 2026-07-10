import { offices } from "@/content/offices";

/**
 * DRAFT copy — pending client sign-off (see M0.5 confirmation checklist).
 * Every word here traces to a confirmed fact (Section 5.4 product specs,
 * Section 5.2 office locations). No invented claims, no borrowed tagline.
 * Swap `headline` once the client picks from the 3 options presented.
 */
export const heroContent = {
  headline: "Fertilizer trading built on measurable specs and dependable delivery.",
  subhead:
    "Agrisoil trades Urea 46% N and NPK 14-23-14+6S-1B fertilizers from offices in Montreal, Canada and San Jose, USA.",
};

/**
 * Stats band (Section 7.1) — footnoted, real numbers only. Office count is
 * derived from content/offices.ts so a 3rd office updates this with zero
 * code change (Law 5). Ships with 2 stats, not padded to 3.
 */
export const stats = [
  {
    value: "50,000",
    label: "tonnes urea supply capacity",
    footnote: "Per current supply capacity for Urea 46% N.",
  },
  {
    value: String(offices.length),
    label: "North American offices",
    footnote: `${offices.map((o) => o.region).join(" & ")}.`,
  },
];

/**
 * Home product teaser — names and specs come straight from Section 5.4.
 * Links to /products (live) rather than product detail pages, which don't
 * exist until M3, so nothing on the page is clickable before it's real.
 */
export const teaserProducts = [
  {
    name: "Urea 46% N",
    blurb: "Nitrogen fertilizer, min. 46% N (ISO 5315).",
  },
  {
    name: "NPK 14-23-14+6S-1B",
    blurb: "Blended granular fertilizer — N14 / P₂O₅23 / K₂O14 / S6 / B1.",
  },
];

export const learnMoreLinks = [
  {
    title: "Capabilities",
    description: "Sourcing, trading, logistics, and quality & compliance.",
    href: "/capabilities",
  },
  {
    title: "Offices",
    description: "Our footprint across North America.",
    href: "/offices",
  },
  {
    title: "About",
    description: "Who we are and how we operate.",
    href: "/about",
  },
];
