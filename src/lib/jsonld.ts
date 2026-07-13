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
