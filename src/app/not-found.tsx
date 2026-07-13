import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[50vh] flex-col items-start justify-center gap-4 py-24">
      <h1 className="font-heading text-3xl font-medium text-foreground">
        Page not found
      </h1>
      <p className="max-w-[60ch] text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have
        moved.
      </p>
      <Link href="/products" className={buttonVariants({ variant: "default" })}>
        View products
      </Link>
    </Container>
  );
}
