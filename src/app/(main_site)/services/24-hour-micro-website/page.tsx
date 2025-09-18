// src/app/services/24-hour-micro-website/page.tsx

import { Metadata } from 'next';
import MicroWebsiteClientPage from '@/components/MicroWebsiteClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Get a Website in 24 Hours | Vispaico',
};

const MicroWebsitePage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <MicroWebsiteClientPage />
    </Suspense>
  );
};

export default MicroWebsitePage;
