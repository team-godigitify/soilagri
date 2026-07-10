export type NavItem = {
  label: string;
  href: string;
};

export type Office = {
  id: string;
  label: string;
  country: string;
  region: string;
  addressLines: string[];
  isHeadquarters: boolean;
  lat?: number;
  lng?: number;
};

export type CompanyInfo = {
  legalName: string;
  brandName: string;
  registrationNumber: string;
  headOffice: string;
  /** [CONFIRM] — omit any "Established" claim until given */
  founded?: string;
  /** [CONFIRM] — original line; not a borrowed competitor tagline */
  tagline?: string;
  /** [CONFIRM] — 2-3 real paragraphs from the client */
  aboutSummary?: string[];
  /** [CONFIRM] — does a general phone line exist? */
  generalPhone?: string;
  /** [CONFIRM] — does info@agrisoil.com (or similar) exist? */
  generalEmail?: string;
};

export type Leader = {
  name: string;
  title: string;
  region?: string;
  /** Only rendered if the client opts into publishing personal emails */
  email?: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  /** false renders a "more products coming soon" state instead of a listing */
  isLive: boolean;
};

export type ProductSpec = {
  property: string;
  testMethod?: string;
  value: string;
};

export type SpecializationBlock = {
  id: string;
  heading: string;
  body: string[];
};

export type Product = {
  slug: string;
  category: string;
  name: string;
  shortDescription: string;
  overview: string;
  specs: ProductSpec[];
  forms?: string[];
  packaging?: string[];
  capacity?: string;
  originRegions?: string[];
  qualityDocs?: string[];
  specialization?: SpecializationBlock[];
  images?: string[];
};
