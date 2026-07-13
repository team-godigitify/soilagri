import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <PageStub
      title="About SoilAgri"
      note="Our story, leadership, and values are being rebuilt — check back soon."
    />
  );
}
