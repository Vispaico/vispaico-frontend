import type { MetadataRoute } from 'next';

import portfolioData from '@/data/portfolio.json';
import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { buildCanonical } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = 86400; // refresh daily

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

export default function sitemap({ params }: { params?: { locale?: string } } = {}): MetadataRoute.Sitemap {
  const now = new Date();

  const localeParam = params?.locale;
  const resolvedLocale: Locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;

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
