import { Hero } from "@/components/home/Hero";
import { IconStatBand } from "@/components/shared/IconStatBand";
import { FeatureCallout } from "@/components/home/FeatureCallout";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { SplitSection } from "@/components/shared/SplitSection";
import { FoodSecureBand } from "@/components/home/FoodSecureBand";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { NewsCarousel } from "@/components/home/NewsCarousel";
import { CTABand } from "@/components/home/CTABand";
import { stats, growth } from "@/content/home";

export default function Home() {
  return (
    <>
      <Hero />
      <IconStatBand
        title="We offer our customers a deeper understanding of market needs."
        highlight="a deeper understanding"
        body="We coordinate procurement, quality assurance, documentation, logistics, and delivery for every transaction — built on more than 25 years of leadership experience in international fertilizer and agricultural commodity trading."
        stats={stats}
      />
      <FeatureCallout />
      <ProductsGrid />
      <SplitSection
        eyebrow={growth.eyebrow}
        title={growth.title}
        body={growth.body}
        cta={growth.cta}
        image={growth.image}
        imageSide="right"
      />
      <FoodSecureBand />
      <OpportunitiesSection />
      <NewsCarousel />
      <CTABand />
    </>
  );
}
