import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { productCategories, getProductsByCategory } from "@/content/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Agrisoil trades fertilizers, including Urea 46% N and NPK 14-23-14+6S-1B.",
};

export default function ProductsPage() {
  return (
    <Container className="flex flex-col gap-10 py-16">
      <SectionHeading
        eyebrow="Products"
        title="Products"
        description="Currently: fertilizers. Additional commodity categories are on the roadmap."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {productCategories.map((category) => {
          const count = getProductsByCategory(category.slug).length;
          return (
            <Link key={category.slug} href={`/products/${category.slug}`} className="group">
              <Card className="h-full transition-colors group-hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="text-xl">{category.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-1">
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                  <span className="text-xs font-medium text-primary">
                    {count} product{count === 1 ? "" : "s"}
                  </span>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </Container>
  );
}
