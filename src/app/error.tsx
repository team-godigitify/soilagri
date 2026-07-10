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
    <Container className="flex min-h-[50vh] flex-col items-start justify-center gap-4 py-24">
      <h1 className="text-3xl font-semibold text-foreground">
        Something went wrong
      </h1>
      <p className="max-w-[60ch] text-muted-foreground">
        An unexpected error occurred. Please try again.
      </p>
      <Button onClick={() => reset()}>Try again</Button>
    </Container>
  );
}
