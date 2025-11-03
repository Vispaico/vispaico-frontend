// src/app/[locale]/(main_site)/vispaico-full-online-store/page.tsx

import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import MultiProductStoreClientPage from '@/components/MultiProductStoreClientPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.FullOnlineStore.metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function MultiProductStorePage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  return (
    <Suspense fallback={<div className="bg-gray-100 min-h-screen text-black">Loading...</div>}>
      <MultiProductStoreClientPage />
    </Suspense>
  );
}
