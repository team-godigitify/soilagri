import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { organizationJsonLd } from "@/lib/jsonld";
import { company } from "@/content/company";
import { env } from "@/config/env";
import "./globals.css";

// Self-hosted via next/font (no external font origin — required by the CSP
// in next.config.ts). Poppins for both body and display headings — clean,
// geometric, corporate-neutral (weight alone differentiates hierarchy).
const sans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const heading = Poppins({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const defaultTitle = `${company.brandName} — Global Fertilizer Trading Company`;

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: defaultTitle,
    template: `%s | ${company.brandName}`,
  },
  description: company.aboutSummary,
  keywords: [
    "fertilizer trading",
    "agricultural commodities",
    "urea 46%",
    "NPK fertilizer",
    "commodity sourcing",
    "international commodity trading",
    "wheat corn soybeans trading",
    "wood pulp supplier",
  ],
  authors: [{ name: company.tradeName }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: company.brandName,
    title: defaultTitle,
    description: company.aboutSummary,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: company.brandName }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: company.aboutSummary,
    images: ["/twitter-image.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#123c30",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${heading.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              organizationJsonLd({
                name: company.brandName,
                legalName: company.legalName,
                address: company.headOffice,
              })
            ),
          }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
