// src/app/subdomains/stories/music-production-and-ai/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'music-production-and-ai';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function MusicProductionAndAiStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Studio Notes</p>
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
            AI won&apos;t write your next hit or replace your creative instincts. But it will clear the technical bottlenecks
            that slow you down, giving you more time for the parts that make music meaningful.
          </p>
          <p>
            For producers in 2025, that&apos;s the difference between finishing one track a month and finishing three.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759912282/Vispaico/Images/Articles/ai_music_ausgng.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What AI Actually Does for Music Production</h2>
          <p>
            Forget the hype about AI-generated albums. The real value is eliminating friction. Think about how much time
            you spend hunting samples, cleaning takes, balancing levels, mastering, and organizing projects. AI can cut
            that workload in half.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">AI Tools Worth Using Right Now</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Mixing assistants:</span> iZotope and similar tools analyze
              tracks, suggest EQ curves, and dial in compression so you start from a pro-level baseline.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Mastering services:</span> Platforms like LANDR or
              CloudBounce ship a radio-ready master in minutes—perfect for demos or budget releases.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Sound design helpers:</span> Feed AI a synth patch or melody
              and get variations, harmonies, and textures on demand.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Sample finders:</span> Describe the sound you want and let AI
              surface the exact percussion hit or loop instead of scrolling through thousands of clips.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What AI Can&apos;t (and Shouldn&apos;t) Do</h2>
          <p>
            AI can&apos;t give your music heart. It produces technically correct results that often sound forgettable. Taste,
            lived experience, and emotional intuition still belong to you. Use AI to accelerate execution, not to replace
            your voice.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Real Workflow Change</h2>
          <p>
            Before AI, one track could eat your entire week. With AI, you find the right samples in minutes, mix from a
            calibrated starting point, and send rough masters instantly. The creative energy that was spent on grunt work
            is now available for melody, arrangement, and feel.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Genre That&apos;s Leading the Way</h2>
          <p>
            Electronic producers jumped first—Splice, Ableton, and FL Studio already ship smart features. Hip-hop heads use
            AI to uncover rare samples. EDM artists generate drop variations. Lo-fi creators build new textures in seconds.
            Live musicians are joining fast thanks to AI transcription that turns jam sessions into sheet music or MIDI.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Don&apos;t Become the AI Music Producer</h2>
          <p>
            The risk isn&apos;t that AI replaces you—it&apos;s that you let it dull your craft. Stay in control of the musical
            decisions. Let AI handle the technical chores while you double down on theory, taste, and storytelling.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Start Here</h2>
          <p>
            Pick the biggest friction point in your process—mixing, sample hunts, mastering—and test one AI helper. Measure
            how much time you recover and how it impacts your creativity. Keep what works, drop what doesn&apos;t.
          </p>
          <p>
            AI won&apos;t make you a better musician. It will give you more hours to practice, create, and refine—and in music,
            more time making music is everything.
          </p>
        </section>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Stories from the passing Scene
            </h2>
            <p className="text-slate-600">Further notes of thoughts that passed our mind.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedStories.map((related) => (
              <Link
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
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
            >
              Back to all articles
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
