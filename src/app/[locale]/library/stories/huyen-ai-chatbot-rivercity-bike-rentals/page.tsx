import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'huyen-ai-chatbot-rivercity-bike-rentals';

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

export default async function HuyenChatbotStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for Huyen AI chatbot](/images/articles/Huyen-ai-chatbot-rivercity-bike-rentals.webp)
*A multilingual, voice-enabled AI chatbot built for a motorbike rental business in Haiphong, Vietnam.*

**Topics covered in this article:**
- Who Huyen is and what she was built to do
- The real problem RiverCity Bike Rentals needed to solve
- How the chatbot handles rentals, travel info, and local transport questions
- The tech behind it — explained without a computer science degree
- Voice interaction and multilingual support
- How Huyen knows when to hand off to a human
- What's coming next

---

Every rental business in a tourist city has the same problem. Someone lands at the airport, wants a motorbike for three days, has five questions, and it's 11pm. No one's at the desk. The website answers some of it. WhatsApp gets a message that won't be seen until morning.

That gap — between what a traveler needs right now and when a human can actually respond — is exactly what Huyen was built to close.

---

## Who Is Huyen?

Huyen is an AI chatbot built for **RiverCity Bike Rentals**, a motorbike and car rental business in Haiphong, Vietnam. She's the first thing a visitor interacts with on the website — and she's built to handle the questions that would otherwise pile up in an inbox or go unanswered until a staff member is free.

The name is Vietnamese. It fits. Haiphong is the kind of place where a traveler arrives with a half-formed plan, a vague idea of wanting to get to Cat Ba Island, and no clue whether they need an international driving license or what the ferry schedule looks like. Huyen's job is to have those answers — in English, Vietnamese, or whatever language the traveler is most comfortable in.

She's not a FAQ page dressed up as a chat window. She's a proper AI agent that understands what you're asking, pulls from real business data, and responds the way a knowledgeable local would — usefully, directly, without sending you to three different pages to find one answer.

---

## The Problem Worth Solving

RiverCity isn't a giant corporation with a support team on rotation. It's a real business serving real travelers — people who want a motorbike for the weekend, need to know the rental requirements, want tips on where to ride, and sometimes need someone to tell them the honest truth about road conditions or insurance options.

The volume of questions is predictable. The timing is not. Travelers arrive at odd hours, make decisions in transit, and often need information before they've even touched down. A chatbot that genuinely knows the business — its fleet, its prices, its policies, the local transport options, the eSIM situation — is worth more than a generic chat widget that just promises to "get back to you."

That's the bar we built to.

---

## What Huyen Actually Does

She handles four broad areas, and she handles them well.

**Rentals.** Motorbike types, car options, daily and weekly rates, deposit requirements, what documents you need, whether you need an international license (answer: depends on the country and the bike). Questions that get asked fifty times a week — answered instantly, accurately, without a staff member typing the same thing again.

**Local transport.** Haiphong has airport transfers, local buses, ferries to Cat Ba Island, trains, Grab, and taxi options. Travelers ask about all of it. Huyen knows the routes, the rough costs, the typical timing. She gives practical answers, not just "check Google Maps."

**Travel guides and cultural tips.** Where to eat, what to expect on Vietnamese roads, how to handle traffic in a city that doesn't operate like home. Soft information that doesn't live on a booking form but absolutely affects whether someone has a good experience.

**eSIM information.** Every international traveler needs data. Huyen knows what works in Vietnam and can point someone in the right direction without making them dig through carrier websites.

---

## The Tech — Without the Headache

Here's how it works under the hood, explained simply.

The chatbot lives on a React front-end hosted on Vercel — fast, reliable, mobile-first, because most travelers are on their phone. The interface was built with Pi-web-ui components, which means the team has full control over how it looks and behaves rather than being locked into someone else's template.

When Huyen receives a message, it goes to a serverless API function that acts as the brain's gateway. The actual language model running the conversation is **Llama 3.1** via Groq Cloud — fast inference, low latency, and cost-efficient compared to running everything through a premium API at full price for every single message.

The knowledge she draws from lives in **Supabase** — a database containing rental information, FAQs, travel guides, and articles specific to RiverCity and Haiphong. When a question comes in, the system searches that database and retrieves the most relevant content before generating a response. This is what keeps her answers grounded in real business data rather than making things up. The technical term is RAG (Retrieval-Augmented Generation). The practical result is: fewer wrong answers, more useful ones.

The team is upgrading this to vector embeddings — a smarter search method that understands meaning rather than just matching keywords. The difference matters when someone asks "what do I need to rent a bike?" in five different ways. All five should return a useful answer.

---

## Voice-First, Because Not Everyone Wants to Type

Huyen supports voice input and voice output — entirely through browser-native APIs, which means no extra infrastructure, no third-party service to pay for, no additional latency.

You speak. She listens. She responds — either as text, audio, or both, depending on the mode you've selected.

This isn't a gimmick. A traveler standing outside an airport with their hands full doesn't want to type. Someone trying to get a quick answer while sitting on a rented scooter is better served by voice. The toggle is there. It works. It changes the interaction from a chat window into something closer to asking a person.

---

## Multilingual by Design

English and Vietnamese are the priority. But Haiphong gets visitors from across Asia, Europe, and beyond — Korean tourists, French backpackers, Japanese cyclists doing the northern Vietnam loop. Huyen detects the language of the incoming message and responds in kind.

This isn't a translation layer bolted on top. Language detection and multilingual response are built into how the agent handles conversations. The goal is that a traveler never has to think about language — they just ask, in whatever language feels natural, and get a useful answer back.

---

## When Huyen Steps Back

There are things a chatbot shouldn't handle alone. A real-time availability check for a specific date. A rental for a large group with custom requirements. A situation where something's gone wrong and a person needs to talk to a person.

Huyen knows the difference. When a conversation hits that point, she hands off — directly to the RiverCity team via Telegram. Not a vague "please contact us." An actual relay: the conversation context, what the traveler asked, what they need. The staff picks it up already informed.

This is the part most chatbots get wrong. They either try to handle everything (and fail visibly) or punt too early (and feel useless). The balance Huyen is built around is: answer everything you can answer well, and escalate everything else cleanly.

---

## Opening the Right Page at the Right Moment

One detail worth mentioning: when a user wants to go deeper on a topic — a specific rental policy, a detailed travel guide, a pricing breakdown — Huyen can open the relevant page on the website directly from the conversation.

Not "here's a link, good luck." The page opens. The context follows. This keeps the experience connected rather than sending someone off into a navigation system they weren't expecting.

---

## What's Coming Next

The current build is solid and live. The roadmap keeps going.

**Pi-boomerang** will handle long conversation compression — so when a conversation runs deep, the context doesn't get lost and the response quality doesn't degrade.

**Pi-subagents** will handle more complex, multi-step tasks — the kind where completing one task requires checking a few things first and making a few decisions along the way.

The upgrade from full-text search to **semantic vector search** via pgvector is in progress — smarter retrieval, better answers, even on oddly phrased questions.

Every piece of the build is designed to stay lightweight. No unnecessary complexity, no runaway API costs, no black boxes that nobody on the team can maintain. Control and low cost were requirements from the start, not afterthoughts.

---

## Why This Matters Beyond One Rental Business

Huyen is a good example of what a well-built AI chatbot actually looks like for a small-to-medium business — not a generic widget, not an enterprise deployment requiring a six-month implementation. A custom agent, built around real business data, handling real questions, connected to real people when needed.

The tools to build something like this exist right now. The cost is nothing like what it was two years ago. And the gap between "we have a contact form" and "we have an AI that handles first contact" is smaller than most business owners think.

If you're wondering whether something like this could work for your business, [the Vispaico articles section](https://www.vispaico.com/en/articles) is a good place to start thinking it through. And if you're further along and want specifics on what adding an AI chatbot to a website actually involves, [this article covers the full picture](https://www.vispaico.com/en/library/stories/can-i-add-an-ai-chatbot-to-my-website) — costs, tools, and how to figure out what you actually need.

Huyen is live. RiverCity's travelers are getting answers at 11pm. The inbox is quieter. That's the point.
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
