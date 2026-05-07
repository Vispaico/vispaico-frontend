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

  const containerClass = 'mx-auto w-full max-w-[1100px]';

  return (
    <div className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="space-y-16">
        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={containerClass}>
            <header className="max-w-3xl space-y-4">
              <p className="text-[11px] font-[500] uppercase tracking-[0.35em] text-[var(--text-muted)]">{heroT('eyebrow')}</p>
              <h1 className="text-[clamp(32px,4vw,52px)] font-[600] leading-[1.1]">{heroT('title')}</h1>
              <p className="text-lg leading-[1.7] text-[var(--text-secondary)]">{heroT('subtitle')}</p>
              <p className="text-[13px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">{heroT('support')}</p>
            </header>
          </div>
        </section>

        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={containerClass}>
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
          </div>
        </section>

        <section className="px-6 py-[64px] md:py-[96px]">
          <div className={`${containerClass} rounded-3xl border border-[var(--border)] bg-[var(--bg-surface)] p-10 text-center shadow-2xl`}> 
            <h2 className="text-3xl font-semibold text-[var(--text-primary)]">{ctaT('title')}</h2>
            <p className="mt-4 text-[var(--text-secondary)]">{ctaT('description')}</p>
            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/vispaico-growth-website"
                className="inline-flex items-center gap-3 rounded-full bg-[var(--accent)] px-8 py-3 text-sm font-[600] tracking-[0.08em] text-[var(--text-primary)] shadow-lg transition hover:opacity-90"
              >
                {ctaT('primary')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-7 py-3 text-sm font-[500] text-[var(--text-secondary)] transition hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                {ctaT('secondary')}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
