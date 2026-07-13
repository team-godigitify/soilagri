import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCategory } from "@/content/products";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  const keySpec = product.specs[0];
  const category = getCategory(product.category);
  const image = product.images?.[0] ?? category?.image;

  return (
    <Link href={`/products/${product.category}/${product.slug}`} className="group block h-full">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
        {image ? (
          <div className="relative -mx-4 -mt-4 h-40 overflow-hidden rounded-t-2xl">
            <Image
              src={image}
              alt=""
              fill
              sizes="(min-width: 640px) 400px, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ) : null}
        <CardHeader>
          <CardTitle className="font-heading text-xl font-medium">
            {product.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <p className="text-sm text-muted-foreground">
            {product.shortDescription}
          </p>
          {keySpec ? (
            <span className="text-xs font-medium text-primary">
              {keySpec.property}: {keySpec.value}
            </span>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  );
}
