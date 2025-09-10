// src/app/(main_site)/layout.tsx

import React from 'react';
import Header from '@/components/Header'; // Make sure the path is correct
import Footer from '@/components/Footer'; // Make sure the path is correct
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Vispaico',
    template: '%s | Vispaico',
  },
  description: 'Tired of $10k quotes & agency nonsense? Get a stunning, fully-loaded website in 1 day from just $199. We do it all.',
  openGraph: {
    title: 'Vispaico',
    description: 'Tired of $10k quotes & agency nonsense? Get a stunning, fully-loaded website in 1 day from just $199. We do it all.',
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
    description: 'Tired of $10k quotes & agency nonsense? Get a stunning, fully-loaded website in 1 day from just $199. We do it all.',
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
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}