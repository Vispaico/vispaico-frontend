import { Metadata } from 'next';
import React from 'react';
import PricingPageContent from '@/components/PricingPageContent';

export const metadata: Metadata = {
  title: 'Pricing — Vispaico',
  description: 'Simple, transparent pricing for AI systems that transform your business. Starter, Growth, and Enterprise plans available.',
};

export default function PricingPage() {
  return <PricingPageContent />;
}
