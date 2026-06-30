"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

const container = 'mx-auto w-full max-w-[900px]';

const AiOnboardingPage: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Training" />
          <h1 className="mt-3 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Your team using AI properly — in two days.
          </h1>
          <p className="mt-6 max-w-[540px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            Most AI tools get bought and barely used. Not because the team
            isn&apos;t capable — because nobody showed them how to make it
            work for their specific job. We fix that in two days.
          </p>
          <p className="mt-4 text-[14px] text-[var(--text-muted)]">from $2,000 per session · remote or on-site</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Book a session →
            </button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="The workshop" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            Practical skills for real workflows. Not a generic AI overview.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              "Pre-workshop audit: we map your team's current tools and daily workflows before day one",
              "Custom curriculum built around your industry and job functions",
              "Day 1: AI fundamentals + prompt engineering for your use cases",
              "Day 2: Hands-on workflow sessions — each team member leaves with working automations for their actual job",
              "Tool coverage: ChatGPT, Claude, Perplexity, Notion AI, n8n basics, image generation, and any tools you already use",
              "Recorded sessions (optional) for future onboarding of new hires",
              "30-day follow-up Q&A via email or Slack",
              "Written playbook delivered after the workshop (your team's AI usage guide, branded)",
            ].map((feature) => (
              <p key={feature} className="text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                {feature}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="The process" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            Two days of work. Months of productivity gains.
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              "Booking: you tell us your team size, industry, and the tools you currently use.",
              "Week before: we send a 15-minute pre-workshop questionnaire to each participant to understand their daily tasks.",
              "Day 1 (half-day): AI foundations, live prompting, and use-case workshops in your industry.",
              "Day 2 (full day): hands-on building. Each person automates at least one task from their actual workload.",
              "Within 5 days: written playbook delivered. Your team's permanent AI reference guide.",
            ].map((step, index) => (
              <div key={step} className="flex flex-col gap-2 md:flex-row md:items-start">
                <span className="text-[32px] font-[600] text-[var(--text-muted)]">{String(index + 1).padStart(2, '0')}</span>
                <p className="max-w-[820px] text-[15px] leading-[1.75] text-[var(--text-secondary)]">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Ideal client" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            For teams that bought AI tools and aren&apos;t getting results from them.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Marketing teams using ChatGPT like Google. Sales teams that tried AI outreach once and gave up.
            Operations managers who know automation is possible but don&apos;t know where to start.
            Executives who want their whole company moving faster but can&apos;t spend six months on implementation.
            <br /><br />
            This workshop is also the right starting point before investing in any custom AI build.
            Your team understands what&apos;s possible. Your leadership makes better decisions about where to invest next.
          </p>
        </div>
      </section>

      {/* Formats */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="How we deliver it" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            Remote or on-site. Small teams or full companies.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                tag: 'Remote',
                title: 'Video call workshop',
                description: 'Delivered over Zoom or Google Meet. Works for distributed teams across multiple locations. Sessions recorded on request.',
                price: 'from $2,000',
              },
              {
                tag: 'On-site',
                title: 'In-person at your office',
                description: 'We travel to your location for the full 2-day session. Higher engagement, better outcomes for hands-on workflow days. Available in EU, LATAM, and Vietnam.',
                price: 'from $3,500 + travel',
                featured: true,
              },
              {
                tag: 'Ongoing',
                title: 'Monthly AI coaching',
                description: 'For teams that want continued improvement after the initial workshop. Monthly 2-hour group sessions covering new tools, use cases, and workflow reviews.',
                price: 'from $600/mo',
              },
            ].map((card) => (
              <article
                key={card.title}
                className={`flex flex-col rounded-[10px] border bg-[var(--bg-surface)] p-7 ${
                  card.featured ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                }`}
              >
                <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {card.tag}
                </span>
                <h3 className="mt-2 text-[16px] font-[600] text-[var(--text-primary)]">{card.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{card.description}</p>
                <div className="mt-5 h-px bg-[var(--border)]" />
                <p className="mt-4 text-[13px] text-[var(--text-muted)]">{card.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className="flex justify-center">
          <div className={container}>
            <div className="mx-auto max-w-[560px]">
              <SectionLabel text="Investment" />
              <article className="mt-8 flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
                <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">2-Day AI Workshop</h3>
                <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$2,000 – $5,000</p>
                <p className="mt-1 text-[13px] text-[var(--text-muted)]">
                  Price scales with team size and whether the session is remote or on-site.
                </p>
                <div className="mt-5 h-px bg-[var(--border)]" />
                <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                  {[
                    'Pre-workshop team audit',
                    'Custom curriculum for your industry',
                    '2-day live session (remote or on-site)',
                    'Hands-on workflow building for every participant',
                    'Written AI playbook (branded, yours to keep)',
                    '30-day follow-up support',
                  ].map((f) => (
                    <li key={f} className="leading-[1.75]">{f}</li>
                  ))}
                </ul>
                <p className="mt-4 text-center text-[12px] text-[var(--text-muted)]">
                  Teams of 10+ receive a custom quote. Enterprise engagements include quarterly refresh sessions.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <h2 className="text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            You might also need
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                tag: 'Consulting',
                title: 'Your AI roadmap in two days',
                description: 'Strategy before training. Know what to focus on.',
                price: 'from $2,000 · workshop + full report',
                href: '/services/ai-consulting',
              },
              {
                tag: 'Automation',
                title: 'Workflows that eliminate manual work',
                description: 'Automate what your team learns in the workshop.',
                price: 'from $2,500 per project',
                href: '/services/workflow-automation',
              },
              {
                tag: 'Infrastructure',
                title: 'Your own private AI stack',
                description: 'Secure infrastructure for your team\'s AI tools.',
                price: 'from $5,000 · managed from $500/mo',
                href: '/services/private-ai-stack',
              },
            ].map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="flex min-h-[220px] flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 text-[var(--text-primary)] transition-colors hover:border-[#444440]"
              >
                <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {item.tag}
                </span>
                <h3 className="mt-2 text-[18px] font-[600]">{item.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{item.description}</p>
                <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
                  <span>{item.price}</span>
                  <span aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} text-center`}>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            Get your team moving faster than your competitors.
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            We&apos;ll scope the workshop around your team&apos;s actual needs before you commit to anything.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Book a session →
            </button>
            <p className="text-[12px] text-[var(--text-muted)]">or email contact@vispaico.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AiOnboardingPage;
