import type { Metadata } from 'next';

import { fetchDemoArticles } from '@/lib/sanity';
import TutorialDashboard from '@/app/subdomains/tutorial/_components/TutorialDashboard';

export const metadata: Metadata = {
  title: 'Tutorial CMS Playground | Vispaico',
  description:
    'Experiment with Vispaico’s demo CMS: create, edit, and publish articles with Cloudinary media uploads and instant previews.',
};

export const dynamic = 'force-dynamic';

export default async function TutorialPage() {
  const articles = await fetchDemoArticles();

  return (
    <div className="space-y-8">
      <header className="space-y-3 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Live Demo</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Tutorial CMS Playground</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">
          Create and manage demo articles using our Sanity + Cloudinary stack. Every visitor gets full editorial
          controls—content persists until you delete it, giving prospects a true feel for the workflow.
        </p>
      </header>
      <TutorialDashboard initialArticles={articles} />
    </div>
  );
}
