// src/app/(main_site)/articles/page.tsx

import Link from 'next/link';

import { storiesBasePath, storySummaries } from '@/data/stories';

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const featuredStory = storySummaries.find((story) => story.featured);

const sortedStories = (() => {
  const others = storySummaries
    .filter((story) => story.routeSegment !== featuredStory?.routeSegment)
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());

  return featuredStory ? [featuredStory, ...others] : others;
})();

export default function ArticlesServicePage() {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white min-h-screen">
      <main className="container mx-auto px-6 py-16 md:py-24">
        <header className="max-w-3xl mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">Articles & Stories</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 leading-[1.15]">
            Stories on a passing Scene
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue-100">
            Stories about the latest hypes in web design, marketing, AI, and business growth. We share our hypotheses,
            experiments, and outcomes. And the occasional story about life.
          </p>
        </header>

        <section className="grid gap-10 md:grid-cols-2">
          {sortedStories.map((story, index) => {
            const href = `${storiesBasePath}/${story.routeSegment}`;
            return (
              <article
                key={story.routeSegment}
                className="group flex h-full flex-col justify-between rounded-3xl border border-white/15 bg-white/5 p-8 shadow-xl backdrop-blur-lg transition hover:border-orange-400/60 hover:shadow-2xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-blue-200/80">
                    <span>{dateFormatter.format(new Date(story.publishDate))}</span>
                    <span className="h-1 w-1 rounded-full bg-blue-300/50" />
                    <span>{story.readLength}</span>
                    {index === 0 && story.featured && (
                      <span className="ml-auto inline-flex items-center rounded-full bg-orange-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-200">
                        Featured
                      </span>
                    )}
                  </div>
                  <h2 className="text-2xl font-semibold text-white group-hover:text-orange-200 transition">
                    <Link href={href}>{story.title}</Link>
                  </h2>
                  <p className="text-sm leading-relaxed text-blue-100/90">{story.excerpt}</p>
                </div>
                <div className="mt-6 flex items-center justify-between text-sm font-semibold text-orange-200">
                  <Link href={href} className="inline-flex items-center gap-2">
                    Read story
                    <svg aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </Link>
                  <span className="text-xs uppercase tracking-[0.35em] text-blue-200/70">Story</span>
                </div>
              </article>
            );
          })}
        </section>
      </main>
    </div>
  );
}
