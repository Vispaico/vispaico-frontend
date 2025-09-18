// src/app/(main_site)/services/three-day-business-website/page.tsx

import { Metadata } from 'next';
import ThreeDayWebsiteClientPage from '@/components/ThreeDayWebsiteClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Get a Website in 3 Days | Vispaico',
};

const ThreeDayWebsitePage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <ThreeDayWebsiteClientPage />
    </Suspense>
  );
};

export default ThreeDayWebsitePage;