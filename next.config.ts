import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/disclosures",
        destination: "/licensing",
        permanent: true,
      },
      {
        source: "/why-homeloanagents",
        destination: "/pricing#why",
        permanent: true,
      },
      {
        source: "/programs/conventional-purchase",
        destination: "/loans/conventional",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;