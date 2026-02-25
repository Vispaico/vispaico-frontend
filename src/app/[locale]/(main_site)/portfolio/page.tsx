import portfolioData from '@/data/portfolio.json';
import { Project } from '@/types/portfolio';
import PortfolioCard from '@/components/PortfolioCard';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import type { Metadata } from 'next';
import { buildCanonical } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'PortfolioPage' });
  const hero = t.raw('hero') as { title?: string; subtitle?: string };

  return {
    title: hero.title ?? 'Portfolio | Vispaico',
    description: hero.subtitle ?? 'Recent projects shipped by Vispaico.',
    alternates: {
      canonical: buildCanonical(resolvedLocale, 'portfolio')
    }
  };
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'PortfolioPage' });

  const projects: Project[] = portfolioData as Project[];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="container mx-auto px-6 py-16 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 md:mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 pb-2">
          {t('heading')}
        </h1>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {projects.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-400">{t('empty')}</p>
        )}
      </div>
    </main>
  );
}