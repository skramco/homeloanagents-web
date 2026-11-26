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
    ];
  },
};

export default nextConfig;