import { Building2, Phone, Mail } from "lucide-react";
import { company } from "@/content/company";

/**
 * Phone and general inbox render only if confirmed (both are
 * [CONFIRM]ed as unresolved in Section 5.1/7.8) — no invented contact
 * channel a buyer might actually try to use.
 */
export function ContactInfoBlock() {
  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-7 shadow-elevated-xs">
      <div className="flex gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
          <Building2 className="size-5" aria-hidden="true" strokeWidth={1.75} />
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="text-sm font-medium text-foreground">Head Office</span>
          <span className="text-sm text-muted-foreground">{company.headOffice}</span>
        </div>
      </div>
      {company.generalPhone ? (
        <div className="flex gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Phone className="size-5" aria-hidden="true" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-foreground">Phone</span>
            <span className="text-sm text-muted-foreground">
              {company.generalPhone}
            </span>
          </div>
        </div>
      ) : null}
      {company.generalEmail ? (
        <div className="flex gap-3">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
            <Mail className="size-5" aria-hidden="true" strokeWidth={1.75} />
          </span>
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium text-foreground">Email</span>
            <a
              href={`mailto:${company.generalEmail}`}
              className="text-sm text-primary hover:underline"
            >
              {company.generalEmail}
            </a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
