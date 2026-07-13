import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Industries" };

export default function IndustriesPage() {
  return (
    <PageStub
      title="Industries"
      note="The industries we serve are being rebuilt — check back soon."
    />
  );
}
