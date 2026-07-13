import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  BadgeCheck,
  HeartHandshake,
  Sparkles,
  Handshake,
  Leaf,
} from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";

const iconByTitle: Record<string, LucideIcon> = {
  Integrity: ShieldCheck,
  Reliability: BadgeCheck,
  "Customer Commitment": HeartHandshake,
  Excellence: Sparkles,
  Partnership: Handshake,
  Responsibility: Leaf,
};

export function ValuesGrid({
  values,
}: {
  values: { title: string; description: string }[];
}) {
  return (
    <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {values.map((value) => {
        const Icon = iconByTitle[value.title];
        return (
          <RevealItem
            key={value.title}
            className="group flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated"
          >
            {Icon ? (
              <span className="flex size-11 items-center justify-center rounded-full bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
            ) : null}
            <h3 className="font-heading text-lg font-medium text-foreground">
              {value.title}
            </h3>
            <p className="text-sm text-muted-foreground">{value.description}</p>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
