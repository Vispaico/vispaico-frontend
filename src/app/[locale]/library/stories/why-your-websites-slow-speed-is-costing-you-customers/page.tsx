
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'why-your-websites-slow-speed-is-costing-you-customers';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function SlowWebsiteStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A nail on a stone.](https://images.unsplash.com/photo-1653303284496-68526c4442a9?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNsb3d8ZW58MHx8MHx8fDI%3D)

Let's play a little game. Open a new tab and go to a website you've never visited before. Any website. I'll wait.

...

How long did it take to load? One second? Two? Three?

Now, be honest. If it took more than three seconds, did you feel a tiny flicker of annoyance? A primal urge to just close the tab and move on with your life? Maybe you even let out an audible sigh. It's okay, you can admit it. We're all friends here.

Of course you did. You're a human being living in the 21st century. We have the attention span of a goldfish on a caffeine drip. We expect things to be instant, and when they're not, we get twitchy. We've been spoiled by a world of instant gratification, where we can summon a car, a pizza, or a life partner with a few taps on a screen.

And yet, so many businesses treat their website's speed as an afterthought. A "nice-to-have" rather than a "must-have". They spend thousands on beautiful design and clever marketing, and then plop it all on a server that's slower than a herd of turtles stampeding through peanut butter. In winter. Uphill.

This is, to put it mildly, a catastrophic mistake. A **slow website isn't just an annoyance; it's a silent killer of your business**. It's costing you customers, it's costing you conversions, and it's costing you a whole lot of money. It's the digital equivalent of having a beautiful storefront with a door that takes three minutes to open. People are just going to walk away.

### The Brutal, Unforgiving Math of Website Speed

Don't just take my word for it. The big brains at Google, Deloitte, and a dozen other companies have studied the **website speed impact** on user behavior, and the numbers are terrifying. They're the kind of numbers that should be whispered in a dark room, accompanied by a dramatic thunderclap.

*   **A 1-second delay in mobile load times can impact conversion rates by up to 20%.** (Google)
*   **53% of mobile users will abandon a site that takes longer than 3 seconds to load.** (Google)
*   **The first five seconds of page-load time have the highest impact on conversion rates.** (Portent)
*   **A 0.1-second improvement in mobile site speed can increase conversion rates by 8.4% for retail sites and 10.1% for travel sites.** (Deloitte)

Let that sink in for a moment. A *tenth of a second*. That's literally the blink of an eye. And it can mean a 10% increase in your revenue. If your website is making $100,000 a year, that's an extra $10,000 in your pocket. For a tenth of a second. It's the best deal since a two-for-one pizza night.

If your website is making your customers wait, you're not just testing their patience; you're actively encouraging them to go to your competitors. Every extra second of load time is another customer you've lost, another sale you've missed, another opportunity that's vanished into the digital ether. And your competitors? They're probably laughing all the way to the bank.

### Why Is Your Website So Slow, Anyway?

So, what's causing this digital molasses? It's usually a combination of factors, a motley crew of performance-sucking villains.

1.  **Bloated, cheap hosting:** You get what you pay for. That $5/month shared hosting plan might seem like a bargain, but you're sharing resources with hundreds, sometimes thousands, of other websites. It's like living in a crowded apartment building with one bathroom. When one of your neighbors decides to take a two-hour shower, everyone else has to wait. And if one of those websites gets a sudden surge of traffic, it can slow everyone down.
2.  **Unoptimized images:** Those beautiful, high-resolution images you love? They're probably massive. And every megabyte has to be downloaded by your user's device. It's like trying to send a grand piano through the mail. It's going to take a while.
3.  **Too many plugins and scripts:** If your website is built on a platform like WordPress, you're probably drowning in plugins. Each one of those adds extra code that has to be loaded, slowing things down. It's like trying to run a marathon with a backpack full of bricks.
4.  **Inefficient code:** A poorly coded website is like a car with a leaky engine. It might look fine on the outside, but it's wasting energy and not performing at its peak. It's the digital equivalent of a Rube Goldberg machine, a ridiculously complicated way to do a simple task.
5.  **Too many third-party scripts:** That live chat widget? That social media sharing button? That analytics tool? They're all running code on your website, and they're all slowing it down.

The good news is, all of these things are fixable. The bad news is, it's often more complicated than just flipping a switch. It's a game of inches, where every little optimization adds up to a big improvement in speed.

### The Double Whammy: Slow Sites Get Penalized by Google

As if losing customers wasn't bad enough, a slow website will also get you in trouble with the big G. And you do *not* want to be in trouble with the big G.

Google's algorithm is designed to give users the best possible experience. And a slow, frustrating website is not a good experience. That's why, in 2021, Google rolled out its "Core Web Vitals" update, which made page speed a direct ranking factor.

This means that if your site is slow, Google will literally show it to fewer people. You'll rank lower in search results, you'll get less organic traffic, and your competitors with faster sites will eat your lunch. And your dinner. And your dessert.

So, not only are you converting fewer of the visitors you *do* get, but you're also getting fewer visitors in the first place. It's a vicious cycle of slowness and sadness.

### How to Fight Back: The Path to a Faster Website

So, what can you do? How do you escape the slow-loading abyss and reclaim your lost customers?

1.  **Test your speed.** You can't fix what you don't measure. Use a tool like Google PageSpeed Insights to get a baseline. It will give you a score from 0-100 and a list of specific things you can do to improve. It's like getting a report card for your website, but instead of a letter grade, you get a number that tells you how much money you're losing.
2.  **Optimize your images.** This is the low-hanging fruit of website performance. Compress your images, resize them to the correct dimensions, and use modern formats like WebP. There are plenty of free tools online that can do this for you.
3.  **Upgrade your hosting.** If you're on a cheap shared plan, it's time to move to a more robust solution like a VPS or a managed hosting provider. It's like moving out of that crowded apartment building and into your own house.
4.  **Minimize your code.** Get rid of unnecessary plugins, scripts, and third-party integrations. Do a digital spring cleaning. If you haven't used a plugin in six months, you probably don't need it.
5.  **Consider a rebuild.** If your site is built on old, clunky technology, sometimes the best thing you can do is start fresh with a modern, performance-focused framework like Next.js. It's like trading in your old, gas-guzzling clunker for a brand new Tesla.

This might sound like a lot of work, and to be honest, it can be. That's where a good **conversion rate optimization** strategy comes in. It's not just about changing button colors; it's about looking at your entire user experience, from the moment they land on your site to the moment they become a customer. And speed is a huge part of that. A good CRO expert will be able to help you identify the biggest performance bottlenecks on your site and create a plan to fix them.

### The Bottom Line: Speed Isn't a Feature, It's a Requirement

In today's digital landscape, a slow website is a liability. It's a sign that you don't respect your customers' time. It's a barrier that's preventing you from reaching your full potential. It's the digital equivalent of showing up to a job interview in your pajamas.

The good news is, you don't have to be stuck in the slow lane forever. With the right tools, the right strategy, and the right team, you can have a website that's not just beautiful and functional, but also lightning-fast. A website that your customers will love, that Google will reward, and that will help you grow your business.

Ready to stop losing customers and start converting them? **Get a fast website in 72 hours.** We're not kidding. Check out our [Growth Website page](/vispaico-growth-website) to see how we do it. Or, if you're ready to dive deep into a **[Conversion Optimization service](/services)**, we can help with that too. Don't let a slow website be the reason your business fails. Take action today. Your future self will thank you.
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
