"use client";

import { forwardRef } from "react";
import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section";
  id?: string;
};

/** Fade-and-rise on scroll into view. Animates once; respects reduced motion via `transform`/`opacity` only. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
  id,
}: RevealProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

type RevealGroupProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Stagger a grid/list of children — each child should be a motion element
 * using `fadeUp` (or wrap items in RevealItem). Forwards its ref so it can
 * double as a scroll container directly — don't wrap it in a `display:
 * contents` passthrough div for that purpose, since `whileInView` needs a
 * real layout box to observe and a contents element has none, permanently
 * stuck at `initial`.
 */
export const RevealGroup = forwardRef<HTMLDivElement, RevealGroupProps>(function RevealGroup(
  { children, className },
  ref
) {
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
});

export function RevealItem({
  children,
  className,
  id,
  variants = fadeUp,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variants?: Variants;
}) {
  return (
    <motion.div id={id} className={className} variants={variants}>
      {children}
    </motion.div>
  );
}
