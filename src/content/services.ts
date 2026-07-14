import {
  Globe2,
  ShoppingCart,
  ArrowLeftRight,
  FileSignature,
  Truck,
  ClipboardCheck,
  FileText,
  Workflow,
} from "lucide-react";
import type { ServiceDetail } from "@/types/content";

/** Adapted from content-source/agrisoil content.txt (Ch.1, 3, 5, 6) per Law 2/3 (v5) — compressed and web-edited, meaning and factual scope preserved. Icons match nav.ts. */
export const services: ServiceDetail[] = [
  {
    slug: "international-commodity-sourcing",
    name: "International Commodity Sourcing",
    icon: Globe2,
    summary: "Identifying reliable manufacturers and suppliers that meet your specification.",
    narrative:
      "Rather than purchasing from unknown or inconsistent sources, we build long-term relationships with reliable producers who consistently meet international quality and commercial standards. Every supplier undergoes evaluation on product quality, production capacity, export capability, commercial reliability, documentation standards, logistics performance, communication, and long-term consistency before joining our network.",
    covers: [
      "Supplier identification and qualification against your specification",
      "Evaluation across quality, capacity, and export capability",
      "Multi-origin comparison for price and availability",
      "Ongoing relationship management with sourced suppliers",
    ],
    relatedSlugs: ["global-procurement", "contract-negotiation"],
  },
  {
    slug: "global-procurement",
    name: "Global Procurement",
    icon: ShoppingCart,
    summary: "Spot purchases or long-term supply agreements, matched to how you buy.",
    narrative:
      "Every customer has unique operational requirements. Spot purchases suit customers needing immediate product availability — fast quotations, flexible volumes, and rapid procurement based on current market conditions. Long-term supply agreements suit organizations seeking stable pricing and dependable supply for improved inventory planning. Our commercial team recommends the model that fits your operational needs.",
    covers: [
      "Spot purchases for immediate, flexible-volume needs",
      "Long-term supply agreements for pricing and supply stability",
      "Offer comparison across sourced suppliers",
      "Purchase order structuring matched to what was quoted",
    ],
    relatedSlugs: ["international-commodity-sourcing", "contract-negotiation"],
  },
  {
    slug: "import-export-trading",
    name: "Import & Export Trading",
    icon: ArrowLeftRight,
    summary: "A strategic procurement partner, not a conventional trading intermediary.",
    narrative:
      "We work closely with trusted international suppliers, logistics providers, inspection agencies, and financial institutions to ensure every transaction is executed with precision, efficiency, and complete transparency. Our objective is simple: connect global supply with growing demand while creating long-term value for every customer we serve — supporting both spot purchases and long-term supply agreements tailored to your requirements.",
    covers: [
      "Cross-border purchase and sale coordination",
      "Spot and long-term commercial models",
      "Customs-compliant transaction structuring",
      "Single point of contact through delivery",
    ],
    relatedSlugs: ["contract-negotiation", "trade-documentation"],
  },
  {
    slug: "contract-negotiation",
    name: "Contract Negotiation",
    icon: FileSignature,
    summary: "Competitive pricing and commercial terms, negotiated on your behalf.",
    narrative:
      "We support internationally recognized Incoterms® to provide flexibility across different markets. Under FOB (Free on Board), you assume responsibility once cargo is loaded onto the vessel — suited to buyers managing their own freight. Under CFR (Cost and Freight), we arrange ocean transportation to the destination port while you manage cargo insurance. Under CIF (Cost, Insurance & Freight), we coordinate freight and marine insurance through the destination port, simplifying procurement entirely.",
    covers: [
      "FOB, CFR & CIF terms explained and negotiated for your shipment",
      "Competitive pricing negotiation",
      "Contract preparation for spot and long-term agreements",
      "Contract review before signature",
    ],
    relatedSlugs: ["international-commodity-sourcing", "trade-documentation"],
  },
  {
    slug: "freight-logistics-coordination",
    name: "Freight & Logistics Coordination",
    icon: Truck,
    summary: "Bulk vessel and containerized shipping, coordinated end to end.",
    narrative:
      "Bulk shipping remains the preferred option for large-volume fertilizer and commodity movements — competitive freight costs, large shipment capacity, and reduced unit transportation costs. Containerized cargo offers flexibility for smaller orders and multi-product consignments, with improved cargo protection and faster inland transportation. We work closely with experienced freight partners to secure dependable shipping capacity across major global trade routes, coordinating terminal scheduling, cargo acceptance, vessel booking, and loading supervision.",
    covers: [
      "Bulk vessel coordination for large-volume shipments",
      "Containerized cargo (20ft, 40ft & high cube) for flexible orders",
      "Port coordination and loading supervision",
      "Freight quotation, vessel scheduling & shipment tracking",
    ],
    relatedSlugs: ["supply-chain-management", "trade-documentation"],
  },
  {
    slug: "quality-inspection-coordination",
    name: "Quality Inspection Coordination",
    icon: ClipboardCheck,
    summary: "Certificate of Analysis on every shipment, independent inspection on request.",
    narrative:
      "Every shipment coordinated by Agrisoil is accompanied by a Certificate of Analysis (COA) issued by the manufacturer or authorized laboratory, verifying compliance with agreed commercial specifications. For customers seeking additional assurance, we coordinate independent third-party inspection — product sampling, quantity verification, packaging inspection, loading supervision, and laboratory analysis — through internationally recognized agencies such as SGS, Bureau Veritas, Intertek, or equivalent organizations.",
    covers: [
      "Certificate of Analysis (COA) on every shipment",
      "Independent inspection via SGS, Bureau Veritas, Intertek or equivalent",
      "Pre-loading sampling and loading supervision",
      "Packaging and quantity verification",
    ],
    relatedSlugs: ["trade-documentation", "supply-chain-management"],
  },
  {
    slug: "trade-documentation",
    name: "Trade Documentation",
    icon: FileText,
    summary: "Complete export documentation, prepared and coordinated for you.",
    narrative:
      "Accurate documentation reduces customs delays and ensures smooth international transactions. We prepare and coordinate all essential commercial documentation — Commercial Invoice, Packing List, Certificate of Origin, Certificate of Analysis, Bill of Lading, and Phytosanitary Certificate where applicable — working closely with suppliers, freight companies, and customs brokers to ensure accuracy and compliance across jurisdictions.",
    covers: [
      "Commercial Invoice & Packing List",
      "Certificate of Origin & Certificate of Analysis (COA)",
      "Bill of Lading & Insurance Certificate (CIF shipments)",
      "Phytosanitary and export declarations where required",
    ],
    relatedSlugs: ["quality-inspection-coordination", "contract-negotiation"],
  },
  {
    slug: "supply-chain-management",
    name: "Supply Chain Management",
    icon: Workflow,
    summary: "One coordinated workflow from supplier identification to post-shipment support.",
    narrative:
      "A successful international trade transaction requires precise coordination between manufacturers, shipping lines, freight forwarders, customs authorities, inspection agencies, financial institutions, and customers across multiple countries. At Agrisoil, logistics is not a support function — it is a strategic advantage. We integrate supplier identification, sourcing, negotiation, contract finalization, quality verification, packaging, export documentation, freight booking, customs clearance, and post-shipment support into one coordinated workflow, giving customers a single point of coordination from inquiry to final delivery.",
    covers: [
      "Single point of coordination from inquiry to delivery",
      "Supplier identification through post-shipment support, integrated",
      "Delivery-term flexibility (FOB, CFR, CIF)",
      "Regular updates on production, cargo readiness, and shipping status",
    ],
    relatedSlugs: ["freight-logistics-coordination", "quality-inspection-coordination"],
  },
];

export function findService(slug: string): ServiceDetail | undefined {
  return services.find((service) => service.slug === slug);
}

export function relatedServices(service: ServiceDetail): ServiceDetail[] {
  return (service.relatedSlugs ?? [])
    .map((slug) => findService(slug))
    .filter((s): s is ServiceDetail => Boolean(s));
}
