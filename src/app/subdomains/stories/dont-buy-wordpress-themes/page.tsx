// src/app/subdomains/stories/dont-buy-wordpress-themes/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['dont-buy-wordpress-themes'];

if (!story) {
  throw new Error('Story data missing for dont-buy-wordpress-themes');
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

export default function DontBuyWordpressThemesStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Build It Better</p>
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
            You just paid for a premium WordPress theme that loads 47 plugins, ships with features you&apos;ll never use, and
            slows your site to dial-up speeds. Premium themes look slick in demos, but once installed they reveal how much
            bloat you&apos;re buying.
          </p>
          <p>
            The good news: you don&apos;t need them anymore. AI can help you build a custom theme in an afternoon—designed for
            your content, your performance goals, and zero fluff.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759913455/Vispaico/Images/Articles/WordPress_Vispaico_Article_kecvx7.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The WordPress Theme Trap</h2>
          <p>Here&apos;s what happens right after you install that shiny template:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>It loads a dozen JavaScript libraries you never asked for.</li>
            <li>You inherit sliders, pop-ups, animations, and settings you&apos;ll spend hours disabling.</li>
            <li>Your PageSpeed score craters.</li>
            <li>Every meaningful customization requires yet another paid add-on or developer hours.</li>
          </ul>
          <p>
            The result? A site that barely resembles the demo and takes days to whip into shape—if it ever gets there.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Why Custom Themes Are Actually Easier Now</h2>
          <p>
            In 2020 you needed a developer or deep knowledge of PHP, CSS, and the WordPress template hierarchy. In 2025
            you need a clear prompt.
          </p>
          <p>
            AI coding assistants know WordPress inside and out. They generate clean, modern theme code with exactly the
            structure you ask for—no bloat, no mystery features, just your design.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">How to Actually Do This</h2>
          <p>
            You don&apos;t need to be a developer. You need to be specific. Start with a prompt like:
          </p>
          <p className="rounded-2xl bg-slate-100 p-4 text-base text-slate-800">
            &quot;I need a WordPress theme for a coffee shop website. It should have a homepage with a hero, about section,
            menu page, location with a map, and contact form. Mobile-first design, fast loading, minimal JavaScript.&quot;
          </p>
          <p>
            AI tools return style sheets, templates, and functions that reflect your requirements. Need tweaks? Tell the AI
            what to change and regenerate.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">What About Plugins?</h2>
          <p>
            Most premium plugins are bloated too. You don&apos;t need Contact Form 7 for a simple form—you need 30 lines of
            code. You don&apos;t need a massive SEO plugin—you need solid markup and metadata. AI can generate targeted
            snippets that do one job well.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">But What About Updates and Security?</h2>
          <p>
            Custom code built for one site has fewer points of failure. AI-generated themes follow WordPress best practices
            out of the gate—sanitizing inputs, escaping output, and leaning on platform APIs. Keep WordPress core updated
            and your custom build stays stable.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">When Buying Still Makes Sense</h2>
          <p>Purchase a theme or plugin only when you need:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Complex systems like memberships or full learning platforms.</li>
            <li>WooCommerce integrations where a dedicated plugin accelerates setup.</li>
            <li>Specialty connections to third-party services.</li>
          </ul>
          <p>
            For basic sites, portfolios, and small businesses, buying someone else&apos;s bundle wastes money and sacrifices
            performance.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">The Real Advantage</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Faster load times with no extra scripts.</li>
            <li>Better SEO and user experience because the layout fits the content.</li>
            <li>Easier maintenance with no surprise conflicts or forced updates.</li>
            <li>Zero recurring costs—no annual renewals or premium add-ons.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Start Simple</h2>
          <p>
            Don&apos;t rebuild everything overnight. Generate one template. See how it feels. Add another page. Layer in a
            custom feature. Within weeks you&apos;ll have a faster, cleaner, truly custom site—and you&apos;ll never miss those
            bloated theme bundles.
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
