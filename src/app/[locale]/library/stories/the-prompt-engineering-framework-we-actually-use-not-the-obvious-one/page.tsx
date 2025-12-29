import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'the-prompt-engineering-framework-we-actually-use-not-the-obvious-one';

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

export default async function PromptEngineeringFrameworkStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![The real prompt engineering framework that works](/images/articles/prompt-engineering-framework-vispaico.webp)
*How to write prompts that actually get results*

You've probably read the basic prompt engineering advice.

"Be specific." "Give examples." "Use clear language." "Structure your prompt."

All true. All generic as hell.

And honestly? If you're just following generic best practices, you're getting generic results. You sound like everyone else using AI. Same quality ceiling, same bland output.

We stopped following the obvious framework years ago.

Instead, we built something that actually works in real work. Not in examples or tutorials, but when you're trying to get actual usable content from AI on Tuesday at 3pm and you don't have time to iterate seven times.

This is what we use. Daily. For actual client work.

## Why the Obvious Prompting Advice Is Only Half Right

Most prompt engineering guides tell you the same thing:

1. Be clear about what you want
2. Give examples
3. Specify constraints
4. Structure your output

Correct, but incomplete. It's like telling someone how to write by saying "use words" and "make sentences."

The problem with the obvious approach: it treats every prompt the same. Every task gets the same structure. Every AI gets the same instructions.

But AI doesn't work that way. Different tasks need different structures. Different models respond better to different framings. Different contexts require different approaches.

The framework we use is more like a decision tree than a template.

## The Framework (Not What You'd Expect)

Here's what we actually do:

### Step 1: Define the Task Type First (This Matters More Than You Think)

Before you write a single prompt, you need to know: What kind of task is this?

**Information synthesis:** The AI needs to take multiple sources and combine them into something coherent.

**Creative output:** The AI needs to generate something that didn't exist before.

**Editing/refinement:** The AI has content and needs to make it better.

**Decision support:** The AI needs to help you think through options.

**Execution:** The AI does work to a specific specification (write X, format Y, deliver Z).

Why this matters: Each task type needs a different approach. If you're doing information synthesis, you need sources and structure. If you're doing creative output, you need examples and tone guidance. If you're doing editing, you need the original content and clear criteria for success.

We start here. Every time. "What's the actual task?" Not "write a prompt," but "what am I actually asking the AI to do?"

### Step 2: Choose Your Model Strategically (Claude vs GPT vs Others)

Different models have different strengths.

Claude (especially Claude Sonnet) is better at:

- Understanding context and nuance
- Following complex, detailed instructions
- Reading long documents
- Editing and refinement work
- Reasoning through complex problems

GPT-4 is better at:

- Creative writing
- Image understanding
- Some specialized domains
- Fast responses

Smaller models (Haiku, GPT-4 Mini) are better at:

- Speed-dependent work
- Repetitive tasks
- Cost-sensitive operations
- Simple, straightforward requests

We don't use the same model for everything. We pick based on the task.

Writing a 3000-word article? Claude with 200k context window. Ten-second social media post? Haiku. Photo analysis? GPT-4V.

This is overlooked constantly. People pick a model and stick with it. But the model you pick actually affects what you get back.

### Step 3: Set the Context (Not Just the Topic)

Most prompts start with "write about X."

We start with "you are X, writing for Y, in this situation Z."

Example:

"You are a growth strategist at a B2B SaaS company. You're writing for business owners who've had bad experiences with growth agencies. Your job is not to convince them that we're great, but to show them we understand their frustration. You're skeptical of hype. You value data and real examples over promises."

This context frame shapes everything that comes after. The AI now knows who it's writing as, who it's writing for, and what matters to the audience. Without this, it defaults to generic professional tone.

The context frame is the difference between writing that sounds generic and writing that sounds like you.

### Step 4: Task Definition With Layers

This is where we deviate from standard prompting.

Instead of one big instruction, we layer it:

**Layer 1: Primary objective**
"Write an SEO article about forecasting accuracy."

**Layer 2: Specific deliverable**
"Write the 'why most forecasts fail' section. 400-500 words."

**Layer 3: Audience-specific angle**
"Angle: skeptics who've been burned by agencies. Tone: acknowledge the problem, validate their frustration, show you understand it."

**Layer 4: Structural requirements**
"Structure: start with what most agencies do wrong, use specific examples, explain why it fails, hint at better way."

**Layer 5: Style guardrails**
"Style: short sentences, no corporate language, conversational. Use 'you' not 'the reader.' Use contractions."

**Layer 6: Content requirements**
"Include: one specific example of a failed forecast, one stat about how often this happens."

**Layer 7: Format specification**
"Format: markdown. Bold key terms. Short paragraphs (2-3 sentences max)."

This looks like overkill. But it's not. Each layer removes ambiguity. By layer 7, the AI isn't guessing. It knows exactly what you want.

And yes, it takes more time to write. But it cuts your iteration cycles from 5-7 down to 1-2. Net time saved: huge.

### Step 5: The Examples Section (Shows, Don't Tell)

We always include examples. But not generic examples. Specific examples from our actual work.

Example of tone:
"Here's how we usually write this:

'Most agencies give one number. "You'll get 1,000 visits." Then when you hit 700, they disappear. We don't do that. We show three scenarios.'

Match that directness and cynicism."

Example of structure:
"Here's the structure we're going for:

—Problem statement (1 paragraph)
—Why most solutions fail (2 paragraphs)
—What we do instead (2 paragraphs)
—Why this matters (1 paragraph)"

The AI doesn't have to guess. You showed it.

### Step 6: Explicit Exclusions (What NOT to Do)

This is the secret sauce that most people skip.

We always tell the AI what to avoid.

"Don't:
- Use corporate language (leverage, optimize, streamline, facilitate)
- Hedge with 'could be,' 'might be,' 'some say'
- Use generic adjectives (cutting-edge, seamless, powerful, robust)
- Be preachy or inspirational
- Overcomplicate simple ideas
- Assume the reader knows anything
- Use exclamation marks
- Try to be clever with wordplay"

This sounds negative, but it's actually the best quality control. Without these guardrails, the AI defaults to its training data (which is full of corporate language and hedging).

By telling it what NOT to do, you're forcing it toward specificity.

### Step 7: Success Criteria (How You'll Know It Works)

This one's weird but crucial.

After giving all instructions, we add:

"You'll know this is successful if:
- A skeptical person would read it and feel like you understand their frustration
- No sentence feels like corporate copy
- Someone could quote a specific line from this and sound authentic
- The reader knows exactly what's wrong and gets a hint at a solution
- The tone matches the example I gave you"

This gives the AI (and frankly, yourself) a way to measure if the output actually works.

### Step 8: Explicit Permission to Adapt

Final piece:

"If you think there's a better way to structure this or a clearer way to explain it, do that. These are guidelines, not rules. The goal is clarity and authenticity, not perfect compliance with structure."

This prevents the AI from being robotic about following instructions. It gives permission to think, not just execute.

## Real Example: Full Prompt From Last Week

Let me show you an actual prompt we used:

---

**Task Type:** Information synthesis + creative output

**Model:** Claude Sonnet

**Context:** You're a content strategist at Vispaico. You're writing for business owners considering hiring an AI services agency. They're skeptical. They've gotten burned before. Your goal is not to sell them, but to help them understand what actually matters when evaluating an agency.

**Primary Objective:** Write a section for our services page addressing "What to look for when hiring an AI services company"

**Specific Deliverable:** 600-800 words. This will be one section on our pricing page.

**Audience Angle:** Skeptics who've been pitched by multiple agencies. They've heard big promises before. They want to know what actually matters.

**Structure:**
- Open with what most agencies promise (paint a picture)
- Explain why those promises don't work
- Give 4 specific things to actually look for
- End with why this matters for them

**Tone:** Cynical but not mean. Helpful but not preachy. Direct. Match this:
"Agencies promise you the world. Then you discover they don't actually know anything. You've seen this. So we're not going to promise. We're going to show you what actually matters."

**What to avoid:**
- Marketing speak
- Hype about AI
- Guarantees of any kind
- Preaching about our values
- Generic advice that could apply to any service

**What to include:**
- One real example of what bad AI agencies do
- One specific thing to ask an agency that reveals if they know what they're doing
- Acknowledgment that picking wrong costs real money
- Hint (not explain) at our approach

**Format:**
- Markdown
- Bold key phrases (2-3 max per section)
- Short paragraphs (never more than 4 sentences)
- Use "you" directly

**This will work if:**
- A skeptical prospect reads it and feels like we GET their frustration
- They come away knowing one specific thing to ask other agencies
- The tone feels like a real person wrote it, not a marketing department
- They can see why our approach is different without us saying "our approach is different"

---

That prompt takes maybe 5 minutes to write. The output came back 90% ready to use. One quick edit to tighten one section. Done.

Compare that to "write something about hiring agencies" and iterating 6 times.

## Why This Framework Actually Works (And Why Your Instincts Were Right to Suspect the Generic Advice)

The framework works because it removes ambiguity at every layer.

Bad prompt: "Write about X" → AI guesses at everything → Generic output

Good prompt: Multiple layers of context, examples, constraints, success criteria → AI knows exactly what you want → Specific output

It takes longer to write. But it cuts revision cycles dramatically.

We get useful output on first iteration 60% of the time. Useful on second iteration 35% of the time. Never need more than 2 iterations anymore.

Compare that to people using the basic advice who are on iteration 5 still getting garbage.

## Common Mistakes People Make (Even When Using Good Framework)

**Mistake 1: Too many examples**
More examples doesn't help. One great example beats three okay ones.

**Mistake 2: Vague success criteria**
"Make it good" isn't a success criterion. "Someone skeptical will feel like we understand them" is.

**Mistake 3: Forgetting to exclude**
The "what not to do" section is where you prevent generic output. Don't skip it.

**Mistake 4: Not matching your actual writing**
If your example doesn't sound like you, the AI won't sound like you either.

**Mistake 5: Being too prescriptive on structure**
Give structure, but leave room for the AI to improve it. "If there's a better way, do that" is powerful.

## How to Implement This (Start Small)

You don't need to do all 8 steps on everything.

Quick task (social post, short email): Layers 1, 2, 5, 7

Medium task (section of content): Layers 1-5, 7, 8

Complex task (full article, important client work): All layers

Start with one task and include all layers. Feel the difference. Then scale back where you don't need it.

## The Real Insight (Why This Beats the Obvious Approach)

The obvious prompt engineering advice treats all tasks like they're the same. All models like they're the same. All contexts the same.

Real work isn't like that.

A social media post needs different handling than a technical article. Claude handles some tasks better than GPT. Context changes everything.

The framework accounts for this. It's decision-driven, not template-driven.

That's why it works in real conditions, not just in tutorials.

## One Final Thing: The Feedback Loop

Here's the part that separates people who get good at prompting from people who stay mediocre:

Every prompt you write, you track what worked and what didn't.

"I said 'be conversational' and got stiff writing. Next time I'll use an example instead."

"I included too many constraints and it got timid. Less is more here."

"This model is better for this task than that model."

You're constantly refining your own prompting based on results.

People who do this get exponentially better. People who just follow a template plateau.

## Further reading

- [This is the detailed framework for what we mentioned in Article 7. Read this after Article 7 if you want to go deeper on the mechanics.](/library/stories/what-happens-when-you-treat-llms-like-employees-not-magic-boxes)
- [This framework helps prevent AI output from sounding fake by being specific about what you want.](/library/stories/why-your-ai-writing-sounds-fake-and-how-to-fix-it)
- [Understanding context windows helps you know why layer 1 (context) matters so much.](/library/stories/llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it)

## External resources

- [OpenAI: prompt engineering guide](https://platform.openai.com/docs/guides/prompt-engineering)
- [Anthropic: long-context prompting basics](https://docs.anthropic.com/claude/reference/getting-started-with-the-api)
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
