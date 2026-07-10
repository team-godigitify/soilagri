import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Capabilities",
};

export default function CapabilitiesPage() {
  return (
    <PageStub
      title="Capabilities"
      note="Sourcing, Trading, Logistics, and Quality & Compliance sections are scheduled for M4, pending client-confirmed copy."
    />
  );
}
