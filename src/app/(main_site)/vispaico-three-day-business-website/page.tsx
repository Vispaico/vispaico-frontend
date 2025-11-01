// src/app/(main_site)/vispaico-three-day-business-website/page.tsx

import { Metadata } from 'next';
import ThreeDayWebsiteClientPage from '@/components/ThreeDayWebsiteClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Vispaico 3-Day Business Website $899 | No Agency BS',
    description: 'Professional business website in 72 hours. What agencies charge $5k+ for $899. Multiple pages, forms, dashboard included.',
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