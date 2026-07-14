import type { FaqEntry } from "@/types/content";

export type FaqGroup = { category: string; items: FaqEntry[] };

/**
 * Adapted from content-source/agrisoil content.txt Ch.14 per Law 2/3 (v5) —
 * grouped exactly as the source document groups them. Office count/MOQ/
 * payment-terms answers stay in the document's own honest register
 * ("varies," "discussed during negotiation") rather than inventing fixed
 * numbers the document doesn't give.
 */
export const faqGroups: FaqGroup[] = [
  {
    category: "General Questions",
    items: [
      {
        question: "Who is SoilAgri?",
        answer:
          "SoilAgri International Trading Inc. is a Canadian international commodity trading company headquartered in Montreal, Quebec. We specialize in sourcing and supplying premium fertilizers and agricultural commodities through a trusted global network of producers and logistics partners — combining reliable sourcing, transparent communication, quality assurance, and professional logistics coordination.",
      },
      {
        question: "What products does SoilAgri supply?",
        answer:
          "Fertilizers — Urea 46% (Granular & Prilled) and NPK Compound Fertilizers — and agricultural commodities — Wheat, Yellow Corn, Soybeans, and Wood Pulp. Our portfolio continues to evolve based on customer demand and global market opportunities.",
      },
      {
        question: "Where is SoilAgri located?",
        answer:
          "Our head office is in Montreal, Quebec, Canada, with regional offices across North America, South America, Europe, the Middle East, Africa, Asia, and Oceania. See Global Network for the full office list.",
      },
    ],
  },
  {
    category: "Product Questions",
    items: [
      {
        question: "What type of Urea do you supply?",
        answer:
          "Premium-quality Granular and Prilled Urea 46%, sourced from trusted manufacturers in the Middle East, Central Asia, and North Africa. Every shipment includes a Certificate of Analysis (COA), with independent third-party inspection available on request.",
      },
      {
        question: "What agricultural commodities do you supply?",
        answer:
          "Canadian Wheat, Yellow Corn, Soybeans, and Wood Pulp — sourced from internationally recognized producing regions and supplied according to agreed commercial specifications.",
      },
      {
        question: "Can products be customized?",
        answer:
          "Packaging options and shipment sizes may be tailored to your requirements, subject to supplier capabilities and commercial agreement. Discuss your specific requirements with our commercial team during the quotation process.",
      },
    ],
  },
  {
    category: "Procurement & Ordering",
    items: [
      {
        question: "How do I request a quotation?",
        answer:
          "Contact us with the product required, quantity, destination port, preferred Incoterm (FOB, CFR, CIF), packaging preference, required delivery timeframe, and any additional specifications. Our commercial team reviews each enquiry and prepares a detailed quotation.",
      },
      {
        question: "How quickly are quotations provided?",
        answer:
          "Typically within 24 to 48 hours, depending on market conditions, product availability, and requirements. Complex or customized enquiries may require additional coordination with suppliers before pricing is finalized.",
      },
      {
        question: "Do you support long-term supply contracts?",
        answer:
          "Yes — both spot purchases and long-term supply agreements. Long-term contracts help improve procurement planning, enhance supply continuity, and strengthen the commercial relationship.",
      },
      {
        question: "Is there a minimum order quantity (MOQ)?",
        answer:
          "MOQs vary depending on product type, packaging format, country of origin, supplier requirements, and shipping method. Our commercial team works with you to identify the most appropriate solution for your purchasing requirements.",
      },
    ],
  },
  {
    category: "Shipping & Logistics",
    items: [
      {
        question: "Which Incoterms do you support?",
        answer:
          "FOB (Free on Board), CFR (Cost and Freight), and CIF (Cost, Insurance & Freight). Our team can explain each option and recommend the arrangement best suited to your logistics capabilities and destination.",
      },
      {
        question: "Can SoilAgri arrange international shipping?",
        answer:
          "Yes, through experienced freight and shipping partners — ocean freight, container shipments, bulk vessel shipments, export documentation, freight coordination, customs support, and shipment tracking.",
      },
      {
        question: "Do you provide shipment updates?",
        answer:
          "Yes — regular communication covering production progress, cargo readiness, shipment schedules, vessel departures, estimated arrival dates, and documentation status.",
      },
    ],
  },
  {
    category: "Quality Assurance",
    items: [
      {
        question: "How do you ensure product quality?",
        answer:
          "Quality assurance begins with careful supplier selection. Every shipment is supported through supplier verification, product specification review, a Certificate of Analysis, documentation verification, packaging inspection, and shipment coordination — only products meeting agreed specifications proceed to shipment.",
      },
      {
        question: "Can I request independent inspection?",
        answer:
          "Yes. Independent third-party inspection may be arranged before shipment through internationally recognized organizations such as SGS, Bureau Veritas, Intertek, or equivalent providers, with scope depending on your requirements and commercial agreement.",
      },
      {
        question: "Do all shipments include a COA?",
        answer: "Yes — every shipment coordinated by SoilAgri includes a Certificate of Analysis verifying product quality against agreed specifications.",
      },
    ],
  },
  {
    category: "Documentation",
    items: [
      {
        question: "What documents are provided with shipments?",
        answer:
          "Depending on product and destination, documentation may include the Commercial Invoice, Packing List, Bill of Lading, Certificate of Origin, Certificate of Analysis, Insurance Certificate (CIF shipments), Inspection Certificate, Weight Certificate, Export Documentation, and Phytosanitary Certificate where required.",
      },
    ],
  },
  {
    category: "Payments & Commercial Terms",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "Payment terms are established individually for each transaction, depending on product, order value, customer relationship, commercial agreement, and destination country — discussed during contract negotiations.",
      },
      {
        question: "Are prices fixed?",
        answer:
          "Commodity prices are influenced by global market conditions and may change. Formal quotations remain valid only for the period specified in the commercial offer, so confirm orders promptly once pricing is agreed.",
      },
    ],
  },
  {
    category: "Customer Support",
    items: [
      {
        question: "Will I have a dedicated point of contact?",
        answer:
          "Yes. You communicate directly with experienced team members throughout the procurement process, ensuring clear communication and efficient coordination from enquiry through delivery.",
      },
      {
        question: "Can SoilAgri help first-time importers?",
        answer:
          "Absolutely — we regularly support organizations new to international procurement, guiding you through product selection, commercial terms, documentation, shipping arrangements, quality assurance, and import procedures.",
      },
    ],
  },
];

/** Flattened for FAQPage JSON-LD, which doesn't need the category grouping. */
export const faqs: FaqEntry[] = faqGroups.flatMap((group) => group.items);

export type ResourceSection = {
  slug: string;
  title: string;
  intro: string;
  empty: { title: string; body: string };
};

/**
 * News, market commentary, and certificates aren't published yet — Law 3
 * forbids fabricated articles or documents, so each renders an honest
 * EmptyStateBlock rather than placeholder content.
 */
export const resourceSections: ResourceSection[] = [
  {
    slug: "news-insights",
    title: "News & Insights",
    intro: "Company news and market commentary from SoilAgri.",
    empty: {
      title: "No published articles yet",
      body: "SoilAgri's news and insights section is being built out. In the meantime, get in touch directly for market commentary relevant to your enquiry.",
    },
  },
  {
    slug: "market-updates",
    title: "Market Updates",
    intro: "Commentary on fertilizer and commodity market conditions relevant to SoilAgri's trades.",
    empty: {
      title: "No published updates yet",
      body: "Regular market updates aren't published here yet. For current pricing on a specific product, request a quote and we'll include relevant market context in our response.",
    },
  },
  {
    slug: "certificates",
    title: "Certificates",
    intro: "Certification and compliance documentation supporting SoilAgri's shipments.",
    empty: {
      title: "Available on request",
      body: "Certificates aren't published as downloads here yet. Every shipment ships with a Certificate of Analysis — request documentation for a specific product or shipment through Contact.",
    },
  },
];

export function findResourceSection(slug: string): ResourceSection | undefined {
  return resourceSections.find((section) => section.slug === slug);
}
