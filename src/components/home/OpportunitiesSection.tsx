import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { buttonVariants } from "@/components/ui/button";
import { opportunities } from "@/content/home";
import { cn } from "@/lib/utils";

export function OpportunitiesSection() {
  return (
    <section className="bg-secondary py-35 sm:py-40">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal variants={fadeRight} className="relative order-2 h-96 overflow-hidden rounded-3xl sm:h-136 lg:order-1">
          <Image
            src={opportunities.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal variants={fadeLeft} className="order-1 flex flex-col gap-6 lg:order-2">
          <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-10 bg-cta" aria-hidden="true" />
            {opportunities.eyebrow}
          </span>
          <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
            {opportunities.title}
          </h2>
          <p className="max-w-[48ch] text-lg text-muted-foreground">{opportunities.body}</p>

          <RevealGroup className="flex flex-wrap gap-3 pt-2">
            {opportunities.values.map((value) => (
              <RevealItem
                key={value.label}
                className="flex items-center gap-2 rounded-full bg-background px-4 py-2.5 shadow-elevated-xs"
              >
                <value.icon className="size-4 text-primary" aria-hidden="true" strokeWidth={1.75} />
                <span className="text-sm font-medium text-foreground">{value.label}</span>
              </RevealItem>
            ))}
          </RevealGroup>

          <div className="pt-2">
            <Link
              href={opportunities.cta.href}
              className={cn(buttonVariants({ variant: "default", size: "xl" }), "group")}
            >
              {opportunities.cta.label}
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
