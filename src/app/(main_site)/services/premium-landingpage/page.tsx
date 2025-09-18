// src/app/services/premium-landingpage/page.tsx

import { Metadata } from 'next';
import PremiumLandingPageClientPage from '@/components/PremiumLandingPageClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Premium Landing Page | Vispaico',
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
