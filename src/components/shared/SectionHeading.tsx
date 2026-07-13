import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

/**
 * Every heading is self-sufficient (Section 2.4 layer-cake pattern) — a
 * committee member who is forwarded a deep link should understand the
 * section from the heading alone, without reading the page above it.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span
          className={cn(
            "flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary uppercase",
            align === "center" && "justify-center"
          )}
        >
          <span className="h-px w-8 bg-cta" aria-hidden="true" />
          {eyebrow}
        </span>
      ) : null}
      <h2 className="font-heading text-3xl font-medium text-balance sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[65ch] text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
