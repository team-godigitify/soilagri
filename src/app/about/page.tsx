import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { company } from "@/content/company";
import { offices } from "@/content/offices";

export const metadata: Metadata = {
  title: "About",
};

/**
 * Company profile, values & vision, and leadership are not rendered yet —
 * every one of those sections depends on facts that are either unconfirmed
 * (profile copy, values/vision) or actively contradictory across client
 * messages (leadership, see content/leadership.ts once resolved). Only the
 * footprint and registration blocks below are backed by confirmed data
 * (Section 5.1 / 5.2), so only those ship in M2.
 */
export default function AboutPage() {
  return (
    <>
      <Container className="flex flex-col gap-4 py-16">
        <h1 className="text-4xl font-semibold text-foreground">
          About {company.brandName}
        </h1>
        <p className="max-w-[60ch] text-muted-foreground">
          Company profile, values, and leadership are in progress, pending
          client-confirmed copy. What follows is verified: our registered
          entity and our office footprint.
        </p>
      </Container>

      <Container className="flex flex-col gap-10 pb-16">
        <SectionHeading eyebrow="Footprint" title="Where we operate" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {offices.map((office) => (
            <Card key={office.id}>
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  {office.label}
                  {office.isHeadquarters ? (
                    <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      Headquarters
                    </span>
                  ) : null}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-1 text-sm text-muted-foreground">
                {office.addressLines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
                <span>{office.country}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>

      <Container className="flex flex-col gap-3 border-t border-border py-10 text-sm text-muted-foreground">
        <SectionHeading eyebrow="Registration" title="Registered entity" />
        <p>{company.legalName}</p>
        <p>Registration No. {company.registrationNumber}</p>
        <p>{company.headOffice}</p>
      </Container>
    </>
  );
}
