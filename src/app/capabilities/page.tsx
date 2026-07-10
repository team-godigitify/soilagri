import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { capabilitySections } from "@/content/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
};

/**
 * Every heading is self-sufficient (layer-cake, Section 2.4) so the
 * section structure is real even though the body copy isn't yet — a
 * buyer forwarded a #logistics link sees a coherent, honest section
 * heading rather than lorem ipsum.
 */
export default function CapabilitiesPage() {
  return (
    <Container className="flex flex-col gap-14 py-16">
      <SectionHeading
        eyebrow="Capabilities"
        title="Capabilities"
        description="Sourcing, trading, logistics, and quality & compliance are the four pillars of how we operate. Detailed copy for each is in progress, pending client confirmation."
      />
      <div className="flex flex-col gap-10">
        {capabilitySections.map((section) => (
          <div key={section.id} id={section.id} className="flex flex-col gap-2 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-foreground">
              {section.title}
            </h2>
            {section.body ? (
              section.body.map((paragraph, i) => (
                <p key={i} className="max-w-[70ch] text-muted-foreground">
                  {paragraph}
                </p>
              ))
            ) : (
              <p className="max-w-[70ch] text-muted-foreground">
                Content pending client confirmation.
              </p>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
