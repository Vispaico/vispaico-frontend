
import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'wcag-2-2-aa-compliance-why-accessibility-isnt-optional';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function WcagComplianceStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![Accessible Entry sign on a wall.](https://images.unsplash.com/photo-1600202751116-3e0226e1e7a0?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjZXNzaWJpbGl0eXxlbnwwfHwwfHx8Mg%3D%3D)

Let's talk about something that most businesses get wrong, something that's often treated as an afterthought, a "nice-to-have" feature that gets pushed to the bottom of the to-do list. Let's talk about **website accessibility**.

For a long time, accessibility was seen as a niche issue, a checkbox to tick for a small subset of users. But the reality is, **1 in 6 people worldwide experience a significant disability**. That's over a billion people. A billion potential customers that you might be ignoring.

And in 2025, with the enforcement of the **EU Accessibility Act**, website accessibility is no longer optional. It's the law. And the penalties for non-compliance are no joke.

### What is WCAG 2.2 AA Compliance? (And Why It's Not as Scary as It Sounds)

The **Web Content Accessibility Guidelines (WCAG)** are a set of technical standards that outline how to make your website accessible to people with disabilities. **WCAG 2.2 AA** is the latest version of these guidelines, and it's the standard that you need to meet to be compliant with the EU Accessibility Act.

Think of it like this: you wouldn't build a physical store without a wheelchair ramp, would you? You wouldn't put up a sign that was impossible to read, or create a layout that was a confusing maze. WCAG 2.2 AA is the digital equivalent of all of those things. It's a set of rules that ensures that everyone, regardless of their abilities, can access and use your website.

It covers things like:

*   **Perceivable:** Can people see and hear your content? This includes things like providing alt text for images, captions for videos, and making sure your text has enough contrast to be readable.
*   **Operable:** Can people use your website? This means making sure your site can be navigated with a keyboard, that there are no "keyboard traps" that prevent users from leaving a certain part of your site, and that you're not using any design elements that could cause seizures.
*   **Understandable:** Can people understand your content? This means using clear and simple language, providing clear instructions, and making sure your navigation is consistent and predictable.
*   **Robust:** Can your website be used by a wide range of technologies, including assistive technologies like screen readers? This means using clean, valid code and following web standards.

### Why Accessibility is a Superpower for Your Business (It's Not Just About Avoiding Lawsuits)

But accessibility isn't just about avoiding lawsuits. It's about building a better business. It's about doing the right thing. And it's about unlocking a whole new level of growth for your company.

*   **A bigger audience:** An accessible website is a website that's open to everyone. That's a billion potential customers that your competitors might be ignoring. It's like opening a new store in a massive, untapped market.
*   **A better user experience:** The principles of **accessible web design**—clear navigation, readable text, and simple, intuitive interfaces—make your website better for *everyone*, not just people with disabilities. A website that's easy for a person with a cognitive disability to understand is also a website that's easy for a busy, distracted person to use. A website that can be navigated with a keyboard is also a website that's easier to use for people with temporary injuries, like a broken arm.
*   **A stronger brand:** An accessible website is a sign that you care about your customers. It's a way to build trust and loyalty. It's a way to show the world that your business is inclusive and that you're committed to doing the right thing.
*   **Better SEO:** Google loves accessible websites. The same things that make your site accessible to people with disabilities also make it easier for search engines to crawl and understand. Clean code, descriptive alt text, and a clear heading structure are all things that will make both your users and Google happy.

### The Vispaico Promise: Accessibility Baked In, Not Bolted On

At Vispaico, we believe that the web should be for everyone. That's why every website we build is **WCAG 2.2 AA compliant** from the ground up.

We don't treat accessibility as an afterthought or an add-on. It's a core part of our development process. From the initial design to the final code, we're constantly thinking about how to make your website as accessible as possible.

*   **Design:** We design with contrast, readability, and navigation in mind. Our designers are experts in creating beautiful, accessible interfaces.
*   **Development:** Our developers are masters of semantic HTML, ARIA labels, and keyboard navigation. They know that clean, accessible code is the foundation of a great website.
*   **Testing:** We use a combination of automated tools and manual testing to ensure that our websites are as accessible as possible. We test with screen readers, we test with keyboards, and we test with a wide range of devices.

### Don't Wait Until It's Too Late (The Lawyers Are Coming)

The EU Accessibility Act is here. The penalties for non-compliance are real. But more importantly, the opportunity to build a better, more inclusive business is right in front of you.

Don't wait until you get a scary letter from a lawyer. Make accessibility a priority today. It's not just the right thing to do; it's the smart thing to do.

Ready to build a website that's open to everyone? Learn more about our **[Growth Website page](/vispaico-growth-website)** and our commitment to **[accessible web design](/about)**.
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
