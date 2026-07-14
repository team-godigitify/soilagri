import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type RFQBandProps = {
  heading?: string;
  body?: string;
  cta?: { label: string; href: string };
};

/** CTABand's grammar with contextual copy — the closing band every interior page ends on. */
export function RFQBand({
  heading = "Talk to Us",
  body = "Whether you're requesting a quote or want to learn more about our products and supply chain, we want to hear from you.",
  cta = { label: "Contact Us", href: "/contact" },
}: RFQBandProps) {
  return (
    <section className="bg-foreground text-background">
      <Container className="flex flex-col items-center gap-6 py-28 text-center sm:py-32">
        <Reveal className="flex flex-col items-center gap-5">
          <h2 className="font-heading text-4xl font-semibold sm:text-5xl">{heading}</h2>
          <p className="max-w-[52ch] text-lg text-background/70">{body}</p>
          <Link href={cta.href} className={cn(buttonVariants({ variant: "cta", size: "xl" }))}>
            {cta.label}
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
