import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['plus.unsplash.com', 'scontent-vie1-1.xx.fbcdn.net', 'cdn.getyourguide.com', 'upload.wikimedia.org', 'www.cestee.hu', 'images.ctfassets.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
      },
      {
        protocol: 'https',
        hostname: 'szegedtourism.hu',
      },
    ],
  },
};

export default nextConfig;
