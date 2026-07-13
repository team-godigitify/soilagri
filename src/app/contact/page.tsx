import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageStub
      title="Contact"
      note="The RFQ form is being rebuilt on top of the existing quote-request backend — check back soon."
    />
  );
}
