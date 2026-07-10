import type { Product, ProductCategory } from "@/types/content";
import { ureaProduct } from "@/content/products/fertilizers/urea-46-n";
import { npkProduct } from "@/content/products/fertilizers/npk-14-23-14";

/**
 * Extensible category registry (Law 3 / Section 3.3) — adding a category
 * or product later is a content-only change; no route or component code
 * changes. Only "fertilizers" ships today. Other categories are not
 * listed at all (not even as "coming soon") since a product roadmap
 * beyond fertilizers is unconfirmed — listing one would imply a
 * commitment the client hasn't made (Law 1).
 */
export const productCategories: ProductCategory[] = [
  {
    slug: "fertilizers",
    name: "Fertilizers",
    description: "Nitrogen and blended NPK fertilizers.",
    isLive: true,
  },
];

const productsByCategory: Record<string, Product[]> = {
  fertilizers: [ureaProduct, npkProduct],
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
