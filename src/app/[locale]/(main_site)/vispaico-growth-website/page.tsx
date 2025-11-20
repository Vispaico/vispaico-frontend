// src/app/[locale]/(main_site)/vispaico-growth-website/page.tsx

import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import GrowthWebsiteClientPage from '@/components/GrowthWebsiteClientPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.GrowthWebsite.metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function GrowthWebsitePage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <GrowthWebsiteClientPage />
    </Suspense>
  );
}