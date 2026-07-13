import { Hero } from "@/components/home/Hero";
import { MarketWatchBand } from "@/components/home/MarketWatchBand";
import { TrackRecordSplit } from "@/components/home/TrackRecordSplit";
import { ProductsGrid } from "@/components/home/ProductsGrid";
import { SupplyChainSection } from "@/components/home/SupplyChainSection";
import { QualitySpotlightSection } from "@/components/home/QualitySpotlightSection";
import { FoodSecureBand } from "@/components/home/FoodSecureBand";
import { OpportunitiesSection } from "@/components/home/OpportunitiesSection";
import { NewsCarousel } from "@/components/home/NewsCarousel";
import { CTABand } from "@/components/home/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <MarketWatchBand />
      <TrackRecordSplit />
      <ProductsGrid />
      <SupplyChainSection />
      <QualitySpotlightSection />
      <FoodSecureBand />
      <OpportunitiesSection />
      <NewsCarousel />
      <CTABand />
    </>
  );
}
