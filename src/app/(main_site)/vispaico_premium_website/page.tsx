import { Metadata } from 'next';
import { Suspense } from 'react';
import PremiumWebsiteClientPage from '@/components/PremiumWebsiteClientPage';

export const metadata: Metadata = {
  title: 'Vispaico Premium Website - $4000 | 14-Day Flagship Build',
  description: 'A bespoke, conversion-ready website delivered in 14 days. Dedicated senior team, custom design system, integrations, and white-glove launch support.',
};

const PremiumWebsitePage = () => {
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <PremiumWebsiteClientPage />
    </Suspense>
  );
};

export default PremiumWebsitePage;
