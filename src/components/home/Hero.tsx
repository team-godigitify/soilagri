"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { buttonVariants } from "@/components/ui/button";
import { heroSlides } from "@/content/home";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

/**
 * Cinematic split hero carousel — full viewport height, ~45/55 text/photo
 * split. Licensed stock photography, generic industry imagery, never
 * captioned as "our facility." Autoplay pauses on hover/focus so it never
 * fights a reading user; dots give direct control. Text and image crossfade
 * on `transform`/`opacity` only, so `prefers-reduced-motion` users still
 * get a clean cut instead of motion.
 */
export function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = heroSlides.length;

  const goTo = useCallback(
    (i: number) => {
      setIndex(((i % count) + count) % count);
    },
    [count]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, count]);

  const slide = heroSlides[index] ?? heroSlides[0]!;

  return (
    <section
      className="bg-primary text-primary-foreground relative overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative grid min-h-screen lg:grid-cols-[48%_52%]">
        {/*
          clipPath (clipPathUnits="objectBoundingBox", so 0–1 maps to the
          image pane's own box regardless of viewport) carves a smooth
          concave curve into the image's left edge — the dark green section
          background shows through the clipped area, reading as the panel
          "biting into" the photo rather than a straight/diagonal cut.
        */}
        <svg width="0" height="0" aria-hidden="true" className="absolute">
          <defs>
            <clipPath id="hero-image-clip" clipPathUnits="objectBoundingBox">
              <path d="M0.05,0 L1,0 L1,1 L0.05,1 C0.05,0.75 0.32,0.65 0.32,0.5 C0.32,0.35 0.05,0.25 0.05,0 Z" />
            </clipPath>
          </defs>
        </svg>
        {/* Image pane — mobile: stacked on top, full color. Desktop: absolute right half, diagonally clipped so photo dominates up top and green anchors the text/CTA corner below. */}
        <div className="relative order-1 h-105 overflow-hidden sm:h-140 lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-auto lg:w-[58%] lg:[clip-path:url(#hero-image-clip)]">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <ParallaxImage
                src={slide.image}
                alt=""
                preload={index === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text pane — pt-32+ guarantees clearance under the floating nav (h-9 utility bar + h-20 nav) so content never collides with it. */}
        <div className="relative z-10 order-2 flex min-h-[45vh] items-center pt-32 pb-16 sm:pt-36 sm:pb-20 lg:order-1 lg:min-h-0 lg:pt-32 lg:pb-16">
          <Container className="lg:pr-[4%] lg:pl-[8%]">
            <div className="flex flex-col gap-6 lg:max-w-[80ch]">
              <span className="text-primary-foreground/80 flex items-center gap-3 text-sm font-semibold tracking-[0.16em] uppercase">
                <span className="bg-cta h-px w-10" aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <h1 className="font-heading text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h1>
                  <p className="text-primary-foreground/85 max-w-[80ch] text-lg">
                    {slide.subhead}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <Link
                      href={slide.cta.href}
                      className={cn(
                        buttonVariants({ variant: "cta", size: "xl" }),
                        "group"
                      )}
                    >
                      {slide.cta.label}
                      <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div
                className="flex items-center gap-2.5 pt-8"
                role="tablist"
                aria-label="Hero slides"
              >
                {heroSlides.map((s, i) => (
                  <button
                    key={s.headline}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Slide ${i + 1} of ${count}: ${s.eyebrow}`}
                    onClick={() => goTo(i)}
                    className={cn(
                      "size-3 rounded-full border transition-colors duration-300",
                      i === index
                        ? "border-cta bg-cta"
                        : "border-primary-foreground/50 hover:border-primary-foreground/80 bg-transparent"
                    )}
                  />
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
