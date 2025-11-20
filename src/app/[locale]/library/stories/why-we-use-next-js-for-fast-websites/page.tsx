
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'why-we-use-next-js-for-fast-websites';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function NextJsStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![The Next.js logo on a rocket ship, flying through the internet, leaving a trail of outdated technologies in its dust.](https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)

At Vispaico, we're obsessed with speed. We believe that a fast website is not a luxury; it's a necessity. It's the difference between a customer who stays and a customer who bounces. It's the difference between a business that thrives and a business that dies.

And when it comes to building ridiculously fast websites, there's one tool that stands head and shoulders above the rest: **Next.js**.

But what is Next.js? And why should you, a business owner who probably doesn't care about the intricacies of web development, give a hoot?

In short, Next.js is a **React web development** framework that allows us to build websites that are not only incredibly fast but also scalable, secure, and SEO-friendly. It's the secret sauce behind our 72-hour website builds, and it's the reason why our clients' websites consistently outperform their competitors. It's the superhero of the web development world, and we're its biggest fans.

### The "Need for Speed": Why Next.js is So Fast (And Why Your Business Should Care)

The magic of Next.js lies in a concept called **Static Site Generation (SSG)**.

Imagine you're ordering a pizza. With a traditional website (like one built on WordPress), it's like calling up the pizza place and having them make your pizza from scratch every single time you order. They have to knead the dough, chop the toppings, and bake it in the oven. It's a slow, inefficient process that leaves you hungry and annoyed.

With a Next.js website, it's like having a stack of hot, fresh, ready-to-go pizzas waiting for you the moment you walk in the door. The website is "pre-built" on the server, so when a user visits your site, they're not waiting for anything to be generated; they're just getting a fully-formed, ready-to-eat webpage.

The result? Blazing-fast load times, often under one second. And as we've discussed before, a faster website means happier customers, higher conversion rates, and better search engine rankings. It's a win-win-win.

### SEO-Friendly Out of the Box: How Next.js Makes Google Happy

One of the biggest knocks against traditional **React web development** was that it wasn't great for SEO. Because the content was loaded on the client-side (in the user's browser), it was difficult for search engines to crawl and index. It was like trying to read a book that was written in invisible ink.

Next.js solves this problem with a feature called **Server-Side Rendering (SSR)**. This means that the website is rendered on the server *before* it's sent to the user's browser. So, when Google's crawlers come knocking, they see a fully-formed, content-rich webpage, not a blank loading screen.

This, combined with the speed benefits of SSG, makes Next.js a powerhouse for SEO. It's like giving Google a VIP pass to your website.

### The Best of Both Worlds: Static Speed, Dynamic Power

But Next.js isn't just about static sites. It also gives you the flexibility to create dynamic, interactive experiences. You can have parts of your website that are pre-built for speed, and other parts that are rendered on the server in real-time.

It's the best of both worlds: the speed of a static site with the power of a dynamic one. It's like having a car that can go from 0 to 60 in 3 seconds, but also has a comfortable back seat for a long road trip.

### Why Should You, the Business Owner, Care? (The Bottom Line)

Okay, so Next.js is fast and SEO-friendly. But what does that actually mean for your business? Let's talk about what really matters: your bottom line.

*   **A better user experience.** Your customers will love how fast and responsive your website is. They'll stick around longer, they'll buy more stuff, and they'll tell their friends about you.
*   **Higher conversion rates.** A faster website means more people will stick around to become customers. It's a simple equation: speed = money.
*   **Better search engine rankings.** A faster, more SEO-friendly website means you'll show up higher in Google search results. This means more organic traffic, which means more customers.
*   **Lower bounce rates.** When your website loads instantly, people are less likely to get impatient and leave. A lower bounce rate is a signal to Google that your website is high-quality, which can further boost your rankings.
*   **A more secure website.** Because Next.js sites are pre-built, there are fewer moving parts and fewer opportunities for hackers to exploit. It's like living in a fortress instead of a tent.
*   **A more scalable website.** Whether you have 10 visitors or 10,000, your Next.js site will handle the traffic without breaking a sweat. You'll never have to worry about your website crashing on the day of your big launch.

### The Vispaico Advantage: Your Next.js Dream Team

At Vispaico, we've built our entire business around the power of Next.js. Our team of expert developers are masters of **Next.js web development**, and we've created a streamlined process that allows us to build custom, high-performance websites in just 72 hours.

We're not just a **Next.js website builder**; we're a team of strategic partners who are dedicated to helping you succeed. We'll work with you to understand your business goals and create a website that's not just beautiful, but also a powerful tool for growth. We'll help you to choose the right tech stack, the right hosting solution, and the right content strategy to achieve your goals.

Ready to see the power of Next.js in action? Check out our **[Case Studies](/case-studies)** to see some of the lightning-fast websites we've built for our clients. Or, if you're ready to experience the speed for yourself, learn more about our **[Growth Website page](/vispaico-growth-website)**. It's time to stop settling for a slow, clunky website and start building a website that's as fast and ambitious as your business.
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
