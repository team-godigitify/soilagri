import type { Metadata } from "next";
import { Suspense } from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RFQForm } from "@/components/contact/RFQForm";
import { RFQFormSkeleton } from "@/components/contact/RFQFormSkeleton";
import { ContactInfoBlock } from "@/components/contact/ContactInfoBlock";

export const metadata: Metadata = {
  title: "Contact",
  description: "Request a quote from Agrisoil.",
};

export default function ContactPage() {
  return (
    <Container className="flex flex-col gap-10 py-16">
      <SectionHeading
        eyebrow="Contact"
        title="Request a Quote"
        description="Tell us what you need and we'll get back to you."
      />
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Suspense fallback={<RFQFormSkeleton />}>
            <RFQForm />
          </Suspense>
        </div>
        <div>
          <ContactInfoBlock />
        </div>
      </div>
    </Container>
  );
}
