// src/app/[locale]/(main_site)/case-studies/page.tsx

import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import CaseStudyGallery from '@/components/CaseStudyGallery';
import { caseStudies, caseStudyFilters } from '@/data/case-studies';
import { Link } from '@/i18n/navigation';
import { resolveLocale } from '@/i18n/locale-utils';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'CaseStudies.metadata' });

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function CaseStudiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  const [heroT, galleryT, filtersT, ctaT] = await Promise.all([
    getTranslations({ locale: resolvedLocale, namespace: 'CaseStudies.hero' }),
    getTranslations({ locale: resolvedLocale, namespace: 'CaseStudies.gallery' }),
    getTranslations({ locale: resolvedLocale, namespace: 'CaseStudies.filters' }),
    getTranslations({ locale: resolvedLocale, namespace: 'CaseStudies.cta' }),
  ]);

  const filters = caseStudyFilters.map((filter) => ({
    ...filter,
    label: filtersT(`${filter.id}.label`),
    description: filtersT(`${filter.id}.description`),
  }));

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Vispaico Case Studies",
    "description": "Real website launches, real revenue results",
    "url": "https://www.vispaico.com/case-studies",
    "hasPart": [
      {
        "@type": "Article",
        "name": "Education Consultant Platform: 28 Pages, 2 Dashboards, 3 Days",
        "description": "Built a student application platform with CMS in 72 hours",
        "url": "https://www.vispaico.com/case-studies#education-consultant",
        "image": "https://www.vispaico.com/case-studies/education.png",
        "author": {
          "@type": "Organization",
          "name": "Vispaico"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="container mx-auto px-6 py-16 md:py-24 space-y-16">
        <header className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">{heroT('eyebrow')}</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">{heroT('title')}</h1>
          <p className="text-lg text-blue-100/90">{heroT('subtitle')}</p>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-200/70">{heroT('support')}</p>
        </header>

        <CaseStudyGallery
          studies={caseStudies}
          filters={filters}
          texts={{
            statsLabel: galleryT('stats'),
            storyLabel: galleryT('story'),
            resultsLabel: galleryT('results'),
            techStackLabel: galleryT('techStack'),
            servicesLabel: galleryT('services'),
            articleLabel: galleryT('article'),
          }}
        />

        <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-black to-blue-500/10 p-10 text-center shadow-2xl backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white">{ctaT('title')}</h2>
          <p className="mt-4 text-blue-100/90">{ctaT('description')}</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/vispaico-growth-website"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              {ctaT('primary')}
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-3 text-base font-semibold text-blue-100 transition hover:border-orange-300/70 hover:text-white"
            >
              {ctaT('secondary')}
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
