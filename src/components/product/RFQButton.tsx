import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function RFQButton({ productName }: { productName: string }) {
  return (
    <Link
      href={`/contact?product=${encodeURIComponent(productName)}`}
      className={cn(buttonVariants({ variant: "cta" }), "h-11 px-6")}
    >
      Request a Quote for this Product
    </Link>
  );
}
