import { promises as fs } from 'fs';
import Link from 'next/link';
import { Article } from '@/types/article.d';
import { deleteArticle } from './actions';

async function getArticles(): Promise<Article[]> {
  const filePath = process.cwd() + '/src/data/articles.json';
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    return JSON.parse(data) as Article[];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return [];
    }
    throw error;
  }
}

export default async function AdminDashboard() {
  const articles = await getArticles();

  return (
    <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
        <h2 style={{ fontSize: '1.8rem', fontWeight: '600' }}>Articles</h2>
        <Link href="/admin_niels/new" style={{ 
          padding: '0.6rem 1.2rem', 
          background: '#0070f3', 
          color: 'white', 
          textDecoration: 'none', 
          borderRadius: '4px' 
        }}>
          Create New Article
        </Link>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid #ddd' }}>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Title</th>
            <th style={{ textAlign: 'left', padding: '0.75rem' }}>Status</th>
            <th style={{ textAlign: 'right', padding: '0.75rem' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {articles.length > 0 ? (
            articles.map((article) => (
              <tr key={article.slug} style={{ borderBottom: '1px solid #eee' }}>
                <td style={{ padding: '0.75rem' }}>{article.title}</td>
                <td style={{ padding: '0.75rem' }}>
                  <span style={{
                    padding: '0.25rem 0.5rem',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    color: 'white',
                    background: article.isPublished ? '#28a745' : '#6c757d'
                  }}>
                    {article.isPublished ? 'Published' : 'Draft'}
                  </span>
                </td>
                <td style={{ padding: '0.75rem', textAlign: 'right' }}>
                  <Link href={`/admin_niels/edit/${article.slug}`} style={{ marginRight: '1rem', color: '#0070f3', textDecoration: 'none' }}>Edit</Link>
                  <form action={deleteArticle.bind(null, article.slug)} style={{ display: 'inline' }}>
                    <button type="submit" style={{ background: 'none', border: 'none', color: '#dc3545', cursor: 'pointer', padding: 0 }}>Delete</button>
                  </form>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3} style={{ textAlign: 'center', padding: '2rem' }}>No articles found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
