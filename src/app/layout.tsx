import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

// Self-hosted via next/font (no external font origin — required by the CSP
// in next.config.ts). One family, weight/size contrast per Section 2.3.
const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
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
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
