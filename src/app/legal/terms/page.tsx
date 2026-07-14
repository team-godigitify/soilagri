import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { AnchorSubnav } from "@/components/interior/AnchorSubnav";
import { Reveal } from "@/components/shared/Reveal";
import { termsOfUse } from "@/content/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms governing use of the SoilAgri website.",
};

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function TermsPage() {
  return (
    <>
      <InnerHero
        eyebrow="Legal"
        title={termsOfUse.title}
        subhead="The terms governing use of this website."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Terms of Use" }]}
      />

      <AnchorSubnav items={termsOfUse.sections.map((s) => ({ id: slugify(s.heading), label: s.heading }))} />

      <section className="bg-background py-16 sm:py-20">
        <Container className="flex flex-col gap-12">
          <div className="rounded-2xl border border-cta/30 bg-accent px-6 py-4 text-sm text-accent-foreground">
            <strong className="font-semibold">{termsOfUse.updated}.</strong> This page describes the site as
            built; it has not yet had formal legal review.
          </div>

          {termsOfUse.sections.map((section) => (
            <Reveal key={section.heading} id={slugify(section.heading)} className="flex scroll-mt-36 flex-col gap-3">
              <h2 className="font-heading text-2xl font-semibold text-primary">{section.heading}</h2>
              {section.body.map((paragraph, i) => (
                <p key={i} className="max-w-[65ch] text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </Reveal>
          ))}
        </Container>
      </section>
    </>
  );
}
