'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Article } from '@/types/article.d';
import slugify from 'slugify';
import TiptapEditor from './RichTextEditor';

type ArticleFormProps = {
  article?: Article;
  action: (formData: FormData) => Promise<void>;
};

export default function ArticleForm({ article, action }: ArticleFormProps) {
  const router = useRouter();
  const [title, setTitle] = useState(article?.title || '');
  const [slug, setSlug] = useState(article?.slug || '');
  const [content, setContent] = useState(article?.content || '');
  const [isPublished, setIsPublished] = useState(article?.isPublished || false);
  const [isSlugManuallyEdited, setIsSlugManuallyEdited] = useState(!!article?.slug);

  useEffect(() => {
    if (!isSlugManuallyEdited) {
      setSlug(slugify(title, { lower: true, strict: true }));
    }
  }, [title, isSlugManuallyEdited]);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleSlugChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSlugManuallyEdited(true);
    setSlug(e.target.value);
  };

  return (
    <form action={action}>
      {/* Hidden input for original slug if editing */}
      {article && <input type="hidden" name="originalSlug" value={article.slug} />}

      <div style={{ background: 'white', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.8rem', fontWeight: '600' }}>{article ? 'Edit Article' : 'Create New Article'}</h2>
          <div>
            <button type="button" onClick={() => router.back()} style={{ marginRight: '1rem', background: 'none', border: '1px solid #ccc', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}>Cancel</button>
            <button type="submit" style={{ background: '#0070f3', color: 'white', border: 'none', padding: '0.6rem 1.2rem', borderRadius: '4px', cursor: 'pointer' }}>Save Post</button>
          </div>
        </div>

        {/* Main Content Area */}
        <div style={{ display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '2rem' }}>
          <div>
            <input type="text" name="title" placeholder="Article Title" value={title} onChange={handleTitleChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', fontSize: '1.2rem', marginBottom: '1rem' }} required />
            <input type="text" name="slug" placeholder="article-slug" value={slug} onChange={handleSlugChange} style={{ width: '100%', padding: '0.75rem', border: '1px solid #ccc', borderRadius: '4px', marginBottom: '1rem' }} required />
            <TiptapEditor content={content} onChange={setContent} />
            <input type="hidden" name="content" value={content} />
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#f8f9fa' }}>
              <h4>Publish Settings</h4>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <input type="checkbox" id="isPublished" name="isPublished" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} style={{ marginRight: '0.5rem' }} />
                <label htmlFor="isPublished">Publish Post</label>
              </div>
            </div>

            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#f8f9fa', marginTop: '1rem' }}>
              <h4>Featured Image</h4>
              <input type="text" name="featuredImage" defaultValue={article?.featuredImage || ''} placeholder="Image URL" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', marginTop: '0.5rem' }} />
            </div>

            <div style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#f8f9fa', marginTop: '1rem' }}>
              <h4>SEO Settings</h4>
              <input type="text" name="metaTitle" defaultValue={article?.metaTitle || ''} placeholder="Meta Title" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', marginTop: '0.5rem' }} />
              <textarea name="metaDescription" defaultValue={article?.metaDescription || ''} placeholder="Meta Description" style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px', marginTop: '0.5rem', minHeight: '100px' }} />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
