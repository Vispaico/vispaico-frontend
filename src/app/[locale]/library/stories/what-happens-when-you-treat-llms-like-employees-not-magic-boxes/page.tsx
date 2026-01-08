import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'what-happens-when-you-treat-llms-like-employees-not-magic-boxes';

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

export default async function LLMsLikeEmployeesStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Framework for managing AI as a team member](/images/articles/treat-llms-like-employees-vispaico.webp)
*Framework for managing AI as a team member*

You ever hire someone and immediately realize you're bad at explaining what you want?

You say "make this document better" and they ask a hundred clarifying questions. You say "write some copy" and they come back with something that's technically correct but completely useless. You say "research this topic" and they give you a wall of bullet points when you needed a narrative.

That's exactly what happens when you use AI wrong.

Most people treat LLMs like magic boxes. You drop in a request, magic happens, good stuff comes out. Doesn't work that way.

What actually works? Treat them like junior employees. Which sounds like more work upfront, but it's not. It's the difference between getting garbage and getting something actually useful.

> **TL;DR**
> - LLMs behave like junior hires: without context, examples, and constraints, they default to bland, average output.
> - A proper brief covers audience, job-to-be-done, tone samples, format, and forbidden language so the model knows the assignment.
> - Review drafts like manager feedback—clarify what's off, iterate 2-3 rounds, and reserve human judgment for opinions, ethics, and brand voice.
> - Use AI for execution (structure, tightening, research) and keep strategy, stakes, and final polish in human hands.
>
> [Skip to details](#the-problem-youre-not-actually-briefing-them)

## The Problem: You're Not Actually Briefing Them

Here's what most people do:

"Write a blog post about productivity."

That's it. That's the entire prompt.

Then they're shocked when they get back some generic, corporate garbage that could've been written by any AI tool about any topic.

Because that's exactly what happened. The AI, having no context about who you are, what you write like, what angle you care about, or what your actual audience needs, did the most average thing possible.

It's like hiring an employee, telling them to "do something productive," and then wondering why they reorganized the office supply closet instead of working on the project you actually needed.

You didn't tell them what to do. You got chaos.

## How We Actually Brief an AI (The Real Process)

When we have work for an AI, we actually brief it. Like we would a junior team member.

Here's what a real brief looks like:

**Step 1: Context**

"You're writing for Vispaico. We're an AI and branding agency. Our audience is business owners and marketers who want to use AI well but are tired of generic outputs. They're skeptical of hype. They're smart. They've probably been burned by bad advice before."

This takes 30 seconds. But now the AI isn't writing for the void. It's writing for a specific person.

**Step 2: The Actual Task**

"Write the intro section for an article about how to make AI writing sound human. The intro should be 2-3 paragraphs. It should open with a relatable problem (the feeling of reading AI-generated copy), validate that this is real, and then promise to solve it."

Not "write something about AI writing." But specifically what section, how long, what it should do.

**Step 3: Examples of What You Mean**

"Here's what good opening looks like for us:

'You know that feeling when you read something and immediately know it was written by an AI? Not because it's wrong. Just because something feels... off. Corporate. Soulless.'

Keep that direct, conversational tone. Short sentences. No corporate language. Like you're talking to a friend who actually gets this."

This is crucial. Showing the AI what you're after beats describing it.

**Step 4: What to Avoid**

"Don't use: cutting-edge, revolutionary, streamline, leverage, optimize, pivotal, seamless. Don't hedge with 'it could be argued' or 'some might say.' Don't be overly clever or try to be funny. Serious but casual."

Now the AI knows what not to do. Without this, it falls back on its training (which is full of corporate language).

**Step 5: The Format**

"Format as raw markdown. No title. Just the content. Make paragraphs short (2-3 sentences max). Use bold for emphasis, not italics."

Technical detail, but it saves you reformatting time.

That whole brief takes maybe 3-4 minutes to write. And suddenly the AI produces something 10x more useful than the one-sentence prompt.

## The Difference Between a Bad Prompt and a Good Prompt

Bad prompt:

"Write about customer service strategies."

Good prompt:

"Write a 500-word section for a LinkedIn post about why most customer service training doesn't work. The audience is mid-level managers who are frustrated with turnover. The tone should be slightly sarcastic but not mean. Start with a specific problem (most training is theater), back it up with a real example, then suggest one specific thing they could do differently. Use short paragraphs and conversational language. Avoid business jargon. Don't be inspirational, be practical."

The good prompt takes 45 seconds longer to write. The output is 10x better. That's the math.

## How We Review What the AI Produces

This is the part that matters most.

The AI produces a draft. You look at it. You ask: Is this what I actually wanted?

Half the time, the answer is no. Not because the AI failed, but because your brief wasn't clear enough.

So you don't just accept it or reject it. You do what you'd do with a junior employee:

**You explain what's wrong.**

"This is too formal. I wanted conversational. Let me show you what I mean. Here's a paragraph rewritten the way I'm thinking about it. Rewrite the rest to match that tone."

Or:

"You went too broad. I don't need all five strategies. Pick the one I care most about and go deep on that instead."

Or:

"This is accurate but boring. Add a specific example from my industry. Make it real."

Then you re-prompt with that feedback. Usually takes 2-3 iterations to get something actually good.

This is why treating AI like an employee works. Employees get feedback. They adjust. They learn what you want. AI does the same thing.

## When to Trust It, When to Override It

This is where people get confused.

You don't trust AI because it's right. You trust it on specific things where it's reliably good, and you override it on things where it tends to be weak.

**Trust AI for:**

- Tightening language. It's good at cutting fluff, making sentences punch.
- Finding examples or structure. "Give me 5 different ways to structure an article about X." It'll brainstorm options.
- Speed on repeatable tasks. If you've shown the AI the pattern, it can do similar work faster.
- Research speed. Finding information and compiling it quickly.
- Iteration. Rewriting something you've already written to be better.

**Override AI for:**

- Original opinion. Don't ask it what you should think. You think. It helps you express it.
- Audience understanding. You know your audience. It doesn't.
- Brand voice. Your voice isn't something you can outsource. You write it, then AI matches it.
- Ethical calls. Any decision that requires judgment about what's right belongs to you.
- Anything where the stakes are high. Client work, anything with your reputation on it, anything that costs money if it's wrong.

The pattern: Use AI as a tool for execution. Keep the thinking and deciding for yourself.

## Real Example: How We Actually Worked With AI on Recent Content

Let me walk you through what we actually did this week.

**The task:** Write a technical article about SEO forecasting accuracy.

**The brief we gave the AI:**

"We're writing for business owners and marketers. They're skeptical of agency promises. They've been burned before. The article needs to explain our forecasting model based on real data from 23 clients over 3 years. Key points: Most forecasts are wrong because of optimism bias and hidden methodology. We use three scenarios (conservative, likely, optimistic) instead of one number. We track monthly and adjust.

Write the section explaining the three-scenario model. 400-500 words. Keep it direct. Show the math. Use real percentages. Tone: honest and slightly sarcastic about how agencies usually mess this up. Structure: explain what most agencies do wrong, then explain what we do instead. End with why this matters for the client."

**What the AI gave back:**

Technically solid. Good structure. But too formal. Too many hedging phrases. Some sentences were too long.

**Our feedback:**

"This reads like a textbook. Make it conversational. Shorter sentences. More direct. Here's one paragraph rewritten the way I want it:

'Most agencies give one number. "You'll get 1,000 visits." Then when you hit 700, they disappear. We don't do that. We show three scenarios. Conservative, likely, optimistic. You always know we're tracking the middle one, but you have visibility into the range.'

Rewrite the whole section to match that directness."

**What came back:**

Much better. Conversational. Direct. Real.

**Our final edit:**

Cut one paragraph that was extra. Changed one example. Done.

From prompt to final version: 15 minutes. Output quality: 9/10.

If we'd just said "write about our forecasting model," it would've taken 30 minutes and come back at 5/10 quality.

## The Framework (What Actually Works)

Here's the framework we use for every AI task:

**1. Context first.** Who is this for? What do they care about? What do they already know?

**2. Specific task.** Not "write something." But exactly what you need. Section? Full piece? What's the job?

**3. Examples.** Show what good looks like. One paragraph of the tone you want. One example of the angle you're going for.

**4. Constraints.** Length. Tone. What not to do. Style guidelines. Format.

**5. Draft review.** Read what you got. Is it actually what you wanted? Or does it need adjustment?

**6. Feedback.** Don't accept or reject. Explain what's wrong and what you want instead.

**7. Iteration.** Usually 2-3 rounds gets you to "actually good."

**8. Final edit.** Polish it yourself. Cut corporate language. Add specificity. Make it yours.

This whole process takes longer than just hitting generate. But you end up with something that's actually useful, something that sounds like you, something that works.

## Why This Matters More Than You Think

Most people use AI and get mediocre results. Then they think AI is the problem.

It's not. The problem is they didn't brief it properly.

They didn't give it context. They didn't show it what they wanted. They didn't provide feedback. They didn't iterate.

Then they're shocked the output is generic.

Compare that to someone who treats AI like an employee. Briefs it well. Reviews the work. Gives feedback. Iterates. Polish.

Same tool. Wildly different results.

The difference isn't the AI. It's the person using it.

## One Thing Nobody Talks About: When to Admit AI Can't Do It

Sometimes the answer is "don't use AI for this."

If the task requires original creative thinking, if it needs your specific voice, if it needs judgment calls that only you can make, do it yourself.

AI is great at support work. Terrible at doing the core thinking.

The moment you catch yourself asking "should I use AI for this," the answer is usually no.

The things that benefit most from AI are things you already know how to do, just want to do faster.

## The Real Test: Does It Sound Like You?

Here's how to know if your AI work is actually good:

Someone reads it. They don't think "AI wrote this." They think "this person knows what they're talking about."

If they can tell it was AI, you didn't iterate enough. Go back and edit.

Polish until it reads like you, not like a robot.

That's the only standard that matters.

## Further reading

- [Remember context windows? Same principle applies here. Clear context in your prompt = better output from the AI.](/library/stories/llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it)
- [This article goes deeper into editing and making AI output sound human. Read this to level up after you've mastered the briefing process.](/library/stories/why-your-ai-writing-sounds-fake-and-how-to-fix-it)
- [Real example of how we used this exact briefing process when writing the SEO forecasting article.](/library/stories/how-to-actually-predict-seo-results-without-lying-about-it)
- [Before you brief an AI, do the research. Know what good looks like in your space. Then brief from that knowledge.](/library/stories/the-research-phase-nobody-budgets-for)

## External resources

- [OpenAI: prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic: API overview and context lengths](https://docs.anthropic.com/claude/reference/api-overview)
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
