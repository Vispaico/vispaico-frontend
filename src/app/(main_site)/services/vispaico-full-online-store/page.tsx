// src/app/services/full-online-store/page.tsx

import { Metadata } from 'next';
import MultiProductStoreClientPage from '@/components/MultiProductStoreClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'Vispaico Online Store in 10 Days - $1999 | E-commerce Website | Payment Processing',
    description: 'Full e-commerce store with payments, inventory, orders in 10 days. Stripe/PayPal included. What costs $8k+ elsewhere for $1999.',
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
