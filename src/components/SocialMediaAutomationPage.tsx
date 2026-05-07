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

const SocialMediaAutomationPage: React.FC = () => {
  const { openModal } = useContactModal();

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Social Media" />
          <h1 className="mt-3 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Your entire social presence. Run for you.
          </h1>
          <p className="mt-6 max-w-[540px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Most businesses know they should be posting. Almost none do it
            consistently. We take over the whole operation — content creation,
            repurposing, scheduling, and publishing across every platform —
            so you show up every day without thinking about it.
          </p>
          <p className="mt-4 text-[14px] text-[var(--text-muted)]">from $1,800/mo · fully managed</p>
          <div className="mt-6">
            <button
              type="button"
              onClick={openModal}
              className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Get a proposal →
            </button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="The full operation" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            We don&apos;t just schedule posts. We run your content.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[
              'Original article writing (long-form, SEO-optimized, your voice)',
              'Content repurposing: 1 article → LinkedIn, Instagram, X, Facebook, TikTok, Threads — formatted natively for each platform',
              'Platform management via self-hosted Postiz (your data, your platform, no third-party lock-in)',
              'Monthly content calendar — planned, approved, then executed',
              'Hashtag research, caption writing, and CTA optimization per post',
              'Posting schedule optimized per platform and per audience timezone',
              'Monthly performance report: reach, engagement, follower growth',
              'Engagement monitoring — we flag comments worth your attention',
              'Available in English, German, and Spanish',
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
            Month one is setup. Month two is momentum.
          </h2>
          <div className="mt-8 flex flex-col gap-6">
            {[
              "Onboarding: we learn your brand voice, target audience, and content goals. One 60-minute call. No lengthy briefs.",
              "Week 1: We build your content calendar and submit it for approval. You edit, approve, or reject — total control.",
              "Week 2: First batch goes live. We monitor performance and adjust cadence per platform.",
              "Month 2: The rhythm is established. Content goes out daily. You receive a weekly summary and monthly report.",
              "Ongoing: We optimize based on what performs. The content gets sharper every month.",
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
            For businesses that have a story worth telling — but no time to tell it.
          </h2>
          <p className="mt-4 text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Founders running lean teams. B2B companies with great work that nobody knows about. Clinics and service businesses that
            need to build local trust before someone books. E-commerce brands that need to stay visible between paid campaigns.
            <br /><br />
            If your LinkedIn hasn&apos;t been updated in three months, your Instagram is inconsistent, or you keep meaning to start posting
            and never do — this service runs the entire thing for you. Consistently. Professionally. In your voice.
          </p>
        </div>
      </section>

      {/* Why It Works — 3-column stat grid */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Why it works" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            We write the articles. The articles become the posts.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-3">
            {[
              {
                stat: '1 → 10',
                label: 'content pieces per article',
                text: "Every long-form article we write becomes LinkedIn posts, Instagram carousels, X threads, and short captions — all formatted for their platform. Nothing is wasted.",
              },
              {
                stat: '3 languages',
                label: 'EN · DE · ES',
                text: "We produce and publish in all three simultaneously if needed. One content operation covering EU, LATAM, and English-speaking markets at once.",
              },
              {
                stat: 'Self-hosted',
                label: 'Postiz — your data, your platform',
                text: "Unlike Buffer or Hootsuite, your Postiz instance runs on your servers. You own the data, the access, and the platform. No subscription lock-in.",
              },
            ].map((col) => (
              <div key={col.stat} className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                <p className="text-[clamp(28px,3vw,40px)] font-[600] text-[var(--text-primary)]">{col.stat}</p>
                <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{col.label}</p>
                <p className="mt-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">{col.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing — 3 columns */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Investment" />
          <h2 className="mt-3 text-[clamp(28px,3vw,42px)] font-[600] leading-[1.1]">
            Three tiers. One team. Full execution.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Distribution */}
            <article className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">Distribution</h3>
              <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$600 /mo</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">You provide the content. We handle everything else.</p>
              <div className="mt-5 h-px bg-[var(--border)]" />
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                {['Postiz setup + management', 'Repurposing across all platforms', 'Scheduling + publishing', 'Monthly performance report'].map((f) => (
                  <li key={f} className="leading-[1.75]">{f}</li>
                ))}
              </ul>
              <p className="mt-4 text-[12px] text-[var(--text-muted)]">
                Ideal if you already create content and need consistent distribution without the manual work.
              </p>
            </article>

            {/* Full Management — Featured */}
            <article className="flex flex-col rounded-[10px] border border-[#3a3a36] bg-[var(--bg-surface)] p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">Full Management</h3>
                <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[10px] text-[var(--text-secondary)]">Most popular</span>
              </div>
              <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$1,800 /mo</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">We create, repurpose, and publish everything.</p>
              <div className="mt-5 h-px bg-[var(--border)]" />
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                {[
                  'Everything in Distribution',
                  '8 original articles/mo (your voice, human-edited)',
                  'Platform-native repurposing for every channel',
                  'Monthly content calendar with approval workflow',
                  'Hashtag research + caption optimization',
                  '1 language (EN, DE, or ES)',
                  'Weekly summary + monthly performance report',
                ].map((f) => (
                  <li key={f} className="leading-[1.75]">{f}</li>
                ))}
              </ul>
            </article>

            {/* Content Engine */}
            <article className="flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7">
              <h3 className="text-[16px] font-[600] text-[var(--text-primary)]">Content Engine</h3>
              <p className="mt-2 text-[22px] font-[600] text-[var(--text-primary)]">$3,500 /mo</p>
              <p className="mt-1 text-[13px] text-[var(--text-muted)]">Full multilingual content operation.</p>
              <div className="mt-5 h-px bg-[var(--border)]" />
              <ul className="mt-5 space-y-2 text-[13px] text-[var(--text-secondary)]">
                {[
                  'Everything in Full Management',
                  '16 original articles/mo',
                  'EN + DE + ES published simultaneously',
                  'SEO optimization on all articles (feeds your Google rankings too)',
                  'n8n automation for fully hands-off publishing',
                  'Competitor content analysis monthly',
                  'Dedicated content strategist',
                ].map((f) => (
                  <li key={f} className="leading-[1.75]">{f}</li>
                ))}
              </ul>
              <p className="mt-4 text-[12px] text-[var(--text-muted)]">
                This tier overlaps with our SEO & Content service by design. Articles feed both your social calendar and your Google rankings at the same time.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Overlap Callout */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-surface)]">
        <div className={`${container} flex flex-col items-start justify-between gap-8 px-6 py-12 md:flex-row md:items-center`}>
          <div className="max-w-[440px]">
            <SectionLabel text="Pro tip" />
            <h3 className="mt-3 text-[22px] font-[600] leading-[1.2]">
              Pair this with SEO & Content. Pay once. Win twice.
            </h3>
            <p className="mt-3 text-[14px] leading-[1.75] text-[var(--text-secondary)]">
              The Content Engine tier includes SEO-optimized articles. Those same articles rank on Google AND fill your social calendar. One piece of writing, two revenue channels. Clients on the combined package see faster SEO traction because social signals reinforce search rankings.
            </p>
          </div>
          <Link
            href="/services/seo-content"
            className="inline-flex shrink-0 items-center rounded-[7px] border border-[var(--border)] px-5 py-3 text-[14px] font-[500] text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-elevated)]"
          >
            See SEO & Content →
          </Link>
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
                tag: 'SEO & Content',
                title: 'Traffic that compounds',
                description: 'Supply the long-form to repurpose.',
                price: 'from $1,200/mo',
                href: '/services/seo-content',
              },
              {
                tag: 'Automation',
                title: 'Workflows that eliminate manual work',
                description: 'Automate publishing approvals and reports.',
                price: 'from $2,500 per project',
                href: '/services/workflow-automation',
              },
              {
                tag: 'AI Website + Agent',
                title: 'A site that works while you sleep',
                description: 'Your digital front door, always working.',
                price: 'from $3,500 · retainer from $300/mo',
                href: '/services/ai-website-agent',
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
            Ready to show up every day without thinking about it?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            We scope every engagement before you commit. Book a call and we&apos;ll map out your content operation in 30 minutes.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Get a proposal →
            </button>
            <p className="text-[12px] text-[var(--text-muted)]">or email hola@vispaico.com</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SocialMediaAutomationPage;
