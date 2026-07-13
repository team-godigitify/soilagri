import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { SpecTable } from "@/components/product/SpecTable";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RFQButton } from "@/components/product/RFQButton";
import { RelatedProducts } from "@/components/product/RelatedProducts";
import { SpecializationSection } from "@/components/product/SpecializationSection";
import {
  getAllProducts,
  getCategory,
  getProduct,
  getProductsByCategory,
} from "@/content/products";
import { productJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return getAllProducts().map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);
  const cat = getCategory(category);
  if (!product || !cat) notFound();

  const related = getProductsByCategory(category).filter(
    (p) => p.slug !== product.slug
  );

  const hasDetailBlock =
    product.forms || product.packaging || product.originRegions;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd(product)) }}
      />

      <Container className="flex flex-col gap-12 py-16 sm:py-24">
        <Breadcrumbs
          items={[
            { label: "Products", href: "/products" },
            { label: cat.name, href: `/products/${cat.slug}` },
            { label: product.name },
          ]}
        />

        <Reveal className="flex flex-col gap-4">
          <span className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary uppercase">
            <span className="h-px w-8 bg-cta" aria-hidden="true" />
            {cat.name}
          </span>
          <h1 className="font-heading text-4xl font-medium text-foreground sm:text-5xl">
            {product.name}
          </h1>
          <p className="max-w-[65ch] text-lg text-muted-foreground">
            {product.shortDescription}
          </p>
          {product.capacity ? (
            <Badge variant="secondary" className="w-fit">
              {product.capacity} supply capacity
            </Badge>
          ) : null}
        </Reveal>

        {product.images && product.images.length > 0 ? (
          <Reveal>
            <ProductGallery images={product.images} productName={product.name} />
          </Reveal>
        ) : null}

        <Reveal>
          <p className="max-w-[70ch] text-muted-foreground">{product.overview}</p>
        </Reveal>

        <Reveal className="flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-medium text-foreground">
            Specifications
          </h2>
          <SpecTable specs={product.specs} />
        </Reveal>

        {hasDetailBlock ? (
          <Reveal className="grid grid-cols-1 gap-8 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs sm:grid-cols-3">
            {product.forms ? (
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Forms
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.forms.join(", ")}
                </span>
              </div>
            ) : null}
            {product.packaging ? (
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Packaging
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.packaging.join(", ")}
                </span>
              </div>
            ) : null}
            {product.originRegions ? (
              <div className="flex flex-col gap-1">
                <span className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                  Origin
                </span>
                <span className="text-sm font-medium text-foreground">
                  {product.originRegions.join(", ")}
                </span>
              </div>
            ) : null}
          </Reveal>
        ) : null}

        {product.qualityDocs ? (
          <p className="text-sm text-muted-foreground">
            {product.qualityDocs.join(" · ")}
          </p>
        ) : null}

        <div>
          <RFQButton productName={product.name} />
        </div>

        <SpecializationSection blocks={product.specialization} />

        <RelatedProducts products={related} />
      </Container>
    </>
  );
}
