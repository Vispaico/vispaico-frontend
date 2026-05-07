import { Metadata } from 'next';
import React from 'react';
import { getTranslations } from 'next-intl/server';
import { buildCanonical } from '@/lib/seo';
import HomePageContent from '@/components/HomePageContent';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const metadata = await getTranslations({ locale, namespace: 'Home.metadata' });

  return {
    title: metadata('title'),
    description: metadata('description'),
    alternates: {
      canonical: buildCanonical(locale),
    },
  };
}

export default function Home() {
  return <HomePageContent />;
}
