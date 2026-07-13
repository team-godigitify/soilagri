import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function CTABand() {
  return (
    <section className="bg-foreground text-background">
      <Container className="flex flex-col items-center gap-6 py-35 text-center sm:py-40">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">Talk to Us</h2>
          <p className="max-w-[52ch] text-lg text-background/70">
            Whether you&apos;re requesting a quote or want to learn more about our
            products and supply chain, we want to hear from you.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ variant: "cta", size: "xl" }))}
          >
            Contact Us
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
