import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { primaryNav, ctaNavItem } from "@/content/nav";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

/**
 * Sticky header: logo left, nav center, gold CTA right (Section 7 global
 * shell). The CTA is the single Von Restorff isolate and stays visible on
 * mobile — Fitts's Law, the ask must always be one tap away.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-foreground"
        >
          {company.brandName}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={ctaNavItem.href}
            className={cn(
              buttonVariants({ variant: "cta" }),
              "hidden h-11 px-5 sm:inline-flex"
            )}
          >
            {ctaNavItem.label}
          </Link>
          <Link
            href={ctaNavItem.href}
            className={cn(
              buttonVariants({ variant: "cta", size: "sm" }),
              "h-11 px-4 sm:hidden"
            )}
          >
            Quote
          </Link>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
