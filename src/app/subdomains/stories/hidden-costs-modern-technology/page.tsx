// src/app/subdomains/stories/hidden-costs-modern-technology/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['hidden-costs-modern-technology'];

if (!story) {
  throw new Error('Story data missing for hidden-costs-modern-technology');
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

export default function HiddenCostsModernTechnologyStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Reality Check</p>
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
            The cloud feels magical—limitless storage, frictionless collaboration, instant access from every screen. But
            every gigabyte is anchored to a data center that burns real electricity, consumes real water, and generates
            real heat.
          </p>
          <p>
            When we pretend digital equals weightless, we ignore the environmental and social bill arriving alongside our
            subscriptions. This is what that bill actually includes.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1760015245/Vispaico/Images/Articles/e-waste_dmbiij.webp"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Cloud Is a Power Plant in Disguise</h2>
          <p>
            Analysts estimate digital activity already accounts for 3–4% of global emissions and could double by 2025. A
            one-hour binge-watch, 10,000-photo archive, or AI job that churns overnight—all of it sits on racks of servers
            that never sleep.
          </p>
          <p>
            Hyperscale facilities demand constant cooling, backup power, and freshwater. They&apos;re also clustered in regions
            with cheaper energy, which often means fossil fuels. Clean UX on the surface, dirty infrastructure underneath.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Waste Piles Up Long Before You Upgrade</h2>
          <p>
            E-waste is the fastest-growing waste stream in the world. Laptops, routers, and phones contain rare earth
            metals and hazardous materials that often end up in landfills or unregulated recycling markets.
          </p>
          <p>
            Cryptocurrency raises the stakes further. Bitcoin mining uses more electricity than some countries, while
            proof-of-work NFTs and memecoins continue to spike energy demand without delivering equivalent societal value.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Privacy Tab Nobody Reads</h2>
          <p>
            Free services monetize you twice—first by selling targeted access to your behavior, then by storing the data in
            perpetuity. Every additional replica, analytics job, and third-party integration multiplies the footprint.
          </p>
          <p>
            Transparency is rare. Users rarely know where their information lives, how long it sticks around, or what
            safeguards exist if a provider cuts corners on energy sourcing or security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What Responsible Tech Use Looks Like</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Audit your storage.</span> Delete duplicates. Archive locally.
              Choose providers with renewable energy commitments.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Stretch device lifespans.</span> Repair before you replace and
              support right-to-repair legislation.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Triage AI workloads.</span> Run heavy jobs during off-peak
              hours or on greener clouds. Question whether you really need another always-on automation.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Insist on transparency.</span> Ask vendors for emissions data,
              water usage metrics, and data retention policies.
            </li>
          </ul>
          <p>
            Technology isn&apos;t the villain. Complacency is. Treat the cloud like a physical resource, and you can still
            enjoy the convenience without pretending the costs don&apos;t exist.
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
