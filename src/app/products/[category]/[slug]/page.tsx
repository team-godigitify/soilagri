import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { ContentSplit } from "@/components/interior/ContentSplit";
import { SpecTable } from "@/components/interior/SpecTable";
import { InfoChips } from "@/components/interior/InfoChips";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { AnchorSubnav } from "@/components/interior/AnchorSubnav";
import { RFQBand } from "@/components/interior/RFQBand";
import { WipeReveal } from "@/components/shared/WipeReveal";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { productCategories } from "@/content/nav";
import { findProduct, relatedProducts, whySourceCards, canadianWheatClasses } from "@/content/products";
import { stockImages } from "@/content/images";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return productCategories().flatMap(({ category, items }) =>
    items.map((item) => ({ category, slug: item.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = findProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.positioning,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const categoryMatch = productCategories().find((c) => c.category === category);
  const product = findProduct(slug);
  if (!categoryMatch || !product || product.category !== category) notFound();

  const related = relatedProducts(product);
  const categoryLabel = categoryMatch.heading;
  const isFlagship = product.slug === "urea-46-n";
  const isWheat = product.slug === "wheat";

  const heroChips = [
    ...(product.forms ?? []),
    ...(product.origins ? [`${product.origins.length} Sourcing Region${product.origins.length > 1 ? "s" : ""}`] : []),
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            productJsonLd(product),
            breadcrumbJsonLd([
              { name: "Home", url: "/" },
              { name: "Products & Commodities", url: "/products" },
              { name: categoryLabel, url: `/products/${category}` },
              { name: product.name, url: `/products/${category}/${product.slug}` },
            ]),
          ]),
        }}
      />

      <InnerHero
        eyebrow={isFlagship ? "Flagship Product" : (product.overviewEyebrow ?? categoryLabel)}
        title={product.name}
        subhead={product.positioning}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Products & Commodities", href: "/products" },
          { label: categoryLabel, href: `/products/${category}` },
          { label: product.name },
        ]}
        primaryCta={{ label: "Request a Quote", href: `/contact?product=${product.slug}` }}
        image={isFlagship ? product.image : undefined}
      />

      {isWheat && (
        <AnchorSubnav
          items={[
            { id: "overview", label: "Overview" },
            { id: "why-agrisoil", label: "Why Agrisoil" },
            { id: "wheat-classes", label: "Wheat Classes" },
            { id: "specifications", label: "Specifications" },
            { id: "applications", label: "Applications" },
          ]}
        />
      )}

      {heroChips.length > 0 && (
        <Container className="py-8">
          <InfoChips items={heroChips} />
        </Container>
      )}

      <div id={isWheat ? "overview" : undefined} className={isWheat ? "scroll-mt-32" : undefined}>
        <ContentSplit
          eyebrow="Overview"
          title={`Sourcing ${product.name}`}
          body={product.overviewBody}
          image={product.image}
        />
      </div>

      <section
        id={isWheat ? "why-agrisoil" : undefined}
        className={`bg-secondary py-16 sm:py-20 ${isWheat ? "scroll-mt-32" : ""}`}
      >
        <Container className="flex flex-col gap-10">
          <SectionIntro eyebrow="Why Agrisoil" title="Why Source It Through Agrisoil" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whySourceCards.map((card) => (
              <RevealItem key={card.title}>
                <IconTileCard icon={card.icon} title={card.title} description={card.body} href={card.href} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {isFlagship && (
        <section className="bg-primary bg-grain py-16 text-primary-foreground sm:py-20">
          <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal className="flex flex-col gap-5">
              <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
                <span className="h-px w-10 bg-cta" aria-hidden="true" />
                Fertilizer Excellence
              </span>
              <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance sm:text-4xl">
                The World&apos;s Most Widely Used Nitrogen Fertilizer
              </h2>
              <p className="max-w-[52ch] text-primary-foreground/80">
                Healthy crops require balanced nutrition throughout every stage of growth. Urea provides an
                efficient nutrient source that supports vigorous plant growth, healthy foliage, and increased
                crop productivity — recognized and accepted throughout international agricultural markets.
              </p>
              {product.advantages && (
                <ul className="grid gap-2.5 pt-2 sm:grid-cols-2">
                  {product.advantages.map((advantage) => (
                    <li key={advantage} className="flex items-start gap-2.5 text-sm text-primary-foreground/90">
                      <Check className="mt-0.5 size-4 shrink-0 text-cta" aria-hidden="true" />
                      {advantage}
                    </li>
                  ))}
                </ul>
              )}
            </Reveal>
            <WipeReveal className="relative h-72 overflow-hidden rounded-3xl sm:h-96" origin="right">
              <Image
                src={stockImages.handsInSoil}
                alt=""
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </WipeReveal>
          </Container>
        </section>
      )}

      {isWheat && (
        <section id="wheat-classes" className="scroll-mt-32 bg-background py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionIntro
              eyebrow="Flour Milling"
              title="Canadian Wheat Classes"
              lede="Agrisoil supplies multiple Canadian wheat classes to meet diverse customer requirements, each suited to different milling and baking applications."
            />
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {canadianWheatClasses.map((wheatClass) => (
                <RevealItem
                  key={wheatClass.code}
                  className="flex flex-col gap-2 rounded-3xl bg-secondary p-6"
                >
                  <span className="font-heading text-xs font-bold tracking-widest text-cta uppercase">
                    {wheatClass.code}
                  </span>
                  <span className="font-heading text-base font-semibold text-foreground">{wheatClass.name}</span>
                  <span className="text-sm text-muted-foreground">{wheatClass.description}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {product.specs && (
        <section
          id={isWheat ? "specifications" : undefined}
          className={`bg-secondary py-16 sm:py-20 ${isWheat ? "scroll-mt-32" : ""}`}
        >
          <Container className="flex flex-col gap-8">
            <SectionIntro eyebrow="Specifications" title="Technical Specifications" />
            <SpecTable rows={product.specs} />
          </Container>
        </section>
      )}

      {(product.packaging || product.origins) && (
        <section className="bg-background py-16 sm:py-20">
          <Container className="grid gap-10 sm:grid-cols-2">
            {product.packaging && (
              <Reveal className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-primary">Packaging Options</h3>
                <InfoChips items={product.packaging} />
              </Reveal>
            )}
            {product.origins && (
              <Reveal className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-primary">Available Origins</h3>
                <InfoChips items={product.origins} />
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {product.applications && (
        <section
          id={isWheat ? "applications" : undefined}
          className={`bg-secondary py-16 sm:py-20 ${isWheat ? "scroll-mt-32" : ""}`}
        >
          <Container className="flex flex-col gap-10">
            <SectionIntro eyebrow="Use Cases" title="Applications" />
            <RevealGroup className="grid gap-6 sm:grid-cols-3">
              {product.applications.map((application) => (
                <RevealItem
                  key={application.title}
                  className="rounded-3xl bg-card p-6 shadow-elevated-xs ring-1 ring-foreground/8"
                >
                  <h4 className="font-heading text-base font-semibold text-foreground">{application.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{application.body}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {(product.qualityNote || product.logisticsNote) && (
        <section className="bg-background py-16 sm:py-20">
          <Container className="grid gap-10 sm:grid-cols-2">
            {product.qualityNote && (
              <Reveal className="flex flex-col gap-3">
                <h3 className="font-heading text-xl font-semibold text-primary">Quality Standards</h3>
                <p className="max-w-[48ch] text-muted-foreground">{product.qualityNote}</p>
              </Reveal>
            )}
            {product.logisticsNote && (
              <Reveal className="flex flex-col gap-3">
                <h3 className="font-heading text-xl font-semibold text-primary">Logistics & Shipping</h3>
                <p className="max-w-[48ch] text-muted-foreground">{product.logisticsNote}</p>
              </Reveal>
            )}
          </Container>
        </section>
      )}

      {related.length >= 2 && (
        <section className="bg-secondary py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <SectionIntro eyebrow="Related" title="Related Products" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/products/${rp.category}/${rp.slug}`}
                  className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-elevated-xs ring-1 ring-foreground/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={rp.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1 p-5">
                    <span className="font-heading text-base font-semibold text-foreground">{rp.name}</span>
                    <span className="text-sm text-muted-foreground">{rp.positioning}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <RFQBand
        heading={`Request a Quote for ${product.name}`}
        body="Share your required volume, packaging, and delivery terms — we'll respond within 24–48 hours."
        cta={{ label: "Request a Quote", href: `/contact?product=${product.slug}` }}
      />
    </>
  );
}
