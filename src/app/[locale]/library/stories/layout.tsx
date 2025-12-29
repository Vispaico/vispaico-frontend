// src/app/[locale]/subdomains/stories/layout.tsx

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';
import { ArticleAd } from '@/components/ArticleAd';
import { ArticleWithAds } from '@/components/ArticleWithAds';
import { Link } from '@/i18n/navigation';

type StoriesLayoutProps = {
  children: React.ReactNode;
};

export default function StoriesLayout({ children }: StoriesLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-900 flex flex-col">
      <Header />
      <main className="flex-1 bg-slate-100">
        <div className="relative py-16 sm:py-20">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-slate-950 via-slate-900 to-transparent"
          />
          <div className="relative z-10 container mx-auto px-4">
            <article className="mx-auto max-w-4xl rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/60 px-6 sm:px-12 py-12 space-y-12">
              <ArticleWithAds>{children}</ArticleWithAds>

              <div className="flex justify-center">
                <ArticleAd variant="leaderboard" />
              </div>
            </article>
            <aside className="mx-auto mt-12 max-w-3xl space-y-8 rounded-3xl bg-slate-900 text-white px-6 sm:px-10 py-10 shadow-2xl ring-1 ring-slate-900/40">
              <Newsletter />
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <p className="text-lg font-semibold text-white">Want results like this?</p>
                <p className="mt-2 text-sm text-blue-100/85">Start Your Growth Website — $899. 3 days. Everything included.</p>
                <Link
                  href="/vispaico-growth-website"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-2 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
                >
                  Launch now
                  <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}