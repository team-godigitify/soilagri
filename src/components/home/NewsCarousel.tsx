"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { newsItems } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Scroll-snap carousel — no JS state to keep in sync with the DOM, works
 * with trackpad/touch swipe natively, and the arrow buttons just nudge the
 * native scroll position by one card width.
 */
export function NewsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const amount = (card?.offsetWidth ?? 380) + 32;
    track.scrollBy({ left: amount * direction, behavior: "smooth" });
  }

  return (
    <section className="bg-background py-35 sm:py-40">
      <Container className="flex flex-col gap-10">
        <div className="flex items-end justify-between gap-4">
          <Reveal>
            <h2 className="font-heading text-4xl font-semibold sm:text-5xl">Latest News</h2>
          </Reveal>
          <div className="hidden gap-3 sm:flex">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              className="flex size-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Previous news item"
            >
              <ArrowLeft className="size-5" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              className="flex size-12 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              aria-label="Next news item"
            >
              <ArrowRight className="size-5" />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="scrollbar-none flex snap-x snap-mandatory gap-8 overflow-x-auto pb-2"
        >
          {newsItems.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              data-card
              className="group flex w-84 shrink-0 snap-start flex-col gap-4 sm:w-96"
            >
              <div className="relative h-60 overflow-hidden rounded-3xl sm:h-72">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="384px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                {item.date}
              </span>
              <h3 className="font-heading text-xl font-semibold text-balance text-foreground">
                {item.title}
              </h3>
              <span className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors group-hover:text-primary">
                Read more
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/resources"
          className={cn(buttonVariants({ variant: "default", size: "xl" }), "w-fit")}
        >
          Discover More
        </Link>
      </Container>
    </section>
  );
}
