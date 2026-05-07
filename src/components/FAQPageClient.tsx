"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';

type FAQCategory = {
  heading: string;
  items: FAQItem[];
};

type FAQItem = {
  question: string;
  answer: string;
  listItems?: string[];
  paragraphAfterList?: string;
};

const categories: FAQCategory[] = [
  {
    heading: 'About Vispaico',
    items: [
      {
        question: 'What is Vispaico and what do you actually build?',
        answer: `Vispaico is a small, focused team that builds AI-powered business infrastructure. That ranges from a $899 website delivered in 72 hours to a complete 6-month AI operating system — private servers, language models, website, agents, content, SEO, and automation — for companies that want the full stack built properly from day one.\n\nWe're based in Haiphong, Vietnam and work with clients across US, EU, LATAM, and SEA. Small team, deliberately. We take on a limited number of projects at any given time so every client gets real attention.`,
      },
      {
        question: 'Who is Vispaico for?',
        answer: `Two types of clients, honestly.\n\nThe first is a business owner or founder who needs a professional website fast, without agency timelines or agency pricing. The Growth Website — $899, 72 hours — was built for them.\n\nThe second is a founder or operator who's done piecing things together and wants one team to build, deploy, and hand over a complete AI-powered business system. The Launch Program — $24,800, 6 months — was built for them.\n\nIf you're somewhere in between, the individual AI services are the right starting point. Start with one. Add more when you're ready.`,
      },
      {
        question: 'Why not a local agency?',
        answer: `Most agencies are optimized for their own process, not your outcome. Discovery phases that discover nothing. Revision rounds that delay everything. Project managers who manage the project but not the result.\n\nWe're optimized for delivery. Clear scope before work begins. One point of contact throughout. Everything transferred to you when we're done — no lock-in, no dependency on us.\n\nThe honest answer is that some clients are better served by a local agency with a large team and a long timeline. If that's you, we'll tell you on the scoping call.`,
      },
    ],
  },
  {
    heading: 'The Launch Program',
    items: [
      {
        question: 'What exactly is the Launch Program?',
        answer: 'A 6-month engagement where we build your complete AI operating system — and hand it over at the end.',
        listItems: [
          'Private AI infrastructure on your servers. Self-hosted LLMs via Ollama. Open WebUI for your team. Postiz for social media management. n8n for workflow automation.',
          'AI-powered website with a custom-trained chat agent.',
          '40 long-form SEO articles across 6 months.',
          'Full social media operation across all platforms.',
          'Lead generation pipeline and CRM automation.',
          'Full documentation and handover at month 6.',
        ],
        paragraphAfterList: 'One team. One timeline. Everything integrated and documented when it\'s done.',
      },
      {
        question: 'Why $24,800?',
        answer: `The same services purchased separately — developer, SEO agency, social media manager, AI consultant, infrastructure setup — run $38,500–89,000 at market rates, spread across 18–24 months of coordination between vendors who don't talk to each other.\n\n$24,800 is not cheap. It's not meant to be. It's the right price for six months of focused, integrated delivery by a team that owns the outcome — and transfers everything to you at the end.`,
      },
      {
        question: 'What do I actually own at the end?',
        answer: `Everything. Without exception.\n\nEvery line of code. Every server configuration. Every piece of content. Every workflow and automation. All accounts, credentials, and intellectual property transfer to you at the end of month 6. Full documentation included so your team — or any future team — can manage it without us.\n\nNothing we build creates dependency on Vispaico. That's a deliberate principle, not a selling point.`,
      },
      {
        question: "What's the payment structure?",
        answer: 'Two options.',
        listItems: [
          'Upfront: $24,800 — full program, paid before work begins.',
          'Installment: $4,800 on signing, then $4,000 per month for 5 months. Same total — $24,800. No payment is due for a month where we miss a scheduled deliverable.',
        ],
        paragraphAfterList: 'Payment via bank transfer or Stripe.',
      },
      {
        question: 'How many clients do you take on at once?',
        answer: `Maximum 3 Launch Program clients per quarter. This is a real constraint, not a marketing tactic. Focused attention has a limit and we won't compromise delivery quality by overcommitting.\n\nA scoping call is required before purchase. Not every business is the right fit — we'll tell you honestly if yours isn't, and recommend a better path if so.`,
      },
      {
        question: "What if you don't deliver on schedule?",
        answer: `Phase 01 — infrastructure and website — is fully refundable if we miss the delivery date. For subsequent phases, no payment is due for any month where we miss a scheduled deliverable. This is written into the contract before work begins.\n\nWe've structured the program this way because we're confident in our delivery — and because a client paying $24,800 deserves a guarantee with real consequences, not just good intentions.`,
      },
    ],
  },
  {
    heading: 'Individual Services',
    items: [
      {
        question: 'Which services are available individually?',
        answer: 'All of the following are available as standalone engagements:',
        listItems: [
          'AI Website + Agent — from $3,500',
          'Private AI Stack setup — from $5,000',
          'SEO and Content — from $1,200/mo',
          'Workflow Automation — from $2,500',
          'Social Media Automation — from $600/mo',
          'AI Consulting — from $2,000',
          'Team AI Onboarding — from $2,000',
          'AI E-Commerce — from $5,000',
        ],
        paragraphAfterList: "Every service listed above is also included in the Launch Program. If you start with one service and later decide you want the full program, we'll discuss how to structure that transition.",
      },
      {
        question: "What's the difference between the $899 website and the AI Website + Agent?",
        answer: `The $899 Growth Website is a fast, professional business website — Next.js, headless CMS, SEO-optimized, delivered in 72 hours. It's the right product if you need a credible online presence quickly and affordably.\n\nThe AI Website + Agent starts at $3,500 and adds a custom-trained AI chat agent that handles leads, bookings, and FAQs on your behalf — 24 hours a day, without staff. It's built on the same technical foundation but with a significantly higher level of customization and an active AI layer on top.\n\nBoth are real products. The right one depends on your stage and your goals.`,
      },
      {
        question: 'Do you do ongoing SEO?',
        answer: `Yes — it's a core service, not an afterthought. The SEO and Content service runs from $1,200/mo and includes keyword research, 8–16 long-form articles per month depending on tier, on-page optimization, CMS publishing, and monthly performance reporting. Available in English, German, and Spanish.\n\nEvery website we build is also technically SEO-optimized from day one — proper structure, titles, meta, schema markup, fast loading, mobile-first. That's table stakes, not a selling point.`,
      },
    ],
  },
  {
    heading: 'Technical & Ownership',
    items: [
      {
        question: 'What tech stack do you use?',
        answer: `Next.js for all websites and storefronts. Vercel for hosting and deployment. Headless CMS (Storyblok) for content management. Ollama for self-hosted LLMs. Open WebUI for private AI interfaces. n8n for workflow automation. Postiz for social media management. LangChain for RAG knowledge base builds.\n\nEverything we use is either open source, self-hostable, or transferable. No proprietary platforms that trap you.`,
      },
      {
        question: "What does 'private AI infrastructure' mean in practice?",
        answer: `It means your company's AI runs on servers you own or control — not on OpenAI's API or any third-party service that processes your data on their infrastructure.\n\nIn practice: we provision a server (VPS or on-premise, your choice), deploy Ollama with your chosen language model, configure Open WebUI as your team's private AI interface, and connect it to your internal tools via n8n. Your team gets the same AI capabilities as any tech company — with full data sovereignty and no ongoing API costs.\n\nThis matters most for companies handling sensitive client data, operating under GDPR or similar regulation, or in industries where competitive confidentiality is non-negotiable.`,
      },
      {
        question: 'Who owns the website, code, and content after delivery?',
        answer: `You do. Always.\n\nDomain, hosting, codebase, CMS content, automation workflows, AI training data — everything transfers to you at project completion. You can take it to another developer, another host, or manage it entirely yourself. We provide full documentation to make that transition easy if it ever happens.\n\nWe don't use licensing models, proprietary systems, or maintenance contracts that create dependency. If you want our ongoing help, that's a choice — never a requirement.`,
      },
      {
        question: 'What happens to my data during the project?',
        answer: `We handle client data with strict confidentiality. NDAs are available on request and standard for Launch Program engagements. All credentials are transferred securely at project completion and removed from our systems.\n\nFor clients on private AI infrastructure — your data never leaves your servers. That's the point.`,
      },
    ],
  },
  {
    heading: 'Process & Support',
    items: [
      {
        question: 'How do projects actually start?',
        answer: `For the Growth Website: fill out the intake form, receive a contract within an hour, pay when you're ready. Work begins the same day payment clears.\n\nFor the Launch Program and individual AI services: a scoping call comes first. We use that call to confirm scope, timeline, and fit — then issue a detailed proposal and contract. Work begins after signing and initial payment.`,
      },
      {
        question: 'How do revisions work?',
        answer: `For the Growth Website: 7 days of unlimited revisions after delivery. Change anything — colors, copy, layout, structure. We keep going until you're satisfied.\n\nFor AI services and the Launch Program: each phase has an approval checkpoint. You review and provide feedback before we move to the next phase. The scope is agreed before work begins, and the checkpoints are where you steer, not where you restart.`,
      },
      {
        question: 'What support is included after launch?',
        answer: `Growth Website: 7 days unlimited revisions plus 30 days technical bug support. After 30 days, ongoing support is available via maintenance plans or on an hourly basis.\n\nLaunch Program: 30-day post-program support period. Full system documentation delivered at month 6. Optional retainer available if you want us to continue managing specific components — SEO, social media, infrastructure monitoring.\n\nAll other services: support terms are specified in each service agreement. Retainers include ongoing support as standard.`,
      },
      {
        question: "What if I'm not happy with the work?",
        answer: `Growth Website: full refund if we don't deliver what we promised within 24 hours of the agreed deadline. We've never had to issue one — but it's written into every contract.\n\nLaunch Program: Phase 01 is fully refundable if we miss the infrastructure and website delivery date. Subsequent phases carry the same accountability — no payment due for missed deliverables. Everything is contractual, not just a promise on a webpage.`,
      },
      {
        question: 'Do you work with clients in all time zones?',
        answer: `Yes. We're based in Vietnam (GMT+7) and have worked with clients across EU, LATAM, and SEA without time zone being a meaningful obstacle. Primary communication happens asynchronously — detailed, documented, and trackable. Calls are scheduled to suit both sides. Most clients find they prefer the async rhythm once they experience it.`,
      },
    ],
  },
];

const FAQPageClient = () => {
  const contentWidth = 'mx-auto w-full max-w-[800px]';

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: categories.flatMap((cat) =>
      cat.items.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: [
            item.answer,
            ...(item.listItems ? item.listItems.map((li) => li.trim()) : []),
            ...(item.paragraphAfterList ? [item.paragraphAfterList] : []),
          ]
            .filter(Boolean)
            .join(' '),
        },
      }))
    ),
  };

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* SECTION 1 — PAGE HEADER */}
      <section className="px-6 pt-[80px]">
        <div className={contentWidth}>
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            FAQ
          </p>
          <h1 className="text-[clamp(32px,5vw,48px)] font-[600] mt-[12px] tracking-[-0.025em]">
            Frequently asked questions.
          </h1>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mt-[16px] max-w-[560px] pb-[40px] border-b border-[var(--border)]">
            Short answers to the questions we hear most. If yours isn&apos;t here, email{' '}
            <a
              href="mailto:niels@vispaico.com"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              niels@vispaico.com
            </a>{' '}
            — he reads and replies to everything personally.
          </p>
        </div>
      </section>

      {/* SECTION 2 — FAQ CONTENT */}
      <section className="px-6 pb-[96px]">
        <div className={contentWidth}>
          {categories.map((category) => (
            <div key={category.heading}>
              <h2 className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)] mt-[56px] mb-[32px] pb-[12px] border-b border-[var(--border)]">
                {category.heading}
              </h2>

              {category.items.map((item, itemIndex) => (
                <div key={item.question}>
                  {itemIndex > 0 && (
                    <div className="mt-[32px] h-px bg-[var(--border)]" />
                  )}
                  <h3 className="text-[17px] font-[600] text-[var(--text-primary)] mt-[40px] mb-[12px] tracking-[-0.015em]">
                    {item.question}
                  </h3>

                  {item.answer.split('\n\n').map((paragraph, pIndex) => (
                    <p
                      key={pIndex}
                      className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[12px]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  {item.listItems && (
                    <div className="mt-[12px] mb-[12px]">
                      {item.listItems.map((listItem, liIndex) => (
                        <div
                          key={liIndex}
                          className={`block py-[10px] text-[14px] text-[var(--text-secondary)] leading-[1.7] ${
                            liIndex < item.listItems!.length - 1
                              ? 'border-b border-[var(--border)]'
                              : ''
                          }`}
                        >
                          {listItem}
                        </div>
                      ))}
                    </div>
                  )}

                  {item.paragraphAfterList && (
                    <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[12px]">
                      {item.paragraphAfterList}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3 — BOTTOM CTA */}
      <section className="px-6 pb-[96px]">
        <div
          className={`${contentWidth} text-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-[40px] mt-[80px]`}
        >
          <h3 className="text-[17px] font-[600] text-[var(--text-primary)]">
            Still have a question?
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-[1.75] mt-[10px]">
            Email{' '}
            <a
              href="mailto:niels@vispaico.com"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              niels@vispaico.com
            </a>{' '}
            — he reads and replies to everything personally, usually within a few hours.
          </p>
          <div className="mt-[20px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#8A8880] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-white transition-opacity hover:opacity-90"
            >
              Book a 20-minute call →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQPageClient;
