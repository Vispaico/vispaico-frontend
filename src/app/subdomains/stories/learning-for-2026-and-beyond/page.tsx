// src/app/subdomains/stories/learning-for-2026-and-beyond/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['learning-for-2026-and-beyond'];

if (!story) {
  throw new Error('Story data missing for learning-for-2026-and-beyond');
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

export default function LearningFor2026AndBeyondStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Future Skills</p>
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
            Traditional education is teaching 2010 skills for a 2026 world. By the time universities update their
            curriculum, the tools and workflows have already moved on. Your career can&apos;t wait for institutions to catch
            up.
          </p>
          <p>
            So how do you learn what actually matters? Here&apos;s the playbook for building skills at the speed of the
            internet.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759913629/Vispaico/Images/Articles/Learning_Vispaico_Article_h3g2tk.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Skills That Matter in 2026</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <span className="font-semibold text-slate-900">AI literacy:</span> You don&apos;t need a PhD. You do need to use
              AI as fluently as you use search—research faster, automate repetitive tasks, and collaborate with smart
              assistants instead of fearing them.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Problem solving:</span> Facts are free. The value is breaking
              down messy problems, researching options, testing, and iterating until something works.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Clear communication:</span> Writing, speaking, and presenting
              with clarity multiplies every other skill. AI can draft, but it can&apos;t replace a voice with empathy and
              persuasion.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Adaptability:</span> Deep expertise in a fading tool is risky.
              The winning trait is learning new skills quickly and staying curious.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Where to Actually Learn</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Online platforms:</span> YouTube, Coursera, and Udemy teach
              world-class skills for the cost of dinner. You&apos;re not buying credentials—you&apos;re buying knowledge.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Learning by building:</span> Create real projects for real
              needs. A website for a client. A video for a brand. A product you&apos;d actually use. The reps matter more than
              lectures.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Communities over classrooms:</span> Discord servers, Reddit
              groups, and niche forums move at industry speed. Share work, get feedback, and learn from others&apos; mistakes.
            </li>
            <li>
              <span className="font-semibold text-slate-900">AI as your tutor:</span> Stuck on a concept? Ask ChatGPT to
              explain it five different ways. Need practice problems? Have AI generate them. The best tutor you&apos;ve ever had
              now lives in your pocket.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Learning Strategy That Works</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>Pick one skill that will get you paid or promoted fastest.</li>
            <li>Spend a week on the fundamentals—just enough to start building.</li>
            <li>Build something real immediately and fight through the roadblocks.</li>
            <li>Share the work, collect feedback, iterate, and repeat.</li>
            <li>Charge for the skill, even a small amount, to learn how to deliver for others.</li>
          </ol>
          <p>
            Repetition plus feedback beats years of passive consumption. Your first projects will be rough. The next ten
            will be better. Stick with it.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What Not to Do</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Don&apos;t chase credentials unless the industry legally requires them.</li>
            <li>Don&apos;t spend years &quot;preparing&quot; before you build anything real.</li>
            <li>Don&apos;t learn ten skills at once and master none.</li>
            <li>Don&apos;t confuse watching tutorials with actual learning.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The 2026 Learner</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Learns new tools in days instead of months.</li>
            <li>Builds real projects instead of collecting theoretical knowledge.</li>
            <li>Adapts to change instead of fighting it.</li>
            <li>Uses AI to amplify output instead of fearing it.</li>
          </ul>
          <p>
            Start now. Pick a skill this week. Build something next week. Share it the week after. While others debate
            which bootcamp to join, you&apos;ll already have results and momentum.
          </p>
          <p>
            The education system won&apos;t save you. Learning fast, building relentlessly, and adapting constantly will. The
            future belongs to the people creating it—not the ones still studying for it.
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
