import { company } from "@/content/company";

/**
 * Phone and general inbox render only if confirmed (both are
 * [CONFIRM]ed as unresolved in Section 5.1/7.8) — no invented contact
 * channel a buyer might actually try to use.
 */
export function ContactInfoBlock() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <span className="text-sm font-medium text-foreground">
          Head Office
        </span>
        <span className="text-sm text-muted-foreground">
          {company.headOffice}
        </span>
      </div>
      {company.generalPhone ? (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-foreground">Phone</span>
          <span className="text-sm text-muted-foreground">
            {company.generalPhone}
          </span>
        </div>
      ) : null}
      {company.generalEmail ? (
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-foreground">Email</span>
          <span className="text-sm text-muted-foreground">
            {company.generalEmail}
          </span>
        </div>
      ) : null}
    </div>
  );
}
