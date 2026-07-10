import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageStub
      title="Contact"
      note="The RFQ form and office contact details are scheduled for M5, pending the email provider decision and leadership routing confirmation."
    />
  );
}
