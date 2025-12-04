import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'the-day-we-stopped-building-everything-and-started-building-right';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription,
    alternates: {
      canonical: `https://vispaico.com/library/stories/${ROUTE_SEGMENT}`
    }
  };
}

export default async function ServiceFocusStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Coffee on a table at a coffee shop by a lake in Haiphong, Vietnam.](/images/articles/the-day-we-stopped-building-everything-and-started-building-right.webp)
*...starting the day right helps a lot.*

We built five to 7 services in 18 months.

The Bazooka. The $199 24-hour rush thing. The premium sales page package. PitchCrew for agencies and some i don't care to remember. All different, all shiny, all launching with momentum and energy.

And all of them were slowly suffocating us.

Here's what nobody tells you about being early in something: building is easy. Building *focus* is incredibly hard.

## The Trap Was Comfortable

We started with a clear vision. One service. Do it better than anyone else. Make it perfect. We already knew this—we talk about niching down and domination in a narrow space. We've seen it work for other companies a thousand times.

But somewhere between month three and month eight, we started listening to requests instead of listening to our gut.

"Can you build a faster version?" Sure, let's add that.

"What about for agencies?" Good idea, we'll create a product tier.

"Do you offer hourly consulting?" Yeah, we should probably have that.

Each one seemed reasonable individually. Each one felt like we were expanding to serve more people. But that's the thing about death by a thousand cuts—you don't notice you're bleeding out until you're already on the floor.

## What Actually Happened

Our messaging became this weird soup. Were we a service for individuals? Agencies? People who needed things fast? People who wanted premium quality? All of the above?

Customer acquisition got harder. When everyone is a target customer, nobody feels like *the* target customer. We were trying to be the solution to five different problems, which meant we were actually solving none of them well.

Our team got confused. Developers weren't sure which service to prioritize. Sales couldn't pitch with confidence because the narrative kept shifting. We were burning energy context-switching between five different value propositions when we should've been deepening one.

And the really frustrating part? The one service we started with—the 899 service—was working. We had clients who loved it. We had a clear ask, a clear delivery, a clear outcome. But it was getting lost in the noise of all the other stuff.

This is where AI actually made things worse, not better. Because when you can generate sales pages, pitch decks, and marketing copy fast with LLMs, it becomes *too easy* to spin up new service variations. The friction that would've stopped us before was gone. We could launch a new offer in a day.

The speed of creation became the enemy of clarity, similar to [how context windows can become overwhelming when you try to do too much at once](/library/stories/llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it).

More isn't always better—Focus is.

## The Wake-Up Call

At some point—we wish we could pinpoint the exact moment because it would make for better storytelling—we just saw it.

We looked at our metrics. We looked at where customers were actually coming from. We looked at what was generating real revenue versus what was generating noise. And we realized we were running a services portfolio when what we actually wanted to run was a *service*.

Not a service line. A service. The kind where people know exactly what they're getting, why they need it, and what it costs. The kind where the message is so clear that people refer you without thinking twice. The kind where your team wakes up and knows exactly what they're building toward.

## The Course Correction

We killed the extras. Not because they were bad ideas—some of them weren't. We killed them because clarity beats optionality every single time.

We went back to the 899 service and the growth services that support it. One core thing. Done right. All the energy, all the focus, all the messaging, all the product development—it all flows in one direction now.

The Bazooka? Gone.

The 24-hour rush thing? Gone.

The agency tier? Gone.

PitchCrew? Gone.

And you know what happened? Things got *easier*. Harder to build, easier to run.

Our pitch became sharp. Our messaging became clear. Customers knew what they were getting into. Our team knew what they were building. And ironically, we started acquiring customers *faster* by trying to acquire *fewer* types of customers.

## Why I'm Telling You This

Because if you're in this phase—where you can build things quickly, where every request feels reasonable, where optionality feels like abundance—this is your warning.

Speed is only good if it's pointed in one direction.

Building more services isn't growth. Depth is growth. Mastery is growth. Being the thing that people think of first in your niche is growth.

The mistake wasn't thinking big. It was thinking wide.

We could've saved 18 months and a lot of headspace by just sticking to what we knew worked. But honestly? The detour taught us something we couldn't have learned any other way: the difference between busy and building something that matters.

Now when we consider something new, we ask one question: Does this deepen what we do, or does it dilute it?

If it dilutes, we don't do it—even if it's a great idea.

## What This Means for You

If you're building something—a service, a product, a company, even just your own skill set—you're going to feel the pressure to expand. To add options. To serve more people.

That pressure is real. But it's also the thing that kills most things before they ever get good.

Pick one thing. Make it undeniable. Then expand from a position of strength, not from fear that you're leaving money on the table.

Because here's what we learned: the money's on the table. It's in the depth, not the breadth.

[Want to see what happens when you actually niche down and commit? That's what we do now. Different story.](/vispaico-growth-website)`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">From Niels</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
        </div>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Keep exploring</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Stories from the passing Scene
            </h2>
            <p className="text-slate-600">Further notes of thoughts that passed our mind.</p>
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
