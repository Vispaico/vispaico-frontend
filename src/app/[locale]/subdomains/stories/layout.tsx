// src/app/subdomains/stories/layout.tsx

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Newsletter from '@/components/Newsletter';

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
            <article className="mx-auto max-w-3xl rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200/60 px-6 sm:px-10 py-12 space-y-12">
              {children}
            </article>
            <aside className="mx-auto mt-12 max-w-3xl rounded-3xl bg-slate-900 text-white px-6 sm:px-10 py-10 shadow-2xl ring-1 ring-slate-900/40">
              <Newsletter />
            </aside>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}