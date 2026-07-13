import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <PageStub
      title="Services"
      note="End-to-end trading services — sourcing, procurement, logistics, and documentation — are being rebuilt. Check back soon."
    />
  );
}
