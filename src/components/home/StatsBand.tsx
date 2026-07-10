import { Container } from "@/components/shared/Container";
import { stats } from "@/content/home";

/**
 * Real, footnoted numbers only (Section 2.2) — ships with however many
 * stats are actually true. Never padded to a round number.
 */
export function StatsBand() {
  return (
    <section className="border-b border-border bg-secondary/40">
      <Container className="grid grid-cols-1 gap-8 py-12 sm:grid-cols-2">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1">
            <span className="text-4xl font-semibold text-foreground">
              {stat.value}
            </span>
            <span className="text-base text-muted-foreground">
              {stat.label}
            </span>
            <span className="text-xs text-muted-foreground">
              *{stat.footnote}
            </span>
          </div>
        ))}
      </Container>
    </section>
  );
}
