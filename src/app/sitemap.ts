import type { MetadataRoute } from 'next';

import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { locales } from '@/i18n/config';
import { buildCanonical, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = 86400; // refresh daily

const BASE_PATHS = [
  '',
  'about',
  'aios',
  'articles',
  'contact',
  'data-deletion',
  'faq',
  'industries',
  'pricing',
  'privacy',
  'services',
  'services/ai-operations-audit',
  'services/company-analyst',
  'services/company-brain',
  'services/company-operator',
  'terms',
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

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
    (storySlugsByLocale[locale] ?? []).forEach(appendEntry);
  });

  // Also include the site root without locale for safety (primary domain).
  entries.push({ url: SITE_URL, lastModified: now });

  return entries;
}
