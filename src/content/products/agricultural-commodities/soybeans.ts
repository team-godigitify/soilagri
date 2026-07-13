import type { Product } from "@/types/content";
import { stockImages } from "@/content/images";

export const soybeansProduct: Product = {
  slug: "soybeans",
  category: "agricultural-commodities",
  name: "Soybeans",
  shortDescription: "GMO and non-GMO soybeans.",
  overview:
    "Agrisoil supplies GMO and non-GMO soybeans sourced from North and South America.",
  images: [stockImages.soybeanSeeds],
  packaging: ["Bulk", "50 kg bags"],
  originRegions: ["North America", "South America"],
  specs: [
    { property: "Type", value: "GMO & Non-GMO" },
    { property: "Moisture", value: "Max 13%" },
    { property: "Protein", value: "Min 35-38%" },
    { property: "Oil content", value: "Min 18-20%" },
    { property: "Foreign matter", value: "Max 2%" },
  ],
};
