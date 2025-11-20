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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <main className="container mx-auto px-6 py-16 md:py-24 space-y-20">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">{heroT('eyebrow')}</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">{heroT('title')}</h1>
            <p className="text-lg text-blue-100/90 max-w-2xl">{heroT('description')}</p>
            <p className="text-xs uppercase tracking-[0.35em] text-blue-200/70">{heroT('support')}</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
            <h2 className="text-lg font-semibold uppercase tracking-[0.35em] text-orange-200/80">{copyT('pillarsTitle')}</h2>
            <ul className="mt-6 space-y-6">
              {pillars.map((pillar) => (
                <li key={pillar.title} className="space-y-2">
                  <p className="text-lg font-semibold text-white">{pillar.title}</p>
                  <p className="text-sm text-blue-100/85">{pillar.description}</p>
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
        <Suspense fallback={<div>Loading...</div>}>
          <ArticlesList locale={resolvedLocale} />
        </Suspense>
      </main>
    </div>
  );
}

