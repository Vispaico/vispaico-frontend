export type DemoMediaLink = {
  id: string;
  label: string;
  url: string;
};

export type DemoHeroImage = {
  url: string;
  publicId: string;
};

export type DemoArticle = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  body: string;
  heroImage: DemoHeroImage | null;
  mediaLinks: DemoMediaLink[];
  createdAt: string;
  updatedAt: string;
};

export type DemoArticleDraft = {
  title: string;
  slug?: string;
  excerpt?: string;
  metaTitle?: string;
  metaDescription?: string;
  body?: string;
  heroImage?: DemoHeroImage | null;
  mediaLinks?: DemoMediaLink[];
};
