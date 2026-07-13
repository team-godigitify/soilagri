import {
  Building2,
  Users,
  Globe2,
  ShieldCheck,
  FlaskConical,
  Wheat,
  TreeDeciduous,
  ClipboardList,
  ShoppingCart,
  ArrowLeftRight,
  FileSignature,
  Truck,
  ClipboardCheck,
  FileText,
  Workflow,
  Sprout,
  Factory,
  UtensilsCrossed,
  Beef,
  Network,
  Map,
  Ship,
  Newspaper,
  TrendingUp,
  BadgeCheck,
  HelpCircle,
} from "lucide-react";
import type { NavItem } from "@/types/content";

/**
 * Positions Agrisoil as an international commodity trading and supply chain
 * partner — the IA follows a B2B buyer's evaluation journey (who you are →
 * what you trade → how you operate → where you operate → proof → contact)
 * rather than a flat product catalog.
 */
export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    columns: [
      {
        items: [
          {
            label: "Company Overview",
            href: "/about/company-overview",
            description: "Who Agrisoil is and how we work.",
            icon: Building2,
          },
          {
            label: "Leadership",
            href: "/about/leadership",
            description: "The team behind Agrisoil.",
            icon: Users,
          },
          {
            label: "Global Presence",
            href: "/about/global-presence",
            description: "Offices in Montreal, Canada and San Jose, USA.",
            icon: Globe2,
          },
          {
            label: "Why Agrisoil",
            href: "/about/why-agrisoil",
            description: "25+ years of leadership experience in trading.",
            icon: ShieldCheck,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "About Agrisoil",
      title: "A strategic supply partner, not just a trader",
      description:
        "Built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading.",
      cta: { label: "Read Our Story", href: "/about" },
      icon: ShieldCheck,
    },
  },
  {
    label: "Products & Commodities",
    href: "/products",
    columns: [
      {
        heading: "Fertilizers",
        items: [
          { label: "Urea 46% N", href: "/products/fertilizers/urea-46-n", icon: FlaskConical },
          { label: "NPK", href: "/products/fertilizers/npk", icon: FlaskConical },
          { label: "DAP", href: "/products/fertilizers/dap", icon: FlaskConical },
          { label: "MAP", href: "/products/fertilizers/map", icon: FlaskConical },
          { label: "MOP", href: "/products/fertilizers/mop", icon: FlaskConical },
          { label: "SSP", href: "/products/fertilizers/ssp", icon: FlaskConical },
        ],
      },
      {
        heading: "Agricultural Commodities",
        items: [
          { label: "Wheat", href: "/products/agricultural-commodities/wheat", icon: Wheat },
          {
            label: "Yellow Corn",
            href: "/products/agricultural-commodities/yellow-corn",
            icon: Wheat,
          },
          {
            label: "Soybeans",
            href: "/products/agricultural-commodities/soybeans",
            icon: Sprout,
          },
          {
            label: "Barley",
            href: "/products/agricultural-commodities/barley",
            icon: Wheat,
          },
          { label: "Rice", href: "/products/agricultural-commodities/rice", icon: Wheat },
        ],
      },
      {
        heading: "Industrial Raw Materials",
        items: [
          {
            label: "Wood Pulp",
            href: "/products/industrial-raw-materials/wood-pulp",
            icon: TreeDeciduous,
          },
          {
            label: "Sulphur",
            href: "/products/industrial-raw-materials/sulphur",
            icon: FlaskConical,
          },
          {
            label: "Others",
            href: "/products/industrial-raw-materials/others",
            icon: ClipboardList,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Sourcing",
      title: "Request a Product Enquiry",
      description:
        "Tell us what you're sourcing and we'll respond with a quote in 24-48 hours.",
      cta: { label: "Request Product Enquiry", href: "/contact" },
      icon: ClipboardList,
    },
  },
  {
    label: "Services",
    href: "/services",
    columns: [
      {
        items: [
          {
            label: "International Commodity Sourcing",
            href: "/services/international-commodity-sourcing",
            icon: Globe2,
          },
          { label: "Global Procurement", href: "/services/global-procurement", icon: ShoppingCart },
          {
            label: "Import & Export Trading",
            href: "/services/import-export-trading",
            icon: ArrowLeftRight,
          },
          {
            label: "Contract Negotiation",
            href: "/services/contract-negotiation",
            icon: FileSignature,
          },
        ],
      },
      {
        items: [
          {
            label: "Freight & Logistics Coordination",
            href: "/services/freight-logistics-coordination",
            icon: Truck,
          },
          {
            label: "Quality Inspection Coordination",
            href: "/services/quality-inspection-coordination",
            icon: ClipboardCheck,
          },
          {
            label: "Trade Documentation",
            href: "/services/trade-documentation",
            icon: FileText,
          },
          {
            label: "Supply Chain Management",
            href: "/services/supply-chain-management",
            icon: Workflow,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "End to End",
      title: "Complete trading solutions",
      description:
        "From sourcing and procurement to quality inspection, documentation, logistics, and final delivery — coordinated as one transaction.",
      cta: { label: "See Our Services", href: "/services" },
      icon: Workflow,
    },
  },
  {
    label: "Industries",
    href: "/industries",
    columns: [
      {
        items: [
          { label: "Agriculture", href: "/industries/agriculture", icon: Sprout },
          {
            label: "Fertilizer Manufacturers",
            href: "/industries/fertilizer-manufacturers",
            icon: Factory,
          },
          { label: "Food Processing", href: "/industries/food-processing", icon: UtensilsCrossed },
          { label: "Animal Feed", href: "/industries/animal-feed", icon: Beef },
          { label: "Chemical Industry", href: "/industries/chemical-industry", icon: FlaskConical },
        ],
      },
    ],
  },
  {
    label: "Global Network",
    href: "/global-network",
    columns: [
      {
        items: [
          { label: "Supplier Network", href: "/global-network/supplier-network", icon: Network },
          { label: "Buyer Network", href: "/global-network/buyer-network", icon: Users },
          { label: "Trading Regions", href: "/global-network/trading-regions", icon: Map },
          {
            label: "Logistics Partners",
            href: "/global-network/logistics-partners",
            icon: Ship,
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Reach",
      title: "Two offices, six regions served",
      description:
        "Montreal, Canada and San Jose, USA — serving North America, Latin America, Africa, the Middle East, Europe, and Asia-Pacific.",
      cta: { label: "See Our Global Network", href: "/global-network" },
      icon: Globe2,
    },
  },
  {
    label: "Resources",
    href: "/resources",
    columns: [
      {
        items: [
          { label: "News & Insights", href: "/resources/news-insights", icon: Newspaper },
          { label: "Market Updates", href: "/resources/market-updates", icon: TrendingUp },
          { label: "Certificates", href: "/resources/certificates", icon: BadgeCheck },
          { label: "FAQs", href: "/resources/faqs", icon: HelpCircle },
        ],
      },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/** All nav children across every section — the source of truth for dynamic stub routes. */
function allNavChildren() {
  return navItems.flatMap((item) => item.columns?.flatMap((col) => col.items) ?? []);
}

/** Look up a nav child (label/description/icon) by its exact href. */
export function findNavChild(href: string) {
  return allNavChildren().find((child) => child.href === href);
}

/** URL-safe last-segment slugs for every child directly under a given section href (e.g. "/about"). */
export function sectionSlugs(sectionHref: string): string[] {
  const item = navItems.find((nav) => nav.href === sectionHref);
  return (
    item?.columns?.flatMap((col) =>
      col.items
        .filter((child) => child.href.startsWith(`${sectionHref}/`))
        .map((child) => child.href.slice(sectionHref.length + 1))
    ) ?? []
  );
}

/**
 * Products & Commodities is two levels deep (/products/[category]/[slug]),
 * one column per category — derive category + item slugs from the hrefs.
 */
export function productCategories() {
  const productsItem = navItems.find((nav) => nav.href === "/products");
  return (productsItem?.columns ?? []).map((col) => {
    const category = col.items[0]?.href.split("/")[2] ?? "";
    return {
      category,
      heading: col.heading ?? "",
      items: col.items.map((child) => ({
        ...child,
        slug: child.href.split("/")[3] ?? "",
      })),
    };
  });
}
