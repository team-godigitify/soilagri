import type { NavItem } from "@/types/content";

export const primaryNav: NavItem[] = [
  { label: "Products", href: "/products" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "About", href: "/about" },
  { label: "Offices", href: "/offices" },
];

export const ctaNavItem: NavItem = {
  label: "Request a Quote",
  href: "/contact",
};

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
];
