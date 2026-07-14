import type { MetadataRoute } from "next";
import { company } from "@/content/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${company.brandName} — ${company.tagline}`,
    short_name: company.brandName,
    description: company.aboutSummary,
    start_url: "/",
    display: "standalone",
    background_color: "#faf9f4",
    theme_color: "#123c30",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
