import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { heroContent } from "@/content/home";
import { cn } from "@/lib/utils";

/**
 * No licensed photography is confirmed yet, so this ships in the
 * "hero image fails" fallback state by default (Section 10, edge case 11):
 * solid --color-primary background, headline still fully legible, zero
 * layout shift when a real photo is added later. Norman visceral impact
 * comes from palette coherence + restraint rather than imagery for now.
 */
export function Hero() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="flex flex-col gap-6 py-24 sm:py-32">
        <h1 className="max-w-[20ch] text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl">
          {heroContent.headline}
        </h1>
        <p className="max-w-[60ch] text-lg text-primary-foreground/85">
          {heroContent.subhead}
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-11 border-primary-foreground/40 bg-transparent px-5 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            )}
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "cta" }), "h-11 px-5")}
          >
            Request a Quote
          </Link>
        </div>
      </Container>
    </section>
  );
}
