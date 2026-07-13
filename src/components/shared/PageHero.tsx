import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
  /** "mesh" renders a photo-free gradient background — for pages without a strong lead image. */
  variant?: "photo" | "mesh";
};

/**
 * Interior-page hero (About/Industries/Supply Chain/Resources/Contact) —
 * same dark-overlay-on-photo pattern as the Home hero, sized down for a
 * secondary page. Generic industry imagery only (Section 6).
 */
export function PageHero({
  eyebrow,
  title,
  description,
  image,
  variant = "photo",
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      {variant === "photo" && image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/85 to-primary/55" />
        </>
      ) : (
        <div className="absolute inset-0 bg-mesh-primary" />
      )}
      <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      <Container className="relative flex flex-col gap-4 py-20 sm:py-24">
        <RevealGroup className="flex flex-col gap-4">
          {eyebrow ? (
            <RevealItem>
              <span className="flex items-center gap-3 text-sm font-medium tracking-[0.14em] text-primary-foreground/80 uppercase">
                <span className="h-px w-8 bg-cta" aria-hidden="true" />
                {eyebrow}
              </span>
            </RevealItem>
          ) : null}
          <RevealItem>
            <h1
              className={cn(
                "max-w-[24ch] font-heading text-4xl font-medium text-balance sm:text-5xl lg:text-6xl"
              )}
            >
              {title}
            </h1>
          </RevealItem>
          {description ? (
            <RevealItem>
              <p className="max-w-[65ch] text-lg text-primary-foreground/85">
                {description}
              </p>
            </RevealItem>
          ) : null}
        </RevealGroup>
      </Container>
    </section>
  );
}
