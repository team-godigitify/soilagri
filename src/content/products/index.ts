import type { Product, ProductCategory } from "@/types/content";
import { stockImages } from "@/content/images";
import { ureaProduct } from "@/content/products/fertilizers/urea-46-n";
import { npkProduct } from "@/content/products/fertilizers/npk-14-23-14";
import { woodPulpProduct } from "@/content/products/agricultural-commodities/wood-pulp";
import { yellowCornProduct } from "@/content/products/agricultural-commodities/yellow-corn";
import { wheatProduct } from "@/content/products/agricultural-commodities/wheat";
import { soybeansProduct } from "@/content/products/agricultural-commodities/soybeans";

/**
 * Extensible category registry (Law 3 / Section 3.3) — adding a category
 * or product later is a content-only change; no route or component code
 * changes.
 */
export const productCategories: ProductCategory[] = [
  {
    slug: "fertilizers",
    name: "Fertilizers",
    description: "Nitrogen and blended NPK fertilizers.",
    isLive: true,
    image: stockImages.cargoShipPort,
  },
  {
    slug: "agricultural-commodities",
    name: "Agricultural Commodities",
    description: "Wood pulp, grains, and oilseeds.",
    isLive: true,
    image: stockImages.grainSilos,
  },
];

const productsByCategory: Record<string, Product[]> = {
  fertilizers: [ureaProduct, npkProduct],
  "agricultural-commodities": [
    woodPulpProduct,
    yellowCornProduct,
    wheatProduct,
    soybeansProduct,
  ],
};

export function getCategory(slug: string): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(slug: string): Product[] {
  return productsByCategory[slug] ?? [];
}

export function getAllProducts(): Product[] {
  return Object.values(productsByCategory).flat();
}

export function getProduct(
  categorySlug: string,
  productSlug: string
): Product | undefined {
  return getProductsByCategory(categorySlug).find(
    (p) => p.slug === productSlug
  );
}
