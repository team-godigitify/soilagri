import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { company } from "@/content/company";

/**
 * Large editorial pull-quote — an emotional trust beat pulled onto the
 * homepage (the full founder bio lives on /about). Distinct treatment
 * from the About page's blockquote so the two pages don't feel repeated.
 */
export function FounderQuoteBand() {
  if (!company.founderQuote) return null;

  return (
    <section className="relative overflow-hidden bg-secondary/50 py-20 sm:py-28">
      <div className="absolute inset-0 bg-grain opacity-50" aria-hidden="true" />
      <Container className="relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span
            className="font-heading text-7xl leading-none text-cta/70 select-none"
            aria-hidden="true"
          >
            &ldquo;
          </span>
        </Reveal>
        <Reveal delay={0.05}>
          <p className="max-w-[52ch] font-heading text-2xl font-medium text-balance text-foreground italic sm:text-3xl lg:text-4xl">
            {company.founderQuote.quote}
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <footer className="flex flex-col items-center gap-1">
            <span className="h-px w-10 bg-cta" aria-hidden="true" />
            <span className="mt-3 text-sm font-semibold text-foreground">
              {company.founderQuote.name}
            </span>
            <span className="text-sm text-muted-foreground">
              {company.founderQuote.title}
            </span>
          </footer>
        </Reveal>
      </Container>
    </section>
  );
}
