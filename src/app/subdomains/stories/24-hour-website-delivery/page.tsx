import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['24-hour-website-delivery'];

if (!story) {
  throw new Error('Story data missing for 24-hour-website-delivery');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

const articleMarkdown = String.raw`Look, I'm going to tell you something most web agencies won't admit: building a website doesn't actually take six weeks.

![](https://images.unsplash.com/photo-1707083639439-f0aba3ef545b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1731)

It takes six weeks because agencies need to justify their $15,000 price tags. They need those "strategy sessions" and "discovery workshops" and endless revision rounds to make you feel like you're getting your money's worth.

But here's the uncomfortable truth: a professional business website can be built in 24 hours. We know because we do it every week.

### **The Secret Sauce (That Isn't Really Secret)**

**1. We Skip the Theater**

Traditional agencies love their process. Discovery calls. Brand workshops. Stakeholder meetings. Mood boards. More meetings about the meetings.

We skip all of it.

Why? Because your competitor doesn't care about your mood board. They care that their website is live and yours isn't.

**2. We Use Battle-Tested Frameworks**

This is where people clutch their pearls: "But my business is UNIQUE!"

It is. Your content is unique. Your offers are unique. Your story is unique.

Your website structure? Not unique. Not even a little bit.

Every business website needs:
- A clear value proposition above the fold
- Social proof (testimonials, client logos)
- Service or product breakdowns
- A contact method
- Mobile responsiveness
- SSL security

The design might vary. The content changes. But the framework? That's been solved.

We use modern, proven frameworks (React, Next.js) that are fast, secure, and built for conversion. No WordPress bloat. No unnecessary plugins. Just clean, purposeful code.

**3. We Work While You Sleep**

Here's how a 24-hour website actually breaks down:

**Hours 0-2:** Information gathering  
You fill out a simple form. Business name, services, existing branding assets, competitor examples you like. That's it. No 90-minute Zoom call about your "vision."

**Hours 2-8:** Build phase  
Our dev team builds the foundation. Structure, navigation, responsive framework. This happens overnight (for you—morning for us in Vietnam).

**Hours 8-16:** Content integration  
Your copy goes in. Images get optimized. Forms get connected. SEO basics implemented.

**Hours 16-22:** Quality assurance  
We test on real devices. Mobile, tablet, desktop. Different browsers. Load speed optimization. Security checks.

**Hours 22-24:** Deployment  
Domain connected. SSL installed. Email forwarding set up. Site goes live.

**The 24-hour breakdown is real.** Most clients go to bed with no website and wake up with one that's better than their competitors'.

### **What You're NOT Getting (And Why That's Good)**

**No Custom Illustrations**  
Stock photos and clean typography work perfectly fine. Unless you're Nike, you don't need a custom illustration budget.

**No Complex Animations**  
Fancy animations slow down your site and annoy mobile users. We use subtle, purposeful motion that enhances experience without sacrificing speed.

**No "Strategy" Fluff**  
We're not business consultants. We're builders. If you need someone to help you figure out what you do, hire a consultant first. Then hire us to build the site.

**No Endless Revisions**  
You get 2-3 revision rounds included. That's plenty if you know what you want. If you don't know what you want, no amount of revisions will help.

### **The Real Question: Is Fast Actually Good?**

Legitimate concern. Can something built quickly be quality?

Answer: Depends on the builder.

A 24-hour website from someone who's never done it before? Probably terrible.

A 24-hour website from a team that's built 500+ sites using proven systems? Solid.

It's like asking if a chef can make a great meal in 30 minutes. A home cook? Probably not. A restaurant chef who's made that dish a thousand times? Absolutely.

We're the restaurant chef.

### **Who This Works For (And Who It Doesn't)**

**Perfect for:**
- Small businesses needing a professional web presence
- Startups launching quickly
- Agencies needing white-label support
- Anyone replacing an outdated WordPress mess
- Businesses that value speed over endless customization

**Not right for:**
- Enterprise companies needing complex custom platforms
- E-commerce with 10,000+ products
- Websites requiring custom back-end systems
- Anyone who wants 47 stakeholders to weigh in on button colors

### **The Technology That Makes This Possible**

Traditional agencies use WordPress because it's what they know. It's also bloated, slow, and a security nightmare.

We use React and Next.js because:
- Lightning fast performance
- Bulletproof security (no plugin vulnerabilities)
- Easy to update and maintain
- Scales beautifully as you grow
- No monthly WordPress maintenance fees

Modern tech stack = modern speed.

### **But What About SEO?**

Another legitimate concern. Can a 24-hour website rank?

Short answer: Yes.

Long answer: SEO isn't about how long your website took to build. It's about:
- Clean code structure (check)
- Fast loading speed (check)
- Mobile responsiveness (check)
- Proper meta tags and schema (check)
- Quality content (that's on you)
- Backlinks over time (ongoing)

We handle all the technical SEO foundations. The rest is content strategy and time—which would be true for any website, regardless of how long it took to build.

### **The Real Cost of Waiting**

While you're stuck in week three of your traditional agency's "discovery phase," your competitor is:
- Ranking on Google
- Collecting leads
- Building email lists
- Making sales
- Getting testimonials

Every day without a website is a day of lost opportunity.

### **Our Process (In Painful Detail)**

**Day 1, Hour 0:**  
You submit your order. You provide:
- Business basics
- Service/product info
- 3-5 competitor sites you like
- Any existing brand assets
- Contact information

**Day 1, Hour 2:**  
We kick off. No meeting scheduled. No calendar dancing. We just start.

**Day 1, Hour 12:**  
You get a preview link. The structure is there. Placeholders where your content will go. You can see the bones.

**Day 1, Hour 20:**  
Preview update. Real content integrated. Images optimized. Forms working.

**Day 1, Hour 24:**  
Final preview. You approve or request minor tweaks.

**Day 2:**  
Site goes live. Domain connected. You're officially online.

### **The Catches (Because There Always Are Some)**

**1. You need to know what you want**  
We're not mind readers. Clear brief = fast execution. Vague brief = slow mess.

**2. Content is on you**  
We can't write your service descriptions. We can help, but you know your business best.

**3. Revisions have limits**  
Changing your entire business model on day two isn't a "revision." It's a new project.

**4. Advanced features cost extra**  
Custom APIs, complex booking systems, member portals—these aren't 24-hour builds. They're separate projects.

### **Why Traditional Agencies Hate This**

Because it exposes how much of their process is unnecessary.

You don't need:
- Five discovery calls
- A brand workshop
- Stakeholder interviews
- Wireframe presentations
- Design mockup rounds
- Development sprints
- QA phases
- Training sessions

You need a website that works, looks professional, and goes live fast.

### **The Bottom Line**

Can every website be built in 24 hours? No.

Can most business websites be built in 24 hours by experienced developers using modern tools and proven frameworks? Absolutely.

The question isn't whether it's possible. The question is: how many more days are you willing to wait while your competitors are already online?

**Your move:**  
Stop scheduling discovery calls. Start building. Your website could be live by tomorrow.

No meetings. No BS. Just results.`;

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function TwentyFourHourWebsiteDeliveryStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Operational Velocity</p>
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
              Related stories from the field
            </h2>
            <p className="text-slate-600">Dive deeper into the systems and strategies that keep high-velocity teams shipping quality work.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedStories.map((related) => (
              <a
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
              </a>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
