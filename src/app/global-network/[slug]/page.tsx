import type { Metadata } from "next";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { InfoChips } from "@/components/interior/InfoChips";
import { NetworkMap } from "@/components/interior/NetworkMap";
import { RFQBand } from "@/components/interior/RFQBand";
import { Reveal } from "@/components/shared/Reveal";
import { findNavChild, sectionSlugs } from "@/content/nav";
import { networkNodes, findNetworkSection } from "@/content/network";

export function generateStaticParams() {
  return sectionSlugs("/global-network").map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const child = findNavChild(`/global-network/${slug}`);
  if (!child) return { title: "Global Network" };
  return { title: child.label, description: child.description };
}

export default async function GlobalNetworkSectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const child = findNavChild(`/global-network/${slug}`);
  const section = findNetworkSection(slug);
  if (!child || !section) notFound();

  return (
    <>
      <InnerHero
        eyebrow="Global Network"
        title={child.label}
        subhead={section.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Global Network", href: "/global-network" },
          { label: child.label },
        ]}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container className="flex flex-col gap-10">
          {section.kind === "regions" ? (
            <>
              <SectionIntro eyebrow="Regions Served" title="Where We Operate" />
              <InfoChips items={section.regions} />
              <Reveal>
                <NetworkMap nodes={networkNodes.filter((node) => node.kind === "region")} />
              </Reveal>
            </>
          ) : (
            <>
              <SectionIntro eyebrow={child.label} title="How This Works" />
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
            </>
          )}
        </Container>
      </section>

      <RFQBand
        heading="Trade With Us"
        body="Whether you're sourcing a commodity or looking to supply one, we respond within 24–48 hours."
        cta={{ label: "Get in Touch", href: "/contact" }}
      />
    </>
  );
}
