import type { Metadata } from 'next';

import { storiesBasePath, storySummaries, storyLookup } from '@/data/stories';

const story = storyLookup['human-centered-websites'];

if (!story) {
  throw new Error('Story data missing for human-centered-websites');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = storySummaries.filter((entry) => entry.routeSegment !== story.routeSegment);

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function HumanCenteredWebsitesStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Case Notes</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <section className="space-y-6 text-lg leading-relaxed text-slate-700">
        <p>
          Websites perform best when they reflect real customer conversations, so we begin with voice-of-customer
          interviews before sketching a single layout. By mapping questions, objections, and the phrases people use, we
          know precisely what every section has to earn on the page.
        </p>
        <p>
          For this project we hosted two quick research sprints: one with existing customers and one with prospects who
          abandoned demos. The transcripts exposed two missed opportunities—explaining the onboarding timeline and showing
          proof that the product adapts to legacy systems without a full rebuild.
        </p>
        <p>
          Those findings became the spine of a modular wireframe system. We prototyped the experience in Figma, rewrote
          messaging to mirror the precise language customers used, and shipped instrumented variations into production
          within three weeks. Conversion to the demo request form jumped 37% after launch.
        </p>
        <p>
          The lasting lesson: qualitative inputs plus fast iteration unlock measurable gains quicker than a full redesign
          cycle. Future stories will dig into the instrumentation setup and the playbooks we hand off to client teams so
          they can keep optimizing after go-live.
        </p>
      </section>

      <section aria-labelledby="related-stories" className="space-y-6">
        <div className="h-px w-full bg-slate-200" />
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
          <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
            Related stories from the field
          </h2>
          <p className="text-slate-600">
            A rotating mix of recent notes. Grab ideas that match your next experiment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {relatedStories.map((related) => (
            <a
              key={related.routeSegment}
              href={`${storiesBasePath}/${related.routeSegment}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
                {publishDateFormatter.format(new Date(related.publishDate))}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-500">{related.title}</h3>
              <p className="mt-3 text-sm text-slate-600 line-clamp-3">{related.excerpt}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                Read this story
                <svg
                  aria-hidden
                  className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="flex justify-center pt-4">
          <a
            href="/services/articles"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
          >
            Back to all articles
            <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </>
  );
}
