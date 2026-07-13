import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <PageStub
      title="Terms of Use"
      note="Our terms of use are being rebuilt — check back soon."
    />
  );
}
