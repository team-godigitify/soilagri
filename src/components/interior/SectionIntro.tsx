import { Reveal } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  className?: string;
  align?: "left" | "center";
};

/** The homepage's own section-header pattern (eyebrow rule + h2 + lede), promoted to a standalone block. */
export function SectionIntro({ eyebrow, title, lede, className, align = "left" }: SectionIntroProps) {
  return (
    <Reveal
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
          <span className="h-px w-10 bg-cta" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-heading text-3xl leading-[1.15] font-semibold text-balance text-primary sm:text-4xl">
        {title}
      </h2>
      {lede && <p className="max-w-[60ch] text-base text-muted-foreground sm:text-lg">{lede}</p>}
    </Reveal>
  );
}
