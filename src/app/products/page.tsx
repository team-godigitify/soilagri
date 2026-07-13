import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = { title: "Products" };

export default function ProductsPage() {
  return (
    <PageStub
      title="Products"
      note="The full product catalog is being rebuilt — check back soon."
    />
  );
}
