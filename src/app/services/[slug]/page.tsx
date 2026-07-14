import type { Metadata } from "next";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { ContentSplit } from "@/components/interior/ContentSplit";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { sectionSlugs } from "@/content/nav";
import { findService, relatedServices } from "@/content/services";
import { stockImages } from "@/content/images";

export function generateStaticParams() {
  return sectionSlugs("/services").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) return { title: "Service" };
  return { title: service.name, description: service.summary };
}

const serviceImages = [
  stockImages.handshake,
  stockImages.cargoShipPort,
  stockImages.cranesLoading,
  stockImages.grainSilos,
];

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = findService(slug);
  if (!service) notFound();

  const related = relatedServices(service);
  const image = serviceImages[service.slug.length % serviceImages.length] ?? stockImages.handshake;

  return (
    <>
      <InnerHero
        eyebrow="Services"
        title={service.name}
        subhead={service.summary}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.name },
        ]}
        primaryCta={{ label: "Request a Quote", href: `/contact?service=${service.slug}` }}
      />

      <ContentSplit eyebrow="Overview" title="How This Works" body={service.narrative} image={image} />

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionIntro eyebrow="Scope" title="What This Covers" />
          <Reveal>
            <ul className="grid gap-4 sm:grid-cols-2">
              {service.covers.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-elevated-xs ring-1 ring-foreground/8">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-background py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <SectionIntro eyebrow="Related" title="Related Services" />
            <RevealGroup className="grid gap-6 sm:grid-cols-2">
              {related.map((item) => (
                <RevealItem key={item.slug}>
                  <IconTileCard
                    icon={item.icon}
                    title={item.name}
                    description={item.summary}
                    href={`/services/${item.slug}`}
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>
      )}

      <RFQBand
        heading={`Request ${service.name}`}
        body="Tell us about your requirement and we'll respond within 24–48 hours."
        cta={{ label: "Request a Quote", href: `/contact?service=${service.slug}` }}
      />
    </>
  );
}
