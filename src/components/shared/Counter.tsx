"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the leading numeric run in `value` (e.g. "50,000" → count up,
 * "24-48h" → numeric prefix "24" counts up, "-48h" suffix stays static).
 * Falls back to a static render for values with no leading digits.
 */
export function Counter({ value }: { value: string }) {
  const match = value.match(/^([\d,]+)(.*)$/);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReducedMotion = useReducedMotion();
  const target = match ? Number(match[1]?.replace(/,/g, "")) : null;
  const [animated, setAnimated] = useState<number | null>(null);

  useEffect(() => {
    if (target === null || !inView || prefersReducedMotion) return;
    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setAnimated(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, prefersReducedMotion, target]);

  const display =
    target === null
      ? value
      : animated !== null
        ? animated.toLocaleString("en-US")
        : !inView || prefersReducedMotion
          ? target.toLocaleString("en-US")
          : "0";

  return (
    <span ref={ref}>
      {display}
      {match ? match[2] : null}
    </span>
  );
}
