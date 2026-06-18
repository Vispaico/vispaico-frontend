import React from 'react';
import { Metadata } from 'next';
import AboutPageClient from '@/components/AboutPageClient';
import { buildCanonical } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const { locale } = await params;
    return {
        title: 'About — Vispaico | Private AI Operating Systems Built in Haiphong, Vietnam',
        description: 'Vispaico builds private AI operating systems — Company Brain, Company Analyst, Company Operator — deployed on your infrastructure, under your control. Ownership, privacy, infrastructure control, and long-term partnerships.',
        alternates: {
            canonical: buildCanonical(locale, 'about')
        },
    };
}

export default function AboutPage() {
    return <AboutPageClient />;
}
