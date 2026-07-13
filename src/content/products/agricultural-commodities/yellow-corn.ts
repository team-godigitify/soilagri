import type { Product } from "@/types/content";
import { stockImages } from "@/content/images";

export const yellowCornProduct: Product = {
  slug: "yellow-corn",
  category: "agricultural-commodities",
  name: "Yellow Corn",
  shortDescription: "Feed grade yellow corn.",
  overview:
    "Agrisoil supplies feed grade yellow corn sourced from North and South America.",
  images: [stockImages.cornKernels],
  packaging: ["Bulk", "50 kg bags"],
  originRegions: ["North America", "South America"],
  specs: [
    { property: "Grade", value: "Feed Grade" },
    { property: "Moisture", value: "Max 14%" },
    { property: "Foreign matter", value: "Max 2%" },
    { property: "Broken kernels", value: "Max 5%" },
  ],
};
