import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['freelance-web-design-truths'];

if (!story) {
  throw new Error('Story data missing for freelance-web-design-truths');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

const articleMarkdown = String.raw`Let's start with something important: freelance web designers aren't bad people.

Many are incredibly talented, hardworking professionals who deliver amazing work.

But the freelance web design industry is also filled with landmines. And if you don't know what to look for, you'll probably step on one.

Here's what clients wish they knew before hiring.

![](https://images.unsplash.com/photo-1533537841959-705741f3d3a5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1752)

### **The Freelancer Reality Nobody Talks About**

**Reality #1: Most Freelancers Are Learning on Your Dime**

That designer charging $500 for your website? They learned web design six months ago from YouTube tutorials.

Nothing wrong with being new. But you're essentially paying to be their practice project.

The experienced freelancer charging $5,000? They're booked three months out and probably too busy for your "quick changes."

You're either getting someone inexperienced or someone too successful to give you attention.

**Reality #2: Freelancers Disappear**

Not all of them. But enough that it's a pattern.

Project starts strong. Communication is great. Then... silence.

They got a better-paying client. Their day job got busy. They lost motivation. They're dealing with personal issues.

All valid reasons. Still leaves you with a half-finished website and money gone.

**Reality #3: "Finished" Doesn't Mean "Done"**

Your website launches. Three months later, you need a simple update. Your freelancer:
- Charges $100/hour for a 5-minute change
- Is now unreachable
- Says they're "too busy"
- Disappeared entirely

Now you're stuck with a website you can't update and code nobody else wants to touch because it's a mess.

### **The Red Flags (That You Probably Ignored)**

**Red Flag #1: Unrealistically Low Prices**

"Professional website for $200!"

No. Just no.

A professional website takes 20-40 hours minimum. At $200, they're making $5-10/hour.

Nobody good works for $5/hour. You're getting:
- Stolen templates
- Copy-paste code
- Zero customization
- Someone who will disappear the moment they find better-paying work

**Red Flag #2: No Portfolio or Generic Portfolio**

"I'm just starting out, but I'm really passionate!"

Great. They can practice on their own projects first.

You're running a business, not a charity for aspiring designers.

**Red Flag #3: Poor Communication from the Start**

Takes days to respond to emails. Doesn't ask detailed questions about your business. Vague answers about timelines.

This doesn't improve after you pay. It gets worse.

**Red Flag #4: No Contract or Vague Contract**

"Don't worry, we'll figure it out as we go!"

No contract = no protection. For either of you.

A good freelancer provides:
- Detailed scope of work
- Timeline with milestones
- Payment structure
- Revision policy
- Ownership/rights details
- What happens if things go wrong

**Red Flag #5: Pays More Attention to Their Portfolio Than Your Needs**

You need a functional business website. They want to create an "award-winning experience."

Their priority: building something impressive for their portfolio.  
Your priority: something that works and converts.

These aren't always aligned.

**Red Flag #6: Won't Show You Work in Progress**

"I'll show you when it's done!"

Translation: "I haven't started yet" or "It's a mess and I'm embarrassed."

Good designers show progress. They want feedback. They iterate.

### **What Can Actually Go Wrong (Real Stories)**

**Story 1: The Disappearing Designer**

Client paid $2,000 deposit. Freelancer delivered basic homepage mockup. Client requested changes. Freelancer ghosted. Completely. Email bounced. Phone disconnected. Social media deleted.

$2,000 gone. No website. No recourse.

**Story 2: The Eternal Timeline**

"Two weeks" turned into six months. Always "almost done." Always "one more bug to fix." Eventually delivered something that barely worked.

Client gave up and hired someone else. Lost the deposit plus six months of having no website.

**Story 3: The Hostage Situation**

Website launched. Looked great. Three months later, client needed a simple text update. Freelancer quoted $500.

For changing three words.

Client said no. Freelancer said, "I'm the only one with access to the hosting. Pay or your site stays outdated."

Legal? Questionable. Real? Absolutely.

**Story 4: The Template Special**

Client paid $1,500 for a "custom" website. Later discovered it was a $49 theme with their logo swapped in. Nothing custom about it.

Could have bought the theme themselves and saved $1,450.

**Story 5: The SEO Disaster**

Beautiful website. Launched. Ranked nowhere. Turns out the freelancer knew nothing about SEO. Site wasn't even submitted to Google. No meta tags. No schema. No optimization.

Client had to hire an SEO specialist to fix everything. Cost more than the original website.

### **Questions You Should Ask (But Probably Won't)**

**Before Hiring:**

**1. "How many websites have you built in the past year?"**  
If it's fewer than 5, they're not doing this full-time. You're a side project.

**2. "What's your typical response time to emails?"**  
If they can't answer this clearly, communication will be a problem.

**3. "What happens if you can't finish the project?"**  
If they're offended by the question, that's your answer.

**4. "Who owns the website files when we're done?"**  
Should be you. Immediately. No questions.

**5. "What's included in post-launch support?"**  
If the answer is "nothing" or vague, plan to be on your own.

**6. "Can you show me websites you've built that are still maintained and working well?"**  
Anyone can show fresh launches. Can they show sites from 2 years ago that still work?

**7. "What's your process if I'm unhappy with the design?"**  
Should have a clear revision policy. If not, you're gambling.

### **The Agency vs. Freelancer Reality**

**Freelancers Win When:**
- Budget is very tight
- Timeline is flexible
- You want a personal relationship
- Project is small and simple
- You're willing to accept risk

**Agencies Win When:**
- You need reliability
- Timeline matters
- Multiple skill sets required (design + development + SEO)
- Post-launch support is important
- You want someone who can't just disappear

**Small Specialized Shops (Like Us) Win When:**
- You want agency reliability at freelancer prices
- Speed matters
- You want modern tech without fluff
- You're done with meetings and want results

### **The Pricing Reality**

**What Different Price Points Actually Get You:**

**$200-$500: Template + Logo Swap**
- Pre-made template
- Your logo and text
- Maybe color changes
- No customization
- No support

**$500-$1,500: Entry-Level Custom**
- Junior freelancer
- Some customization
- Basic functionality
- Questionable support
- Might disappear

**$1,500-$3,000: Decent Freelancer**
- Experienced designer
- Custom design
- Functional website
- Some post-launch support
- Hope they stay available

**$3,000-$8,000: Senior Freelancer/Small Agency**
- Professional result
- Custom everything
- Good functionality
- Ongoing support available
- More accountability

**$8,000+: Established Agency**
- Full team
- Strategy included
- Enterprise features
- Comprehensive support
- Premium pricing

Know what you're paying for. Cheaper isn't always better. Expensive isn't always worth it.

### **How to Protect Yourself**

**1. Never Pay 100% Upfront**  
Common structure: 50% to start, 50% on launch. Or split into milestones.

If they demand full payment upfront, run.

**2. Use Escrow for Larger Projects**  
Services like Escrow.com hold money until work is delivered. Both parties protected.

**3. Get Everything in Writing**  
Scope. Timeline. Revisions. Costs. Support. Everything.

Verbal agreements are worthless when things go wrong.

**4. Demand Ownership Immediately**  
Code files, design files, domain access, hosting access—everything should be transferred to you upon final payment.

Not "when I have time." Immediately.

**5. Check References**  
Actually call past clients. Ask:
- Did they deliver on time?
- How was communication?
- Any surprises?
- Would you hire them again?

**6. Verify Their Work**  
Reverse image search their portfolio. Make sure the work is actually theirs.

Yes, people steal portfolio pieces. It happens.

**7. Have an Exit Plan**  
What if they disappear? Who can take over? Is the code documented?

Hope for the best, plan for the worst.

### **The Questions Clients Wish They'd Asked**

**"What if I need changes after launch?"**  
Should have a clear policy. Hourly rate or retainer or included period.

**"Who handles hosting?"**  
If it's them, you're dependent on them. If it's you, you control your destiny.

**"What's the revision process during design?"**  
Two rounds? Three? Unlimited until you're happy? Get clarity.

**"What technology are you using?"**  
WordPress? Custom? React? You should know what you're getting.

**"How will we communicate?"**  
Email? Slack? Weekly calls? Set expectations early.

**"What's your backup plan if you get sick or unavailable?"**  
Solo freelancers often have none. This is risky.

### **Alternatives to Rolling the Dice**

**Option 1: Website Builders (Wix, Squarespace)**  
Pros: Cheap, fast, you control everything  
Cons: Limited, not very professional, monthly fees forever

**Option 2: Small Specialized Shops**  
Pros: Fast, professional, modern tech, accountability  
Cons: Less personal than freelancers, cost more than DIY

**Option 3: Traditional Agencies**  
Pros: Full service, very professional, lots of support  
Cons: Slow, expensive, lots of meetings

**Option 4: Finding a GOOD Freelancer**  
Pros: Personal attention, potentially great value  
Cons: Requires thorough vetting, some risk remains

### **If You Still Want to Hire a Freelancer**

**Do This:**

1. Check their portfolio thoroughly
2. Read reviews on multiple platforms
3. Talk to past clients
4. Start with a small test project
5. Use a detailed contract
6. Never pay 100% upfront
7. Set clear communication expectations
8. Get all files and access immediately upon completion

**Don't Do This:**

1. Hire the cheapest option
2. Skip the contract
3. Pay everything upfront
4. Ignore red flags because you like them
5. Accept vague timelines
6. Let them control all access to your site
7. Assume good intentions equal good results

### **The Honest Truth**

Great freelancers exist. They're professional, reliable, talented, and worth every penny.

But they're also:
- Expensive (because they're worth it)
- Busy (because they're good)
- Selective (because they can be)

The cheap, available, eager freelancer? Usually cheap, available, and eager for a reason.

You get what you pay for. Sometimes less.

### **What Successful Clients Do**

They treat hiring a web designer like hiring any professional:
- Research thoroughly
- Check references
- Get everything in writing
- Protect themselves contractually
- Maintain realistic expectations
- Build in contingencies

They don't:
- Choose based on price alone
- Skip due diligence
- Expect miracles
- Ignore warning signs
- Put all their faith in one person with no backup plan

### **The Bottom Line**

Hiring a freelance web designer isn't inherently risky. Hiring one WITHOUT doing your homework is extremely risky.

Know what you're getting into. Ask hard questions. Protect yourself.

And if the price seems too good to be true, it definitely is.

Your website is your business's digital storefront. It's worth investing in properly.

Whether that's a freelancer, an agency, or a specialized shop like us—just make sure whoever you choose can actually deliver on their promises.

Because a half-finished website helps nobody.

Except maybe your competitors.`;

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function FreelanceWebDesignTruthsStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Client Reality</p>
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
