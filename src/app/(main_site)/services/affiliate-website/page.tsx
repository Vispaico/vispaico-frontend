// src/app/services/affiliate-website/page.tsx

import { Metadata } from 'next';
import AffiliateWebsiteClientPage from '@/components/AffiliateWebsiteClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Affiliate Website in 2 Days | Vispaico',
};

const AffiliateWebsitePage = () => {
  return (
    <Suspense fallback={<div className="bg-gray-900 min-h-screen">Loading...</div>}>
      <AffiliateWebsiteClientPage />
    </Suspense>
  );
};

export default AffiliateWebsitePage;
