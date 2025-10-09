// src/app/subdomains/stories/digital-detox-selective-engagement/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['digital-detox-selective-engagement'];

if (!story) {
  throw new Error('Story data missing for digital-detox-selective-engagement');
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

export default function DigitalDetoxSelectiveEngagementStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Attention Reset</p>
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
            Digital exhaustion is finally mainstream. Founders, students, and creators are deleting apps, muting alerts,
            and scheduling intentional log-off windows—not because tech is evil, but because their attention is a finite
            resource.
          </p>
          <p>
            The modern detox isn&apos;t a dramatic 30-day cleanse. It&apos;s selective engagement. You keep the tools that add
            value, cut the ones that drain you, and bring AI in as a boundary enforcer instead of another distraction.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1760014698/Vispaico/Images/Articles/social_media_detox_z2sn8u.webp"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Why Everyone Is Logging Off (A Little)</h2>
          <p>
            Social feeds are engineered for endless scrolling, but resilience experts point out that our nervous systems
            weren&apos;t designed to digest a thousand micro-updates before lunch. Selective engagement is a response to the
            anxiety loop—not a rebellion against technology itself.
          </p>
          <p>
            The payoff is tangible: better sleep, calmer mornings, and more deliberate creative time. It&apos;s about flipping
            the hierarchy so real-world connections outrank algorithmic momentum.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Psychology-Backed Detox Habits</h2>
          <p>Start small and stack habits you can sustain:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Create phone-free zones.</span> Bedrooms and dining tables are
              non-negotiable. Use a real alarm clock and charge devices out of reach.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Define time windows.</span> Set a curfew—7 PM is a popular cut
              off—so your brain can downshift before bed.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Kill non-human notifications.</span> If an alert isn&apos;t from a
              person you know, it shouldn&apos;t light up your lock screen.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Schedule micro breaks.</span> The 20-20-20 rule (every 20
              minutes, look 20 feet away for 20 seconds) protects eyesight and attention span.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Swap doomscrolling for analog rituals.</span> Reading, journaling,
              walks, and coffee chats rebuild the focus social media erodes.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">AI Tools That Help You Hold the Line</h2>
          <p>
            Boundaries stick when software enforces them. A few standouts from the 2025 detox playbook:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Opal and Freedom:</span> AI-powered blockers that learn which
              apps trigger your scroll reflex and shut them down during focus hours.
            </li>
            <li>
              <span className="font-semibold text-slate-900">iOS Focus Modes + Siri Shortcuts:</span> Automations that dim
              distracting home screens, silence Slack after 6 PM, and surface only priority contacts.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Reclaim.ai:</span> Intelligently schedules breaks, deep work
              blocks, and downtime so your calendar reflects the balance you&apos;re chasing.
            </li>
          </ul>
          <p>
            The goal isn&apos;t total abstinence. It&apos;s making your phone work for you instead of hijacking your attention every
            time boredom strikes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">A Practical Action Plan</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>Pick one room to designate as screen-free this week.</li>
            <li>Turn off every non-essential notification for 72 hours and see what actually matters.</li>
            <li>Schedule a nightly log-off ritual—dim lights, close loops, prep for tomorrow.</li>
            <li>Track screen time honestly. The data will motivate the next round of cuts.</li>
            <li>Replace one endless scroll with an offline habit you look forward to.</li>
          </ol>
          <p>
            You don&apos;t need to quit social media. You just need to reclaim agency. Selective engagement hands you the reins
            without requiring a cabin-in-the-woods rebrand.
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
      </div>
    </>
  );
}
