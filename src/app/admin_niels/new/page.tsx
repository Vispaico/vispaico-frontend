import ArticleForm from '@/components/ArticleForm';
import { createArticle } from '../actions';

export default function NewArticlePage() {
  return <ArticleForm action={createArticle} />;
}
