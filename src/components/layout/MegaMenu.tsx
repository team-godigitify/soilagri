"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import type { NavItem } from "@/types/content";
import { cn } from "@/lib/utils";

/**
 * Full-width mega-menu: brand-color panel spanning the viewport, opened
 * below the header. Heading + description on the left, the section's
 * links in the middle (a chevron marks links that lead to their own
 * sub-navigation), and a representative image on the right.
 */
export function MegaMenu({ items }: { items: NavItem[] }) {
  const [openLabel, setOpenLabel] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);

  const openItem = items.find((item) => item.label === openLabel);

  function cancelClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }
  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenLabel(null), 150);
  }

  useEffect(() => {
    if (!openLabel) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenLabel(null);
    }
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpenLabel(null);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openLabel]);

  return (
    <div ref={rootRef} className="relative" onMouseLeave={scheduleClose}>
      <div className="hidden items-center gap-7 lg:flex">
        {items
          .filter((item) => item.href !== "/")
          .map((item) =>
            item.children && item.children.length > 0 ? (
              <button
                key={item.href}
                type="button"
                aria-expanded={openLabel === item.label}
                aria-haspopup="true"
                onMouseEnter={() => {
                  cancelClose();
                  setOpenLabel(item.label);
                }}
                onClick={() =>
                  setOpenLabel((v) => (v === item.label ? null : item.label))
                }
                className={cn(
                  "flex items-center gap-1.5 text-sm font-medium transition-colors",
                  openLabel === item.label
                    ? "text-foreground"
                    : "text-foreground/80 hover:text-foreground"
                )}
              >
                {item.label}
                <ChevronDown
                  className={cn(
                    "size-3.5 transition-transform duration-300",
                    openLabel === item.label && "rotate-180"
                  )}
                  aria-hidden="true"
                />
              </button>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => {
                  cancelClose();
                  setOpenLabel(null);
                }}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            )
          )}
      </div>

      <AnimatePresence>
        {openItem ? (
          <motion.div
            key={openItem.label}
            role="menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={cancelClose}
            className="fixed inset-x-0 top-18 z-40 bg-primary text-primary-foreground shadow-elevated-lg sm:top-20"
          >
            <div className="absolute inset-0 bg-grain opacity-20 mix-blend-overlay" aria-hidden="true" />
            <Container className="relative grid grid-cols-[1fr_1fr_1.3fr]">
              <div className="flex flex-col gap-4 py-10 pr-8">
                <h2 className="w-fit font-heading text-2xl font-medium underline decoration-cta decoration-2 underline-offset-8">
                  {openItem.label}
                </h2>
                {openItem.description ? (
                  <p className="max-w-[32ch] text-sm text-primary-foreground/75">
                    {openItem.description}
                  </p>
                ) : null}
              </div>

              <nav className="flex flex-col gap-1 border-l border-primary-foreground/15 py-10 pl-8">
                {openItem.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    role="menuitem"
                    onClick={() => setOpenLabel(null)}
                    className="group flex items-center justify-between gap-2 rounded-md py-2 text-sm text-primary-foreground/85 transition-colors hover:text-primary-foreground"
                  >
                    {child.label}
                    {child.children && child.children.length > 0 ? (
                      <ChevronRight
                        className="size-3.5 text-primary-foreground/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-cta"
                        aria-hidden="true"
                      />
                    ) : null}
                  </Link>
                ))}
              </nav>

              <div className="relative hidden overflow-hidden lg:-mr-[max(2rem,calc((100vw-1280px)/2+2rem))] lg:block">
                {openItem.image ? (
                  <Image
                    src={openItem.image}
                    alt=""
                    fill
                    sizes="480px"
                    className="object-cover"
                  />
                ) : null}
                <div className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-primary/50" />
              </div>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
