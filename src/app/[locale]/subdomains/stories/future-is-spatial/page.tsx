// src/app/subdomains/stories/future-is-spatial/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'future-is-spatial';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function FutureIsSpatialStory({ params }: { params: Promise<{ locale: string }> }) {
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
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Spatial Shift</p>
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
            Remember when smartphones were “for nerds”? Spatial computing is next. Apple, Meta, Sony, and half the
            enterprise software market are betting that immersive interfaces will be as common as the touchscreen within a
            few years.
          </p>
          <p>
            Whether you build products, tell stories, or train teams, the smart move is to start experimenting now—while
            the learning curve is still a differentiator.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1760014875/Vispaico/Images/Articles/spatial_kndrl3.avif"
              alt="Founders collaborating in a studio space"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Spatial Computing, Defined</h2>
          <p>
            Spatial computing blends the digital and physical worlds. VR pulls you into fully immersive environments, AR
            overlays information on top of reality, and mixed reality stitches both together.
          </p>
          <p>
            Hardware is maturing—Quest 3, Vision Pro, PSVR2—while software toolkits (Unity, Unreal, Apple Vision SDKs)
            finally feel approachable. That combination means we&apos;re at the “smartphone circa 2008” moment.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Why This Matters Beyond Gaming</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Work:</span> Immersive meetings and training simulations beat
              a grid of muted webcams.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Commerce:</span> 3D product walkthroughs and spatial showrooms
              reduce returns and boost conversion.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Creativity:</span> Storytellers are experimenting with
              interactive narratives, spatial audio, and volumetric video.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Education:</span> Labs, field trips, and complex visualizations
              become affordable when they&apos;re rendered instead of built.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">How to Start Learning (Without Burning a Year)</h2>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <span className="font-semibold text-slate-900">Phase 1 – Understand the landscape.</span> Spend a month bingeing
              channels like Thrillseeker and MRTV, and get familiar with the differences between VR, AR, and MR.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Phase 2 – Get hands-on.</span> Budget route? Grab a Quest 3 or
              a cardboard headset. High-end route? Vision Pro or PSVR2. The point is to experience comfort constraints,
              interface quirks, and motion sickness triggers yourself.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Phase 3 – Build something tiny.</span> Use Unity Learn or
              WebXR to ship a prototype—no matter how janky. You learn faster by debugging than by note-taking.
            </li>
            <li>
              <span className="font-semibold text-slate-900">Phase 4 – Join the community.</span> Discord servers, hackathons,
              and VR meetups are where best practices travel first.
            </li>
          </ol>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Skills Worth Betting On</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>3D asset optimization and real-time rendering fundamentals.</li>
            <li>Spatial interface design, comfort-first UX, and accessibility in 360° environments.</li>
            <li>Spatial audio and haptic feedback design to sell immersion.</li>
            <li>Business fluency around spatial commerce, virtual events, and remote collaboration.</li>
          </ul>
          <p>
            Treat everything you build like a case study. The portfolio you create now is what recruiters and clients will
            be combing through in 2026 when spatial teams scale.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Your 12-Month Roadmap</h2>
          <p>
            This quarter: get hardware, build a small experience, share it publicly. This year: polish a flagship project,
            stay on top of device releases, and plug into a community so you&apos;re not learning alone.
          </p>
          <p>
            Spatial computing won&apos;t replace phones overnight, but it will reshape how we work, sell, teach, and entertain.
            The people who start experimenting now become the experts everyone hires later.
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
