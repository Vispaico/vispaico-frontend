// src/app/(main_site)/vispaico-24-hour-express-website/page.tsx

import { Metadata } from 'next';
import MicroWebsiteClientPage from '@/components/MicroWebsiteClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Vispaico Express Website in 24 Hours - $199 | Solo Entrepreneurs & Freelancers',
    description: 'Professional website for consultants, freelancers, coaches in 24 hours. No meetings, no BS. $199 all-inclusive. Domain, hosting, email included.',
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
