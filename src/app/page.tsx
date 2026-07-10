import { Hero } from "@/components/home/Hero";
import { StatsBand } from "@/components/home/StatsBand";
import { ProductTeaser } from "@/components/home/ProductTeaser";
import { LearnMoreRow } from "@/components/home/LearnMoreRow";
import { CTABand } from "@/components/home/CTABand";

// Value-props section (Section 7.1, step 3) is intentionally omitted:
// the spec's example differentiators aren't verifiable facts yet, and a
// padded 3-card row of unconfirmed claims is the dark pattern Law 1
// forbids. Add it once the client confirms real differentiators.

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBand />
      <ProductTeaser />
      <LearnMoreRow />
      <CTABand />
    </>
  );
}
