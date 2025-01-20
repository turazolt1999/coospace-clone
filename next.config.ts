import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['plus.unsplash.com', 'scontent-vie1-1.xx.fbcdn.net', 'cdn.getyourguide.com', 'upload.wikimedia.org', 'www.cestee.hu'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'scontent-vie1-1.xx.fbcdn.net',
        pathname: '/v/t39.30808-6/261715851_4953437544707282_6188890325207892602_n.jpg',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/premium_photo-1697729549014-2faefb25efba?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      }
    ],
  },
};

export default nextConfig;
