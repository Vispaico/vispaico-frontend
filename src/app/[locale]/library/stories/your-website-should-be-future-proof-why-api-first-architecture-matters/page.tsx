
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'your-website-should-be-future-proof-why-api-first-architecture-matters';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function ApiFirstStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Star Wars x Beatles x Abbey Rd.](https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGVnb3xlbnwwfHwwfHx8Mg%3D%3D)

Let's be honest: the internet is a fickle beast. Today's hot new thing is tomorrow's digital dust bunny. Remember MySpace? Vine? Google+? (Okay, maybe you don't remember Google+, and that's probably for the best.)

The point is, the digital landscape is constantly changing. And if your website is built on a rigid, outdated architecture, you're going to get left behind. You're building a sandcastle in a hurricane.

That's where **API-first architecture** comes in. It's a fancy term for a simple but powerful idea: your website should be built to be flexible, adaptable, and ready for whatever the future throws at it. It's about building a website that's less like a sandcastle and more like a LEGO masterpiece that you can reconfigure and expand at will.

### What is API-First Architecture, Anyway? (And Why It's Not as Scary as It Sounds)

In a traditional website, your content and your design are all tangled up together. It's like a plate of spaghetti. If you want to change one thing, you have to untangle the whole mess. Want to change the color of a button? You might have to dig through a dozen different files. Want to add a new section to your homepage? You might have to hire a developer for a week.

With an **API-first website**, your content lives in a central, independent "brain." This brain doesn't care what your website looks like. It just serves up your content through an API (Application Programming Interface). An API is just a way for different computer programs to talk to each other. It's like a universal translator for your content.

This means you can have a website, a mobile app, a smart watch app, and a holographic toaster app (hey, it could happen) all pulling from the same central source of truth. You're not just building a website; you're building a content engine that can power any digital experience you can dream of.

### Why Your Business Needs a Future-Proof Website (A.K.A. "Why You Should Care About This Nerd Stuff")

*   **Flexibility:** Want to launch a mobile app? No problem. Want to integrate with a new social media platform? Easy. Want to display your products on a smart mirror in a futuristic retail store? You can do that too. An API-first approach means you're not locked into a single platform or technology. You're free to innovate and experiment.
*   **Scalability:** A **scalable web development** strategy is essential for growth. With an API-first architecture, your website can handle a sudden influx of traffic without breaking a sweat. So, when your product goes viral on TikTok, your website won't crash and burn.
*   **Speed:** Because your front-end (the part of your website that users see) and your back-end (the part of your website that manages your content) are separate, you can optimize each one for speed. This means a faster, more responsive website for your users, which, as we've already established, is a very, very good thing.
*   **Security:** An API-first architecture is inherently more secure than a traditional monolithic website. Your content is safely tucked away in its own separate brain, away from the prying eyes of hackers. It's like keeping your money in a Swiss bank account instead of under your mattress.
*   **Easier Redesigns:** With an API-first approach, you can redesign your website without having to touch your content. You can just build a new "head" for your headless CMS. This makes redesigns faster, cheaper, and less of a headache.

### The Vispaico Approach: Building for the Future, Today

At Vispaico, we don't just build websites for today; we build them for tomorrow. Every website we create is built with an **API-first architecture**, using a modern tech stack that's designed for flexibility and growth.

We use a headless CMS (like Storyblok) to manage your content, and a fast, modern front-end framework (like Next.js) to display it. This means you get the best of both worlds: a powerful, easy-to-use content management system, and a lightning-fast, infinitely scalable website.

We're not just building you a website; we're building you a foundation for future growth.

### Don't Get Left Behind (The Digital Dustbin of History is Full of Inflexible Websites)

In today's fast-paced digital world, you can't afford to have a website that's stuck in the past. You need a website that's ready for the future. You need a website that's as agile and adaptable as your business.

Ready to build a future-proof website? Learn more about our **[Growth Website page](/vispaico-growth-website)** and our **[Services page](/services)** to see how we can help you build a website that's ready for anything. It's time to stop building sandcastles and start building rocket ships.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">And Access for All</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
        </div>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Stories from the passing Scene
            </h2>
            <p className="text-slate-600">Further notes of thoughts that passed our mind.</p>
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
