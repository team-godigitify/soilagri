import type { NetworkNode } from "@/components/interior/NetworkMap";

/**
 * Honesty Gate: only entries confirmed in the office list (Section 2.1) or
 * the content document plot here. Positions are stylized lat/long
 * approximations on an abstract graticule (see NetworkMap.tsx), not a
 * literal projection.
 *
 * Ten offices are plotted from content/offices.ts. Three additional
 * fertilizer sourcing regions (Middle East, Central Asia, North Africa —
 * Ch.1/3/4/7) are plotted separately since no office sits in those
 * locations. Wheat/Corn/Soybean/Wood Pulp sourcing regions overlap
 * existing office markers (Canada, US, South America, Europe, Asia) and
 * are presented as the "Sourcing by Product" grid on /global-network
 * instead of stacking redundant map markers on top of office dots.
 */
export const networkNodes: NetworkNode[] = [
  {
    id: "montreal",
    label: "Montreal, Canada",
    kind: "office",
    role: "Head office — executive leadership, international procurement, global supplier management, and commercial operations.",
    x: 29.6,
    y: 24.7,
  },
  {
    id: "houston",
    label: "Houston, USA",
    kind: "office",
    role: "North American regional office supporting customer service and commercial coordination.",
    x: 23.5,
    y: 33.5,
  },
  {
    id: "sao-paulo",
    label: "São Paulo, Brazil",
    kind: "office",
    role: "South American regional office.",
    x: 37.1,
    y: 63.1,
  },
  {
    id: "rotterdam",
    label: "Rotterdam, Netherlands",
    kind: "office",
    role: "European regional office.",
    x: 51.3,
    y: 21.2,
  },
  {
    id: "london",
    label: "London, UK",
    kind: "office",
    role: "European regional office.",
    x: 50,
    y: 21.4,
  },
  {
    id: "dubai",
    label: "Dubai, UAE",
    kind: "office",
    role: "Middle East regional office.",
    x: 65.4,
    y: 36,
  },
  {
    id: "johannesburg",
    label: "Johannesburg, South Africa",
    kind: "office",
    role: "African regional office.",
    x: 57.8,
    y: 64.6,
  },
  {
    id: "nairobi",
    label: "Nairobi, Kenya",
    kind: "office",
    role: "African regional office.",
    x: 60.2,
    y: 50.7,
  },
  {
    id: "singapore",
    label: "Singapore",
    kind: "office",
    role: "Asia-Pacific regional office.",
    x: 78.8,
    y: 49.3,
  },
  {
    id: "sydney",
    label: "Sydney, Australia",
    kind: "office",
    role: "Oceania regional office.",
    x: 92,
    y: 68.8,
  },
  {
    id: "middle-east",
    label: "Middle East",
    kind: "region",
    role: "Large-scale fertilizer manufacturing and export operations.",
    commodities: ["Urea 46%", "NPK"],
    x: 58,
    y: 39,
  },
  {
    id: "central-asia",
    label: "Central Asia",
    kind: "region",
    role: "Nitrogen fertilizer production and export partners.",
    commodities: ["Urea 46%"],
    x: 66,
    y: 27,
  },
  {
    id: "north-africa",
    label: "North Africa",
    kind: "region",
    role: "Strategic fertilizer production and international shipping locations.",
    commodities: ["Urea 46%", "NPK"],
    x: 52.8,
    y: 33.3,
  },
];

/** Commodity → sourcing region, straight from the content document (Ch.1 "International Sourcing Network"). Drives the Sourcing by Product grid rather than duplicating map markers over existing office locations. */
export const sourcingByProduct: { product: string; regions: string[] }[] = [
  { product: "Urea 46% & NPK Fertilizers", regions: ["Middle East", "Central Asia", "North Africa"] },
  { product: "Wheat", regions: ["Canada", "Europe", "Other Export Regions"] },
  { product: "Yellow Corn & Soybeans", regions: ["North America", "South America"] },
  { product: "Wood Pulp", regions: ["South America", "Europe", "Asia"] },
];

export type NetworkSection =
  | {
      slug: string;
      title: string;
      intro: string;
      kind: "regions";
      /** Confirmed regions served — render as InfoChips. */
      regions: string[];
    }
  | {
      slug: string;
      title: string;
      intro: string;
      kind: "list";
      /** Real capability/criteria list drawn from the content document — not named partners. */
      items: string[];
      note?: string;
    };

/** Sourced from the content document, Ch.1 "Markets We Serve" / Ch.3 "Global Procurement Network" / Ch.5 "Ocean Freight Management". No named suppliers, buyers, or carriers — Law 2/3. */
export const networkSections: NetworkSection[] = [
  {
    slug: "supplier-network",
    title: "Supplier Network",
    intro:
      "Rather than purchasing from unknown or inconsistent sources, Agrisoil builds long-term relationships with reliable producers who consistently meet international quality and commercial standards. Every supplier is evaluated on:",
    kind: "list",
    items: [
      "Product quality",
      "Production capacity",
      "Export capability",
      "Commercial reliability",
      "Documentation standards",
      "Logistics performance",
      "Communication",
      "Long-term consistency",
    ],
    note: "A named supplier directory isn't published here — relationships are confirmed per enquiry. Producers interested in a trading relationship with Agrisoil are welcome to get in touch.",
  },
  {
    slug: "buyer-network",
    title: "Buyer Network",
    intro:
      "Agrisoil supplies organizations across diverse industries and geographic markets. Regardless of industry, every customer receives the same commitment to professionalism, transparency, and responsive service.",
    kind: "list",
    items: [
      "Fertilizer Importers & Distributors",
      "Agricultural Cooperatives",
      "Commercial Farms",
      "Commodity Trading Companies",
      "Food Processing Companies",
      "Livestock Feed Manufacturers",
      "Paper & Packaging Industry",
      "Government Procurement Agencies",
    ],
  },
  {
    slug: "trading-regions",
    title: "Trading Regions",
    intro:
      "Agrisoil supports customers across a wide range of geographic markets, responding quickly to changing market requirements while maintaining dependable product availability throughout the year.",
    kind: "regions",
    regions: ["North America", "Latin America", "Africa", "Middle East", "Europe", "Asia-Pacific"],
  },
  {
    slug: "logistics-partners",
    title: "Logistics Partners",
    intro:
      "Agrisoil works closely with experienced freight partners to secure dependable shipping capacity across major global trade routes, coordinating every stage of ocean transportation and port handling.",
    kind: "list",
    items: [
      "Freight quotation",
      "Vessel scheduling & booking confirmation",
      "Transit planning & cargo monitoring",
      "Shipping updates",
      "Arrival coordination",
    ],
    note: "Named carrier and freight-forwarder relationships aren't published here — logistics is coordinated case-by-case, matched to origin, destination, and delivery terms.",
  },
];

export function findNetworkSection(slug: string): NetworkSection | undefined {
  return networkSections.find((section) => section.slug === slug);
}
