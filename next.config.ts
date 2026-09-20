import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    qualities: [50, 75, 100]
  },
};

export default nextConfig;
