import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { MegaMenu } from "@/components/layout/MegaMenu";
import { LanguageToggle } from "@/components/layout/LanguageToggle";
import { primaryNav, ctaNavItem } from "@/content/nav";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

// Code-split the mobile menu (base-ui Sheet/Dialog) out of the initial
// bundle — it's below-the-fold and click-triggered, not needed for first
// paint.
const MobileNav = dynamic(() =>
  import("@/components/layout/MobileNav").then((mod) => mod.MobileNav)
);

/**
 * Sticky header: logo left, nav center, gold CTA right (Section 7 global
 * shell). The CTA is the single Von Restorff isolate and stays visible on
 * mobile — Fitts's Law, the ask must always be one tap away.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-md supports-backdrop-filter:bg-background/75">
      <Container className="flex h-18 items-center justify-between gap-4 sm:h-20">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/logo.png"
            alt={company.brandName}
            width={1668}
            height={792}
            priority
            className="h-9 w-auto sm:h-11"
          />
        </Link>

        <MegaMenu items={primaryNav} />

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
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
