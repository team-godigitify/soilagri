import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/**
 * Pre-footer CTA band (Section 2.2 / peak-end rule) — the page's last
 * impression is the action, not a footer link.
 */
export function CTABand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="flex flex-col items-start gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="max-w-[30ch] text-2xl font-semibold text-balance sm:text-3xl">
          Ready to request a quote?
        </h2>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "cta" }), "h-11 px-6")}
        >
          Request a Quote
        </Link>
      </Container>
    </section>
  );
}
