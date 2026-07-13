import type { Leader } from "@/types/content";

/**
 * Client-confirmed leadership (company profile document). A "Marketing
 * Head: Danykholi" role was also listed in the source document, but with
 * only a surname and no email — not rendered until a full name is given.
 */
export const leadership: Leader[] = [
  {
    name: "Vivek Vohra",
    title: "Founder, CEO & Managing Director",
    email: "vivek@agrisoil.com",
  },
  {
    name: "Csaavi Danykholi",
    title: "Finance Head",
    email: "csaavi@agrisoil.com",
  },
];
