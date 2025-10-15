'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState, useTransition } from 'react';

import type { DemoArticle, DemoArticleDraft, DemoHeroImage, DemoMediaLink } from '@/types/tutorial';

import RichTextEditor from './RichTextEditor';

type TutorialDashboardProps = {
  initialArticles: DemoArticle[];
};

type ApiArticleResponse = {
  article: DemoArticle;
};

type UploadSignaturePayload = {
  signature: string;
  timestamp: number;
  apiKey: string;
  cloudName: string;
  folder?: string;
};

const emptyDraft = (): DemoArticleDraft => ({
  title: '',
  slug: '',
  excerpt: '',
  metaTitle: '',
  metaDescription: '',
  body: '<p></p>',
  heroImage: null,
  mediaLinks: [],
});

const toDraft = (article: DemoArticle): DemoArticleDraft => ({
  title: article.title,
  slug: article.slug,
  excerpt: article.excerpt,
  metaTitle: article.metaTitle,
  metaDescription: article.metaDescription,
  body: article.body,
  heroImage: article.heroImage,
  mediaLinks: article.mediaLinks,
});

const ensureMediaLinkIds = (links: DemoMediaLink[] = []) =>
  links.map((link) => ({
    ...link,
    id: link.id || crypto.randomUUID(),
  }));

const ensureDraft = (draft: DemoArticleDraft): DemoArticleDraft => ({
  ...draft,
  mediaLinks: ensureMediaLinkIds(draft.mediaLinks ?? []),
});

const fetchArticles = async () => {
  const response = await fetch('/api/tutorial/articles', { cache: 'no-store' });
  if (!response.ok) {
    throw new Error('Unable to refresh articles');
  }
  const payload = (await response.json()) as { articles: DemoArticle[] };
  return payload.articles;
};

const uploadToCloudinary = async (file: File): Promise<DemoHeroImage> => {
  const signatureResponse = await fetch('/api/tutorial/upload-signature', {
    method: 'POST',
  });

  if (!signatureResponse.ok) {
    throw new Error('Unable to prepare upload. Check Cloudinary configuration.');
  }

  const signaturePayload = (await signatureResponse.json()) as UploadSignaturePayload;

  const formData = new FormData();
  formData.append('file', file);
  formData.append('api_key', signaturePayload.apiKey);
  formData.append('timestamp', String(signaturePayload.timestamp));
  formData.append('signature', signaturePayload.signature);
  if (signaturePayload.folder) {
    formData.append('folder', signaturePayload.folder);
  }

  const cloudinaryUpload = await fetch(
    `https://api.cloudinary.com/v1_1/${signaturePayload.cloudName}/auto/upload`,
    {
      method: 'POST',
      body: formData,
    }
  );

  if (!cloudinaryUpload.ok) {
    const errorText = await cloudinaryUpload.text();
    throw new Error(`Cloudinary upload failed: ${errorText}`);
  }

  const result = (await cloudinaryUpload.json()) as { secure_url: string; public_id: string };

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
};

const normalizeDraftForApi = (draft: DemoArticleDraft): DemoArticleDraft => ({
  ...draft,
  mediaLinks: draft.mediaLinks?.filter((link) => link.url.trim().length > 0).map((link) => ({
    ...link,
    label: link.label.trim() || link.url,
  })),
  heroImage: draft.heroImage ?? null,
});

const classNames = (...values: Array<string | false | null | undefined>) => values.filter(Boolean).join(' ');

export default function TutorialDashboard({ initialArticles }: TutorialDashboardProps) {
  const [articles, setArticles] = useState<DemoArticle[]>(initialArticles);
  const [selectedId, setSelectedId] = useState<string | null>(initialArticles[0]?.id ?? null);
  const [draft, setDraft] = useState<DemoArticleDraft>(
    initialArticles[0] ? ensureDraft(toDraft(initialArticles[0])) : emptyDraft()
  );
  const [status, setStatus] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isRefreshing, startRefresh] = useTransition();

  const selectedArticle = useMemo(
    () => (selectedId ? articles.find((article) => article.id === selectedId) ?? null : null),
    [articles, selectedId]
  );

  const isNewArticle = selectedId === 'new' || (!selectedId && !articles.length);

  useEffect(() => {
    if (selectedId === 'new') {
      setDraft(ensureDraft(emptyDraft()));
      return;
    }
    if (selectedArticle) {
      setDraft(ensureDraft(toDraft(selectedArticle)));
    }
  }, [selectedArticle, selectedId]);

  const handleFieldChange = <Key extends keyof DemoArticleDraft>(key: Key, value: DemoArticleDraft[Key]) => {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleMediaLinkChange = (id: string, key: keyof DemoMediaLink, value: string) => {
    setDraft((prev) => ({
      ...prev,
      mediaLinks: ensureMediaLinkIds(prev.mediaLinks ?? []).map((link) =>
        link.id === id
          ? {
              ...link,
              [key]: value,
            }
          : link
      ),
    }));
  };

  const handleAddMediaLink = () => {
    setDraft((prev) => ({
      ...prev,
      mediaLinks: [...ensureMediaLinkIds(prev.mediaLinks ?? []), { id: crypto.randomUUID(), label: '', url: '' }],
    }));
  };

  const handleRemoveMediaLink = (id: string) => {
    setDraft((prev) => ({
      ...prev,
      mediaLinks: ensureMediaLinkIds(prev.mediaLinks ?? []).filter((link) => link.id !== id),
    }));
  };

  const handleRefresh = () => {
    startRefresh(async () => {
      try {
        const fresh = await fetchArticles();
        setArticles(fresh);
        setStatus('Synced with latest content.');
        setError('');
      } catch (refreshError) {
        setError((refreshError as Error).message);
      }
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    setStatus('');
    setError('');
    try {
      if (!draft.title || draft.title.trim().length === 0) {
        throw new Error('Title is required.');
      }

      const payload = normalizeDraftForApi(draft);

      const endpoint = isNewArticle ? '/api/tutorial/articles' : `/api/tutorial/articles/${selectedArticle?.id}`;
      const method = isNewArticle ? 'POST' : 'PUT';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Unable to save article');
      }

      const { article } = (await response.json()) as ApiArticleResponse;

      setArticles((prev) => {
        const existing = prev.filter((item) => item.id !== article.id);
        return [article, ...existing];
      });
      setSelectedId(article.id);
      setDraft(ensureDraft(toDraft(article)));
      setStatus(isNewArticle ? 'Article created successfully.' : 'Article updated successfully.');
    } catch (saveError) {
      setError((saveError as Error).message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!selectedArticle) {
      return;
    }
    if (!window.confirm('Delete this article? This action cannot be undone.')) {
      return;
    }
    setIsDeleting(true);
    setError('');
    setStatus('');
    try {
      const response = await fetch(`/api/tutorial/articles/${selectedArticle.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || 'Unable to delete article');
      }
      setArticles((prev) => prev.filter((item) => item.id !== selectedArticle.id));
      const nextArticle = articles.find((item) => item.id !== selectedArticle.id);
      if (nextArticle) {
        setSelectedId(nextArticle.id);
        setDraft(ensureDraft(toDraft(nextArticle)));
      } else {
        setSelectedId('new');
        setDraft(ensureDraft(emptyDraft()));
      }
      setStatus('Article deleted.');
    } catch (deleteError) {
      setError((deleteError as Error).message);
    } finally {
      setIsDeleting(false);
    }
  };

  const handleHeroUpload = async (file: File) => {
    try {
      const hero = await uploadToCloudinary(file);
      handleFieldChange('heroImage', hero);
      setStatus('Hero image uploaded to Cloudinary.');
    } catch (uploadError) {
      setError((uploadError as Error).message);
    }
  };

  const handleRemoveHero = () => {
    handleFieldChange('heroImage', null);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
      <aside className="space-y-4">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Articles</h2>
            <button
              type="button"
              onClick={handleRefresh}
              className="text-xs font-semibold text-blue-500 transition hover:text-blue-600"
            >
              {isRefreshing ? 'Syncing…' : 'Refresh'}
            </button>
          </div>
          <div className="mt-4 space-y-2">
            {articles.map((article) => (
              <button
                key={article.id}
                type="button"
                onClick={() => setSelectedId(article.id)}
                className={classNames(
                  'w-full rounded-2xl border px-4 py-3 text-left transition',
                  selectedArticle?.id === article.id
                    ? 'border-blue-400 bg-blue-50 text-blue-700'
                    : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-blue-200 hover:bg-blue-50'
                )}
              >
                <p className="text-sm font-semibold">{article.title}</p>
                <p className="text-xs text-slate-500">Updated {new Date(article.updatedAt).toLocaleString()}</p>
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSelectedId('new')}
              className={classNames(
                'w-full rounded-2xl border px-4 py-3 text-left transition',
                isNewArticle && !selectedArticle ? 'border-blue-400 bg-blue-50 text-blue-700' : 'border-dashed border-slate-300'
              )}
            >
              <span className="text-sm font-semibold text-blue-500">+ New article</span>
            </button>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg text-sm text-slate-600">
          <h3 className="text-base font-semibold text-slate-900">Workflow notes</h3>
          <ul className="mt-3 space-y-2 list-disc pl-4">
            <li>Upload media to Cloudinary or paste external URLs under “Media links”.</li>
            <li>Meta title and description power SEO previews.</li>
            <li>Content remains published until you remove it here.</li>
          </ul>
        </div>
      </aside>

      <section className="space-y-6">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
          <header className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
              {isNewArticle ? 'Create article' : 'Edit article'}
            </p>
            <h2 className="text-2xl font-semibold text-slate-900">
              {draft.title?.trim()?.length ? draft.title : 'Start writing your next story'}
            </h2>
          </header>

          <div className="mt-6 space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Title</span>
                <input
                  value={draft.title}
                  onChange={(event) => handleFieldChange('title', event.target.value)}
                  placeholder="AI Transformation Trends"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                  required
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Slug</span>
                <input
                  value={draft.slug ?? ''}
                  onChange={(event) => handleFieldChange('slug', event.target.value)}
                  placeholder="ai-transformation-trends"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Meta title</span>
                <input
                  value={draft.metaTitle ?? ''}
                  onChange={(event) => handleFieldChange('metaTitle', event.target.value)}
                  placeholder="Vispaico: AI Transformation Trends"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">Meta description</span>
                <input
                  value={draft.metaDescription ?? ''}
                  onChange={(event) => handleFieldChange('metaDescription', event.target.value)}
                  placeholder="Preview copy for search engines"
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                />
              </label>
            </div>

            <label className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Excerpt</span>
              <textarea
                value={draft.excerpt ?? ''}
                onChange={(event) => handleFieldChange('excerpt', event.target.value)}
                placeholder="Give readers a teaser of the story"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                rows={3}
              />
            </label>

            <div className="space-y-2">
              <span className="text-sm font-semibold text-slate-700">Body</span>
              <RichTextEditor value={draft.body ?? '<p></p>'} onChange={(value) => handleFieldChange('body', value)} />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Hero image</span>
                  {draft.heroImage ? (
                    <button
                      type="button"
                      onClick={handleRemoveHero}
                      className="text-xs font-semibold text-rose-500 hover:text-rose-600"
                    >
                      Remove
                    </button>
                  ) : null}
                </div>
                <div className="rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-4 text-center text-sm text-slate-500">
                  {draft.heroImage ? (
                    <div className="space-y-3">
                      <Image
                        src={draft.heroImage.url}
                        alt={draft.title || 'Hero image'}
                        width={640}
                        height={360}
                        className="mx-auto h-48 w-full max-w-sm rounded-xl object-cover"
                      />
                      <p className="text-xs text-slate-500">{draft.heroImage.publicId}</p>
                    </div>
                  ) : (
                    <p>Drop an image below or paste an external URL in the body.</p>
                  )}
                  <label className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                    Upload from device
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(event) => {
                        const file = event.target.files?.[0];
                        if (file) {
                          void handleHeroUpload(file);
                        }
                      }}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-slate-700">Media links</span>
                  <button
                    type="button"
                    onClick={handleAddMediaLink}
                    className="text-xs font-semibold text-blue-500 hover:text-blue-600"
                  >
                    Add link
                  </button>
                </div>
                <div className="space-y-3">
                  {(draft.mediaLinks ?? []).map((link) => (
                    <div key={link.id} className="rounded-2xl border border-slate-200 bg-slate-50 p-4 space-y-3">
                      <label className="space-y-1 text-xs">
                        <span className="font-semibold text-slate-600">Label</span>
                        <input
                          value={link.label}
                          onChange={(event) => handleMediaLinkChange(link.id, 'label', event.target.value)}
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                        />
                      </label>
                      <label className="space-y-1 text-xs">
                        <span className="font-semibold text-slate-600">URL</span>
                        <input
                          value={link.url}
                          onChange={(event) => handleMediaLinkChange(link.id, 'url', event.target.value)}
                          placeholder="https://"
                          className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 focus:border-blue-400 focus:outline-none"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() => handleRemoveMediaLink(link.id)}
                        className="text-xs font-semibold text-rose-500 hover:text-rose-600"
                      >
                        Remove link
                      </button>
                    </div>
                  ))}
                  {(draft.mediaLinks ?? []).length === 0 ? (
                    <p className="rounded-2xl border border-dashed border-slate-200 bg-slate-50 p-4 text-xs text-slate-500">
                      Link to YouTube, Loom, PDFs, or other hosted media.
                    </p>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => void handleSave()}
                disabled={isSaving}
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:bg-blue-300"
              >
                {isSaving ? 'Saving…' : 'Save changes'}
              </button>
              {!isNewArticle && selectedArticle ? (
                <button
                  type="button"
                  onClick={() => void handleDelete()}
                  disabled={isDeleting}
                  className="inline-flex items-center gap-2 rounded-full border border-rose-400 px-6 py-2 text-sm font-semibold text-rose-500 transition hover:bg-rose-50 disabled:opacity-50"
                >
                  {isDeleting ? 'Deleting…' : 'Delete article'}
                </button>
              ) : null}
            </div>
            {status ? <p className="text-sm font-semibold text-emerald-600">{status}</p> : null}
            {error ? <p className="text-sm font-semibold text-rose-600">{error}</p> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
