import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import type { NavItem } from "@/types/content";

const GRID_COLS: Record<number, string> = {
  1: "sm:grid-cols-1",
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-3",
};

type MegaMenuProps = {
  item: NavItem;
  onNavigate: () => void;
};

/** Full-width enterprise mega-menu panel: link columns + an optional featured CTA card. */
export function MegaMenu({ item, onNavigate }: MegaMenuProps) {
  if (!item.columns) return null;

  return (
    <div className="border-border bg-card text-card-foreground shadow-elevated-lg invisible absolute inset-x-0 top-full z-50 max-h-[70vh] -translate-y-2 overflow-y-auto border-t opacity-0 transition-all duration-300 ease-out group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
      <Container className="grid grid-cols-1 gap-12 py-10 lg:grid-cols-[1fr_auto]">
        <div
          className={`grid gap-x-10 gap-y-8 ${GRID_COLS[item.columns.length] ?? "sm:grid-cols-1"}`}
        >
          {item.columns.map((column, i) => (
            <div key={column.heading ?? i} className="flex flex-col gap-1">
              {column.heading && (
                <h3 className="text-muted-foreground mb-3 text-xs font-semibold tracking-[0.12em] uppercase">
                  {column.heading}
                </h3>
              )}
              <ul className="flex flex-col gap-1">
                {column.items.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className="group hover:bg-secondary flex items-start gap-3 rounded-xl p-2.5 transition-colors"
                    >
                      {child.icon && (
                        <span className="bg-secondary text-primary group-hover:bg-primary group-hover:text-primary-foreground flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors">
                          <child.icon
                            className="size-4.5"
                            aria-hidden="true"
                            strokeWidth={1.75}
                          />
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span className="text-foreground text-sm font-medium">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-muted-foreground text-xs">
                            {child.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.featured && (
          <div className="bg-primary text-primary-foreground flex w-full flex-col gap-4 rounded-2xl p-7 lg:w-80">
            {item.featured.icon && (
              <span className="bg-primary-foreground/15 flex size-11 items-center justify-center rounded-xl">
                <item.featured.icon
                  className="size-5"
                  aria-hidden="true"
                  strokeWidth={1.75}
                />
              </span>
            )}
            {item.featured.eyebrow && (
              <span className="text-cta text-xs font-semibold tracking-[0.14em] uppercase">
                {item.featured.eyebrow}
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-balance">
              {item.featured.title}
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              {item.featured.description}
            </p>
            <Link
              href={item.featured.cta.href}
              onClick={onNavigate}
              className="group text-cta mt-auto flex items-center gap-1.5 text-sm font-semibold"
            >
              {item.featured.cta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        )}
      </Container>
    </div>
  );
}
