import type { Metadata } from 'next';
import Image from 'next/image';

import { storiesBasePath, storySummaries, storyLookup } from '@/data/stories';

const story = storyLookup['ai-adopters-hire-more'];

if (!story) {
  throw new Error('Story data missing for ai-adopters-hire-more');
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

export default function AiAdoptersHireMoreStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Trend Report</p>
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
            The economy may feel stormy, but Mercury&apos;s latest survey of 1,500 founders shows early-stage teams are more
            optimistic than the headlines suggest. Confidence is rising and the teams leaning into AI are widening the
            performance gap.
          </p>
          <p>
            These respondents span companies under six years old across software, services, retail, and commerce. Their
            answers paint a picture of founders who are adapting faster than the market turbulence can shake them.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759821820/Vispaico/Images/Articles/founders_office_fjdqa9.webp"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Vibe Check: Founders Are Surprisingly Chill</h2>
          <p>
            Eighty-seven percent of founders said they&apos;re more confident about their business than last year and only
            three percent lost confidence. Inflation hurt 36% of respondents, yet 38% said it opened new opportunities as
            buyers searched for better options.
          </p>
          <p>
            Heavy AI adopters are driving the optimism. Sixty percent of those teams reported a significant confidence
            boost compared to just 28% of companies not investing in AI.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Funding Strategies Are Getting Creative</h2>
          <p>
            Forget the old “raise VC or die” mindset. Seventy-three percent of surveyed companies raised under $5M in their
            last round and they&apos;re mixing capital sources freely. Service firms lean on bootstrapping, while tech teams
            combine angels and loans. Retail brands are embracing revenue-based financing in a big way.
          </p>
          <p>Teams that blended multiple funding sources were 40% more likely to cross the $5M mark. Diversify or stall.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">AI Companies Are Living in the Future</h2>
          <p>Companies investing heavily in AI aren&apos;t cutting back—they&apos;re scaling up.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>79% of heavy AI adopters are hiring more because of AI tools.</li>
            <li>They&apos;re three times more likely to be actively scaling their teams.</li>
            <li>68% report active growth versus 13% of companies not using AI.</li>
          </ul>
          <p>
            AI isn&apos;t replacing people—it&apos;s amplifying them. Sales, marketing, and customer teams are getting new headcount
            to keep up with demand.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Contractor Revolution Is Real</h2>
          <p>
            Sixty-one percent of companies described themselves as reliant on contractors. Sixty-four percent do it to add
            capacity quickly and 32% want global reach from day one. Heavy AI adopters are four times more likely to say
            they&apos;re very reliant on flexible teams.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Everyone&apos;s Spending More—But Smarter</h2>
          <p>
            Seventy-nine percent of founders increased spend this year, with AI and automation taking the biggest slice of
            the budget. Seventy-three percent raised those line items and 55% reallocated money away from legacy tools to
            fund them.
          </p>
          <p>
            The lingering pain point is the 2022 R&amp;D tax change—73% said it hurt the business, forcing some to trim R&amp;D
            and slow hiring. Relief is on the way now that the policy has been fixed.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Bottom Line: The Playbook Shift Is Real</h2>
          <p>High-performing founders share four traits:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Mixing funding sources instead of betting on one.</li>
            <li>Using AI to amplify teams, not replace them.</li>
            <li>Building global contractor networks from day one.</li>
            <li>Spending smarter and reallocating fast.</li>
          </ul>
          <p>
            Significant AI adopters posted a 93% positive outlook versus 71% for everyone else. That gap is mindset, not
            just tooling. The teams embracing the shift are steering the market rather than reacting to it.
          </p>
          <p>
            The startup economy isn&apos;t limping along—it&apos;s evolving. If you&apos;re building right now, you&apos;re part of the group
            rewriting the rules. Trade a little doom-scroll time for building—the future looks bright from here.
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
