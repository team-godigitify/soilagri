"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { heroSlides } from "@/content/home";
import { cn } from "@/lib/utils";

const AUTOPLAY_MS = 6500;

/**
 * Split hero carousel — licensed stock photography (Section 7.1), generic
 * industry imagery, never captioned as "our facility" (Section 6). Autoplay
 * pauses on hover/focus so it never fights a reading user; dots give direct
 * control. Text and image crossfade on `transform`/`opacity` only, so
 * `prefers-reduced-motion` users still get a clean cut instead of motion.
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
      className="relative overflow-hidden bg-primary text-primary-foreground"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="relative grid min-h-140 lg:min-h-170 lg:grid-cols-2">
        {/* Image pane — mobile: stacked on top, full color. Desktop: absolute right half, diagonally clipped so photo dominates up top and green anchors the text/CTA corner below. */}
        <div className="relative order-1 h-80 sm:h-105 lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-auto lg:w-[58%] lg:[clip-path:polygon(9%_0,100%_0,100%_100%,33%_100%)]">
          <AnimatePresence initial={false}>
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.06 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src={slide.image}
                alt=""
                fill
                priority={index === 0}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Text pane */}
        <div className="relative z-10 order-2 flex items-center py-14 sm:py-20 lg:order-1 lg:py-0">
          <Container className="lg:pr-[8%]">
            <div className="flex flex-col gap-6 lg:max-w-[46ch]">
              <span className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary-foreground/80 uppercase">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                {slide.eyebrow}
              </span>

              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >
                  <h1 className="font-heading text-4xl font-medium text-balance sm:text-5xl lg:text-6xl">
                    {slide.headline}
                  </h1>
                  <p className="max-w-[56ch] text-lg text-primary-foreground/85">
                    {slide.subhead}
                  </p>
                  <div className="flex flex-wrap gap-3 pt-2">
                    <Link
                      href={slide.cta.href}
                      className={cn(buttonVariants({ variant: "cta" }), "h-12 px-6")}
                    >
                      {slide.cta.label}
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div
                className="flex items-center gap-2 pt-6"
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
                      "size-2.5 rounded-full border transition-colors duration-300",
                      i === index
                        ? "border-cta bg-cta"
                        : "border-primary-foreground/50 bg-transparent hover:border-primary-foreground/80"
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
