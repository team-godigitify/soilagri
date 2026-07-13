"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Structural affordance only — English is the only language today
 * (Section 3.4: fr-CA is not confirmed as needed for the site itself,
 * only for product bag labeling). The dropdown genuinely only offers
 * English rather than implying French exists; wiring a second locale
 * later is additive here, not a rebuild.
 */
export function LanguageToggle() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary/40 hover:text-foreground"
      >
        English
        <svg aria-hidden="true" viewBox="0 0 10 6" className="size-2">
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      </button>
      {open ? (
        <div
          role="menu"
          className="absolute top-full right-0 z-50 mt-2 w-36 rounded-lg border border-border bg-popover p-1 text-popover-foreground shadow-lg"
        >
          <div
            role="menuitem"
            aria-current="true"
            className="flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm text-foreground"
          >
            English
            <span aria-hidden="true">✓</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
