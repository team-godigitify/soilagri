import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow ? (
        <span className="text-sm font-medium tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold text-balance sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-[65ch] text-base text-muted-foreground sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
