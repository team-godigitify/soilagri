import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <PageStub
      title="Terms of Service"
      note="Pending real legal review — placeholder legal text is not safe to publish (Section 12 launch checklist)."
    />
  );
}
