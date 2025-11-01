// src/app/(main_site)/vispaico-premium-landingpage/page.tsx

import { Metadata } from 'next';
import PremiumLandingPageClientPage from '@/components/PremiumLandingPageClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Vispaico High-Converting Sales Page in 2 Days - $499 | Product Launches & Events',
    description: 'Sales page that converts visitors to customers in 48 hours. Perfect for product launches, courses, events. $499 all-inclusive.',
};

const PremiumLandingPage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <PremiumLandingPageClientPage />
    </Suspense>
  );
};

export default PremiumLandingPage;
