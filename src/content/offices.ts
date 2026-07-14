import type { Office } from "@/types/content";
import { company } from "@/content/company";

/**
 * Single source of truth for office data — utility bar, footer, contact
 * page, NetworkMap, and /about/global-presence all render from this array.
 *
 * Supersedes the two-office model in the client's content document
 * (content-source/agrisoil content.txt, Ch.1: Montreal + San Jose). This
 * newer 10-office list wins per precedence (v5 Section 1) — flagged to the
 * client rather than silently reconciled:
 * [CONFIRM: was the San Jose, CA office closed/replaced by Houston, TX, or
 * should San Jose remain an 11th location? Content doc Ch.1/8/14 and the
 * v4 build both listed San Jose — this list does not.]
 *
 * lat/lng are approximate city-center coordinates for each street address —
 * public geographic fact, not company data — used to plot the Contact page
 * map (src/components/contact/ContactMap.tsx).
 */
export const offices: Office[] = [
  {
    id: "montreal",
    label: "Montreal, Canada",
    region: "North America",
    kind: "hq",
    address: company.headOffice,
    email: company.generalEmail,
    lat: 45.497,
    lng: -73.57,
  },
  {
    id: "houston",
    label: "Houston, USA",
    region: "North America",
    kind: "office",
    address: "700 Louisiana Street, Suite 3950, Houston, TX 77002, USA",
    email: company.generalEmail,
    lat: 29.7601,
    lng: -95.3701,
  },
  {
    id: "sao-paulo",
    label: "São Paulo, Brazil",
    region: "South America",
    kind: "office",
    address: "Avenida Paulista 1374, Bela Vista, São Paulo, SP 01310-100, Brazil",
    email: company.generalEmail,
    lat: -23.5613,
    lng: -46.6565,
  },
  {
    id: "rotterdam",
    label: "Rotterdam, Netherlands",
    region: "Europe",
    kind: "office",
    address: "Weena 505, 3013 AL Rotterdam, Netherlands",
    email: company.generalEmail,
    lat: 51.9244,
    lng: 4.4777,
  },
  {
    id: "london",
    label: "London, UK",
    region: "Europe",
    kind: "office",
    address: "1 Canada Square, Canary Wharf, London E14 5AB, United Kingdom",
    email: company.generalEmail,
    lat: 51.5049,
    lng: -0.0197,
  },
  {
    id: "dubai",
    label: "Dubai, UAE",
    region: "Middle East",
    kind: "office",
    address: "Level 14, Boulevard Plaza Tower 1, Downtown Dubai, UAE",
    email: company.generalEmail,
    lat: 25.1972,
    lng: 55.2744,
  },
  {
    id: "johannesburg",
    label: "Johannesburg, South Africa",
    region: "Africa",
    kind: "office",
    address: "135 Rivonia Road, Sandton, Johannesburg 2196, South Africa",
    email: company.generalEmail,
    lat: -26.1076,
    lng: 28.0567,
  },
  {
    id: "nairobi",
    label: "Nairobi, Kenya",
    region: "Africa",
    kind: "office",
    address: "One Africa Place, Waiyaki Way, Westlands, Nairobi, Kenya",
    email: company.generalEmail,
    lat: -1.2649,
    lng: 36.8028,
  },
  {
    id: "singapore",
    label: "Singapore",
    region: "Asia",
    kind: "office",
    address: "1 Raffles Place, Singapore 048616",
    email: company.generalEmail,
    lat: 1.284,
    lng: 103.8515,
  },
  {
    id: "sydney",
    label: "Sydney, Australia",
    region: "Oceania",
    kind: "office",
    address: "Level 20, 321 Kent Street, Sydney NSW 2000, Australia",
    email: company.generalEmail,
    lat: -33.8688,
    lng: 151.2058,
  },
];

export function officesByRegion(): { region: string; offices: Office[] }[] {
  const regions = Array.from(new Set(offices.map((office) => office.region)));
  return regions.map((region) => ({
    region,
    offices: offices.filter((office) => office.region === region),
  }));
}
