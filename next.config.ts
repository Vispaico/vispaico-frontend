// next.config.ts (Corrected for TypeScript Strictness)

import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { Configuration as WebpackConfiguration, RuleSetRule } from 'webpack';

const cspDirectives = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://www.gstatic.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://www.googletagmanager.com https://www.google-analytics.com https://res.cloudinary.com https://images.unsplash.com https://images.ctfassets.net https://assets.ctfassets.net",
  "media-src 'self' https://res.cloudinary.com",
  "connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://stats.g.doubleclick.net",
  "font-src 'self' data:",
  "frame-src 'self'",
  "worker-src 'self' blob:",
  "base-uri 'self'",
  "form-action 'self'",
  'upgrade-insecure-requests'
]
  .join('; ')
  .replace(/\s{2,}/g, ' ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: cspDirectives
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Cross-Origin-Opener-Policy',
    value: 'same-origin'
  }
];

// Trigger rebuild
/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
      },
      {
        protocol: 'https',
        hostname: 'assets.ctfassets.net',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/vispaico-three-day-business-website',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/web-design/899usd-landingpage',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/web-design/899usd-website',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/web-design',
        destination: '/web-design',
        permanent: true,
      },
      {
        source: '/services/articles',
        destination: '/articles',
        permanent: true,
      },
      {
        source: '/services-overview',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/vispaico-three-day-business-website',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/vispaico-24-hour-express-website',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/vispaico-premium-landingpage',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/the-vispaico-bazooka',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/vispaico-full-online-store',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
      {
        source: '/services/vispaico_premium_website',
        destination: '/vispaico-growth-website',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders
      }
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

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);