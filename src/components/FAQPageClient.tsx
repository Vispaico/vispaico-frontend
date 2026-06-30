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
        answer: `Vispaico builds private AI operating systems — AIOS™ — that act as your company's AI workforce: understanding your business, analyzing your data, and helping your team make better decisions every day.\n\nInstead of random tools and disconnected automations, we deploy a structured AIOS framework: Company Brain™ (knowledge layer), Company Analyst™ (business intelligence layer), and Company Operator™ (operational intelligence layer), all running on infrastructure you own or control.\n\nWe're based in Haiphong, Vietnam and work with companies in the US, EU, LATAM, and SEA that want secure, practical AI integrated into their existing operations — not just another chatbot bolted onto the side.`,
      },
      {
        question: 'Who is Vispaico for?',
        answer: `We work with operators and leadership teams who already have knowledge, data, and workflows in place — but are slowed down by fragmentation across documents, spreadsheets, CRMs, email, and internal tools.\n\nIf you are a founder, COO, or department lead who wants AI to sit on top of your real business (not replace it), AIOS is built for you: one layer that connects your knowledge, data, and operations into a usable intelligence system.\n\nWe start with an AI Operations Audit for most clients, then deploy Company Brain™, expand into Company Analyst™, and finally Company Operator™ as your organization is ready.`,
      },
      {
        question: 'Why not a generic AI tool or off-the-shelf platform?',
        answer: `Most AI tools are optimized for their own usage metrics, not your outcomes. You end up with yet another interface, more data silos, and no real operational change.\n\nWe design AIOS to run on infrastructure you control — self-hosted, private cloud, or hybrid — with full ownership of code, configuration, and data. No licensing traps, no forced renewals, no lock-in.\n\nIf a standard SaaS tool genuinely serves you better, we will say so during the AI Operations Audit and point you in that direction instead of selling you something you don't need.`,
      },
    ],
  },
  {
    heading: 'The Launch Program',
    items: [
      {
        question: 'What exactly is the Launch Program?',
        answer: 'A multi-phase deployment where we implement your private AI operating system — Company Brain™, Company Analyst™, and Company Operator™ — on infrastructure you own or control.',
        listItems: [
          'Company Brain™: knowledge layer that connects documents, SOPs, CRM records, and internal systems into one searchable intelligence layer.',
          'Company Analyst™: business intelligence layer that turns fragmented sales, finance, and operations data into clear, on-demand insights.',
          'Company Operator™: operational layer that monitors your business for bottlenecks, delivery issues, churn risk, and capacity problems — and alerts your team early.',
          'Private AI infrastructure on your servers or dedicated cloud (self-hosted, private, or hybrid deployments). Full ownership, no vendor lock-in.',
          'Implementation roadmap shaped by an initial AI Operations Audit: workflow analysis, knowledge mapping, data readiness, and automation opportunities.',
          'Full documentation and handover at the end of the engagement so your internal team (or any future partner) can operate the system without us.',
        ],
        paragraphAfterList: 'One system, delivered in phases. Each phase creates immediate value on its own while building toward a fully integrated AI operating layer across your company.',
      },
      {
        question: 'How is pricing structured?',
        answer: `Every AIOS deployment is scoped to the company — size, data environment, regulatory requirements, and operational complexity — rather than a flat package price.\n\nTypical ranges: Company Brain™ setups from $4,000 with monthly from $500+; Company Brain™ + Company Analyst™ setups from $10,000 with monthly from $1,500+; full AIOS™ implementations usually fall between $20,000–50,000+ depending on scope.\n\nWe begin with an AI Operations Audit starting at $1,500, which produces a concrete implementation roadmap and costed options before you commit to a full build.`,
      },
      {
        question: 'What do I actually own at the end?',
        answer: `Everything related to your AIOS deployment belongs to you: infrastructure, configurations, integrations, and deployed components.\n\nBecause AIOS is built on infrastructure you control — self-hosted, private cloud, or hybrid — you retain full ownership of your data, your system, and your long-term roadmap.\n\nThere are no artificial licensing traps or migration penalties; if you ever decide to run the system entirely in-house or with another partner, you can.`,
      },
      {
        question: "What's the payment structure?",
        answer: 'We scope payment structures around the agreed implementation plan.',
        listItems: [
          'AI Operations Audit: starting at $1,500, paid before work begins.',
          'AIOS deployments: project-based fees aligned with the phases (Company Brain™, Company Analyst™, Company Operator™), with clear milestones and deliverables.',
          'Ongoing operations: optional monthly retainers for monitoring, maintenance, and iteration on top of agreed baseline monthly infrastructure and support costs.',
        ],
        paragraphAfterList: 'All terms, deliverables, and payment schedules are defined in a written proposal before any implementation starts.',
      },
      {
        question: 'How many AIOS clients do you take on at once?',
        answer: `We deliberately keep a limited number of concurrent AIOS deployments so each client gets direct access and focused attention.\n\nCapacity planning is part of our own operating model — if we don't have room to deliver properly, we will tell you and schedule your project for a later slot.\n\nEvery full AIOS engagement starts with a scoping conversation and the AI Operations Audit to confirm fit before we commit.`,
      },
      {
        question: "What if you don't deliver on schedule?",
        answer: `AIOS implementations are structured around clear phases and milestones: knowledge layer, analytics layer, and operational layer.\n\nWe define timelines and responsibilities in the proposal and contract, with progress tied to tangible deliverables rather than vague "AI transformation" language.\n\nIf risks to timeline appear — usually due to data access, internal bottlenecks, or scope changes — we surface them early and adjust the plan transparently together.`,
      },
    ],
  },
  {
    heading: 'Individual Services',
    items: [
      {
        question: 'Which services are available individually?',
        answer: 'All core components of AIOS are available as standalone services if you are not yet ready for a full deployment:',
        listItems: [
          'AI Operations Audit — from $1,500: workflow analysis, knowledge mapping, data readiness, automation opportunities, and implementation roadmap.',
          'Company Brain™ setup — from $4,000 + monthly from $500: central knowledge layer for documents, SOPs, and internal systems.',
          'Company Brain™ + Company Analyst™ — from $10,000 + monthly from $1,500: combined knowledge and analytics layers.',
          'Custom AI employees and agents integrated into your existing tools and infrastructure.',
          'Private AI infrastructure planning and deployment on self-hosted, private cloud, or hybrid environments.',
        ],
        paragraphAfterList: 'You can start with a focused engagement (for example, Company Brain™ only) and expand into analytics and operational intelligence once the foundations are in place.',
      },
      {
        question: "How does AIOS relate to your AI Employees and other services?",
        answer: `AIOS is the overarching operating system: knowledge, analytics, and operations. The AI Employees — like Company Brain™, Company Analyst™, and Company Operator™ — are the concrete agents that sit inside that system.\n\nIf you only need a specific function (for example, internal knowledge search or analytics on top of your CRM and finance tools), we can deploy that layer on its own.\n\nIf you want a fully integrated AI workforce across your company, we combine these components into a unified AIOS deployment.`,
      },
      {
        question: 'Do you offer one-off consulting?',
        answer: `Yes. The AI Operations Audit is our structured way to start: you get a clear, practical roadmap, not just generic advice.\n\nFor companies further along, we also work as a technical partner on infrastructure, deployment, and integration — especially for teams that want private AI but lack internal bandwidth.\n\nIn both cases, the goal is the same: move from scattered ideas about AI to a concrete system that fits your business and constraints.`,
      },
    ],
  },
  {
    heading: 'Technical & Ownership',
    items: [
      {
        question: 'What infrastructure do you use?',
        answer: `Every AIOS deployment is built on infrastructure you control: self-hosted on your own servers, private cloud with restricted access and encryption, or a hybrid setup.\n\nThe exact stack is chosen to match your security, compliance, and operational requirements, but the underlying principle is constant — your company owns the environment, not us and not a third-party AI vendor.\n\nThis gives you full ownership, data privacy, no vendor lock-in, and long-term flexibility to adapt and scale as your needs evolve.`,
      },
      {
        question: "What does 'private AI infrastructure' mean in practice?",
        answer: `It means your AI runs on servers and cloud resources that are dedicated to your company, with data processing staying inside your controlled environment.\n\nIn practice, that can be self-hosted deployments on your premises, dedicated private cloud infrastructure, or a hybrid where sensitive workloads stay private and less sensitive tasks use more flexible environments.\n\nFor industries with strict confidentiality or regulatory requirements, this architecture is often the only viable path to adopting AI at scale.`,
      },
      {
        question: 'Who owns the system, models, and data after delivery?',
        answer: `You do. The infrastructure is in your accounts, the configurations are yours, and the data remains under your control.\n\nWe avoid proprietary licensing and restrictive contracts; if you want to bring additional vendors in or transition operation to your internal team, you can do so without technical barriers.\n\nOur role is to design, deploy, and help you operate AIOS — not to keep you dependent on us.`,
      },
      {
        question: 'What happens to my data during the project?',
        answer: `We work primarily inside your infrastructure, which means operational and customer data stays within your environment.\n\nAccess is limited to what is required to implement and test the system, and we define data handling and confidentiality terms in the engagement documents.\n\nFor especially sensitive environments, we can design processes where our team never has direct access to production data, using abstraction layers and controlled test datasets.`,
      },
    ],
  },
  {
    heading: 'Process & Support',
    items: [
      {
        question: 'How do projects actually start?',
        answer: `Most AIOS and AI infrastructure projects start with an AI Operations Audit.\n\nYou book a call or request an audit, we review your current systems, workflows, and data, then deliver a report with opportunity mapping and an implementation roadmap.\n\nFrom there, we agree on scope, phases (Company Brain™, Company Analyst™, Company Operator™), and timelines before any implementation begins.`,
      },
      {
        question: 'How do iterations and changes work?',
        answer: `AIOS deployments are iterative by design. Each phase has defined outcomes, and we adjust based on real usage and feedback from your team.\n\nDuring implementation, we maintain documented communication and checkpoints so changes are intentional — not random scope creep.\n\nThe goal is to end up with an AI layer that your team actually uses, not just something that looks good in a slide deck.`,
      },
      {
        question: 'What support is included after launch?',
        answer: `We provide support during and after implementation, with options for ongoing retainers if you want us to continue monitoring, maintaining, and evolving your AIOS.\n\nTypical ongoing work includes refining prompts and workflows, expanding data sources, tuning alerting and reporting, and supporting your team as internal adoption grows.\n\nSupport terms are defined in each agreement so you know exactly what is covered once the initial deployment is live.`,
      },
      {
        question: "What if I'm not ready for a full AIOS deployment?",
        answer: `Then we start smaller. The AI Operations Audit, a focused Company Brain™ rollout, or a single AI employee around one function are common first steps.\n\nThe architecture is designed so early components can grow into a full AIOS later without rebuilding from scratch.\n\nThis lets you prove value internally and align stakeholders before committing to a larger transformation.`,
      },
      {
        question: 'Do you work with clients in all time zones?',
        answer: `Yes. We are based in Vietnam (GMT+7) and work with clients across the US, EU, LATAM, and SEA using a primarily asynchronous collaboration model.\n\nKey decisions and milestones are documented, and calls are scheduled to fit both sides rather than forcing constant meetings.\n\nMost teams find that this async rhythm creates more clarity and fewer interruptions while still moving the project forward reliably.`,
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
              href="mailto:contact@vispaico.com"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              contact@vispaico.com
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
              href="mailto:contact@vispaico.com"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              contact@vispaico.com
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
