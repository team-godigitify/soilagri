import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import { env } from "@/config/env";
import "./globals.css";

// Self-hosted via next/font (no external font origin — required by the CSP
// in next.config.ts). Two families: Geist for UI/body, Fraunces (editorial
// serif, optical sizing) for display headings.
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
    default: "Site rebuild in progress",
    template: "%s",
  },
  description: "This site is being rebuilt.",
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
        <main className="flex-1">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
