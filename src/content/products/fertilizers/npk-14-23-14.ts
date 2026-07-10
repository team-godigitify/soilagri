import type { Product } from "@/types/content";

/**
 * Translated from the client's French spec sheet (Section 5.4) — values
 * only, no rewording of the underlying numbers. The sheet's "label in
 * French" clause is a bag-labeling requirement for the target export
 * market, not a website locale requirement (Section 3.4) — not applied
 * here.
 */
export const npkProduct: Product = {
  slug: "npk-14-23-14",
  category: "fertilizers",
  name: "NPK 14-23-14+6S-1B",
  shortDescription:
    "Blended granular fertilizer — N14 / P₂O₅23 / K₂O14 / S6 / B1.",
  overview:
    "NPK 14-23-14+6S-1B is a granular blended fertilizer supplying nitrogen, phosphorus, potassium, sulfur, and boron in a single formulation.",
  forms: ["Granular"],
  packaging: ["50 kg PP bags, PE liner 60–70 μm"],
  specs: [
    { property: "Nitrogen (N)", value: "14%" },
    { property: "Phosphorus (P₂O₅)", value: "23%" },
    { property: "Potassium (K₂O)", value: "14%" },
    { property: "Sulfur (S)", value: "6%" },
    { property: "Boron (B)", value: "1%" },
    { property: "Moisture", value: "≤1%" },
    { property: "Hardness", value: ">2.5 kgf (avg)" },
    { property: "Breakage", value: "<5%" },
  ],
};
