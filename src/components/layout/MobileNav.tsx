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
              "md:hidden"
            )}
            aria-label="Open menu"
          />
        }
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-70">
        <SheetHeader>
          <SheetTitle>Agrisoil</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-1 px-4">
          {primaryNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex h-11 items-center rounded-md px-2 text-base font-medium text-foreground hover:bg-muted"
            >
              {item.label}
            </Link>
          ))}
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
