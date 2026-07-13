import type { Product } from "@/types/content";
import { stockImages } from "@/content/images";

/**
 * Spec table values are exact from Section 5.4 of the build spec — do not
 * round, reword, or add rows. `qualityDocs` is omitted pending client
 * confirmation of what documentation is actually provided.
 */
export const ureaProduct: Product = {
  slug: "urea-46-n",
  category: "fertilizers",
  name: "Urea 46% N",
  shortDescription: "Nitrogen fertilizer with a minimum 46% N content.",
  overview:
    "Urea 46% N is a nitrogen fertilizer supplied by Agrisoil, with a minimum nitrogen content of 46% per ISO 5315.",
  capacity: "50,000 tonnes",
  images: [stockImages.ureaGranules],
  forms: ["Granular", "Prilled"],
  packaging: ["50 kg bags", "500 kg jumbo bags", "1,000 kg jumbo bags", "Bulk"],
  originRegions: ["Middle East", "Central Asia", "North Africa"],
  specs: [
    { property: "Nitrogen", testMethod: "ISO 5315", value: "Min 46%" },
    { property: "Moisture", testMethod: "ISO 2753", value: "Max 0.5%" },
    { property: "Biuret", testMethod: "ISO 2754", value: "Max 1%" },
    {
      property: "Particle size (2–4 mm)",
      testMethod: "ISO 8397",
      value: "Min 90%",
    },
    {
      property: "Formaldehyde",
      testMethod: "BS-6806-1",
      value: "Max 0.55%",
    },
  ],
};
