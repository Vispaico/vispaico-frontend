'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Article } from '@/types/article.d';
import { put, list } from '@vercel/blob';

const ARTICLES_BLOB_KEY = 'articles.json';

export async function getArticles(): Promise<Article[]> {
  try {
    const blob = await list({ prefix: ARTICLES_BLOB_KEY, limit: 1 });
    if (blob.blobs.length === 0) {
      return [];
    }
    const response = await fetch(blob.blobs[0].url);
    const data = await response.json();
    return data as Article[];
  } catch (error) {
    console.error('Error fetching articles from blob:', error);
    return [];
  }
}

async function saveArticles(articles: Article[]) {
  await put(ARTICLES_BLOB_KEY, JSON.stringify(articles, null, 2), {
    access: 'public',
  });
}

export async function createArticle(formData: FormData) {
  const articles = await getArticles();
  const now = new Date().toISOString();

  const newArticle: Article = {
    title: formData.get('title') as string,
    slug: formData.get('slug') as string,
    content: formData.get('content') as string,
    featuredImage: formData.get('featuredImage') as string,
    metaTitle: formData.get('metaTitle') as string,
    metaDescription: formData.get('metaDescription') as string,
    isPublished: formData.get('isPublished') === 'on',
    createdAt: now,
    updatedAt: now,
  };

  // Basic validation
  if (!newArticle.title || !newArticle.slug) {
    return { error: 'Title and slug are required.' };
  }

  // Check for duplicate slugs
  if (articles.some(article => article.slug === newArticle.slug)) {
    return { error: 'Slug must be unique.' };
  }

  articles.push(newArticle);
  await saveArticles(articles);

  revalidatePath('/admin_niels');
  revalidatePath('/stories');
  redirect('/admin_niels');
}

export async function updateArticle(formData: FormData) {
  const articles = await getArticles();
  const originalSlug = formData.get('originalSlug') as string;

  const articleIndex = articles.findIndex(article => article.slug === originalSlug);

  if (articleIndex === -1) {
    return { error: 'Article not found.' };
  }

  const updatedSlug = formData.get('slug') as string;

  // Check for duplicate slugs if the slug was changed
  if (originalSlug !== updatedSlug && articles.some(article => article.slug === updatedSlug)) {
    return { error: 'Slug must be unique.' };
  }

  const updatedArticle: Article = {
    ...articles[articleIndex],
    title: formData.get('title') as string,
    slug: updatedSlug,
    content: formData.get('content') as string,
    featuredImage: formData.get('featuredImage') as string,
    metaTitle: formData.get('metaTitle') as string,
    metaDescription: formData.get('metaDescription') as string,
    isPublished: formData.get('isPublished') === 'on',
    updatedAt: new Date().toISOString(),
  };

  articles[articleIndex] = updatedArticle;
  await saveArticles(articles);

  revalidatePath('/admin_niels');
  revalidatePath(`/stories/${originalSlug}`);
  if (originalSlug !== updatedSlug) {
    revalidatePath(`/stories/${updatedSlug}`);
  }
  redirect('/admin_niels');
}

export async function deleteArticle(slug: string) {
  const articles = await getArticles();
  const updatedArticles = articles.filter((article) => article.slug !== slug);

  if (updatedArticles.length < articles.length) {
    await saveArticles(updatedArticles);
  }

  revalidatePath('/admin_niels');
  revalidatePath('/stories');
  redirect('/admin_niels');
}
