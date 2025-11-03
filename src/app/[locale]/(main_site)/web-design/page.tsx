import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import WebDesignPageClient from '@/components/WebDesignPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.WebDesign.metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function WebDesignPage({ params }: { params: Promise<{ locale: string }> }) {
  await params; // Ensure params promise resolves for consistency
  return <WebDesignPageClient />;
}
