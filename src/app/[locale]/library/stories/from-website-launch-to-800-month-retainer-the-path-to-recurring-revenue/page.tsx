
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'from-website-launch-to-800-month-retainer-the-path-to-recurring-revenue';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function RecurringRevenueStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Capturing the vibrant green of Rose-ringed Parakeets.](https://images.unsplash.com/photo-1701786778853-5ed1e11bfcd0?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D)

So, you've launched your new website. It's beautiful, it's fast, and it's already starting to attract new customers. Congratulations! You've taken the first, most important step in your online journey. You've planted the seed.

But now what?

A website is not a "set it and forget it" kind of thing. It's a living, breathing part of your business. And just like any other part of your business, it needs ongoing attention and investment to continue to grow and deliver results. You can't just plant a seed and expect it to grow into a mighty oak tree without any water or sunlight.

This is where a **business retainer** comes in. A retainer is a monthly agreement with a web development partner (like us!) to provide ongoing services to help you grow your business. It's the path from a one-time website launch to a predictable, **recurring revenue** stream. It's the water and sunlight that will help your website grow into a powerful engine for your business.

### Beyond the Launch: The Three Pillars of Website Growth

A successful website is built on three pillars:

1.  **Traffic:** Getting people to your website.
2.  **Conversion:** Turning those visitors into customers.
3.  **Performance:** Keeping your website fast, secure, and up-to-date.

A one-time website launch only addresses the first pillar. And even then, it's just the beginning. A retainer addresses all three, on an ongoing basis.

### Pillar 1: Driving Traffic with a Growth Content Strategy (The "More Eyeballs" Pillar)

A beautiful website is useless if no one can find it. It's like opening a store in the middle of the desert. That's where a **growth content strategy** comes in. This is a long-term plan for creating high-quality, SEO-optimized content that attracts your ideal customers and positions you as an expert in your industry.

Our **[Growth Content service](/services)** includes:

*   **Keyword research and content strategy:** We'll identify the keywords that your customers are searching for and create a content plan to target them. We'll find the "long-tail" keywords that your competitors are ignoring, the questions that your customers are asking, and the topics that will position you as a thought leader in your industry.
*   **SEO-optimized articles:** We'll write long-form, high-value articles that are designed to rank on Google and attract organic traffic. We're not talking about 500-word blog posts that are stuffed with keywords. We're talking about 2,000-word deep dives that are packed with valuable information, insights, and a healthy dose of personality.
*   **CMS publishing:** We'll publish the articles directly to your website's CMS, so you don't have to lift a finger. We'll also make sure that each article is properly formatted, with a clear heading structure, optimized images, and internal links to other relevant pages on your site.

### Pillar 2: Turning Visitors into Customers with Conversion Optimization (The "More Money" Pillar)

Getting traffic to your website is only half the battle. Now you need to turn those visitors into customers. This is where **conversion optimization** comes in. It's the science and art of turning your website into a well-oiled conversion machine.

Our **[Conversion Optimization service](/services)** includes:

*   **Funnel analysis:** We'll analyze your website's user flow to identify any "leaks" or drop-off points. We'll use tools like Google Analytics and Hotjar to see where your visitors are getting stuck, and we'll create a plan to fix it.
*   **A/B testing:** We'll test different versions of your key pages to see what resonates with your audience and drives the most conversions. We'll test headlines, button colors, calls to action, and anything else that might have an impact on your conversion rate. It's like a science experiment, but with your website.
*   **Data-driven redesigns:** We'll use the data we gather to make informed decisions about how to improve your website's design and user experience. We're not just guessing what might work; we're using real-world data to make your website better.

### Pillar 3: Protecting Your Investment with Website Maintenance (The "Don't Break My Stuff" Pillar)

Your website is a valuable asset. And just like any other asset, it needs to be protected. Our **[Maintenance + Uptime service](/services)** includes:

*   **Daily automated backups:** We'll back up your website every single day, so you never have to worry about losing your data. It's like having a digital insurance policy.
*   **24/7 uptime monitoring:** We'll monitor your website around the clock and proactively fix any issues that arise. If your website goes down, we'll know about it before you do, and we'll get it back online ASAP.
*   **Monthly security audits and performance tuning:** We'll keep your website secure, fast, and up-to-date with the latest technologies. We'll run regular security scans, we'll optimize your images, and we'll make sure your website is always running at peak performance.

### The Path to Recurring Revenue: From One-Time Project to Long-Term Partnership

A website is not a cost center; it's a revenue generator. And a retainer is the best way to maximize your return on investment.

By investing in ongoing traffic, conversion, and performance services, you're not just maintaining your website; you're turning it into a powerful engine for growth. You're creating a predictable, scalable, **recurring revenue** stream that will pay for itself many times over.

It's a shift from thinking of your website as a one-time project to thinking of it as a long-term partnership. It's about having a team of experts in your corner, who are just as invested in your success as you are.

Ready to take your website from a one-time project to a long-term growth machine? Explore our **[growth services](/services)** and see how we can help you build a website that's not just a beautiful brochure, but a powerful tool for building a thriving business. And be sure to check out our **[Case Studies](/case-studies)** to see how we've helped other businesses like yours achieve their goals. It's time to stop thinking about your website as a cost, and start thinking about it as an investment.
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
