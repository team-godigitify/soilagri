"use client";

import { Container } from "@/components/shared/Container";

export type AnchorItem = { id: string; label: string };

/** Sticky-below-header horizontal chip row for long pages (spec sections, legal docs). Scrolls on mobile. */
export function AnchorSubnav({ items }: { items: AnchorItem[] }) {
  return (
    <div className="sticky top-20 z-30 border-b border-border bg-background/95 backdrop-blur-sm">
      <Container className="flex gap-1 overflow-x-auto py-3">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="shrink-0 rounded-full px-4 py-1.5 text-sm font-medium whitespace-nowrap text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            {item.label}
          </a>
        ))}
      </Container>
    </div>
  );
}
