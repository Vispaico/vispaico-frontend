import { getArticles } from ' @/app/admin_niels/actions';
import { notFound } from 'next/navigation';
import { Article } from '@/types/article.d';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article: any) => ({
    slug: article.slug,
  }));
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const article = articles.find((a) => a.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>{article.title}</h1>
      {article.featuredImage && (
        <img src={article.featuredImage} alt={article.title} style={{ width: '100%', height: 'auto', borderRadius: '8px', marginBottom: '2rem' }} />
      )}
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}