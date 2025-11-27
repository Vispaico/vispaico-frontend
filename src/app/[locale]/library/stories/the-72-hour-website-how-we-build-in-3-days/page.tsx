
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
  const articleMarkdown = String.raw`![Team sprinting around laptops in a bright studio.](https://res.cloudinary.com/kinhcode01/image/upload/v1763645123/Vispaico/Images/Vispaico_3_Day_Building_Site_bmhekp.webp)

"You can't build a real website in 3 days."

We hear it all the time. From agencies that bill by the hour. From freelancers protecting their rate. From people who've never seen it done.

They're wrong.

We've built 50+ websites in 72 hours. 28-page platforms with dashboards. E-commerce stores with inventory. SaaS landing pages that convert. All in 3 days. All without templates or hacks.

Here's how.

## Why Most Agencies Can't Build Fast

Traditional web agencies take 8-12 weeks. Here's why:

**Week 1-2: Discovery phase.** Multiple meetings. Mood boards. Strategy sessions. Presentations on presentations. No code written.

**Week 3-4: Design phase.** 5 design revisions. Client feedback. More revisions. Still no code.

**Week 5-8: Development.** Coding happens (finally). But it's slow because the design kept changing.

**Week 9-10: Testing & QA.** Bugs emerge because design and code weren't synchronized.

**Week 11-12: Launch & deployment.** Hope nothing breaks.

12 weeks. 6-8 meetings per week. 30+ emails back and forth. Thousands of dollars in overhead.

During those 12 weeks, your business is waiting. Competitors are launching. Customers are going elsewhere.

## How We Do It in 72 Hours

**We skip the theater. We start building immediately.**

### Day 1: Design & Planning (8 hours)

You fill out a form with the basics:

- Business name and description
- Main goal (sell products? generate leads? build authority?)
- Tone and style
- Any images or copy you have

We don't need a 50-page brand strategy. We need information. We analyze it in real-time and start designing.

**By Hour 4:** We have a homepage design. Not a Figma mockup. A real, clickable prototype built in code.

**By Hour 8:** We have the full information architecture. All pages. All sections. All CTAs. Designed and in code.

No mood boards. No "let's get feedback and revise." We move.

### Days 2-3: Build & Launch (32 hours)

**Day 2 Morning (4 hours):** We build the remaining pages. Service pages. About page. Contact forms. Blog structure if needed. We test as we go.

**Day 2 Afternoon (4 hours):** We integrate your content management system (Storyblok headless CMS). This is key. You can manage your own content without touching code.

**Day 2 Evening (4 hours):** We set up domain registration, hosting on Vercel, SSL security, email addresses, and GDPR compliance. We test everything on mobile, desktop, and tablet.

**Day 3 Morning (4 hours):** Final testing. Performance optimization. SEO setup. Google Search Console verification. Speed optimization (target: under 1 second load time).

**Day 3 Afternoon (4 hours):** Backup plan testing, handover documentation, client training on how to use the CMS.

**Day 3 Evening:** Site is live. You launch. We're available for support.

## Why This Works (And Why Agencies Won't Do It)

**We use the right tech stack.**

Most agencies use WordPress, Wix, or Squarespace. These are flexible. They're also slow. Building on them takes weeks because you're fighting the platform.

We use:

- **[Next.js](https://nextjs.org/docs)** for the frontend (compiles to static files, loads in milliseconds)
- **[Storyblok](https://www.storyblok.com)** for content management (you control content, we don't need to rebuild)
- **[Vercel](https://vercel.com/docs)** for hosting (serverless, scales instantly, runs globally)

These tools are built for speed. Building with them is fast.

**We've done this 50+ times.**

We have templates. Not design templates (those kill uniqueness). Process templates. We know exactly what questions to ask. We know what design patterns work. We know what breaks.

Repeating a process is faster than inventing one every time.

**We don't design by committee.**

Agencies have 5 stakeholders per project. Everyone has opinions. Everyone wants revisions. We have one client contact. One decision-maker. Decisions move fast.

**We don't build for perfection on Day 1.**

Most agencies try to get everything perfect before launch. We launch on Day 3 with 95% perfect. The last 5% (polish, extra features, minor optimizations) happens after launch when you can actually test with real users.

## Real Examples (Not Theory)

### Education Consultant Platform
- 28 pages
- 2 admin dashboards
- Student login system
- Article management with Storyblok
- Built in: 72 hours
- Result: 300% traffic growth in 3 months

### E-Commerce Store
- 60 products
- Inventory management
- Payment processing
- Abandoned cart recovery
- Built in: 72 hours
- Result: $1,200 in orders by Day 7

### SaaS Landing Page
- 12 pages
- Conversion funnel optimization
- Email capture forms
- Built in: 72 hours
- Result: 12% conversion rate (industry average: 2%)

These aren't theoretical. These are real builds. Real timelines. Real results. [See our case studies](https://www.vispaico.com/case-studies) for detailed breakdowns.

## What You Get After Day 3

✓ Professional website that works  
✓ Fully optimized for mobile + desktop  
✓ Loads in under 1 second  
✓ Domain + hosting (1 year included)  
✓ SSL security + GDPR compliance  
✓ Content management system (you control updates)  
✓ Email setup (custom domain emails)  
✓ 7 days of free revisions  
✓ 30 days of free technical support  

Need ongoing help? Continue scaling with our [maintenance and growth services](https://www.vispaico.com/services).

Still have questions about scope, process, or what's included? [Learn more about the process](https://www.vispaico.com/faq) and see exactly how the 72-hour sprint works from kickoff to launch.

## The Real Question

Not "Can you build a website in 72 hours?"

The real question is: "Why would you wait 12 weeks?"

Every week you wait is customers lost. Competitors launching. Momentum killed.

[Build your website in 72 hours. Start today.](https://www.vispaico.com/vispaico-growth-website)
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
