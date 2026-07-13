import { notFound } from "next/navigation";
import { PageStub } from "@/components/shared/PageStub";
import { productCategories } from "@/content/nav";

export function generateStaticParams() {
  return productCategories().map(({ category }) => ({ category }));
}

export default async function ProductCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const match = productCategories().find((c) => c.category === category);
  if (!match) notFound();

  return (
    <PageStub
      title={match.heading}
      note="This category page is being rebuilt — check back soon."
    />
  );
}
