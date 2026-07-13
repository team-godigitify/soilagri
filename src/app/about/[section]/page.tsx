import { notFound } from "next/navigation";
import { PageStub } from "@/components/shared/PageStub";
import { findNavChild, sectionSlugs } from "@/content/nav";

export function generateStaticParams() {
  return sectionSlugs("/about").map((section) => ({ section }));
}

export default async function AboutSectionPage({
  params,
}: {
  params: Promise<{ section: string }>;
}) {
  const { section } = await params;
  const child = findNavChild(`/about/${section}`);
  if (!child) notFound();

  return (
    <PageStub
      title={child.label}
      note={child.description ?? "Content for this page is being rebuilt — check back soon."}
    />
  );
}
