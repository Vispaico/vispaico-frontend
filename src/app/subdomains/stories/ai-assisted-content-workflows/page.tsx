import type { Metadata } from 'next';

import { storiesBasePath, storySummaries, storyLookup } from '@/data/stories';

const story = storyLookup['ai-assisted-content-workflows'];

if (!story) {
  throw new Error('Story data missing for ai-assisted-content-workflows');
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

export default function AiAssistedContentWorkflowsStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Operations Playbook</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <section className="space-y-6 text-lg leading-relaxed text-slate-700">
        <p>
          Lean content teams need leverage, not more busywork. We built a workflow that pairs a small research squad with
          AI copilots so the humans stay focused on editorial judgement while the system handles pattern spotting and draft
          generation.
        </p>
        <p>
          The process starts with a structured intake form that captures audience, intent, and desired actions. Those inputs
          trigger prompts for research assistants to gather source material and competitive examples. Once approved, we feed
          that package into our drafting model that outputs a rough outline, social angles, and CTA ideas.
        </p>
        <p>
          Editors then tailor the outline, add anecdotes, and record a quick Loom with the key narrative. The video is
          transcribed, and that transcript powers the final article draft plus repurposed snippets for newsletters and
          LinkedIn. Publishing is scheduled through a Notion board that syncs with our CMS so the team always knows what&apos;s
          live and what&apos;s next.
        </p>
        <p>
          Within the first month, the team doubled publishing cadence without sacrificing voice. Future iterations will plug
          in analytics to score which prompts and distribution channels move the needle so we can keep improving the system.
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
