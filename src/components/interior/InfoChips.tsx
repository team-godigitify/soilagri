import { cn } from "@/lib/utils";

/** Pill chips for packaging / origins / incoterms lists — the mega-menu column's rounded surface, reused as a tag row. */
export function InfoChips({ items, className }: { items: string[]; className?: string }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full bg-secondary px-3.5 py-1.5 text-sm font-medium text-secondary-foreground"
        >
          {item}
        </span>
      ))}
    </div>
  );
}
