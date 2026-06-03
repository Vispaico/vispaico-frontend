import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'ai-operations-audit-how-it-works-and-what-you-get';

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

export default async function AiOperationsAuditStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Hero image for AI Operations Audit](/images/articles/ai-operations-audit.webp)
*An AI Operations Audit answers the important questions before you spend on anything.*

**Topics covered in this article:**
- What an AI Operations Audit is and why it matters
- Why starting with an audit beats building something first
- What the audit actually involves — step by step
- What you receive as a deliverable
- Common patterns the audit uncovers
- Who it is for, how long it takes, and what it costs

---

## What an AI Operations Audit Is

An AI Operations Audit is a structured assessment of how your company manages knowledge, data, and operations — and where an AI layer would create the most measurable business value.

It is not a sales process dressed up as consulting. It is not a technology evaluation. It is a business diagnosis: a methodical look at where information is fragmented, where manual work is consuming time it should not, and where earlier or better access to information would change outcomes.

The output is a written report with a clear, prioritised plan. Most companies find that the audit alone changes how they think about their operations, before any AI is deployed.

---

## Why Start With an Audit Instead of Just Building Something?

The most common mistake companies make with AI is building something before understanding the problem clearly enough.

A company builds a chatbot because chatbots are visible and easy to commission. It handles some questions adequately and falls down on others. After a few months it is quietly retired. The underlying problem — scattered knowledge, slow information access, repetitive manual work — is still there.

An audit prevents that. It ensures that what gets built is grounded in the actual friction in the business, not in what looked impressive at a demo.

It also surfaces things companies did not know they had. In almost every audit, there is a moment when a client realises they have assets — documents, data, process knowledge — that are more valuable than they appreciated, simply because those assets were not organised or accessible.

---

## What the Audit Actually Involves

A typical audit runs over three to five business days and involves a combination of structured interviews, system reviews, and process analysis. Here is what that looks like in practice.

**Business context conversations.** The audit starts with the people who run the business — founders, directors, operations leads. The goal is to understand the company before touching any system: what decisions are hardest to make, where information is most often unavailable when it is needed, and what the most expensive recurring friction points are.

**Systems and information mapping.** Every company stores knowledge and data somewhere — shared drives, email archives, CRMs, project management tools, accounting systems, spreadsheets, and often in people's heads. The audit maps where information actually lives, how accessible it is to the people who need it, and where the gaps are most costly.

**Process and friction analysis.** This involves conversations with team leads and staff who do the work day to day — not just management. The questions are simple: what do you spend time on that should not require your personal attention? What information do you regularly need that takes too long to find? What would you eliminate from your week if you could?

This part consistently produces the most useful findings. Frontline staff know where the friction is. They often have not been asked before.

**Data readiness assessment.** Before any AI system can perform reliably, the underlying information needs to be in a usable condition. The audit assesses whether documents are current and well-structured, whether data systems are consistently maintained, and what preparation work would be needed before deployment. This is practical, not theoretical — it determines realistic timelines and flags anything that needs to be addressed first.

**Roadmap construction.** The findings are turned into a phased implementation plan. Quick wins — the high-value, lower-complexity opportunities — are identified as starting points. Larger, more complex improvements are sequenced into later phases as the foundation is established.

---

## What You Receive

The deliverable is a written report covering:

- A summary of the key findings and top recommendations
- A map of where your company's knowledge and data currently lives
- A prioritised list of the processes with the highest potential for improvement
- An assessment of your data and documentation readiness
- A phased implementation roadmap with realistic timelines and scope
- A clear recommended first step

The report is written for business decision-makers, not technical teams. It explains findings in plain language and gives you what you need to decide whether and how to proceed.

---

## What an Audit Typically Finds

While every company is different, certain patterns appear consistently:

**The knowledge bottleneck.** Most companies have one person — often a founder or a long-tenured senior employee — who answers the same questions repeatedly because they are the only reliable source of truth. That person is a bottleneck, and usually a retention risk. When they are busy or unavailable, decisions wait.

**The inaccessible document store.** A shared drive, server, or email archive full of genuinely useful information that no one can reliably navigate. Documents exist for almost everything. Finding the right one takes too long, so people ask a colleague instead.

**The manual report.** Someone is spending hours each week or month pulling information from multiple systems into a report. This is almost always something that can be handled automatically, freeing that person for work that requires their judgment.

**The late signal.** Operational problems — a delivery at risk, a client showing signs of dissatisfaction, a capacity shortage developing — are identified after they have already caused damage. The data that would have indicated the problem earlier existed; it just was not being monitored.

---

## Who an Audit Is For

An audit is most useful for companies that:

- Have been operating for at least a few years and have accumulated knowledge, data, and processes across multiple systems
- Are growing past the point where one or two people can hold everything in their heads
- Are losing time to repetitive manual work, slow information access, or reactive problem-solving
- Want to understand what a realistic AI investment would look like before committing to it

It is less useful for very early-stage companies with few processes in place, or for companies that are not yet sure what their core operational problems are. For those cases, a shorter discovery conversation is usually the better starting point.

---

## How Long It Takes and What It Costs

Most audits run over three to five business days. For larger or multi-site operations, it may take slightly longer.

The audit is a paid engagement, starting at $1,500 for smaller companies. For companies that proceed with implementation afterward, the audit fee is credited against the project.

The reason it is paid rather than free is that it is real work — structured interviews, system review, analysis, and a written report — and it produces something of genuine standalone value. Companies that have completed an audit and not yet proceeded with implementation have told us the report alone changed how they think about their internal systems.

---

## How to Start

The first step is a short conversation — usually 20 to 30 minutes — to understand whether an audit is the right fit for your situation. If it is, we agree on timing and scope, and the process begins.

There is no obligation to proceed with implementation after the audit. The report is yours regardless.

If you would like to talk through what an audit would involve for your company specifically, you can book a call or send an enquiry through the [audit page](https://www.vispaico.com/en/services/ai-operations-audit).

---

*Vispaico builds private AI operating systems for growing companies. The AI Operations Audit is the starting point for most engagements.*
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
