import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'education-consultant-platform-building-a-28-page-student-portal-in-72-hours';

export async function generateMetadata({ params }: { params: Promise<{ locale:string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function EducationConsultantStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![A website screenshot of the StartinDE consulting homepage.](https://res.cloudinary.com/kinhcode01/image/upload/v1763626083/Vispaico/Images/StartinDE_Cover_cx3mgr.webp)

When an education consultancy came to us with a bold vision, we knew we were in for a challenge. They wanted a comprehensive, 28-page website, complete with a student portal and an admin dashboard. And they needed it in 72 hours.

Most agencies would have laughed them out of the room. They would have said it was impossible, that it couldn't be done. But at Vispaico, we don't believe in impossible. We believe in process, we believe in technology, and we believe in getting things done. We thrive on challenges that make others tremble, turning ambitious ideas into tangible realities in record time.

> **TL;DR**
> - Client needed a 28-page marketing site, authenticated student portal, and admin LMS in three days—security, speed, and scalability included.
> - Day 1 was all blueprinting: map flows, content, personas, and technical specs so nothing slipped once the clock started.
> - Day 2 we built on Next.js + Storyblok + Vercel using modular components for rapid assembly without sacrificing performance.
> - Day 3 was wall-to-wall testing (functional, UX, perf, security) before launch, delivering a production-ready platform in 72 hours.
>
> [Skip to details](#the-challenge-a-complex-platform-on-a-tight-deadline-and-a-prayer-and-a-lot-of-coffee)

### The Challenge: A Complex Platform on a Tight Deadline (And a Prayer, and a Lot of Coffee)

This was not your average brochure website. The client, a burgeoning education consultancy, sought a digital ecosystem to streamline their entire student journey. They needed a powerful **education website** that could handle student applications, document uploads (transcripts, essays, recommendation letters), and a complex, multi-step onboarding process for various international programs. Beyond that, they envisioned a secure, personalized **student portal** where students could:

*   Track their application progress in real-time.
*   View a dynamic checklist of required documents and upload them directly.
*   Access a library of educational resources, FAQs, and preparation materials.
*   Communicate securely and directly with their assigned educational consultant.
*   Receive personalized notifications and updates.

Simultaneously, the consultancy's team required a robust **learning management system (LMS)** accessible via an admin dashboard. This centralized hub would enable them to:

*   Efficiently manage hundreds of student profiles and applications.
*   Monitor student progress and engagement.
*   Upload, organize, and update shared resources for students.
*   Assign tasks to consultants and track their performance.
*   Generate reports on application trends and success rates.
*   Communicate broadly or individually with their student base.

They needed a system that was:
*   **Robust:** Capable of handling hundreds of student applications simultaneously, with various document types and complex data points, all without a hitch.
*   **Secure:** Protecting highly sensitive student information (personal details, academic records) and application data was absolutely paramount, adhering to international data protection standards.
*   **User-friendly:** Simple enough for both tech-savvy students and non-technical staff to navigate intuitively, minimizing training overhead and maximizing adoption. The interface had to be clean, logical, and frustration-free.
*   **Scalable:** Able to grow seamlessly with their expanding business and student base without requiring constant, expensive overhauls or architectural changes. Future-proofing was a key consideration.
*   **Fast:** Because slow websites lose users, deter engagement, and can even impact application completion rates. Every second counted, especially for international students often on less stable internet connections.

And they needed this entire, sophisticated system to be live in three days. It was a tall order, a truly audacious goal, pushing the boundaries of what most agencies consider feasible. But we thrive on such challenges, seeing not a problem, but an opportunity to showcase the unparalleled power of our rapid development methodology.

### The Solution: A Process-Driven Approach and a Modern Tech Stack (Our Secret Weapons, Forged in Digital Fire)

We knew that the only way to pull this off was with a ruthless commitment to our finely-tuned process and a tech stack specifically built for speed, scalability, and developer efficiency. There was absolutely no room for error, no time for "what ifs," only a focused determination on "how can we."

*   **Day 1: The Blueprint (Deconstructing Complexity, Building Clarity).** We kicked off with an intensive, highly structured discovery phase, utilizing our detailed kickoff form as the foundation. This wasn't a leisurely chat; it was a deep, incisive dive into the client's operational nuances. We didn't just ask them what they wanted; we relentlessly probed *why* they wanted it, uncovering the core problems they aimed to solve. We meticulously mapped their existing manual processes, identified critical student and admin user personas with their specific needs and pain points, and articulated their long-term growth vision. This intense, collaborative process, compressed into focused sessions, allowed us to create a comprehensive, granular blueprint for the entire platform. This included:
    *   **Site Structure:** A logical and intuitive architecture for both public-facing marketing pages and the secure, authenticated student/admin portal sections.
    *   **User Flows:** Detailed, step-by-step pathways for key student actions (e.g., application submission, document upload, consultant communication) and admin tasks (e.g., student management, resource updating, reporting).
    *   **Content Plan:** A complete inventory and strategy for all necessary textual content, visual assets, and dynamic data points required for all 28 pages.
    *   **Technical Specifications:** A clear outline of the core technologies, third-party integrations (e.g., payment gateways, communication tools), and API endpoints required.
    This meticulously crafted blueprint served as our immutable roadmap to success, ensuring every stakeholder was aligned and every functional requirement was accounted for before a single line of code was committed.

*   **Day 2: The Build (From Concept to Code at Lightning Speed, Fueled by Precision).** With the blueprint meticulously approved, our development team transitioned into a state of surgical precision. We leveraged a modern, headless tech stack, renowned for its ability to maximize efficiency and performance:
    *   **Next.js:** As the foundational framework for building a lightning-fast, SEO-friendly, and highly performant front-end. Its capabilities for Server-Side Rendering (SSR) and Static Site Generation (SSG) ensured the student portal would load almost instantly for users worldwide, significantly enhancing the user experience.
    *   **Headless CMS (Storyblok):** Utilized for managing all content – from static website pages (like "About Us" and "Services") to dynamic student resources, application forms, and admin alerts. This decoupled content from presentation, empowering the client's content team to make updates independently without developer intervention, while maintaining site performance.
    *   **Vercel:** Our chosen platform for seamless deployment, continuous integration, and global scalability. Vercel's intelligent edge network ensured rapid content delivery to students and admins worldwide, minimizing latency regardless of geographical location.
    This powerful combination of technologies, coupled with our component-based development approach, allowed us to break down complex features into reusable, modular blocks. This accelerated development significantly, making the construction of a 28-page platform in under 48 hours not just possible, but efficient. It was like building a sophisticated metropolis out of advanced LEGO bricks, but with robust code and a fraction of the build time.

*   **Day 3: The Launch (Polishing, Rigorous Testing, and Mission Liftoff).** On the final day, precision and thoroughness were paramount. We subjected the entire platform to an exhaustive, rigorous testing process to ensure everything functioned flawlessly. This wasn't a casual click-through; it involved multi-faceted verification:
    *   **Functional Testing:** Meticulously verifying all application forms, document upload mechanisms, user authentication (student and admin logins), secure communication features, and every other critical function against the blueprint.
    *   **Usability Testing:** Conducting targeted tests to ensure intuitive navigation and a smooth, frustration-free user experience for both students and administrators across various use cases.
    *   **Performance Testing:** Confirming sub-second load times and consistent responsiveness across a wide array of devices (desktop, tablet, mobile) and simulated network conditions.
    *   **Security Audits:** Performing comprehensive checks for vulnerabilities to protect sensitive student and application data, ensuring compliance with privacy regulations.
    Once satisfied with the platform's unwavering readiness, we executed the launch protocol: deploying the final, optimized site to Vercel's global network, configuring custom domains and SSL certificates, setting up analytics and monitoring, and finally, handing over the keys (along with comprehensive documentation and a training session) to the client.

### The Result: A Game-Changing Platform in 72 Hours (And a Very Happy, Very Successful Client)

In just 72 hours, we delivered a fully-functional, highly secure, and exceptionally fast 28-page website, complete with a dynamic student portal and an intuitive admin dashboard. The client was not just happy; they were profoundly impressed and relieved. They were able to launch their new platform not only on time and on budget but also significantly ahead of any traditional agency's timeline. This immediate deployment allowed them to:

*   **Accelerate Student Onboarding:** Seamlessly integrate new students into their programs.
*   **Streamline Operations:** Reduce manual administrative tasks, freeing up consultants to focus on student support.
*   **Expand Reach:** Offer a superior online experience, attracting a wider global student base.
*   **Enhance Credibility:** Project a modern, professional image, instilling confidence in prospective students and partners.

This project is a powerful testament to the efficacy of our process and the advanced capabilities of our chosen tech stack. It's definitive proof that you don't have to choose between speed and quality, or between custom features and rapid delivery. With the right approach, the right tools, and a dedicated, expert team, you can have both. We don't just build websites; we build transformative digital solutions that empower businesses to achieve their most ambitious goals, even under the tightest, seemingly impossible deadlines.

Ready to see what's possible for your business? Do you have an ambitious project that traditional agencies shy away from, deeming it too complex or too time-sensitive? Don't let perceived limitations hold you back. Check out our **[Case Studies](/case-studies)** to see more examples of our rapid development successes across diverse industries, or learn more about our **[Growth Website page](/vispaico-growth-website)** and our comprehensive **[Services page](/services)**. We're not just building websites; we're building business acceleration platforms, designed to give you a significant competitive edge.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Case Study</p>
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