import Link from "next/link";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teaserProducts } from "@/content/home";

export function ProductTeaser() {
  return (
    <section className="py-20">
      <Container className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Products"
          title="What we trade"
          description="Currently: fertilizers. Additional commodity categories are on the roadmap."
        />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {teaserProducts.map((product) => (
            <Link key={product.name} href="/products" className="group">
              <Card className="h-full transition-colors group-hover:border-primary/40">
                <CardHeader>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {product.blurb}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
