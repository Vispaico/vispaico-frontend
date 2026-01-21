import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'the-conversation-with-a-client-that-made-me-rethink-everything-about-branding';

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

export default async function BrandIntegrityStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Dare mighty things image for Visp[aico client-brand integrity conversation](/images/articles/vispaico-client-brand-integrity.webp)
*Brand integrity over short-term revenue.*

The call came on a Wednesday afternoon. One of our best clients. Great relationship. Good money. Easy to work with. They'd just landed a major partnership opportunity and needed our help fast.

"We need a landing page. High-converting sales page for the partnership. Can you turn it around in a week?"

"Sure. Send over the brief."

Two hours later, I'm reading the brief and something feels off.

The partnership was with a company that directly contradicted everything this client's brand stood for: transparency, ethical practices, doing business the right way even when it's harder. Their audience loved them for it. That reputation was the whole reason they'd grown.

The partnership? With a company known for aggressive sales tactics, hidden fees, and terrible customer service. The brief asked us to make the partnership sound natural. Hide the sketchy parts. Emphasize the upside. Basically: lie.

I called them back.

"We can't do this."

> **TL;DR**
> - A seven-figure deal asked us to dress up a partnership that clashed with the client's values. I said no.
> - Saying no cost short-term revenue and preserved brand trust—and the client later landed a better-aligned partnership that performed 3x better.
> - Use the filter: values alignment, would best customers respect it, are we rationalizing, does it move us toward the five-year vision, can we execute without compromising quality.
> - Brands compound on consistency. Compromise trades long-term credibility for short-term cash.
>
> [Skip to details](#the-conversation-nobody-wants-to-have)

### The Conversation Nobody Wants to Have

"What do you mean you can't do this?"

"This partnership goes against your brand. Your audience will figure it out. It'll damage your credibility. We're not building something that hurts you long-term for money in the short-term."

Silence. Then: "Niels, we need this partnership. It's a seven-figure deal over two years. We can make it work."

"You can't make it work. Your audience knows what you stand for. This goes against it. You'll make money for six months and lose trust you spent five years building. That's not a trade worth making."

More silence.

"So you're saying no."

"I'm saying we won't help you do something that damages your brand. If you want to take the partnership, that's your call. But we're not the team to build the messaging for it."

The call ended awkwardly. I thought we'd lost the client.

### What Happened Next (The Surprising Part)

Two days later, they called back.

"We turned down the partnership."

"You what?"

"We talked about it as a team. You were right. It didn't feel right, but the money was so good we were ignoring that feeling. Your pushback forced us to actually think it through. We would've damaged everything we've built. So we said no."

That decision cost them a seven-figure deal. It also saved their brand.

Six months later, they landed a different partnership—one that actually aligned with their values. Lower upfront revenue, but their audience loved it. Conversion rate was 3x higher than projected. Customer lifetime value went up because the partnership attracted the right customers, not just any customers.

They told me later: "Saying no to that deal was the best business decision we made all year."

### Why This Is Harder Than It Sounds

Saying no to money is hard. Especially when you need the money. That client didn't need it desperately. But they wanted it. And when someone waves a seven-figure opportunity in front of you, every rationalization kicks in.

- "Maybe it won't be that bad."
- "Our audience will understand."
- "We can make this work if we message it right."
- "Other companies do stuff like this all the time."

All of those avoid the real question: **Does this align with who we actually are?** Most companies skip that question. They see the opportunity and take it, then spend months trying to explain to their audience why it makes sense.

### The Test That Reveals Everything

Here's the test I use now: **Would your best customers respect this decision?** Not "would they accept it." Not "could you convince them." Would they actually respect it?

If the answer is no, don't do it.

For that client, the answer was obvious. Their best customers loved them because they did business differently. A partnership with a company known for shady practices? Their best customers would've been disgusted. They might've kept buying. They might've stayed silent. But respect would've eroded—and once you lose respect, you can't buy it back.

### The Pattern I Keep Seeing

This happens more than you'd think.

Company builds a reputation for being fast, high-quality, customer-focused. Then someone offers a lower-quality, higher-margin product line. Easy money. They take it. Revenue goes up short-term. Brand value drops long-term.

Or a company builds a brand around being accessible and affordable. Then they raise prices 40% for "premium positioning." They lose the customers who loved them for being affordable and don't attract premium customers because the product still isn't premium—just more expensive.

Or a company builds a reputation for transparency. Then they start using dark patterns to boost conversion rates. Conversion rates go up 10%. Trust goes down 40%.

Every time, the math looks good for about six months. Every time, it damages the brand long-term. The damage is gradual, which makes it easy to pretend it's not happening.

### What Actually Happens When You Stay True to Identity

Staying true to your brand identity is uncomfortable. You turn down opportunities that could work. You leave money on the table. You move slower than competitors who don't care about consistency. But here's what happens over time:

- Your audience trusts you more. They know you won't chase trends or betray your values for quick cash. Trust compounds.
- Decision-making gets easier. Once you're clear on what you stand for, you know what to say yes to and what to say no to. Less second-guessing. Less internal debate.
- You attract the right opportunities. People who align with your brand approach you. You stop wasting time on partnerships or clients that don't fit.
- Your message stays consistent. You're not constantly pivoting or explaining. Your brand feels coherent. Your audience knows what you're about.
- You build long-term value instead of chasing short-term revenue. Brands that stand for something compound. Brands that chase everything stagnate.

This is why [doing the research phase matters](/library/stories/the-research-phase-nobody-budgets-for)—you need to know what you're building before you can stay true to it. And why [we killed services that diluted our message](/library/stories/the-day-we-stopped-building-everything-and-started-building-right)—focus means saying no to things that don't fit.

### The Real Business Cost of Saying No

Let's talk about what this actually costs. That client turned down a seven-figure deal. We've turned down projects worth $50k, $100k, $200k because they didn't align with what we're building at [Vispaico](/). That hurts. Especially when you're growing and could use the cash.

But the alternative is worse.

Say yes to the wrong opportunities and you end up with clients you don't actually want to serve. Work that doesn't showcase what you're good at. A brand message that's muddled and confusing. A reputation for being "the team that'll do anything for money." That reputation is poison. Once you have it, you can't shake it.

### How to Know When to Say No

In the moment, everything looks like it could work if you try hard enough. Here's the framework we use:

**Does this align with our core values?** Not "can we make it work." Does it naturally fit who we are?

**Would our best customers respect this?** If we told our favorite clients about this opportunity, would they say "that makes sense" or "huh, that's surprising"?

**Are we rationalizing?** If we're spending more than 10 minutes convincing ourselves this is a good idea, it probably isn't. That convincing is a red flag.

**Does this move us closer to where we want to be in five years?** Not just financially. Does it build the reputation we want? Attract the clients we want? Create the leverage we want?

**Can we execute this without compromising quality or values?** If the answer requires "we'll figure it out," that's a no. Non-negotiable.

Most bad decisions happen because we skip these questions and jump straight to "how much money is this worth?" Money matters. But money from the wrong source costs more than it pays.

### The Moment It Clicked for Me

I used to say yes to everything. Early Vispaico days, any client with a budget got a yes. Any project that paid got a yes. I thought that's what hustle meant.

Then I looked at our portfolio after year two. It was a mess. No coherent message. No clear niche. Just "we do lots of different things for lots of different people." Nobody knew what we were actually good at.

We were making money, but we weren't building anything.

That's when it clicked: **growth without focus is just busy-ness.**

So we started saying no. A lot. We turned down projects that didn't fit. We killed service offerings that diluted our message. We got uncomfortably specific about what we do and who we do it for.

Revenue dipped for about six months. Then it came back stronger. Because the clients who did come to us were the right clients. The projects we did take showcased our best work. The message became clear.

[You can't AI your way into having a soul](/library/stories/you-cant-ai-your-way-into-having-a-soul). You can't say-yes-to-everything your way into a coherent brand. You have to choose what you stand for. Then defend it. Even when it's expensive.

### What We Do Now

Every potential client or project goes through a filter:

- **Does this align with what we're building?** If no, we pass or refer them to someone else.
- **Can we do exceptional work on this?** If it's outside our expertise or doesn't excite us, we pass.
- **Will we be proud to show this in our portfolio?** If not, why are we doing it?
- **Does this client share our values?** If they want shortcuts, hacks, or anything that feels sketchy, we pass.

This filter means we say no more than we say yes. That's fine. The yeses are better. We'd rather have 10 clients who are thrilled with us than 50 who are just fine. The 10 who are thrilled refer others. They stick around longer. They let us do better work.

### Why This Matters for You

If you're building a brand—personal or company—you'll face this choice. Someone will offer you money to do something that doesn't quite fit. The rationalization will be tempting. "It's just one project." "We need the revenue." "We can make it work."

Maybe you can. But at what cost?

Your brand is the sum of every decision you make. Every yes. Every no. Every time you compromise or hold the line. People feel the difference between a brand that stands for something and a brand that'll do anything for money.

The first one commands premium prices and loyal customers. The second one competes on price and loses to whoever's cheaper.

Choose what you stand for. Then defend it. Even when it costs you. That's the conversation I had with that client. That's the conversation I keep having with myself. It's never easy. But it's always worth it.

**External Resources:**
- [Simon Sinek on Brand Purpose](https://simonsinek.com/discover/great-leaders-organizations-start/) (authoritative source)
- [Forbes: The Cost of Compromising Your Brand](https://www.forbes.com/brand-strategy) (authoritative source)`;

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
