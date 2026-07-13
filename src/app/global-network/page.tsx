import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Global Network" };

export default function GlobalNetworkPage() {
  return (
    <PageStub
      title="Global Network"
      note="Our supplier network, buyer network, trading regions, and logistics partners are being rebuilt — check back soon."
    />
  );
}
