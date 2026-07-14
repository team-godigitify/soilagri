/**
 * Organization JSON-LD builder. Parameterized (not content-coupled) so it
 * can be wired up again once the new brand's name/legal name/address exist.
 */
export function organizationJsonLd(org: {
  name: string;
  legalName?: string;
  address?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: org.name,
    ...(org.legalName ? { legalName: org.legalName } : {}),
    ...(org.address ? { address: org.address } : {}),
  };
}

type ProductLike = {
  name: string;
  positioning: string;
  specs?: { property: string; value: string }[];
};

/** Product JSON-LD — specs (when confirmed) render as additionalProperty; price is intentionally omitted (quote-on-request, not a fixed offer). */
export function productJsonLd(product: ProductLike) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.positioning,
    ...(product.specs && product.specs.length > 0
      ? {
          additionalProperty: product.specs.map((spec) => ({
            "@type": "PropertyValue",
            name: spec.property,
            value: spec.value,
          })),
        }
      : {}),
  };
}

/** BreadcrumbList JSON-LD — `url` entries are site-relative; consumers resolve them against metadataBase. */
export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/** FAQPage JSON-LD for /resources/faqs. */
export function faqJsonLd(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
