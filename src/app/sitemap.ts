import type { MetadataRoute } from "next";
import { env } from "@/config/env";
import { productCategories, getAllProducts } from "@/content/products";

const staticRoutes = [
  "",
  "/about",
  "/products",
  "/capabilities",
  "/offices",
  "/contact",
  "/legal/privacy",
  "/legal/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const categoryEntries: MetadataRoute.Sitemap = productCategories.map(
    (category) => ({
      url: `${base}/products/${category.slug}`,
      lastModified: new Date(),
    })
  );

  const productEntries: MetadataRoute.Sitemap = getAllProducts().map(
    (product) => ({
      url: `${base}/products/${product.category}/${product.slug}`,
      lastModified: new Date(),
    })
  );

  return [...staticEntries, ...categoryEntries, ...productEntries];
}
