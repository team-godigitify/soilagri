import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { FAQAccordion } from "@/components/interior/FAQAccordion";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { findNavChild, sectionSlugs } from "@/content/nav";
import { faqGroups } from "@/content/resources";

export const metadata: Metadata = {
  title: "Resources",
  description: "News, market updates, certificates, and frequently asked questions from SoilAgri.",
};

export default function ResourcesPage() {
  const tiles = sectionSlugs("/resources")
    .map((slug) => findNavChild(`/resources/${slug}`))
    .filter((tile): tile is NonNullable<typeof tile> => Boolean(tile));

  return (
    <>
      <InnerHero
        eyebrow="Resources"
        title="News, Updates & Answers"
        subhead="Company news, market commentary, certification, and answers to common questions."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Resources" }]}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tiles.map(
              (tile) =>
                tile.icon && (
                  <RevealItem key={tile.href}>
                    <IconTileCard icon={tile.icon} title={tile.label} description={tile.description} href={tile.href} />
                  </RevealItem>
                )
            )}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <SectionIntro eyebrow="FAQs" title="Frequently Asked Questions" />
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
