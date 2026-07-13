import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type TimelineStepProps = {
  index: number;
  id?: string;
  title: string;
  children: React.ReactNode;
  isLast?: boolean;
};

export function TimelineStep({ index, id, title, children, isLast }: TimelineStepProps) {
  return (
    <RevealItem id={id} className={cn("relative flex gap-6 sm:gap-8", !isLast && "pb-12 sm:pb-16")}>
      <div className="flex shrink-0 flex-col items-center">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-base font-medium text-primary-foreground">
          {String(index).padStart(2, "0")}
        </span>
        {!isLast ? <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" /> : null}
      </div>
      <div className="flex flex-1 flex-col gap-3 pt-1.5">
        <h2 className="font-heading text-2xl font-medium text-foreground">{title}</h2>
        {children}
      </div>
    </RevealItem>
  );
}

export function ProcessTimeline({ children }: { children: React.ReactNode }) {
  return <RevealGroup className="flex flex-col">{children}</RevealGroup>;
}
