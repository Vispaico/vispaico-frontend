import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import { Article } from '@/types/article.d';
import type { Metadata } from 'next';
import Image from 'next/image';

const filePath = process.cwd() + '/src/data/articles.json';

async function getArticles(): Promise<Article[]> {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as Article[];
  } catch {
    return [];
  }
}

async function getArticle(slug: string): Promise<Article | undefined> {
  const articles = await getArticles();
  return articles.find(article => article.slug === slug && article.isPublished);
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticle(params.slug);

  if (!article) {
    return {
      title: 'Not Found',
      description: 'This page does not exist.',
    };
  }

  return {
    title: article.metaTitle || article.title,
    description: article.metaDescription,
  };
}

// Generate static paths for all published articles
export async function generateStaticParams() {
  const articles = await getArticles();
  return articles
    .filter(article => article.isPublished)
    .map(article => ({ slug: article.slug }));
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <article>
        <h1>{article.title}</h1>
        {article.featuredImage && <Image src={article.featuredImage} alt={article.title} width={1200} height={630} style={{ width: '100%', height: 'auto', margin: '2rem 0' }} />}        
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
}
