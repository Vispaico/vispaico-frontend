// src/app/services/single-product-store/page.tsx

import { Metadata } from 'next';
import SingleProductStoreClientPage from '@/components/SingleProductStoreClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'Single Product Store | Vispaico',
};

const SingleProductStorePage = () => {
  // We wrap the client page in a Suspense boundary, which is required
  // by the useSearchParams hook for dynamic rendering.
  return (
    <Suspense fallback={<div className="bg-gray-900 min-h-screen">Loading...</div>}>
      <SingleProductStoreClientPage />
    </Suspense>
  );
};

export default SingleProductStorePage;
