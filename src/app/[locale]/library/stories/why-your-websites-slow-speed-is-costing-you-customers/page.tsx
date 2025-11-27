
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
  const articleMarkdown = String.raw`![A snail is on the way.](https://images.unsplash.com/photo-1653303284496-68526c4442a9?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHNsb3d8ZW58MHx8MHx8fDI%3D)

Every second your website takes to load, you're losing money.

Not metaphorically. Actually.

Studies show that 53% of mobile users abandon a website if it takes longer than 3 seconds to load. That's not just frustration. That's abandoned sales, lost leads, and customers going to your competitor.

And your competitor probably has a fast website.

## The Math of Slow: How Speed Directly Impacts Revenue

Let's say you get 100 visitors per day to your website. Your average conversion rate is 3% (pretty normal). That's 3 customers per day.

Now imagine your website takes 5 seconds to load instead of 2 seconds. According to Google's own research, you just lost 40% of those visitors before the page even appeared. That's 40 people leaving before they even see your product or service.

40 people × 3 days = 120 abandoned visitors per week.

At a $899 website price point, losing 120 potential customers per week is leaving $107,000 on the table every year.

And that's just the obvious loss. Slow sites also:

**Rank lower on Google.** Google's algorithm explicitly penalizes slow websites. A 2-second improvement in page speed can improve your search ranking by one full position. One position = 10-20% more traffic.

**Lose mobile traffic.** 63% of web traffic is now mobile. Mobile users have slower connections. If your website takes 5 seconds on desktop, it might take 10 seconds on mobile. Mobile users bounce at 2x the rate.

**Damage your brand reputation.** When someone visits your site and waits 5 seconds for it to load, they don't think "the server is slow." They think "this company is unprofessional."

## Why Most Websites Are Slow

The culprits:

**1. Old hosting infrastructure.** Shared hosting from 2010. Cheap. Slow. Your website sits on a server with 500 other websites. When one spikes traffic, everyone suffers.

**2. Bloated page builders.** WordPress with 15 plugins. Wix with their massive drag-and-drop interface. Squarespace with their beautiful-but-heavy design system. They look pretty. They load like a dump truck.

**3. Unoptimized images.** That hero image that's 10MB? It's loading the full resolution on every device. A 500KB image could be 50KB if optimized.

**4. JavaScript overload.** Every tracking script, analytics tool, chat widget, and ad network adds JavaScript. Each one adds milliseconds. 10 scripts = 10x slower.

**5. No content delivery network (CDN).** Your server is in Virginia. Your customer is in Tokyo. Data travels across the world slowly. A CDN caches your content globally, so Tokyo loads from a Tokyo server.

## How Fast Websites Actually Work

Modern fast websites use:

**1. Serverless architecture.** No server sitting there 24/7. Code runs only when needed. Scales instantly. This is what [Vercel](https://vercel.com) does.

**2. Optimized frontend frameworks.** [Next.js](https://nextjs.org) compiles your site into static files. Static files load in milliseconds, not seconds.

**3. Headless CMS.** Instead of generating pages on-the-fly (slow), you generate them once and cache them (fast). Your content lives in [Storyblok](https://www.storyblok.com), but your website serves pre-built files.

**4. Image optimization.** Automatic resizing, compression, and format conversion. A 10MB image becomes 50KB. Automatically.

**5. Global CDN.** Your website loads from a server near your user. Everywhere in the world, instantly.

Result? **Page loads in under 1 second. Every time.**

## The Conversion Lift You'll See

Companies that improve website speed see:

- **Amazon:** Every 100ms of speed improvement = 1% revenue increase
- **Airbnb:** 50% faster website = 16% more bookings
- **Pinterest:** 40% faster website = 15% increase in signups
- **Vodafone:** 2 seconds faster = 8% increase in conversions

You don't need a massive audience to benefit. You need a fast website.

## What to Do Right Now

**If your current website is slow:**

1. **Test your speed.** Go to [PageSpeed Insights](https://pagespeed.web.dev). If it's under 75/100, you're losing customers.
2. **Calculate the cost.** 100 visitors × 3% conversion × (40% loss from speed) = 1.2 lost customers per day. What's that worth to you per year?
3. **Consider a rebuild.** A modern website built with Next.js + Vercel costs less than the revenue you're losing to speed. [We build fast websites in 72 hours for $899](https://www.vispaico.com/vispaico-growth-website). No bloat. No slow hosting. No compromise.

Need help closing the gap? Learn about our [performance optimization](https://www.vispaico.com/services) work to see how we treat speed as a conversion lever, not an afterthought.

## The Truth About Speed

Speed isn't a feature. It's table stakes.

Your customers expect websites to load in under 2 seconds. If yours doesn't, they're not even seeing your product. They're bouncing to a competitor who does.

The faster your website, the more customers you convert. It's not complicated. It's just business.

### Related Reading

- [How to Build Your Website Incrementally](https://www.vispaico.com/articles/build-incrementally)
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
