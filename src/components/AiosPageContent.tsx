"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { motion, useReducedMotion } from 'framer-motion';
import { useContactModal } from '@/context/ContactModalContext';
import Reveal from '@/components/motion/Reveal';
import CountUp from '@/components/motion/CountUp';
import { dur, ease } from '@/lib/motion';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
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
  const reduceMotion = useReducedMotion();

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">

      {/* ══════════════════════════════════════
          HERO
          ══════════════════════════════════════ */}
      <section className="px-6 pt-[80px] pb-[64px] md:pt-[120px] md:pb-[96px]">
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Private AI Operating Systems" />
          </Reveal>
          <Reveal delay={0.06} y={20} duration={0.7}>
            <h1
              className="mt-4 text-[clamp(42px,5.5vw,68px)] leading-[1.05] tracking-[-0.035em] text-[var(--text-primary)]"
              style={{ fontFamily: 'Inter, system-ui, sans-serif', fontWeight: 700 }}
            >
              Vispaico AIOS&trade;
            </h1>
          </Reveal>
          <Reveal delay={0.14} y={12} duration={0.6}>
            <p
              className="mt-3 text-[clamp(18px,2.5vw,26px)] leading-[1.3] text-[var(--text-muted)]"
              style={{
                fontFamily: '"Newsreader", Georgia, serif',
                fontStyle: 'italic',
                fontWeight: 400,
                letterSpacing: '-0.02em',
              }}
            >
              Your Company&apos;s Private AI Workforce
            </p>
          </Reveal>
          <Reveal delay={0.22} y={12} duration={0.6}>
            <p className="mt-6 max-w-[600px] text-[17px] leading-[1.8] text-[var(--text-secondary)]">
              A secure AI operating system that understands your business, analyzes your data, and helps your team make better decisions every day.
            </p>
          </Reveal>
          <Reveal delay={0.3} y={10} duration={0.6}>
            <p className="mt-4 max-w-[600px] text-[15px] leading-[1.8] text-[var(--text-muted)]">
              Most businesses already have the knowledge, data, and workflows they need. The problem is that information is fragmented across documents, spreadsheets, emails, CRMs, project systems, and employee knowledge. Vispaico AIOS connects these systems into one intelligent operating layer that continuously supports your team.
            </p>
          </Reveal>
          <Reveal delay={0.38} y={10} duration={0.6}>
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
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEM SECTION
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="The Problem" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3.5vw,44px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Your Company Already Knows The Answers.
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-3 text-[17px] leading-[1.8] text-[var(--text-secondary)]">
              They are just impossible to find.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              'Knowledge trapped inside employees',
              'Disconnected systems',
              'Manual reporting',
              'Operational blind spots',
              'Duplicated work',
              'Poor visibility across teams',
            ].map((item, i) => (
              <Reveal
                key={item}
                delay={0.18 + i * 0.05}
                y={8}
                duration={0.5}
                className="flex items-start gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4"
              >
                <span className="mt-[3px] text-[var(--text-muted)]">—</span>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.5} y={10} duration={0.6}>
            <p className="mt-8 max-w-[640px] text-[15px] leading-[1.8] text-[var(--text-secondary)]">
              The result is slower decisions, higher costs, and unnecessary complexity. AIOS solves this by creating a unified intelligence layer across your business.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AIOS OVERVIEW
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="The AIOS Framework" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3.5vw,44px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Three AI Employees. One Intelligent Company.
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              AIOS is deployed in phases. Each phase creates immediate business value while building toward a fully operational AI layer.
            </p>
          </Reveal>

          <div className="mt-12 flex flex-col gap-12">
            {phases.map((phase, index) => (
              <Reveal
                key={phase.name}
                delay={0.18 + index * 0.08}
                y={20}
                duration={0.7}
                className="block"
              >
                <article className="relative overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 md:p-10">
                  {/* Gradient top-line for the first phase (Company Brain) — the keystone. */}
                  {index === 0 && (
                    <motion.span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true, margin: '-10% 0px' }}
                      transition={{ duration: 0.9, delay: 0.4, ease }}
                    />
                  )}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className="font-mono text-[11px] font-[500] uppercase tracking-[0.12em] text-[var(--text-muted)]"
                        style={{ fontVariantNumeric: 'tabular-nums' }}
                      >
                        Phase {phase.number}
                      </span>
                      <h3
                        className="mt-2 text-[24px] text-[var(--text-primary)]"
                        style={{ fontWeight: 650, letterSpacing: '-0.02em' }}
                      >
                        {phase.name}
                      </h3>
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
                      <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
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
                      <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
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
                      <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">
                        Outcome
                      </p>
                      <p className="mt-3 text-[15px] leading-[1.7] text-[var(--text-secondary)]">
                        {phase.outcome}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          INFRASTRUCTURE
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Infrastructure" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3.5vw,44px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Built On Infrastructure You Control.
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Every AIOS deployment is built on private infrastructure owned by your company.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: 'Self-hosted', description: 'Deployed on your own servers, on your premises. Complete physical control.' },
              { title: 'Private cloud', description: 'Deployed on dedicated cloud infrastructure with restricted access and encryption.' },
              { title: 'Hybrid deployment', description: 'Combined approach that matches each workload to the right environment.' },
            ].map((option, i) => (
              <Reveal
                key={option.title}
                delay={0.18 + i * 0.06}
                y={12}
                duration={0.6}
                className="rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5"
              >
                <p className="text-[15px] font-[600] text-[var(--text-primary)]">{option.title}</p>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{option.description}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-4">
            {[
              { stat: 'Full ownership', desc: 'Everything belongs to you.' },
              { stat: 'Data privacy', desc: 'Your data never leaves your infrastructure.' },
              { stat: 'No vendor lock-in', desc: 'No licensing traps or migration penalties.' },
              { stat: 'Long-term flexibility', desc: 'Adapt and scale on your terms.' },
            ].map((item, i) => (
              <Reveal
                key={item.stat}
                delay={0.36 + i * 0.05}
                y={8}
                duration={0.5}
                className="text-center rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-5"
              >
                <p className="text-[14px] font-[600] text-[var(--text-primary)]">{item.stat}</p>
                <p className="mt-1 text-[13px] text-[var(--text-muted)]">{item.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          AI OPERATIONS AUDIT
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Start Here" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3.5vw,44px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Start With An AI Operations Audit.
            </h2>
          </Reveal>
          <Reveal delay={0.14} y={10} duration={0.6}>
            <p className="mt-4 max-w-[600px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Not every company should deploy AI in the same way. Our AI Operations Audit identifies the highest-value opportunities inside your business and provides a practical roadmap for implementation.
            </p>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
            {[
              'Workflow analysis',
              'Knowledge mapping',
              'Data readiness assessment',
              'Automation opportunities',
              'Implementation roadmap',
            ].map((item, i) => (
              <Reveal
                key={item}
                delay={0.18 + i * 0.05}
                y={8}
                duration={0.5}
                className="flex items-center gap-3 rounded-[8px] border border-[var(--border)] bg-[var(--bg-surface)] p-4"
              >
                <span className="text-[var(--text-muted)]">→</span>
                <p className="text-[14px] text-[var(--text-secondary)]">{item}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.45} y={8} duration={0.5}>
            <div className="mt-6 flex items-center gap-4">
              <span className="text-[22px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                Starting at <CountUp value="$1,500" />
              </span>
              <Link
                href="/services/ai-operations-audit"
                className="rounded-[7px] border border-[var(--border)] px-6 py-2 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                Book An Audit
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PRICING
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} border-t border-[var(--border)]`}>
        <div className={containerClass}>
          <Reveal y={8} duration={0.5}>
            <SectionLabel text="Pricing" />
          </Reveal>
          <Reveal delay={0.06} y={14} duration={0.7}>
            <h2
              className="mt-3 text-[clamp(28px,3.5vw,44px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Choose Your Starting Point.
            </h2>
          </Reveal>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            {/* Audit Card */}
            <Reveal delay={0.14} y={12} duration={0.6} className="flex">
              <div className="flex w-full flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">AI Operations Audit</p>
                <p className="mt-2 text-[28px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                  <CountUp value="$1,500" />
                </p>
                <ul className="mt-6 space-y-2 text-[14px] text-[var(--text-secondary)]">
                  <li>Business assessment</li>
                  <li>Opportunity mapping</li>
                  <li>Implementation roadmap</li>
                </ul>
              </div>
            </Reveal>

            {/* Company Brain Card (featured) */}
            <Reveal delay={0.2} y={12} duration={0.6} className="flex">
              <div className="relative w-full overflow-hidden rounded-[10px] border border-[#3a3a36] bg-[var(--bg-surface)] p-7">
                {/* Breathing glow — the most-prominent card on the page. */}
                {!reduceMotion && (
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute -right-20 -top-20 h-[280px] w-[280px] rounded-full"
                    style={{
                      background:
                        'radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)',
                    }}
                    initial={{ opacity: 0.5 }}
                    animate={{ opacity: [0.5, 0.85, 0.5] }}
                    transition={{ duration: dur.breathe, repeat: Infinity, ease: 'easeInOut' }}
                  />
                )}
                <motion.span
                  aria-hidden
                  className="pointer-events-none absolute left-0 top-0 h-[1px] w-full origin-left bg-gradient-to-r from-[#f97316] via-[#f97316] to-transparent"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true, margin: '-10% 0px' }}
                  transition={{ duration: 0.9, delay: 0.4, ease }}
                />
                <p className="relative text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Company Brain&trade;</p>
                <div className="relative mt-4">
                  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Setup</p>
                  <p className="text-[24px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                    <CountUp value="$4,000+" />
                  </p>
                </div>
                <div className="relative mt-3">
                  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Monthly</p>
                  <p className="text-[24px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                    <CountUp value="$500+" />
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Brain + Analyst Card */}
            <Reveal delay={0.26} y={12} duration={0.6} className="flex">
              <div className="flex w-full flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Company Brain&trade; + Company Analyst&trade;</p>
                <div className="mt-4">
                  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Setup</p>
                  <p className="text-[24px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                    <CountUp value="$10,000+" />
                  </p>
                </div>
                <div className="mt-3">
                  <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Monthly</p>
                  <p className="text-[24px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                    <CountUp value="$1,500+" />
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Full AIOS Card */}
            <Reveal delay={0.32} y={12} duration={0.6} className="flex">
              <div className="flex w-full flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <p className="text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Full AIOS&trade;</p>
                <p className="mt-2 text-[13px] text-[var(--text-secondary)]">
                  Company Brain&trade; &middot; Company Analyst&trade; &middot; Company Operator&trade;
                </p>
                <p className="mt-4 text-[11px] font-[600] uppercase tracking-[0.12em] text-[var(--text-muted)]">Custom Pricing</p>
                <p className="mt-2 text-[24px] text-[var(--text-primary)]" style={{ fontWeight: 650 }}>
                  <CountUp value="$20,000–50,000+" />
                </p>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
          ══════════════════════════════════════ */}
      <section className={`${sectionSpacing} relative border-t border-[var(--border)]`}>
        <motion.div
          aria-hidden
          className="absolute left-1/2 top-0 h-[1px] w-[min(900px,calc(100%-3rem))] -translate-x-1/2 origin-left bg-gradient-to-r from-transparent via-[#f97316] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 1.2, ease }}
        />
        <div className={`${containerClass} text-center`}>
          <Reveal y={14} duration={0.7}>
            <h2
              className="text-[clamp(32px,4vw,52px)] leading-[1.08] tracking-[-0.03em] text-[var(--text-primary)]"
              style={{ fontWeight: 650 }}
            >
              Build Your Company&apos;s AI Workforce.
            </h2>
          </Reveal>
          <Reveal delay={0.1} y={10} duration={0.6}>
            <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.8] text-[var(--text-secondary)]">
              Start with knowledge. Expand into analytics. Evolve into a fully operational AI layer that continuously supports your business.
            </p>
          </Reveal>
          <Reveal delay={0.18} y={8} duration={0.5}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={openModal}
                className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
              >
                Book an AI Strategy Call →
              </button>
              <Link
                href="/services/ai-operations-audit"
                className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                Request an AI Operations Audit →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
};

export default AiosPageContent;
