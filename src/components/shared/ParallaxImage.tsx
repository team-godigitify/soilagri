"use client";

import { useRef } from "react";
import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const BLEED = 220;
const RANGE = 170;

type ParallaxImageProps = Omit<ImageProps, "fill">;

/**
 * Drop-in replacement for `<Image fill />` inside a `relative overflow-hidden`
 * container — shifts the image vertically as it scrolls through the
 * viewport for a subtle depth effect. Reserved for editorial/mood
 * photography; product catalog images stay static.
 */
export function ParallaxImage({ alt, className, ...props }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-RANGE, RANGE]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y, top: -BLEED, bottom: -BLEED }} className="absolute inset-x-0">
        <Image fill alt={alt} {...props} className={className} />
      </motion.div>
    </div>
  );
}
