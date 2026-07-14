import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { ContentSplit } from "@/components/interior/ContentSplit";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { StatRows } from "@/components/interior/StatRows";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { RFQBand } from "@/components/interior/RFQBand";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { fadeUp } from "@/lib/motion";
import {
  companyOverview,
  mission,
  vision,
  purpose,
  coreValues,
  qualityCompliance,
  sustainability,
  trustPillars,
  leadership,
} from "@/content/about";
import { stockImages } from "@/content/images";
import { company } from "@/content/company";

export const metadata: Metadata = {
  title: "About",
  description: company.aboutSummary,
};

export default function AboutPage() {
  const founder = leadership[0];

  return (
    <>
      <InnerHero
        eyebrow="About SoilAgri"
        title="A Strategic Supply Partner, Not Just a Trader"
        subhead={company.tagline}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={stockImages.handshake}
      />

      <ContentSplit
        eyebrow={companyOverview.eyebrow}
        title={companyOverview.title}
        body={companyOverview.body}
        image={companyOverview.image}
      >
        <StatRows stats={companyOverview.stats} className="pt-2" />
        <p className="max-w-[62ch] text-xs tracking-[0.04em] text-muted-foreground uppercase">
          {companyOverview.note}
        </p>
      </ContentSplit>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="grid gap-8 sm:grid-cols-3">
          {[mission, vision, purpose].map((block) => (
            <Reveal key={block.title} className="flex flex-col gap-3 rounded-3xl bg-card p-7 shadow-elevated-xs ring-1 ring-foreground/8">
              <span className="text-xs font-semibold tracking-[0.14em] text-cta uppercase">{block.eyebrow}</span>
              <h3 className="font-heading text-lg font-semibold text-balance text-foreground">{block.title}</h3>
              <p className="text-sm text-muted-foreground">{block.body}</p>
            </Reveal>
          ))}
        </Container>
      </section>

      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="relative flex min-h-[70vh] w-full items-stretch">
          <ParallaxImage src={stockImages.wheatFieldSunset} alt="" sizes="100vw" className="object-cover" />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent"
            aria-hidden="true"
          />
          <Container className="relative z-10 flex w-full items-center py-20">
            <Reveal variants={fadeUp} className="flex max-w-2xl flex-col gap-6">
              <span className="text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
                SoilAgri &middot; Our Values
              </span>
              <h2 className="font-heading text-4xl font-semibold sm:text-5xl">
                Built on Trust, Backed by Execution
              </h2>
              <span className="h-px w-24 bg-primary-foreground/30" aria-hidden="true" />
              <p className="max-w-[52ch] text-lg text-primary-foreground/80">
                Our values hold whether a transaction is our first with a customer or our fiftieth.
              </p>
              <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {coreValues.map((value) => (
                  <RevealItem
                    key={value.title}
                    className="flex flex-col gap-2 rounded-2xl bg-primary-foreground/10 p-4 backdrop-blur-sm"
                  >
                    <value.icon className="size-5 text-cta" aria-hidden="true" strokeWidth={1.75} />
                    <span className="text-sm font-semibold text-primary-foreground">{value.title}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            </Reveal>
          </Container>
        </div>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <Reveal className="flex flex-col gap-3">
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              <span className="h-px w-10 bg-cta" aria-hidden="true" />
              {qualityCompliance.eyebrow}
            </span>
            <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance text-primary sm:text-4xl">
              {qualityCompliance.title}
            </h2>
            <p className="max-w-[54ch] text-base text-muted-foreground sm:text-lg">{qualityCompliance.body}</p>
          </Reveal>
          <Reveal className="flex flex-wrap content-start gap-2">
            {qualityCompliance.pillars.map((pillar) => (
              <span
                key={pillar}
                className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
              >
                {pillar}
              </span>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionIntro eyebrow={sustainability.eyebrow} title={sustainability.title} lede={sustainability.body} />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {sustainability.principles.map((principle) => (
              <RevealItem key={principle.title} className="flex flex-col gap-2 rounded-2xl bg-card p-5 shadow-elevated-xs ring-1 ring-foreground/8">
                <span className="font-heading text-sm font-semibold text-foreground">{principle.title}</span>
                <span className="text-xs text-muted-foreground">{principle.body}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-background py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionIntro eyebrow="Why SoilAgri" title="Reasons Buyers Work With Us" />
            <Link href="/about/why-agrisoil" className="text-sm font-semibold text-primary hover:underline">
              See all reasons &rarr;
            </Link>
          </div>
          <RevealGroup className="grid gap-6 sm:grid-cols-3">
            {trustPillars.slice(0, 3).map((pillar) => (
              <RevealItem key={pillar.title}>
                <IconTileCard icon={pillar.icon} title={pillar.title} description={pillar.body} href="/about/why-agrisoil" />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionIntro eyebrow="Leadership" title="Led From the Front" />
            <Link href="/about/leadership" className="text-sm font-semibold text-primary hover:underline">
              Meet the team &rarr;
            </Link>
          </div>
          {founder && (
            <Reveal className="flex flex-col gap-5 rounded-3xl bg-card p-8 shadow-elevated-xs ring-1 ring-foreground/8 sm:p-10">
              <Quote className="size-8 text-cta" aria-hidden="true" strokeWidth={1.5} />
              {founder.quote && (
                <p className="max-w-[62ch] font-heading text-xl leading-snug text-balance text-foreground sm:text-2xl">
                  &ldquo;{founder.quote}&rdquo;
                </p>
              )}
              <div className="flex items-center gap-3">
                {founder.image && (
                  <Image
                    src={founder.image}
                    alt={founder.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover"
                  />
                )}
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">{founder.name}</span>
                  <span className="text-sm text-muted-foreground">{founder.title}</span>
                </div>
              </div>
            </Reveal>
          )}
        </Container>
      </section>

      <RFQBand heading="Work With Us" cta={{ label: "Request a Quote", href: "/contact" }} />
    </>
  );
}
