import { getArticles } from '@/app/admin_niels/actions';
import { Article } from '@/types/article.d';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function StoryPage({ params }: { params: { slug: string } }) {
  const articles = await getArticles();
  const article = articles.find((article) => article.slug === params.slug);

  if (!article) {
    notFound();
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      {article.featuredImage && (
        <img src={article.featuredImage} alt={article.title} style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '8px' }} />
      )}
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginTop: '2rem', marginBottom: '1rem' }}>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}
