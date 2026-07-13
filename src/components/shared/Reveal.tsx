"use client";

import { motion, type Variants } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "section";
};

/** Fade-and-rise on scroll into view. Animates once; respects reduced motion via `transform`/`opacity` only. */
export function Reveal({
  children,
  className,
  variants = fadeUp,
  delay = 0,
  as = "div",
}: RevealProps) {
  const MotionTag = as === "section" ? motion.section : motion.div;
  return (
    <MotionTag
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

/** Stagger a grid/list of children — each child should be a motion element using `fadeUp` (or wrap items in RevealItem). */
export function RevealGroup({ children, className }: RevealGroupProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={staggerContainer}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.div id={id} className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
