// src/app/subdomains/stories/youtube-channels-and-ai/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['youtube-channels-and-ai'];

if (!story) {
  throw new Error('Story data missing for youtube-channels-and-ai');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function YoutubeChannelsAndAiStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Creator Ops</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <section className="space-y-6">
          <p>
            There&apos;s a YouTuber making $30K a month who&apos;s never shown their face, rarely speaks on camera, and lets AI do
            most of the heavy lifting. Five years ago that sounded impossible. Today it&apos;s normal.
          </p>
          <p>
            AI didn&apos;t just tweak the creator workflow—it rewired who can grow and how fast they can do it. Here&apos;s the
            modern playbook.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759914004/Vispaico/Images/Articles/Youtube_Vispaico_Article_g9om99.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The New YouTube Playbook</h2>
          <p>
            The old routine was ideate, script, film, edit, thumbnail, upload, repeat. The AI-enabled routine handles the
            repetitive parts for you so you can focus on connection and story.
          </p>
          <p>
            AI ideates trending topics, drafts scripts, trims footage, generates thumbnail concepts, and optimizes titles
            plus descriptions. You approve, add the human layer, and ship more often without sacrificing quality.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">AI Tools That Actually Work for YouTube</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Scripts:</span> ChatGPT and Claude whip up outlines, hooks,
              and transitions in seconds. Use them as a collaborator, not a copy-paste machine, and add your voice.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Editing:</span> Descript and similar tools cut filler words,
              suggest B-roll, and shrink an eight-hour edit session into two hours of refining.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Thumbnails:</span> Midjourney and DALL·E generate concepts
              instantly. Use them for inspiration or polish them into publish-ready artwork.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Ideas:</span> Research assistants analyze your niche and
              surface topics with real demand so you stop guessing what to record next.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What AI Can&apos;t Do (Yet)</h2>
          <p>
            AI can&apos;t replicate your perspective or build trust with your audience. The creators winning right now use AI
            to clear repetitive tasks so they can spend more time on personality, depth, and consistency.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Faceless Channel Trend</h2>
          <p>
            Entire channels are thriving on stock footage, AI voiceovers, and automated scripts. ElevenLabs supplies a
            natural voice, AI handles scripting, and you package the visuals. Saturation is a risk, but right now it&apos;s a
            viable path to six figures without stepping on camera.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Real Strategy</h2>
          <p>
            Don&apos;t build a faceless channel unless that truly excites you. Instead, let AI amplify what you already do
            well. Use it to structure your expertise, trim production time, and stay prolific without burning out.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Algorithm Still Wants One Thing</h2>
          <p>
            Watch time drives growth. AI doesn&apos;t change that—but it gives you more at-bats. More iterations, more formats,
            more data to learn from. Consistency plus experiments wins, and AI keeps the machine running while you focus on
            delivering value.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Start Here</h2>
          <p>
            Pick one tool. Use ChatGPT to outline your next five videos. See how much time it saves and how it affects your
            creative energy. Layer in additional tools once the first habit sticks, and you&apos;ll feel like you hired a
            production team without the payroll.
          </p>
          <p>
            In 2025, winning on YouTube isn&apos;t about gear—it&apos;s about consistently delivering value. AI just made
            &quot;consistently&quot; a lot easier.
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
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
            >
              Back to all articles
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
              </svg>
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
