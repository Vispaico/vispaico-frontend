import type { MetadataRoute } from 'next';

import portfolioData from '@/data/portfolio.json';
import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { locales } from '@/i18n/config';
import { buildCanonical, SITE_URL } from '@/lib/seo';

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

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const portfolioSlugs = (portfolioData as Array<{ id: string }>).map((project) => `portfolio/${project.id}`);

  const storySlugsByLocale = locales.reduce<Record<string, string[]>>((acc, locale) => {
    const stories = getStorySummaries(locale);
    acc[locale] = stories.map((story) => `${storiesBasePath.replace(/^\//, '')}/${story.routeSegment}`);
    return acc;
  }, {});

  const entries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    const appendEntry = (path: string) => {
      const canonical = buildCanonical(locale, path);
      entries.push({ url: canonical, lastModified: now });
    };

    BASE_PATHS.forEach(appendEntry);
    portfolioSlugs.forEach(appendEntry);
    (storySlugsByLocale[locale] ?? []).forEach(appendEntry);
  });

  // Also include the site root without locale for safety (primary domain).
  entries.push({ url: SITE_URL, lastModified: now });

  return entries;
}
