// src/app/(main_site)/layout.tsx

import React from 'react';
import Header from '@/components/Header'; // Make sure the path is correct
import Footer from '@/components/Footer'; // Make sure the path is correct
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'CÔNG TY TNHH VISPAICO | Ship It. - Fast Websites. 24 Hours. No Agency BS',
    template: '%s | Vispaico',
  },
  description: 'Vispaico builds websites from $199 in 24 hours. No meetings, no jargon, no surprise costs. Express websites, business sites, online stores.',
  openGraph: {
    title: 'Vispaico | Ship It. - Fast Websites. 24 Hours. No Agency BS',
    description: 'CÔNG TY TNHH VISPAICO builds websites from $199 in 24 hours. No meetings, no jargon, no surprise costs. Express websites, business sites, online stores.',
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
    description: 'Vispaico builds websites from $199 in 24 hours. No meetings, no jargon, no surprise costs. Express websites, business sites, online stores.',
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