import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'playbyturn.com',
      },
      {
        protocol: 'https',
        hostname: 'app.playbyturn.com',
      },
      {
        protocol: 'https',
        hostname: 'api.playbyturn.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.balipremiumvilla.com',
      },
    ],
  },
};

export default nextConfig;
