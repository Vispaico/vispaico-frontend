import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'how-to-audit-your-website-for-wcag2_2-compliance';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function HowToAuditYourWebsiteForWcag22ComplianceStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![](https://images.unsplash.com/photo-1565665532830-0dfd1facb1a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070)

### **Step 1: Define Your Audit Scope**

Before you start testing, you need to know what you're testing. Ask yourself:

- Which digital assets are we auditing? (The entire website? Specific pages? Web apps? PDFs?)
- What conformance level are we aiming for? (Usually WCAG 2.2 AA, which is the standard recommendation)
- Which browsers and devices do we need to support?
- Are there specific user journeys we need to prioritize?

Document this clearly. Scope creep is real, and clear boundaries make the audit faster and more focused.

### **Step 2: Run Automated Scanning**

Automated tools are your first line of defense. They're fast, they're thorough, and they catch a lot of low-hanging fruit.

**Recommended Automated Tools:**
- **Axe DevTools** – Chrome extension that's incredibly accurate for common issues
- **WAVE** – Web accessibility evaluation tool, great for visual feedback
- **Siteimprove** – Enterprise** - level scanning with prioritization
- **Accessibility Insights** – Microsoft's free tool, excellent for WCAG compliance
- **Browser Developer Tools** – Chrome and Firefox have built-in accessibility panels; use them

Run these tools on your key pages. They'll flag issues like missing alt text, color contrast problems, missing form labels, and ARIA errors. Document everything.

**Pro tip:** Automated tools catch maybe 40% of real accessibility issues. The rest require human judgment and testing.

### **Step 3: Manual Testing—The Real Work Begins**

This is where you'll find the issues that automated tools miss.

**Keyboard Navigation & Focus Management**

Grab your keyboard. Unplug your mouse (or just discipline yourself not to use it).
- Can you tab through the entire page in a logical order?
- Can you see which element has focus at all times?
- Can you activate buttons and links with Enter or Space?
- Are there any keyboard traps where you get stuck?
- Can you skip repetitive navigation with skip links?

Keyboard navigation is absolutely fundamental. If someone can't navigate your site with a keyboard, they can't use it, period.

**Screen Reader Testing**

This one's non-negotiable. You need to actually hear what a screen reader user experiences.

**Tools:**
- **NVDA (Windows)** – Free, open-source, very accurate
- **VoiceOver (Mac/iOS)** – Built into Apple devices, industry standard
- **JAWS (Windows)** – Industry standard, paid, comprehensive

Pick one and test your entire user journey. Browse as a screen reader user would.

Listen for:
- Does the page structure make sense when you can't see it?
- Are images described properly with alt text?
- Are form fields labeled clearly?
- Can you understand what interactive elements do?
- Does dynamic content (dropdowns, modals, notifications) get announced?

Take notes. A lot of issues will become obvious when you hear them.

**Color Contrast & Visual Design**

Don't skip this. Bad color contrast excludes people with visual impairments and makes your site harder to use for everyone.

**Tools:**
- **Tanaguru Contrast-Finder** – Simple, free, precise
- **Colour Contrast Analyser** – Desktop tool, very thorough
- **Chrome DevTools** – Built-in contrast checker

Standards: Normal text needs a contrast ratio of at least 4.5:1. Large text needs 3:1. Test your actual colors against real text.

Also review:
- Is text size readable? (Avoid anything smaller than 12px)
- Is there enough space between lines and elements?
- Does color alone communicate important information? (e.g., "error in red" without also saying "error")

**Interaction & Dynamic Content Testing**

Modern websites have interactive elements: dropdowns, modals, sliders, tabs, autocomplete forms.

Test each one:
- Can keyboard users interact with it?
- Do screen readers announce state changes? (e.g., "accordion expanded")
- Do focus indicators remain visible?
- Does dynamic content get announced to screen readers?

This is where JavaScript accessibility really matters. A lot of developers build beautiful interactions that completely break for assistive technology users.

### **Step 4: User Testing with People with Disabilities**

Here's the hard truth: developers and consultants, even with the best intentions, will miss things. Real users with disabilities will find issues you never thought of.

If your budget allows, bring in users with different disabilities:
- People using screen readers
- People navigating with keyboard only
- People with motor disabilities
- People with cognitive disabilities

Have them complete real tasks on your site. Watch where they struggle. Listen to their feedback.

This isn't just about compliance—it's about understanding real human experiences. It changes how you think about accessibility forever.

### **Step 5: Document Your Findings**

Now you have data from automated tools, manual testing, and user feedback. Time to compile it into a meaningful report.
Your report should include:

**For each issue found:**
- Description of the problem
- Which WCAG 2.2 criterion it violates (e.g., "WCAG 2.2 1.4.3 Contrast (Minimum)")
- Severity level (Critical, High, Medium, Low)
- Which pages are affected
- Screenshots or recordings if helpful
- Clear remediation suggestions
- Estimated effort to fix

**Overall findings:**
- Conformance level achieved (A, AA, or AAA)
- Compliance status (Compliant, Mostly Compliant, Non-Compliant)
- Summary of top issues
- Prioritized remediation roadmap

Make it actionable. The goal isn't to overwhelm the development team—it's to give them clear direction on what to fix and why.

### **Recommended Tools—Your Accessibility Toolkit**

**Automated Scanning Tools:**
- Axe DevTools (free)
- WAVE (free)
- Siteimprove (paid)
- Accessibility Insights (free)

**Screen Readers:**
- NVDA (free, Windows)
- VoiceOver (free, Mac/iOS)
- JAWS (paid, Windows)

**Color Contrast Checkers:**
- Tanaguru Contrast-Finder (free)
- Colour Contrast Analyser (free)

**Browser Developer Tools:**
- Chrome DevTools Accessibility Panel (free)
- Firefox Developer Tools (free)

**Cross-Device & Cross-Browser Testing:**
- BrowserStack (paid)
- Sauce Labs (paid)

**Project Management & Tracking:**
- Jira (paid)
- Trello (free/paid)
- Asana (free/paid)

### **Certification & Documentation: Formalizing Your Compliance**

Once you've audited and fixed issues, it's time to document your compliance formally.

**Create a Statement of Accessibility**

This is a public declaration that outlines:
- Which websites/web apps you're claiming to be accessible
- Which standards you've tested against (WCAG 2.2 AA, EN 301 549, etc.)
- Any known limitations or issues
- Date of the audit
- How to report accessibility issues

Post this on your site. Users appreciate transparency.

**Issue a Formal Conformance Claim**

Align with W3C guidelines and specify your conformance level:
- **Level A:** Basic accessibility
- **Level AA:** Recommended level, covers most needs
- **Level AAA:** Advanced accessibility, rarely required

Most compliance requirements ask for Level AA.

**Use Standard Templates**

The **Voluntary Product Accessibility Template (VPAT)** is an industry standard for communicating conformance. It's detailed but worth the effort—clients and regulators expect it.

Template available from the Accessibility Conformance Testing (ACT) working group.

**Set Up Continuous Monitoring**

One-time audits aren't enough. Your website changes—content gets updated, features get added, code evolves.

Set up regular re-audits:
- Quarterly for high-traffic sites
- Annually for stable sites
- After major updates or redesigns

This keeps you compliant over time instead of requiring massive remediation later.

### **Your Accessibility Audit Checklist**

Before you declare your site accessible:
- ✓ Automated scans run on all key pages
- ✓ Manual keyboard navigation tested end-to-end
- ✓ Screen reader testing completed (at least NVDA + one other)
- ✓ Color contrast verified
- ✓ Forms and interactive elements tested
- ✓ Dynamic content announced properly
- ✓ User testing with people with disabilities conducted
- ✓ All issues documented with severity and remediation steps
- ✓ Critical issues resolved
- ✓ Conformance statement created
- ✓ VPAT or compliance template completed
- ✓ Statement of Accessibility published
- ✓ Continuous monitoring plan in place
- ✓ Audit report provided

### **Final Thoughts**

An accessibility audit is thorough. It takes time. But it's not mysterious or magical—it's systematic testing with the right tools and mindset.

The payoff? A website that works for everyone, complies with EU regulations, and actually serves your users. That's worth the effort.

If you're not sure where to start, that's okay. This is exactly what we do at Vispaico. We audit websites, we find the issues, we fix them, and we help you stay compliant long-term.

Let's build a web that's accessible to all.
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
