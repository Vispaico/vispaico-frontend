import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ArticleAd } from '@/components/ArticleAd';
import { Link } from '@/i18n/navigation';
import { seoQuestionItems } from '@/data/seoQuestions';

export const dynamicParams = false;

export async function generateStaticParams() {
  return seoQuestionItems.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = seoQuestionItems.find((faq) => faq.slug === slug);
  if (!item) {
    return { title: 'SEO Questions | Vispaico' };
  }

  return {
    title: item.metaTitle ?? `${item.question} | SEO Questions | Vispaico`,
    description: item.metaDescription ?? item.answer
  };
}

export default async function SeoQuestionAnswerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = seoQuestionItems.find((faq) => faq.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,149,94,0.14),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(59,130,246,0.14),transparent_32%),radial-gradient(circle_at_50%_95%,rgba(94,234,212,0.12),transparent_30%)]" aria-hidden />

      <section className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-24 space-y-12">
        <div className="space-y-6 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_110px_rgba(15,23,42,0.6)] backdrop-blur">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/seo-questions"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:border-orange-300/70 hover:text-orange-100"
            >
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0 7-7m-7 7h18" />
              </svg>
              Back to SEO Questions
            </Link>

            <div className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.3em] text-orange-200/90">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">SEO clarity</span>
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">Built by Vispaico</span>
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200/90">SEO Questions</p>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">{item.question.split(' ')[0]}</span>{' '}
              {item.question.replace(item.question.split(' ')[0], '').trim() || item.question}
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-blue-100/90 font-light">{item.answer}</p>
          </div>
        </div>

        <div className="space-y-10">
          <div className="space-y-8 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_90px_rgba(15,23,42,0.55)] backdrop-blur">

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-inner">
              <p className="text-base font-semibold text-blue-100">Need this done for you?</p>
              <p className="mt-2 text-sm md:text-base text-blue-100/85">
                We build, test, and scale Meta ads for founders who want conversions over vanity metrics. Let’s ship a creative that wins.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Talk with Vispaico
                  <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
                <Link
                  href="/seo-questions"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-orange-300/70"
                >
                  Back to all questions
                </Link>
              </div>
            </div>

            {item.longAnswer && (
              <div className="space-y-4 text-base md:text-lg leading-relaxed text-blue-50/95">
                {item.longAnswer
                  .split('\n\n')
                  .filter(Boolean)
                  .map((paragraph, idx) => (
                    <p key={idx} className="text-blue-50/95">
                      {paragraph.trim()}
                    </p>
                  ))}
              </div>
            )}

            <div className="flex justify-center">
              <ArticleAd variant="mobile-banner" />
            </div>
          </div>

          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-7 shadow-[0_16px_70px_rgba(15,23,42,0.5)] backdrop-blur">
            <p className="text-sm font-semibold text-blue-100">More SEO answers</p>
            <div className="grid gap-3 md:grid-cols-2">
              {seoQuestionItems
                .filter((faq) => faq.slug !== item.slug)
                .slice(0, 6)
                .map((faq) => (
                  <Link
                    key={faq.slug}
                    href={`/seo-questions/${faq.slug}`}
                    className="inline-flex items-start gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 transition hover:border-orange-300/60 hover:text-orange-100"
                  >
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-orange-400" aria-hidden />
                    <span>{faq.question}</span>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
