import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'can-i-create-my-own-ai-like-chatgpt';

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

export default async function ChatGPTLikeAI({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for creating your own AI](/images/articles/can-i-create-my-own-ai-like-chatgpt.webp)
*Building your own AI like ChatGPT is possible—but probably not in the way you think.*

You've been using ChatGPT. You've had that moment — the one where it says something surprisingly useful and your brain goes: *wait, could I build something like this?*

Short answer: sort of. Long answer: it depends on what you actually mean by "build your own AI."

Because here's the thing — there's a massive gap between building an AI *product* powered by AI and building the AI *model* itself. Most people asking this question want the first one. Very few have any reason to want the second. Let's sort that out.

## What ChatGPT Actually Is

ChatGPT is a product built on top of GPT-4 (and newer models), which are large language models (LLMs) trained by OpenAI. The model itself is a neural network with hundreds of billions of parameters — basically, a massive mathematical function trained on a huge chunk of the internet, books, code, and more.

Training that model cost OpenAI tens of millions of dollars, required thousands of high-end GPUs running for months, and needed a team of hundreds of researchers and engineers. That's GPT-4. Earlier versions were cheaper — but still wildly out of reach for most people or businesses.

So no, you probably aren't going to replicate that from scratch. And honestly — you don't need to.

## The Three Paths (And Which One Is Actually Yours)

When people say "I want to build my own AI," they usually mean one of three things:

### 1. Train a model from scratch
This is the ChatGPT path. You gather massive amounts of data, set up a distributed computing cluster, run training jobs for weeks or months, then fine-tune and align the model with human feedback.

**Who this is for:** Researchers, large tech companies, and well-funded AI labs.

**Budget range:** $5 million on the low end. Realistically, tens of millions.

**Timeline:** Months to years.

Unless you're running a company that needs to own the model for competitive or regulatory reasons — skip this. There's no reason to reinvent a very expensive wheel.

### 2. Fine-tune an existing model
Instead of training from zero, you take an existing open-source model — like Meta's Llama, Mistral, or Falcon — and train it further on your own data. This teaches it your domain, your tone, your specific knowledge.

**Who this is for:** Companies with proprietary data, developers building specialized tools, teams who need a model that behaves very differently from general-purpose AI.

**Budget range:** A few hundred to a few thousand dollars, depending on compute and dataset size.

**Timeline:** Days to weeks.

This is where things get genuinely interesting. If you run a legal firm and want an AI trained on your internal case notes and templates, fine-tuning is the move. Same if you're in healthcare, finance, or any domain where general knowledge isn't enough and precision matters.

Tools like Hugging Face, Together AI, and Replicate make this much more accessible than it was even two years ago. You don't need a GPU farm. You need a dataset, a clear goal, and a bit of patience.

### 3. Build on top of existing AI via API
This is what most people — including most businesses — should actually do.

You use an existing model (GPT-4o, Claude, Gemini, Mistral, etc.) through an API, then wrap it in your own product, logic, prompts, and interface. The model does the heavy thinking. You control the experience.

**Who this is for:** Everyone. Startups, solo builders, product teams, agencies, businesses.

**Budget range:** Starts at a few dollars a month. Scales with usage.

**Timeline:** You can have something working today.

This is how most "AI-powered" products are built right now. The company you're using for customer support AI, that writing assistant your team loves, that chatbot on your favorite e-commerce site — nearly all of them are apps sitting on top of a model they didn't train.

We've written about [how to build real AI workflows using existing models](/library/stories/how-we-built-an-ai-workflow-that-saves-20-hours-per-week) — including how a well-structured workflow can save 20+ hours per week without touching a single line of model training. That's the path worth reading about if you're a business owner or operator.

## What "Your Own AI" Really Means in Practice

Here's what building your own AI actually looks like for most people:

You pick a model. You write a system prompt that defines how it should behave — its personality, its rules, what it knows about your business. You connect it to your data sources (documents, a database, a CRM). You wrap it in an interface — a chatbot, a Slack bot, a web app. You test it, tweak it, ship it.

That's a real AI product. It behaves differently than ChatGPT because you've shaped it. It knows things ChatGPT doesn't because you've fed it your data. It talks the way you want it to talk because you've told it how.

Is it "your AI"? In every way that matters for 99% of use cases — yes.

## The Open-Source Route

If you want more control — or you're concerned about data privacy and don't want your prompts going to OpenAI or Anthropic — open-source models are worth knowing about.

**Llama 3** (Meta) — Very capable, runs locally or on your own server, free to use.

**Mistral** — Lightweight, fast, great for lower-resource setups.

**Phi-3** (Microsoft) — Surprisingly strong for its size, good if you're running on modest hardware.

You can run these locally using tools like **Ollama** (dead simple, runs on a Mac), **LM Studio** (great UI, no coding needed), or deploy them on cloud infrastructure via services like **Replicate** or **Hugging Face Spaces**.

Running a local model means your data never leaves your machine. That matters a lot in industries where privacy is non-negotiable.

## What You Actually Need to Get Started

Here's a realistic checklist depending on your goal:

**If you want a custom chatbot for your business:**
- An API key from OpenAI, Anthropic, or Google
- A clear system prompt defining how it should behave
- A tool like Voiceflow, Botpress, or a simple web app to host it
- Your relevant documents or data to feed it

**If you want a fine-tuned model:**
- A dataset of examples (inputs and desired outputs)
- Access to a fine-tuning platform (OpenAI has one, so does Hugging Face)
- A clear idea of what behavior you want to change

**If you want to run AI locally:**
- A reasonably modern computer (Apple Silicon Macs work great)
- Ollama installed (free, open-source, takes 5 minutes)
- A model pulled from the Ollama library

None of these require a machine learning degree. They do require curiosity and a willingness to experiment.

## The Question Nobody Asks But Should

Before jumping into building, ask yourself: *what problem am I actually solving?*

A lot of people want to "build an AI" because it sounds exciting. Fair — it is exciting. But the most powerful AI implementations aren't the ones with the fanciest model. They're the ones connected to the right data, given the right instructions, and dropped into a workflow where they save real time or solve a real problem.

A well-prompted GPT-4o with access to your company's knowledge base will outperform a custom-trained model with vague goals every single time.

Start with the problem. Let the technology follow.

For more thinking on how to approach AI practically — without the noise — the [Vispaico articles section](/articles) is a good place to keep learning. We write about real applications, not hypotheticals.

## So — Can You Build Your Own AI?

Yes. Just not in the way the question usually implies.

You can build an AI-powered product today, this week, with tools that exist right now and a budget that won't scare you. You can shape how it thinks, what it knows, and how it talks. You can connect it to your data and make it genuinely useful.

What you probably won't do — and shouldn't need to — is train the underlying model. That's a solved problem. The solved version is available through an API for less than the cost of a coffee per day.

The real opportunity isn't in building a better model. It's in building better things *with* the models that already exist.

That's where the interesting work is happening. And honestly, it's a lot more fun than staring at a GPU dashboard watching a training job crawl toward 1% completion.

Go build something.
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
