import type { Metadata } from 'next';

import { ArticleAd } from '@/components/ArticleAd';
import { Link } from '@/i18n/navigation';
import { metaAdsFaqItems } from '@/data/metaAdsFaq';

export const metadata: Metadata = {
  title: 'Meta Ads FAQ | Costs, Strategy, Targeting & Setup | Vispaico',
  description:
    'Answers to every Meta ads question—costs, targeting, setup, mistakes to avoid, and how to scale—written by Vispaico for fast-moving founders.'
};

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';

export default function MetaAdsFaqPage() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={`${sectionPadding}`}>
        <div className={`${containerClass}`}>
          <div className="space-y-10 rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">Meta Ads FAQ</p>
              <h1 className="text-[clamp(36px,5vw,64px)] font-[600] leading-tight">
                <span className="text-[var(--text-primary)]">Meta ads, minus</span> the agency smoke.
                <br />
                Straight answers, built to ship.
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
                Fast-moving founders need clarity, not fluff. We pulled every Meta ads question we hear in strategy calls and answered it in plain English with real numbers and actionable focus.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-base)] px-6 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Book a short call
                <span aria-hidden>→</span>
              </Link>
              <div className="text-sm text-[var(--text-secondary)]">
                We keep it short—no deck, no fluff, just the playbook.
              </div>
            </div>
            <div className="flex justify-center pt-6">
              <ArticleAd variant="mobile-banner" />
            </div>
          </div>
        </div>
      </section>

      <section className={`${sectionPadding}`}>
        <div className={`${containerClass} space-y-8`}>
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">All questions</p>
            <h2 className="text-3xl font-[600]">Tap a question to get the straight answer</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {metaAdsFaqItems.map((item) => (
              <Link
                key={item.slug}
                href={`/meta-ads-faq/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    Meta ads clarity
                  </div>
                  <h3 className="text-2xl font-[600] text-[var(--text-primary)] leading-tight transition group-hover:text-[var(--accent)]">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)] line-clamp-3">{item.answer}</p>
                </div>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-[var(--text-primary)]">
                  Read answer
                  <svg
                    aria-hidden
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
