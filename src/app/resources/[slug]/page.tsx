import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { FAQAccordion } from "@/components/interior/FAQAccordion";
import { EmptyStateBlock } from "@/components/interior/EmptyStateBlock";
import { RFQBand } from "@/components/interior/RFQBand";
import { Reveal } from "@/components/shared/Reveal";
import { findNavChild, sectionSlugs } from "@/content/nav";
import { faqs, faqGroups, findResourceSection } from "@/content/resources";
import { faqJsonLd } from "@/lib/jsonld";

export function generateStaticParams() {
  return sectionSlugs("/resources").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const child = findNavChild(`/resources/${slug}`);
  if (!child) return { title: "Resources" };
  return { title: child.label, description: child.description };
}

export default async function ResourceSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const child = findNavChild(`/resources/${slug}`);
  if (!child) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources" },
    { label: child.label },
  ];

  if (slug === "faqs") {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }}
        />
        <InnerHero
          eyebrow="Resources"
          title="Frequently Asked Questions"
          subhead={child.description}
          breadcrumbs={breadcrumbs}
        />
        <section className="bg-background py-16 sm:py-24">
          <Container className="flex flex-col gap-12">
            {faqGroups.map((group) => (
              <Reveal key={group.category} className="flex flex-col gap-4">
                <h3 className="font-heading text-lg font-semibold text-primary">{group.category}</h3>
                <FAQAccordion items={group.items} />
              </Reveal>
            ))}
          </Container>
        </section>
        <RFQBand heading="Still Have Questions?" cta={{ label: "Contact Us", href: "/contact" }} />
      </>
    );
  }

  const section = findResourceSection(slug);
  if (!section) notFound();

  return (
    <>
      <InnerHero eyebrow="Resources" title={child.label} subhead={section.intro} breadcrumbs={breadcrumbs} />
      <section className="bg-background py-16 sm:py-24">
        <Container>
          <EmptyStateBlock
            title={section.empty.title}
            body={section.empty.body}
            cta={{ label: "Contact Us", href: "/contact" }}
          />
        </Container>
      </section>
      <RFQBand heading="Talk to Us" cta={{ label: "Contact Us", href: "/contact" }} />
    </>
  );
}
