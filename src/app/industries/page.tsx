import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { industries } from "@/content/industries";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Agrisoil supports agriculture, fertilizer distribution, food processing, livestock feed, and paper manufacturing with reliable fertilizer and commodity supply.",
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Industries We Serve"
        description="Different industries have different requirements — here's how Agrisoil supports each."
        image={stockImages.grainSilos}
      />

      <Container className="py-16 sm:py-24">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <RevealItem
              key={industry.title}
              className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <industry.icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <h3 className="font-heading text-lg font-medium text-foreground">
                {industry.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
              <p className="mt-auto text-xs font-medium tracking-wide text-primary uppercase">
                {industry.products}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </>
  );
}
