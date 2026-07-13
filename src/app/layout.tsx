import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: `${company.brandName} — Fertilizer Trading`,
    template: `%s | ${company.brandName}`,
  },
  description: company.aboutSummary,
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
