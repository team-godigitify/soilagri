import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { OfficeCard } from "@/components/shared/OfficeCard";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: "Offices",
  description: "Agrisoil's offices in Montreal, Canada and San Jose, USA.",
};

/**
 * Maps over content/offices.ts — adding office #3 is a content-only
 * change, zero layout code touched (Law 5).
 */
export default function OfficesPage() {
  return (
    <Container className="flex flex-col gap-10 py-16">
      <SectionHeading
        eyebrow="Offices"
        title="Our Offices"
        description="Agrisoil's footprint across North America."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {offices.map((office) => (
          <OfficeCard key={office.id} office={office} />
        ))}
      </div>
    </Container>
  );
}
