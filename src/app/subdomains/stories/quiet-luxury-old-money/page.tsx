// src/app/subdomains/stories/quiet-luxury-old-money/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['quiet-luxury-old-money'];

if (!story) {
  throw new Error('Story data missing for quiet-luxury-old-money');
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

export default function QuietLuxuryOldMoneyStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Style Signals</p>
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
            The timeline pivoted fast. Loud logos, maximalist prints, and hyped drops gave way to cream cashmere, navy
            blazers, loafers without socks, and heirloom watches you have to squint to identify.
          </p>
          <p>
            Quiet luxury—and its sibling, the “old money” aesthetic—isn&apos;t just a TikTok fad. It&apos;s a cultural reaction to
            chaos, nostalgia, and the need to signal stability without shouting.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1760015880/Vispaico/Images/Articles/old_money_bdxcnh.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What “Old Money” Style Actually Means</h2>
          <p>
            Think Kennedys in Hyannis Port, Slim Aarons photography, or a Wes Anderson color palette. The pillars are
            timeless silhouettes, natural fibers, quality over quantity, and a refusal to treat clothing like billboard
            space.
          </p>
          <p>
            The attitude says, “This has been in the family closet for decades,” even if you bought it last week.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Why Quiet Luxury Hit Critical Mass in 2025</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Economic anxiety:</span> When headlines scream instability,
              understated style telegraphs permanence.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Nostalgia:</span> We romanticize pre-digital eras where
              craftsmanship mattered more than virality.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Status signaling:</span> True wealth doesn&apos;t need logos.
              Taste is the new flex.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Creator influence:</span> “Stealth wealth” explainers racked up
              millions of views, rewriting the mood board overnight.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">How Brands Are Responding</h2>
          <p>
            Luxury houses are shrinking logos, reviving heritage archives, and investing in cleaner tailoring. Mid-market
            labels are releasing “old money” capsules with better materials and simpler lines. Even fast fashion is
            chasing the aesthetic—though usually at the cost of quality.
          </p>
          <p>
            The winners lead with craftsmanship stories, not hype drops.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Build Your Own Quiet-Luxury Capsule</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Neutral cashmere or merino knit.</li>
            <li>Tailored navy or camel blazer.</li>
            <li>Dark denim or pleated trousers with precise tailoring.</li>
            <li>Loafers or leather sneakers in minimal silhouettes.</li>
            <li>A single signature accessory—vintage watch, signet ring, silk scarf.</li>
          </ul>
          <p>
            Fit and care matter more than price. Steam your clothes. Polish your shoes. Mend the small snags. Intentional
            maintenance is part of the signal.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Critiques Are Fair</h2>
          <p>
            Quiet luxury can feel exclusionary. It flirts with cosplaying generational wealth while ignoring the systems
            that produced it. And yes, spending $400 on an “unbranded” tee is still conspicuous consumption.
          </p>
          <p>
            But the core principles—buy less, buy better, wear things longer—are worth keeping, even if you build your
            wardrobe from vintage shops and tailor receipts instead of elite boutiques.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What to Do Next</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>Edit your closet. Keep only what fits, flatters, and lasts.</li>
            <li>Invest in one elevated staple per season instead of impulse hauls.</li>
            <li>Document outfits so you can see patterns in what actually works.</li>
            <li>Care for everything you own—lint roll, de-pill, repair.</li>
          </ol>
          <p>
            Quiet luxury isn&apos;t about pretending you have a trust fund. It&apos;s about presenting yourself with calm, confident
            intent—and letting quality do the talking.
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
