import type { Metadata } from "next";
import { Target, Compass, ShieldCheck } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { PageHero } from "@/components/shared/PageHero";
import { SplitSection } from "@/components/shared/SplitSection";
import { OfficeCard } from "@/components/shared/OfficeCard";
import { LeadershipGrid } from "@/components/about/LeadershipGrid";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { GlobalPresenceGrid } from "@/components/about/GlobalPresenceGrid";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { company } from "@/content/company";
import { offices } from "@/content/offices";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "About",
  description:
    "Agrisoil is a Canadian international commodity trading company connecting global producers with buyers through reliable sourcing and transparent business practices.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Agrisoil"
        title={`About ${company.brandName}`}
        description={company.aboutSummary?.[0]}
        image={stockImages.heroWheatField}
      />

      <div id="overview" className="scroll-mt-24">
        <SplitSection
          title="Our Story"
          image={stockImages.wheatShootsCloseup}
          imageSide="left"
          inset={{ value: "25+", label: "Years of leadership experience" }}
        >
          {company.aboutSummary?.slice(1).map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </SplitSection>
      </div>

      {company.mission || company.vision || (company.values && company.values.length > 0) ? (
        <Container id="values" className="flex flex-col gap-12 scroll-mt-24 py-16 sm:py-24">
          {company.mission || company.vision ? (
            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {company.mission ? (
                <RevealItem>
                  <Card className="h-full">
                    <CardHeader>
                      <Target className="mb-1 size-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                      <CardTitle className="text-lg">Our Mission</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {company.mission}
                      </p>
                    </CardContent>
                  </Card>
                </RevealItem>
              ) : null}
              {company.vision ? (
                <RevealItem>
                  <Card className="h-full">
                    <CardHeader>
                      <Compass className="mb-1 size-6 text-primary" strokeWidth={1.75} aria-hidden="true" />
                      <CardTitle className="text-lg">Our Vision</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        {company.vision}
                      </p>
                    </CardContent>
                  </Card>
                </RevealItem>
              ) : null}
            </RevealGroup>
          ) : null}

          {company.values && company.values.length > 0 ? (
            <div className="flex flex-col gap-8">
              <SectionHeading eyebrow="Values" title="Our Core Values" />
              <ValuesGrid values={company.values} />
            </div>
          ) : null}
        </Container>
      ) : null}

      {company.founderQuote ? (
        <Container className="py-16 sm:py-24">
          <Reveal>
            <blockquote className="flex flex-col gap-5 border-l-4 border-cta pl-8">
              <p className="max-w-[65ch] font-heading text-2xl text-balance text-foreground italic sm:text-3xl">
                &ldquo;{company.founderQuote.quote}&rdquo;
              </p>
              <footer className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">
                  {company.founderQuote.name}
                </span>
                , {company.founderQuote.title}
              </footer>
            </blockquote>
          </Reveal>
        </Container>
      ) : null}

      <Container id="leadership" className="flex flex-col gap-10 scroll-mt-24 py-16 sm:py-24">
        <SectionHeading eyebrow="Leadership" title="Leadership" />
        <LeadershipGrid />
      </Container>

      {company.whyAgrisoil && company.whyAgrisoil.length > 0 ? (
        <Container id="why-agrisoil" className="flex flex-col gap-8 scroll-mt-24 py-16 sm:py-24">
          <SectionHeading eyebrow="Why Agrisoil" title="Why Agrisoil" />
          <RevealGroup className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {company.whyAgrisoil.map((item) => (
              <RevealItem
                key={item}
                className="flex gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground shadow-elevated-xs"
              >
                <span className="text-cta" aria-hidden="true">✓</span>
                <span>{item}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      ) : null}

      <div id="footprint" className="scroll-mt-24">
        <SplitSection
          eyebrow="Global Presence"
          title="Where we operate"
          image={stockImages.containerTerminalAerial}
          imageSide="right"
        >
          <p>
            Two physical offices, an international sourcing network, and
            commercial relationships spanning six global markets.
          </p>
        </SplitSection>
        {company.marketsServed ? (
          <Container className="pb-16 sm:pb-24">
            <GlobalPresenceGrid markets={company.marketsServed} />
          </Container>
        ) : null}
      </div>

      <Container className="flex flex-col gap-10 py-16 sm:py-24">
        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {offices.map((office) => (
            <RevealItem key={office.id}>
              <OfficeCard office={office} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>

      <Container className="py-10">
        <Reveal className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-6 shadow-elevated-xs sm:flex-row sm:items-center sm:gap-5">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <ShieldCheck className="size-5" aria-hidden="true" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-0.5 text-sm text-muted-foreground">
            {company.tradeName ? (
              <span className="font-medium text-foreground">{company.tradeName}</span>
            ) : null}
            <span>{company.legalName}</span>
            <span>Registration No. {company.registrationNumber}</span>
            <span>{company.headOffice}</span>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
