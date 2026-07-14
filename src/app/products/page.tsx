import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { ProductCard } from "@/components/interior/ProductCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { productCategories } from "@/content/nav";
import { productsByCategory } from "@/content/products";

export const metadata: Metadata = {
  title: "Products & Commodities",
  description:
    "Fertilizers, agricultural commodities, and industrial raw materials sourced and traded by SoilAgri.",
};

export default function ProductsPage() {
  const categories = productCategories();

  return (
    <>
      <InnerHero
        eyebrow="Products & Commodities"
        title="What We Trade"
        subhead="Fertilizers, agricultural commodities, and industrial raw materials — sourced against each buyer's specification."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Products & Commodities" }]}
      />

      {categories.map((cat, i) => {
        const items = productsByCategory(cat.category);
        return (
          <section
            key={cat.category}
            className={i % 2 === 0 ? "bg-background py-16 sm:py-20" : "bg-secondary py-16 sm:py-20"}
          >
            <Container className="flex flex-col gap-10">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <SectionIntro eyebrow="Products & Commodities" title={cat.heading} />
                <Link
                  href={`/products/${cat.category}`}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  View all {cat.heading} &rarr;
                </Link>
              </div>
              <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((product) => (
                  <RevealItem key={product.slug}>
                    <ProductCard product={product} />
                  </RevealItem>
                ))}
              </RevealGroup>
            </Container>
          </section>
        );
      })}

      <RFQBand
        heading="Request a Product Enquiry"
        body="Tell us what you're sourcing and we'll respond with a quote in 24–48 hours."
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
