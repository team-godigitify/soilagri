import { company } from "@/content/company";
import type { Product } from "@/types/content";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.brandName,
    legalName: company.legalName,
    address: company.headOffice,
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.overview,
    category: product.category,
    brand: {
      "@type": "Organization",
      name: company.brandName,
    },
    additionalProperty: product.specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.property,
      value: spec.value,
      ...(spec.testMethod ? { description: `Test method: ${spec.testMethod}` } : {}),
    })),
  };
}
