import type { CompanyInfo } from "@/types/content";

/**
 * Sourced from the client-provided company profile document. legalName /
 * registrationNumber / headOffice are the registered numbered company
 * (Section 5.1 of the build spec); tradeName is the name the client
 * document uses consistently ("Agrisoil International Trading Inc.") —
 * treated as a trade name for the same registered entity, not a
 * replacement for it. founded / generalPhone remain unset — no specific
 * founding year or phone line was given, only "25+ years of leadership
 * experience," which is a claim about the founder, not the company's age.
 */
export const company: CompanyInfo = {
  legalName: "9542-2309 Québec Inc.",
  tradeName: "Agrisoil International Trading Inc.",
  brandName: "Agrisoil",
  registrationNumber: "1180957798",
  headOffice: "204-6424 Jean-Talon EST, Montreal, QC H1S 1M8, Canada",
  founded: undefined,
  tagline: "Cultivating Growth. Connecting Markets. Building Tomorrow.",
  aboutSummary: [
    "Agrisoil is a Canadian international commodity trading company dedicated to connecting global producers with buyers through reliable sourcing, transparent business practices, and efficient supply chain management.",
    "Headquartered in Montreal, Canada, Agrisoil specializes in the international trade of fertilizers and agricultural commodities, serving customers across North America and global markets. By building long-term relationships with trusted producers throughout the Middle East, Central Asia, North Africa, Europe, and the Americas, the company provides dependable access to high-quality products supported by professional logistics and responsive customer service.",
    "Built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading, Agrisoil serves as a strategic supply partner rather than a simple intermediary — coordinating procurement, quality assurance, documentation, logistics, and delivery for every transaction.",
  ],
  mission:
    "Agrisoil's mission is to connect global producers with buyers through dependable sourcing, transparent business practices, and integrated supply chain solutions that strengthen international trade and agricultural development.",
  vision:
    "Agrisoil envisions a future where international trade is built on transparency, trust, innovation, and responsible business practices — becoming one of the world's most trusted agricultural trading companies.",
  values: [
    {
      title: "Integrity",
      description:
        "We conduct business with honesty, transparency, and accountability in every agreement, quotation, and transaction.",
    },
    {
      title: "Reliability",
      description:
        "From sourcing and documentation to logistics and delivery, customers depend on us to deliver exactly what is promised.",
    },
    {
      title: "Customer Commitment",
      description:
        "We invest time understanding each customer's requirements rather than offering standardized services.",
    },
    {
      title: "Excellence",
      description:
        "We pursue continuous improvement and disciplined execution at every stage of the procurement process.",
    },
    {
      title: "Partnership",
      description:
        "We build long-term relationships with suppliers, customers, and logistics partners rather than one-off transactions.",
    },
    {
      title: "Responsibility",
      description:
        "Every business decision considers customers, suppliers, employees, and communities alongside commercial success.",
    },
  ],
  founderQuote: {
    quote:
      "Agrisoil was established with a clear objective — to create a company that customers could rely on not only for quality products but also for honest advice, responsive communication, and dependable execution. Every shipment represents more than a commercial transaction; it reflects the trust our customers place in us.",
    name: "Vivek Vohra",
    title: "Founder, CEO & Managing Director",
  },
  whyAgrisoil: [
    "More than 25 years of leadership experience across international fertilizer and agricultural commodity markets.",
    "A global supplier network across the Middle East, Central Asia, North Africa, Canada, the United States, South America, and Europe.",
    "Fast commercial response — quotations typically within 24-48 hours.",
    "Transparent, competitive pricing without unnecessary complexity.",
    "Flexible supply solutions — spot purchases, containerized shipments, bulk cargo, or long-term agreements.",
    "End-to-end coordination — supplier selection, documentation, freight, customs, and delivery managed as one transaction.",
    "Every shipment backed by a Certificate of Analysis (COA), with independent third-party inspection available on request.",
  ],
  marketsServed: [
    "North America",
    "Latin America",
    "Africa",
    "Middle East",
    "Europe",
    "Asia-Pacific",
  ],
  generalPhone: undefined,
  generalEmail: "vivek@agrisoil.com",
};
