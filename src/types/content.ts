import type { LucideIcon } from "lucide-react";

export type NavChild = {
  label: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
};

export type NavColumn = {
  heading?: string;
  items: NavChild[];
};

export type NavFeatured = {
  eyebrow?: string;
  title: string;
  description: string;
  cta: { label: string; href: string };
  icon?: LucideIcon;
};

export type NavItem = {
  label: string;
  href: string;
  /** Flat list — renders as a simple single-column dropdown. */
  children?: NavChild[];
  /** Multi-column layout — renders as a full-width mega menu. */
  columns?: NavColumn[];
  /** Optional highlighted panel shown alongside mega-menu columns. */
  featured?: NavFeatured;
};

export type HeroSlide = {
  eyebrow: string;
  headline: string;
  subhead: string;
  cta: { label: string; href: string };
  image: string;
};

export type StatItem = {
  icon: LucideIcon;
  value: string;
  label: string;
};

export type ServiceItem = {
  icon: LucideIcon;
  name: string;
  href: string;
};

export type NewsItem = {
  date: string;
  title: string;
  href: string;
  image: string;
};
