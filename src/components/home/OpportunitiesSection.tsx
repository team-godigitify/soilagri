import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { fadeUp } from "@/lib/motion";
import { buttonVariants } from "@/components/ui/button";
import { opportunities } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * Full-bleed product-spotlight layout: breadcrumb, name, divider, a bold
 * statement, then supporting copy — all left-aligned over a dark-tinted
 * photo, left-to-right so the image itself reads clearly on the right.
 */
export function OpportunitiesSection() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="relative flex min-h-[85vh] w-full items-stretch sm:min-h-screen">
        <ParallaxImage src={opportunities.image} alt="" sizes="100vw" className="object-cover" />

        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-r from-primary via-primary/85 to-primary/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-linear-to-t from-primary/70 via-transparent to-transparent"
          aria-hidden="true"
        />

        <Container className="relative z-10 flex w-full items-center py-20">
          <Reveal variants={fadeUp} className="flex max-w-xl flex-col gap-6">
            <span className="text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
              {opportunities.breadcrumb}
            </span>

            <h2 className="font-heading text-5xl font-semibold sm:text-6xl">
              {opportunities.heading}
            </h2>

            <span className="h-px w-24 bg-primary-foreground/30" aria-hidden="true" />

            <p className="font-heading text-3xl font-semibold text-balance sm:text-4xl">
              {opportunities.statement}
            </p>

            <p className="max-w-[48ch] text-lg text-primary-foreground/80">{opportunities.body}</p>

            <RevealGroup className="flex flex-wrap gap-3">
              {opportunities.values.map((value) => (
                <RevealItem
                  key={value.label}
                  className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-2.5 backdrop-blur-sm"
                >
                  <value.icon className="size-4 text-cta" aria-hidden="true" strokeWidth={1.75} />
                  <span className="text-sm font-medium text-primary-foreground">{value.label}</span>
                </RevealItem>
              ))}
            </RevealGroup>

            <div className="pt-2">
              <Link
                href={opportunities.cta.href}
                className={cn(buttonVariants({ variant: "cta", size: "xl" }), "group")}
              >
                {opportunities.cta.label}
                <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
