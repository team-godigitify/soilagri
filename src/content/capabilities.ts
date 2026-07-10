export type CapabilitySection = {
  id: string;
  title: string;
  /** [CONFIRM] — real operational copy from the client. Every sentence
   * here becomes a claim a buyer can act on (Section 7.6), so this stays
   * unpopulated rather than guessed. */
  body?: string[];
};

/**
 * Section order matches Section 7.6's narrative rhythm. Body copy is
 * intentionally empty for all four — unlike the Home headline, this copy
 * describes specific operational capabilities (financing, owned
 * logistics, compliance processes) that can't be safely inferred from
 * the confirmed facts alone. Adding real copy is a content-only change.
 */
export const capabilitySections: CapabilitySection[] = [
  { id: "sourcing", title: "Sourcing" },
  { id: "trading", title: "Trading" },
  { id: "logistics", title: "Logistics" },
  { id: "quality-compliance", title: "Quality & Compliance" },
];
