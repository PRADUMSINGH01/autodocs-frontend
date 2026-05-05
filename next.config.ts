import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [100, 75],
    // Required for deployments without sharp (Railway, Render, etc.)
    unoptimized: true,
  },
};

export default nextConfig;
