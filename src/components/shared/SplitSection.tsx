import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SplitSectionProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  image: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
  cta?: { label: string; href: string };
  list?: string[];
  /** Optional floating stat card overlapping the image's bottom corner. */
  inset?: { value: string; label: string };
  className?: string;
};

/**
 * Alternating image/content block (Bunge/enterprise-corporate pattern) —
 * generic stock photography, image side configurable so consecutive
 * sections don't repeat the same layout.
 */
export function SplitSection({
  eyebrow,
  title,
  children,
  image,
  imageAlt = "",
  imageSide = "left",
  cta,
  list,
  inset,
  className,
}: SplitSectionProps) {
  return (
    <section className={cn("py-16 sm:py-24", className)}>
      <Container
        className={cn(
          "grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20",
          imageSide === "right" && "lg:[&>*:first-child]:order-2"
        )}
      >
        <Reveal
          variants={{
            hidden: { opacity: 0, x: imageSide === "right" ? 24 : -24 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
            },
          }}
          className={cn("relative", inset && "mb-8 lg:mb-0")}
        >
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl shadow-elevated-lg ring-1 ring-foreground/5">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="(min-width: 1024px) 560px, 100vw"
              className="object-cover"
            />
          </div>
          {inset ? (
            <div
              className={cn(
                "absolute -bottom-6 flex flex-col gap-0.5 rounded-xl bg-card px-6 py-4 shadow-elevated-lg ring-1 ring-foreground/8",
                imageSide === "right" ? "-left-4 sm:-left-8" : "-right-4 sm:-right-8"
              )}
            >
              <span className="font-heading text-3xl font-medium text-primary">
                {inset.value}
              </span>
              <span className="text-xs text-muted-foreground">{inset.label}</span>
            </div>
          ) : null}
        </Reveal>
        <RevealGroup className="flex flex-col gap-4">
          {eyebrow ? (
            <RevealItem>
              <span className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary uppercase">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                {eyebrow}
              </span>
            </RevealItem>
          ) : null}
          <RevealItem>
            <h2 className="font-heading text-3xl font-medium text-balance text-foreground sm:text-4xl">
              {title}
            </h2>
          </RevealItem>
          {children ? (
            <RevealItem className="flex flex-col gap-3 text-muted-foreground">
              {children}
            </RevealItem>
          ) : null}
          {list ? (
            <RevealItem>
              <ul className="mt-1 flex flex-col gap-1.5">
                {list.map((item) => (
                  <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary" aria-hidden="true">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealItem>
          ) : null}
          {cta ? (
            <RevealItem>
              <Link
                href={cta.href}
                className={cn(buttonVariants({ variant: "default" }), "mt-2 w-fit")}
              >
                {cta.label}
              </Link>
            </RevealItem>
          ) : null}
        </RevealGroup>
      </Container>
    </section>
  );
}
