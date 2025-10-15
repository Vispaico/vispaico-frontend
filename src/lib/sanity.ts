import crypto from 'node:crypto';

import slugify from 'slugify';

import { getServerEnv, getRequiredServerEnv } from '@/lib/env';
import type { DemoArticle, DemoArticleDraft, DemoHeroImage, DemoMediaLink } from '@/types/tutorial';

const apiVersion = '2021-10-21';

type SanityDocument = {
  _id: string;
  title: string;
  slug?: { current?: string };
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  body?: string;
  heroImage?: DemoHeroImage | null;
  mediaLinks?: Array<{ _key: string; label: string; url: string }>;
  _createdAt: string;
  _updatedAt: string;
};

const mapDocToArticle = (doc: SanityDocument): DemoArticle => ({
  id: doc._id,
  title: doc.title,
  slug: doc.slug?.current ?? '',
  excerpt: doc.excerpt ?? '',
  metaTitle: doc.metaTitle ?? doc.title,
  metaDescription: doc.metaDescription ?? '',
  body: doc.body ?? '',
  heroImage: doc.heroImage ?? null,
  mediaLinks:
    doc.mediaLinks?.map((item) => ({
      id: item._key,
      label: item.label,
      url: item.url,
    })) ?? [],
  createdAt: doc._createdAt,
  updatedAt: doc._updatedAt,
});

const getDatasetBaseUrl = () => {
  const projectId = getServerEnv('SANITY_PROJECT_ID');
  const dataset = getServerEnv('SANITY_DATASET');
  if (!projectId || !dataset) {
    return null;
  }
  return `https://${projectId}.api.sanity.io/v${apiVersion}/data`;
};

const sanityFetch = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const baseUrl = getDatasetBaseUrl();
  if (!baseUrl) {
    throw new Error('Sanity project configuration is missing.');
  }

  const token = getRequiredServerEnv('SANITY_API_TOKEN');

  const response = await fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
      ...init?.headers,
    },
    cache: 'no-store',
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Sanity request failed (${response.status}): ${text}`);
  }

  return response.json() as Promise<T>;
};

const buildMediaLinks = (links: DemoMediaLink[] | undefined) =>
  links?.map((item) => ({
    _type: 'mediaLink',
    _key: item.id ?? crypto.randomUUID(),
    label: item.label,
    url: item.url,
  }));

const normalizeHeroImage = (hero: DemoHeroImage | null | undefined) =>
  hero
    ? {
        _type: 'cloudinary.asset',
        url: hero.url,
        publicId: hero.publicId,
      }
    : null;

const querySanity = async <T>(query: string, params?: Record<string, unknown>): Promise<T | null> => {
  const projectId = getServerEnv('SANITY_PROJECT_ID');
  const dataset = getServerEnv('SANITY_DATASET');
  if (!projectId || !dataset) {
    return null;
  }

  const url = new URL(`https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`);
  url.searchParams.set('query', query);
  if (params && Object.keys(params).length > 0) {
    url.searchParams.set('$params', JSON.stringify(params));
  }

  const token = getServerEnv('SANITY_API_TOKEN');

  try {
    const response = await fetch(url, {
      headers: token
        ? {
            Authorization: `Bearer ${token}`,
          }
        : undefined,
      cache: 'no-store',
    });

    if (!response.ok) {
      const text = await response.text();
      if (response.status === 400 && text.toLowerCase().includes('demoarticle')) {
        return null;
      }
      throw new Error(`Sanity query failed (${response.status}): ${text}`);
    }

    return (await response.json()) as T;
  } catch (error) {
    console.error('Sanity query error', error);
    return null;
  }
};

export const fetchDemoArticles = async (): Promise<DemoArticle[]> => {
  const result = await querySanity<{ result?: SanityDocument[] }>(
    `*[_type == "demoArticle"] | order(_updatedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      metaTitle,
      metaDescription,
      body,
      heroImage,
      mediaLinks[]{ _key, label, url },
      _createdAt,
      _updatedAt
    }`
  );

  if (!result?.result) {
    return [];
  }

  return result.result.map(mapDocToArticle);
};

export const fetchDemoArticle = async (id: string): Promise<DemoArticle | null> => {
  const result = await querySanity<{ result?: SanityDocument | null }>(
    `*[_type == "demoArticle" && _id == $id][0]{
      _id,
      title,
      slug,
      excerpt,
      metaTitle,
      metaDescription,
      body,
      heroImage,
      mediaLinks[]{ _key, label, url },
      _createdAt,
      _updatedAt
    }`,
    { id }
  );

  if (!result?.result) {
    return null;
  }

  return mapDocToArticle(result.result as SanityDocument);
};

const buildSlug = (draft: DemoArticleDraft) => {
  if (draft.slug?.trim()) {
    return draft.slug.trim();
  }
  return slugify(draft.title ?? crypto.randomUUID(), {
    lower: true,
    strict: true,
  });
};

const buildArticlePayload = (draft: DemoArticleDraft) => {
  const slug = buildSlug(draft);
  const mediaLinks = buildMediaLinks(draft.mediaLinks);

  return {
    _type: 'demoArticle',
    title: draft.title,
    slug: {
      _type: 'slug',
      current: slug,
    },
    excerpt: draft.excerpt ?? '',
    metaTitle: draft.metaTitle ?? draft.title ?? '',
    metaDescription: draft.metaDescription ?? '',
    body: draft.body ?? '',
    heroImage: normalizeHeroImage(draft.heroImage ?? null),
    mediaLinks: mediaLinks && mediaLinks.length > 0 ? mediaLinks : undefined,
  };
};

export const createDemoArticle = async (draft: DemoArticleDraft): Promise<DemoArticle> => {
  const dataset = getRequiredServerEnv('SANITY_DATASET');
  const payload = buildArticlePayload(draft);

  const result = await sanityFetch<{ results: SanityDocument[] }>(`/mutate/${dataset}`, {
    method: 'POST',
    body: JSON.stringify({
      mutations: [
        {
          create: payload,
        },
      ],
      returnDocuments: true,
    }),
  });

  const created = result.results[0];
  return mapDocToArticle(created);
};

export const updateDemoArticle = async (id: string, draft: DemoArticleDraft): Promise<DemoArticle> => {
  const dataset = getRequiredServerEnv('SANITY_DATASET');
  const payload = buildArticlePayload(draft);

  const result = await sanityFetch<{ results: SanityDocument[] }>(`/mutate/${dataset}`, {
    method: 'POST',
    body: JSON.stringify({
      mutations: [
        {
          patch: {
            id,
            set: payload,
          },
        },
      ],
      returnDocuments: true,
    }),
  });

  const updated = result.results[0];
  return mapDocToArticle(updated);
};

export const deleteDemoArticle = async (id: string): Promise<void> => {
  const dataset = getRequiredServerEnv('SANITY_DATASET');
  await sanityFetch(`/mutate/${dataset}`, {
    method: 'POST',
    body: JSON.stringify({
      mutations: [
        {
          delete: { id },
        },
      ],
    }),
  });
};
