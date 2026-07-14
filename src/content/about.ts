import {
  Building2,
  Globe2,
  Clock,
  ClipboardCheck,
  Boxes,
  Handshake,
  Sparkles,
  Users,
  Network,
  ShieldCheck,
} from "lucide-react";
import { stockImages } from "@/content/images";
import type { TrustPillar, LeadershipProfile } from "@/types/content";
import { company } from "@/content/company";

/**
 * Adapted from content-source/agrisoil content.txt (Ch.1, 6, 8, 13) per
 * Law 2/3 (v5) — compressed and web-edited for scannability, meaning and
 * factual scope preserved exactly. Voice: SoilAgri (the site's live,
 * wired brand — see [CONFIRM] note in company.ts on the Agrisoil/SoilAgri
 * naming question raised by the source document).
 */
export const companyOverview = {
  eyebrow: "About SoilAgri",
  title: "Who we are, and how we work",
  body: company.aboutSummary,
  image: stockImages.handshake,
  stats: [
    { value: "10", label: "Offices Worldwide" },
    { value: "25+", label: "Years of Leadership Experience" },
    { value: "3", label: "Delivery Terms — FOB, CFR & CIF" },
    { value: "100%", label: "Shipments Certificate-Backed" },
  ],
  note: "Figures reflect SoilAgri's confirmed company profile — office network, leadership experience, supported Incoterms, and Certificate of Analysis practice on every shipment.",
};

export const ourStory = {
  eyebrow: "Our Story",
  title: "Built From Decades of Practical Industry Experience",
  body: "For more than 25 years, our leadership has worked alongside manufacturers, exporters, importers, distributors, and agricultural businesses across multiple international markets. That experience surfaced the challenges buyers face sourcing commodities internationally — inconsistent quality, limited supplier transparency, communication barriers, fluctuating market conditions, and logistical complexity — and SoilAgri was founded to build a more dependable, customer-focused trading model.",
  goals: [
    "Connect buyers with trusted international producers.",
    "Deliver competitive pricing through strategic sourcing.",
    "Simplify global procurement.",
    "Coordinate reliable logistics.",
    "Build long-term business relationships based on trust and performance.",
  ],
};

export const mission = {
  eyebrow: "Our Mission",
  title: "Delivering Reliable Global Trade Solutions That Create Lasting Value",
  body: "We connect global producers with buyers through dependable sourcing, transparent business practices, and integrated supply chain solutions that strengthen international trade and agricultural development. Our mission extends beyond supplying products — we strive to become a trusted business partner that contributes to sustainable growth, food security, and the long-term success of the customers and communities we serve.",
};

export const vision = {
  eyebrow: "Our Vision",
  title: "One of the World's Most Trusted Agricultural Trading Companies",
  body: "We envision a future where international trade is built on transparency, trust, innovation, and responsible business practices — expanding our international presence while maintaining the personalized, family-oriented service that defines our business.",
};

export const purpose = {
  eyebrow: "Our Purpose",
  title: "Connecting Global Supply With Growing Demand",
  body: "Every shipment we coordinate supports farmers, strengthens businesses, enables international commerce, and helps ensure the steady flow of essential commodities across global markets.",
};

/** All six core values from the source document (Ch.1) — the homepage's locked Opportunities band shows three of these (Integrity/Reliability/Excellence); About shows the complete set. */
export const coreValues: TrustPillar[] = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    body: "We conduct business with honesty, transparency, and accountability, ensuring every agreement, quotation, and transaction reflects the highest ethical standards.",
  },
  {
    icon: Handshake,
    title: "Reliability",
    body: "From sourcing and documentation to logistics and delivery, reliability defines every aspect of our operations.",
  },
  {
    icon: Users,
    title: "Customer Commitment",
    body: "We invest time understanding individual business requirements rather than offering standardized services.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    body: "We pursue excellence through continuous improvement, disciplined execution, and attention to detail.",
  },
  {
    icon: Network,
    title: "Partnership",
    body: "We value long-term partnerships with suppliers, customers, logistics providers, and industry stakeholders who share our commitment to quality.",
  },
  {
    icon: Globe2,
    title: "Responsibility",
    body: "Responsible sourcing, ethical conduct, regulatory compliance, and sustainable business practices remain central to our operations.",
  },
];

export const leadershipPrinciples: { title: string; body: string }[] = [
  { title: "Lead With Integrity", body: "Every decision begins with honesty, transparency, and accountability." },
  {
    title: "Build Relationships Before Transactions",
    body: "Long-term partnerships create greater value than short-term commercial gains.",
  },
  {
    title: "Deliver Consistent Value",
    body: "Success is measured not only by products delivered but by the confidence customers place in us.",
  },
  {
    title: "Listen Before Acting",
    body: "Understanding customer needs enables better solutions and stronger relationships.",
  },
  {
    title: "Continuously Improve",
    body: "Markets evolve rapidly, and we remain committed to learning, innovation, and operational improvement.",
  },
  {
    title: "Think Long Term",
    body: "Every investment, partnership, and strategic decision is evaluated with future growth and sustainability in mind.",
  },
];

export const corporateStructure: { title: string; body: string }[] = [
  {
    title: "Executive Leadership",
    body: "Corporate strategy, international growth, commercial direction, and long-term business development.",
  },
  {
    title: "Procurement & Supplier Relations",
    body: "Supplier qualification, sourcing, negotiations, quality standards, and long-term procurement partnerships.",
  },
  {
    title: "Trading & Commercial Operations",
    body: "Quotations, contracts, customer relationships, pricing strategies, and international sales.",
  },
  {
    title: "Logistics & Supply Chain",
    body: "Freight coordination, shipping schedules, customs documentation, cargo tracking, and delivery management.",
  },
  {
    title: "Finance & Administration",
    body: "International transactions, financial reporting, commercial documentation, and operational compliance.",
  },
  {
    title: "Marketing & Business Development",
    body: "International presence, strategic partnerships, and new market opportunities.",
  },
];

/** Quality & Compliance summary for /about (Ch.6) — full depth lives on the Quality Inspection Coordination service page. */
export const qualityCompliance = {
  eyebrow: "Quality & Compliance",
  title: "Quality Is Not a Specification — It's a Commitment",
  body: "From supplier qualification to final delivery, quality assurance is integrated throughout every stage of our operations. Every shipment ships with a Certificate of Analysis (COA); independent third-party inspection — through agencies such as SGS, Bureau Veritas, Intertek, or equivalent organizations — can be arranged on request for additional confidence before cargo leaves the country of origin.",
  pillars: ["Consistency", "Transparency", "Accountability", "Continuous Improvement", "Customer Confidence"],
};

/** Sustainability, Responsibility & Ethical Business (Ch.13) — no dedicated nav slot exists (nav.ts is locked), so this renders as a major /about section rather than a sub-route. */
export const sustainability = {
  eyebrow: "Sustainability & Responsibility",
  title: "A Long-Term Commitment, Not a Single Initiative",
  body: "Sustainability at SoilAgri means conducting business responsibly while creating lasting value for customers, suppliers, employees, communities, and future generations. We recognize that our responsibility extends beyond sourcing and delivering products — every commercial decision influences supply chains, agricultural productivity, and international partnerships.",
  principles: [
    {
      title: "Responsible Sourcing",
      body: "Partnering with reliable producers who maintain consistent quality standards and professional business practices.",
    },
    {
      title: "Ethical Business",
      body: "Conducting every transaction with honesty, transparency, fairness, and accountability.",
    },
    {
      title: "Operational Efficiency",
      body: "Continuously improving logistics, documentation, and supply chain coordination to reduce waste.",
    },
    {
      title: "Long-Term Partnerships",
      body: "Building enduring relationships with customers, suppliers, logistics providers, and communities.",
    },
    {
      title: "Continuous Improvement",
      body: "Regularly evaluating our processes to strengthen quality, service, compliance, and performance.",
    },
  ],
};

export const trustPillars: TrustPillar[] = [
  {
    icon: Building2,
    title: "Canadian Leadership",
    body: "Headquartered in Montreal, Canada, with regional offices supporting customers across ten locations worldwide.",
  },
  {
    icon: Globe2,
    title: "Global Sourcing Network",
    body: "Supplier relationships across the Middle East, Central Asia, North Africa, Canada, the US, South America, and Europe.",
  },
  {
    icon: Clock,
    title: "Fast Commercial Response",
    body: "Quotations are typically provided within 24–48 hours, so you can respond quickly to changing market conditions.",
  },
  {
    icon: ClipboardCheck,
    title: "Documentation & Inspection Support",
    body: "A Certificate of Analysis backs every shipment, with independent inspection coordinated on request.",
  },
  {
    icon: Boxes,
    title: "Flexible Supply Solutions",
    body: "Spot purchases, containerized shipments, bulk cargo, or long-term supply agreements — scoped to your operational requirements.",
  },
  {
    icon: Handshake,
    title: "End-to-End Coordination",
    body: "From supplier selection and contract execution to documentation, freight, customs, and final delivery.",
  },
];

/**
 * Only Vivek Vohra (Founder/CEO) and Csaavi Danykholi (Finance Head) are
 * named unambiguously and consistently across the source document (Ch.1,
 * Ch.8). A "Marketing Head" is referenced only as "Danykholi" with no
 * first name given — not rendered here rather than guessed.
 * [CONFIRM: is the Marketing Head a distinct person, or a document
 * duplication of Csaavi Danykholi's name?]
 */
export const leadership: LeadershipProfile[] = [
  {
    name: company.founderQuote.name,
    title: company.founderQuote.title,
    quote: company.founderQuote.quote,
  },
  {
    name: "Csaavi Danykholi",
    title: "Finance Head",
  },
];

export const globalPresenceSummary = {
  eyebrow: "Global Presence",
  title: "Ten offices, sourcing across six regions",
  body: "SoilAgri combines Canadian leadership with an international sourcing network, coordinating supplier relationships across North America, Latin America, Africa, the Middle East, Europe, and Asia-Pacific from ten offices worldwide.",
};
