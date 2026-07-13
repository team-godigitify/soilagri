import Image from "next/image";
import { Reveal } from "@/components/shared/Reveal";
import { WipeReveal } from "@/components/shared/WipeReveal";
import { fadeUp } from "@/lib/motion";
import { qualitySpotlight } from "@/content/home";

/**
 * Editorial grid spotlight — a faint 5x3 line grid behind an asymmetric
 * layout: headline split either side of a photo, a caption box offset
 * below. Image and caption both "wipe" open on scroll; headlines fade/rise.
 */
export function QualitySpotlightSection() {
  return (
    <section className="bg-background py-20 sm:py-28">
      <div className="relative mx-auto max-w-[1800px] px-6">
        <div
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--border) 1px, transparent 1px), linear-gradient(to bottom, var(--border) 1px, transparent 1px)",
            backgroundSize: "20% 33.334%",
          }}
          aria-hidden="true"
        />

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-5 lg:grid-rows-[180px_420px_300px] lg:gap-0">
          <Reveal
            variants={fadeUp}
            className="flex items-center p-4 lg:col-start-1 lg:row-start-2 lg:p-6 xl:p-10"
          >
            <h2 className="font-heading hyphens-auto text-4xl font-semibold text-balance text-primary sm:text-5xl lg:text-3xl xl:text-4xl">
              {qualitySpotlight.headline[0]}
            </h2>
          </Reveal>

          <WipeReveal className="h-72 overflow-hidden lg:col-start-2 lg:row-start-2 lg:h-auto">
            <Image
              src={qualitySpotlight.image}
              alt=""
              fill
              sizes="(min-width: 1024px) 20vw, 100vw"
              className="object-cover"
            />
          </WipeReveal>

          <Reveal
            variants={fadeUp}
            className="flex items-center p-4 lg:col-start-3 lg:row-start-2 lg:p-6 xl:p-10"
          >
            <h2 className="font-heading hyphens-auto text-4xl font-semibold text-balance text-primary sm:text-5xl lg:text-3xl xl:text-4xl">
              {qualitySpotlight.headline[1]}
            </h2>
          </Reveal>

          <WipeReveal
            delay={0.15}
            className="flex items-center p-4 lg:col-start-4 lg:row-start-3 lg:p-10"
          >
            <p className="max-w-[32ch] text-muted-foreground">{qualitySpotlight.body}</p>
          </WipeReveal>
        </div>
      </div>
    </section>
  );
}
