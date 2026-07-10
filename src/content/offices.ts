import type { Office } from "@/types/content";

/**
 * Extensible office array (Law 5 / Section 5.2) — /offices and the footer
 * both map over this list, so adding office #3 is a content-only change.
 * lat/lng and the San Jose ZIP are [CONFIRM]ed as omitted for now; map
 * pins render only when lat/lng are present (Section 7.7, Edge case 5).
 */
export const offices: Office[] = [
  {
    id: "ca-montreal",
    label: "Head Office",
    country: "Canada",
    region: "Quebec",
    addressLines: ["204-6424 Jean-Talon EST", "Montreal, QC H1S 1M8"],
    isHeadquarters: true,
  },
  {
    id: "us-san-jose",
    label: "USA Region Office",
    country: "United States",
    region: "California",
    addressLines: ["5433 Makati Cir", "San Jose, CA"],
    isHeadquarters: false,
  },
];
