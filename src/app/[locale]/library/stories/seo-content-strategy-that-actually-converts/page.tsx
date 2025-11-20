import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'seo-content-strategy-that-actually-converts';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function SeoContentStrategyStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A pair of glasses lying on a open book.](https://images.unsplash.com/photo-1622555063306-9930f396f051?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fGtleXdvcmR8ZW58MHx8MHx8fDI%3D)

Let's be honest: most business blogs are ghost towns.

They're filled with well-meaning but ultimately pointless articles that no one ever reads. "5 Tips for a More Productive Monday." "Our Company's 10 Favorite Motivational Quotes." "A Q&A with Our Intern, Chad." It's a digital graveyard of good intentions and bad ideas.

This is not a **content marketing** strategy. This is a digital diary. And unless you're Taylor Swift, no one cares about your diary.

A real **SEO content strategy** is not about throwing spaghetti at the wall and hoping something sticks. It's a deliberate, data-driven plan for creating content that attracts your ideal customers, builds trust, and, most importantly, *converts*. It's about turning your blog from a ghost town into a bustling metropolis of engaged readers and eager customers.

So, how do you do it? Here's a simple, 3-month plan that actually works.

### Month 1: The Foundation (The "Sherlock Holmes" Phase)

The first month is all about **keyword research** and planning. You need to figure out what your customers are searching for, and how you can create content that answers their questions. It's like being a detective, but instead of solving crimes, you're solving the mystery of what your customers actually want.

*   **Step 1: Brainstorm your "seed" keywords.** These are the broad, one- or two-word terms that describe what you do. If you're a plumber, your seed keywords might be "plumbing," "plumber," "leak repair," etc. Don't overthink it at this stage. Just write down everything that comes to mind.
*   **Step 2: Use a keyword research tool.** Tools like Ahrefs, SEMrush, or even Google's own Keyword Planner can help you expand your seed keywords into a list of hundreds or even thousands of potential topics. It's like turning a handful of seeds into a whole field of possibilities.
*   **Step 3: Focus on long-tail keywords.** These are longer, more specific phrases that indicate a higher level of intent. For example, instead of targeting the keyword "plumber," you might target "emergency plumber for burst pipe in Brooklyn." The search volume will be lower, but the person searching for that phrase is a lot more likely to become a customer. They're not just browsing; they're in trouble, and they need your help.
*   **Step 4: Map your keywords to the buyer's journey.** Your customers go through a series of stages before they're ready to buy. Your content should reflect this.
    *   **Awareness:** The customer has a problem, but they don't know what the solution is. (e.g., "why is my faucet dripping?") Your content at this stage should be educational and informative.
    *   **Consideration:** The customer is researching different solutions. (e.g., "how to fix a dripping faucet vs. hiring a plumber") Your content at this stage should be comparative and helpful.
    *   **Decision:** The customer is ready to buy. (e.g., "best plumber in Brooklyn") Your content at this stage should be persuasive and action-oriented.
*   **Step 5: Create a content calendar.** Plan out the articles you're going to write for the next three months. Assign a target keyword, a buyer's journey stage, and a publishing date to each article. This is your roadmap to content success.

### Month 2: The Content Creation Engine (The "Sweat and Tears" Phase)

Now that you have a plan, it's time to start writing. This is where the hard work really begins.

*   **Focus on quality over quantity.** One high-quality, in-depth article is worth more than ten mediocre ones. Aim for a word count of at least 1,500 words for your most important keywords. Google's algorithm is smart enough to know the difference between a well-researched, comprehensive article and a flimsy piece of content that was written in five minutes.
*   **Write for humans, not for robots.** Your primary audience is your customer, not Google. Write in a natural, conversational tone. Use humor. Tell stories. Be a human being. No one wants to read a dry, boring article that's stuffed with keywords.
*   **Optimize for SEO.** Yes, you're writing for humans, but you still need to play Google's game. This means including your target keyword in your title, your headers, and throughout your article. It also means using internal and external links, optimizing your images, and writing a compelling meta description. It's a delicate balance, but it's essential for success.
*   **Promote your content.** Don't just hit "publish" and hope for the best. Share your articles on social media, in your email newsletter, and on any other channels where your customers hang out. You've created a masterpiece; now it's time to show it to the world.

### Month 3: The Analysis and Iteration (The "What the Heck Happened?" Phase)

The third month is all about looking at the data and figuring out what's working and what's not. It's time to put on your data scientist hat and see what the numbers are telling you.

*   **Track your rankings.** Use a tool like Ahrefs or SEMrush to see how your articles are ranking for your target keywords. Are you moving up or down?
*   **Analyze your traffic.** Use Google Analytics to see which articles are getting the most traffic, and where that traffic is coming from. Are people finding you through organic search? Social media? Referral links?
*   **Measure your conversions.** Are people filling out your contact form? Are they buying your products? Are they signing up for your newsletter? This is the most important metric of all. Traffic is great, but conversions are what pay the bills.
*   **Double down on what's working.** If you have an article that's getting a ton of traffic and conversions, write more articles like it. It's a sign that you've struck a chord with your audience.
*   **Prune what's not.** If you have an article that's not getting any traction, either update it or get rid of it. There's no shame in admitting that something didn't work.

An effective **SEO content strategy** is a long-term game. It takes time, effort, and a commitment to creating high-quality content. But if you're willing to put in the work, it's one of the most powerful tools you have for growing your business.

Ready to stop writing a digital diary and start building a real content marketing machine? Check out our **[Articles page](/articles)** for more tips and tricks, or learn more about our **[Growth Content service](/services)**.
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