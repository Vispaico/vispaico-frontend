// src/app/services/full-fledged-start-up-page/page.tsx

import { Metadata } from 'next';
import FullFledgedStartUpPageClientPage from '@/components/FullFledgedStartUpPageClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Full-Fledged Start-up Page | Vispaico',
};

const FullFledgedStartUpPage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-900 min-h-screen">Loading...</div>}>
      <FullFledgedStartUpPageClientPage />
    </Suspense>
  );
};

export default FullFledgedStartUpPage;
