import type { CompanyInfo } from "@/types/content";

/**
 * Every field here is either a confirmed client fact (Section 5.1 of the
 * build spec) or intentionally left undefined pending client confirmation.
 * Do not fill in founded / tagline / aboutSummary with placeholder text —
 * components must render nothing for a field that is undefined, not a
 * "coming soon" stand-in that could be mistaken for real content.
 */
export const company: CompanyInfo = {
  legalName: "9542-2309 Québec Inc.",
  brandName: "Agrisoil",
  registrationNumber: "1180957798",
  headOffice: "204-6424 Jean-Talon EST, Montreal, QC H1S 1M8, Canada",
  founded: undefined,
  tagline: undefined,
  aboutSummary: undefined,
  generalPhone: undefined,
  generalEmail: undefined,
};
