import type { NextConfig } from "next";

// 'unsafe-eval' is dev-only — Next/React dev tooling (Turbopack HMR,
// React Server Components stack-trace reconstruction) calls eval() for
// debugging; production builds never use eval() and never receive this
// relaxed policy.
const csp = [
  "default-src 'self'",
  // maps.googleapis.com: Google Maps JS API bootstrap loader (Contact page map).
  `script-src 'self' 'unsafe-inline' https://maps.googleapis.com${process.env.NODE_ENV === "development" ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  // *.googleapis.com/*.gstatic.com: map tiles and marker icons.
  "img-src 'self' data: https://res.cloudinary.com https://images.unsplash.com https://*.googleapis.com https://*.gstatic.com",
  "connect-src 'self' https://*.googleapis.com",
  "font-src 'self'",
  "frame-ancestors 'none'",
].join("; ");

const securityHeaders = [
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  { key: "Content-Security-Policy", value: csp },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/supply-chain",
        destination: "/services/supply-chain-management",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
