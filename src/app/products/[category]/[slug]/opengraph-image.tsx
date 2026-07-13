import { ImageResponse } from "next/og";
import { getProduct } from "@/content/products";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const product = getProduct(category, slug);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "80px",
          backgroundColor: "#123c30",
          color: "#FFFFFF",
        }}
      >
        <div style={{ width: 64, height: 4, backgroundColor: "#bd923a", marginBottom: 28 }} />
        <div style={{ fontSize: 28, opacity: 0.75 }}>Agrisoil</div>
        <div style={{ fontSize: 64, fontWeight: 600, marginTop: 12 }}>
          {product?.name ?? "Products"}
        </div>
        {product ? (
          <div style={{ fontSize: 28, opacity: 0.85, marginTop: 16 }}>
            {product.shortDescription}
          </div>
        ) : null}
      </div>
    ),
    { ...size }
  );
}
