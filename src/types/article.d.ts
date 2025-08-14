export interface Article {
  slug: string;
  title: string;
  featuredImage: string;
  content: string;
  metaTitle: string;
  metaDescription: string;
  isPublished: boolean;
  createdAt: string; // ISO 8601 date string
  updatedAt: string; // ISO 8601 date string
}
