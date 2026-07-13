import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { scaleIn } from "@/lib/motion";
import { buttonVariants } from "@/components/ui/button";
import { foodSecure } from "@/content/home";
import { cn } from "@/lib/utils";

/** Contained, rounded-corner image panel with overlay + CTA — a visual break between sections. */
export function FoodSecureBand() {
  const titleParts = foodSecure.title.split(foodSecure.highlight);

  return (
    <section className="bg-background py-35 sm:py-40">
      <Container>
        <Reveal variants={scaleIn} className="relative h-140 overflow-hidden rounded-3xl sm:h-160">
          <Image
            src={foodSecure.image}
            alt=""
            fill
            sizes="(min-width: 1320px) 1320px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-foreground/90 via-foreground/35 to-transparent" />
          <div className="relative z-10 flex h-full flex-col justify-end gap-5 p-10 text-primary-foreground sm:p-16">
            <div className="flex max-w-[54ch] flex-col gap-5">
              <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary-foreground/80 uppercase">
                <span className="h-px w-10 bg-cta" aria-hidden="true" />
                {foodSecure.eyebrow}
              </span>
              <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
                {titleParts[0]}
                <span className="text-cta">{foodSecure.highlight}</span>
                {titleParts[1]}
              </h2>
              <p className="text-lg text-primary-foreground/85">{foodSecure.body}</p>
              <div className="pt-2">
                <Link
                  href={foodSecure.cta.href}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "xl" }),
                    "group border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
                  )}
                >
                  {foodSecure.cta.label}
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
