"use client";

import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="relative overflow-hidden bg-primary bg-mesh-primary bg-grain text-primary-foreground">
      <Container className="flex min-h-[70vh] flex-col items-start justify-center gap-5 py-24">
        <span className="text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
          Something went wrong
        </span>
        <h1 className="font-heading text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
          Unexpected error
        </h1>
        <p className="max-w-[60ch] text-lg text-primary-foreground/80">
          Please try again. If the problem persists, get in touch and we&apos;ll help directly.
        </p>
        <Button variant="cta" size="xl" onClick={() => reset()}>
          Try again
        </Button>
      </Container>
    </section>
  );
}
