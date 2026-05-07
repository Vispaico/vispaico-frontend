import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import ArticlesList from '@/components/ArticlesList';
import { Suspense } from 'react';

type ArticlesPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Articles.metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function ArticlesPage({ params }: ArticlesPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  const [heroT, copyT, pillarsT] = await Promise.all([
    getTranslations({ locale: resolvedLocale, namespace: 'Articles.hero' }),
    getTranslations({ locale: resolvedLocale, namespace: 'Articles.copy' }),
    getTranslations({ locale: resolvedLocale, namespace: 'Articles.pillars' }),
  ]);
  const pillars = pillarsT.raw('items') as Array<{ title: string; description: string; articles: string[] }>;
  const containerClass = 'mx-auto w-full max-w-[1100px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">
                {heroT('eyebrow')}
              </p>
              <h1 className="text-4xl md:text-5xl font-[600] leading-tight text-[var(--text-primary)]">
                {heroT('title')}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-2xl">
                {heroT('description')}
              </p>
              <p className="text-xs uppercase tracking-[0.35em] text-blue-200/70">
                {heroT('support')}
              </p>
            </div>
            <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] text-[var(--text-secondary)]">
              <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-orange-200/80">
                {copyT('pillarsTitle')}
              </h2>
              <ul className="mt-6 space-y-6">
                {pillars.map((pillar) => (
                  <li key={pillar.title} className="space-y-2">
                    <p className="text-lg font-semibold text-[var(--text-primary)]">{pillar.title}</p>
                    <p className="text-sm text-[var(--text-secondary)]">{pillar.description}</p>
                    <ul className="text-xs uppercase tracking-[0.35em] text-orange-200/70 space-y-1">
                      {pillar.articles.map((article) => (
                        <li key={article}>{article}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </header>
        </div>
      </section>
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${containerClass} space-y-6`}>
          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_30px_60px_rgba(0,0,0,0.35)]">
            <Suspense fallback={<div>Loading...</div>}>
              <ArticlesList locale={resolvedLocale} />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
}
