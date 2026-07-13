import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Reveal } from "@/components/shared/Reveal";
import { fadeUp } from "@/lib/motion";
import { supplyChainSpotlight as s } from "@/content/home";

/**
 * Full-bleed photographic spotlight: a short brand line top-left directly on
 * the image, and a secondary headline + CTAs anchored bottom-right — no
 * card, no split, just the photo and two type moments.
 */
export function SupplyChainSection() {
  return (
    <section className="relative flex min-h-[85vh] w-full items-stretch overflow-hidden sm:min-h-screen">
      <ParallaxImage src={s.image} alt="" sizes="100vw" className="object-cover" />

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-2/5 bg-gradient-to-b from-background/85 via-background/40 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex w-full flex-col justify-between py-10 sm:py-14">
        <Reveal variants={fadeUp} className="max-w-xl">
          <h2 className="font-heading text-4xl leading-[1.1] font-semibold text-balance text-primary sm:text-5xl lg:text-6xl">
            {s.headline[0]}
            <br />
            {s.headline[1]}
          </h2>
        </Reveal>

        <Reveal variants={fadeUp} className="flex max-w-lg flex-col gap-4 self-end text-left">
          <h3 className="font-heading text-3xl font-semibold text-background sm:text-4xl lg:text-5xl">
            {s.subheadline}
          </h3>
          <p className="text-sm font-semibold tracking-[0.02em] text-background/90 uppercase sm:text-base">
            {s.line1}
          </p>
          <p className="text-sm font-semibold tracking-[0.02em] text-background/90 uppercase sm:text-base">
            {s.line2}
          </p>

          <div className="mt-2 flex flex-wrap gap-3">
            <Link
              href={s.primaryCta.href}
              className="rounded-full bg-background px-6 py-3 text-sm font-semibold tracking-[0.04em] text-foreground uppercase transition-colors hover:bg-background/90"
            >
              <span aria-hidden="true">· </span>
              {s.primaryCta.label}
              <span aria-hidden="true"> ·</span>
            </Link>
            <Link
              href={s.secondaryCta.href}
              className="rounded-full bg-primary/70 px-6 py-3 text-sm font-semibold tracking-[0.04em] text-primary-foreground uppercase backdrop-blur-sm transition-colors hover:bg-primary/80"
            >
              <span aria-hidden="true">· </span>
              {s.secondaryCta.label}
              <span aria-hidden="true"> ·</span>
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
