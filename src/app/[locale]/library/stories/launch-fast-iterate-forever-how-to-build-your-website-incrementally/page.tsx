
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'launch-fast-iterate-forever-how-to-build-your-website-incrementally';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function LaunchFastIterateForeverStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A door with a A / B sign"](https://images.unsplash.com/photo-1569803903286-eb86d49af323?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QSUyRkIlMjBUZXN0aW5nfGVufDB8fDB8fHwy)

Perfectionism is the enemy of progress.

Nowhere is this more true than in the world of web design. So many businesses fall into the trap of trying to build the "perfect" website right out of the gate. They spend months, sometimes even years, agonizing over every detail, every feature, every pixel. They want the digital equivalent of the Sistine Chapel, and they want it on day one.

And what's the result? A bloated, over-engineered monstrosity that's already outdated by the time it launches. A website that's so packed with features that no one knows how to use it. A website that's a monument to the ego of the person who built it, rather than a tool for the people who are supposed to use it.

There's a better way. It's called **agile web design**. It's the philosophy of launching fast and iterating forever. It's about building a **minimum viable website** that gets the job done, and then using real-world data and feedback to make it better over time. It's about embracing imperfection and prioritizing progress.

### The Minimum Viable Website: Your Launchpad, Not Your Masterpiece

A minimum viable website (MVW) is not a "cheap" website. It's not a "bad" website. It's a *strategic* website. It's a website that has everything you need to start attracting customers and making sales, and nothing you don't. It's the lean, mean, customer-converting machine that you can get online in a matter of days, not months.

Think of it like this: if you're building a car, you don't need to have the heated seats, the sunroof, and the 12-speaker sound system on day one. You need an engine, wheels, and a steering wheel. You need to get from Point A to Point B.

Your MVW is the engine, wheels, and steering wheel of your online presence. It should have:

*   **A clear value proposition:** What do you do, and why should anyone care? This should be the first thing people see when they land on your site. No jargon, no buzzwords, just a simple, clear statement of what you're all about.
*   **A compelling call to action:** What do you want your visitors to do? Do you want them to buy your product? Fill out a contact form? Sign up for your newsletter? Make it obvious, and make it easy.
*   **A way to contact you:** A simple contact form or your phone number. Don't make people hunt for it.
*   **A clean, professional design:** It doesn't have to be a work of art, but it should look like you're a legitimate business. It should be easy to read, easy to navigate, and mobile-friendly.

That's it. That's your launchpad. It's not going to win any design awards, but it's going to get you in the game. And that's what matters.

### The Power of "Good Enough for Now"

The beauty of the MVW approach is that it gets you in the game, fast. You're not sitting on the sidelines for six months, guessing what your customers might want. You're out there, in the real world, learning from their behavior.

*   Are people clicking on your call to action?
*   Are they filling out your contact form?
*   Are they bouncing off your homepage after two seconds?
*   Are they getting lost in your navigation?

This is real, actionable data that you can use to make your website better. It's a thousand times more valuable than the opinions of your CEO's spouse or your marketing intern. It's the voice of your customer, and you should be listening.

This process of continuous improvement is called **website iteration**. It's a cycle of building, measuring, and learning. And it's the secret to building a website that actually works. A website that's not just a pretty brochure, but a powerful tool for growth.

### How to Iterate: A Simple Framework

1.  **Launch your MVW.** Get it out there. Don't be afraid. It's not going to be perfect, and that's okay.
2.  **Gather data.** Use tools like Google Analytics, Hotjar, and good old-fashioned customer feedback to see how people are using your site. Google Analytics will tell you what pages they're visiting and how long they're staying. Hotjar will show you heatmaps of where they're clicking and how far they're scrolling. And customer feedback will tell you what they're thinking.
3.  **Formulate a hypothesis.** Based on the data you've gathered, make an educated guess about what you can do to improve your website. Your hypothesis should be specific, measurable, achievable, relevant, and time-bound (SMART). For example: "I believe that changing the color of the 'Buy Now' button from blue to orange will increase clicks by 10% within 30 days."
4.  **Test your hypothesis.** This is where A/B testing comes in. You create two versions of your page—an "A" version with the blue button, and a "B" version with the orange button. Then, you show each version to half of your visitors and see which one performs better.
5.  **Analyze the results.** Did the orange button work better? Great. Keep it. Did it make things worse? No problem. You've learned something. You've learned that your customers don't like orange buttons. That's valuable information.
6.  **Repeat.** Forever. Conversion optimization is not a one-time fix. It's an ongoing process of testing, learning, and improving. It's a journey, not a destination.

This is the essence of **agile web design**. It's a dynamic, data-driven approach that's a world away from the static, waterfall-style process of traditional web design. It's about being nimble, responsive, and customer-centric.

### The Role of a Good Partner

Now, you might be thinking, "This sounds like a lot of work." And you're not wrong. Continuous **website iteration** requires a commitment to ongoing improvement. It requires a team of people who are dedicated to analyzing your data, testing your hypotheses, and making your website better and better over time.

That's where a good web development partner comes in. You need a team that's not just going to build your website and then disappear. You need a team that's going to be there for the long haul, helping you to grow your business.

This is why we offer **[maintenance services](/services)**. We don't just build your website; we help you grow it. We're your outsourced web team, your data analysts, and your strategic partners. We'll help you to identify the opportunities for improvement on your website, and we'll work with you to create a roadmap for ongoing iteration and growth.

### The Takeaway: Progress, Not Perfection

Stop trying to build the perfect website. It doesn't exist. And even if it did, it would be outdated in six months.

Instead, focus on building a website that's "good enough for now." Get it out there, see how it performs, and then make it better.

Launch fast. Iterate forever. That's the secret to winning in the long run.

Ready to launch your MVW? Our **[Growth Website page](/vispaico-growth-website)** is the perfect place to start. We'll get you online in 72 hours, so you can start iterating your way to success. It's time to stop dreaming about the perfect website and start building a profitable one.
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
