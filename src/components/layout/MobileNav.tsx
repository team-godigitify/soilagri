"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { primaryNav, ctaNavItem } from "@/content/nav";
import { cn } from "@/lib/utils";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "lg:hidden"
            )}
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-80 overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Agrisoil</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {primaryNav.map((item) =>
            item.children && item.children.length > 0 ? (
              <details key={item.href} className="group">
                <summary className="flex h-11 cursor-pointer list-none items-center justify-between rounded-md px-2 text-base font-medium text-foreground hover:bg-muted">
                  {item.label}
                  <span
                    className="text-muted-foreground transition-transform group-open:rotate-180"
                    aria-hidden="true"
                  >
                    ⌄
                  </span>
                </summary>
                <div className="flex flex-col gap-0.5 py-1 pl-4">
                  {item.children.map((child) => (
                    <div key={child.href} className="flex flex-col">
                      <Link
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="flex h-9 items-center rounded-md px-2 text-sm font-medium text-foreground/90 hover:bg-muted"
                      >
                        {child.label}
                      </Link>
                      {child.children && child.children.length > 0 ? (
                        <div className="flex flex-col pl-4">
                          {child.children.map((grandchild) => (
                            <Link
                              key={grandchild.href}
                              href={grandchild.href}
                              onClick={() => setOpen(false)}
                              className="flex h-8 items-center rounded-md px-2 text-sm text-muted-foreground hover:bg-muted"
                            >
                              {grandchild.label}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </details>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex h-11 items-center rounded-md px-2 text-base font-medium text-foreground hover:bg-muted"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            href={ctaNavItem.href}
            onClick={() => setOpen(false)}
            className={cn(
              buttonVariants({ variant: "cta" }),
              "mt-4 h-11 w-full px-5"
            )}
          >
            {ctaNavItem.label}
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
