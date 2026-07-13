"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { productShowcase } from "@/content/home";

/** Left intro + CTA + nav arrows, paired with a horizontally scrollable product carousel. */
export function ProductsGrid() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByPage = (direction: 1 | -1) => {
    scrollerRef.current?.scrollBy({
      left: direction * scrollerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-background py-16 sm:py-20 lg:h-[90vh] lg:py-16">
      <Container className="max-w-none lg:h-full">
        <Reveal className="flex flex-col gap-10 lg:h-full lg:flex-row lg:items-stretch lg:gap-16">
          <div className="flex flex-col justify-start gap-6 lg:w-80 lg:shrink-0">
            <h2 className="font-heading text-4xl font-semibold text-balance text-primary sm:text-5xl">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Fertilizers and agricultural commodities sourced from trusted producers across the
              Middle East, Central Asia, North Africa, Europe, and the Americas.
            </p>

            <Link
              href="/products"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-[0.06em] text-primary-foreground uppercase transition-colors hover:bg-primary/90"
            >
              <span aria-hidden="true">·</span>
              View All Products
              <span aria-hidden="true">·</span>
            </Link>

            <div className="mt-4 flex gap-3">
              <button
                type="button"
                onClick={() => scrollByPage(-1)}
                aria-label="Previous products"
                className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ArrowLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollByPage(1)}
                aria-label="Next products"
                className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <ArrowRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={scrollerRef}
            className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 lg:flex-1"
          >
            {productShowcase.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-3xl bg-secondary sm:w-[calc(50%-0.75rem)]"
              >
                <div className="flex items-start justify-between gap-4 p-6 pb-4">
                  <div className="flex flex-col gap-2">
                    <span className="font-heading text-2xl font-semibold text-primary">
                      {product.name}
                    </span>
                    <span className="max-w-[26ch] text-xs font-semibold tracking-[0.02em] text-muted-foreground uppercase">
                      {product.blurb}
                    </span>
                    <span className="mt-1 flex items-center gap-2 text-xs font-semibold tracking-[0.06em] text-primary uppercase">
                      <span className="size-2 rounded-sm bg-primary" aria-hidden="true" />
                      {product.category}
                    </span>
                  </div>

                  <div className="shrink-0 text-right text-xs font-semibold tracking-[0.02em] text-muted-foreground uppercase">
                    <p>FOB · CFR · CIF</p>
                    <p className="mt-1">Quote on Request</p>
                  </div>
                </div>

                <div className="relative h-56 w-full overflow-hidden sm:h-64 lg:h-auto lg:flex-1">
                  <Image
                    src={product.image}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 40vw, 85vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
