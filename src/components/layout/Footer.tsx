import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { primaryNav, ctaNavItem, legalNav } from "@/content/nav";
import { company } from "@/content/company";
import { offices } from "@/content/offices";
import { cn } from "@/lib/utils";

const about = primaryNav.find((item) => item.label === "About");
const products = primaryNav.find((item) => item.label === "Products");
const resources = primaryNav.find((item) => item.label === "Resources");

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Supply Chain", href: "/supply-chain" },
  { label: "Contact", href: "/contact" },
];

/**
 * Legal name + registration number are the strongest earned-authority
 * signal a young company has (Section 2.2) — shown on every page, at the
 * moment of maximum skepticism (footer, after the reader has scrolled
 * through the page's claims).
 */
export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div
        className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-cta/60 to-transparent"
        aria-hidden="true"
      />
      <Container className="flex flex-col gap-14 py-16 lg:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="flex flex-col items-start gap-4">
            <Image
              src="/logo.png"
              alt={company.brandName}
              width={1668}
              height={792}
              className="h-9 w-auto shrink-0 brightness-0 invert"
            />
            {company.tagline ? (
              <p className="font-heading text-lg text-balance text-primary-foreground/90 italic">
                {company.tagline}
              </p>
            ) : null}
            <ul className="mt-2 flex flex-col gap-1.5 text-sm text-primary-foreground/70">
              {offices.map((office) => (
                <li key={office.id}>
                  {office.region}, {office.country}
                  {office.isHeadquarters ? (
                    <span className="ml-2 text-xs tracking-wide text-cta uppercase">
                      HQ
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
            <Link
              href={ctaNavItem.href}
              className={cn(
                buttonVariants({ variant: "cta" }),
                "mt-2 h-11 w-fit px-5"
              )}
            >
              {ctaNavItem.label}
            </Link>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.14em] text-primary-foreground/50 uppercase">
              Explore
            </span>
            {exploreLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.14em] text-primary-foreground/50 uppercase">
              Products
            </span>
            <Link
              href="/products"
              className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            >
              All Products
            </Link>
            {products?.children?.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {category.label}
              </Link>
            ))}
          </nav>

          <nav className="flex flex-col gap-3">
            <span className="text-xs font-medium tracking-[0.14em] text-primary-foreground/50 uppercase">
              Resources
            </span>
            {resources?.children?.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
            {about?.children?.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-primary-foreground/15 pt-8 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
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
                className="hover:text-primary-foreground"
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
