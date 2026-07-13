export type SupplyChainSection = {
  id: string;
  title: string;
  body?: string[];
  list?: string[];
};

export const incoterms = [
  {
    code: "FOB",
    name: "Free on Board",
    description: "Buyer manages freight and insurance from the export port.",
    whoArranges: "Buyer arranges ocean freight",
    freightBy: "Buyer",
    insuranceBy: "Buyer",
    bestFor: "Buyers managing their own freight arrangements",
  },
  {
    code: "CFR",
    name: "Cost and Freight",
    description:
      "We arrange ocean freight to the destination port; buyer manages marine insurance.",
    whoArranges: "Agrisoil arranges ocean freight",
    freightBy: "Agrisoil",
    insuranceBy: "Buyer",
    bestFor: "Buyers who want freight handled, insurance kept separate",
  },
  {
    code: "CIF",
    name: "Cost, Insurance & Freight",
    description:
      "We arrange both freight and marine insurance to the destination port.",
    whoArranges: "Agrisoil arranges freight & insurance",
    freightBy: "Agrisoil",
    insuranceBy: "Agrisoil",
    bestFor: "Buyers wanting a fully coordinated door-to-port solution",
  },
];

/**
 * Real, client-confirmed operational copy from the company profile
 * document (Chapters 3 & 5) — kept specific rather than padded.
 */
export const supplyChainSections: SupplyChainSection[] = [
  {
    id: "sourcing",
    title: "Sourcing",
    body: [
      "We source fertilizers and agricultural commodities from trusted international producers, evaluated on product quality, production capacity, export capability, and long-term consistency.",
    ],
    list: [
      "Fertilizers — Middle East, Central Asia, North Africa",
      "Wheat — Canada, Europe, other export regions",
      "Corn & Soybeans — North & South America",
      "Wood Pulp — South America, Europe, Asia",
    ],
  },
  {
    id: "trading",
    title: "Trading",
    body: [
      "We support both spot purchases and long-term supply agreements, tailored to each customer's procurement planning and risk tolerance.",
    ],
    list: [
      "Spot purchases — fast quotations, flexible volumes",
      "Long-term supply agreements — pricing stability, supply continuity",
    ],
  },
  {
    id: "shipping-methods",
    title: "Shipping Methods",
    body: [
      "Bulk vessel shipments are the preferred option for large-volume fertilizer and commodity movements. Container shipping offers flexibility for smaller orders and multi-product consignments.",
    ],
    list: [
      "Bulk vessel — competitive freight cost, large shipment capacity",
      "20ft / 40ft / high-cube containers — flexible order sizes, faster inland transport",
    ],
  },
  {
    id: "logistics",
    title: "Incoterms & Logistics",
    body: [
      "We coordinate international shipments under FOB, CFR, and CIF terms through reliable freight partners.",
    ],
  },
  {
    id: "quality-compliance",
    title: "Quality & Compliance",
    body: [
      "Every shipment includes a Certificate of Analysis (COA) verifying product quality against agreed specifications, with independent third-party inspection available on request.",
    ],
    list: [
      "Commercial Invoice, Packing List, Bill of Lading",
      "Certificate of Origin, Certificate of Analysis (COA)",
      "Phytosanitary Certificate, where applicable",
      "Independent inspection via SGS, Bureau Veritas, Intertek, or equivalent, on request",
    ],
  },
  {
    id: "risk-management",
    title: "Risk Management",
    body: [
      "Commodity markets are affected by changing global conditions. We manage risk through diversified sourcing, advance shipment planning, and continuous communication.",
    ],
    list: [
      "Diversified supplier and origin network",
      "Advance shipment and logistics planning",
      "Continuous shipment status communication",
    ],
  },
];
