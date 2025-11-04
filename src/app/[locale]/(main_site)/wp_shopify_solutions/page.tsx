import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import WPShopifySolutionsClientPage from '@/components/WPShopifySolutionsClientPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.WPShopifySolutions.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function WPShopifySolutionsPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white text-slate-900">Loading...</div>}>
      <WPShopifySolutionsClientPage />
    </Suspense>
  );
}
