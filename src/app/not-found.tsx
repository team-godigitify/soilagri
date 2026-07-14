import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-primary bg-mesh-primary bg-grain text-primary-foreground">
      <Container className="flex min-h-[70vh] flex-col items-start justify-center gap-5 py-24">
        <span className="text-sm font-semibold tracking-[0.16em] text-primary-foreground/70 uppercase">
          Error 404
        </span>
        <h1 className="font-heading text-4xl leading-[1.1] font-semibold text-balance sm:text-5xl">
          Page not found
        </h1>
        <p className="max-w-[60ch] text-lg text-primary-foreground/80">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <Link href="/" className={buttonVariants({ variant: "cta", size: "xl" })}>
          Back to home
        </Link>
      </Container>
    </section>
  );
}
