import type { Metadata } from 'next';

import { ArticleAd } from '@/components/ArticleAd';
import { Link } from '@/i18n/navigation';
import { seoQuestionItems } from '@/data/seoQuestions';

export const metadata: Metadata = {
  title: 'SEO Questions | Ranking, AEO, Strategy | Vispaico',
  description:
    'Straight answers to the biggest SEO and AEO questions—rank better, earn citations, and scale organic growth without fluff.'
};

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';

export default function SeoQuestionsPage() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={`${sectionPadding}`}>
        <div className={`${containerClass}`}>
          <div className="space-y-10 rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">SEO Questions</p>
              <h1 className="text-[clamp(36px,5vw,64px)] font-[600] leading-tight">
                <span className="text-[var(--text-primary)]">SEO, minus</span> the fluff.
                <br />
                Straight answers, built to rank.
              </h1>
              <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
                You need the playbook, not platitudes. These answers were written for founders who spot a ranking problem and want to fix it today.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-[12px] border border-[var(--border)] bg-[var(--bg-base)] px-6 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                Talk SEO strategy
                <span aria-hidden>→</span>
              </Link>
              <div className="text-sm text-[var(--text-secondary)]">Immediate answers, zero fluff.</div>
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
            {seoQuestionItems.map((item) => (
              <Link
                key={item.slug}
                href={`/seo-questions/${item.slug}`}
                className="group flex h-full flex-col justify-between rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_15px_45px_rgba(0,0,0,0.45)] transition hover:-translate-y-1 hover:border-[var(--accent)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                    SEO clarity
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
