import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'what-we-actually-build-when-we-say-ai-systems-for-companies';

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

export default async function WhatWeBuildStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for AI systems for companies](/images/articles/what-we-actually-build-ai-systems-for-companies.webp)
*What we actually build when we say "AI systems for companies" — explained without the noise.*

**Topics covered in this article:**
- Why starting with tools is the wrong approach
- The six things we actually build: AI websites, chat agents, knowledge backends, private infrastructure, automation workflows, and management frontends
- How these parts work together as a system
- Real examples of how this looks in practice
- What this is not — and who it is for

---

There is a lot of noise right now around AI. Every software vendor has relaunched their product with an AI badge. Every consultant has a new deck about transformation. Every newsletter has a list of tools you are supposedly missing out on.

The result is that most business owners and managers are simultaneously overloaded with AI information and genuinely unclear about what any of it means for how their company actually runs day to day. They know it matters. They do not know what to do about it. And they are tired of being sold things that sound impressive but do not obviously solve anything.

That confusion is understandable. We want to explain plainly what we build and why it tends to be useful.

---

## The problem with tools

Most conversations about business AI start with tools. Here is a chatbot platform. Here is an automation service. Here is a document summariser. Install these, connect them, and you have an AI-powered business.

The problem is that tools do not solve problems on their own. A chatbot that does not know anything about your company just apologises and says it cannot help. An automation workflow that is not connected to the right data does not save anyone time. A knowledge base that no one updates becomes noise.

What actually makes AI useful in a business context is not the tools themselves but how they are designed, connected, and kept current. That is the part that most off-the-shelf platforms skip over. It is also the part we spend most of our time on.

---

## What we actually build

The systems we build tend to include some combination of the following, depending on what a business needs:

**AI-powered websites.** A website that does more than display information. Visitors can ask questions and get useful answers, find the right page without digging through a menu, or be guided toward the right service or next step. This is not a generic chatbot bolted onto a homepage. The system is trained on the actual content of the business, so it answers questions the way that company would answer them.

**Website chat agents.** A frontend widget that sits on a website and handles incoming questions. It can be embedded on an existing site without rebuilding anything. The important thing is what it is connected to: a knowledge backend that contains real, structured information about the company, its services, its processes, and anything else that is relevant.

**Knowledge backends.** This is usually the most important part, and the least visible. We build a knowledge layer from a company's existing content: website pages, internal documents, FAQs, notes, process guides. That content gets structured and made searchable in a way that an AI system can use to give accurate, grounded answers. This is not the same as feeding a document into a general-purpose AI and hoping for the best. It is a properly organised knowledge base that improves over time as the company adds to it.

**Private infrastructure.** For some clients, everything runs on servers they control, not on shared platforms. This matters when data sensitivity is a concern, when a company wants to understand exactly where their information is going, or when they simply want ownership of the system rather than a subscription dependency. We can deploy these systems on a client's own infrastructure and hand over the keys.

**Automation workflows.** Repetitive tasks that currently require a person's time can often be handled automatically. Common examples: routing enquiries to the right person, sending follow-up messages after a form submission, updating records when something changes, generating a first draft of a report that a human then reviews. These are not magic. They are carefully constructed sequences that connect the right inputs to the right outputs.

**Simple management frontends.** We often build a lightweight interface so that non-technical team members can manage their side of the system without needing a developer. Updating knowledge content, reviewing flagged responses, checking how the system is performing. The goal is that the people who know the business can keep the system current without involving an engineer every time.

---

## How these parts work together

The reason we describe these as systems rather than tools is that the value comes from how they connect.

Consider a company that provides professional services. They have a website, they get enquiries, and they spend a significant amount of time answering the same questions before a client even books. What does your process look like? What is the turnaround time? Do you work with clients in this industry? Can I see examples?

If all of those questions are handled well by a chat agent on the website, at any hour, using accurate and up-to-date information from the company's knowledge backend, that saves real time. The enquiries that do reach a person are warmer, better qualified, and more likely to convert.

Now add automation. When someone fills in a contact form, they automatically receive a message that references the thing they asked about, includes a link to a relevant page, and sets a realistic expectation about next steps. That happens without anyone deciding to send it.

Now add a private knowledge backend that the team updates themselves. New services, changed pricing, updated processes — the system stays current because the team has a simple interface to update it.

None of these parts are impressive on their own. Together, they make the front end of a business noticeably easier to run.

---

## What this looks like in practice

A few realistic examples:

A visitor lands on a service company's website at 10pm and has a specific question about whether the company handles a particular type of project. Instead of leaving to find a competitor who answers the question more clearly, or submitting a form and waiting two days for a reply, they get a direct answer from the chat agent, along with a link to a relevant case study and a clear prompt to get in touch. The company wakes up the next morning to a warm lead instead of a lost one.

A growing team is drowning in information that lives in the wrong places. Old proposals in email threads. Process notes in someone's personal drive. FAQs that were written once and never updated. A new team member spends their first two weeks asking colleagues for basic information. After building a structured internal knowledge base, that same new team member can find what they need themselves. The people who were answering those questions get their time back.

A founder of a small company personally answers the same five customer questions every week. How do I get started? What does onboarding look like? Do you integrate with this tool? What is your pricing structure? These questions are real and reasonable, but answering them manually is not a good use of anyone's time. Once the answers exist in a knowledge backend and a chat agent can deliver them accurately, the founder stops answering those emails. They spend that time on things that actually require them.

---

## What this is not

We are not selling a product. There is no Vispaico subscription that you install and then manage yourself. We build systems for specific companies with specific problems, using a set of tools and components we know well and can deploy reliably.

We are also not trying to automate everything or make a business dependent on a black box they do not understand. Our preference is that clients end up owning what we build. That means the infrastructure can be on their servers, the knowledge base is theirs to update, and the workflows are documented. If they wanted to take over, hand it to another team, or modify it themselves, they could.

---

## Who this is for

This work tends to make the most sense for companies that are growing past the point where founders or managers can personally handle every customer interaction and internal information request. Where the same questions get answered repeatedly. Where information is scattered and hard to find. Where the gap between what the website says and what the company actually knows is starting to create friction.

It also suits companies that care about where their data goes and would prefer to run systems on infrastructure they control, rather than feeding sensitive information into a third-party platform indefinitely.

It is not the right fit for companies that are not yet sure what problems they are trying to solve, or that are looking for something to install quickly and expect it to work without input. These systems take some time to build properly and they get better as a business engages with them. The value is real, but it is not instant and it is not passive.

If you are at the point where the repetitive, time-consuming parts of running your business are starting to feel like the whole job, that is usually a reasonable signal that some of this would help.
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
