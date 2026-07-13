import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Resources" };

export default function ResourcesPage() {
  return (
    <PageStub
      title="Resources"
      note="News and resources are being rebuilt — check back soon."
    />
  );
}
