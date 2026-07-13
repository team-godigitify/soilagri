import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { leadership } from "@/content/leadership";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Monogram tiles rather than stock "leadership" photography — these are
 * real, named individuals, and a generic stock face would misrepresent
 * them (Section 6).
 */
export function LeadershipGrid() {
  return (
    <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {leadership.map((leader) => (
        <RevealItem key={leader.name}>
          <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-elevated">
            <CardHeader>
              <div className="flex items-center gap-4">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary font-heading text-lg font-medium text-primary-foreground">
                  {initials(leader.name)}
                </span>
                <div className="flex flex-col gap-0.5">
                  <CardTitle className="text-lg">{leader.name}</CardTitle>
                  <p className="text-sm text-muted-foreground">{leader.title}</p>
                </div>
              </div>
            </CardHeader>
            {leader.email ? (
              <CardContent>
                <a
                  href={`mailto:${leader.email}`}
                  className="text-sm text-primary hover:underline"
                >
                  {leader.email}
                </a>
              </CardContent>
            ) : null}
          </Card>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
