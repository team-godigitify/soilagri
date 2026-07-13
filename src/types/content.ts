export type NavChild = {
  label: string;
  href: string;
  description?: string;
  children?: { label: string; href: string }[];
};

export type NavItem = {
  label: string;
  href: string;
  /** Shown in the mega-menu panel next to the link list, when children are present. */
  description?: string;
  /** Mega-menu panel image, when children are present. */
  image?: string;
  children?: NavChild[];
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
  /** Trade name the company operates under, if different from legalName */
  tradeName?: string;
  brandName: string;
  registrationNumber: string;
  headOffice: string;
  /** [CONFIRM] — omit any "Established" claim until given */
  founded?: string;
  tagline?: string;
  aboutSummary?: string[];
  mission?: string;
  vision?: string;
  values?: { title: string; description: string }[];
  founderQuote?: { quote: string; name: string; title: string };
  whyAgrisoil?: string[];
  marketsServed?: string[];
  /** [CONFIRM] — does a general phone line exist? */
  generalPhone?: string;
  generalEmail?: string;
};

export type Leader = {
  name: string;
  title: string;
  region?: string;
  /** Only rendered if the client opts into publishing personal emails */
  email?: string;
};

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  subhead: string;
  cta: { label: string; href: string };
  image: string;
};

export type ProductCategory = {
  slug: string;
  name: string;
  description: string;
  /** false renders a "more products coming soon" state instead of a listing */
  isLive: boolean;
  /** Generic industry stock photo — never captioned as a specific facility */
  image?: string;
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
