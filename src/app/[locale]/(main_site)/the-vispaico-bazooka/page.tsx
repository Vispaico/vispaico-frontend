// src/app/[locale]/(main_site)/the-vispaico-bazooka/page.tsx

import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import TheBazookaClientPage from '@/components/TheBazookaClientPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.TheBazooka.metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function TheBazookaPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <TheBazookaClientPage />
    </Suspense>
  );
}
