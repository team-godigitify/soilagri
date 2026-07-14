import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { Breadcrumbs, type Crumb } from "@/components/interior/Breadcrumbs";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type HeroCta = { label: string; href: string };

type InnerHeroProps = {
  eyebrow?: string;
  title: string;
  subhead?: string;
  breadcrumbs?: Crumb[];
  primaryCta?: HeroCta;
  secondaryCta?: HeroCta;
  /**
   * Photo-right treatment — the homepage hero's concave clip-path at
   * reduced scale (Law 5) — for key pages: About, Global Network,
   * flagship products. Omit for the text-only variant used on utility
   * pages (legal, FAQs) and most catalog/service pages.
   */
  image?: string;
  imageAlt?: string;
};

/**
 * Every interior page opens with this — same design system, type roles,
 * and deep-green premium feel as the homepage Hero, at reduced height
 * (~45–55vh vs the homepage's min-h-screen) and with a single static
 * slide instead of a carousel. Sits in normal document flow under the
 * solid sticky nav (which occupies its own box on every non-home route),
 * so — unlike the homepage hero — it needs no extra top clearance.
 */
export function InnerHero({
  eyebrow,
  title,
  subhead,
  breadcrumbs,
  primaryCta,
  secondaryCta,
  image,
  imageAlt = "",
}: InnerHeroProps) {
  const content = (
    <RevealGroup className="flex flex-col gap-5">
      {breadcrumbs && (
        <RevealItem>
          <Breadcrumbs items={breadcrumbs} tone="dark" />
        </RevealItem>
      )}
      {eyebrow && (
        <RevealItem className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
          <span className="h-px w-10 bg-cta" aria-hidden="true" />
          {eyebrow}
        </RevealItem>
      )}
      <RevealItem>
        <h1 className="font-heading max-w-2xl text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl lg:text-[3.25rem]">
          {title}
        </h1>
      </RevealItem>
      {subhead && (
        <RevealItem>
          <p className="max-w-[56ch] text-lg text-primary-foreground/80">{subhead}</p>
        </RevealItem>
      )}
      {(primaryCta || secondaryCta) && (
        <RevealItem className="flex flex-wrap gap-3 pt-2">
          {primaryCta && (
            <Link
              href={primaryCta.href}
              className={cn(buttonVariants({ variant: "cta", size: "xl" }), "group")}
            >
              {primaryCta.label}
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "xl" }),
                "border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              )}
            >
              {secondaryCta.label}
            </Link>
          )}
        </RevealItem>
      )}
    </RevealGroup>
  );

  if (image) {
    return (
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="relative grid min-h-100 sm:min-h-[48vh] lg:min-h-[55vh] lg:grid-cols-[50%_50%]">
          {/* Same concave clip-path technique as the homepage Hero, reduced scale, distinct id to avoid collision. */}
          <svg width="0" height="0" aria-hidden="true" className="absolute">
            <defs>
              <clipPath id="innerhero-image-clip" clipPathUnits="objectBoundingBox">
                <path d="M0.06,0 L1,0 L1,1 L0.06,1 C0.06,0.78 0.28,0.66 0.28,0.5 C0.28,0.34 0.06,0.22 0.06,0 Z" />
              </clipPath>
            </defs>
          </svg>

          <div className="relative order-1 h-56 overflow-hidden sm:h-72 lg:absolute lg:inset-y-0 lg:right-0 lg:order-2 lg:h-auto lg:w-[56%] lg:[clip-path:url(#innerhero-image-clip)]">
            <ParallaxImage
              src={image}
              alt={imageAlt}
              priority
              sizes="(min-width: 1024px) 56vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative z-10 order-2 flex items-center py-12 lg:order-1 lg:py-16">
            <Container className="lg:pr-[4%] lg:pl-[6%]">{content}</Container>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-primary bg-grain text-primary-foreground">
      <Container className="relative flex min-h-100 flex-col justify-center gap-5 py-14 sm:min-h-[46vh] sm:py-16 lg:min-h-[50vh]">
        {content}
      </Container>
    </section>
  );
}
