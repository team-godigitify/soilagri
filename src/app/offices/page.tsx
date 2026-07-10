import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Offices",
};

export default function OfficesPage() {
  return (
    <PageStub
      title="Offices"
      note="Office cards for Montreal (HQ) and San Jose are scheduled for M4 — the San Jose ZIP code is still pending confirmation."
    />
  );
}
