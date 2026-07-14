import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { ProductCard } from "@/components/interior/ProductCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { productCategories } from "@/content/nav";
import { productsByCategory } from "@/content/products";

export function generateStaticParams() {
  return productCategories().map(({ category }) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category } = await params;
  const match = productCategories().find((c) => c.category === category);
  if (!match) return { title: "Products" };
  return {
    title: match.heading,
    description: `${match.heading} sourced and traded by SoilAgri, quoted against each buyer's specification.`,
  };
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const match = productCategories().find((c) => c.category === category);
  if (!match) notFound();

  const items = productsByCategory(category);

  return (
    <>
      <InnerHero
        eyebrow="Products & Commodities"
        title={match.heading}
        subhead="Sourced against each buyer's specification, packaging, and delivery terms."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products & Commodities", href: "/products" },
          { label: match.heading },
        ]}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((product) => (
              <RevealItem key={product.slug}>
                <ProductCard product={product} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <RFQBand
        heading={`Request a Quote — ${match.heading}`}
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
