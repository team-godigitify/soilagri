import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import { crmEnabled } from "@/config/env";
import { ADMIN_SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { SignOutButton } from "@/components/admin/SignOutButton";

export const metadata: Metadata = {
  title: { default: "CRM", template: "%s | SoilAgri CRM" },
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  if (!crmEnabled) redirect("/admin/login");

  const store = await cookies();
  const authed = verifySessionToken(store.get(ADMIN_SESSION_COOKIE)?.value);
  if (!authed) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-foreground text-background">
        <div className="mx-auto flex h-16 max-w-330 items-center justify-between px-6 lg:px-10">
          <Link href="/admin" className="font-heading text-lg font-semibold">
            SoilAgri CRM
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link href="/admin/rfqs" className="text-background/80 hover:text-background hover:underline">
              RFQs
            </Link>
            <SignOutButton />
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-330 px-6 py-10 lg:px-10">{children}</main>
    </div>
  );
}
