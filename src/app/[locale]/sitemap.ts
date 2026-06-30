import type { MetadataRoute } from 'next';

import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { locales, defaultLocale, type Locale } from '@/i18n/config';
import { buildCanonical } from '@/lib/seo';

export const dynamic = 'force-static';
export const revalidate = 86400; // refresh daily

const BASE_PATHS = [
  '',
  'about',
  'contact',
  'case-studies',
  'faq',
  'services',
  'services/ai-consulting',
  'services/ai-ecommerce',
  'services/ai-onboarding',
  'services/ai-website-agent',
  'services/private-ai-stack',
  'services/seo-content',
  'services/seo-forecasting',
  'services/social-media-automation',
  'services/workflow-automation',
  
  'articles',
  'start',
  'vispaico-growth-website',
  'kickoff',
  'launch',
  'data-deletion',
  'privacy',
  'terms'
];

export default function sitemap({ params }: { params?: { locale?: string } } = {}): MetadataRoute.Sitemap {
  const now = new Date();

  const localeParam = params?.locale;
  const resolvedLocale: Locale = locales.includes(localeParam as Locale) ? (localeParam as Locale) : defaultLocale;

  const storySlugs = getStorySummaries(resolvedLocale).map((story) => `${storiesBasePath.replace(/^\//, '')}/${story.routeSegment}`);

  const entries: MetadataRoute.Sitemap = [];

  const appendEntry = (path: string) => {
    const canonical = buildCanonical(resolvedLocale, path);
    entries.push({ url: canonical, lastModified: now });
  };

  BASE_PATHS.forEach(appendEntry);
  storySlugs.forEach(appendEntry);

  return entries;
}
