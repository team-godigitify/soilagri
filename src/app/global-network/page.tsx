import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { InfoChips } from "@/components/interior/InfoChips";
import { NetworkMap } from "@/components/interior/NetworkMap";
import { RFQBand } from "@/components/interior/RFQBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { networkNodes, networkSections, sourcingByProduct } from "@/content/network";
import { officesByRegion } from "@/content/offices";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Global Network",
  description:
    "Agrisoil's ten offices and international sourcing network — Montreal head office plus regional offices across North America, South America, Europe, the Middle East, Africa, Asia, and Oceania.",
};

export default function GlobalNetworkPage() {
  const regions = officesByRegion();

  return (
    <>
      <InnerHero
        eyebrow="Global Presence"
        title="Ten Offices, Six Regions Served"
        subhead="Canadian leadership combined with an international sourcing network — connecting trusted producers to customers across multiple continents."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Global Network" }]}
        image={stockImages.cargoShipPort}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <Reveal>
            <NetworkMap nodes={networkNodes} />
          </Reveal>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionIntro eyebrow="Offices" title="Where to Reach Us" />
          {regions.map((group) => (
            <div key={group.region} className="flex flex-col gap-4">
              <h3 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {group.region}
              </h3>
              <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.offices.map((office) => (
                  <RevealItem
                    key={office.id}
                    className="rounded-3xl bg-card p-7 shadow-elevated-xs ring-1 ring-foreground/8"
                  >
                    <span className="text-xs font-semibold tracking-[0.12em] text-cta uppercase">
                      {office.kind === "hq" ? "Head Office" : "Regional Office"}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">{office.label}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{office.address}</p>
                  </RevealItem>
                ))}
              </RevealGroup>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionIntro
            eyebrow="International Sourcing Network"
            title="Sourcing by Product"
            lede="Working directly with qualified producers enables Agrisoil to maintain consistent product quality while offering competitive commercial terms to customers."
          />
          <RevealGroup className="grid gap-6 sm:grid-cols-2">
            {sourcingByProduct.map((entry) => (
              <RevealItem
                key={entry.product}
                className="flex flex-col gap-3 rounded-3xl bg-secondary p-6"
              >
                <span className="font-heading text-base font-semibold text-primary">{entry.product}</span>
                <InfoChips items={entry.regions} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      {networkSections.map((section, i) => (
        <section key={section.slug} className={i % 2 === 0 ? "bg-secondary py-16 sm:py-20" : "bg-background py-16 sm:py-20"}>
          <Container className="flex flex-col gap-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionIntro eyebrow="Global Network" title={section.title} lede={section.intro} />
              <Link href={`/global-network/${section.slug}`} className="text-sm font-semibold text-primary hover:underline">
                Learn more &rarr;
              </Link>
            </div>
            {section.kind === "regions" ? (
              <InfoChips items={section.regions} />
            ) : (
              <Reveal>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-elevated-xs ring-1 ring-foreground/8">
                      <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Check className="size-3.5" aria-hidden="true" />
                      </span>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                {section.note && <p className="mt-4 max-w-[70ch] text-sm text-muted-foreground">{section.note}</p>}
              </Reveal>
            )}
          </Container>
        </section>
      ))}

      <RFQBand
        heading="Trade With Us — As a Buyer or a Supplier"
        body="Whether you're sourcing a commodity or looking to supply one, we respond within 24–48 hours."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
