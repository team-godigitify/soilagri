import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type FaqItem = { question: string; answer: string };

/** The mobile drawer's <details>/<summary> accordion pattern, promoted to content. */
export function FAQAccordion({ items, className }: { items: FaqItem[]; className?: string }) {
  return (
    <div
      className={cn(
        "flex flex-col divide-y divide-border rounded-2xl border border-border bg-card shadow-elevated-xs",
        className
      )}
    >
      {items.map((item) => (
        <details key={item.question} className="group/details px-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-left font-heading text-base font-medium text-foreground">
            {item.question}
            <ChevronDown
              className="size-4 shrink-0 text-muted-foreground transition-transform duration-300 group-open/details:rotate-180"
              aria-hidden="true"
            />
          </summary>
          <p className="max-w-[70ch] pb-5 text-sm text-muted-foreground">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
