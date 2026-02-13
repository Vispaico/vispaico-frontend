import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'how-we-built-an-ai-workflow-that-saves-20-hours-per-week';

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

export default async function AiWorkflowStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for Vispaico AI workflow](/images/articles/the-perfect-ai-workflow.webp)
*Our real AI + human workflow that freed 20 hours a week.*

> **TL;DR**
> - Mapped every step, gave AI the speed work (research, first drafts, SEO checks, repurposing), kept humans on strategy, voice, and quality.
> - Time per post dropped from ~12.5 hours to ~3.5 hours; ~27 hours saved weekly at 4-6 posts; quality held because humans still edit.
> - Start with one bottleneck, add AI there, measure, expand—don’t automate judgment, automate execution.
> - Use the time saved for better content and strategy, not just more content.

Before we implemented our AI workflow, content creation looked like this:

**Monday:** Research topic (3 hours)  
**Tuesday:** Outline post (1 hour), write first draft (4 hours)  
**Wednesday:** Edit draft (2 hours), finalize (1 hour)  
**Thursday:** Create social posts (1 hour), schedule (30 min)  

Total: ~12.5 hours for one blog post + social content.

That's half a work week. For one piece of content.

We publish 4-6 pieces per week. You can see the problem.

Now the same workflow takes 3.5 hours. Same quality. Better SEO. Less stress.

Here's exactly how we did it.

### The Before: Manual Everything

Our old workflow was entirely manual:

**Research:** Google searches, reading competitor content, gathering examples. Humans doing all of it.

**Outlining:** Humans deciding structure, main points, flow.

**Writing:** Humans writing every word.

**Editing:** Humans editing their own work (which never goes well).

**Social content:** Humans extracting key points and reformatting for social.

**Scheduling:** Humans manually uploading to each platform.

It worked. But it didn't scale. And it burned people out.

We needed to speed up without sacrificing quality.

### The Shift: Identifying What AI Could Actually Help With

We didn't try to "AI all the things." We mapped out our workflow and asked: where is the bottleneck? Where are humans doing work that doesn't require human judgment?

**Research:** Bottleneck. Takes hours. AI could pull data and examples faster than humans.

**Outlining:** Requires strategy. Human judgment. AI could draft, but humans need to direct.

**Writing:** Takes longest. AI could handle first drafts. Humans edit and add personality.

**Editing:** AI terrible at editing its own work. But AI good at catching technical issues (grammar, readability, SEO).

**Social content:** Repetitive. AI could repurpose long-form content into short-form. Humans check tone.

**Scheduling:** Manual but necessary. AI can't do this (yet).

Once we mapped this out, the workflow became obvious.

### The New Workflow: Step-by-Step

Here's our current process, with time breakdowns.

**Step 1: Human defines strategy (15 minutes)**

Before AI touches anything, I define:  
- Topic and angle  
- Target audience  
- Main points to cover  
- Tone and voice  
- SEO keywords  

This is strategy. AI can't do this. I do it in 15 minutes because I know our audience and what works.

**Step 2: AI does research (5 minutes)**

I give AI the topic and ask it to:  
- Pull 10-15 relevant data points  
- Find 3-5 case studies or examples  
- Summarize what competitors are saying  
- Identify gaps in existing content  

AI returns a research doc in 5 minutes. I skim it (10 minutes), pull what's useful, discard the rest.

Total research: 20 minutes instead of 3 hours.

**Step 3: Human creates outline (10 minutes)**

Based on research and strategy, I outline the post:  
- H2 sections  
- Key points per section  
- Where examples go  
- Approximate word count per section  

AI could do this, but I'm faster. And the outline needs human judgment about what angle to take.

**Step 4: AI writes first draft (10 minutes)**

I give AI:  
- The outline  
- Voice examples  
- Constraints (no buzzwords, no corporate-speak)  
- Output format  

AI writes the first draft in ~10 minutes (I'm doing other work during this).

**Step 5: Human edits for voice and quality (45 minutes)**

This is where I add value.

AI's first draft is usually:  
- 70% structurally solid  
- 20% needs rewriting  
- 10% needs to be cut entirely  

I rewrite sections that sound generic. I add personality. I sharpen language. I cut fluff.

This is where the content goes from "technically correct" to "sounds like us."

45 minutes of human editing is faster than 4 hours of human writing.

**Step 6: AI checks technical SEO (5 minutes)**

I paste the edited draft into AI and ask:  
- Is this optimized for [target keyword]?  
- Are there readability issues?  
- Suggest 3 internal links to our existing content  
- Write a meta description  

AI gives feedback. I implement what makes sense.

**Step 7: AI creates social content (5 minutes)**

I ask AI to repurpose the post into:  
- 3 LinkedIn posts  
- 5 Twitter/X threads  
- 2 Instagram captions  

AI generates these. I review and tweak tone (10 minutes).

Total social content creation: 15 minutes instead of 90 minutes.

**Step 8: Human schedules (10 minutes)**

I manually upload and schedule. AI can't do this yet (without complex integrations that aren't worth the effort).

### The Results (Actual Numbers)

**Old workflow:**  
- Time per blog post: 12.5 hours  
- Posts per week: 2-3  
- Quality: Good  
- Team burnout: High  

**New workflow:**  
- Time per blog post: 3.5 hours  
- Posts per week: 4-6  
- Quality: Same or better (because we have more time to edit)  
- Team burnout: Low  

Time saved per post: 9 hours  
Posts per week: +3  
**Total time saved per week: ~27 hours**

But here's the thing: we're not using that extra time to produce *more* content. We're using it to produce *better* content and work on higher-value activities.

[Research phase](/library/stories/the-research-phase-nobody-budgets-for)? We have time for it now.  
[Client strategy work](/services)? We can go deeper.  
[Vispea content](https://vispea.com)? We can be more thoughtful.

Speed isn't the goal. Quality at speed is the goal.

### Where Humans Still Matter (And Always Will)

AI handles speed and structure. Humans handle judgment and quality.

**Humans are better at:**  
- Strategy (what to say, what angle to take)  
- Quality control (is this actually good?)  
- Voice (does this sound like us?)  
- Editing (cutting fluff, sharpening language)  
- Context (does this fit our brand?)  

**AI is better at:**  
- Speed (first drafts in minutes)  
- Research (pulling data quickly)  
- Structure (organizing information)  
- Repurposing (turning long-form into short-form)  
- Technical checks (SEO, readability)  

The partnership is: AI does the heavy lifting. Humans add the soul.

[That's the same philosophy we used for Vispea](/library/stories/you-cant-ai-your-way-into-having-a-soul)—AI can't create identity, but it can help express it faster.

### Common Mistakes We Made (And How to Avoid Them)

**Mistake 1: Trying to automate everything**

Early on, we tried to let AI handle entire posts start-to-finish.

Result: Technically correct content that nobody wanted to read.

Fix: Humans define strategy. AI executes. Humans edit.

**Mistake 2: Not building feedback loops**

We'd get AI output and just publish it.

Result: Mediocre content.

Fix: We review every AI output. Identify patterns in what needs fixing. Adjust prompts to prevent those issues next time.

**Mistake 3: Using AI for the wrong tasks**

We tried using AI for editing its own work. Didn't work. AI is blind to its own generic phrasing.

Fix: AI writes. Humans edit. Never the other way around.

**Mistake 4: No quality checks**

Early outputs would sometimes include incorrect information (AI hallucinates facts).

Fix: Humans verify all data, statistics, and claims before publishing.

**Mistake 5: Letting AI write conclusions**

AI conclusions are terrible. "In conclusion..." or trying to tie everything together with a bow.

Fix: Humans write conclusions. Or we skip conclusions entirely and just end strong.

### The Tools We Actually Use

**For content:**  
- Claude (Anthropic) for drafting—better at matching tone than GPT-4  
- ChatGPT for research—faster at pulling data  
- Grammarly for technical editing  

**For repurposing:**  
- Claude for social content repurposing  

**For SEO:**  
- ChatGPT for keyword analysis and internal linking suggestions  

**For scheduling:**  
- Manual (Buffer for social, WordPress for blog)  

We've tried a dozen "AI content tools." Most are just wrappers around GPT with worse interfaces. We stick with the base models and [our own prompt framework](/library/stories/the-prompt-engineering-framework-we-actually-use-not-the-obvious-one).

### How to Build Your Own Version

You don't need our exact workflow. You need *your* workflow with AI integrated where it makes sense.

**Step 1: Map your current workflow**

Write out every step. Time each step. Identify bottlenecks.

**Step 2: Identify what AI could help with**

Where are humans doing repetitive work? Where is speed the main blocker?

Don't automate judgment. Automate execution.

**Step 3: Start with one part of the workflow**

Don't rebuild everything at once. Pick one bottleneck. Add AI there. Test it for two weeks.

Example: If research takes forever, start there. Let AI pull data. Humans verify and synthesize.

**Step 4: Measure results**

Time saved? Quality maintained? Team happier?

If yes, keep it. If no, adjust or scrap it.

**Step 5: Expand gradually**

Once one piece works, add AI to another part of the workflow.

After 2-3 months, you'll have a workflow that's significantly faster without sacrificing quality.

### Why This Matters

You're competing with people who have the same access to AI tools.

The differentiator isn't using AI. It's using AI *well*.

Most people either:  
1. Don't use AI and get left behind  
2. Use AI poorly and produce garbage  

The winners are the people who figure out where AI helps and where it doesn't.

AI doesn't replace humans. It amplifies the humans who know how to direct it.

Our workflow saves 20+ hours per week. But the real win isn't time saved. It's that we can now produce high-quality content consistently without burning out the team.

That's sustainable. That's scalable. That's how you build something that lasts.
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
