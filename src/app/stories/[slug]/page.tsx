import { getArticles } from '@/app/admin_niels/actions';
import { notFound } from 'next/navigation';
import { Article } from '@/types/article.d';
import type { Metadata } from 'next';
import Image from 'next/image';



export async function generateMetadata(props: any): Promise<Metadata> {
  const articles = await getArticles();
  const article = articles.find(article => article.slug === props.params.slug && article.isPublished);

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function StoryPage(props: any) {
  const articles = await getArticles();
  const article = articles.find(article => article.slug === props.params.slug && article.isPublished);

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
