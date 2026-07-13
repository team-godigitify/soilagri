import { Container } from "@/components/shared/Container";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { valueProps } from "@/content/home";

/**
 * Deliberately not a card grid — a plain, wide-open typographic strip.
 * Icon + label only, no boxes, no paragraphs: the differentiators read
 * as a confident statement rather than a features list.
 */
export function ValueProps() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <RevealGroup className="flex flex-wrap items-start justify-center gap-x-14 gap-y-10 divide-y-0 text-center sm:justify-between">
          {valueProps.map((item) => (
            <RevealItem
              key={item.title}
              className="flex flex-1 basis-40 flex-col items-center gap-3"
            >
              <item.icon
                className="size-6 text-cta"
                aria-hidden="true"
                strokeWidth={1.5}
              />
              <span className="font-heading text-base font-medium text-foreground">
                {item.title}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
