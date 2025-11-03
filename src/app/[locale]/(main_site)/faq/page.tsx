import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import FAQPageClient from '@/components/FAQPageClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'FAQ.metadata' });
  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function FAQPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;
  return <FAQPageClient />;
}
