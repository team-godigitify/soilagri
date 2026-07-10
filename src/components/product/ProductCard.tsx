import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Product } from "@/types/content";

export function ProductCard({ product }: { product: Product }) {
  const keySpec = product.specs[0];

  return (
    <Link href={`/products/${product.category}/${product.slug}`} className="group">
      <Card className="h-full transition-colors group-hover:border-primary/40">
        <CardHeader>
          <CardTitle className="text-xl">{product.name}</CardTitle>
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
