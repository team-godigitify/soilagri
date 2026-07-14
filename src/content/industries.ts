import { Sprout, Factory, UtensilsCrossed, Beef, FlaskConical } from "lucide-react";
import { stockImages } from "@/content/images";
import type { IndustryDetail } from "@/types/content";

/**
 * Adapted from content-source/agrisoil content.txt (Ch.9) per Law 2/3 (v5).
 * "Fertilizer Manufacturers" and "Chemical Industry" are nav.ts entries
 * (locked) without an exact Ch.9 counterpart — mapped to the closest
 * confirmed material (Ch.7's "Fertilizer Blending Companies" segment and
 * Ch.9's "Industrial Manufacturers" respectively) rather than inventing
 * sector-specific claims the document doesn't make.
 */
export const industries: IndustryDetail[] = [
  {
    slug: "agriculture",
    name: "Agriculture",
    icon: Sprout,
    summary: "Fertilizers and agricultural commodities that support farmers across diverse climatic conditions.",
    challenge:
      "Agriculture remains the foundation of global food production, and access to reliable agricultural inputs is essential for consistent yields and sustainable growth. We supply fertilizers and agricultural commodities that support farmers across diverse climatic conditions and farming systems — our role extends beyond product supply to reliable procurement, timely delivery, and consistent quality throughout every growing season.",
    image: stockImages.handsInSoil,
    servedSegments: [
      "Commercial Farms",
      "Family-Owned Farms",
      "Agricultural Cooperatives",
      "Plantation Companies",
      "Horticultural Producers",
      "Greenhouse Operators",
      "Seed Producers",
    ],
    relatedProducts: [
      { category: "fertilizers", slug: "urea-46-n", name: "Urea 46% N" },
      { category: "fertilizers", slug: "npk", name: "NPK" },
      { category: "agricultural-commodities", slug: "wheat", name: "Wheat" },
    ],
    relatedServiceSlugs: ["international-commodity-sourcing", "supply-chain-management"],
  },
  {
    slug: "fertilizer-manufacturers",
    name: "Fertilizer Manufacturers",
    icon: Factory,
    summary: "Premium raw nutrient inputs for manufacturers blending their own fertilizer formulations.",
    challenge:
      "Fertilizer blending companies rely on premium raw materials — nitrogen, phosphorus, and potassium sources — to produce their own custom formulations at the volumes their production runs require. We support regional and national distributors and blenders through dependable sourcing, flexible commercial arrangements, competitive international pricing, and integrated logistics, whether they're managing seasonal demand or year-round inventory.",
    image: stockImages.grainSilos,
    servedSegments: ["Fertilizer Distributors", "Fertilizer Blending Companies", "Regional & National Distributors"],
    relatedProducts: [
      { category: "fertilizers", slug: "urea-46-n", name: "Urea 46% N" },
      { category: "fertilizers", slug: "npk", name: "NPK" },
      { category: "fertilizers", slug: "dap", name: "DAP" },
    ],
    relatedServiceSlugs: ["global-procurement", "quality-inspection-coordination"],
  },
  {
    slug: "food-processing",
    name: "Food Processing",
    icon: UtensilsCrossed,
    summary: "Consistent access to premium agricultural commodities for flour milling, grain processing, and food manufacturing.",
    challenge:
      "Food manufacturers depend on consistent access to premium agricultural commodities to maintain production quality and operational efficiency — flour milling, grain processing, food ingredients, edible oil production, and starch manufacturing. High-quality wheat is essential for premium flour: we supply multiple Canadian wheat classes suited to bread production, pasta manufacturing, bakery products, noodles, and specialty flour, with every shipment managed against agreed specifications.",
    image: stockImages.seedlingsPropagation,
    servedSegments: ["Flour Millers", "Grain Processors", "Food Manufacturers", "Edible Oil Producers"],
    relatedProducts: [
      { category: "agricultural-commodities", slug: "wheat", name: "Wheat" },
      { category: "agricultural-commodities", slug: "yellow-corn", name: "Yellow Corn" },
      { category: "agricultural-commodities", slug: "soybeans", name: "Soybeans" },
    ],
    relatedServiceSlugs: ["international-commodity-sourcing", "trade-documentation"],
  },
  {
    slug: "animal-feed",
    name: "Animal Feed",
    icon: Beef,
    summary: "Feed-grade commodities with consistent nutritional characteristics for poultry, dairy, and livestock.",
    challenge:
      "Feed manufacturers require dependable agricultural commodities with consistent nutritional characteristics for poultry feed, dairy feed, swine feed, beef production, and aquaculture. We supply feed-grade yellow corn and soybeans sourced from major exporting regions across North and South America — reliable supply that contributes directly to healthier livestock and more efficient feed production.",
    image: stockImages.wheatFieldSunset,
    servedSegments: ["Poultry Feed Manufacturers", "Dairy Feed Manufacturers", "Livestock Producers", "Aquaculture"],
    relatedProducts: [
      { category: "agricultural-commodities", slug: "yellow-corn", name: "Yellow Corn" },
      { category: "agricultural-commodities", slug: "soybeans", name: "Soybeans" },
      { category: "agricultural-commodities", slug: "barley", name: "Barley" },
    ],
    relatedServiceSlugs: ["international-commodity-sourcing", "freight-logistics-coordination"],
  },
  {
    slug: "chemical-industry",
    name: "Chemical Industry",
    icon: FlaskConical,
    summary: "Stable access to carefully sourced industrial raw materials for manufacturing processes.",
    challenge:
      "Industrial manufacturers require stable access to high-quality raw materials. Our commercial team works closely with customers to understand technical specifications, delivery schedules, and quality expectations before coordinating supply — the same sourcing discipline and quality verification we apply across our fertilizer and agricultural commodity portfolio.",
    image: stockImages.cargoShipPort,
    relatedProducts: [
      { category: "industrial-raw-materials", slug: "wood-pulp", name: "Wood Pulp" },
      { category: "industrial-raw-materials", slug: "sulphur", name: "Sulphur" },
    ],
    relatedServiceSlugs: ["quality-inspection-coordination", "contract-negotiation"],
  },
];

export function findIndustry(slug: string): IndustryDetail | undefined {
  return industries.find((industry) => industry.slug === slug);
}
