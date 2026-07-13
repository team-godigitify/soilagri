import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { faqItems } from "@/content/faq";

/**
 * Native <details>/<summary> — accessible and keyboard-operable with
 * zero JS, no custom ARIA wiring needed.
 */
export function FAQSection() {
  return (
    <Container id="faq" className="flex flex-col gap-10 scroll-mt-24 py-16 sm:py-24">
      <SectionHeading eyebrow="FAQ" title="Frequently asked questions" />
      <RevealGroup className="flex flex-col gap-3">
        {faqItems.map((item) => (
          <RevealItem key={item.question}>
            <details className="group rounded-2xl border border-border bg-card px-6 py-5 shadow-elevated-xs transition-colors duration-300 open:border-primary/25">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-base font-medium text-foreground">
                {item.question}
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[70ch] text-sm text-muted-foreground">
                {item.answer}
              </p>
            </details>
          </RevealItem>
        ))}
      </RevealGroup>
    </Container>
  );
}
