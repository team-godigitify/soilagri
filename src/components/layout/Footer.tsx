import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { primaryNav, legalNav } from "@/content/nav";
import { company } from "@/content/company";

/**
 * Legal name + registration number are the strongest earned-authority
 * signal a young company has (Section 2.2) — shown on every page, at the
 * moment of maximum skepticism (footer, after the reader has scrolled
 * through the page's claims).
 */
export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <Container className="flex flex-col gap-8 py-12">
        <div className="flex flex-col justify-between gap-8 sm:flex-row">
          <div className="flex flex-col gap-2">
            <span className="text-base font-semibold text-foreground">
              {company.brandName}
            </span>
            {company.tagline ? (
              <p className="text-sm text-muted-foreground italic">
                {company.tagline}
              </p>
            ) : null}
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {primaryNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <p>
              &copy; {new Date().getFullYear()} {company.legalName}. All
              rights reserved.
            </p>
            <p>
              Registration No. {company.registrationNumber} &middot;{" "}
              {company.headOffice}
            </p>
          </div>

          <nav className="flex gap-4">
            {legalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
