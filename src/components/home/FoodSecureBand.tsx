import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { WipeReveal } from "@/components/shared/WipeReveal";
import { buttonVariants } from "@/components/ui/button";
import { fadeUp } from "@/lib/motion";
import { foodSecure } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Editorial grid spotlight (paired with QualitySpotlightSection above) — same
 * faint 5x3 line grid, but mirrored right-to-left for rhythm: headline split
 * either side of a photo, caption box offset below. Image and caption wipe
 * open on scroll (curtain recedes leftward here, opposite of the section
 * above); headlines fade/rise.
 */
export function FoodSecureBand() {
  const [titleLead] = foodSecure.title.split(foodSecure.highlight);

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
            className="flex flex-col justify-center gap-4 p-4 lg:col-start-5 lg:row-start-2 lg:p-6 xl:p-10"
          >
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              <span className="h-px w-10 bg-cta" aria-hidden="true" />
              {foodSecure.eyebrow}
            </span>
            <h2 className="font-heading hyphens-auto text-4xl font-semibold text-balance text-primary sm:text-5xl lg:text-3xl xl:text-4xl">
              {titleLead}
            </h2>
          </Reveal>

          <WipeReveal
            origin="left"
            className="h-72 overflow-hidden lg:col-start-4 lg:row-start-2 lg:h-auto"
          >
            <Image
              src={foodSecure.image}
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
            <h2 className="font-heading hyphens-auto text-4xl font-semibold text-balance text-cta sm:text-5xl lg:text-3xl xl:text-4xl">
              {foodSecure.highlight}
            </h2>
          </Reveal>

          <WipeReveal
            origin="left"
            delay={0.15}
            className="flex flex-col items-start gap-5 p-4 lg:col-start-2 lg:row-start-3 lg:p-10"
          >
            <p className="max-w-[32ch] text-muted-foreground">{foodSecure.body}</p>
            <Link
              href={foodSecure.cta.href}
              className={cn(buttonVariants({ variant: "default", size: "lg" }), "group")}
            >
              {foodSecure.cta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </WipeReveal>
        </div>
      </div>
    </section>
  );
}
