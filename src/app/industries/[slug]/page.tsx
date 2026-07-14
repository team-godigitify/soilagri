import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { ContentSplit } from "@/components/interior/ContentSplit";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { InfoChips } from "@/components/interior/InfoChips";
import { ProductCard } from "@/components/interior/ProductCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { sectionSlugs } from "@/content/nav";
import { findIndustry } from "@/content/industries";
import { findProduct } from "@/content/products";
import { findService } from "@/content/services";

export function generateStaticParams() {
  return sectionSlugs("/industries").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) return { title: "Industry" };
  return { title: industry.name, description: industry.summary };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = findIndustry(slug);
  if (!industry) notFound();

  const relatedProducts = (industry.relatedProducts ?? [])
    .map((link) => findProduct(link.slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
  const relatedServices = (industry.relatedServiceSlugs ?? [])
    .map((s) => findService(s))
    .filter((s): s is NonNullable<typeof s> => Boolean(s));

  return (
    <>
      <InnerHero
        eyebrow="Industries"
        title={industry.name}
        subhead={industry.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Industries", href: "/industries" },
          { label: industry.name },
        ]}
        primaryCta={{ label: "Request a Quote", href: "/contact" }}
      />

      <ContentSplit
        eyebrow="The Challenge"
        title="What We Solve For"
        body={industry.challenge}
        image={industry.image}
      >
        {industry.servedSegments && (
          <div className="flex flex-col gap-3 pt-2">
            <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Who We Serve
            </span>
            <InfoChips items={industry.servedSegments} />
          </div>
        )}
      </ContentSplit>

      {relatedProducts.length > 0 && (
        <section className="bg-secondary py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <SectionIntro eyebrow="Relevant Products" title="Products for This Industry" />
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((product) => (
                <RevealItem key={product.slug}>
                  <ProductCard product={product} />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-background py-16 sm:py-20">
          <Container className="flex flex-col gap-6">
            <SectionIntro eyebrow="Relevant Services" title="How We Support This Industry" />
            <Reveal className="flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <service.icon className="size-4" aria-hidden="true" strokeWidth={1.75} />
                  {service.name}
                </a>
              ))}
            </Reveal>
          </Container>
        </section>
      )}

      <RFQBand
        heading={`Request a Quote for ${industry.name}`}
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
