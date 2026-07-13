import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/shared/Reveal";
import { getAllProducts, getCategory } from "@/content/products";

/**
 * Image-led catalog, not text cards — name and category are the only
 * copy, overlaid on the photograph. Full specs live one click away on
 * the product page; the homepage just needs to look like a catalog.
 */
export function ProductTeaser() {
  const products = getAllProducts();

  return (
    <section className="py-24 sm:py-32">
      <Container className="flex flex-col gap-12">
        <SectionHeading eyebrow="Products" title="What we trade" />
        <RevealGroup className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => {
            const category = getCategory(product.category);
            const image = product.images?.[0] ?? category?.image;
            return (
              <RevealItem key={product.slug}>
                <Link
                  href={`/products/${product.category}/${product.slug}`}
                  className="group relative block aspect-4/5 overflow-hidden rounded-2xl shadow-elevated-xs transition-shadow duration-300 hover:shadow-elevated-lg"
                >
                  {image ? (
                    <Image
                      src={image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 p-6">
                    {category ? (
                      <span className="text-xs font-medium tracking-[0.14em] text-white/70 uppercase">
                        {category.name}
                      </span>
                    ) : null}
                    <h3 className="font-heading text-xl font-medium text-white">
                      {product.name}
                    </h3>
                  </div>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </section>
  );
}
