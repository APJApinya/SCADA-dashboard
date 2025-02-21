import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // Ignores ESLint errors during Amplify build
  },
};

export default nextConfig;
