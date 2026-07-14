import Image from "next/image";
import Link from "next/link";
import type { ProductDetail } from "@/types/content";

/** Homepage ProductsGrid card grammar, promoted to a standalone catalog tile. */
export function ProductCard({ product }: { product: ProductDetail }) {
  return (
    <Link
      href={`/products/${product.category}/${product.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl bg-secondary shadow-elevated-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <span className="font-heading text-xl font-semibold text-primary">{product.name}</span>
        <span className="text-sm text-muted-foreground">{product.positioning}</span>
        <span className="mt-auto pt-2 text-xs font-semibold tracking-[0.06em] text-primary uppercase">
          FOB &middot; CFR &middot; CIF
        </span>
      </div>
    </Link>
  );
}
