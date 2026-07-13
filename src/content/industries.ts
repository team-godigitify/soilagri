import {
  Tractor,
  Truck,
  Users,
  Landmark,
  TrendingUp,
  Wheat,
  Beef,
  Package2,
} from "lucide-react";

/**
 * Real buyer-category descriptions from the company profile document
 * (Chapter 9) — categories only, no client names (Law 1).
 */
export const industries = [
  {
    icon: Tractor,
    title: "Agriculture & Farming",
    description:
      "Fertilizers and agricultural commodities supplied to commercial farms, cooperatives, plantation companies, and horticultural producers.",
    products: "Urea, NPK, Wheat, Corn, Soybeans",
  },
  {
    icon: Truck,
    title: "Fertilizer Importers & Distributors",
    description:
      "Reliable supply programs, competitive pricing, and integrated logistics for regional and national fertilizer distributors.",
    products: "Urea, NPK",
  },
  {
    icon: Users,
    title: "Agricultural Cooperatives",
    description:
      "Stable product availability and seasonal procurement planning for cooperatives supplying member farmers.",
    products: "Urea, NPK, agricultural commodities",
  },
  {
    icon: Landmark,
    title: "Government Procurement Programs",
    description:
      "International sourcing and export documentation supporting public-sector agricultural development initiatives.",
    products: "Urea, NPK, agricultural commodities",
  },
  {
    icon: TrendingUp,
    title: "Commodity Trading Companies",
    description:
      "Spot market opportunities and long-term supply contracts for international trading partners.",
    products: "All product lines",
  },
  {
    icon: Wheat,
    title: "Food Processing & Flour Milling",
    description:
      "Premium Canadian wheat classes and agricultural commodities supporting flour milling, grain processing, and food manufacturing.",
    products: "Wheat, Corn, Soybeans",
  },
  {
    icon: Beef,
    title: "Livestock Feed Manufacturers",
    description:
      "Feed-grade commodities suitable for poultry, dairy, swine, and aquaculture nutrition.",
    products: "Corn, Soybeans, Wheat",
  },
  {
    icon: Package2,
    title: "Paper & Packaging Industry",
    description:
      "Bleached hardwood and softwood kraft pulp for tissue, printing, writing, and packaging paper manufacturers.",
    products: "Wood Pulp (BHKP / BSKP)",
  },
];
