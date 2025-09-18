// src/app/services/multi-product-store/page.tsx

import { Metadata } from 'next';
import MultiProductStoreClientPage from '@/components/MultiProductStoreClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Multi Product Store | Vispaico',
};

const MultiProductStorePage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <MultiProductStoreClientPage />
    </Suspense>
  );
};

export default MultiProductStorePage;
