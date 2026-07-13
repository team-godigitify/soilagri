import { Container } from "@/components/shared/Container";
import { RevealGroup, RevealItem, Reveal } from "@/components/shared/Reveal";
import { fadeLeft } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { StatItem } from "@/types/content";

type IconStatBandProps = {
  title: string;
  highlight?: string;
  body: string;
  stats: StatItem[];
};

/** Dark intro band pairing a headline with a 2x2 icon-stat grid. */
export function IconStatBand({ title, highlight, body, stats }: IconStatBandProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <section className="bg-foreground text-background">
      <Container className="grid gap-14 py-35 sm:py-40 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal variants={fadeLeft} className="flex flex-col gap-6">
          <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
            {highlight ? (
              <>
                {parts[0]}
                <span className="text-cta">{highlight}</span>
                {parts[1]}
              </>
            ) : (
              title
            )}
          </h2>
          <p className="max-w-[52ch] text-lg text-background/70">{body}</p>
        </Reveal>

        <RevealGroup className="grid grid-cols-2 gap-x-10">
          {stats.map((stat, i) => (
            <RevealItem
              key={stat.label}
              className={cn(
                "flex flex-col gap-4 py-6",
                i < 2 && "border-b border-background/15",
                i % 2 === 0 && "border-r border-background/15 pr-8",
                i % 2 !== 0 && "pl-8"
              )}
            >
              <stat.icon className="size-9 text-cta" aria-hidden="true" strokeWidth={1.5} />
              <span className="font-heading text-5xl font-semibold">{stat.value}</span>
              <span className="text-sm text-background/70">{stat.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
