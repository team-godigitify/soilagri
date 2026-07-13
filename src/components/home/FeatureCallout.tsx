import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { feature } from "@/content/home";
import { cn } from "@/lib/utils";

/** Large image + editorial text — the "About" visual anchor, image-dominant. */
export function FeatureCallout() {
  return (
    <section className="bg-background py-35 sm:py-40">
      <Container className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <Reveal variants={fadeRight} className="relative h-96 overflow-hidden rounded-3xl sm:h-136">
          <Image
            src={feature.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal variants={fadeLeft} className="flex flex-col gap-6">
          <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-10 bg-cta" aria-hidden="true" />
            {feature.eyebrow}
          </span>
          <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
            {feature.title}
          </h2>
          <p className="max-w-[48ch] text-lg text-muted-foreground">{feature.body}</p>
          <div className="pt-2">
            <Link
              href={feature.cta.href}
              className={cn(buttonVariants({ variant: "default", size: "xl" }), "group")}
            >
              {feature.cta.label}
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
