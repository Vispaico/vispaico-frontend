import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'how-to-choose-a-web-developer-10-questions-you-should-ask';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function HowToChooseAWebDeveloperStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![White screen on a iMac.](https://images.unsplash.com/photo-1649877508777-1554357604eb?w=900&auto=jpg&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYmRldmVsb3BlcnxlbnwwfHwwfHx8Mg%3D%3D)

Choosing a web developer can feel like a high-stakes game of poker. You're betting your business on someone you've probably never met, and you're hoping they're not bluffing with a pair of twos.

But it doesn't have to be a gamble. If you know the right questions to ask, you can quickly separate the aces from the jokers. You can tell who's holding a royal flush and who's just trying to sell you a bridge in Brooklyn.

So, before you go all-in, here are 10 questions you should ask any potential web developer.

### 1. "Can I see your portfolio?" (Show Me the Goods)

This is the most obvious question, but it's also the most important. A good web developer will have a portfolio of live websites that they've built for real clients. Not just a bunch of pretty pictures on a Dribbble profile or hypothetical "concept" projects. You want to see their work in the wild, solving real business problems.

Don't just look at the screenshots. Click on the links. Act like a potential customer. See how the sites perform. Are they fast? Are they mobile-friendly across different devices? Do they look professional and aligned with modern design principles? Are they easy to navigate and intuitive to use? Do they make you want to buy what they're selling, or at least learn more?

If a developer doesn't have a portfolio, or if their portfolio is full of "concept" projects and no live work, that's a huge red flag. It's like a chef who's never actually cooked a meal for anyone and only shows you pictures of food.

### 2. "What's your process?" (The Roadmap to Success)

A professional web developer will have a clear, well-defined process. They should be able to walk you through every step of the project, from the initial kickoff and discovery phase to development, testing, and the final launch, and even post-launch support. A good process isn't about rigidity; it's about transparency and predictability.

*   **Discovery:** How do they learn about your business, your goals, and your target audience? Do they have a structured questionnaire or an in-depth interview process?
*   **Design:** How do they present designs? Do they use static mockups, interactive prototypes, or a component library? What's their feedback and revision loop like?
*   **Development:** What methodology do they follow (Agile, Waterfall, something else)? How often do they provide updates?
*   **Testing:** What's their quality assurance (QA) process? Do they test on different browsers and devices?
*   **Launch:** What's involved in taking the site live?
*   **Post-Launch:** What kind of support do they offer once the site is live?

If they can't articulate their process, or if it sounds like they're making it up as they go along, that's a sign that they're disorganized and unprofessional. A clear process is a sign of a good developer. It shows that they've done this before, and they know what they're doing. It minimizes surprises and sets clear expectations.

### 3. "What technology do you use?" (Future-Proofing Your Investment)

You don't need to be a tech expert to understand the basics. But you should understand *why* they choose certain technologies. Are they using a modern, scalable tech stack like Next.js (for performance and SEO) and a headless CMS (for content flexibility)? Or are they still building websites with outdated technology like a monolithic WordPress setup that might become a maintenance nightmare?

The technology they use will have a huge impact on your website's performance, security, and scalability. It's the difference between building your house on a solid foundation and building it on a pile of sand. Ask about:

*   **Front-end Frameworks:** React, Next.js, Vue, Angular
*   **Back-end Technologies:** Node.js, Python/Django, Ruby on Rails
*   **CMS:** Headless (Storyblok, Contentful) vs. Traditional (WordPress)
*   **Hosting:** Vercel, Netlify, AWS, etc.
*   **Databases:** SQL, NoSQL

A good developer will explain their choices in plain English, relating them back to your business needs, not just technical jargon.

### 4. "What's included in your price?" (No Surprise Fees, Please)

A good web developer will be transparent about their pricing. They should be able to give you a detailed breakdown of what's included in their price, and what's not. This means a clear scope of work, itemized costs, and a payment schedule.

Be wary of developers who give you a vague, all-inclusive price without any details. You're likely to get hit with a bunch of surprise fees down the road for "unexpected" work or "additional features." It's the classic "bait and switch" tactic, and it's a sure sign of a shady operator. Ensure the proposal clearly outlines:

*   Design (wireframes, mockups, revisions)
*   Development (front-end, back-end, integrations)
*   Content migration
*   SEO setup (basic optimization, sitemap submission)
*   Hosting setup
*   Testing
*   Launch
*   Post-launch support/maintenance

### 5. "What's your timeline?" (Realistic Expectations are Key)

A professional web developer will be able to give you a realistic timeline for your project. Be wary of developers who promise you the world in a week (unless they have a proven, streamlined process like ours).

At Vispaico, we can build a website in 72 hours, but that's because we have a highly refined, process-driven approach and a specific tech stack. Most traditional agencies and freelancers will need at least a few weeks, if not months, for a custom build. The key is understanding *why* their timeline is what it is, and whether it aligns with your urgent business needs versus a more complex, drawn-out build.

### 6. "What's your communication style?" (Staying in the Loop)

How will you communicate with your developer? Email? Phone? Slack? Project management tools like Trello or Asana? How often can you expect to hear from them? Will you get daily updates, weekly summaries, or only when there's a problem?

Clear and consistent communication is the key to a successful project. You should never feel like you're in the dark about the status of your website. Discuss preferred communication channels, frequency of updates, and who your main point of contact will be.

### 7. "What happens if I don't like the design?" (The Revision Process)

A good web developer will have a clear revision process. They should be open to feedback, and they should be willing to work with you to create a design that you love and that meets your business objectives.

If a developer gets defensive or cagey when you ask about revisions, that's a sign that they're not a good collaborator. You're not looking for an artist who's going to create their masterpiece; you're looking for a partner who's going to help you build your business. Understand how many rounds of revisions are included and what constitutes a "major" vs. "minor" change.

### 8. "What kind of support do you offer after launch?" (The Marathon, Not the Sprint)

A website is not a "set it and forget it" kind of thing. It needs ongoing maintenance, security updates, performance monitoring, and potentially new features to keep it running smoothly and effectively.

Does the developer offer a maintenance plan? What's included (backups, security, updates, bug fixes, content changes)? What's the cost? If they don't have a plan for post-launch support, you're going to be on your own when something goes wrong. And something *will* always go wrong. A good developer views the launch as the beginning of a long-term partnership, not the end.

### 9. "Who owns the website?" (Get It in Writing!)

This is a big one, and it's crucial to clarify upfront. When the project is over, you should own everything: your domain, your hosting accounts, your code, your content, and any custom assets created.

Some shady developers will try to hold your website hostage by retaining ownership of the hosting or the code. They'll charge you exorbitant fees to make simple changes, and they'll make it impossible for you to switch to another developer. Don't fall for it. Make sure you have a clear agreement about who owns what before you start the project. This should be explicitly stated in your contract.

### 10. "Why should I hire you?" (Their Sales Pitch)

This is your chance to see how the developer sells themselves. Are they passionate about what they do? Do they understand your business goals, not just your website requirements? Do they seem like someone you can trust and work with long-term?

A good developer will be able to articulate their value proposition clearly and concisely. They'll be able to explain how they can help you achieve your business goals, not just build a website. They'll be more interested in your success than in their own portfolio. Listen for enthusiasm, a genuine interest in your company, and a clear vision for how they can contribute.

Choosing a web developer is a big decision, a true investment in your business's future. But if you ask the right questions, you can make an informed choice and find a partner who will help you build a website that's not just beautiful and functional, but also a powerful tool for growth and long-term success.

Ready to work with a team that has all the right answers? Check out our **[Growth Website page](/vispaico-growth-website)**, our **[Case Studies](/case-studies)**, and our **[About page](/about)** to see if we're the right fit for you. We're not just a team of developers; we're a team of partners who are dedicated to helping you succeed, every step of the way.`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Growth Playbook</p>
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