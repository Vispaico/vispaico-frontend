import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'react-vs-wordpress';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

const articleMarkdown = String.raw`![A sleek, futuristic React rocket blasting past a tired, old WordPress horse and buggy](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)



Let's be real for a second. WordPress is like that comfy old pair of jeans you've had since college. It’s familiar, it gets the job done, and you know exactly which holes to avoid. But let's be even more real: you're not wearing those jeans to a job interview. Or a first date. Or anywhere you need to make a good impression, for that matter.



WordPress was born in 2003. Think about that. The first iPhone was still four years away. "Social media" meant updating your MySpace Top 8. WordPress was built for a different internet.



And while it's done a surprisingly good job of keeping up, it’s starting to feel less like a reliable old friend and more like a clunky, outdated piece of machinery that could break down at any moment.



### The Great Plugin Pile-Up



The biggest strength of WordPress is also its greatest weakness: plugins.



Need a contact form? There's a plugin for that. Want to add an image gallery? Plugin. SEO? Plugin. Security? Plugin. A plugin to manage your other plugins? You betcha.



Before you know it, your "simple" website is running on a teetering tower of 30 different pieces of software, all written by different people with different standards. It's a house of cards, and one bad update can bring the whole thing crashing down.



With React, there are no plugins. Features are built directly into the site. It's like having a house built by a master carpenter instead of a guy who just got back from Home Depot with a nail gun and a six-pack of beer.



### Speed: The Silent Killer of Conversions



Here's a fun fact that will keep you up at night: Google says that 53% of mobile users will leave a page if it takes longer than three seconds to load.



Three. Seconds.



Go ahead, time your WordPress site. I'll wait.



...



Back so soon? Yeah, that's what I thought.



WordPress is inherently slow. It has to talk to a database, load a bunch of plugins, and piece together your page every single time someone visits. React, on the other hand, comes pre-assembled. It's a "Single Page Application" (SPA), which is a fancy way of saying it loads once and then everything is just... there. It's the difference between waiting for a pizza to be delivered and having a slice magically appear in your hand the second you want it.



*   **Keyword integration:** In the **React vs WordPress** debate, speed is a major factor. A faster site means a better user experience and a higher **conversion rate**.



### The Security Nightmare You're Ignoring



Because WordPress is so popular, it's a massive target for hackers. And because of the plugin system, there are thousands of potential doors for them to walk right through.



Keeping a WordPress site secure is a full-time job. You have to update everything constantly, run security scans, and pray that the guy who wrote your "Cute Kitty Photos" plugin didn't accidentally leave a back door open to the entire Russian mob.



A React site, on the other hand, is a fortress. It's mostly static files, which means there's not much for a hacker to actually *do*. It's like trying to break into a house with no doors or windows.



### But What About SEO?



This is the big one, right? "I can't switch, I'll lose my Google ranking!"



This is a valid concern. A badly-managed site migration can absolutely tank your SEO. But a well-managed one? It can actually *improve* it.



Why? Because Google loves fast websites. Google loves websites that work well on mobile. Google loves websites that people actually stick around on. A good React site does all of those things better than a clunky old WordPress site.



As long as you make sure all your old URLs redirect to your new ones, Google will be happier than a pig in mud.



*   **Keyword integration:** A **WordPress to React migration** can be a huge win for your **SEO** if done correctly.



### So, Should You Ditch WordPress?



Look, I'm not saying WordPress is evil. It has its place. If you have a personal blog or a simple brochure site that you barely touch, WordPress is fine. It's cheap, it's easy, and it works (most of the time).



But if you're running a business, if you care about speed, security, and providing a modern user experience, it's time to at least *consider* breaking up with your old, comfy jeans.



React is the future. It's faster, safer, and more scalable. It's what all the cool kids (and the big companies like Netflix, Facebook, and Airbnb) are using.



The migration process might seem daunting, but it's a lot more straightforward than you think. And the long-term benefits—in terms of speed, security, and peace of mind—are more than worth it.



So, are you ready to trade in your horse and buggy for a rocket ship?

`;

export default async function ReactVsWordpressMigrationStory({ params }: { params: Promise<{ locale: string }> }) {
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
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Platform Shift</p>
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
        </section>
      </div>
    </>
  );
}
