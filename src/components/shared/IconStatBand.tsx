import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Counter } from "@/components/shared/Counter";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";

export type IconStat = {
  icon: LucideIcon;
  value: string;
  label: string;
  footnote?: string;
};

/**
 * Elevated stat tiles designed to float over the hero's bottom edge
 * (see `-mt-*` on the wrapping section in the page) — a common premium
 * corporate-site technique that ties the hero and the trust band together.
 */
export function IconStatBand({ stats }: { stats: IconStat[] }) {
  return (
    <section className="relative z-10 -mt-14 sm:-mt-20">
      <Container>
        <RevealGroup className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-6 shadow-elevated-lg ring-1 ring-foreground/8 sm:grid-cols-4 sm:gap-6 sm:p-10">
          {stats.map((stat) => (
            <RevealItem
              key={stat.label}
              className="flex flex-col items-center gap-2.5 text-center sm:items-start sm:text-left"
            >
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary">
                <stat.icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
              <span className="font-heading text-3xl font-medium text-foreground sm:text-4xl">
                <Counter value={stat.value} />
              </span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
              {stat.footnote ? (
                <span className="text-xs text-muted-foreground/70">
                  *{stat.footnote}
                </span>
              ) : null}
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
