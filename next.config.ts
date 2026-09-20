import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '',
    qualities: [50, 75, 100]
  },
  assetPrefix: './',
};

export default nextConfig;
