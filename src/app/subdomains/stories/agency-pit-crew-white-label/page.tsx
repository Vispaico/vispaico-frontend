import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['agency-pit-crew-white-label'];

if (!story) {
  throw new Error('Story data missing for agency-pit-crew-white-label');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

const articleMarkdown = String.raw`Picture this: Your agency just landed three new website projects. Great news.

Except your two developers are already maxed out. One's on vacation next week. The other is finishing a complex e-commerce build.

Deadlines are in 2-3 weeks. Clients are excited. Your reputation is on the line.

![](https://images.unsplash.com/photo-1547917222-cce689932933?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)

You have three options:

**Option 1:** Hire another developer. Takes 2-3 months to recruit, onboard, and get productive. Costs $80K+/year.

**Option 2:** Tell clients you can't meet deadlines. Risk losing projects and damaging reputation.

**Option 3:** Partner with a white-label development team that works invisibly behind the scenes, delivering quality work under your brand.

Smart agencies choose Option 3.

### **What White-Label Development Actually Means**

Simple: We build. You take credit.

You maintain the client relationship. You manage communication. You deliver the final product.

We're the invisible pit crew making sure the car runs perfectly.

Your client never knows we exist. And that's exactly how it should be.

### **Why Agencies Need White-Label Partners**

**Problem 1: Unpredictable Workload**

Some months: Slow. Developers sitting idle.  
Other months: Slammed. Everyone working 60-hour weeks.

Hiring for peak capacity means paying for idle time. Hiring for average capacity means turning away work during busy periods.

**Solution:** Fixed team for baseline. White-label partner for overflow.

**Problem 2: Skills Gap**

Your team is great at WordPress. Client wants React.

Your designer is strong in branding. Client needs a complex web app.

You could turn away the project. Or partner with specialists.

**Solution:** Keep your core expertise in-house. Partner for specialized skills.

**Problem 3: Vacation and Sick Days**

Developer takes two weeks off. Projects don't pause.

Developer gets sick during critical sprint. Deadlines don't move.

**Solution:** Backup capacity through trusted partners.

**Problem 4: Scale Without Overhead**

Hiring full-time developers costs:
- Salary: $70-120K/year
- Benefits: +30% ($21-36K)
- Equipment: $3-5K
- Office space: $6-12K/year
- Training time: 2-3 months
- Management overhead: ongoing

Total cost: $100-170K per developer, per year, plus opportunity cost of slow hiring.

**Solution:** Pay only for projects you actually have. No overhead. Instant capacity.

### **How White-Label Partnerships Actually Work**

**Step 1: Agency Gets Client Project**

You sell the project. You set the scope. You collect payment.

Client relationship = yours entirely.

**Step 2: Agency Partners with Us**

You send us the project details:
- Design mockups (if you have them)
- Content and assets
- Functionality requirements
- Deadline
- Any special considerations

We give you a quote and timeline.

**Step 3: We Build**

Our dev team builds the website/app to your specifications.

All work is done under NDA. Your client information is confidential.

Progress updates go to you, not the client.

**Step 4: You Review**

We send you previews. You review as if your team built it.

Request revisions. We implement them.

**Step 5: You Deliver to Client**

Once approved, you deliver the final product to your client.

It's presented as your agency's work. Your branding. Your delivery.

We remain invisible.

**Step 6: You Handle Support**

Post-launch support and maintenance = your responsibility.

Or we can provide that too (also white-labeled) if you prefer.

### **Real Agency Partnership Examples**

**Case 1: Design Agency Needs Development**

**Scenario:**  
Design agency (8 employees) is excellent at branding and UI design. No developers on staff.

They design beautiful websites. But can't code them.

**Previous approach:**  
Hire freelance developers project-by-project. Inconsistent quality. Communication issues. Timeline uncertainty.

**Partnership approach:**  
They design. We develop. Every project.

They send finished designs. We build pixel-perfect implementations.

**Results:**
- Consistent quality (same team every time)
- Reliable timelines (we know their standards)
- Happier clients (seamless design-to-development)
- More projects (no bottleneck waiting for developers)

**Volume:** 3-5 websites per month through us. Agency revenue increased 40% first year.

**Case 2: Marketing Agency Expands Services**

**Scenario:**  
Marketing agency (12 employees) handles SEO, PPC, content marketing. Clients keep asking for website work.

They could turn away those requests. Or become full-service.

**Partnership approach:**  
They handle marketing. We handle websites. Combined offering to clients.

Client gets one agency relationship. Behind the scenes, we collaborate.

**Results:**
- Expanded service offering (without hiring)
- Increased client lifetime value
- Cross-sell opportunities (website clients need marketing, marketing clients need websites)
- Competitive advantage (true full-service agency)

**Impact:** Average client spend increased 2.3x. Retention improved because clients rely on them for more services.

**Case 3: Solo Agency Owner Scales**

**Scenario:**  
Solo consultant building websites. Talented developer but hit capacity at 2-3 sites per month.

To grow, needed to either stop designing/developing personally or turn away clients.

**Partnership approach:**  
He handles client relationships and high-level strategy. We handle execution on overflow projects.

During slow months, he builds everything. During busy months, we take 50-75% of projects.

**Results:**
- Scaled from 2-3 sites/month to 6-8 sites/month
- Income increased 2.5x
- Still maintains client relationships personally
- No hiring, no overhead, no management stress

**Quote from him:**  
"You're essentially my invisible dev team. I look like an agency of 5 people. I'm still just me, with you guys backing me up. It's perfect."

### **What Makes a Good White-Label Partnership**

**Essential qualities:**

**1. Invisibility**  
We never contact your clients directly. All communication goes through you.

Your branding on everything. Your name on the work.

**2. Reliability**  
You need to trust we'll deliver on time, every time.

Your reputation depends on our execution. We take that seriously.

**3. Quality**  
Work must match or exceed your standards.

Clients can't tell the difference between what you build and what we build.

**4. Communication**  
Fast responses. Clear updates. No surprises.

You need to know project status without chasing us.

**5. Consistency**  
Same team, same quality, every project.

Not a different developer each time learning your preferences.

**6. Flexibility**  
Sometimes requirements change. Clients add requests. Deadlines shift.

Good partners adapt without drama.

**7. Fair Pricing**  
You need to make margin. We need to be fairly compensated.

Pricing that lets both parties win.

### **The Economics of White-Label Partnerships**

**Example project: Business website**

**Agency charges client:** $3,500

**Agency pays us (white-label):** $1,200

**Agency margin:** $2,300 (65%)

**Agency time investment:**
- Initial client meeting: 1 hour
- Gathering requirements: 1 hour
- Review and feedback: 2 hours
- Client delivery and training: 1 hour
- **Total: 5 hours**

**Effective hourly rate:** $460/hour

Compare to doing it in-house:
- Development time: 25-30 hours
- Effective rate: $140/hour
- Plus: developer salary, benefits, overhead

**The math works.**

### **Common White-Label Arrangements**

**Model 1: Project-Based**

Pay per project. No retainer. No commitment.

**Pros:** Flexibility. Only pay when you have work.  
**Cons:** No guaranteed capacity during busy times.

**Best for:** Agencies with unpredictable workload.

**Model 2: Retainer-Based**

Monthly retainer for guaranteed capacity.

Example: $3,000/month retainer = 25 hours development time.

**Pros:** Guaranteed availability. Priority turnaround.  
**Cons:** Pay even during slow months.

**Best for:** Agencies with consistent monthly workload.

**Model 3: Revenue Share**

Partnership where you split project revenue.

Example: 60/40 split. You get 60% for client relationship, we get 40% for execution.

**Pros:** Aligned incentives. No upfront cost.  
**Cons:** Lower margins. More complex accounting.

**Best for:** New agencies without capital.

**Model 4: Hybrid**

Combination of retainer + overflow project pricing.

Example: $2,000/month retainer for first 15 hours, then per-project pricing for additional work.

**Pros:** Guaranteed capacity + flexibility.  
**Cons:** More complex pricing.

**Best for:** Growing agencies scaling up.

### **What We Can White-Label**

**Website Development:**
- Business websites (5-20 pages)
- E-commerce (Shopify, WooCommerce)
- Landing pages
- Microsites
- Event websites

**Web Applications:**
- Custom React/Next.js apps
- Progressive web apps
- SaaS platforms
- Member portals
- Booking systems

**Migrations:**
- WordPress to React
- Platform migrations
- Hosting migrations
- Redesigns with platform change

**Maintenance & Support:**
- Ongoing updates
- Security monitoring
- Performance optimization
- Bug fixes
- Content updates

**Technical Consulting:**
- Architecture planning
- Technology selection
- Performance audits
- Security reviews

### **What We Can't (or Won't) White-Label**

**We're honest about limitations:**

**Won't do:**
- Anything illegal or unethical
- Compete directly with your agency
- Contact your clients behind your back
- Claim credit publicly
- Share your confidential information

**Can't do well:**
- Highly specialized industry platforms (medical EMR, legal case management, etc.)
- Mobile app development (native iOS/Android)
- Enterprise-scale applications (100+ user roles, complex permissions)
- Real-time applications (trading platforms, live streaming)

Know your partner's strengths and limitations.

### **Red Flags in White-Label Partners**

**Avoid partners who:**

**1. Require exclusivity**  
Good partners don't demand you only work with them.

**2. Have inconsistent quality**  
Every project should meet standards. If quality varies, they don't have systems.

**3. Miss deadlines regularly**  
Once or twice = okay. Regularly = find new partner.

**4. Communicate poorly**  
If you can't reach them, your clients suffer.

**5. Try to steal clients**  
Unethical and business-destroying.

**6. Overcommit capacity**  
Partner taking on too much work can't deliver quality to anyone.

**7. Have unclear pricing**  
Transparent pricing from the start. No surprise charges.

### **How to Start a White-Label Partnership**

**Step 1: Test with Small Project**

Don't commit to large retainer immediately.

Start with one small project. Test:
- Quality of work
- Communication speed
- Ability to meet deadlines
- Revision handling
- Overall professionalism

**Step 2: Set Clear Expectations**

Document:
- Communication methods (email, Slack, etc.)
- Turnaround times
- Revision policies
- Payment terms
- NDA and confidentiality
- Quality standards

**Step 3: Establish Workflow**

Create process for:
- Project handoff
- Progress updates
- Review and feedback
- Delivery and handback
- Emergency support

**Step 4: Build Relationship Over Time**

Good partnerships improve with familiarity.

The more we work together, the better we understand your preferences, your clients, your standards.

**Step 5: Scale Gradually**

Start with 1 project/month. Then 2-3. Then retainer if it makes sense.

Don't rush into large commitments.

### **Questions Agencies Ask**

**"What if the client finds out?"**

They shouldn't, if both parties maintain professionalism.

We never contact clients. We never put our name on work. We're invisible.

But honestly? Even if they somehow found out, most clients don't care who physically built it. They care that YOU delivered quality work on time.

**"How do you ensure quality?"**

- Experienced team (not juniors or interns)
- Code reviews before delivery
- Testing on multiple devices/browsers
- QA checklist for every project
- Same standards we'd use for our direct clients

**"What if you're too busy when I need you?"**

Honest answer: Sometimes we're at capacity.

We try to communicate availability upfront. Retainer clients get priority.

But we don't overcommit. Better to say "we're booked" than deliver poor quality.

**"Can I see examples of your work?"**

Yes, but with context: the work is delivered under partner agencies' brands.

We can share examples but often can't name which agency we partnered with (confidentiality).

**"What if I want to hire you full-time later?"**

We're not looking for employment. We're building our own business.

But if you want to hire developers generally, we can potentially recommend people.

**"How fast can you really build?"**

Depends on complexity:
- Simple business site: 2-3 days
- Complex site with custom features: 1-2 weeks
- Web application: 3-6 weeks
- E-commerce with 100+ products: 2-4 weeks

We're fast, not magic. Set realistic client expectations.

### **The Pit Crew Mentality**

Formula 1 pit crews change tires in under 2 seconds.

The driver gets the glory. The crew makes it possible.

That's us.

You're the driver (client-facing, steering direction, getting the credit).

We're the pit crew (fast, skilled, invisible, making sure everything runs perfectly).

### **Benefits to Your Agency**

**1. Scale without hiring**  
Take on more projects without HR headaches.

**2. Offer specialized services**  
Say yes to projects outside your core expertise.

**3. Improve margins**  
Your time goes to high-value activities (sales, strategy, client relationships), not all execution.

**4. Reduce stress**  
No more 80-hour weeks when you're slammed.

**5. Maintain quality**  
Consistent delivery even when your team is maxed out.

**6. Grow faster**  
No capacity constraints limiting growth.

**7. Focus on strengths**  
Do what you're best at. Partner for the rest.

### **Benefits to Your Clients** (They Don't Know About)

**1. Faster delivery**  
Their project doesn't wait for your team to free up.

**2. Specialized expertise**  
They get specialists even if you're a small agency.

**3. Consistent quality**  
Your standards maintained even during busy periods.

**4. Single point of contact**  
They still deal only with you (simplicity they value).

**5. Competitive pricing**  
You can bid more competitively with lower overhead.

### **The Partnership Promise**

When you partner with us:

**You get:**
- Quality work delivered on time
- Invisible execution under your brand
- Responsive communication
- Fair, transparent pricing
- Confidentiality guaranteed
- Consistent standards
- Backup capacity when you need it

**You keep:**
- Client relationships
- Project credit
- Brand reputation
- Control over delivery
- Margin on projects

**We get:**
- Fair compensation
- Interesting projects
- Long-term partnerships
- Ability to focus on what we do best (building)

Everyone wins.

### **Getting Started**

**If you're an agency that needs development support:**

1. Reach out with your typical project types
2. We'll discuss if we're a good fit
3. Start with one test project
4. Build relationship from there

No massive commitments. No complicated contracts.

Just good work, delivered invisibly, so you look like a rockstar to your clients.

Because in racing, nobody remembers the pit crew.

But every winning driver needs one.

Someone asks: "Best plumber near me for emergency repairs"

**Old SEO result:**  
List of plumber websites. User clicks through, compares, calls one.

**New AEO result:**  
Google shows map with top 3 plumbers, reviews, phone numbers. User calls directly from`;

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function AgencyPitCrewWhiteLabelStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Capacity Planning</p>
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
            <p className="text-slate-600">Build smarter systems so you can scale without burnout.</p>
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
