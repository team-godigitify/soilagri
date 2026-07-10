import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { learnMoreLinks } from "@/content/home";
import { ArrowRight } from "lucide-react";

export function LearnMoreRow() {
  return (
    <section className="border-t border-border py-20">
      <Container className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {learnMoreLinks.map((item) => (
          <Link key={item.href} href={item.href} className="group">
            <Card className="h-full transition-colors group-hover:border-primary/40">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg">
                  {item.title}
                  <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </Container>
    </section>
  );
}
