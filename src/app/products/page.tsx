import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { productCategories, getProductsByCategory } from "@/content/products";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Agrisoil trades fertilizers and agricultural commodities, including Urea 46% N, NPK, wheat, corn, soybeans, and wood pulp.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Products"
        description="Fertilizers and agricultural commodities, sourced from trusted international producers."
        image={stockImages.heroWheatField}
      />
      <Container className="py-16 sm:py-24">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {productCategories.map((category) => {
            const count = getProductsByCategory(category.slug).length;
            return (
              <RevealItem key={category.slug}>
                <Link href={`/products/${category.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-elevated">
                    {category.image ? (
                      <div className="relative -mx-4 -mt-4 h-48 overflow-hidden rounded-t-2xl">
                        <Image
                          src={category.image}
                          alt=""
                          fill
                          sizes="(min-width: 640px) 500px, 100vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ) : null}
                    <CardHeader>
                      <CardTitle className="font-heading text-xl font-medium">
                        {category.name}
                      </CardTitle>
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
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </>
  );
}
