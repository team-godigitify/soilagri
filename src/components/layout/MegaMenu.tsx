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
    <div
      className="invisible absolute inset-x-0 top-full -translate-y-2 border-t border-border bg-card text-card-foreground opacity-0 shadow-elevated-lg transition-all duration-300 ease-out group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100"
    >
      <Container className="grid grid-cols-1 gap-12 py-10 lg:grid-cols-[1fr_auto]">
        <div className={`grid gap-x-10 gap-y-8 ${GRID_COLS[item.columns.length] ?? "sm:grid-cols-1"}`}>
          {item.columns.map((column, i) => (
            <div key={column.heading ?? i} className="flex flex-col gap-1">
              {column.heading && (
                <h3 className="mb-3 text-xs font-semibold tracking-[0.12em] text-muted-foreground uppercase">
                  {column.heading}
                </h3>
              )}
              <ul className="flex flex-col gap-1">
                {column.items.map((child) => (
                  <li key={child.href}>
                    <Link
                      href={child.href}
                      onClick={onNavigate}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-secondary"
                    >
                      {child.icon && (
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <child.icon className="size-4.5" aria-hidden="true" strokeWidth={1.75} />
                        </span>
                      )}
                      <span className="flex flex-col">
                        <span className="text-sm font-medium text-foreground">
                          {child.label}
                        </span>
                        {child.description && (
                          <span className="text-xs text-muted-foreground">
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
          <div className="flex w-full flex-col gap-4 rounded-2xl bg-primary p-7 text-primary-foreground lg:w-80">
            {item.featured.icon && (
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary-foreground/15">
                <item.featured.icon className="size-5" aria-hidden="true" strokeWidth={1.75} />
              </span>
            )}
            {item.featured.eyebrow && (
              <span className="text-xs font-semibold tracking-[0.14em] text-cta uppercase">
                {item.featured.eyebrow}
              </span>
            )}
            <h3 className="font-heading text-xl font-semibold text-balance">
              {item.featured.title}
            </h3>
            <p className="text-sm text-primary-foreground/80">{item.featured.description}</p>
            <Link
              href={item.featured.cta.href}
              onClick={onNavigate}
              className="group mt-auto flex items-center gap-1.5 text-sm font-semibold text-cta"
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
