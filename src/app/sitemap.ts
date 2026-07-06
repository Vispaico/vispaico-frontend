import type { MetadataRoute } from 'next';

import { getStorySummaries, storiesBasePath } from '@/data/stories';
import { getJournalIssues, journalBasePath } from '@/data/journal';
import { buildCanonical, SITE_URL } from '@/lib/seo';

const LOCALE = 'en';

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
  'journal',
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

  const storySlugs = getStorySummaries(LOCALE).map(
    (story) => `${storiesBasePath.replace(/^\//, '')}/${story.routeSegment}`,
  );

  const journalSlugs = getJournalIssues().map(
    (issue) => `${journalBasePath.replace(/^\//, '')}/${issue.issueSlug}`,
  );

  const entries: MetadataRoute.Sitemap = [];

  const appendEntry = (path: string) => {
    entries.push({ url: buildCanonical(LOCALE, path), lastModified: now });
  };

  BASE_PATHS.forEach(appendEntry);
  storySlugs.forEach(appendEntry);
  journalSlugs.forEach(appendEntry);

  // Include the site root without locale for SEO.
  entries.push({ url: SITE_URL, lastModified: now });

  return entries;
}
