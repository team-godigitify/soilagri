"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, Menu } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { MegaMenu } from "@/components/layout/MegaMenu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { navItems } from "@/content/nav";
import { company } from "@/content/company";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 24;

function isItemActive(item: NavItem, pathname: string): boolean {
  const matches = (href: string) => href !== "/" && pathname.startsWith(href);
  if (pathname === item.href || matches(item.href)) return true;
  return (
    item.columns?.some((col) =>
      col.items.some((child) => pathname === child.href || matches(child.href))
    ) ?? false
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const floating = isHome && !scrolled;

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // display:contents — header contributes no box of its own, so the sticky
    // <nav> below is laid out as a direct child of <body> (full page height)
    // instead of this ~116px-tall wrapper. Sticky's containing block is
    // bounded by its actual DOM parent's box regardless of that parent's
    // `position` value, so nesting it inside a short `position:relative`
    // header (the previous approach) made it stop sticking after ~1 row of
    // scroll — it had nowhere left to stick within.
    <header className="contents">
      {/* Utility bar */}
      <div className="bg-foreground text-background">
        <Container className="flex h-9 items-center justify-between text-xs">
          <span className="hidden sm:inline">
            Montreal, Canada (HQ) &middot; 10 Offices Worldwide
          </span>
          <a
            href={`mailto:${company.generalEmail}`}
            className="flex items-center gap-1.5 hover:underline"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {company.generalEmail}
          </a>
        </Container>
      </div>

      {/* Main nav — floats transparently over the hero on the homepage until
          the user scrolls, then solidifies and sticks to the viewport top.
          Mega menus open on hover/focus via CSS (group-hover), so no JS
          open-state to keep in sync with the DOM. */}
      <nav
        className={cn(
          "z-50 text-primary-foreground transition-[background-color,box-shadow] duration-500",
          floating
            ? "absolute inset-x-0 top-9 bg-linear-to-b from-black/40 via-black/10 to-transparent"
            : "sticky top-0 bg-primary shadow-elevated-sm"
        )}
      >
        <Container className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="flex shrink-0 items-center rounded-lg bg-white px-2.5 py-1.5">
            <Image
              src="/logo.png"
              alt={company.brandName}
              width={1668}
              height={792}
              preload
              className="h-8 w-auto sm:h-10"
            />
          </Link>

          <ul className="hidden items-center xl:flex">
            {navItems.map((item) => {
              const active = isItemActive(item, pathname);
              return (
                <li key={item.label} className="group shrink-0">
                  <Link
                    href={item.href}
                    className="relative flex items-center gap-1 px-2.5 py-2 text-sm font-medium whitespace-nowrap after:absolute after:right-2.5 after:bottom-1 after:left-2.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-cta after:transition-transform after:duration-300 hover:after:scale-x-100"
                  >
                    <span className={cn(active && "text-cta")}>{item.label}</span>
                    {item.columns && (
                      <ChevronDown
                        className="size-4 transition-transform duration-300 group-hover:rotate-180"
                        aria-hidden="true"
                      />
                    )}
                    {active && (
                      <span className="absolute right-2.5 bottom-1 left-2.5 h-0.5 scale-x-100 bg-cta" aria-hidden="true" />
                    )}
                  </Link>
                  {item.columns && <MegaMenu item={item} onNavigate={() => {}} />}
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className={cn(buttonVariants({ variant: "cta", size: "xl" }), "hidden h-11! sm:inline-flex")}
            >
              Request a Quote
            </Link>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <button
                    type="button"
                    className="rounded-md p-2 hover:bg-primary-foreground/10 xl:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="size-6" />
                  </button>
                }
              />
              <SheetContent side="right" className="w-full border-border sm:max-w-md">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <ul className="flex flex-col gap-1 overflow-y-auto px-4 pb-4">
                  {navItems.map((item) =>
                    item.columns ? (
                      <li key={item.label}>
                        <details className="group/details">
                          <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted">
                            {item.label}
                            <ChevronDown className="size-4 transition-transform group-open/details:rotate-180" />
                          </summary>
                          <div className="flex flex-col gap-4 py-2 pl-3">
                            {item.columns.map((column, i) => (
                              <div key={column.heading ?? i} className="flex flex-col gap-1">
                                {column.heading && (
                                  <span className="px-3 text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                                    {column.heading}
                                  </span>
                                )}
                                {column.items.map((child) => (
                                  <Link
                                    key={child.href}
                                    href={child.href}
                                    className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                                    onClick={() => setMobileOpen(false)}
                                  >
                                    {child.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                            <Link
                              href={item.href}
                              className="px-3 text-sm font-medium text-primary hover:underline"
                              onClick={() => setMobileOpen(false)}
                            >
                              View all {item.label} &rarr;
                            </Link>
                          </div>
                        </details>
                      </li>
                    ) : (
                      <li key={item.label}>
                        <Link
                          href={item.href}
                          className="block rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
                <div className="mt-auto px-4 pb-4">
                  <Link
                    href="/contact"
                    className={cn(buttonVariants({ variant: "cta" }), "h-11 w-full")}
                    onClick={() => setMobileOpen(false)}
                  >
                    Request a Quote
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Container>
      </nav>
    </header>
  );
}
