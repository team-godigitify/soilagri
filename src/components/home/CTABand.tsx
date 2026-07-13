import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Pre-footer CTA band (Section 2.2 / peak-end rule) — the page's last
 * impression is the action, not a footer link.
 */
export function CTABand() {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 bg-mesh-primary" aria-hidden="true" />
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" aria-hidden="true" />
      <Container className="relative flex flex-col items-start gap-7 py-20 sm:flex-row sm:items-center sm:justify-between sm:py-24">
        <Reveal className="flex flex-col gap-2">
          <span className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary-foreground/75 uppercase">
            <span className="h-px w-8 bg-cta" aria-hidden="true" />
            Get in touch
          </span>
          <h2 className="max-w-[26ch] font-heading text-3xl font-medium text-balance sm:text-4xl">
            Ready to request a quote?
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "cta" }), "h-12 px-7")}
          >
            Request a Quote
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
