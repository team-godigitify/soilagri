import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProductCard } from "@/components/product/ProductCard";
import type { Product } from "@/types/content";

/**
 * Only renders with ≥2 related products (Section 7.5, step 8) — a
 * "related products" row with a single card reads as padding.
 */
export function RelatedProducts({ products }: { products: Product[] }) {
  if (products.length < 2) return null;

  return (
    <div className="flex flex-col gap-6">
      <SectionHeading title="Related Products" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
