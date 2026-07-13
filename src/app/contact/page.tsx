import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { PageHero } from "@/components/shared/PageHero";
import { Reveal } from "@/components/shared/Reveal";
import { RFQForm } from "@/components/contact/RFQForm";
import { RFQFormSkeleton } from "@/components/contact/RFQFormSkeleton";
import { ContactInfoBlock } from "@/components/contact/ContactInfoBlock";
import { stockImages } from "@/content/images";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from Agrisoil.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us what you need and we'll get back to you — typically within 24-48 hours."
        image={stockImages.handshake}
      />
      <Container className="flex flex-col gap-10 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-12">
          <Reveal className="rounded-2xl border border-border bg-card p-7 shadow-elevated-xs lg:col-span-2 lg:p-9">
            <Suspense fallback={<RFQFormSkeleton />}>
              <RFQForm />
            </Suspense>
          </Reveal>
          <Reveal delay={0.1}>
            <ContactInfoBlock />
          </Reveal>
        </div>
      </Container>
      <Container className="py-10 text-sm text-muted-foreground">
        Have questions before requesting a quote?{" "}
        <Link href="/resources#faq" className="text-primary hover:underline">
          See our FAQ →
        </Link>
      </Container>
    </>
  );
}
