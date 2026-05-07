import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleAd } from '@/components/ArticleAd';
import { Link } from '@/i18n/navigation';
import { metaAdsFaqItems } from '@/data/metaAdsFaq';

export const dynamicParams = false;

export async function generateStaticParams() {
  return metaAdsFaqItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = metaAdsFaqItems.find((faq) => faq.slug === slug);
  if (!item) {
    return { title: 'Meta Ads FAQ | Vispaico' };
  }

  return {
    title: item.metaTitle ?? `${item.question} | Meta Ads FAQ | Vispaico`,
    description: item.metaDescription ?? item.answer
  };
}

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';

export default async function MetaAdsFaqAnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = metaAdsFaqItems.find((faq) => faq.slug === slug);

  if (!item) {
    notFound();
  }

  const related = metaAdsFaqItems.filter((faq) => faq.slug !== slug).slice(0, 6);

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={`${sectionPadding}`}>
        <div className={`${containerClass} space-y-8`}>
          <div className="space-y-6 rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_30px_70px_rgba(0,0,0,0.55)]">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <Link
                href="/meta-ads-faq"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
              >
                <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0 7-7m-7 7h18" />
                </svg>
                Back to Meta Ads FAQ
              </Link>
              <div className="flex flex-wrap items-center gap-2 text-[0.65rem] uppercase tracking-[0.35em] text-[var(--text-muted)]">
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-3 py-1">Meta ads clarity</span>
                <span className="rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-3 py-1">Built by Vispaico</span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">Meta Ads FAQ</p>
              <h1 className="text-[clamp(32px,5vw,64px)] font-[600] leading-tight">
                {item.question}
              </h1>
              <p className="text-lg text-[var(--text-secondary)] font-light max-w-3xl">{item.answer}</p>
            </div>
          </div>

          <div className="space-y-6 rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
            <div className="rounded-[18px] border border-[var(--border)] bg-[var(--bg-base)] p-6 shadow-inner">
              <p className="text-sm font-semibold text-[var(--text-secondary)]">Need this done for you?</p>
              <p className="mt-2 text-base text-[var(--text-primary)]">
                We build, test, and scale Meta ads for founders who want conversions over vanity metrics. Let’s ship a creative that wins.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[var(--text-primary)] shadow-lg transition hover:shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                >
                  Talk with Vispaico
                  <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/meta-ads-faq"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--bg-base)] px-4 py-2 text-sm font-semibold text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                >
                  Back to all questions
                </Link>
              </div>
            </div>

            {item.longAnswer && (
              <div className="space-y-4 text-base leading-relaxed text-[var(--text-secondary)]">
                {item.longAnswer
                  .split('\n\n')
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p key={idx}>{paragraph.trim()}</p>
                  ))}
              </div>
            )}

            <div className="flex justify-center pt-4">
              <ArticleAd variant="mobile-banner" />
            </div>
          </div>

          {related.length > 0 && (
            <div className="space-y-4 rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 shadow-[0_16px_60px_rgba(0,0,0,0.35)]">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">More meta answers</p>
              <div className="grid gap-3 md:grid-cols-2">
                {related.map((faq) => (
                  <Link
                    key={faq.slug}
                    href={`/meta-ads-faq/${faq.slug}`}
                    className="inline-flex items-start gap-2 rounded-[14px] border border-[var(--border)] bg-[var(--bg-base)] px-3 py-2 text-sm text-[var(--text-primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden />
                    <span>{faq.question}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
