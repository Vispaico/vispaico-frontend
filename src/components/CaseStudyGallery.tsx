'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { Link } from '@/i18n/navigation';
import { CaseStudy, CaseStudyCategory } from '@/data/case-studies';

type Filter = {
  id: 'all' | CaseStudyCategory;
  label: string;
  description: string;
};

type CaseStudyGalleryProps = {
  studies: CaseStudy[];
  filters: Filter[];
  texts: {
    statsLabel: string;
    storyLabel: string;
    resultsLabel: string;
    techStackLabel: string;
    servicesLabel: string;
    articleLabel: string;
  };
};

export default function CaseStudyGallery({ studies, filters, texts }: CaseStudyGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<Filter['id']>('all');

  const filteredStudies = useMemo(() => {
    if (activeFilter === 'all') return studies;
    return studies.filter((study) => study.category === activeFilter);
  }, [activeFilter, studies]);

  return (
    <div className="space-y-16">
      <div className="flex flex-wrap items-center gap-3">
        {filters.map((filter) => {
          const isActive = filter.id === activeFilter;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => setActiveFilter(filter.id)}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive
                  ? 'border-orange-400 bg-orange-500/20 text-orange-100'
                  : 'border-white/10 bg-white/5 text-blue-100 hover:border-orange-300/70 hover:text-white'
              }`}
            >
              <div className="flex flex-col">
                <span>{filter.label}</span>
                <span className="text-[11px] font-normal text-blue-200/70">{filter.description}</span>
              </div>
            </button>
          );
        })}
      </div>

      <div className="grid gap-12">
        {filteredStudies.map((study) => (
          <article
            key={study.id}
            className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 shadow-xl backdrop-blur-xl transition hover:border-orange-400/60 hover:shadow-2xl"
          >
            <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
              <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-white/5 lg:border-b-0 lg:border-r">
                <Image
                  src={study.image}
                  alt={study.alt}
                  fill
                  sizes="(min-width: 1280px) 680px, (min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-center"
                  priority={study.id === 'education-consultant-platform'}
                />
              </div>
              <div className="flex flex-col gap-8 p-8 lg:p-12">
                <header className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-orange-200/80">{study.eyebrow}</p>
                  <h2 className="text-3xl font-semibold text-white lg:text-4xl">{study.title}</h2>
                  <p className="text-lg text-orange-100/90">{study.headline}</p>
                </header>

                <div className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{texts.statsLabel}</h3>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-900/40 p-4 sm:p-5 text-center">
                      <p className="break-words text-xl font-bold leading-snug text-white sm:text-2xl">{stat.value}</p>
                      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-blue-200/70 sm:text-xs sm:tracking-[0.3em]">{stat.label}</p>
                    </div>
                  ))}
                  </div>
                </div>

                <section className="space-y-4">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{texts.storyLabel}</h3>
                  <p className="text-base leading-relaxed text-blue-100/90">{study.story}</p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{texts.resultsLabel}</h3>
                  <ul className="space-y-2 text-sm text-blue-100/90">
                    {study.results.map((result) => (
                      <li key={result} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-300/80" aria-hidden />
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                <section className="space-y-3">
                  <h3 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">{texts.techStackLabel}</h3>
                  <div className="flex flex-wrap gap-2">
                    {study.techStack.map((tool) => (
                      <span key={tool} className="rounded-full border border-white/10 bg-slate-900/50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-200/80">
                        {tool}
                      </span>
                    ))}
                  </div>
                </section>

                <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
                  <Link
                    href={study.cta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                  >
                    {study.cta.label}
                    <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </Link>
                  <Link
                    href={study.blogLink.href}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm font-semibold text-blue-100 transition hover:border-orange-400/70 hover:text-white"
                  >
                    {study.blogLink.label || texts.articleLabel}
                  </Link>
                    {study.servicesLinks.map((service) => (
                    <Link
                      key={`${study.id}-${service.href}`}
                      href={service.href}
                      className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-orange-100 transition hover:border-orange-300 hover:text-white"
                    >
                      {texts.servicesLabel}: {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
