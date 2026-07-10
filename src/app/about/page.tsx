import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageStub
      title="About Agrisoil"
      note="Company profile, values & vision, leadership, and footprint are scheduled for M2, pending client-confirmed copy."
    />
  );
}
