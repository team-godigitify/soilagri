import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, Quote } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { ContentSplit } from "@/components/interior/ContentSplit";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { StatRows } from "@/components/interior/StatRows";
import { IconTileCard } from "@/components/interior/IconTileCard";
import { NetworkMap } from "@/components/interior/NetworkMap";
import { RFQBand } from "@/components/interior/RFQBand";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { findNavChild, sectionSlugs } from "@/content/nav";
import {
  companyOverview,
  ourStory,
  corporateStructure,
  trustPillars,
  leadership,
  leadershipPrinciples,
  globalPresenceSummary,
} from "@/content/about";
import { networkNodes } from "@/content/network";
import { officesByRegion } from "@/content/offices";
import { stockImages } from "@/content/images";
import { company } from "@/content/company";

export function generateStaticParams() {
  return sectionSlugs("/about").map((section) => ({ section }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ section: string }>;
}): Promise<Metadata> {
  const { section } = await params;
  const child = findNavChild(`/about/${section}`);
  if (!child) return { title: "About" };
  return { title: child.label, description: child.description };
}

export default async function AboutSectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const child = findNavChild(`/about/${section}`);
  if (!child) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: child.label },
  ];

  if (section === "company-overview") {
    return (
      <>
        <InnerHero
          eyebrow="About SoilAgri"
          title={child.label}
          subhead={child.description}
          breadcrumbs={breadcrumbs}
          image={stockImages.handshake}
        />

        <ContentSplit
          eyebrow={companyOverview.eyebrow}
          title={companyOverview.title}
          body={companyOverview.body}
          image={companyOverview.image}
        >
          <StatRows stats={companyOverview.stats} className="pt-2" />
        </ContentSplit>

        <section className="bg-secondary py-16 sm:py-20">
          <Container className="grid gap-10 lg:grid-cols-2">
            <Reveal className="flex flex-col gap-3">
              <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                <span className="h-px w-10 bg-cta" aria-hidden="true" />
                {ourStory.eyebrow}
              </span>
              <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance text-primary sm:text-4xl">
                {ourStory.title}
              </h2>
              <p className="max-w-[54ch] text-base text-muted-foreground sm:text-lg">{ourStory.body}</p>
            </Reveal>
            <Reveal>
              <ul className="flex flex-col gap-3">
                {ourStory.goals.map((goal) => (
                  <li key={goal} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-elevated-xs ring-1 ring-foreground/8">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" aria-hidden="true" />
                    </span>
                    <span className="text-sm text-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionIntro eyebrow="Corporate Structure" title="One Coordinated Business Model" lede="SoilAgri integrates procurement, trading, logistics, finance, and customer support into one coordinated structure designed for efficient decision-making and responsive service." />
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {corporateStructure.map((dept) => (
                <RevealItem key={dept.title} className="flex flex-col gap-2 rounded-3xl bg-secondary p-6">
                  <span className="font-heading text-base font-semibold text-primary">{dept.title}</span>
                  <span className="text-sm text-muted-foreground">{dept.body}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        <RFQBand heading="Work With Us" cta={{ label: "Request a Quote", href: "/contact" }} />
      </>
    );
  }

  if (section === "leadership") {
    const founder = leadership[0];
    const otherLeaders = leadership.slice(1);
    return (
      <>
        <InnerHero eyebrow="About SoilAgri" title={child.label} subhead={child.description} breadcrumbs={breadcrumbs} />

        <section className="bg-background py-16 sm:py-24">
          <Container className="flex flex-col gap-8">
            {founder && (
              <Reveal className="grid overflow-hidden rounded-3xl bg-card shadow-elevated-xs ring-1 ring-foreground/8 lg:grid-cols-[280px_1fr]">
                {founder.portraitImage && (
                  <div className="relative h-96 lg:h-auto">
                    <Image
                      src={founder.portraitImage}
                      alt={founder.name}
                      fill
                      sizes="(min-width: 1024px) 280px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-6 p-8 sm:p-12">
                  <Quote className="size-9 text-cta" aria-hidden="true" strokeWidth={1.5} />
                  {founder.quote && (
                    <p className="max-w-[64ch] font-heading text-2xl leading-snug text-balance text-foreground sm:text-3xl">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  )}
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold text-foreground">{founder.name}</span>
                    <span className="text-sm text-muted-foreground">{founder.title}</span>
                  </div>
                </div>
              </Reveal>
            )}

            {otherLeaders.length > 0 && (
              <RevealGroup className="grid gap-4 sm:grid-cols-2">
                {otherLeaders.map((leader) => (
                  <RevealItem
                    key={leader.name}
                    className="flex flex-col gap-2 rounded-3xl bg-secondary p-7"
                  >
                    <span className="text-xs font-semibold tracking-widest text-cta uppercase">
                      {leader.title}
                    </span>
                    <span className="font-heading text-lg font-semibold text-foreground">{leader.name}</span>
                  </RevealItem>
                ))}
              </RevealGroup>
            )}
          </Container>
        </section>

        <section className="bg-secondary py-16 sm:py-20">
          <Container className="flex flex-col gap-10">
            <SectionIntro eyebrow="Leadership Philosophy" title="Six Guiding Principles" />
            <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {leadershipPrinciples.map((principle) => (
                <RevealItem key={principle.title} className="flex flex-col gap-2 rounded-3xl bg-card p-6 shadow-elevated-xs ring-1 ring-foreground/8">
                  <span className="font-heading text-base font-semibold text-foreground">{principle.title}</span>
                  <span className="text-sm text-muted-foreground">{principle.body}</span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Container>
        </section>

        <RFQBand heading="Work With Us" cta={{ label: "Request a Quote", href: "/contact" }} />
      </>
    );
  }

  if (section === "global-presence") {
    const regions = officesByRegion();
    return (
      <>
        <InnerHero
          eyebrow="About SoilAgri"
          title={child.label}
          subhead={child.description}
          breadcrumbs={breadcrumbs}
          image={stockImages.cargoShipPort}
        />

        <section className="bg-background py-16 sm:py-24">
          <Container className="flex flex-col gap-10">
            <SectionIntro eyebrow={globalPresenceSummary.eyebrow} title={globalPresenceSummary.title} lede={globalPresenceSummary.body} />
            <Reveal>
              <NetworkMap nodes={networkNodes} />
            </Reveal>
          </Container>
        </section>

        <section className="bg-secondary py-16 sm:py-20">
          <Container className="flex flex-col gap-8">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionIntro eyebrow="Offices" title="Where to Reach Us" />
              <Link href="/global-network" className="text-sm font-semibold text-primary hover:underline">
                See our full network &rarr;
              </Link>
            </div>
            <div className="flex flex-col gap-6">
              {regions.map((group) => (
                <div key={group.region} className="flex flex-col gap-3">
                  <h3 className="text-xs font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                    {group.region}
                  </h3>
                  <RevealGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.offices.map((office) => (
                      <RevealItem
                        key={office.id}
                        className="rounded-2xl bg-card p-5 shadow-elevated-xs ring-1 ring-foreground/8"
                      >
                        <span className="text-xs font-semibold tracking-widest text-cta uppercase">
                          {office.kind === "hq" ? "Head Office" : "Regional Office"}
                        </span>
                        <h4 className="mt-1 font-heading text-base font-semibold text-foreground">{office.label}</h4>
                      </RevealItem>
                    ))}
                  </RevealGroup>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <RFQBand heading="Work With Us" cta={{ label: "Request a Quote", href: "/contact" }} />
      </>
    );
  }

  // why-agrisoil
  return (
    <>
      <InnerHero eyebrow="About SoilAgri" title={child.label} subhead={child.description} breadcrumbs={breadcrumbs} />

      <section className="bg-background py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          <SectionIntro eyebrow="Why SoilAgri" title="More Than a Supplier — A Strategic Trading Partner" lede="International trade requires more than competitive pricing. It demands experience, dependable coordination, and trusted relationships." />
          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {trustPillars.map((pillar) => (
              <RevealItem key={pillar.title}>
                <IconTileCard icon={pillar.icon} title={pillar.title} description={pillar.body} href="/contact" />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </section>

      <section className="bg-primary bg-grain py-16 text-primary-foreground sm:py-20">
        <Container>
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
            <span className="font-heading text-6xl font-semibold text-cta sm:text-7xl">25+</span>
            <p className="font-heading text-xl font-semibold text-balance sm:text-2xl">
              Years of Leadership Experience in International Commodity Trading
            </p>
            <p className="text-sm text-primary-foreground/70">
              — {company.founderQuote.name}, {company.founderQuote.title}
            </p>
          </Reveal>
        </Container>
      </section>

      <RFQBand heading="Work With Us" cta={{ label: "Request a Quote", href: "/contact" }} />
    </>
  );
}
