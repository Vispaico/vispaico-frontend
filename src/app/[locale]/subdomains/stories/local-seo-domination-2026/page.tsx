import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'local-seo-domination-2026';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function LocalSeoDomination2026Story({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`I'm not exaggerating. I've watched single-location businesses outrank franchises with 100+ locations. Why? Because local SEO rewards relevance and consistency over budget size.

Here's the complete playbook.

### **Why Local SEO is Different (And Why That's Good for You)**

Traditional SEO is a bloodbath. You're competing against everyone. Globally. With unlimited budgets.

Local SEO? You're competing against businesses within 25 miles. Most of whom don't even know what SEO is.

The playing field isn't just level—it's tilted in your favor if you know what you're doing.

### **The Google Maps Gold Mine**

46% of all Google searches have local intent. "Pizza near me." "Plumber in [city]." "Best coffee shop."

When someone searches locally, Google shows:
- The Map Pack (top 3 results)
- Local organic results
- Paid ads (if you're into burning money)

The Map Pack—those three businesses at the top with the map—gets 44% of clicks.

Being in the top 3 isn't just nice. It's game-changing.

### **The Three Pillars of Local SEO**

Google ranks local results based on three factors:

**1. Relevance** - How well you match the search  
**2. Proximity** - How close you are to the searcher  
**3. Prominence** - How well-known/established you are

You can't control proximity. You can dominate relevance and prominence.

### **Your Google Business Profile: The Foundation**

Before anything else, claim and optimize your Google Business Profile (formerly Google My Business).

This isn't optional. It's the whole game.

**Complete Every Section:**

- **Business name** - Exact match to your real name (no keyword stuffing)
- **Address** - Your actual location (no PO boxes)
- **Phone number** - Local number, not a 1-800
- **Website** - Your actual website
- **Hours** - Keep them updated (including holidays)
- **Category** - Choose THE MOST specific primary category
- **Description** - 750 characters max, natural language, include services
- **Services** - List everything you offer
- **Products** - If applicable
- **Photos** - Minimum 10, add 3-5 new ones monthly
- **Posts** - Weekly updates/offers
- **Q&A** - Seed questions, answer them all

Profiles with complete information rank higher. Google literally tells you this.

### **The Category Trick**

Your primary category matters more than everything else combined.

Don't choose "General Contractor" if you're a roofing company. Choose "Roofing Contractor."

Don't choose "Restaurant" if you're a pizza place. Choose "Pizza Restaurant."

The more specific, the better you rank for specific searches.

One client changed from "Home Improvement" to "Kitchen Remodeling" and jumped from position #8 to #2 overnight. Same business. Same reviews. Just better category.

### **Reviews: Your Ranking Rocket Fuel**

Reviews are the #2 ranking factor (after your Google Business Profile itself).

More reviews = higher rankings = more visibility = more reviews.

It's a virtuous cycle. Or a vicious one if your competitors have more reviews than you.

**The Review Strategy:**

**Get More Reviews:**
- Ask every happy customer (most people say yes)
- Send follow-up emails with direct review links
- Train staff to request reviews at checkout
- Make it stupidly easy (QR codes, short links)

**Target: 3-5 new reviews per month minimum**

**Respond to Every Review:**
- Thank positive reviews (shows you care)
- Address negative reviews professionally (shows you fix problems)
- Include keywords naturally in responses (helps SEO)

**The Review Quality Factor:**
- Longer reviews rank better than short ones
- Reviews mentioning specific services rank better
- Reviews with photos rank better
- Recent reviews matter more than old ones

One trick: when asking for reviews, prompt with something specific: "If you have a moment, we'd love to hear what you thought about [specific service]!"

This encourages detailed reviews instead of just "Great service 5 stars."

### **Citations: Your Digital Breadcrumbs**

Citations are mentions of your business name, address, and phone number (NAP) across the web.

Yelp. Facebook. Yellow Pages. Industry directories. Local business listings.

Google uses these to verify you're real and trustworthy.

**The Citation Checklist:**

**Core Platforms (Do These First):**
- Facebook
- Yelp
- Apple Maps
- Bing Places
- BBB
- Yellow Pages
- Foursquare

**Industry-Specific:**
- If you're a restaurant: TripAdvisor, OpenTable, Zomato
- If you're a contractor: HomeAdvisor, Angie's List, Houzz
- If you're a retailer: Local chamber of commerce

**The Most Important Rule:**  
NAP must match EXACTLY everywhere.

"123 Main Street" on one listing and "123 Main St" on another? Google sees that as two different businesses.

Consistency is everything.

### **Your Website: The Local SEO Power Move**

Your website supports your Google Business Profile. It's where Google verifies that you're actually who you say you are.

**Essential Local SEO Elements:**

**1. Title Tags with Location**
- Before: "Best Pizza Restaurant"
- After: "Best Pizza in [City] | [Business Name]"

**2. H1 Headers with Service + Location**
- "Emergency Plumbing Services in [City]"
- "Affordable Roof Repairs Serving [City] & [County]"

**3. Location Pages**
If you serve multiple cities, create separate pages for each:
- yoursite.com/services/city-name
- Unique content for each (not duplicates)
- City-specific testimonials
- City-specific service areas

**4. Embedded Google Map**
Include your Google Maps embed on your contact page. It signals location to Google.

**5. Local Schema Markup**
Technical code that tells Google:
- Your business name
- Address
- Phone number
- Hours
- Services
- Reviews

It's like giving Google a cheat sheet to understand your business.

### **Content That Ranks Locally**

Blog posts about local topics rank easier than national topics.

**Examples:**

Instead of:
- "How to Choose a Contractor"

Write:
- "5 Questions to Ask Before Hiring a Contractor in [City]"

Instead of:
- "Kitchen Renovation Trends 2026"

Write:
- "Top Kitchen Renovation Styles for [City] Homes"

The local angle makes it easier to rank AND more relevant to your actual customers.

### **The Backlink Advantage**

Links from other local websites tell Google you're established in the community.

**Easy Local Backlinks:**

- Local news coverage (pitch story ideas)
- Chamber of Commerce membership
- Local business associations
- Sponsoring local events (gets you mentioned on event sites)
- Guest posting on local blogs
- Community involvement (charity, schools, etc.)

One client sponsored a little league team. Cost: $500. Result: Link from the league website, local news article, and ranking jump that brought in $15K+ in new business.

ROI: 30x.

### **Google Maps SEO Specifics**

**Ranking in the Map Pack requires:**

**1. Distance from searcher**  
Can't control this. Closer businesses have an advantage.

**2. Keyword in business name**  
Technically against Google's rules, but "Joe's Pizza" ranks better for "pizza" than "Joe's Italian Cuisine."

If it's your real name, you're fine. Don't keyword stuff artificially.

**3. Category relevance**  
As mentioned—be specific.

**4. Review quantity + recency**  
More reviews + newer reviews = better rankings.

**5. Review keywords**  
Reviews mentioning "emergency plumber" help you rank for "emergency plumber."

**6. Photos**  
Businesses with more photos rank higher. Add 3-5 new photos monthly.

**7. Posts**  
Weekly Google Business Profile posts signal active business.

**8. Website authority**  
Links to your website from other sites improves GBP ranking.

**9. On-page optimization**  
Website content matching your services helps.

### **The Mobile Factor**

76% of people who search for something nearby visit a business within 24 hours.

28% of those searches result in a purchase.

Your mobile experience matters. A lot.

**Mobile Checklist:**
- Site loads under 3 seconds
- Click-to-call phone number is prominent
- Address links directly to Google Maps
- Contact form works perfectly on mobile
- No annoying popups
- Easy navigation

If your site is slow or broken on mobile, you're hemorrhaging money.

### **Tracking What Matters**

You can't improve what you don't measure.

**Key Metrics:**

**In Google Business Profile Insights:**
- Search queries bringing you up
- Views (search vs. discovery)
- Actions (calls, direction requests, website clicks)
- Photo views

**In Google Search Console:**
- Local keyword rankings
- Click-through rates
- Impressions vs. clicks

**In Google Analytics:**
- Organic local traffic
- Conversion rate from local traffic
- Most popular pages for local visitors

### **The Small Business Advantage**

Here's why you CAN beat the big guys:

**1. You're Actually Local**  
Chains have one GBP for a regional office. You have one for your actual location where customers come. Google rewards actual local presence.

**2. You Can Get Personal Reviews**  
Customers review you by name. "Thanks, Mike, for fixing our plumbing emergency!" Chains get generic reviews.

**3. You Can Create Local Content**  
Writing about your specific city/neighborhood is easier when you actually work there.

**4. You Can Build Real Relationships**  
Local backlinks from local partnerships. Chains can't authentically do this.

**5. You Can Respond Faster**  
Reviews, questions, updates—you can handle them immediately. Chains have approval processes.

### **Common Mistakes Killing Your Rankings**

**1. Inconsistent NAP**  
Different phone numbers or addresses across the web confuse Google.

**2. Wrong Category**  
Being generic instead of specific.

**3. Ignoring Reviews**  
Not asking for them or not responding to them.

**4. Neglecting Photos**  
Old photos or no photos.

**5. Dead Website**  
No updates, slow loading, broken mobile experience.

**6. No Content Strategy**  
Website hasn't been updated since 2019.

**7. Fake Reviews**  
Google catches these. The penalty is brutal. Don't do it.

### **Your 90-Day Local SEO Domination Plan**

**Month 1: Foundation**
- Claim and fully optimize Google Business Profile
- Fix all citation inconsistencies
- Add schema markup to website
- Start asking for reviews (goal: 10 in month 1)

**Month 2: Content & Authority**
- Create 4 location-specific blog posts
- Get 3 local backlinks
- Continue collecting reviews (goal: 15 in month 2)
- Add new GBP photos weekly

**Month 3: Optimization & Growth**
- Audit and improve website mobile experience
- Create location pages if serving multiple cities
- Guest post on local blogs
- Keep review momentum (goal: 20 in month 3)

**After 90 Days:**  
You should see noticeable ranking improvements. Top 5 minimum. Top 3 likely.

### **The Budget Reality**

National SEO campaigns: $2,000-$10,000/month

Local SEO campaigns: $500-$2,000/month

Or DIY it: $0/month (just your time)

Even if you hire help, local SEO delivers ROI faster than almost any other marketing channel.

One new customer per month typically covers the entire cost.

### **The Bottom Line**

Local SEO isn't mysterious. It's methodical.

Complete your profile. Get reviews. Build citations. Create local content. Earn local links.

Do these consistently, and you WILL outrank bigger competitors.

Because local SEO rewards effort and relevance over budget size.

David can beat Goliath. You just need a really good slingshot.

Consider this article your slingshot.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Local Growth</p>
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
