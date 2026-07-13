import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { ProcessTimeline, TimelineStep } from "@/components/shared/ProcessTimeline";
import { IncotermsComparison } from "@/components/supply-chain/IncotermsComparison";
import { supplyChainSections } from "@/content/supply-chain";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Supply Chain",
  description:
    "Sourcing, trading, shipping, Incoterms, quality assurance, and risk management — how Agrisoil coordinates international fertilizer and commodity trade.",
};

/**
 * Every heading is self-sufficient (layer-cake, Section 2.4) — a buyer
 * forwarded a #logistics link lands on a coherent, complete section.
 */
export default function SupplyChainPage() {
  return (
    <>
      <PageHero
        eyebrow="Supply Chain"
        title="Supply Chain & Logistics"
        description="Sourcing, trading, shipping, Incoterms, quality assurance, and risk management — the pillars of how we operate."
        image={stockImages.cranesLoading}
      />

      <Container className="py-16 sm:py-24">
        <ProcessTimeline>
          {supplyChainSections.map((section, i) => (
            <TimelineStep
              key={section.id}
              index={i + 1}
              id={section.id}
              title={section.title}
              isLast={i === supplyChainSections.length - 1}
            >
              {section.body?.map((paragraph, j) => (
                <p key={j} className="max-w-[70ch] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
              {section.list ? (
                <ul className="mt-1 flex flex-col gap-1.5 text-sm text-muted-foreground">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="text-cta">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {section.id === "logistics" ? (
                <div className="mt-2">
                  <IncotermsComparison />
                </div>
              ) : null}
            </TimelineStep>
          ))}
        </ProcessTimeline>
      </Container>
    </>
  );
}
