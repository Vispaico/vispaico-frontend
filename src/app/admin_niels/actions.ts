'use server';

import { promises as fs } from 'fs';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { Article } from '@/types/article.d';

const articlesFilePath = process.cwd() + '/src/data/articles.json';

async function getArticles(): Promise<Article[]> {
  try {
    const data = await fs.readFile(articlesFilePath, 'utf-8');
    return JSON.parse(data) as Article[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

async function saveArticles(articles: Article[]) {
  await fs.writeFile(articlesFilePath, JSON.stringify(articles, null, 2));
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
    throw new Error('Title and slug are required.');
  }

  // Check for duplicate slugs
  if (articles.some(article => article.slug === newArticle.slug)) {
    throw new Error('Slug must be unique.');
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
    throw new Error('Article not found.');
  }

  const updatedSlug = formData.get('slug') as string;

  // Check for duplicate slugs if the slug was changed
  if (originalSlug !== updatedSlug && articles.some(article => article.slug === updatedSlug)) {
    throw new Error('Slug must be unique.');
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

  await saveArticles(updatedArticles);
  revalidatePath('/admin_niels');
  revalidatePath('/stories');
}
