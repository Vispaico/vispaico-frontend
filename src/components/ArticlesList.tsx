"use client";

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { storiesBasePath, getStorySummaries, type StoryCategory } from '@/data/stories';
import { useTranslations } from 'next-intl';
import { resolveLocale } from '@/i18n/locale-utils';
import { useMemo } from 'react';

const CATEGORY_ORDER: Array<'all' | StoryCategory> = ['all', 'speed', 'tech', 'growth', 'case-study', 'life'];

const isValidCategory = (value: unknown): value is 'all' | StoryCategory =>
  typeof value === 'string' && CATEGORY_ORDER.includes(value as 'all' | StoryCategory);

export default function ArticlesList({ locale }: { locale: string }) {
  const searchParams = useSearchParams();
  const resolvedLocale = resolveLocale(locale);
  
  const filtersT = useTranslations('Articles.filters');
  const categoriesT = useTranslations('Articles.categories');
  const copyT = useTranslations('Articles.copy');

  const activeFilterRaw = searchParams.get('filter');
  const activeFilter: 'all' | StoryCategory = isValidCategory(activeFilterRaw) ? activeFilterRaw : 'all';

  const stories = useMemo(() => getStorySummaries(resolvedLocale).sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()), [resolvedLocale]);
  const featuredStory = useMemo(() => stories.find((story) => story.featured) ?? stories[0], [stories]);
  const filteredStories = useMemo(
    () =>
      stories.filter((story) => {
        const isFeatured = story.routeSegment === featuredStory?.routeSegment;
        return activeFilter === 'all' ? !isFeatured : story.category === activeFilter;
      }),
    [stories, featuredStory, activeFilter]
  );

  const page = searchParams.get('page') ? parseInt(searchParams.get('page') as string, 10) : 1;
  const pageSize = 9;
  const totalPages = Math.ceil(filteredStories.length / pageSize);
  const paginatedStories = filteredStories.slice((page - 1) * pageSize, page * pageSize);

  const dateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const featuredHref = `${storiesBasePath}/${featuredStory.routeSegment}`;
  const featuredImage = featuredStory.featuredImage;

  const filterLinks = CATEGORY_ORDER.map((category) => ({
    id: category,
    label: filtersT(`${category}.label`),
    description: filtersT(`${category}.description`),
    href: category === 'all' ? '/articles' : `/articles?filter=${category}`,
  }));

  return (
    <>
      <nav className="flex flex-wrap items-center gap-3">
        {filterLinks.map((filter) => {
          const isActive = filter.id === activeFilter;
          return (
            <Link
              key={filter.id}
              href={filter.href}
              className={`rounded-full border px-5 py-2 text-sm font-semibold transition focus:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 ${
                isActive
                  ? 'border-orange-400 bg-orange-500/20 text-orange-100'
                  : 'border-white/10 bg-white/5 text-blue-100 hover:border-orange-300/70 hover:text-white'
              }`}
            >
              <div className="flex flex-col">
                <span>{filter.label}</span>
                <span className="text-[11px] font-normal text-blue-200/70">{filter.description}</span>
              </div>
            </Link>
          );
        })}
      </nav>

      {activeFilter === 'all' && featuredStory && (
        <section className="grid gap-8 rounded-3xl border border-orange-300/20 bg-gradient-to-r from-blue-500/20 via-black to-blue-500/10 p-10 shadow-xl backdrop-blur-xl transition lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-5">
            <span className="inline-flex items-center rounded-full border border-orange-400/60 bg-orange-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-100">
              {copyT('featuredLabel')}
            </span>
            <div className="flex flex-wrap items-center gap-2 text-sm text-orange-100/90">
              <span>{dateFormatter.format(new Date(featuredStory.publishDate))}</span>
              <span className="h-1 w-1 rounded-full bg-orange-200/70" aria-hidden />
              <span>{featuredStory.readLength}</span>
              <span className="h-1 w-1 rounded-full bg-orange-200/70" aria-hidden />
              <span>{categoriesT(`${featuredStory.category}.label`)}</span>
            </div>
            <h2 className="text-3xl font-semibold text-white lg:text-4xl">
              <Link href={featuredHref} className="transition hover:text-orange-200">
                {featuredStory.title}
              </Link>
            </h2>
            <p className="text-base leading-relaxed text-orange-50/90">
              {featuredStory.excerpt}
            </p>
            <Link
              href={featuredHref}
              className="group inline-flex items-center gap-2 rounded-full border border-orange-300/70 bg-orange-400/20 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-200 hover:text-white"
            >
              {copyT('readStory')}
              <svg aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
          </div>
          {featuredImage && (
            <Link
              href={featuredHref}
              className="relative block w-full max-w-xl overflow-hidden rounded-3xl border border-orange-200/40 bg-orange-200/10 sm:max-w-md lg:mx-auto lg:w-[50%] lg:max-w-none"
            >
              <Image
                src={featuredImage.src}
                alt={featuredImage.alt}
                width={featuredImage.width ?? 1600}
                height={featuredImage.height ?? 900}
                className="h-full w-full object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 60vw, 90vw"
                priority
              />
            </Link>
          )}
        </section>
      )}

      <section className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {paginatedStories.map((story) => {
          const href = `${storiesBasePath}/${story.routeSegment}`;
          return (
            <article
              key={story.routeSegment}
              className="group flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-8 shadow-xl backdrop-blur-lg transition hover:border-orange-400/60 hover:shadow-2xl"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-blue-200/80">
                  <span>{dateFormatter.format(new Date(story.publishDate))}</span>
                  <span className="h-1 w-1 rounded-full bg-blue-300/50" aria-hidden />
                  <span>{story.readLength}</span>
                  <span className="h-1 w-1 rounded-full bg-blue-300/50" aria-hidden />
                  <span>{categoriesT(`${story.category}.label`)}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white group-hover:text-orange-200 transition">
                  <Link href={href}>{story.title}</Link>
                </h3>
                <p className="text-sm leading-relaxed text-blue-100/90">{story.excerpt}</p>
              </div>
              <div className="mt-6 flex items-center justify-between text-sm font-semibold text-orange-200">
                <Link href={href} className="inline-flex items-center gap-2">
                  {copyT('readStory')}
                  <svg aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
                <span className="text-xs uppercase tracking-[0.35em] text-blue-200/70">{copyT('label')}</span>
              </div>
            </article>
          );
        })}
      </section>

      <section className="flex justify-center">
        <nav className="flex items-center gap-2">
          {page > 1 && (
            <Link href={`/articles?page=${page - 1}${activeFilter !== 'all' ? `&filter=${activeFilter}` : ''}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 hover:border-orange-300/70 hover:text-white">
              Previous
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <Link
              key={p}
              href={`/articles?page=${p}${activeFilter !== 'all' ? `&filter=${activeFilter}` : ''}`}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
                p === page
                  ? 'border-orange-400 bg-orange-500/20 text-orange-100'
                  : 'border-white/10 bg-white/5 text-blue-100 hover:border-orange-300/70 hover:text-white'
              }`}
            >
              {p}
            </Link>
          ))}
          {page < totalPages && (
            <Link href={`/articles?page=${page + 1}${activeFilter !== 'all' ? `&filter=${activeFilter}` : ''}`} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-blue-100 hover:border-orange-300/70 hover:text-white">
              Next
            </Link>
          )}
        </nav>
      </section>
    </>
  );
}
