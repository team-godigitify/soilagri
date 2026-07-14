import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

type IconTileCardProps = {
  icon: LucideIcon;
  title: string;
  description?: string;
  href: string;
};

/** The mega-menu's icon-tile + label + description row, promoted to a standalone card for Services/Industries grids. */
export function IconTileCard({ icon: Icon, title, description, href }: IconTileCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-4 rounded-3xl bg-card p-6 shadow-elevated-xs ring-1 ring-foreground/8 transition-all duration-300 hover:-translate-y-1 hover:shadow-elevated"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5.5" aria-hidden="true" strokeWidth={1.75} />
      </span>
      <span className="flex flex-col gap-1.5">
        <span className="font-heading text-lg font-semibold text-foreground">{title}</span>
        {description && <span className="text-sm text-muted-foreground">{description}</span>}
      </span>
      <span className="mt-auto flex items-center gap-1.5 text-sm font-semibold text-primary">
        Learn more
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
