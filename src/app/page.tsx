import { Hero } from "@/components/home/Hero";
import { IconStatBand } from "@/components/shared/IconStatBand";
import { SplitSection } from "@/components/shared/SplitSection";
import { ValueProps } from "@/components/home/ValueProps";
import { ProductTeaser } from "@/components/home/ProductTeaser";
import { FounderQuoteBand } from "@/components/home/FounderQuoteBand";
import { CTABand } from "@/components/home/CTABand";
import { stats, aboutTeaser, supplyChainTeaser } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <IconStatBand stats={stats} />
      <SplitSection
        eyebrow={aboutTeaser.eyebrow}
        title={aboutTeaser.title}
        image={aboutTeaser.image}
        imageSide="left"
        inset={{ value: "25+", label: "Years of leadership experience" }}
        cta={{ label: "Learn more about us", href: "/about" }}
      >
        <p>{aboutTeaser.body[0]}</p>
      </SplitSection>
      <ValueProps />
      <ProductTeaser />
      <FounderQuoteBand />
      <SplitSection
        eyebrow={supplyChainTeaser.eyebrow}
        title={supplyChainTeaser.title}
        image={supplyChainTeaser.image}
        imageSide="right"
        list={supplyChainTeaser.list}
        inset={{ value: "3", label: "Incoterms: FOB, CFR & CIF" }}
        cta={{ label: "See our supply chain", href: "/supply-chain" }}
      />
      <CTABand />
    </>
  );
}
