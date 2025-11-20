import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'how-to-build-accessible-websites';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function HowToBuildAccessibleWebsitesStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![](https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=3174)
  
The good news? Building accessible websites isn't rocket science. It just requires the right approach, knowledge, and commitment.

### **What Does an Accessible Website Actually Mean?**

An accessible website is one that can be used by everyone—regardless of their physical abilities or disabilities. That includes:

- **People with visual impairments** who use screen readers
- **People with motor disabilities** who navigate using keyboards instead of a mouse
- **People with hearing impairments** who need captions on video
- **People with cognitive disabilities** who benefit from clear, simple design
- **Older users** who often face similar challenges as younger people with disabilities

Accessible design isn't a separate project layer. It's woven into every decision: how you structure your HTML, choose colors, write alt text, design forms, and organize content.

### **The Standards: What You Need to Know**

**WCAG 2.2 AA** is the global gold standard for web accessibility. It's maintained by the W3C (World Wide Web Consortium) and covers everything from keyboard navigation to screen reader compatibility. Level AA is the recommended compliance level—it's challenging but achievable for most sites.

**EN 301 549** is the European standard that mirrors WCAG 2.2 AA but is legally binding across the EU. It's the standard you need to meet to be compliant with EU regulations.

**The EU Accessibility Act (EAA)** mandates that all websites and digital services must be accessible. Enforcement began in 2025, and it applies to almost all organizations operating in the EU—no excuses, no exceptions.

**BFSG (Barrierefreiheitsstärkungsgesetz)** is Germany's barrier-free strengthening act. If you're targeting German users or have a German presence, this is non-negotiable.

**2. Creating Accessible Websites: The Vispaico Approach**

When we build websites for clients, accessibility isn't an afterthought. It's baked in from day one.

**Strategy Phase:** We understand your audience and their needs. Are your users older? Do they have visual impairments? Are they using assistive technologies? These questions shape everything.

**Design Phase:** We design with contrast, readability, and navigation in mind. Colors aren't just pretty—they work for colorblind users. Typography is readable. Interactive elements are intuitive for keyboard and screen reader users.

**Development Phase:** Clean HTML structure, semantic markup, ARIA labels where needed, keyboard navigation, and screen reader testing. Our developers know accessibility isn't negotiable.

**Testing Phase:** Automated tools catch obvious issues, but we also do manual testing with real assistive technologies. And ideally, we involve users with disabilities to test the real experience.

**Auditing & Consulting: What We Do Differently**

Maybe you already have a website that isn't accessible. That's where auditing comes in.

A proper accessibility audit isn't just running an automated scanner and calling it done. It's a comprehensive review that includes:

- **Automated scanning** to catch broad issues
- **Manual testing** with keyboards, screen readers, and real user scenarios
- **Color contrast and visual design reviews**
- **Form and interaction testing**
- **Real feedback from users with disabilities**

We then provide a prioritized report with clear recommendations. Critical issues get fixed first. Low-priority improvements can be phased in over time.

For companies operating in the EU, we help you navigate the legal requirements—making sure you're not just compliant today, but future-proof tomorrow.

### **The Business Case for Accessibility**

Here's what surprised many of our clients: accessible websites aren't just better for people with disabilities. They're better for everyone.

Accessible design improves SEO. Search engines love clean, semantic HTML. Accessible sites rank better.

Accessible design improves user experience. Clearer navigation and simpler design benefit all users, especially on mobile devices.

Accessible design expands your market. You're reaching more people. That means more customers, more revenue.

Accessible design builds trust. Users see that you care about inclusivity. That's a brand differentiator in a crowded market.

### **What's Next?**

If you're building a new website, insist on accessibility from the start. It's cheaper and easier than retrofitting it later.

If you have an existing website, an audit is the first step. It'll show you where you stand and what needs to happen next.

The EU regulations are here to stay. The question isn't whether you should make your website accessible—it's whether you do it proactively or wait until regulators force your hand.

We're here to help. Whether you need a new accessible website or an audit of your existing one, let's talk.
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
