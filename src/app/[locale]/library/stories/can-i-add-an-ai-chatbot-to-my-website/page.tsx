import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'can-i-add-an-ai-chatbot-to-my-website';

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

export default async function ChatbotOnWebsite({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for AI chatbot on website](/images/articles/can-i-add-an-ai-chatbot-to-my-website.webp)
*Adding an AI chatbot to your website is completely doable — and for most businesses, it's worth doing.*

Yes — you can add an AI chatbot to your website. And depending on what you need, it can take anywhere from 20 minutes to a few weeks. The hard part isn't the tech. It's knowing what you actually want before you start.

So let's sort that out first.

## What Are You Actually Trying to Do?

Before picking a tool, be clear on the job. A chatbot on a website can do a lot of different things:

- Answer questions about your products or services 24/7
- Collect leads (name, email, what they need) before handing off to a human
- Book appointments directly in the chat window
- Walk someone through a decision ("Which plan is right for me?")
- Handle customer support so your inbox doesn't explode
- Qualify prospects before they get to a sales call

Each of these has a slightly different setup. A chatbot that answers FAQs is very different from one that books meetings or processes refunds. Knowing your goal upfront saves you from building the wrong thing.

## Chatbot vs. AI Agent — What's the Difference?

People use these words like they mean the same thing. They don't.

**A chatbot** follows a script. You define the questions, you define the answers, you map out the flow. If someone asks something outside the script, it either gives a generic fallback or breaks. Rule-based chatbots have been around for years. They're reliable, predictable, and limited.

**An AI chatbot** — the kind powered by a large language model like GPT-4 or Claude — actually understands language. You don't have to map every question. It reads what the person wrote, figures out what they mean, and responds accordingly. It can handle variations, follow-ups, and even tone. It feels like talking to a person.

**An AI agent** goes one step further. It doesn't just respond — it acts. An AI agent can check your calendar and book a meeting. It can look up a customer's order and process a change. It can search your knowledge base, send an email, update a CRM record. It has tools, and it uses them to complete tasks on your behalf.

Think of it this way: a chatbot answers questions. An AI agent gets things done.

Most websites right now sit somewhere between "smart AI chatbot" and "basic agent." Full agents that take meaningful actions are more complex to build, but they're becoming much more accessible — and [the Vispaico AI studio](https://www.vispaico.com/library/ai) has specific builds designed to bridge exactly that gap.

## How to Create an AI Chatbot for Your Website

There are three real approaches, and the right one depends on how much control you want versus how fast you need to move.

### Option 1: Use a no-code chatbot platform

This is the fastest path. Platforms like **Tidio**, **Intercom**, **Crisp**, **Chatbase**, **CustomGPT**, or **Voiceflow** let you build and deploy an AI chatbot without writing a single line of code.

Here's the general flow:

1. Sign up for a platform
2. Upload your content — your website URL, FAQs, product docs, PDFs
3. The platform uses that content to train a chatbot that knows your business
4. Customize the look (colors, name, avatar, greeting message)
5. Copy a small snippet of JavaScript and paste it into your website's HTML
6. Done — the chat widget appears on your site

This works well if you have a relatively straightforward use case. Customer questions, product info, lead capture. The chatbot will know your stuff and respond sensibly.

The catch: you're working inside someone else's system. You have limits on how deeply you can customize behavior, what data you can connect, and how the AI actually thinks.

### Option 2: Build with an API and a front-end

If you want full control over how the chatbot thinks, responds, and connects to your data — you build it yourself using an AI API.

The stack looks like this:

- **The brain:** GPT-4o (OpenAI), Claude (Anthropic), or Gemini (Google) via their API
- **The memory:** Your documents, knowledge base, or database, retrieved dynamically as the conversation needs it
- **The interface:** A chat widget built in React, Vue, or even plain HTML/CSS
- **The backend:** A simple server (Node.js, Python) that handles the conversation logic

You write a system prompt that tells the AI who it is, how it should behave, what it knows, and what it shouldn't say. You feed it your content. You control the whole experience.

This is how serious products are built. It's more work upfront, but the result is actually yours — not a white-labeled version of someone else's product.

### Option 3: Hire someone to build it for you

If you don't want to get into the technical side and the no-code platforms don't give you enough, working with a team who builds these daily is the most efficient move. You get a custom product without the learning curve.

This is where an [AI studio like Vispaico](https://www.vispaico.com/library/ai) comes in — building AI chatbots and agents that connect to your actual business data and fit into your website the way you actually want, not the way a template allows.

## How Do I Place an AI Agent on My Website?

Once you've built (or had built) your chatbot or agent, placing it on your website is usually the easy part.

**The embed snippet method** is the most common. You get a short block of JavaScript and paste it before the closing body tag on every page you want the chatbot to appear. On most website builders — WordPress, Webflow, Squarespace, Wix, Shopify — there's a dedicated place for "custom code" or "footer scripts." Drop it there once and it appears everywhere.

**If you're using a CMS like WordPress**, there are plugins that handle this without touching code at all. Install the plugin, connect your account, done.

**If you built a custom chatbot**, your developer will give you a component or widget to embed — same idea, slightly more tailored to your setup.

A few things worth thinking through before you go live:

- **Where should the chat appear?** Every page, or just specific ones (like pricing, contact, or product pages)?
- **When should it open?** On page load, after a few seconds, when someone tries to leave?
- **What's the first message?** This matters more than most people think. "How can I help you?" is fine. "Looking for pricing? I can help with that." is better.
- **What happens when the bot can't answer?** Always have a handoff — a way to get a human, or at least a contact form.

## How Much Does a Chatbot for a Website Cost?

Wide range here. Let's be direct about it.

### Free / very cheap
Some platforms have free tiers — Tidio, Crisp, and a few others offer basic chat for free. You get limited conversations per month, limited customization, and usually a "Powered by [Platform]" badge. Good for testing. Not great for a real business.

### $30–$200/month — no-code platforms
Most mid-tier chatbot platforms fall here. You get more conversations, better AI, some customization, and the ability to connect your own content. Good for small to medium businesses that need something working fast without custom development.

**Examples:** Chatbase (~$19–$99/month), CustomGPT (~$49–$99/month), Tidio's AI plan (~$29–$99/month depending on features).

On top of the platform fee, if you're using a powerful model like GPT-4o under the hood, you pay API usage costs — typically fractions of a cent per message, but worth tracking if volume is high.

### $500–$5,000 — custom build, one-time
A developer or small agency builds a custom chatbot using an AI API, connected to your specific data, with a front-end that matches your brand. You pay once (plus hosting), and you own it.

Good for businesses that need something specific, have unique data, or want to avoid ongoing platform fees.

### $5,000–$25,000+ — full AI agent
This is a custom AI agent that actually takes actions: books meetings, queries your database, updates records, sends emails, handles workflows. The complexity goes up, and so does the investment. But for the right business, the return is obvious — an agent handling what would otherwise need a full-time person.

If you're thinking at this level, it's worth reading through what's possible with [Vispaico's AI builds](https://www.vispaico.com/library/ai) before you commit to a direction.

### Ongoing costs to keep in mind
- **AI API costs** (if not on an all-inclusive platform): usually $5–$100/month depending on traffic
- **Hosting** if self-hosted: $10–$50/month
- **Maintenance and updates**: if someone built it for you, factor in occasional tweaks

## What to Watch Out For

A few things that trip people up:

**Garbage in, garbage out.** The chatbot is only as good as the information you give it. If your product descriptions are vague or your FAQs are outdated, the chatbot will reflect that. Spend time on the content before worrying about the widget.

**No fallback plan.** If the bot hits a wall — something it can't answer — what happens? A dead end frustrates users. Always build in a way to escalate to a human or at least capture their question for follow-up.

**Wrong placement.** A chatbot on every single page isn't always better. On a checkout page, it might distract. On a pricing page, it might be the difference between a conversion and a bounce. Think about where in the journey a person most needs help.

**Overpromising.** Don't name your bot "AI Assistant that knows everything." Set honest expectations. Users forgive limitations; they don't forgive being misled.

## The Short Version

Adding an AI chatbot to your website is completely doable — and for most businesses, it's worth doing. The spectrum runs from a no-code widget live in an hour to a custom AI agent built around your exact workflow.

The honest question isn't "can I do this?" It's "what do I actually need this to do, and what's the right way to build it?"

If you're still figuring that out, the [Vispaico articles](https://www.vispaico.com/en/articles) are a good place to keep reading — practical stuff, no fluff, written for people running real businesses.

And if you're ready to build something specific, [Vispaico's AI studio](https://www.vispaico.com/library/ai) is where to start.
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
