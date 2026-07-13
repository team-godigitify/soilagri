import type { Product } from "@/types/content";
import { stockImages } from "@/content/images";

export const woodPulpProduct: Product = {
  slug: "wood-pulp",
  category: "agricultural-commodities",
  name: "Wood Pulp",
  shortDescription:
    "Bleached kraft wood pulp for paper, tissue, and packaging.",
  overview:
    "Agrisoil supplies bleached kraft wood pulp for paper, tissue, and packaging applications, available in BHKP and BSKP grades.",
  images: [stockImages.stackedLogs],
  packaging: ["200-250 kg bales (typical)"],
  originRegions: ["South America", "Europe", "Asia"],
  specs: [
    {
      property: "Grade",
      value: "BHKP (Bleached Hardwood Kraft Pulp) / BSKP (Bleached Softwood Kraft Pulp)",
    },
    { property: "Brightness", value: "88-90% ISO (typical)" },
    { property: "Moisture", value: "Max 10%" },
    { property: "Sheet weight", value: "200-250 kg bales (typical)" },
  ],
};
