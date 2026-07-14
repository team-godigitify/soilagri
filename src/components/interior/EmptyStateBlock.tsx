import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type EmptyStateBlockProps = {
  eyebrow?: string;
  title: string;
  body: string;
  cta?: { label: string; href: string };
  className?: string;
};

/**
 * Designed "coming soon / expanding" block for content that genuinely
 * doesn't exist yet (Law 3) — gated content renders this instead of a
 * fabricated item. A PageStub must never ship again; an EmptyStateBlock may.
 */
export function EmptyStateBlock({ eyebrow = "In Progress", title, body, cta, className }: EmptyStateBlockProps) {
  return (
    <div className={cn("flex flex-col items-start gap-4 rounded-3xl bg-accent px-8 py-10 sm:px-10", className)}>
      <span className="text-xs font-semibold tracking-[0.14em] text-accent-foreground/70 uppercase">
        {eyebrow}
      </span>
      <h3 className="font-heading text-xl font-semibold text-accent-foreground sm:text-2xl">{title}</h3>
      <p className="max-w-[60ch] text-sm text-accent-foreground/80">{body}</p>
      {cta && (
        <Link href={cta.href} className={cn(buttonVariants({ variant: "outline", size: "lg" }), "mt-1")}>
          {cta.label}
        </Link>
      )}
    </div>
  );
}
