import { notFound } from "next/navigation";
import { PageStub } from "@/components/shared/PageStub";
import { productCategories } from "@/content/nav";

export function generateStaticParams() {
  return productCategories().flatMap(({ category, items }) =>
    items.map((item) => ({ category, slug: item.slug }))
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const match = productCategories()
    .find((c) => c.category === category)
    ?.items.find((item) => item.slug === slug);
  if (!match) notFound();

  return (
    <PageStub
      title={match.label}
      note="Full product specs are being rebuilt — check back soon, or request a quote in the meantime."
    />
  );
}
