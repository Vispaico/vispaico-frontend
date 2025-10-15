export type ListingAsset = {
  url: string;
  width: number;
  height: number;
  description: string;
};

export type DemoListing = {
  id: string;
  title: string;
  slug: string;
  summary: string;
  location: string;
  priceLabel: string;
  features: string[];
  heroImage: ListingAsset | null;
  gallery: ListingAsset[];
  updatedAt: string;
};
