import type { Metadata } from "next";
import { PageStub } from "@/components/shared/PageStub";

export const metadata: Metadata = {
  title: "Products",
};

export default function ProductsPage() {
  return (
    <PageStub
      title="Products"
      note="The product category index (Fertilizers: Urea 46% N, NPK 14-23-14+6S-1B) is scheduled for M3."
    />
  );
}
