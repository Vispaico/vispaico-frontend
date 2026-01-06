import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'the-day-i-realized-i-was-doing-everything-wrong';

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

export default async function StrategicLLMStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Stack of marked-up briefs next to a laptop and coffee mug on a studio table.](/images/articles/strategic-approach-to-llm-adoption.webp)
*AI project failure lessons.*

There's a specific kind of humiliation that comes from realizing you spent three months building the wrong thing.

Not "wrong" as in it doesn't work. Wrong as in it fundamentally misunderstood the problem it was supposed to solve.

That was me in early 2023.

### The Project That Looked Perfect (On Paper)

We had a client who needed a content generation system. They were publishing 40+ blog posts per month across multiple verticals. Manual content creation was killing their team. Budget was tight. Timeline was aggressive.

Perfect use case for LLMs, right?

So I built them a system. Automated content briefs. GPT-4 generating first drafts. Automated SEO optimization. The whole pipeline from keyword research to published post in about 90 minutes instead of three days.

I was proud of it. It was fast. It was clever. It solved the "speed" problem.

Then six weeks in, their VP of Content called me.

"Niels, the posts aren't working."

"What do you mean not working? They're ranking."

"They're ranking for keywords nobody's searching with commercial intent. Traffic is up 40% but conversions are down 65%. The audience knows it's AI content. They're leaving faster than they're arriving."

And there it was. I'd solved the wrong problem.

### The Fundamental Mistake I Made

I treated the LLM like a speed tool when I should've treated it like a quality multiplier.

Here's the difference:

**Speed tool mindset:** "How can I make content faster?"
Result: Lots of mediocre content published quickly. Rankings without conversions. Volume without value.

**Quality multiplier mindset:** "How can I make good ideas execute better?"
Result: Fewer pieces of content, but each one is better researched, more insightful, more valuable. Rankings *with* conversions.

The mistake wasn't using AI. The mistake was not understanding *how* AI works best.

GPT-4 doesn't know what your audience cares about. It doesn't understand commercial intent versus informational intent. It doesn't know your brand voice unless you teach it. It can mimic patterns, but it can't *care* about the outcome.

I skipped all of that. I just pointed the tool at the problem and hit go.

That's like using a Formula 1 car to deliver pizza. Sure, you'll get there fast. But you're using the wrong tool for the wrong job in the wrong way.

### What I Should've Done Instead

Once I realized the mistake, I rebuilt the system from scratch. Different approach entirely.

**Step 1: Start with human strategy**  
We had a content strategist audit the existing content. What actually converted? What topics drove commercial intent? What questions did their best customers ask before buying?

This took two weeks. No AI involved. Just humans thinking about what mattered.

**Step 2: Use AI for research, not creation**  
Instead of having GPT-4 write blog posts, we had it research topics. "Pull 20 data points on this subject." "Find three case studies about X." "Summarize the competitive landscape for Y."

The strategist then used that research to outline posts with actual insight. AI did the legwork. Humans made the decisions.

**Step 3: AI drafts with constraints**  
Once we had a real outline—one that came from strategy, not automation—*then* we used AI to write first drafts. But with constraints: tone examples, brand voice samples, specific angles to take.

Not "write a blog post about X." More like "write a blog post about X using this structure, this tone, aimed at this audience, answering this specific objection."

**Step 4: Human editing with AI polish**  
Editors rewrote the AI drafts. Substantially. They kept maybe 30-40% of what AI generated and rewrote the rest. Then AI helped with polish: readability improvements, SEO tweaks, formatting.

The result? Content that took 8 hours per post instead of 90 minutes. But conversion rate went up 220%. Traffic quality doubled. Audience retention tripled.

Slower output. Better outcomes.

### The Lesson That Changed Everything

That project taught me something I didn't want to learn: tools don't solve problems. Humans solve problems. Tools amplify solutions.

If you don't understand the problem first, the tool just makes you wrong faster.

This applies to everything we do now. Every LLM project. Every AI strategy. Every implementation.

We don't start with "what can this tool do?" We start with "what problem are we actually solving?" Then we figure out if the tool fits. And *how* it fits. And what it shouldn't do.

That's why [understanding context windows matters](/library/stories/llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it)—you can't use AI effectively if you don't understand how it works. And why [research comes before building](/library/stories/the-research-phase-nobody-budgets-for)—you need to know what you're making before you use tools to make it faster.

### The Framework I Use Now

Anytime we're implementing LLMs or AI tools for a client (or ourselves), I run through this checklist:

**1. What's the actual outcome we need?**  
Not "more content" or "faster responses." What's the business goal? More revenue? Better customer retention? Higher conversion rate?

**2. What does "good" look like?**  
Can we define it? Can we measure it? Can a human demonstrate it? If we can't show what good looks like, AI definitely can't create it.

**3. Where does human judgment matter most?**  
Strategy? Creativity? Editing? Quality control? That's where humans stay involved.

**4. Where is AI actually helpful?**  
Speed? Volume? Data processing? Research? Pattern recognition? That's where AI adds value.

**5. How do we validate it's working?**  
What metrics prove this is better than the old way? If we can't measure it, we can't improve it.

This framework sounds obvious. But most people skip it. They grab the tool and start using it because it's new and exciting.

I did that. It cost three months and about $35k in wasted work.

### Why This Matters for You

If you're implementing AI in your business right now—whether it's content, customer service, operations, whatever—you're probably making the same mistake I made.

You're asking "how can AI make this faster?" when you should be asking "how can AI make this better?"

Speed without quality is just fast failure.

The best use of LLMs isn't replacing humans. It's amplifying the humans who know what they're doing.

That's the shift. Tools don't replace strategy. They execute it.

Figure out the strategy first. Use the tools second.

That's what separates companies that get value from AI from companies that just generate a lot of mediocre outputs really quickly.

### What We Do Differently Now

Every project we take on at [Vispaico](/about) starts with this question: "What are we actually trying to accomplish?"

Not "can we use AI here?" but "should we, and if so, how?"

Sometimes the answer is yes. Sometimes it's no. Sometimes it's "yes, but differently than you're thinking."

That's the value. Not the tool. The thinking that determines how to use the tool.

We help teams figure out [how to use AI without losing their soul](/library/stories/you-cant-ai-your-way-into-having-a-soul). How to get faster without getting worse. How to automate the boring stuff while keeping humans in charge of the stuff that matters.

That approach came from failure. From building the wrong thing and having to admit it.

I wish I'd known this earlier. But failing taught me better than any course or framework ever could.

So if you're about to jump into an AI project right now—pause. Ask the hard questions first. Understand what you're trying to accomplish. Understand how the tool actually works.

Then build.

You'll save yourself three months and a very humbling phone call.

**External Resources:**  
- [OpenAI's GPT-4 Documentation](https://platform.openai.com/docs)
- [Harvard Business Review: Getting AI Implementation Right](https://hbr.org/artificial-intelligence)`;

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
