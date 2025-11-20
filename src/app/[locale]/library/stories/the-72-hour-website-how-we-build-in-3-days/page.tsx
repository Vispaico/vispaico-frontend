
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'the-72-hour-website-how-we-build-in-3-days';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function The72HourWebsiteStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![People standing in front of an Vispaico Building Site.](https://res.cloudinary.com/kinhcode01/image/upload/v1763645123/Vispaico/Images/Vispaico_3_Day_Building_Site_bmhekp.webp)

"A website in 72 hours? That's impossible."

We hear that a lot. And we get it. The traditional web design world has conditioned us to believe that building a website is a long, drawn-out, and painful process. A six-month ordeal of endless meetings, confusing jargon, and surprise invoices that make you question your life choices.

We're here to tell you that it doesn't have to be that way.

Building a high-quality, custom **website in 3 days** is not only possible; it's how we've built our entire business. It's not magic, and it's not a gimmick. It's a finely tuned process that cuts out the fluff and focuses on what actually matters: getting your business online, fast.

So, how do we do it? How do we accomplish in three days what takes most agencies three months? Pour yourself a coffee, get comfortable, and let us pull back the curtain.

### The Secret Sauce: A Ruthless Commitment to Process

The key to our speed is a ruthless commitment to process. We're not a bunch of free-spirited artists throwing paint at a canvas and hoping for a masterpiece. We're a team of engineers, designers, and strategists who have spent years refining our workflow, eliminating bottlenecks, and automating everything that can be automated. We don't reinvent the wheel every time we build a website; we have a system. A well-oiled, high-performance machine that's designed for one thing and one thing only: a **quick website launch**.

#### Day 1: The Blueprint (Or, How to Read Your Mind)

The first 24 hours are all about strategy and design. But you won't find any "mood boards" or "brand explorations" here. We're not here to navel-gaze; we're here to build.

*   **The Kickoff Form:** It all starts with our detailed kickoff form. This isn't your average, run-of-the-mill questionnaire. It's a deep dive into your business, your goals, your target audience, and your vision. We ask the tough questions, the questions that most agencies save for the third or fourth meeting. We want to know everything. Your hopes, your dreams, your fears, your favorite color... okay, maybe not your favorite color. But you get the idea. It's the brain dump that fuels the entire project.
*   **The Blueprint:** Based on your kickoff form, our team creates a comprehensive blueprint for your website. This includes the site structure, the user flow, the content plan, and the technical specifications. We're not just throwing things at a wall to see what sticks; we're designing a website that's built to convert from the ground up. It's like an architectural plan for your digital home.
*   **The Design Sprint:** While the blueprint is being finalized, our designers are already at work. We use a system of pre-built, battle-tested components that can be customized to fit your brand. This allows us to create a unique, professional design without starting from scratch every single time. It's like having a master chef who already has all the ingredients prepped and ready to go.

By the end of Day 1, we have a complete plan and a solid design direction. No meetings, no back-and-forth, just a clear path forward. You'll get a daily update from us, so you're always in the loop.

#### Day 2: The Build (Where the Magic Happens)

Day 2 is where the magic happens. This is where our developers take the blueprint and the design and turn them into a living, breathing website.

*   **The Tech Stack:** We use a modern, headless tech stack (Next.js, Vercel, and a headless CMS like Storyblok) that's built for speed and scalability. This allows us to build faster, deploy faster, and create websites that are ridiculously fast. It's like building a car with a jet engine instead of a lawnmower engine.
*   **Component-Based Development:** We don't build pages; we build systems. Our developers have a library of reusable components that can be quickly assembled to create your website. It's like playing with LEGOs, but for grown-ups who like to build things that make money.
*   **Content Integration:** While the developers are building, our content team is writing your copy and sourcing your images. We're not going to leave you with a beautiful, empty shell of a website. We're going to fill it with high-quality, SEO-optimized content that tells your story and sells your products.

By the end of Day 2, you have a fully functional website. It's not a "preview" or a "mockup"; it's the real deal. You can click around, you can test the forms, you can see your business coming to life online.

#### Day 3: The Launch (Houston, We Have a Website)

Day 3 is all about testing, refinement, and launch.

*   **Quality Assurance:** We put your website through a rigorous testing process to make sure everything works perfectly. We test on different devices, different browsers, and different screen sizes. We check for bugs, we check for typos, and we check for anything that might get in the way of a seamless user experience. We're like a team of digital detectives, hunting down and eliminating any potential problems.
*   **SEO & Performance Optimization:** We make sure your website is optimized for search engines and performance. We set up your meta tags, we create a sitemap, and we make sure your site is loading in under a second. We want to make sure that Google loves your website as much as you do.
*   **The Launch:** Once everything is perfect, we hit the big red button. We deploy your website to Vercel's global network, set up your domain and SSL certificate, and hand you the keys.

And just like that, in 72 hours, you have a brand new, custom-built, lightning-fast website. A website that's ready to take on the world.

### Why This Matters for Your Business

A **quick website launch** isn't just a novelty; it's a competitive advantage. While your competitors are stuck in endless meetings and revision cycles, you're already out there, attracting customers and making sales. You're learning from real-world data, you're iterating and improving, and you're building momentum.

Our process is designed for a **fast website builder** experience, but with the quality and customization of a traditional agency. We've cut out the fat and focused on what really matters: delivering a high-quality product in a fraction of the time.

Don't believe us? **[See our case studies](/case-studies)** to see what we've been able to accomplish for other businesses in just 72 hours. From e-commerce stores to complex SaaS platforms, we've done it all. We've helped a handmade leather goods company go from 0 to $1,200 in daily orders in 30 days. We've built a 28-page student portal for an education consultancy in 72 hours. We've created a SaaS landing page that converted at 12%.

We're not just building websites; we're building businesses.

Ready to stop waiting and start growing? Check out our **[Growth Website page](/vispaico-growth-website)** to learn more about our 72-hour process and how you can get your own **website in 3 days**. The clock is ticking.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Speed</p>
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
