// src/app/(main_site)/layout.tsx

import React from 'react';
import MainSiteChrome from '@/components/layouts/MainSiteChrome';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Vispaico — Your Company its Private AI Workforce',
    template: '%s | Vispaico',
  },
  description: 'We build private AI operating systems for growing companies. Connect company knowledge, business data, and operations into one intelligent layer your team can use every day.',
  openGraph: {
    title: 'Vispaico | Your Company its Private AI Workforce',
    description: 'We build private AI operating systems for growing companies. Connect company knowledge, business data, and operations into one intelligent layer your team can use every day.',
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
    description: 'We build private AI operating systems for growing companies. Connect company knowledge, business data, and operations into one intelligent layer your team can use every day.',
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