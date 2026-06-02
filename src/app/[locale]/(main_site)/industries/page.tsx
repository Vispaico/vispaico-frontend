import { Metadata } from 'next';
import React from 'react';
import IndustriesPageContent from '@/components/IndustriesPageContent';

export const metadata: Metadata = {
  title: 'Industries — Vispaico | AI Systems for Manufacturing, Logistics, Legal & More',
  description: 'Private AI operating systems built for your industry. Manufacturing, logistics, professional services, legal, healthcare administration, construction, e-commerce, and B2B services.',
};

export default function IndustriesPage() {
  return <IndustriesPageContent />;
}
