// src/app/(main_site)/services/the-vispaico-bazooka/page.tsx

import { Metadata } from 'next';
import TheBazookaClientPage from '@/components/TheBazookaClientPage';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'The Vispaico BAZOOKA | 6 Micro-Websites in 3 Days',
  description: 'Dominate your local market with 6 micro-websites, built and launched in just 3 days for $999.'
};

const TheBazookaPage = () => {
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <TheBazookaClientPage />
    </Suspense>
  );
};

export default TheBazookaPage;
