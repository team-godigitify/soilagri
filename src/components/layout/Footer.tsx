import Link from "next/link";
import { ArrowRight, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { buttonVariants } from "@/components/ui/button";
import { navItems } from "@/content/nav";
import { services } from "@/content/home";
import { company } from "@/content/company";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <Container className="flex flex-col gap-6 border-b border-background/10 py-16 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-heading max-w-[24ch] text-3xl font-semibold text-balance sm:text-4xl">
          Let&apos;s talk trade.
        </h2>
        <Link
          href="/contact"
          className={cn(buttonVariants({ variant: "cta", size: "xl" }), "group w-fit")}
        >
          Request a Quote
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Container>

      <Container className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <span className="font-heading text-2xl font-semibold">Agrisoil</span>
          <p className="max-w-[32ch] text-background/70">{company.tagline}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold tracking-[0.14em] text-cta uppercase">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-background/80">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="hover:text-background hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold tracking-[0.14em] text-cta uppercase">
            Products
          </h3>
          <ul className="flex flex-col gap-3 text-background/80">
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="hover:text-background hover:underline">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold tracking-[0.14em] text-cta uppercase">
            Contact
          </h3>
          <ul className="flex flex-col gap-3 text-background/80">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 size-5 shrink-0 text-cta" aria-hidden="true" />
              <span>{company.headOffice}</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="size-5 shrink-0 text-cta" aria-hidden="true" />
              <a href={`mailto:${company.generalEmail}`} className="hover:text-background hover:underline">
                {company.generalEmail}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-background/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-8 text-sm text-background/60 sm:flex-row">
          <span>&copy; {new Date().getFullYear()} {company.tradeName}. All rights reserved.</span>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="hover:text-background hover:underline">
              Privacy Policy
            </Link>
            <Link href="/legal/terms" className="hover:text-background hover:underline">
              Terms of Use
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
