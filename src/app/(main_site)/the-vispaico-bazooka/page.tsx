// src/app/(main_site)/the-vispaico-bazooka/page.tsx

import { Metadata } from 'next';
import TheBazookaClientPage from '@/components/TheBazookaClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'The Vispaico Bazooka | 6 Websites in 3 Days - Local Market Domination - $999',
  description: 'Dominate local search with 6 targeted websites in 72 hours. Perfect for local businesses. $999 includes domains, hosting, Google optimization.'
};

const TheBazookaPage = () => {
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <TheBazookaClientPage />
    </Suspense>
  );
};

export default TheBazookaPage;
