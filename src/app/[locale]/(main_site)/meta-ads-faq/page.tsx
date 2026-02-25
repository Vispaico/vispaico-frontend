import type { Metadata } from 'next';

import { ArticleAd } from '@/components/ArticleAd';
import { Link } from '@/i18n/navigation';
import { metaAdsFaqItems } from '@/data/metaAdsFaq';

export const metadata: Metadata = {
  title: 'Meta Ads FAQ | Costs, Strategy, Targeting & Setup | Vispaico',
  description:
    'Answers to every Meta ads question—costs, targeting, setup, mistakes to avoid, and how to scale—written by Vispaico for fast-moving founders.'
};

export default function MetaAdsFaqPage() {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,125,69,0.12),transparent_35%),radial-gradient(circle_at_85%_0%,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_50%_100%,rgba(94,234,212,0.12),transparent_30%)]" aria-hidden />

      <section className="relative z-10 container mx-auto px-4 py-16 sm:py-20 lg:py-24 space-y-16">
        <div className="space-y-8 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_25px_120px_rgba(15,23,42,0.65)] backdrop-blur">
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200/90">Meta Ads FAQ</p>
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-white">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">Meta ads, minus</span>{' '}
                the agency smoke.
                <br />
                Straight answers, built to ship.
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl leading-relaxed text-blue-100/90 font-light">
                You want the playbook, not the pitch deck. We pulled every question founders ask about Meta ads and answered them like we do in client calls—clear numbers, real talk, zero jargon.
              </p>
              <p className="text-lg md:text-xl text-blue-100/85">
                Written for founders who move fast. Skim it in minutes, steal what works, and launch.
              </p>
            </div>
          </div>

          <div className="flex justify-center">
            <ArticleAd variant="leaderboard" />
          </div>
        </div>

        <div className="space-y-8 rounded-4xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_100px_rgba(15,23,42,0.55)] backdrop-blur">
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-200/80">All questions</p>
              <h2 className="text-3xl font-semibold text-white">Tap a question to get the straight answer</h2>
              <p className="text-lg text-blue-100/85">Fast to skim, plain-English answers, written so you can act today.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Talk to us
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
              </svg>
            </Link>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl" aria-hidden />
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {metaAdsFaqItems.map((item) => (
              <Link
                key={item.slug}
                href={`/meta-ads-faq/${item.slug}`}
                className="group h-full rounded-3xl border border-white/8 bg-gradient-to-br from-white/8 via-white/4 to-white/5 p-8 text-left shadow-[0_18px_80px_rgba(10,15,35,0.55)] transition hover:-translate-y-2 hover:border-orange-300/60 hover:shadow-[0_22px_90px_rgba(249,115,22,0.35)]"
              >
                <div className="flex items-center gap-2 text-sm font-semibold tracking-[0.08em] text-orange-200/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Meta ads clarity
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white leading-snug group-hover:text-orange-200">{item.question}</h3>
                <p className="mt-4 text-lg leading-relaxed text-blue-100/90 line-clamp-3">{item.answer}</p>
                <span className="mt-7 inline-flex items-center text-sm font-semibold text-orange-200">
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
    </div>
  );
}
