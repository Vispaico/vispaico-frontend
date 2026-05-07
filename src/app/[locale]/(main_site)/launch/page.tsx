import type { Metadata } from 'next';
import { Suspense } from 'react';
import LaunchProgramClientPage from '@/components/LaunchProgramClientPage';

export const metadata: Metadata = {
  title: 'The Launch Program — Your Complete AI Operating System | Vispaico',
  description: 'One team. Six months. A fully operational AI-powered business with private infrastructure you own. Website, agents, private AI stack, SEO, content, social media, and automation — built, deployed, and handed over.',
};

export default async function LaunchProgramPage() {
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <LaunchProgramClientPage />
    </Suspense>
  );
}
