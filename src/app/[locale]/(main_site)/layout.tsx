// src/app/(main_site)/layout.tsx

import React from 'react';
import MainSiteChrome from '@/components/layouts/MainSiteChrome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: '$899 Websites in 72 Hours | Vispaico - Fast Web Design, No BS',
    template: '%s | Vispaico',
  },
  description: 'Build your website in 72 hours for $899. Next.js + headless CMS. No meetings, no surprises. WCAG 2.2 AA compliant. Perfect for startups, consultants, e-commerce.',
  openGraph: {
    title: 'Vispaico | Ship It. - Fast Websites. 72 Hours. No Agency BS',
    description: 'Build your website in 72 hours for $899. Next.js + headless CMS. No meetings, no surprises. WCAG 2.2 AA compliant. Perfect for startups, consultants, e-commerce.',
    url: 'https://vispaico.com',
    siteName: 'Vispaico',
    images: [
      {
        url: 'https://vispaico.com/logos/vispaico%20wh%20bg%20logo.webp',
        width: 800,
        height: 600,
        alt: 'Vispaico Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vispaico',
    description: 'Build your website in 72 hours for $899. Next.js + headless CMS. No meetings, no surprises. WCAG 2.2 AA compliant. Perfect for startups, consultants, e-commerce.',
    creator: '@vispaico',
    images: ['https://vispaico.com/logos/vispaico%20wh%20bg%20logo.webp'],
  },
};

// This layout is ONLY for pages inside the (main_site) group.
export default function MainSiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MainSiteChrome>{children}</MainSiteChrome>;
}