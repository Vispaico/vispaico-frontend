import type { Metadata } from 'next';
import { Suspense } from 'react';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import AccessibilityAuditClientPage from '@/components/AccessibilityAuditClientPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Services.AccessibilityAudit.metadata' });

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function AccessibilityAuditPage({ params }: { params: Promise<{ locale: string }> }) {
  await params;

  return (
    <Suspense fallback={<div className="min-h-screen bg-white text-slate-900">Loading...</div>}>
      <AccessibilityAuditClientPage />
    </Suspense>
  );
}
