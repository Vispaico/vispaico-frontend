import { promises as fs } from 'fs';
import { notFound } from 'next/navigation';
import ArticleForm from '@/components/ArticleForm';
import { updateArticle } from '../../actions';
import { Article } from '@/types/article.d';

async function getArticle(slug: string): Promise<Article | undefined> {
  const filePath = process.cwd() + '/src/data/articles.json';
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const articles = JSON.parse(data) as Article[];
    return articles.find(article => article.slug === slug);
  } catch (error) {
    return undefined;
  }
}

export default async function EditArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticle(params.slug);

  if (!article) {
    notFound();
  }

  return <ArticleForm article={article} action={updateArticle} />;
}
