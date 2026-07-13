"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const PREMIUM_EASE = [0.16, 1, 0.3, 1] as const;

type WipeRevealProps = {
  children: React.ReactNode;
  className?: string;
  curtainClassName?: string;
  delay?: number;
  /** Which edge the curtain recedes toward. "right" reveals left-to-right; "left" reveals right-to-left. */
  origin?: "left" | "right";
};

/**
 * Reveals its children by sliding a solid "curtain" panel away — a
 * scaleX/transform-origin animation rather than a clip-path one. clip-path
 * animated via Framer Motion's `whileInView` was found to never trigger at
 * narrow (mobile) viewport widths despite firing reliably on desktop;
 * transform-based reveals don't have that failure mode.
 */
export function WipeReveal({
  children,
  className,
  curtainClassName,
  delay = 0,
  origin = "right",
}: WipeRevealProps) {
  return (
    <div className={cn("relative", className)}>
      {children}
      <motion.div
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: PREMIUM_EASE, delay }}
        style={{ transformOrigin: origin }}
        className={cn("absolute inset-0 bg-background", curtainClassName)}
        aria-hidden="true"
      />
    </div>
  );
}
