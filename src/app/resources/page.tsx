import type { Metadata } from "next";
import Link from "next/link";
import { FileText } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { FAQSection } from "@/components/contact/FAQSection";
import { SpecTable } from "@/components/product/SpecTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { getAllProducts, getCategory } from "@/content/products";
import { company } from "@/content/company";
import { stockImages } from "@/content/images";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Company profile, product specifications, and frequently asked questions for Agrisoil.",
};

export default function ResourcesPage() {
  const products = getAllProducts();

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Resources"
        description="Company profile, product specifications, and answers to common questions."
        image={stockImages.grainSilos}
      />

      <Container id="company-profile" className="flex flex-col gap-8 scroll-mt-24 py-16 sm:py-24">
        <SectionHeading eyebrow="Company Profile" title="Agrisoil Company Profile" />
        <Reveal>
          <Card className="max-w-xl">
            <CardHeader>
              <FileText className="mb-1 size-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <CardTitle className="font-heading text-lg font-medium">
                Company Profile
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <p className="text-sm text-muted-foreground">
                {company.aboutSummary?.[0]}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link href="/about" className={cn(buttonVariants({ variant: "default" }), "text-sm")}>
                  Read the full profile
                </Link>
                <span className="text-xs text-muted-foreground">
                  Downloadable PDF coming soon
                </span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </Container>

      <Container id="product-specifications" className="flex flex-col gap-10 scroll-mt-24 py-16 sm:py-24">
        <SectionHeading eyebrow="Specifications" title="Product Specifications" />
        <RevealGroup className="flex flex-col gap-10">
          {products.map((product) => {
            const category = getCategory(product.category);
            return (
              <RevealItem key={product.slug} className="flex flex-col gap-3">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-heading text-lg font-medium text-foreground">
                    {product.name}
                  </h3>
                  <Link
                    href={`/products/${product.category}/${product.slug}`}
                    className="text-sm text-primary hover:underline"
                  >
                    View full page →
                  </Link>
                </div>
                <SpecTable specs={product.specs} />
                <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  {category?.name}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>

      <FAQSection />
    </>
  );
}
