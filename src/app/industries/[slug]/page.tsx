import { notFound } from "next/navigation";
import { PageStub } from "@/components/shared/PageStub";
import { findNavChild, sectionSlugs } from "@/content/nav";

export function generateStaticParams() {
  return sectionSlugs("/industries").map((slug) => ({ slug }));
}

export default async function IndustryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const child = findNavChild(`/industries/${slug}`);
  if (!child) notFound();

  return (
    <PageStub
      title={child.label}
      note={child.description ?? "Content for this page is being rebuilt — check back soon."}
    />
  );
}
