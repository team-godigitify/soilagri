import type { MetadataRoute } from "next";
import { env } from "@/config/env";
import { sectionSlugs, productCategories } from "@/content/nav";

/** Covers every real, designed route (Section 5) — stubs never shipped an entry here, so nothing needed removing. */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = env.NEXT_PUBLIC_SITE_URL;
  const now = new Date();

  const staticRoutes = [
    "/",
    "/about",
    "/products",
    "/services",
    "/industries",
    "/global-network",
    "/resources",
    "/contact",
    "/legal/privacy",
    "/legal/terms",
  ];

  const aboutRoutes = sectionSlugs("/about").map((slug) => `/about/${slug}`);
  const serviceRoutes = sectionSlugs("/services").map((slug) => `/services/${slug}`);
  const industryRoutes = sectionSlugs("/industries").map((slug) => `/industries/${slug}`);
  const networkRoutes = sectionSlugs("/global-network").map((slug) => `/global-network/${slug}`);
  const resourceRoutes = sectionSlugs("/resources").map((slug) => `/resources/${slug}`);

  const categories = productCategories();
  const categoryRoutes = categories.map((category) => `/products/${category.category}`);
  const productRoutes = categories.flatMap((category) =>
    category.items.map((item) => `/products/${category.category}/${item.slug}`)
  );

  const routes = [
    ...staticRoutes,
    ...aboutRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...serviceRoutes,
    ...industryRoutes,
    ...networkRoutes,
    ...resourceRoutes,
  ];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.split("/").length <= 2 ? 0.8 : 0.6,
  }));
}
