import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'mobile-design-tricks-conversions';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function MobileDesignTricksStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A person happily shopping on their phone, while another person on a desktop looks frustrated](https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3174)

Your phone is probably within arm's reach right now. Go ahead, check. I'll wait.

See?

We live on our phones. We shop, we browse, we doomscroll at 2 AM. So why is it that when it comes to actually *buying* something, so many of us still squint at our tiny screens, pinch-to-zoom like we're trying to crack a safe, and eventually give up and say, "I'll just do it on my laptop later"?

And let's be honest, "later" often means "never".

If your website's mobile traffic is high but your mobile sales are... not so high, you're not alone. You're just leaving money on the table. A lot of it. The good news is, you don't need a complete website overhaul to fix it. Here are five mobile design tricks that can give your conversion rate a serious boost.

### 1. The "Thumb Test": Can You Navigate with One Hand?

Picture your ideal customer. They're probably holding their phone with one hand, scrolling with their thumb while also juggling a coffee, a dog leash, or a small child who has suddenly decided to become a master of parkour.

Can they easily tap your menu button? Can they reach the "Add to Cart" button without performing finger gymnastics?

This is the "Thumb Test". Your most important buttons and links should be in the "thumb-friendly zone" at the bottom and center of the screen. Move your navigation and primary calls-to-action to where your user's thumb naturally rests. It's a small change that makes a huge difference.

*   **Keyword integration:** This simple **mobile design** principle can dramatically improve your mobile **conversion rate**.

### 2. Stop Making Me Pinch-to-Zoom: Font Size Matters

If your users have to pinch-to-zoom to read the text on your mobile site, you've already lost. Your body text should be at least 16px. Yes, 16. It might look a little big on your desktop mockup, but on a mobile screen, it's the sweet spot for readability.

And for the love of all that is holy, make sure your buttons are big enough to be tapped by a human thumb, not a Borrower. A minimum tap target of 44x44 pixels is a good rule of thumb (pun absolutely intended).

*   **Keyword integration:** Better readability leads to a better user experience, which in turn boosts **mobile sales**.

### 3. The "Less is More" Approach to Forms

Nobody likes filling out forms. Especially on a phone. If your checkout process has more fields than a tax return, you're going to have a bad time.

Be ruthless. Cut every single unnecessary field. Do you *really* need their fax number? (You don't). Can you use autofill options for addresses and credit card information? (You can, and you should).

A streamlined, single-column form that's easy to tab through is a beautiful thing. Your customers will thank you by actually completing their purchase.

*   **Keyword integration:** A simplified checkout process is one of the fastest ways to increase your **mobile conversion rate**.

### 4. Show Me the Money (and Other Important Info)

Don't hide the price. Don't hide the shipping costs. Don't make me hunt for the return policy.

On a mobile device, users are even less patient than on a desktop. They want information, and they want it now. Make sure your key information is front and center. Use accordions or expandable sections for secondary information, but keep the essentials visible at all times.

This is especially true for your call-to-action. That "Buy Now" button should be sticky, following the user as they scroll. Don't make them scroll all the way back to the top to give you their money. That's just rude.

*   **Keyword integration:** With the majority of **mobile traffic**, making key info easy to find is crucial for converting visitors into customers.

### 5. Speed: The Unsung Hero of Mobile Conversions

This isn't so much a design trick as it is a fundamental law of the mobile web. If your site takes more than 3 seconds to load, you're losing visitors. It's that simple.

Compress your images. Minify your code. Use a fast hosting provider. Do whatever it takes to make your site lightning-fast. A one-second delay in mobile load times can impact mobile conversions by up to 20%.

So, what are you waiting for? Go forth and make your mobile site a place where people actually *want* to spend their money. Your bottom line will thank you. And who knows, you might even save a few people from the frustration of a 2 AM doomscroll-shopping fail.
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