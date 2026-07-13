import type { NavItem } from "@/types/content";
import { productCategories, getProductsByCategory } from "@/content/products";
import { stockImages } from "@/content/images";

/**
 * Products dropdown is built from the product registry (Law 3/5) — a new
 * category or product is a content-only change, no nav code touched.
 */
const productsChildren = productCategories.map((category) => ({
  label: category.name,
  href: `/products/${category.slug}`,
  description: category.description,
  children: getProductsByCategory(category.slug).map((product) => ({
    label: product.name,
    href: `/products/${category.slug}/${product.slug}`,
  })),
}));

export const primaryNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    description:
      "Our story, mission, values, and the leadership behind Agrisoil's global trade operations.",
    image: stockImages.handshake,
    children: [
      { label: "Company Overview", href: "/about#overview" },
      { label: "Leadership", href: "/about#leadership" },
      { label: "Global Presence", href: "/about#footprint" },
      { label: "Mission, Vision & Values", href: "/about#values" },
      { label: "Why Agrisoil", href: "/about#why-agrisoil" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    description:
      "Fertilizers and agricultural commodities, sourced from trusted international producers.",
    image: stockImages.heroWheatField,
    children: productsChildren,
  },
  { label: "Industries", href: "/industries" },
  { label: "Supply Chain", href: "/supply-chain" },
  {
    label: "Resources",
    href: "/resources",
    description:
      "Company profile, product specifications, and answers to the questions we hear most.",
    image: stockImages.grainSilos,
    children: [
      { label: "Company Profile", href: "/resources#company-profile" },
      { label: "Product Specifications", href: "/resources#product-specifications" },
      { label: "FAQ", href: "/resources#faq" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const ctaNavItem: NavItem = {
  label: "Request a Quote",
  href: "/contact",
};

export const legalNav: NavItem[] = [
  { label: "Privacy", href: "/legal/privacy" },
  { label: "Terms", href: "/legal/terms" },
];
