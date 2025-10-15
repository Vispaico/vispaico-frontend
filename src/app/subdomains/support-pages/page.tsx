import Image from 'next/image';
import type { Metadata } from 'next';

import { fetchDemoListings } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Listings Demo | Vispaico',
  description:
    'Preview our Contentful + Vercel listing experience. Update entries in Contentful and watch the site refresh in seconds.',
};

export const dynamic = 'force-dynamic';

export default async function SupportPagesDemo() {
  const listings = await fetchDemoListings();

  return (
    <div className="space-y-8">
      <header className="space-y-3 text-white">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-300">Live Demo</p>
        <h1 className="text-4xl font-semibold sm:text-5xl">Modern Listings Experience</h1>
        <p className="max-w-3xl text-sm text-slate-200 sm:text-base">
          Explore a sample realtor and rental showcase powered by Contentful. Prospects manage content in the CMS; Vercel
          webhooks trigger instant revalidation so this page stays in sync.
        </p>
      </header>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">Featured listings</h2>
            <p className="text-sm text-slate-600">Up to six cards update automatically the moment content changes.</p>
          </div>
          <a
            href="https://app.contentful.com/login"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-600"
          >
            Open Contentful dashboard
          </a>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {listings.map((listing) => (
            <article
              key={listing.id}
              className="flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
            >
              {listing.heroImage ? (
                <Image
                  src={listing.heroImage.url}
                  alt={listing.heroImage.description}
                  width={Math.max(listing.heroImage.width || 640, 320)}
                  height={Math.max(listing.heroImage.height || 480, 240)}
                  className="h-56 w-full object-cover"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
              ) : null}
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">{listing.location}</p>
                  <h3 className="text-xl font-semibold text-slate-900">{listing.title}</h3>
                  <p className="text-sm text-slate-600">{listing.summary}</p>
                </div>
                <div className="mt-auto space-y-3">
                  <p className="text-sm font-semibold text-slate-900">{listing.priceLabel}</p>
                  {listing.features.length > 0 ? (
                    <ul className="flex flex-wrap gap-2 text-xs text-slate-500">
                      {listing.features.map((feature) => (
                        <li key={feature} className="rounded-full bg-slate-100 px-3 py-1">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <a
                    href={`mailto:hello@vispaico.com?subject=${encodeURIComponent(`Interested in ${listing.title}`)}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-600"
                  >
                    Request a tour
                    <svg
                      aria-hidden
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
          {listings.length === 0 ? (
            <div className="col-span-full rounded-3xl border border-dashed border-slate-300 bg-white/60 p-10 text-center text-sm text-slate-500">
              Populate the <strong>demoListing</strong> content type in Contentful to see cards appear here.
            </div>
          ) : null}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_320px]">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg space-y-4 text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-slate-900">How the demo works</h3>
          <ol className="space-y-3 list-decimal pl-5">
            <li>Create or edit entries in the Contentful sandbox space (fields: title, priceLabel, summary, features, heroImage, gallery).</li>
            <li>Publish changes—Contentful sends a webhook to Vercel.</li>
            <li>Vercel revalidates this route, so the updated listings render within seconds.</li>
          </ol>
          <p>
            Need to reset the space? Use the management script to clone baseline content nightly or trigger a manual refresh.
          </p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg text-sm text-slate-600">
          <h3 className="text-lg font-semibold text-slate-900">Webhook endpoint</h3>
          <p className="mt-2 break-words font-mono text-xs text-slate-500">
            {`${process.env.NEXT_PUBLIC_SITE_URL ?? 'https://vispaico.com'}/api/support/revalidate`}
          </p>
          <p className="mt-4 text-xs text-slate-500">
            Configure this URL with your secret token in Contentful. We handle signature validation before revalidating the
            listing grid.
          </p>
        </div>
      </section>
    </div>
  );
}
