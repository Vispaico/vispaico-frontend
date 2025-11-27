
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = '6-month-vs-3-day-websites-why-waiting-destroys-momentum';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function SixMonthVsThreeDayStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A stylish watch is ticking.](https://images.unsplash.com/photo-1741981193724-1bb1211405d5?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc3QlMjB2cyUyMHNsb3d8ZW58MHx8MHx8fDI%3D)

You've decided to build a website. Good decision.

Then you get a quote from a web agency: "6 months, $15,000."

You're shocked. It's just a website. Not a rocket ship. Why would it take 6 months?

Here's what happens in those 6 months. And why you shouldn't wait.

## The 6-Month Project Timeline (What Actually Happens)

**Month 1: Discovery & Meetings**

You meet with the agency. Then you meet again. They ask questions. Lots of questions. They disappear for 2 weeks to "consolidate findings."

They return with a 50-page strategy document that says things like "we'll focus on user-centric design thinking" and "leverage synergies across platforms."

You nod. You don't know what it means. Nobody does.

**Month 2: Design Phase**

The agency sends you 3 design mockups in Figma. You hate all 3. You request changes: "Can you make the logo bigger?" "Can we use different colors?" "Can you move that button?"

The agency revises. You hate the revisions. More rounds of feedback. You go back and forth. Back and forth.

It's now Month 3.

**Month 3-4: Development Starts**

Finally, someone writes code. But the design changed 5 times. The developer has to rewrite sections. Testing reveals bugs. The design and code don't align perfectly.

More revisions. More back-and-forth.

**Month 5: QA & Testing**

Bugs found. Fixes deployed. New bugs emerge. Fixes deployed again.

It's now mid-Month 5. The website still isn't live.

**Month 6: Launch**

Fingers crossed. The site goes live. Something breaks. Emergency hotfix at 11 PM.

Finally, your website is live. 6 months after you started.

Your competitors? They launched their websites 5 months ago. They've already got traffic. They're already making sales.

## The Hidden Costs of Waiting 6 Months

**1. Opportunity Cost**

For 6 months, you have no online presence. Zero.

Your competitors have their websites ranking on Google. Getting customer searches. Generating leads.

You? You're waiting. During those 6 months, if you had a website, you could have gotten 1,000 visitors. 30 qualified leads. 10 customers.

That's $8,990 in revenue you didn't make while waiting. Calculate it using basic [opportunity cost](https://www.investopedia.com/terms/o/opportunitycost.asp) math.

**2. Market Changes**

In 6 months, your industry moves. Your competitors pivot. Market trends shift. The website you're building in Month 1 might not be right by Month 6.

By the time it launches, it's already outdated. You'll immediately want to change it.

**3. Team Morale**

Your team is waiting. "When is the website launching?" "Are we live yet?" "I thought we were building a website?"

Projects that drag on kill momentum. Kill excitement. Kill culture.

**4. Money Wasted**

You pay the agency upfront or in installments. $15,000 for a website. Then you realize you hate it 5 months in. But you've already paid. What are you going to do?

You're stuck. Or you pay for a redesign. Another $10,000.

**5. Competitive Disadvantage**

This is the big one.

Your competitor launches their website in 3 weeks. Gets traffic immediately. Ranks on Google for local keywords. Gets customers.

By the time your website launches (Month 6), they've been converting customers for 5 months. They have testimonials. They have case studies. They have social proof. [See how fast launches create competitive advantage](https://www.vispaico.com/case-studies) inside our build recaps.

## The 3-Day Alternative

### What You Get Immediately
- Professional website (Day 3)
- Ranking potential (Day 4)
- Traffic from Google (Week 2)
- Leads and customers (Week 3+)

### What You Avoid
- 6 months of waiting
- Thousands in wasted opportunity cost
- Competitive disadvantage
- Outdated tech stack by launch
- Endless revision cycles

### The Real Timeline

Day 1: You sign up. We build.  
Day 3: You launch. We support.  
Week 2: First Google traffic arrives.  
Week 3: First leads/customers arrive.  
Month 1: 100+ visitors, 3-5 leads.  

## Why the Speed Gap Exists

Agencies take 6 months because:

**They're billing by the hour.** Long projects = more hours = more money. There's no incentive to move fast.

**They have bureaucracy.** 5 stakeholders. 3 meetings per week. 2 approval rounds. Slow down by design.

**They use slow tools.** WordPress takes weeks to build on. Wix is flexible but bloated. Every feature request requires customization.

**They don't have a process.** Each project is custom from zero. No template. No repeatability.

## Why We Do It Faster

**We're not billing by the hour.** Fixed price, fixed timeline. We win by shipping fast.

**We have a proven process.** 50+ websites built the same way. We know exactly what to do.

**We use modern tech.** Next.js + Vercel + Storyblok. Built for speed. Built for scalability.

**We say "no" to scope creep.** Feature creep is what kills timelines. We define scope upfront. Deliver exactly that. Revisions after launch if you want more.

## The Real Cost of Waiting

6 months = 26 weeks = 182 days of lost opportunity.

Let's say you get 100 visitors per day (modest). At 3% conversion (standard), that's 3 customers per day.

182 days × 3 customers = 546 customers you didn't get.

At $899 per customer (if you're selling websites), that's **$491,000 in lost revenue.**

Even if your product is different, the principle holds: Waiting costs money.

## The Speed Advantage

Speed isn't just about convenience. It's about **competitive advantage.**

The fastest to market wins. The fastest to learn wins. The fastest to iterate wins.

By launching in 3 days instead of 6 months, you:

✓ Get to market first  
✓ Start learning from real users immediately  
✓ Iterate based on real feedback  
✓ Build momentum with early wins  
✓ Outcompete slower competitors  

Need proof? Google literally bakes performance into rankings via [page experience signals](https://developers.google.com/search/docs/appearance/page-experience). Fast launches keep you ahead.

## What to Do Today

[Don't wait 6 months.](https://www.vispaico.com/vispaico-growth-website) Launch your website in 3 days. Get online. Get traffic. Get customers.

After launch, iterate quickly—[Our growth services help you iterate](https://www.vispaico.com/services) without slogging through another 6-month build. Want more context on how we operate? [Learn how our process works](https://www.vispaico.com/about) and see the people behind the timeline.

### Read Next

- [The 72-Hour Website: How We Build in 3 Days](https://www.vispaico.com/articles/72-hour-website)
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
