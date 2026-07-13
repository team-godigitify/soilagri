import type { Product } from "@/types/content";
import { stockImages } from "@/content/images";

export const wheatProduct: Product = {
  slug: "wheat",
  category: "agricultural-commodities",
  name: "Wheat",
  shortDescription: "Milling and feed wheat.",
  overview:
    "Agrisoil supplies milling and feed wheat sourced from Canada, Europe, and other export regions.",
  packaging: ["Bulk", "50 kg bags"],
  originRegions: ["Canada", "Europe", "Other export regions"],
  images: [stockImages.heroWheatField],
  specs: [
    { property: "Grade", value: "Milling & Feed Wheat" },
    { property: "Moisture", value: "Max 14%" },
    { property: "Protein", value: "11.5-13.5% (depending on grade)" },
    { property: "Foreign matter", value: "Max 2%" },
  ],
  specialization: [
    {
      id: "canadian-wheat-classes",
      heading: "Canadian Wheat Classes",
      body: [
        "Canada Western Red Spring (CWRS) — high-protein milling wheat for bread and baking.",
        "Canada Prairie Spring Red (CPSR) — medium-protein wheat for milling and food processing.",
        "Canada Prairie Spring White (CPSW) — white wheat used for noodles, flatbreads, and specialty products.",
        "Canada Western Amber Durum (CWAD) — premium durum wheat for pasta, couscous, and semolina.",
        "Canada Western Soft White Spring (CWSWS) — soft wheat for cakes, cookies, and pastries.",
        "Canada Western General Purpose (CWGP) — multi-purpose wheat for feed and industrial applications.",
        "Canada Eastern White Winter (CEWW) — soft winter wheat primarily used in eastern Canada.",
        "Canada Eastern Red Spring (CERS) — milling wheat produced in eastern Canada.",
      ],
    },
  ],
};
