import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { ParallaxImage } from "@/components/shared/ParallaxImage";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ContentSplitProps = {
  eyebrow?: string;
  title: string;
  body: string;
  image: string;
  imageAlt?: string;
  reverse?: boolean;
  cta?: { label: string; href: string };
  tone?: "background" | "secondary";
  children?: React.ReactNode;
};

/**
 * TrackRecordSplit's grammar generalized: full-bleed image one side, panel
 * the other. `reverse` mirrors it — the same left/right flip used between
 * QualitySpotlight and FoodSecureBand on the homepage.
 */
export function ContentSplit({
  eyebrow,
  title,
  body,
  image,
  imageAlt = "",
  reverse = false,
  cta,
  tone = "background",
  children,
}: ContentSplitProps) {
  return (
    <section className={tone === "secondary" ? "bg-secondary" : "bg-background"}>
      <div className="grid lg:grid-cols-2">
        <Reveal
          variants={reverse ? fadeLeft : fadeRight}
          className={cn("relative h-96 sm:h-136 lg:h-auto", reverse && "lg:order-2")}
        >
          <ParallaxImage
            src={image}
            alt={imageAlt}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </Reveal>

        <Reveal
          variants={reverse ? fadeRight : fadeLeft}
          className="flex flex-col justify-center gap-6 px-8 py-14 sm:px-12 sm:py-16 lg:px-16 xl:px-20"
        >
          <div className="flex flex-col gap-3">
            {eyebrow && (
              <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                <span className="h-px w-10 bg-cta" aria-hidden="true" />
                {eyebrow}
              </span>
            )}
            <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance text-primary sm:text-4xl">
              {title}
            </h2>
            <p className="max-w-[54ch] text-base text-muted-foreground sm:text-lg">{body}</p>
          </div>

          {children}

          {cta && (
            <Link href={cta.href} className={cn(buttonVariants({ variant: "default", size: "lg" }), "group w-fit")}>
              {cta.label}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          )}
        </Reveal>
      </div>
    </section>
  );
}
