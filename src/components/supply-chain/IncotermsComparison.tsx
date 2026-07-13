import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/shared/Reveal";
import { incoterms } from "@/content/supply-chain";

function PartyCell({ party, code }: { party: "Buyer" | "Agrisoil"; code: string }) {
  const arranged = party === "Agrisoil";
  return (
    <div className="flex flex-col items-center gap-1.5">
      {arranged ? (
        <Check className="size-4 text-primary" strokeWidth={2} aria-hidden="true" />
      ) : (
        <Minus className="size-4 text-muted-foreground/50" aria-hidden="true" />
      )}
      <span className="text-xs text-muted-foreground">
        {party} {arranged ? `(${code})` : ""}
      </span>
    </div>
  );
}

/** Side-by-side comparison — arranged by Agrisoil vs. left to the buyer. */
export function IncotermsComparison() {
  return (
    <Reveal className="overflow-x-auto rounded-2xl border border-border bg-card shadow-elevated-sm">
      <div className="min-w-140">
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border bg-secondary/50">
          {incoterms.map((term) => (
            <div key={term.code} className="flex flex-col gap-1 px-5 py-5 text-center">
              <span className="font-heading text-2xl font-medium text-primary">
                {term.code}
              </span>
              <span className="text-xs text-muted-foreground">{term.name}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
          {incoterms.map((term) => (
            <div key={term.code} className="flex flex-col gap-1.5 px-5 py-5 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Freight
              <PartyCell party={term.freightBy as "Buyer" | "Agrisoil"} code={term.code} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x divide-border border-b border-border">
          {incoterms.map((term) => (
            <div key={term.code} className="flex flex-col gap-1.5 px-5 py-5 text-center text-xs font-medium tracking-wide text-muted-foreground uppercase">
              Insurance
              <PartyCell party={term.insuranceBy as "Buyer" | "Agrisoil"} code={term.code} />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 divide-x divide-border">
          {incoterms.map((term) => (
            <div key={term.code} className="px-5 py-5 text-center text-xs text-muted-foreground">
              {term.bestFor}
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
