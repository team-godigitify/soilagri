import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

type BreadcrumbsProps = {
  items: Crumb[];
  tone?: "dark" | "light";
  className?: string;
};

/** Label-role trail with chevron separators; last item renders as current page. */
export function Breadcrumbs({ items, tone = "light", className }: BreadcrumbsProps) {
  const muted = tone === "dark" ? "text-primary-foreground/60" : "text-muted-foreground";
  const current = tone === "dark" ? "text-primary-foreground" : "text-foreground";
  const hover = tone === "dark" ? "hover:text-primary-foreground" : "hover:text-foreground";

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "flex flex-wrap items-center gap-1.5 text-xs font-semibold tracking-[0.06em] uppercase",
        muted,
        className
      )}
    >
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={`${item.label}-${i}`} className="flex items-center gap-1.5">
            {item.href && !isLast ? (
              <Link href={item.href} className={cn("transition-colors", hover)}>
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? current : undefined}>{item.label}</span>
            )}
            {!isLast && <ChevronRight className="size-3" aria-hidden="true" />}
          </span>
        );
      })}
    </nav>
  );
}
