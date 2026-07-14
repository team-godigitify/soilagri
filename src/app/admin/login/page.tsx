import type { Metadata } from "next";
import { crmEnabled } from "@/config/env";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = {
  title: "Admin Login",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-foreground px-6 py-16">
      <div className="flex w-full max-w-sm flex-col gap-6 rounded-3xl bg-card p-8 shadow-elevated-lg">
        <div className="flex flex-col gap-1">
          <span className="font-heading text-xl font-semibold text-foreground">SoilAgri CRM</span>
          <span className="text-sm text-muted-foreground">Sign in to review RFQ submissions.</span>
        </div>

        {crmEnabled ? (
          <LoginForm />
        ) : (
          <p className="rounded-2xl bg-accent px-4 py-3 text-sm text-accent-foreground">
            The CRM isn&apos;t configured yet — set <code className="font-mono text-xs">POSTGRES_URL</code>,{" "}
            <code className="font-mono text-xs">ADMIN_PASSWORD</code>, and{" "}
            <code className="font-mono text-xs">ADMIN_SESSION_SECRET</code> to enable it.
          </p>
        )}
      </div>
    </div>
  );
}
