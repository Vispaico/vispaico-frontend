import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'how-to-actually-predict-seo-results-without-lying-about-it';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription,
    alternates: {
      canonical: `https://vispaico.com/library/stories/${ROUTE_SEGMENT}`
    }
  };
}

export default async function SeoForecastingStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  const articleMarkdown = String.raw`![SEO Forecasting Placeholder](/images/articles/SEO-predictions.webp)
*SEO forecasting is a numbers game.*

Someone's going to ask you: "How much traffic will this bring in 12 months?"

And you're going to panic. Because the honest answer is "I don't know." But saying that kills the deal.

So you guess. You guess optimistically. You guess linearly. You guess like someone who's never actually tracked what happens after they make a promise.

We did this with 8 clients over two years. Tracked actual results against predictions. Built a model that gets us to 75% accuracy at the 12-month mark.

It's not magic. It's boring math. But boring math beats bullshit every time.

> **TL;DR**
> - Forecasting only works when you anchor it in 12+ months of your own data, honest publishing capacity, and real competitive context.
> - Model three scenarios (conservative, likely, optimistic) instead of one fantasy number, and tie each to traffic ranges, execution requirements, and risk factors.
> - Use probability-based keyword math, publishing velocity, and monthly tracking to keep projections tethered to reality and adjust early when you slip.
> - Accuracy compounds over the year: ~45% at month 3 grows to ~75% at month 12 if you keep measuring, diagnosing misses, and updating the plan.
>
> [Skip to details](#why-every-seo-forecast-youve-heard-is-garbage)

## Why Every SEO Forecast You've Heard Is Garbage

Most SEO forecasts fail for the exact same reasons. Same mistakes, different agency.

**They get drunk on optimism.** "We'll rank #1 for all target keywords. Traffic will grow 500%. It'll be linear and perfect. The algorithm will favor us specifically."

Walk into any sales pitch and you hear this stuff. It sounds incredible. It's also fantasy.

**They hide the methodology.** You ask how they got to those numbers and suddenly they go quiet. "Advanced algorithms." "Our proprietary system." "Years of experience." Translation: I made it up and I can't explain it.

**They ignore reality completely.** No algorithm changes (Google updates constantly). No competition (everyone's doing SEO). No days when content underperforms (it happens). No risk factors at all.

The result? Their 12-month forecast is off by 200-300%. You're expecting a thousand visits and you get three hundred. You're expecting $50k in monthly revenue and you get $15k.

Then you fire them. Or worse, you blame yourself for not executing well enough.

We stopped doing that years ago. And once we actually tracked what happened versus what we predicted, we realized we could build something that works.

## The Data You Actually Need (No Shortcuts)

Before you can forecast anything with any credibility, you need real data. Not "we've been working here for two months" data. Not "our competitor said their traffic grew." 

Real data. From your own account. For 12 months minimum.

**Historical performance (past 12+ months):**

- What was organic traffic doing before?
- How fast did rankings actually improve?
- How often did content actually get indexed?
- How many backlinks did you actually acquire?
- What happened during algorithm updates?

**Current state:**

- Where are you ranking right now for your target keywords? (Positions 1-50, not just page 1)
- How many pieces of published content do you have?
- What's your domain authority?
- What's your technical health score?
- How's your backlink profile?

**Planned work:**

- How many articles will you actually publish per month? (Be honest)
- How many links are you targeting to build?
- What technical fixes are coming and when?
- What's your actual budget and how will it be allocated?

This is the unglamorous part. But without this, you're not forecasting. You're guessing. And guesses are useless.

If you've only been live for six months, you can plan and estimate. But you can't accurately forecast yet. You need a full year of data to see the actual patterns. The seasonal shifts. The algorithm impacts. The reality.

## The Three-Scenario Model (How We Actually Do It)

Never, ever give one number.

Ever.

Instead, give three. Conservative. Likely. Optimistic.

This solves two problems at once: it's honest, and it actually works.

**Conservative (70% confidence): 35-45% traffic growth**

This assumes ranking improvements happen slower than your historical pace suggests. Some content underperforms. Other content crushes it. Algorithm updates happen. A competitor gets a good backlink boost. This is the real world.

For example: You've historically grown 65% year-over-year. But conservative says 40%. Why? Because you can't replicate perfect execution every year. Something always gets in the way.

**Likely (50% confidence): 60-80% traffic growth**

This is based on your actual historical data. It's what usually happens if you execute normally and nothing weird breaks. One algorithm update. One content piece that doesn't land. One competitive threat that pushes back. But overall, you execute and you get your expected results.

This is the middle ground. Not best case, not worst case. What actually happens most of the time.

**Optimistic (30% confidence): 100-130% traffic growth**

This is if everything goes right. Execution is perfect. Content performs above average. Backlinks come easier than expected. Algorithm favors you. No competitive surprises. You beat your expectations.

It can happen. But it's the minority outcome. 30% confidence means you hit this maybe once every three years or so.

The math here is important: if you only present optimistic and it happens 30% of the time, you look like you don't know what you're doing. If you present all three, you look honest. And when you hit the likely number, you look like you knew what you were doing.

## Ranking Probability: The Math That Actually Works

For each keyword you're targeting, you need a realistic answer to this question: What's the actual probability this keyword ranks on page one within 12 months?

It's not 100%. It's not random. It's somewhere in between. And you can calculate it.

Here's the baseline:

**Position 11-20 currently:** ~40% chance of page 1 in 12 months
**Position 21-30 currently:** ~25% chance of page 1 in 12 months
**Position 31-50 currently:** ~10% chance of page 1 in 12 months
**Not ranking at all:** ~5% chance of page 1 in 12 months

These numbers come from actual data. Looking at hundreds of keywords over years and seeing what actually happened.

But your situation isn't generic. So you adjust:

**Domain authority comparison to competitors:** If your domain is stronger than competitors' in that space, add 10% to your probability. If it's weaker, subtract 10%. If it's comparable, no adjustment.

**Content quality advantage:** If your content is actually better than what's currently ranking, add 15%. Same quality? No adjustment. Worse? Subtract 15%.

**Backlink acquisition pace:** If you're building links faster than competitors, add 10%. Slower? Subtract 10%.

These adjustments make the forecast specific to your situation instead of generic.

Then multiply that probability by how many people actually search for that keyword. That's your traffic estimate for that keyword.

Do this for all 50-100 target keywords. Add them up. That's your total projected traffic.

It's not perfect. But it's honest.

## How Publishing Speed Changes the Timeline (Not Linearly)

Your content output matters. A lot. But not how most people think.

**10 articles per month:**

- Month 3: No real impact yet (still indexing)
- Month 6: +30% traffic
- Month 12: +65% traffic

**20 articles per month:**

- Month 3: Still too early
- Month 6: +50% traffic
- Month 12: +110% traffic

**5 articles per month:**

- Month 3: Minimal
- Month 6: +15% traffic
- Month 12: +35% traffic

Here's the part everyone gets wrong: Month 6 is not half of Month 12.

Why? Articles don't start ranking immediately. It takes 2-3 months for Google to index a new article. Then another 4-6 months for it to actually rank and drive traffic. This is the indexing lag and ranking lag.

Month 6, you're seeing the first wave of content from months 1-3 starting to rank. Month 12, you've got four waves stacking on top of each other. That's why it compounds.

So if you publish 20 articles in months 1-6, you see +50% by month 6. But those same articles are ranking harder by month 12, plus the articles from months 4-6 are now ranking. That's the difference between +50% and +110%.

Most forecasts miss this completely. They assume linear growth. That's why they're wrong.

## The Monthly Tracking That Keeps You Honest

You make a forecast. But then you actually have to watch what happens.

Every month, pull these numbers:

**Actual vs. forecast traffic:** Did you hit the range? Higher? Lower?

**Ranking improvements vs. predicted:** How many keywords moved to the next position bracket?

**Content published vs. planned:** Did you hit your 10 articles target or did you only publish 6?

**Links acquired vs. target:** Did you build the backlinks you planned?

If you're off by more than 20%, you need to figure out why.

**Example:** You forecasted +30% traffic by month 6. You hit +15%. Why?

Possible answers: Algorithm shift (Google did an update that affected your vertical). Content didn't perform as expected (the pieces you thought would be strong weren't). Competitor moved (someone else published better content and ranked faster). Publishing slowed down (you only hit 6 articles instead of 10).

Once you identify the reason, you adjust the forecast forward. "We're tracking 15% instead of 30%. That's 50% of target. If the trend continues, we'll hit 35% by month 12 instead of 65%. We need to either increase publishing or improve content quality to get back on track."

This is where credibility lives. Not in being right the first time. In admitting you were wrong, understanding why, and adjusting.

## Real Accuracy Over Time (The Data From 8 Clients)

We tested this model with 8 clients over two years. Tracked every month. Here's what accuracy actually looks like:

**Month 3 accuracy: 45% average**

Too early. Content's still indexing. Rankings haven't moved much. The forecast is wide because too many variables are still in play.

**Month 6 accuracy: 60% average**

You can start seeing real trends now. The first wave of content is ranking. You can see if your ranking velocity is faster or slower than predicted. Confidence goes up.

**Month 9 accuracy: 70% average**

Clear patterns are established. You've seen two algorithm updates probably. You know which content performs and which doesn't. Most variables have revealed themselves.

**Month 12 accuracy: 75% average**

A full year of execution. Most variables have played out. You've been through seasonal cycles. You've seen competitive moves. The forecast is validated or adjusted based on reality.

75% isn't perfect. But here's the thing: SEO has hundreds of variables. Google releases updates. Competitors move. Your content performs differently than expected. Your link building pace changes. Getting within 20% of your forecast is considered accurate in this industry.

A 75% accurate forecast that stays within +/- 20% of actual results is solid.

## The Common Mistakes That Kill Credibility

**Mistake 1: One-number forecast**

"You'll get 1,000 visits per month in 12 months." Nope. Never say this.

What happens? Month 6 you're at 600 visits. Everyone looks at that number and thinks you're wrong. Never present one number. Always present a range.

**Mistake 2: No risk factors included**

Ignore algorithm changes (they happen constantly). Assume perfect execution (it doesn't exist). Assume competition stays static (it doesn't).

Good forecasts include: Algorithm update risk. Execution risk. Competitive risk. Content performance variance.

**Mistake 3: Linear projections**

"Month 1 we'll get 50 visits, month 2 will get 50 more, so month 12 will be 600."

That's not how SEO works. SEO compounds. Month 6 isn't half of month 12. Month 12 is exponentially higher because the work from early months is still working.

**Mistake 4: Set it and forget it**

Make a forecast in month 1. Never update it. Then you're massively off by month 8 and you look stupid.

Update monthly. Track actual results. Adjust based on reality. That's how you stay credible.

## How to Actually Do This Right

You need:

- 12+ months of real historical data (required, not optional)
- Three scenarios (conservative, likely, optimistic)
- Probability-based keyword rankings (not guarantees)
- Monthly tracking (compare actual vs. forecast)
- Content velocity modeled (publishing pace affects timeline)
- Risk factors included (reality, basically)

With that setup, 75% accuracy at 12 months is realistic.

Your forecast won't be perfect. But it'll be honest. And honest beats overconfident every single time.

## What This Actually Looks Like in Practice

When a client asks "how much traffic will we get," here's how the conversation goes:

"Based on your historical data, current rankings, and planned activities, here's what we're forecasting:

Conservative (70% confidence): 35-45% growth. This assumes you hit your publishing targets but some content underperforms. One algorithm update hits and costs you 2-3 weeks of rankings.

Likely (50% confidence): 60-75% growth. This is based on your actual historical pace. You execute, you get expected results.

Optimistic (30% confidence): 100-120% growth. Everything goes right. Content performs above average. Links come easier. No major algorithm disruptions.

We'll track this monthly. If we hit 15% by month 6, we'll adjust the 12-month forecast to reflect that trend. If we hit 45%, the forecast stays similar.

Here's what needs to happen for each scenario:

Conservative: 10 articles/month, 20 backlinks/month, technical improvements in Q2
Likely: 15 articles/month, 30 backlinks/month, technical improvements in Q1-Q2
Optimistic: 20 articles/month, 40 backlinks/month, technical improvements in Q1

Pick which scenario you want to target. We'll execute to that. And we'll track monthly so you always know where you actually stand."

That conversation takes 30 minutes. But it sets expectations that don't blow up in your face.

## Why This Matters for Your Business

Accurate forecasting lets you:

- Set realistic timelines (people don't freak out when results aren't instant)
- Justify budget (you can show ROI potential)
- Track progress objectively (not just "things are going well")
- Adjust early (if you're off track by month 3, you know it)
- Build trust (you're honest about what's possible)

Most agencies skip the forecast entirely or present fantasy numbers. That's why people hate working with agencies.

Be the one who's honest about what's possible. Show the math. Track the results. Adjust based on reality.

That's not flashy. But it builds the kind of trust that lasts.

---

This forecasting model requires data. That's why the research phase matters. You're not predicting blind—you're predicting from actual history. ([Read: The Research Phase Nobody Budgets For](/library/stories/the-research-phase-nobody-budgets-for))

This is also how we get specific: one clear forecast, one clear methodology, no fluff about five different offers. ([Read: The Day We Stopped Building Everything](/library/stories/the-day-we-stopped-building-everything-and-started-building-right))

And it's exactly how we approach growth services with Vispea: research the baseline, forecast the path, track monthly, adjust. ([Read: You Can't AI Your Way Into Having a Soul](/library/stories/you-cant-ai-your-way-into-having-a-soul))
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">From Niels</p>
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
