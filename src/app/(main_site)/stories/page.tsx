import { getArticles } from '@/app/admin_niels/actions';
import { Article } from '@/types/article.d';
import Link from 'next/link';

export default async function StoriesPage() {
  const articles = await getArticles();
  const publishedArticles = articles.filter((article) => article.isPublished);

  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '3rem', fontWeight: 'bold', textAlign: 'center', marginBottom: '2rem' }}>Stories</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
        {publishedArticles.map((article) => (
          <Link key={article.slug} href={`/stories/${article.slug}`}>
            <div style={{ border: '1px solid #eee', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              {article.featuredImage && (
                <img src={article.featuredImage} alt={article.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              )}
              <div style={{ padding: '1.5rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>{article.title}</h2>
                <p style={{ color: '#666' }}>{article.metaDescription}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
