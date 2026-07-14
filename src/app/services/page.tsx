import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { services } from "@/content/services";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Services",
  description:
    "End-to-end trading services — sourcing, procurement, contract negotiation, logistics, inspection, and documentation.",
};

/** Condensed from the content document's 13-step supply chain workflow (Ch.5) into five customer-facing stages. */
const processSteps = [
  { title: "Inquiry", body: "You share your product or service requirement, including volume and destination." },
  {
    title: "Sourcing & Negotiation",
    body: "We identify qualified suppliers and negotiate pricing, Incoterms, and payment terms on your behalf.",
  },
  {
    title: "Contract & Documentation",
    body: "Commercial agreements are finalized and export documentation is prepared — invoices, certificates of origin, and COA.",
  },
  {
    title: "Logistics",
    body: "Freight is booked, cargo is loaded, and customs clearance is coordinated across origin and destination.",
  },
  {
    title: "Delivery & Follow-Up",
    body: "Shipment updates continue through arrival, with post-shipment support available if anything needs resolving.",
  },
];

const ethicalCommitments = [
  "Honest communication",
  "Transparent commercial negotiations",
  "Respect for contractual obligations",
  "Fair pricing practices",
  "Professional conduct",
  "Confidential handling of customer information",
];

export default function ServicesPage() {
  return (
    <>
      <InnerHero
        eyebrow="Services"
        title="Complete Trading Solutions"
        subhead="From sourcing and procurement to quality inspection, documentation, logistics, and delivery — coordinated as one transaction."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Services" }]}
        image={stockImages.cranesLoading}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <RevealItem key={service.slug}>
                <IconTileCard
                  icon={service.icon}
                  title={service.name}
                  description={service.summary}
                  href={`/services/${service.slug}`}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionIntro eyebrow="Process" title="How We Work" />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, index) => (
              <RevealItem key={step.title} className="flex flex-col gap-3 rounded-3xl bg-card p-6 shadow-elevated-xs ring-1 ring-foreground/8">
                <span className="font-heading text-2xl font-semibold text-cta tabular-nums">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-base font-semibold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.body}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-primary bg-grain py-16 text-primary-foreground sm:py-20">
        <Container className="flex flex-col items-start gap-6">
          <Reveal className="flex flex-col gap-4">
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
              <ShieldCheck className="size-4 text-cta" aria-hidden="true" />
              Ethical Business Practices
            </span>
            <h2 className="font-heading max-w-xl text-3xl font-semibold text-balance sm:text-4xl">
              We Believe Trust Is Earned Through Consistent Actions, Not Promises
            </h2>
          </Reveal>
          <Reveal className="flex flex-wrap gap-3">
            {ethicalCommitments.map((item) => (
              <span
                key={item}
                className="rounded-full bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm"
              >
                {item}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <RFQBand
        heading="See Our Services in Action"
        body="Tell us what you need coordinated and we'll scope it against your requirement."
        cta={{ label: "Request a Quote", href: "/contact" }}
      />
    </>
  );
}
