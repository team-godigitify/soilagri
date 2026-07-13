import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { scaleIn } from "@/lib/motion";
import { services } from "@/content/home";

export function ProductsGrid() {
  return (
    <section className="bg-background py-35 sm:py-40">
      <Container className="flex flex-col gap-14">
        <Reveal className="flex max-w-[56ch] flex-col gap-5">
          <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
            <span className="h-px w-10 bg-cta" aria-hidden="true" />
            What We Trade
          </span>
          <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
            Our Products
          </h2>
          <p className="text-lg text-muted-foreground">
            Fertilizers and agricultural commodities sourced from trusted
            producers across the Middle East, Central Asia, North Africa,
            Europe, and the Americas.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.name} variants={scaleIn}>
              <Link
                href={service.href}
                className="group relative flex h-56 flex-col justify-between overflow-hidden rounded-3xl bg-secondary p-8 shadow-elevated-xs transition-all duration-500 hover:-translate-y-1.5 hover:shadow-elevated-lg"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform duration-500 group-hover:scale-110">
                  <service.icon className="size-7" aria-hidden="true" strokeWidth={1.6} />
                </span>
                <div className="flex items-end justify-between gap-3">
                  <span className="font-heading text-xl font-semibold text-foreground">
                    {service.name}
                  </span>
                  <ArrowUpRight
                    className="size-5 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
