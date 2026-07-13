import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Reveal } from "@/components/shared/Reveal";
import { buttonVariants } from "@/components/ui/button";
import { fadeLeft, fadeRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

type SplitSectionProps = {
  eyebrow?: string;
  title: string;
  body: string;
  cta: { label: string; href: string };
  image: string;
  imageSide?: "left" | "right";
  className?: string;
};

/** Reusable image+text split — used for editorial "about/growth" blocks. */
export function SplitSection({
  eyebrow,
  title,
  body,
  cta,
  image,
  imageSide = "right",
  className,
}: SplitSectionProps) {
  return (
    <section className={cn("bg-background py-35 sm:py-40", className)}>
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal
          variants={imageSide === "left" ? fadeRight : fadeLeft}
          className={cn("flex flex-col gap-6", imageSide === "left" && "lg:order-2")}
        >
          {eyebrow && (
            <span className="flex items-center gap-3 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
              <span className="h-px w-10 bg-cta" aria-hidden="true" />
              {eyebrow}
            </span>
          )}
          <h2 className="font-heading text-4xl font-semibold text-balance sm:text-5xl">
            {title}
          </h2>
          <p className="max-w-[50ch] text-lg text-muted-foreground">{body}</p>
          <div className="pt-2">
            <Link
              href={cta.href}
              className={cn(buttonVariants({ variant: "default", size: "xl" }), "group")}
            >
              {cta.label}
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>

        <Reveal
          variants={imageSide === "left" ? fadeLeft : fadeRight}
          className={cn(
            "relative h-96 overflow-hidden rounded-3xl sm:h-136",
            imageSide === "left" && "lg:order-1"
          )}
        >
          <Image
            src={image}
            alt=""
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </Reveal>
      </Container>
    </section>
  );
}
