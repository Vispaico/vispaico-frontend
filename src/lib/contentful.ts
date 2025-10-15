import { getServerEnv } from '@/lib/env';
import type { DemoListing, ListingAsset } from '@/types/support';

type Sys = {
  id: string;
  updatedAt: string;
};

type EntryFields = {
  title?: string;
  slug?: string;
  summary?: string;
  location?: string;
  priceLabel?: string;
  features?: string[];
  heroImage?: { sys: { id: string } };
  gallery?: Array<{ sys: { id: string } }>;
};

type Entry = {
  sys: Sys;
  fields: EntryFields;
};

type AssetFields = {
  file?: {
    url?: string;
    details?: {
      image?: {
        width?: number;
        height?: number;
      };
    };
    description?: string;
  };
  description?: string;
  title?: string;
};

type Asset = {
  sys: Sys;
  fields: AssetFields;
};

type ContentfulResponse = {
  items: Entry[];
  includes?: {
    Asset?: Asset[];
  };
};

const getContentfulBaseUrl = () => {
  const space = getServerEnv('CONTENTFUL_SPACE_ID');
  const env = getServerEnv('CONTENTFUL_ENVIRONMENT') ?? 'master';
  if (!space) {
    return null;
  }
  return { space, env };
};

const buildAsset = (asset: Asset | undefined): ListingAsset | null => {
  if (!asset) {
    return null;
  }

  const url = asset.fields.file?.url;
  if (!url) {
    return null;
  }

  const width = asset.fields.file?.details?.image?.width ?? 0;
  const height = asset.fields.file?.details?.image?.height ?? 0;
  const description =
    asset.fields.description || asset.fields.title || asset.fields.file?.description || 'Listing asset';

  return {
    url: url.startsWith('//') ? `https:${url}` : url,
    width,
    height,
    description,
  };
};

const mapEntryToListing = (entry: Entry, assetsIndex: Map<string, Asset>): DemoListing => {
  const hero = entry.fields.heroImage?.sys.id
    ? assetsIndex.get(entry.fields.heroImage.sys.id)
    : undefined;
  const galleryAssets = entry.fields.gallery?.map((item) => assetsIndex.get(item.sys.id)).filter(Boolean) ?? [];

  return {
    id: entry.sys.id,
    title: entry.fields.title ?? 'Untitled Listing',
    slug: entry.fields.slug ?? entry.sys.id,
    summary: entry.fields.summary ?? '',
    location: entry.fields.location ?? '',
    priceLabel: entry.fields.priceLabel ?? '',
    features: entry.fields.features ?? [],
    heroImage: buildAsset(hero),
    gallery: galleryAssets.map((asset) => buildAsset(asset)).filter((asset): asset is ListingAsset => Boolean(asset)),
    updatedAt: entry.sys.updatedAt,
  };
};

export const fetchDemoListings = async (): Promise<DemoListing[]> => {
  const base = getContentfulBaseUrl();
  if (!base) {
    return [];
  }
  const token = getServerEnv('CONTENTFUL_DELIVERY_TOKEN');
  if (!token) {
    return [];
  }

  const url = new URL(
    `https://cdn.contentful.com/spaces/${base.space}/environments/${base.env}/entries`
  );
  url.searchParams.set('content_type', 'demoListing');
  url.searchParams.set('include', '2');
  url.searchParams.set('limit', '6');

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
    try {
      const parsed = JSON.parse(text) as {
        details?: { errors?: Array<{ name?: string }> };
      };
      const isUnknownContentType = parsed.details?.errors?.some((error) => error.name === 'unknownContentType');
      if (response.status === 400 && isUnknownContentType) {
        return [];
      }
    } catch {
      // ignore JSON parse errors
    }
    throw new Error(`Contentful request failed (${response.status}): ${text}`);
  }

  const data = (await response.json()) as ContentfulResponse;
  const assets = data.includes?.Asset ?? [];
  const assetIndex = new Map<string, Asset>();
  for (const asset of assets) {
    assetIndex.set(asset.sys.id, asset);
  }

  return data.items.map((item) => mapEntryToListing(item, assetIndex));
};
