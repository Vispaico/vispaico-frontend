// src/app/[locale]/(main_site)/page.tsx
import { Metadata } from 'next';
import React from 'react';
import { Link } from '@/i18n/navigation';
import dynamic from 'next/dynamic';
import HomeOverlays from '@/components/HomeOverlays';
import HeroSection from '@/components/HeroSection';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { buildCanonical } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home.metadata' });
  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: buildCanonical(locale)
    }
  };
}

const ProfileCardShell = () => (
  <div className="w-full max-w-md">
    <div
      className="aspect-[0.718] w-full max-h-[540px] rounded-[30px] border border-white/10 bg-slate-900/60 animate-pulse"
      aria-hidden="true"
    />
  </div>
);

const ProfileCard = dynamic(() => import('@/components/ProfileCard'), {
  loading: () => <ProfileCardShell />
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <SectionPlaceholder className="h-[520px]" />
});

const HomeServicesSnapshot = dynamic(() => import('@/components/HomeServicesSnapshot'), {
  loading: () => <SectionPlaceholder className="h-[560px]" />
});

const HomeGrowthPath = dynamic(() => import('@/components/HomeGrowthPath'), {
  loading: () => <SectionPlaceholder className="h-[520px]" />
});

const HomeQuickFAQ = dynamic(() => import('@/components/HomeQuickFAQ'), {
  loading: () => <SectionPlaceholder className="h-[480px]" />
});

const HomeBeforeAfter = dynamic(() => import('@/components/HomeBeforeAfter'), {
  loading: () => <SectionPlaceholder className="h-[520px]" />
});

const HomeFinalCTA = dynamic(() => import('@/components/HomeFinalCTA'), {
  loading: () => <SectionPlaceholder className="h-[360px]" />
});

const SectionPlaceholder = ({ className = '' }: { className?: string }) => (
  <div className={`w-full rounded-3xl border border-white/10 bg-slate-900/40 ${className} animate-pulse`} aria-hidden="true" />
);


export default function Home() {
  const t = useTranslations('Home');
  const heroTitle = t.raw('hero.titleLines') as string[];
  const heroTagline = t('hero.tagline');
  const heroPrimaryCta = t('hero.primaryCta');
  const heroSecondaryCta = t('hero.secondaryCta');
  const heroSecondaryCtaAlt = t('hero.secondaryCtaAlt');
  const heroScarcity = t('hero.scarcity');
  const introHeading = t('intro.heading');
  const introBody = t('intro.body');

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Vispaico",
    "alternateName": "CÔNG TY TNHH VISPAICO",
    "description": "Fast website development in 72 hours",
    "url": "https://www.vispaico.com",
    "telephone": "+84 (0)936 166 892",
    "email": "niels@vispaico.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "So 7, ngo 201 Duong Lach Tray, Phuong Lach Tray, Quan Ngo Quyen",
      "addressLocality": "Haiphong",
      "addressRegion": "Hai Phong",
      "postalCode": "180000",
      "addressCountry": "VN"
    },
    "image": "https://www.vispaico.com/logos/Vispaico_ship_it_Logo.webp",
    "sameAs": [
      "https://www.facebook.com/vispaico",
      "https://www.linkedin.com/company/vispaico"
    ],
    "priceRange": "$899"
  };

  return (
    <> {/* Root Fragment */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />


      {/* Hero Section Component */}
      <HeroSection
        titleLines={heroTitle}
        tagline={heroTagline}
        ctaText={heroPrimaryCta}
        secondaryCtaText={heroSecondaryCta}
        secondaryCtaLink="/case-studies"
        scarcityText={heroScarcity}
      />
     
      {/* Other Home Page Section */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950/90 to-slate-950" aria-hidden="true"></div>
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
          <div className="relative h-0.5 w-full max-w-5xl overflow-hidden bg-gradient-to-r from-slate-900/0 via-blue-500/60 to-slate-900/0">
            <div className="laser-flash"></div>
          </div>
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:text-left">
            <div className="flex w-full max-w-md justify-center md:max-w-none md:basis-1/2">
              <ProfileCard avatarUrl="/images/BoandCon_mc1.webp" miniAvatarUrl="/images/BoandCon_mc.webp" />
            </div>
            <div className="space-y-6 max-w-3xl md:basis-1/2">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-white">
                {introHeading}
              </h2>
              <p className="text-lg md:text-xl text-blue-100 whitespace-pre-line">
                {introBody}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
            <Link
              href="/vispaico-growth-website"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {heroPrimaryCta}
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-white font-semibold shadow-lg transition-transform duration-300 hover:scale-105 w-full sm:w-auto"
            >
              {heroSecondaryCtaAlt}
            </Link>
          </div>
        </div>
      </section>
      <HomeBeforeAfter />
      <HomeGrowthPath />
      <TestimonialsSection />
      <HomeServicesSnapshot />
      <HomeQuickFAQ />
      <HomeFinalCTA />
      <HomeOverlays />

    </> // End Root Fragment
  ); // End Component Return
} // End Home Component Function