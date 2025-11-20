
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = '6-month-vs-3-day-websites-why-waiting-destroys-momentum';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function SixMonthVsThreeDayStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A watch presents the time.](https://images.unsplash.com/photo-1741981193724-1bb1211405d5?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGZhc3QlMjB2cyUyMHNsb3d8ZW58MHx8MHx8fDI%3D)

In the world of business, speed is everything. The early bird gets the worm, the fast fish eats the slow fish, and the company that launches its website first gets the customers. It's a jungle out there, and the slow-moving creatures are the first to get eaten.

And yet, the traditional web design industry seems to be stuck in the slow lane. The average **website development timeline** for a custom site is a staggering three to six months. Six months! In internet time, that's an eternity. That's enough time for a new social media platform to be born, rise to global dominance, and then be declared "cringe" by the next generation of teenagers. It's enough time to binge-watch every season of "The Office" twice. It's enough time to grow a pretty respectable beard.

So, why does it take so long? And more importantly, what is the real cost of all that waiting? Is it just a matter of patience, or is something more sinister at play?

### The Six-Month Marathon: A Journey into the Heart of Inefficiency

Let's break down the typical six-month website project. It's a journey that's often more frustrating than a road trip with a broken GPS and a car full of screaming children.

*   **Month 1: "Discovery" and "Strategy."** This is where you have a series of meetings to talk about the meetings you're going to have. You'll fill out a 20-page questionnaire about your "brand essence" and your "target audience personas." You'll look at mood boards and color palettes. You'll talk a lot, but you won't see a single line of code. It's like planning a vacation by spending a month just looking at brochures.
*   **Month 2: Wireframes and Mockups.** The design team will take all that talk and turn it into a series of static images of what your website *might* look like. You'll have more meetings to discuss these images. You'll ask for changes. They'll go back to the drawing board. It's like trying to build a house by looking at a painting of a house.
*   **Month 3: Revisions and Approvals.** This is where the "design by committee" phase begins. Everyone in your company will have an opinion. The logo should be bigger. The blue should be a different shade of blue. Can we add a picture of a dog wearing a hat? The project grinds to a halt as you try to please everyone. It's a recipe for a camel, a horse designed by a committee.
*   **Month 4: Development Begins.** Finally, a developer starts writing some code. But by now, the original vision has been so watered down by committee feedback that no one is really sure what they're building anymore. The developer is trying to build a spaceship out of spare parts from a lawnmower.
*   **Month 5: "Content is King."** The website is half-built, and suddenly everyone realizes that no one has written any of the actual words that will go on the pages. Panic ensues. You're trying to write marketing copy while the developers are breathing down your neck. It's like trying to write a novel in the middle of a construction site.
*   **Month 6: The Final Push.** Everyone is tired, cranky, and over budget. The site is rushed to the finish line, full of compromises and "we'll fix it later" promises. It launches with a whimper, not a bang. And then the invoice arrives, and you have to sell a kidney to pay for it.

Sound familiar? It's a broken process. It's a process that prioritizes billable hours over results. And it's a process that completely ignores the most important factor in your success: **momentum**.

### The Hidden Costs of Waiting

The problem with a six-month timeline isn't just the frustration and the endless meetings. It's the opportunity cost. It's the six months of *not* having a website that's out there working for you, 24/7.

*   **Six months of lost customers.** While you're stuck in "discovery," your competitors are already online, capturing leads and making sales. That's six months of your customers giving their money to someone else.
*   **Six months of lost feedback.** You don't really know what your customers want until you put something in front of them. A six-month project is a six-month gamble. You're betting your business on a bunch of assumptions.
*   **Six months of lost momentum.** A new business is like a rocket. You need to get it off the ground as quickly as possible. A long, drawn-out website project is like a giant weight holding you down, while your competitors are already in orbit.

### The 3-Day Sprint: A Better Way to Build

Now, let's compare that to the 3-day website model. It's not a marathon; it's a sprint.

*   **Day 1: Kickoff and Blueprint.** You fill out a detailed form, we create a strategic blueprint, and our designers get to work. No meetings, no mood boards, no navel-gazing.
*   **Day 2: Build and Content.** Our developers build your site using a modern, component-based system, while our content team writes your copy. You get a daily update, so you're always in the loop.
*   **Day 3: Test, Refine, and Launch.** We test everything, make sure it's perfect, and then we launch. You're live, you're online, and you're in business.

That's it. 72 hours. No meetings. No endless revisions. Just a **fast web design** process that's built for action.

This isn't about cutting corners. It's about being smart. It's about using an **agile web development** approach that prioritizes speed and efficiency. It's about focusing on what really matters and cutting out the rest. It's about getting your business off the ground, not stuck in a never-ending cycle of meetings and revisions.

### The Power of Momentum

A 3-day website isn't just about getting online faster. It's about harnessing the power of momentum.

It's about getting your product in front of real customers as quickly as possible. It's about getting real feedback that you can use to iterate and improve. It's about building a business, not just a website. It's about being nimble, agile, and responsive to the market.

So, the next time a web design agency quotes you a six-month timeline, ask them why. Ask them what they're going to do in those six months that couldn't be done in three days. Ask them if they'll pay for your lost revenue while you wait. (Spoiler alert: they won't.)

And then, when you're done with that conversation, come talk to us. We'll have your website live before they've even scheduled their first "discovery" meeting.

Ready to stop waiting and start building? **[Start your 3-day website](/vispaico-growth-website)** today. Or, if you want to learn more about the crazy idea that started all of this, and the man who got so fed up with the traditional agency model that he decided to build his own, check out our **[About page](/about)**.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">And Access for All</p>
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
