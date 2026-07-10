import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPage() {
  return (
    <PageStub
      title="Privacy Policy"
      note="Pending real legal review — placeholder legal text is not safe to publish (Section 12 launch checklist)."
    />
  );
}
