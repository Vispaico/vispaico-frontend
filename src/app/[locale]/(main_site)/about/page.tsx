import React from 'react';
import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'About.metadata' });
    return {
        title: t('title'),
        description: t('description'),
    };
}

export default function AboutPage() {
    return <AboutPageClient />;
}
