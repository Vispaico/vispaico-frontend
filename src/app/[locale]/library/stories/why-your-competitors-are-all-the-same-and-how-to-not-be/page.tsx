import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'why-your-competitors-are-all-the-same-and-how-to-not-be';

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

export default async function SamenessProblemStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![hero image for why sameness kills differentiation](/images/articles/your-competitors-are-all-the-same-and-how-to-not-be.webp)
*Same templates, same prompts. Pick a spine and stop sounding beige.*

> **TL;DR**
> - AI and templates made every homepage sound cloned; sameness is a choice, not a fate.
> - Pick a spine: what you believe, the uncomfortable truth you’ll say out loud, and the personality you refuse to sand down.
> - Use AI as an amplifier, not an author; stance first, prompts second. Edit until it sounds like you, not a brochure.
> - Being memorable means some people will bounce. That’s fine—you want the ones who lean in.

Open five tabs in your industry. Skim the homepages. Feel like you’re watching the same movie with different logos? Yeah.

"We help businesses grow with innovative solutions."  
"Streamline your workflow with our platform."  
"Unlock your full potential with our suite of tools."  
Swap the brand names and nobody notices.

The sameness problem got loud in the last two years. AI is the megaphone.

### How We All Ended Up Copy-Pasting Each Other

**Phase 1: Template culture (2010-2020)**  
We all grabbed the same website templates and copy frameworks—StoryBrand, AIDA, PAS. Sites started to look like cousins. At least the writing still had some personality.

**Phase 2: AI everywhere (2022-now)**  
Now everyone’s running the same YouTube prompts through ChatGPT, Claude, Copy.ai, Jasper. Same input, same output, same “game-changing solution” sentences.

Give GPT-4 the prompt “write homepage copy for a SaaS company” and hand it to 100 people. You’ll get 100 nearly identical pages. Different names, identical vibes.

When everyone uses the same tools the same way, nobody stands out. You end up with a beige internet.

### What Used to Be an Advantage (And Isn’t Now)

Design, speed, decent copy, clean UX—they still matter. They’re just the baseline now.

You can buy a gorgeous template for $49. Spin up “good enough” copy in ten minutes. Ship a workable app in a weekend. The tools raised the floor for everyone.

So the only thing left is what templates can’t steal: **what you actually stand for.** Your point of view. Your specific take. Your willingness to say the thing everyone else avoids.

Skip that, and you’ll sound like everyone else forever.

### The Vispea Example: Choosing a Spine Instead of a Template

When we built [Vispea](https://vispea.com), we could’ve gone full generic: AI product blurbs, a Shopify theme, and “edgy” social posts that look like every other clothing brand.

We asked a better question: “What do we actually stand for?”

Answer: underground culture. Punk. Hip hop. Graffiti. DIY. The belief that the best stuff happens outside the system, not inside it.

Once we chose that spine:  
- Every product got a song because Vispea is a music project, not just merch.  
- The Fanzine looks like 1980s punk zines because that’s the right attitude.  
- The copy sounds like someone inside the scene, not a marketer peeking through the window.

Could AI have “figured that out?” Nope. It can mimic style. It can’t decide what you believe.

### Why AI Can Make Sameness Worse

AI is a loud copier. Feed it a bland prompt, get bland output—faster.

**Prompt:** “Write homepage copy for a B2B SaaS company that helps teams collaborate better.”  
**Output:** “Effective collaboration is crucial. Our platform helps teams work seamlessly, streamline workflows, and unlock their full potential.”

Technically fine. Emotionally invisible. Multiply that by 10,000 companies and you’ve got an internet that feels like elevator music.

The issue isn’t the model. It’s skipping the hard work of figuring out what makes you different and hoping a prompt will do it for you. It won’t. AI can’t differentiate you. You have to do that first, then let AI help you say it faster.

### The “Don’t Be Beige” Framework

**1) Decide what you actually believe**  
Not “what sounds credible.” What hill would you defend in your industry? What’s broken? What do you wish more people knew? At [Vispaico](/about), we think most agencies overpromise. We think slow, thoughtful strategy beats fast execution on a bad plan. We think [research comes before building](/library/stories/the-research-phase-nobody-budgets-for).

**2) Say the quiet thing out loud**  
What uncomfortable truth do your buyers whisper about? Say that. Example: most clients don’t need a $50k site; they need a $5k site done smart. Everyone else is upselling. We’re saying “don’t overpay.”

**3) Let your personality through**  
If you’re blunt, be blunt. If you’re nerdy, be nerdy. If you’re cheeky, be cheeky. Sanding off your edges to please everyone is how you become forgettable.

**4) Use AI as an amplifier, not an author**  
Once you know the stance and the tone, use AI to draft. Then edit hard. Add your attitude back in. [That’s treating LLMs like employees, not magic](/library/stories/what-happens-when-you-treat-llms-like-employees-not-magic-boxes).

**5) Be okay with turning people off**  
If everyone likes you, nobody loves you. Vispea isn’t for people who don’t care about underground culture. That’s fine. We’d rather be loved by 10,000 than tolerated by 100,000.

### What This Looks Like With Real Clients

We ask clients, “Why do you do it this way instead of that way?” Most have never answered it. Once they do, the copy almost writes itself.

Legal tech client example: every competitor said “streamline workflows, save time, increase efficiency.” Snooze. We asked why they started. Answer: “Law firms are drowning in process. We want lawyers to stop being administrators and start being advisors again.”

So their homepage now says: “You became a lawyer to help people. We’ll handle the paperwork.” Conversion rate tripled because it sounded like an actual belief, not a brochure.

### The Advantage You Already Have

You already have opinions, scars, and reasons for doing things your way. Use them. Hiding behind corporate-speak feels safe but makes you invisible. Safe brands get picked only when they’re the cheapest. If price is your only lever, you’re already in trouble.

### How to Sound Different Tomorrow

Pick one thing you really believe about your industry. Write it like you’d text a friend. Put it on your homepage. Watch who leans in and who bounces.

The people who leave weren’t your buyers. The people who stay just found someone who finally sounds human.

AI can help you ship faster. It can’t decide what you stand for. Do that first, and you’ll stop sounding like everyone else.
`;

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
