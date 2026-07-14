import type { Metadata } from "next";
import { MapPin, Mail, Clock } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { InnerHero } from "@/components/interior/InnerHero";
import { SectionIntro } from "@/components/interior/SectionIntro";
import { Reveal } from "@/components/shared/Reveal";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactMap } from "@/components/contact/ContactMap";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote or get in touch with SoilAgri's Montreal head office and regional offices worldwide. We respond within 24–48 hours.",
};

export default function ContactPage() {
  const hq = offices.find((office) => office.kind === "hq");

  return (
    <>
      <InnerHero
        eyebrow="Get in Touch"
        title="Talk to Us"
        subhead="Whether you're requesting a quote, exploring a supplier partnership, or have a general question — we respond within 24–48 hours."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="bg-background py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16">
            <Reveal>
              <ContactForm />
            </Reveal>

            <Reveal className="flex flex-col gap-6">
              <div className="rounded-3xl bg-secondary p-7">
                <span className="flex items-center gap-2 text-sm font-semibold tracking-widest text-primary uppercase">
                  <Clock className="size-4" aria-hidden="true" />
                  Response Time
                </span>
                <p className="mt-2 text-sm text-secondary-foreground/80">
                  Every enquiry is reviewed and quoted within 24–48 hours. Every quotation reflects transparency;
                  every shipment demonstrates reliability.
                </p>
              </div>

              {hq && (
                <div className="rounded-3xl border border-border bg-card p-7 shadow-elevated-xs">
                  <span className="text-xs font-semibold tracking-widest text-cta uppercase">Head Office</span>
                  <h3 className="mt-1 font-heading text-lg font-semibold text-foreground">{hq.label}</h3>
                  <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                    <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                    {hq.address}
                  </p>
                  <a
                    href={`mailto:${hq.email}`}
                    className="mt-2 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground hover:underline"
                  >
                    <Mail className="size-4 shrink-0" aria-hidden="true" />
                    {hq.email}
                  </a>
                </div>
              )}
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-secondary py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <SectionIntro
            eyebrow="Global Presence"
            title="Find the Office Nearest You"
            lede={`${offices.length} offices worldwide — select one to zoom in, or view them all at once.`}
          />

          <Reveal>
            <ContactMap offices={offices} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
