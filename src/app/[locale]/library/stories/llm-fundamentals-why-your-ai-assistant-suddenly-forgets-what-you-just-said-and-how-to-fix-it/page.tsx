import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
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

export default async function LLMFundamentalsStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Haiphong-Vietnam at night, thats where i write](/images/articles/llm-fundamentals.webp)
*Haiphong, Vietnam - that's where i write...*

You know that frustrating moment when you're chatting with an AI tool and it acts like it has amnesia? You mentioned something three messages ago, and suddenly it's acting like you never said it.

Yeah. That's the context window doing its thing. And honestly, understanding this one concept will change how you work with AI forever.

Think of a Large Language Model's context window like your actual working memory during a long day. You can hold a certain amount of information in your head right now—your current task, the last few things someone told you, what you need to do next. But if someone throws too much at you all at once, or you're having a really long, complicated conversation, something's gotta give. Your brain starts dropping the older stuff to make room for the new.

That's exactly what's happening inside the AI.

> **TL;DR**
> - LLMs read everything as tokens inside a fixed context window, so once you exceed that budget the oldest parts of the conversation get dropped.
> - System prompts, tool calls, and file uploads all consume that same window, which means sloppy document conversion or endless back-and-forth eats your memory fast.
> - When sessions run long, pause to summarize or restart with a concise brief so the model keeps the important stuff instead of hallucinating.
> - Giant context windows sound great but they’re slower, pricier, and often noisier, so it’s smarter to manage context deliberately than to brute-force it.
>
> [Skip to details](#the-basics-whats-actually-going-on)

## The Basics: What's Actually Going On?

Everything an LLM processes gets broken down into tiny pieces called **tokens**. These aren't whole words—they're more like building blocks. The word "unbelievable" might become three separate tokens. A comma? That's a token. A space? Sometimes that's its own token. The AI reads through all of these tokens to understand what you're asking.

Now, here's the thing: every model has a maximum number of tokens it can handle at once. That limit is the **context window**. It includes everything—your current message, your entire conversation history, and whatever response the model is about to generate. Once you hit that ceiling, the oldest parts of the conversation start getting dropped. The model literally forgets them.

Want to optimize your LLM workflows for maximum productivity? Understanding context window management is essential for anyone implementing AI tools in their business.

## The Hidden Mechanics That Matter

Beyond just knowing about the context window, there are a few other pieces that affect how well your AI assistant actually works.

**System prompts** are like giving the model a set of personality instructions. You're basically saying: "Hey, I want you to be friendly," or "Talk like a technical expert," or "Keep responses under 100 words." It's a special piece of text that runs in the background, shaping how the model behaves throughout your entire conversation. Think of it as the model's rulebook.

Then there's something called **function or tool calls**. This is when your AI assistant needs to do something beyond just talking to you—maybe it needs to pull data from a spreadsheet, send an email, or fetch information from a website. These actions get woven into the context too, and the model has to decide when and how to use them. It's like giving the AI a set of powers it can activate when needed.

## The File Format Problem Nobody Warns You About

Here's where people get tripped up: if you upload a PDF, a Word document, an Excel sheet, or an image to an LLM, the model can't just read it the way your brain does.

The model needs that file converted into text first. Behind the scenes, the system extracts the content and turns it into tokens that the AI can actually process. If that conversion doesn't happen properly—or doesn't happen at all—the model either throws an error or just ignores the file entirely. It's like trying to have a conversation with someone who doesn't speak your language.

This matters because when you're evaluating AI platforms for your business needs, you want to know if they handle document file conversion properly. It should be seamless. It usually isn't.

## What Happens When You Run Out of Room?

Let's say you've got a really long conversation going. You keep asking questions, the model keeps answering, and then suddenly... it starts acting weird. Maybe it's repeating itself. Maybe it forgot something you mentioned earlier. Maybe the quality of responses just drops.

That's because you've exceeded the context window. The oldest parts of your conversation got truncated to make room for the new stuff. The model literally doesn't have access to that information anymore.

For complex multi-turn LLM conversations and advanced AI implementation strategies, this is critical to understand.

If you're working on something that requires a lot of back-and-forth—like writing a long document, building a complex system, or having a deep research session—you've got options. You can summarize the important bits before starting a new conversation. You can ask the AI to create a recap of everything so far. Or you can just start fresh with a quick summary of what you need.

It's tedious, sure, but it beats watching your AI assistant forget half of what you already established.

## The Paradox of Extra-Long Context Windows

Some newer models brag about having massive context windows—we're talking a million tokens or more. That sounds amazing, right? You could theoretically dump an entire book into one conversation.

And yes, theoretically, that gives the model more room to work with. It can understand longer documents. It can handle more complex, multi-step tasks.

But here's the catch: bigger context windows aren't free. They require way more computing power. They use more memory. They make responses slower and way more expensive to run. The hardware has to be seriously beefy to handle it. And the engineering complexity goes through the roof.

Beyond a certain point, you also hit a weird problem: the model's performance actually starts getting worse, not better. There's diminishing returns. Too much context, and the signal gets lost in the noise.

## Putting It All Together

So here's what you actually need to know:

Your context window is the total token budget you have for a conversation—input, history, and output all combined. Tokens are the tiny chunks the model reads. Your system prompt guides how the model behaves. Tool calls let it take actions. Files need to be converted to text first. And when you run out of space, the oldest stuff disappears.

Understanding this stuff isn't just trivia. It's the difference between working *with* AI tools effectively and fighting them constantly.

The next time you're setting up an AI workflow—whether you're using it for customer research, document analysis, or building AI-powered solutions for your team—keep this in mind. Think about how long your conversations might get. Think about whether you need to break things into smaller sessions. Think about whether your files are being converted properly.

Because honestly? Most people don't. And that's why they end up frustrated.

You've got this.

If you want to know more, come around for a coffee [here at Vispaico.](https://www.vispaico.com/)

Have a great time, talk soon.
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
