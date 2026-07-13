import Image from "next/image";

export function ProductGallery({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl shadow-elevated-lg ring-1 ring-foreground/5 sm:h-96">
      <Image
        src={images[0]!}
        alt={`${productName} — generic industry photograph`}
        fill
        priority
        sizes="(min-width: 1024px) 800px, 100vw"
        className="object-cover"
      />
    </div>
  );
}
