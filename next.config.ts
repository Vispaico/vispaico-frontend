// next.config.ts (Corrected for TypeScript Strictness)

import { NextConfig } from 'next';
import { Configuration as WebpackConfiguration, RuleSetRule } from 'webpack';

// Trigger rebuild
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/services/web-design/899usd-landingpage',
        destination: '/services/3-day-website',
        permanent: true,
      },
      {
        source: '/services/web-design/899usd-website',
        destination: '/services/3-day-website',
        permanent: true,
      },
    ];
  },

  webpack: (config: WebpackConfiguration, { isServer }) => {
    // --- FIX: Ensure module and rules arrays exist before pushing ---
    if (!config.module) {
      config.module = { rules: [] };
    }
    if (!config.module.rules) {
      config.module.rules = [];
    }

    config.module.rules.push({
      test: /\.map$/,
      use: 'null-loader',
    } as RuleSetRule); // Using 'as RuleSetRule' for type safety

    if (isServer) {
      // --- FIX: Ensure externals is an array before pushing ---
      if (!config.externals) {
        config.externals = [];
      }
      // The type of externals can be complex, so we ensure it's an array
      if (Array.isArray(config.externals)) {
        config.externals.push('canvas');
      }
    }

    return config;
  },
};

export default nextConfig;