import type { MetadataRoute } from 'next';

import portfolioData from '@/data/portfolio.json';
import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { locales, defaultLocale } from '@/i18n/config';
import { buildCanonical } from '@/lib/seo';

const BASE_PATHS = [
  '',
  'about',
  'contact',
  'portfolio',
  'case-studies',
  'faq',
  'services',
  'meta-ads-faq',
  'seo-questions',
  'articles',
  'start',
  'vispaico-growth-website',
  'web-design',
  'kickoff',
  'privacy',
  'terms'
];

export default async function sitemap({ params }: { params: Promise<{ locale: string }> }): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const { locale } = await params;
  const resolvedLocale = locales.includes(locale as (typeof locales)[number]) ? locale : defaultLocale;

  const portfolioSlugs = (portfolioData as Array<{ id: string }>).map((project) => `portfolio/${project.id}`);
  const storySlugs = getStorySummaries(resolvedLocale).map((story) => `${storiesBasePath.replace(/^\//, '')}/${story.routeSegment}`);

  const entries: MetadataRoute.Sitemap = [];

  const appendEntry = (path: string) => {
    const canonical = buildCanonical(resolvedLocale, path);
    entries.push({ url: canonical, lastModified: now });
  };

  BASE_PATHS.forEach(appendEntry);
  portfolioSlugs.forEach(appendEntry);
  storySlugs.forEach(appendEntry);

  return entries;
}
