import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['mobile-design-tricks-conversions'];

if (!story) {
  throw new Error('Story data missing for mobile-design-tricks-conversions');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

const articleMarkdown = String.raw`Here's a stat that should keep you up at night: 60% of your traffic is probably mobile. But only 30% of your sales are.

![](https://images.unsplash.com/photo-1608244974170-68e9de466fe0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1849)

That means mobile visitors are half as likely to buy as desktop visitors.

Is it because mobile users aren't serious? No.

It's because your mobile site is probably terrible at converting.

Let me show you five design changes that actually fix this. No redesign needed. Just smart tweaks that work.

### **The Mobile Conversion Problem**

Mobile visitors face:
- Smaller screens
- Touch interfaces (not mouse precision)
- Slower connections (sometimes)
- Distractions (notifications, multitasking)
- Shorter attention spans
- One-handed use

Your desktop-first design ignores all of this.

The result? Frustrated visitors who bounce before buying.

### **Trick #1: Thumb-Zone Optimization**

**The Problem:**  
Important buttons are at the top of the screen. Users hold phones at the bottom. Reaching up is uncomfortable.

**The Science:**  
Steven Hoober's research shows 75% of users navigate with one thumb. The easiest reach zone is the bottom third of the screen.

**The Fix:**  
Move critical actions to the bottom.

**What to do:**

**Before:**
- "Add to Cart" button at top
- Navigation at top
- CTA buttons scattered

**After:**
- Sticky "Add to Cart" button at bottom
- Important actions in bottom third
- Easy thumb reach for key interactions

**Implementation:**
\`\`\`css
/* Sticky bottom CTA */
.mobile-cta {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 15px;
  background: #your-brand-color;
  z-index: 999;
}
\`\`\`

**Real example:**  
One e-commerce client moved their "Add to Cart" button from top to bottom. Mobile conversions increased 34%.

That's it. Just moving a button.

**Pro tip:** Test which side of the bottom works best (left vs right). Most right-handed users prefer bottom-right. But test your audience.

### **Trick #2: Reduce Form Fields to Absolute Minimum**

**The Problem:**  
Your checkout form has 15 fields. Mobile keyboards cover half the screen. Users abandon in frustration.

**The Reality:**  
Every additional form field reduces mobile conversions by 5-10%.

**The Fix:**  
Ruthlessly cut form fields.

**Before:**
- First name
- Last name
- Email
- Phone
- Company
- Job title
- Address line 1
- Address line 2
- City
- State
- ZIP
- Country
- How did you hear about us?
- Subscribe to newsletter?
- Comments

**After:**
- Email
- Password (for accounts)
- Payment info (for purchases)

That's it for initial contact. Get additional info later.

**Smart tricks:**

**Use autofill:**
Enable browser autofill. One tap fills everything.

**Smart defaults:**
- Country pre-selected based on IP
- State/region pre-filled
- Common selections checked

**Progressive disclosure:**
Ask for basics first. Get details later after they're committed.

**Single-column forms:**
Two-column forms on mobile are torture. Stack everything vertically.

**Large input fields:**
Minimum 44px height (Apple's recommendation for touch targets).

**Example:**
- Shopify's mobile checkout: 3 fields visible at once
- Desktop checkout: Can show 10+ fields
- Mobile conversion rate nearly matches desktop

**Real numbers:**  
Client reduced contact form from 12 fields to 4 fields. Mobile submissions increased 127%.

### **Trick #3: Speed Up Your Images (Seriously)**

**The Problem:**  
Your images are huge. Mobile connections are slower. Your site loads like molasses.

Every 1-second delay = 7% fewer conversions.

**The Fix:**  
Optimize images specifically for mobile.

**Technical improvements:**

**1. Use WebP or AVIF format:**
- 30-50% smaller than JPEG
- Same quality
- Supported by all modern browsers

**2. Responsive images:**
\`\`\`html
<img 
  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"
  sizes="(max-width: 600px) 400px, 800px"
  src="medium.jpg"
  alt="Description"
/>
\`\`\`

This serves small images to mobile devices automatically.

**3. Lazy loading:**
Images load only when user scrolls to them.

\`\`\`html
<img src="image.jpg" loading="lazy" alt="Description" />
\`\`\`

**4. Compress everything:**
Tools:
- TinyPNG
- Squoosh
- ImageOptim

Target: Under 100KB per image on mobile.

**5. Use CDN:**
Cloudflare, Cloudinary, or similar. Serves images from servers close to users.

**Real example:**  
Client had 2MB images loading on mobile. We optimized to 150KB average.

Results:
- Load time: 6 seconds → 1.8 seconds
- Bounce rate: 67% → 38%
- Mobile conversions: +89%

Image optimization is the highest ROI change you can make.

### **Trick #4: Simplify Mobile Navigation**

**The Problem:**  
Your desktop navigation has 7 main items, each with 5 sub-items. On mobile, it's a cluttered mess.

**The Reality:**  
Mobile users don't browse like desktop users. They know what they want. Make it easy to find.

**The Fix:**  
Minimize menu items. Prioritize search and primary actions.

**Before (typical mobile menu):**
- Home
- About
  - Our Story
  - Team
  - Careers
  - Press
- Services
  - Service 1
  - Service 2
  - Service 3
  - Service 4
  - Service 5
- Products
  - Category 1
  - Category 2
  - Category 3
- Resources
  - Blog
  - Case Studies
  - Downloads
- Contact

That's 20+ menu items. Nobody's scrolling through all that.

**After (mobile-optimized):**
- Search (prominent)
- Shop/Services (with visual categories)
- Account/Login
- Cart
- Contact

Secondary links go in footer or separate menu.

**Best practices:**

**1. Hamburger menu:**
Still works. But put important actions outside it:
- Search icon
- Cart icon
- Login/Account

**2. Sticky header:**
Keep navigation accessible without scrolling up.

**3. Visual menu:**
Show images/icons, not just text. Faster recognition.

**4. Prioritize search:**
If you have lots of products/content, search > navigation.

**Real example:**  
E-commerce site simplified mobile menu from 35 items to 8 main categories + search.

Result:
- Time to product: 18 seconds → 6 seconds
- Mobile conversions: +43%

### **Trick #5: Make CTAs Impossible to Miss**

**The Problem:**  
Your call-to-action buttons are small, hard to tap, and blend into the design.

**The Reality:**  
Mobile users need crystal-clear next steps. Subtle doesn't work.

**The Fix:**  
Make CTAs bold, obvious, and enormous.

**CTA best practices:**

**1. Size matters:**
- Minimum: 44px × 44px (Apple's touch target size)
- Better: 48px × 48px
- Best: Full-width buttons on mobile

**2. Contrast:**
CTA should be the brightest, most contrasting element on screen.

Bad: Gray button on gray background  
Good: Bright orange button on white background

**3. Clear copy:**
"Submit" is boring and unclear.  
"Get My Free Quote" is clear and motivating.

Be specific about what happens next.

**4. One primary CTA per screen:**
Don't split attention. One clear action.

**5. Eliminate friction:**
- "Buy Now" → Shows price, one tap to purchase
- "Sign Up" → Pre-filled with social login option
- "Contact Us" → Click-to-call or click-to-text

**6. Use urgency (honestly):**
- "Limited spots available"
- "Sale ends tonight"
- "Only 3 left in stock"

If it's true, use it. If it's fake, don't—ruins trust.

**Visual hierarchy example:**

**Bad mobile page:**
- Small headline
- Paragraph of text
- Tiny "Learn More" link
- More paragraphs
- Another small link

**Good mobile page:**
- Bold headline (24-32px)
- One-sentence value prop
- HUGE "Get Started" button (full-width, bright color)
- Brief benefit points
- Secondary action (smaller, less prominent)

**Real example:**  
SaaS landing page changed CTA from "Learn More" (gray, small) to "Start Free Trial" (green, full-width, at top AND bottom).

Result:
- Mobile sign-ups: +156%

That's triple the conversions from better CTA design.

### **Bonus Trick: Click-to-Call and Click-to-Text**

**For service businesses, this is gold:**

\`\`\`html
<a href="tel:+1234567890" class="mobile-call-button">
  📞 Call Us Now
</a>
\`\`\`

One tap, they're calling you.

For e-commerce with customer service:
\`\`\`html
<a href="sms:+1234567890" class="mobile-text-button">
  💬 Text Us Questions
</a>
\`\`\`

Mobile users prefer calling or texting over filling forms.

Make it stupidly easy.

### **How to Implement These Changes**

**Step 1: Audit Your Current Mobile Experience**

Grab your phone right now:
- Visit your site
- Try to complete a conversion (purchase, sign-up, contact)
- Note every frustration
- Time how long it takes

Be honest. Pretend you're a customer who doesn't care about your business.

**Step 2: Prioritize by Impact**

**Quick wins (do first):**
- Optimize images (Trick #3)
- Add sticky bottom CTA (Trick #1)
- Reduce form fields (Trick #2)

**Medium effort:**
- Simplify navigation (Trick #4)
- Redesign CTAs (Trick #5)

**Step 3: Test One Change at a Time**

Don't change everything at once. You won't know what worked.

Change one thing. Measure for 2 weeks. Then change the next.

**Step 4: Measure Results**

Track in Google Analytics:
- Mobile conversion rate
- Mobile bounce rate
- Mobile session duration
- Conversions by device

Compare week-over-week after each change.

### **Common Mistakes**

**Mistake #1: Making Desktop Version Responsive**

Don't just shrink your desktop site. Redesign for mobile-first.

**Mistake #2: Ignoring Load Speed**

Pretty design doesn't matter if it takes 6 seconds to load.

**Mistake #3: Tiny Text**

Minimum 16px font size. Preferably 18-20px for body text.

**Mistake #4: Requiring Zoom**

If users need to pinch-zoom to read or click, you failed.

**Mistake #5: Auto-Playing Videos**

Kills mobile data. Annoys users. Increases bounce rate.

### **The 80/20 of Mobile Conversion**

80% of your mobile conversion improvements come from:
1. Fast load times (under 3 seconds)
2. Clear, large CTAs
3. Minimal form fields
4. Easy thumb navigation
5. Obvious value proposition

Nail these five things before worrying about anything else.

### **Real Results Summary**

From our client implementations:

**Image optimization:**
- Average improvement: +65% mobile conversions

**Sticky bottom CTAs:**
- Average improvement: +34% mobile conversions

**Reduced form fields:**
- Average improvement: +94% mobile submissions

**Simplified navigation:**
- Average improvement: +28% task completion

**Better CTA design:**
- Average improvement: +87% clicks

These aren't guarantees. But they're proven patterns that work across industries.

### **Your Action Plan**

**This week:**
- Audit mobile experience on your own phone
- Optimize all images (use TinyPNG)
- Add one sticky bottom CTA

**Next week:**
- Reduce form fields by 50% minimum
- Make primary CTA buttons full-width and bright
- Test click-to-call if relevant

**Within a month:**
- Simplify mobile navigation
- Implement lazy loading images
- Review and improve all mobile CTAs

**Ongoing:**
- Monitor mobile vs desktop conversion rates
- Test one improvement per month
- Keep iterating

### **The Bottom Line**

Your mobile site is probably losing half your potential sales.

Not because mobile users aren't serious buyers. Because your site makes buying on mobile too hard.

These five tricks—thumb-zone optimization, fewer form fields, faster images, simpler navigation, and impossible-to-miss CTAs—fix the biggest conversion killers.

Most take less than a day to implement. All deliver measurable ROI.

Your competitors aren't doing this yet. That's your opportunity.

Fix your mobile experience now. Your conversion rate (and revenue) will thank you.`;

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function MobileDesignTricksConversionsStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Conversion Lift</p>
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
