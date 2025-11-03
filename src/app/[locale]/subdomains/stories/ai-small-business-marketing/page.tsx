import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'ai-small-business-marketing';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function AiSmallBusinessMarketingStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![](https://images.unsplash.com/photo-1614706465379-623e26271e54?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974)

AI is revolutionizing certain parts of marketing. Other parts? Still need a human who actually gives a damn.

Here's the real breakdown of what works, what doesn't, and where your money should go.

### **What AI Actually Does Well**

**1. Content Generation (With Supervision)**

AI can write:
- Email drafts
- Social media posts
- Blog outlines
- Product descriptions
- Ad copy variations

Key word: "drafts."

AI-generated content straight from the machine is obvious. Robotic. Generic. It sounds like everyone else using the same AI.

But as a starting point? Gold.

Instead of staring at a blank page for 30 minutes, you have a draft in 30 seconds. Then you edit it with your actual voice, add personality, inject truth, and make it human.

**Time saved: 60-70%**  
**Quality maintained: 85-90%** (with good editing)

**2. Data Analysis**

AI can analyze thousands of data points instantly:
- Which email subject lines perform best
- What time your audience engages most
- Which products sell together
- Customer behavior patterns
- Website traffic trends

This used to require expensive analysts or hours with spreadsheets.

Now AI does it in seconds. And spots patterns humans miss.

**3. Personalization at Scale**

Remember when personalized marketing meant using someone's first name in an email?

AI now personalizes:
- Product recommendations
- Email content
- Website experiences
- Ad targeting
- Offer timing

Amazon's "customers who bought this also bought" feature? AI.  
Netflix's recommendations? AI.  
Your small business can do similar things now. For cheap.

**4. Customer Service (Basic Queries)**

AI chatbots handle:
- Common questions
- Order status
- Hours and location
- Basic troubleshooting
- Appointment scheduling

24/7. No breaks. No bad moods.

For simple stuff, they work great. For complex issues? They make people want to throw their phone.

**5. Social Media Management**

AI tools can:
- Schedule posts across platforms
- Suggest optimal posting times
- Generate hashtag recommendations
- Resize images for different platforms
- Draft captions based on images

Does this make your social media strategy? No.  
Does it save hours of manual work? Absolutely.

**6. SEO Research**

AI analyzes:
- Keyword opportunities
- Competitor strategies
- Content gaps
- Search intent
- Ranking factors

SEO research that used to take days now takes minutes.

**7. Ad Campaign Optimization**

AI adjusts:
- Bid amounts
- Target audiences
- Ad placements
- Budget allocation
- Creative variations

Google and Facebook already use AI for this. Your job is feeding it good creative and strategy.

### **What AI Does Poorly (Or Terribly)**

**1. Understanding Your Actual Customers**

AI doesn't know that your customer Sarah just lost her job and is budget-conscious now.

AI doesn't know that your local market values relationships over transactions.

AI doesn't understand the unspoken cultural context of your community.

It analyzes data. It doesn't understand people.

**2. Creating Original Strategy**

AI can execute strategy. It can't create it.

"Should we focus on retention or acquisition?" AI can't answer this meaningfully. It depends on your business stage, cash flow, competitive position, and goals.

Strategic decisions require human judgment.

**3. Brand Voice and Authenticity**

AI can mimic voice. It can't create authentic voice.

Every AI-written piece sounds similar because it's trained on the internet's average writing.

Your brand voice—the thing that makes you YOU—requires human personality.

The vispaico.com tone you're reading right now? AI could approximate it. But it wouldn't nail it. Because this voice comes from actual humans with actual opinions and actual experiences.

**4. Relationship Building**

AI can send personalized emails. It can't build genuine relationships.

When a long-time customer reaches out with a problem, they want a human who cares, not a chatbot following a script.

Relationships are built on:
- Empathy (AI fakes it)
- Shared experiences (AI has none)
- Genuine care (AI can't feel)
- Trust over time (AI has no memory beyond context)

**5. Creative Problem Solving**

AI is great at finding patterns in existing data. Terrible at solving novel problems.

"Our product launch flopped—what do we do?" requires creative thinking, risk assessment, and innovative solutions.

AI gives you statistically probable answers. Sometimes you need improbable answers that actually work.

**6. Ethical and Cultural Judgment**

AI doesn't understand:
- When a joke is offensive
- Cultural sensitivities
- Ethical gray areas
- When to break the rules
- How something will actually land with real people

It can generate content. It can't judge if that content should exist.

### **The Smart Automation Stack for Small Businesses**

Here's what actually works in 2025:

**Email Marketing:**
- **Tool:** Claude/ChatGPT for drafts + human editing
- **What to automate:** Welcome sequences, abandoned cart emails, basic newsletters
- **Keep human:** Strategy, voice, personal responses, relationship building

**Social Media:**
- **Tool:** Buffer/Later for scheduling + AI for caption ideas
- **What to automate:** Posting times, cross-platform publishing, hashtag suggestions
- **Keep human:** Content strategy, community engagement, response to comments, brand voice

**Content Creation:**
- **Tool:** AI for outlines and first drafts
- **What to automate:** Research, headline variations, meta descriptions, formatting
- **Keep human:** Final writing, editing, personal stories, brand voice, controversial takes

**Customer Service:**
- **Tool:** Chatbots for FAQs
- **What to automate:** Common questions, order tracking, business hours, appointment booking
- **Keep human:** Complex issues, complaints, upset customers, anything requiring empathy

**Advertising:**
- **Tool:** Platform AI (Google Ads, Meta Ads)
- **What to automate:** Bid optimization, audience expansion, placement testing
- **Keep human:** Creative strategy, audience targeting decisions, budget allocation, performance analysis

**Analytics:**
- **Tool:** AI-powered analytics platforms
- **What to automate:** Data collection, pattern recognition, report generation
- **Keep human:** Strategy decisions based on data, understanding "why" behind numbers

### **Real Examples: AI + Humans = Magic**

**Example 1: Email Campaigns**

**Old way:**  
Human writes every email from scratch. Takes 2 hours per email. Campaign of 10 emails = 20 hours.

**AI way:**  
AI writes all 10 emails. Takes 30 minutes. Emails are generic and robotic.

**AI + Human way:**  
AI writes drafts (30 minutes). Human edits for voice, adds personal touches, injects personality (5 hours total). 15 hours saved. Quality maintained.

**Example 2: Content Calendar**

**Old way:**  
Brainstorm content ideas in meeting. Debate for 2 hours. Maybe come up with 10 ideas.

**AI way:**  
Ask AI for 50 content ideas. Get them instantly. Most are generic.

**AI + Human way:**  
AI generates 50 ideas (5 minutes). Human filters for what's actually relevant and interesting (30 minutes). Human adds unique angle to each (1 hour). Total: 1.5 hours vs 2 hours, but with 50 ideas instead of 10.

**Example 3: Customer Support**

**Old way:**  
Human answers every question. Including "What are your hours?" for the 1000th time.

**AI way:**  
Chatbot handles everything. Customers get frustrated when it can't solve real problems.

**AI + Human way:**  
Chatbot handles FAQs (80% of questions). Routes complex issues to humans. Humans focus on problems that actually need human attention. Customer satisfaction up. Staff less burned out.

### **The Mistakes Small Businesses Make with AI**

**Mistake #1: Trying to Automate Everything**

Some business owners get AI access and think "I can fire everyone!"

No. You can't.

AI handles tasks. Humans handle judgment, relationships, and strategy.

**Mistake #2: Using AI-Generated Content Unedited**

Google can detect AI content now. More importantly, your customers can tell when something sounds robotic.

Always edit. Always add human touches. Always inject your actual voice.

**Mistake #3: Expecting AI to Replace Strategy**

AI is a tool. Like a hammer.

A hammer doesn't decide what to build. You do.

AI doesn't decide your marketing strategy. It executes parts of it.

**Mistake #4: Ignoring AI Completely**

"I don't trust AI!" while your competitors use it to move faster and cheaper.

You don't have to love it. But refusing to use it at all is like refusing to use email because you prefer fax machines.

**Mistake #5: Choosing Tools Based on Hype**

Every AI tool claims to be revolutionary. Most are mediocre.

Test before committing. Many tools offer free trials. Use them.

### **Which AI Tools Actually Work (Our Tested Recommendations)**

**For Writing:**
- **ChatGPT/Claude** - Content drafts, brainstorming, editing suggestions
- **Grammarly** - Grammar, tone adjustment, clarity improvements
- **Hemingway** - Simplifying complex writing

**For Design:**
- **Canva AI** - Quick graphics, template suggestions
- **Remove.bg** - Background removal
- **Adobe Firefly** - Image generation (for concepts, not final work)

**For Marketing:**
- **HubSpot AI** - Email optimization, content suggestions
- **Jasper** - Marketing copy (with heavy editing)
- **Copy.ai** - Ad variations, social posts (starting points)

**For Analytics:**
- **Google Analytics 4** - AI-powered insights
- **Tableau** - Data visualization with AI assistance

**For Customer Service:**
- **Intercom** - Chatbot + human handoff
- **Zendesk AI** - Support ticket routing and suggestions

**For Social Media:**
- **Buffer** - Scheduling with AI suggestions
- **Later** - Visual planning with AI captions

**Not Worth It (Yet):**
- Most "AI website builders" (generic results)
- "AI social media managers" (no strategy, just posting)
- "AI that replaces your marketing team" (doesn't exist despite claims)

### **The Human Skills That Matter More Now**

Because AI handles tactical execution, these human skills became MORE valuable:

**1. Strategic Thinking**  
AI executes. Humans decide what to execute and why.

**2. Emotional Intelligence**  
Understanding what customers actually feel, not just what data shows.

**3. Creativity**  
Original ideas, not recombinations of existing patterns.

**4. Relationship Building**  
Genuine connections that create loyalty.

**5. Ethical Judgment**  
Knowing when AI's suggestion is technically correct but morally questionable.

**6. Cultural Understanding**  
Knowing what actually resonates with your specific audience.

**7. Storytelling**  
AI can't tell YOUR story. Only you can.

### **Our Approach: AI as Assistant, Not Replacement**

We use AI for:
- Initial code structure
- Content research and outlines
- SEO analysis
- Image optimization
- Repetitive tasks

We don't use AI for:
- Final code (we review and optimize everything)
- Client communication
- Strategic decisions
- Design creativity
- Brand voice
- Anything customer-facing without human review

AI makes us faster. Humans make us better.

### **The 2026 Reality**

AI will get better. Dramatically better.

But marketing fundamentals won't change:
- Understanding your customer
- Solving real problems
- Building genuine relationships
- Creating value
- Communicating authentically

AI will help with execution. Humans will still drive strategy.

The winners? Businesses that use AI for what it's good at while keeping humans for what we're good at.

The losers? Businesses that either refuse AI entirely or try to replace humans completely.

### **Your Action Plan**

**Start This Week:**
1. Pick ONE repetitive marketing task
2. Find an AI tool to assist with it
3. Test it for 2 weeks
4. Measure time saved vs quality maintained
5. Keep if it works, ditch if it doesn't

**Don't:**
- Automate everything at once
- Use AI content unedited
- Expect AI to replace strategy
- Ignore the technology completely
- Trust AI blindly

**Do:**
- Use AI to save time on tasks you hate
- Always add human touch to AI output
- Keep humans for relationships and strategy
- Test tools before committing
- Stay skeptical but open-minded

### **The Bottom Line**

AI isn't replacing marketers. It's replacing marketing tasks.

The question isn't "Will AI take marketing jobs?"

The question is "Will marketers who use AI replace marketers who don't?"

And the answer is yes.

Use AI as your assistant. Stay human where it matters. Win while others debate.

That's the revolution. Not AI versus humans. AI plus humans versus slow competitors still doing everything manually.

Choose your side wisely.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Automation Balance</p>
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
