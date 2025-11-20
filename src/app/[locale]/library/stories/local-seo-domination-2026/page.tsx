import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'local-seo-domination-2026';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function LocalSeoDomination2026Story({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A small, local shop with a giant "Number 1 on Google" trophy in the window, while a big, corporate chain store next door looks on in confusion.](https://images.unsplash.com/photo-1533537841959-705741f3d3a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1752)

Picture this: you're a small, local business. A David in a world of Goliaths. You've got a great product, you've got amazing customer service, but you're up against the big guys with their million-dollar marketing budgets. How in the world are you supposed to compete?

The answer, my friend, is **local SEO**.

Local SEO is the great equalizer. It's the slingshot that lets you take down the giants. It's the secret weapon that can put your business at the top of the Google search results, right when your customers are looking for you. And the best part? It's not nearly as complicated as you think.

### The Magic of the "Near Me" Search

Think about the last time you were hungry. Did you just search for "pizza"? Or did you search for "pizza near me"?

Exactly.

We're all lazy. We want what we want, and we want it now. And Google knows this. That's why, for local searches, they don't just show a list of websites. They show the **Map Pack**: a magical little box at the top of the page with three local businesses, their locations on a map, and their phone numbers just begging to be clicked.

Getting into that Map Pack is like winning the lottery. It's the digital equivalent of having your business on the busiest street corner in town. And you don't need a million-dollar budget to get there.

### The Three Secret Herbs and Spices of Local SEO

Google's local search algorithm is a secret recipe, but we know the three main ingredients:

1.  **Relevance:** How well does your business match what the person is searching for?
2.  **Proximity:** How close is your business to the person searching?
3.  **Prominence:** How well-known and respected is your business?

You can't do much about proximity (unless you have a food truck, in which case, you're living the dream). But you can absolutely dominate relevance and prominence.

### Your Google Business Profile: Your New Best Friend

If you do nothing else, do this: claim and optimize your Google Business Profile (you might know it as Google My Business). This is the single most important thing you can do for your local SEO.

Fill out *every single field*. I'm serious. Every. Single. One.

*   **Your business name:** Exactly as it appears on your sign. No funny business.
*   **Your address:** Your real, physical address. No P.O. boxes.
*   **Your phone number:** A local number is best.
*   **Your website:** Link to your actual website.
*   **Your hours:** Keep them updated, especially on holidays.
*   **Your category:** Be specific! If you're a "Neapolitan Pizza Restaurant," don't just put "Restaurant."
*   **Your description:** Tell people what you do. Be a human, not a robot.
*   **Your services:** List everything you offer.
*   **Your products:** If you sell things, list them.
*   **Photos:** Add at least 10 to start, and then a few new ones every month. Show off your space, your products, your team, your happy customers.
*   **Posts:** Share updates, offers, and news at least once a week.
*   **Q&A:** Ask and answer your own frequently asked questions.

Think of your Google Business Profile as your digital storefront. You wouldn't leave your physical storefront empty and neglected, would you?

### Reviews: The Currency of Local SEO

Reviews are everything. They're social proof, they're a direct line of communication with your customers, and they're a massive ranking factor.

*   **Ask for them.** Most people are happy to leave a review if you just ask. Make it easy for them with a direct link or a QR code.
*   **Respond to them.** All of them. Thank the good ones, and address the bad ones professionally. It shows you care.
*   **Aim for a steady stream.** A few new reviews every month is better than a hundred all at once.

### Citations: Your Digital Footprint

A citation is just a mention of your business's name, address, and phone number (NAP) on another website. Think Yelp, Facebook, Yellow Pages, and industry-specific directories.

The key here is **consistency**. Your NAP needs to be exactly the same everywhere. "Main Street" and "Main St." are not the same thing to Google.

### Your Website: The Final Piece of the Puzzle

Your website is where you seal the deal. It needs to be fast, mobile-friendly, and optimized for local search.

*   **Put your location in your page titles and headers.** "The Best Tacos in Austin" is a lot better than "The Best Tacos."
*   **Create location-specific pages** if you have multiple locations or service areas.
*   **Embed a Google Map** on your contact page.
*   **Use local schema markup.** This is a bit of code that tells Google all about your business. It's like giving them a cheat sheet.

Local SEO is not a dark art. It's a series of small, consistent actions that add up to a big result. It's about being the most relevant, most helpful, and most trusted option for the people in your community.

And when you do that, you don't just compete with the big guys. You beat them.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Local Growth</p>
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
