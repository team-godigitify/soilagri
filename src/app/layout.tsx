import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { organizationJsonLd } from "@/lib/jsonld";
import { env } from "@/config/env";
import "./globals.css";

// Self-hosted via next/font (no external font origin — required by the CSP
// in next.config.ts). Two families: Geist for UI/body, Fraunces (editorial
// serif, optical sizing) for display headings — the primary premium-feel
// lever identified in the design audit.
const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const heading = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_SITE_URL),
  title: {
    default: "Agrisoil — Fertilizer Trading",
    template: "%s | Agrisoil",
  },
  description:
    "Agrisoil supplies Urea 46% N and NPK 14-23-14+6S-1B fertilizers, with offices in Montreal, Canada and San Jose, USA.",
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
            __html: JSON.stringify(organizationJsonLd()),
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
