"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

const containerClass = 'mx-auto w-full max-w-[900px]';
const sectionSpacing = 'px-6 py-[64px] md:py-[96px]';

const phases = [
  {
    number: '01',
    name: 'Company Brain™',
    subtitle: 'Knowledge Layer',
    description: 'The Company Brain connects documents, SOPs, internal systems, CRM records, project information, and institutional knowledge into one searchable intelligence layer.',
    capabilities: [
      'Answer employee questions instantly',
      'Retrieve SOPs and policies',
      'Support onboarding',
      'Reduce interruptions',
      'Preserve institutional knowledge',
    ],
    questions: [
      'How do we handle customer refunds?',
      'Where is the latest onboarding process?',
      'Who owns this workflow?',
      'What proposal template should I use?',
    ],
    outcome: 'Faster onboarding. Less internal friction. Better knowledge retention.',
  },
  {
    number: '02',
    name: 'Company Analyst™',
    subtitle: 'Business Intelligence Layer',
    description: 'The Company Analyst transforms disconnected business data into actionable insights.',
    capabilities: [
      'Sales analysis',
      'Financial reporting',
      'Operational insights',
      'KPI monitoring',
      'Trend detection',
    ],
    questions: [
      'Why did revenue decline last month?',
      'Which products are performing best?',
      'Which customers are at risk?',
      'What is affecting profitability?',
    ],
    outcome: 'Faster decisions. Reduced reporting effort. Greater business visibility.',
  },
  {
    number: '03',
    name: 'Company Operator™',
    subtitle: 'Operational Intelligence Layer',
    description: 'The Company Operator continuously monitors your business and identifies emerging problems before they become expensive.',
    capabilities: [
      'Bottleneck detection',
      'Capacity forecasting',
      'Delivery monitoring',
      'Risk detection',
      'Operational alerts',
    ],
    questions: [
      'Delivery delays detected.',
      'Support backlog increasing.',
      'Customer churn risk rising.',
      'Capacity shortage forecasted.',
    ],
    outcome: 'Proactive management. Better forecasting. Improved scalability.',
  },
];

const AiosPageContent: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="px-6 pt-[80px] pb-[64px] md:pt-[120px] md:pb-[96px]">
        <div className={containerClass}>
          <SectionLabel text="Private AI Operating Systems" />
          <h1 className="mt-4 text-[clamp(42px,5.5vw,68px)] font-[600] leading-[1.05] tracking-[-0.03em]">
            Vispaico AIOS™
          </h1>
          <p className="mt-3 text-[clamp(18px,2.5vw,26px)] font-[500] leading-[1.3] text-[var(--text-secondary)]">
            Your Company&apos;s Private AI Workforce
          </p>
          <p className="mt-6 max-w-[600px] text-[17px] leading-[1.8] text-[var(--text-secondary)]">
            A secure AI operating system that understands your business, analyzes your data, and helps your team make better decisions every day.
          </p>
          <p className="mt-4 max-w-[600px] text-[15px] leading-[1.8] text-[var(--text-muted)]">
            Most businesses already have the knowledge, data, and workflows they need. The problem is that information is fragmented across documents, spreadsheets, emails, CRMs, project systems, and employee knowledge. Vispaico AIOS connects these systems into one intelligent operating layer that continuously supports your team.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Book an AI Strategy Call
            </button>
            <Link
              href="/services/ai-operations-audit"
              className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              Request an AI Operations Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEM SECTION
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <SectionLabel text="The Problem" />
          <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Your Company Already Knows The Answers.
          </h2>
          <p className="mt-3 text-[17px] leading-[1.8] text-[var(--text-secondary)]">
            They are just impossible to find.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              'Knowledge trapped inside employees',
              'Disconnected systems',
              'Manual reporting',
              'Operational blind spots',
              'Duplicated work',
              'Poor visibility across teams',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4">
                <span className="mt-[3px] text-[var(--text-muted)]">—</span>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 max-w-[640px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
            The result is slower decisions, higher costs, and unnecessary complexity. AIOS solves this by creating a unified intelligence layer across your business.
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AIOS OVERVIEW
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <SectionLabel text="The AIOS Framework" />
          <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Three AI Employees. One Intelligent Company.
          </h2>
          <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            AIOS is deployed in phases. Each phase creates immediate business value while building toward a fully operational AI layer.
          </p>

          <div className="mt-12 flex flex-col gap-12">
            {phases.map((phase, index) => (
              <article
                key={phase.name}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 md:p-10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Phase {phase.number}
                    </span>
                    <h3 className="mt-2 text-[24px] font-[600] text-[var(--text-primary)]">{phase.name}</h3>
                    <p className="text-[13px] font-[500] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                      {phase.subtitle}
                    </p>
                  </div>
                </div>

                <p className="mt-6 max-w-[640px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
                  {phase.description}
                </p>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Capabilities
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.capabilities.map((cap) => (
                        <li key={cap} className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                          {cap}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Example {index === 2 ? 'Alerts' : 'Questions'}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {phase.questions.map((q) => (
                        <li key={q} className="rounded-[6px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-2 text-[13px] italic text-[var(--text-secondary)]">
                          &ldquo;{q}&rdquo;
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Outcome
                    </p>
                    <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                      {phase.outcome}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INFRASTRUCTURE
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <SectionLabel text="Infrastructure" />
          <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Built On Infrastructure You Control.
          </h2>
          <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Every AIOS deployment is built on private infrastructure owned by your company.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: 'Self-hosted', description: 'Deployed on your own servers, on your premises. Complete physical control.' },
              { title: 'Private cloud', description: 'Deployed on dedicated cloud infrastructure with restricted access and encryption.' },
              { title: 'Hybrid deployment', description: 'Combined approach that matches each workload to the right environment.' },
            ].map((option) => (
              <div key={option.title} className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
                <p className="text-[15px] font-[600] text-[var(--text-primary)]">{option.title}</p>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-4">
            {[
              { stat: 'Full ownership', desc: 'Everything belongs to you.' },
              { stat: 'Data privacy', desc: 'Your data never leaves your infrastructure.' },
              { stat: 'No vendor lock-in', desc: 'No licensing traps or migration penalties.' },
              { stat: 'Long-term flexibility', desc: 'Adapt and scale on your terms.' },
            ].map((item) => (
              <div key={item.stat} className="text-center rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
                <p className="text-[14px] font-[600] text-[var(--text-primary)]">{item.stat}</p>
                <p className="mt-1 text-[13px] text-[var(--text-muted)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AI OPERATIONS AUDIT
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <SectionLabel text="Start Here" />
          <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Start With An AI Operations Audit.
          </h2>
          <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Not every company should deploy AI in the same way. Our AI Operations Audit identifies the highest-value opportunities inside your business and provides a practical roadmap for implementation.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              'Workflow analysis',
              'Knowledge mapping',
              'Data readiness assessment',
              'Automation opportunities',
              'Implementation roadmap',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4">
                <span className="text-[var(--text-muted)]">→</span>
                <p className="text-[14px] text-[var(--text-secondary)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-[22px] font-[600] text-[var(--text-primary)]">Starting at $1,500</span>
            <Link
              href="/services/ai-operations-audit"
              className="rounded-[7px] border border-[var(--border)] px-6 py-2 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              Book An Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <SectionLabel text="Pricing" />
          <h2 className="mt-3 text-[clamp(28px,3.5vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Choose Your Starting Point.
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Audit Card */}
            <div className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <p className="text-[13px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">AI Operations Audit</p>
              <p className="mt-2 text-[28px] font-[600] text-[var(--text-primary)]">Starting at $1,500</p>
              <ul className="mt-6 space-y-2 text-[14px] text-[var(--text-secondary)]">
                <li>Business assessment</li>
                <li>Opportunity mapping</li>
                <li>Implementation roadmap</li>
              </ul>
            </div>

            {/* Company Brain Card */}
            <div className="flex flex-col rounded-[10px] border border-[#3a3a36] bg-[var(--bg-surface)] p-7">
              <p className="text-[13px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Company Brain&trade;</p>
              <div className="mt-4">
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Setup</p>
                <p className="text-[24px] font-[600] text-[var(--text-primary)]">$4,000+</p>
              </div>
              <div className="mt-3">
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Monthly</p>
                <p className="text-[24px] font-[600] text-[var(--text-primary)]">$500+</p>
              </div>
            </div>

            {/* Brain + Analyst Card */}
            <div className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <p className="text-[13px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Company Brain&trade; + Company Analyst&trade;</p>
              <div className="mt-4">
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Setup</p>
                <p className="text-[24px] font-[600] text-[var(--text-primary)]">$10,000+</p>
              </div>
              <div className="mt-3">
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Monthly</p>
                <p className="text-[24px] font-[600] text-[var(--text-primary)]">$1,500+</p>
              </div>
            </div>

            {/* Full AIOS Card */}
            <div className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <p className="text-[13px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Full AIOS&trade;</p>
              <p className="mt-2 text-[13px] text-[var(--text-secondary)]">
                Company Brain&trade; &middot; Company Analyst&trade; &middot; Company Operator&trade;
              </p>
              <p className="mt-4 text-[13px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">Custom Pricing</p>
              <p className="mt-2 text-[24px] font-[600] text-[var(--text-primary)]">$20,000&ndash;50,000+</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">Typical implementations</p>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={openModal}
                  className="rounded-[7px] border border-[var(--border)] px-5 py-2 text-[13px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
                >
                  Contact us for pricing
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={`${containerClass} text-center`}>
          <h2 className="text-[clamp(32px,4vw,52px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Build Your Company&apos;s AI Workforce.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
            Start with knowledge. Expand into analytics. Evolve into a fully operational AI layer that continuously supports your business.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Book an AI Strategy Call
            </button>
            <Link
              href="/services/ai-operations-audit"
              className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              Request an AI Operations Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiosPageContent;
