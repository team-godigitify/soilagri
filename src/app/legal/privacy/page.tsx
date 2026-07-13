import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <PageStub
      title="Privacy Policy"
      note="Our privacy policy is being rebuilt — check back soon."
    />
  );
}
