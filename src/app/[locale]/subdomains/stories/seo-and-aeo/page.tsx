// src/app/subdomains/stories/seo-and-aeo/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'seo-and-aeo';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function SeoAndAeoStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">The Old & The New</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

    <div className="space-y-10 text-lg leading-relaxed text-slate-700">
      <section className="space-y-6">
        <p>
          Remember when SEO was king? Yeah, those days are gone.
          </p>
        <p>
          Don&apos;t panic though. SEO isn&apos;t dead—it&apos;s just got a twin brother named AEO, and they&apos;re both fighting for your attention.
          </p>
        <p>
          Here&apos;s the deal: While you&apos;ve been stuffing keywords into your blog posts, people have stopped typing &quot;best coffee shop near me&quot; into Google. Instead, they&apos;re asking ChatGPT, &quot;Where should I grab coffee right now?&quot; or telling Alexa to find them a plumber.
          </p>
        <p>
          Welcome to 2025, where 25% of organic traffic is predicted to move to AI chatbots and virtual agents by 2026. If your website isn&apos;t optimized for answer engines, you&apos;re basically invisible to a quarter of your potential customers.
        </p>
        <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759913828/Vispaico/Images/Articles/SEO_AEO_Vispaico_Article_ohyauz.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">What&apos;s the Difference Between SEO and AEO Anyway?</h2>
        <p>
          SEO (Search Engine Optimization) is all about ranking on Google, Bing, and traditional search engines. You know the drill—keywords, backlinks, meta descriptions, page speed.
        </p>
        <p>
          AEO (Answer Engine Optimization)? That&apos;s about getting your content picked as THE answer when someone asks ChatGPT, Perplexity, or their voice assistant a question. AEO focuses on making your content the answer that engines deliver to users, whether through featured snippets, voice assistant responses, or AI chatbot citations.
        </p>
        <p>
          Think of it this way: SEO gets you on the list. AEO makes you the answer.
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Why You Can&apos;t Ignore AEO Anymore</h2>
        <p>
          Since January 2025, interest in AEO has exploded, with ChatGPT now displaying prominently clickable links, maps, and other features. When AI tools cite your website as the source, you get traffic. When they don&apos;t, you disappear.
        </p>
        <p>
          Here&apos;s what changed: AEO targets conversational and voice-based searches, while SEO targets text-based queries on traditional search engines. People don&apos;t talk to AI the way they type into Google. They ask real questions like real humans.
        </p>
        <p>
          &quot;How do I fix a leaky faucet?&quot; not &quot;faucet leak repair tips.&quot;
        </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">How to Win at Both SEO and AEO</h2>
        <p>
          Stop choosing sides. You need both. Here&apos;s how to dominate:
        </p>
        <p><span className='font-medium'>For SEO:</span></p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Keep doing the basics—keywords, quality content, fast loading times</li>
            <li>Build backlinks from real websites</li>
            <li>Optimize your technical setup (mobile-first, SSL, sitemap)</li>
          </ul>
          <p><span className='font-medium'>For AEO:</span></p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Write like you talk. Use natural language and full sentences</li>
            <li>Emphasize short, structured formats like FAQs, featured snippets, and schema markup</li>
            <li>Answer specific questions directly at the top of your content</li>
            <li>Use structured data so AI can easily parse your information</li>
          </ul>
          <p>
            <span className='font-medium'>The Power Move: </span>
            Structure your content to answer questions immediately. Put the answer in the first paragraph, then explain the details. AI loves this format, and so do humans skimming your page.
          </p>
          <p>
            Add schema markup to your pages. This is code that tells search engines and AI exactly what your content is about—products, reviews, how-tos, FAQs. It&apos;s like giving them a cheat sheet.
            </p>
          <p>
            Create an FAQ section on every important page. Not the fake corporate FAQ. Real questions your customers actually ask. Answer them clearly and completely.
          </p>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">The Bottom Line</h2>
        <p>
          You can&apos;t pick between SEO and AEO. That&apos;s like choosing between email and phone calls for your business. You need both channels open.
        </p>
        <p>
          Traditional search engines still drive massive traffic. But AI answer engines are eating into that traffic fast. The businesses winning right now are the ones optimizing for both.
        </p>
        <p>
          Start today. Audit your website. Is your content written for keywords or for humans asking questions? Are you using structured data? Can an AI bot easily extract clear answers from your pages?
        </p>
        <p>
          Fix what&apos;s broken. The future of search is here, and it&apos;s asking you questions. Time to make sure you have the right answers.
        </p>
      </section>

      <section aria-labelledby="related-stories" className="space-y-6">
        <div className="h-px w-full bg-slate-200" />
        <div className="space-y-2">
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
          <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
            Stories from the passing Scene
            </h2>
            <p className="text-slate-600">Further notes of thoughts that passed our mind.
          </p>
        </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedStories.map((related) => (
              <Link
                key={related.routeSegment}
                href={`${storiesBasePath}/${related.routeSegment}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
                  {publishDateFormatter.format(new Date(related.publishDate))}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-500">{related.title}</h3>
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">{related.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                  Read this story
                  <svg
                    aria-hidden
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

        <div className="flex justify-center pt-4">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
          >
            Back to all articles
            <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
