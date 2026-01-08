import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'you-cant-ai-your-way-into-having-a-soul';

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

export default async function VispeaSoulStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Vispea Footer](/images/articles/Vispeafooter.webp)
*The Footer of the Vispea.com web shop.*

We were sitting in a room, staring at what was supposed to be the next big thing.

A clothing brand called Vispea. Clean concept: merch with underground culture DNA. Punk, hip hop, graffiti, skating, surfing—the stuff that actually matters to people who build things outside the system.

Simple, right?

Wrong.

> **TL;DR**
> - Vispea only worked because we paused the factory mindset and spent time figuring out what the brand actually believes before touching AI or ads.
> - Soul comes from research—immersing in the cultures you claim, talking to people who live them, and killing directions that feel like cosplay.
> - Once the credo is real, AI becomes a multiplier: it helps draft copy, spin up product stories, and build assets faster without diluting the voice.
> - Growth feels coherent when every channel (merch, music, fanzine, SEO) points back to the same intent; you can’t automate that discovery phase.
>
> [Skip to details](#the-formula-trap)

## The Formula Trap

Here's where most brands go: find a concept that works, build the website, slap some copy on it, run ads. Treat it like a machine.

We almost did that.

The plan was: create a web store, list products, generate some marketing content with AI, push it out. Standard operating procedure. Fast. Scalable. Dead.

Then someone asked the question that changed everything: "Wait, what actually *is* Vispea?"

Not the brand positioning. Not the target market. Not the value prop. What is it *really*?

And we realized we didn't know.

## The Detour That Mattered

So we stopped building. We started researching.

We dug into punk fanzines from the 1980s—the hand-drawn, copy-paste, chaotic, DIY aesthetic. We looked at hip hop's origin story. We studied graffiti culture, skating, surfing, the whole underground lineage. We weren't looking for aesthetics to copy. We were looking for the *ethos* underneath.

That's when it clicked: Vispea isn't a clothing brand that happens to reference underground culture. Vispea *is* underground culture. It has a credo. It has beliefs. It moves in a specific direction for specific reasons.

Once we actually understood that—once we'd done the work to *discover* what Vispea was instead of *deciding* what it should be—everything else became possible.

[This is what focus actually looks like in practice. We killed unnecessary services so we could go deep on what matters—not just for us, but for our clients too. Vispea's the proof.](/library/stories/the-day-we-stopped-building-everything-and-started-building-right)

## Where AI Actually Helps

This is the part nobody talks about.

AI didn't create Vispea's identity. AI can't. You can't prompt your way into having a soul.

But here's what AI *did* do: it let us move faster once we knew what we were moving toward.

We built a web store. But instead of generic product pages, we could generate variations and ideas quickly, then filter them through the actual Vispea lens. Does this feel right? Does it match the ethos? Or does it feel like every other brand trying to seem cool?

[Just like LLMs need clear context to generate good outputs, brands need clear identity to generate authentic growth. Everything flows from knowing what you actually are.](/library/stories/llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it)

Then we got weird with it. We decided each shirt needed a song. Not because it was a marketing tactic—because it made sense for Vispea. A brand that moves to its own rhythm should literally have its own rhythm.

So we created a Spotify artist. An Apple Music presence. A band called Vispea that exists as a cultural entity, not just a merch drop. AI helped us brainstorm directions. Human creativity picked the right ones and executed them with actual craft.

## The Fanzine Move

Then we built something we call the Fanzine.

It lives on Vispea.com, but it's not a blog. It's styled like 1980s punk fanzines—that chaotic, hand-cut, montage aesthetic. Stories about Vispea. Stories about actual bands, music history, underground movements. All grounded in the culture that Vispea actually comes from.

Could we have AI-generated a bunch of articles about punk culture? Sure. They'd be technically correct and completely soulless.

Instead, we researched. We found real stories. We let the design and the writing style carry the credo forward. AI helped us organize ideas, find angles, write faster. But the *decision* about what story matters, why it matters, how it connects to Vispea—that came from humans who actually understood the culture.

## The Growth Play

Now we're applying all of this to growth. Because here's the thing: when you have an actual soul, growth becomes coherent instead of scattered.

We're building SEO strategy that makes sense for Vispea. Not "rank for keywords," but "what would someone who lives this actually search for?" We're creating social content that feels native, not like branded content trying too hard. We're using AI summaries and research to amplify real stories, not to manufacture fake ones.

Every single thing—the merch, the music, the fanzine, the visibility strategy—it all points in the same direction because it all comes from the same place.

*This is how we'll measure success with Vispea. Not vanity metrics, but real conversion because the message is clear.*

That's the unfair advantage.

## What This Actually Means

You can use AI to do almost anything faster. Write copy. Generate ideas. Create variations. Optimize. Scale.

But you can't use AI to figure out what actually matters.

That part requires something AI doesn't have: the ability to care about something beyond efficiency.

Most brands skip the hard part—the discovery, the research, the "what actually are we" conversation—and go straight to the machine. Build it fast, push it out, optimize the metrics.

Those brands look like everything else.

The ones that win are the ones that know what they are first, then use the tools to express it better.

Vispea taught us that you need both. The soul first. The tools second.

Not the other way around.

## You're Probably Skipping This Step

If you're building something right now—whether it's a brand, a service, a product, even just your personal positioning—ask yourself: Do I actually know what this is? Or do I just know what it *should* do?

Because you can AI your way to faster outputs, but you can't AI your way to something that matters.

The brands and services that actually convert aren't the ones with the most polished copy. They're the ones where you can feel something real underneath.

That feeling doesn't come from a prompt.

It comes from doing the work first.

---

## What We're Building

We're running the Vispea growth services in real time. You can follow along at vispea.com—check out the Fanzine, listen to the Spotify artist, see how we're building something that actually means something instead of just sounds like something.

When brands are ready to grow with intention, that's literally the lane for [Vispaico Growth Services](/vispaico-growth-website). It's the same culture-first process we used for Vispea, applied to teams who want soul before scale.

It's a live case study in why soul matters more than scale.`;

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
