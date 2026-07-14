import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "The industries SoilAgri serves — agriculture, fertilizer manufacturing, food processing, animal feed, and chemical processing.",
};

export default function IndustriesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Industries"
        title="Who We Serve"
        subhead="Fertilizer and commodity supply built around the operating realities of five industries."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <RevealItem key={industry.slug}>
                <IconTileCard
                  icon={industry.icon}
                  title={industry.name}
                  description={industry.summary}
                  href={`/industries/${industry.slug}`}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <RFQBand
        heading="Talk to Us About Your Industry"
        body="Tell us what your supply chain needs and we'll scope it against your requirement."
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
