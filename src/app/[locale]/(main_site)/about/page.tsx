import React from 'react';
import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';
import { getTranslations } from 'next-intl/server';
import { buildCanonical } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: 'About — Niels & Vispaico | AI Systems Built in Haiphong, Vietnam',
        description: 'Vispaico is a small, focused team building AI operating systems for serious businesses. Founded by Niels — 20 years of building, 5 countries, one clear conviction.',
        alternates: {
            canonical: buildCanonical(locale, 'about')
        },
    };
}

export default function AboutPage() {
    return <AboutPageClient />;
}
