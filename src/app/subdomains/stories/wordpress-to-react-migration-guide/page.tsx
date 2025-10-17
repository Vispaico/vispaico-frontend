import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { getRelatedStories, storiesBasePath, storyLookup } from '@/data/stories';

const story = storyLookup['wordpress-to-react-migration-guide'];

if (!story) {
  throw new Error('Story data missing for wordpress-to-react-migration-guide');
}

const publishDateFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'long',
  day: 'numeric',
  year: 'numeric',
});

const relatedStories = getRelatedStories(story.routeSegment);

const articleMarkdown = String.raw`Your WordPress site has served you well. But it's slow, clunky, and held together by 30 plugins that conflict with each other.

You've heard React is better. Faster. More secure. More modern.

You're right. It is.

![](https://images.unsplash.com/photo-1596563910641-86f6aebaab9a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1740)

But migration sounds scary. Expensive. Risky.

Let me walk you through exactly how it works. No technical jargon. Just the real process.

### **Why Migrate? (The Honest Assessment)**

Before we dive into "how," let's confirm you should actually do this.

**Migrate if:**
- Your WordPress site is slow (3+ seconds load time)
- You're tired of plugin conflicts and updates
- You've been hacked or worry about security
- You want a modern, app-like user experience
- Your traffic is growing and WordPress struggles
- You're rebuilding anyway

**Don't migrate if:**
- Your WordPress site works fine and you're happy
- You update content daily and love the WP editor
- Budget is extremely tight ($0)
- You need very specific WordPress-only plugins
- Your site is complex (10,000+ pages, custom backend systems)

Still here? Let's do this.

### **The Migration Process: Overview**

**Phase 1: Planning & Audit** (Week 1)  
**Phase 2: Content Migration Strategy** (Week 1-2)  
**Phase 3: Design & Development** (Week 2-4)  
**Phase 4: Content Transfer** (Week 4-5)  
**Phase 5: Testing & SEO** (Week 5-6)  
**Phase 6: Launch & Redirects** (Week 6)  
**Phase 7: Monitoring** (Week 6-8)

Total timeline: 6-8 weeks for a typical business site.  
Complex sites: 8-12 weeks.  
Simple sites: 3-4 weeks.

### **Phase 1: Planning & Audit**

**Step 1: Document Everything**

Create a spreadsheet with every page on your current site:
- URL
- Page type (homepage, service, blog post, etc.)
- Content (text, images, videos)
- Features (forms, galleries, custom functionality)
- SEO data (title tags, meta descriptions, rankings)

Tools to help:
- Screaming Frog (crawls your entire site)
- Google Search Console (shows what's indexed)
- Google Analytics (shows traffic by page)

**Step 2: Audit Your Content**

Be honest: Do you need every page?

Most businesses migrate and realize:
- 30% of pages get zero traffic
- 20% of content is outdated
- Multiple pages say basically the same thing

This is your chance to streamline. Only migrate what matters.

**Step 3: List Functionality Requirements**

What does your site DO beyond displaying content?

- Contact forms
- Newsletter signups
- E-commerce
- Member portals
- Booking systems
- Live chat
- Search functionality
- Comments

Each of these needs a React solution. Document them all.

**Step 4: Check Plugin Dependencies**

List every WordPress plugin you use. Then research:
- Does a React equivalent exist?
- Can you replace it with an API service?
- Is it even necessary?

Example:
- **Yoast SEO** → Not needed (React has built-in SEO capabilities)
- **Contact Form 7** → Replace with React form + EmailJS or similar
- **WooCommerce** → Headless WooCommerce or Shopify integration
- **Elementor** → Not needed (React is the builder)

**Step 5: Choose Your React Framework**

**Next.js** (Recommended for most)  
- SEO-friendly out of the box
- Server-side rendering
- Static site generation
- Built by Vercel (excellent hosting)
- Best for business sites, blogs, e-commerce

**Gatsby** (Good for content-heavy sites)  
- Excellent for blogs
- GraphQL data layer
- Large plugin ecosystem
- Great performance

**Create React App** (Basic option)  
- Simpler but less SEO-friendly
- Requires more custom configuration
- Good for web apps, less ideal for content sites

For most WordPress migrations: **Next.js wins**.

### **Phase 2: Content Migration Strategy**

**Option 1: Manual Content Transfer**

Copy-paste your content into new React site.

**Pros:**
- Opportunity to improve content
- Clean slate
- No technical complexity

**Cons:**
- Time-consuming
- Error-prone
- Tedious for large sites

**Best for:** Sites with under 50 pages

**Option 2: Headless WordPress**

Keep WordPress as your backend CMS. Use React for the frontend.

**Pros:**
- Keep familiar WordPress editor
- Content editors don't need to learn new tools
- Gradual transition possible

**Cons:**
- Still maintaining WordPress
- More complex architecture
- Not truly "ditching" WordPress

**Best for:** Large content teams, frequent updates, gradual migration

**Option 3: WordPress REST API Export**

Export all WordPress content via API, import into React.

**Pros:**
- Automated process
- Preserves data structure
- Faster than manual

**Cons:**
- Requires developer skills
- May need data cleanup
- One-time transfer (ongoing changes need manual updates)

**Best for:** One-time migrations with developer help

**Option 4: Headless CMS**

Migrate content to a modern CMS like:
- Contentful
- Sanity
- Strapi
- Prismic

**Pros:**
- Modern editing experience
- API-first architecture
- Better content modeling
- No WordPress baggage

**Cons:**
- Learning curve for editors
- Potential monthly costs
- Requires content restructuring

**Best for:** Sites planning long-term growth, multiple content creators

**Our Recommendation:**  
For most businesses: Manual transfer for small sites, headless CMS for larger sites.

### **Phase 3: Design & Development**

**Step 1: Design Migration Decisions**

You have three options:

**Option A: Keep Your Current Design**  
Recreate your WordPress design exactly in React.

**Pros:** Familiar, no rebranding needed  
**Cons:** Might carry over design flaws

**Option B: Refresh While Migrating**  
Keep brand identity but modernize the design.

**Pros:** Opportunity to improve UX  
**Cons:** More work, more decisions

**Option C: Complete Redesign**  
Start from scratch with new design.

**Pros:** Truly modern experience  
**Cons:** Most expensive, longest timeline

**Step 2: Set Up Development Environment**

Your developer will:
1. Initialize Next.js project
2. Set up version control (Git)
3. Configure build tools
4. Set up staging environment

You don't need to understand this. Just know it's happening.

**Step 3: Build Core Components**

React works with reusable components:
- Header
- Footer
- Navigation
- Call-to-action sections
- Form components
- Card layouts

These get built once, used everywhere. More efficient than WordPress.

**Step 4: Implement Key Pages**

Build in this order:
1. Homepage (establishes design system)
2. Core service/product pages
3. About/Contact pages
4. Blog template (if applicable)
5. Other pages

**Step 5: Add Functionality**

Replace WordPress plugins with React solutions:

**Forms:**
- React Hook Form + EmailJS
- Formspree
- Netlify Forms
- Custom API endpoint

**SEO:**
- Next.js built-in SEO capabilities
- React Helmet for meta tags
- Structured data (JSON-LD)
- Sitemap generation

**Analytics:**
- Google Analytics 4
- Vercel Analytics
- Plausible (privacy-focused)

**Search:**
- Algolia
- Fuse.js
- Custom search implementation

**Blog:**
- MDX files (markdown)
- Headless CMS
- Static content generation

### **Phase 4: Content Transfer**

**Step 1: Export from WordPress**

Use WordPress's built-in export tool:
- Tools → Export → All content
- Downloads XML file with all posts/pages

Or use plugins:
- WP All Export (more control)
- Advanced Custom Fields export (if using ACF)

**Step 2: Clean and Format Content**

WordPress content is messy. You'll need to:
- Remove shortcodes
- Clean up formatting
- Optimize images
- Convert embed codes
- Fix broken links
- Update outdated info

This is tedious but necessary.

**Step 3: Image Optimization**

WordPress images are often bloated.

For React:
- Compress images (TinyPNG, Squoosh)
- Convert to modern formats (WebP, AVIF)
- Generate multiple sizes for responsive images
- Use Next.js Image component (auto-optimization)

**Step 4: Transfer Content to React**

Depending on your strategy:

**Manual transfer:**
- Copy content page by page
- Paste into React components or CMS
- Format properly

**Automated transfer:**
- Run script to parse WordPress XML
- Convert to format React expects
- Import into your chosen system

**Step 5: Recreate Custom Functionality**

Any custom features from WordPress need React equivalents:
- Custom post types → Content models
- Advanced Custom Fields → CMS fields
- Custom plugins → Custom React components
- Shortcodes → React components

### **Phase 5: Testing & SEO Preservation**

**Step 1: Test Every Page**

Check:
- Content displays correctly
- Images load and look good
- Forms work (test submissions)
- Links point to correct pages
- Mobile responsiveness
- Browser compatibility (Chrome, Safari, Firefox, Edge)
- Load speed (should be under 2 seconds)

**Step 2: SEO Audit**

Critical: Preserve your SEO or improve it.

**URL Structure:**
WordPress: \`/blog/my-post/\`  
React: Should match exactly to avoid redirect issues

If URLs must change, create 301 redirects.

**Meta Tags:**
Transfer every title tag and meta description exactly.

Compare:
- Old site titles → New site titles
- Old meta descriptions → New meta descriptions
- Old Open Graph tags → New Open Graph tags

**Structured Data:**
If your WordPress site has schema markup, recreate it in React.

Use JSON-LD format (cleaner than microdata).

**Sitemap:**
Generate new XML sitemap. Submit to Google Search Console.

**Robots.txt:**
Create new robots.txt file. Ensure important pages aren't blocked.

**Step 3: Speed Testing**

Run tests:
- Google PageSpeed Insights
- GTmetrix
- WebPageTest

Target scores:
- PageSpeed: 90+ (mobile), 95+ (desktop)
- Largest Contentful Paint: Under 2.5s
- First Input Delay: Under 100ms
- Cumulative Layout Shift: Under 0.1

React sites should crush these benchmarks.

**Step 4: Accessibility Testing**

Use tools:
- WAVE
- aXe DevTools
- Lighthouse accessibility audit

Ensure:
- Proper heading hierarchy
- Alt text on images
- Keyboard navigation works
- Color contrast passes WCAG standards
- Forms have proper labels

### **Phase 6: Launch & Redirects**

**Step 1: Set Up 301 Redirects**

If any URLs changed, create permanent redirects:

Old URL → New URL

Example redirect file (Next.js):
\`\`\`javascript
// next.config.js
async redirects() {
  return [
    {
      source: '/old-page',
      destination: '/new-page',
      permanent: true, // 301 redirect
    },
  ]
}
\`\`\`

**Critical:** Every old URL must redirect to somewhere. No 404s.

**Step 2: DNS and Hosting**

Your React site needs hosting:

**Best hosting options:**
- **Vercel** (made by Next.js creators, optimal performance)
- **Netlify** (excellent features, great free tier)
- **AWS Amplify** (scalable, more complex)
- **Cloudflare Pages** (fast, good free tier)

**Step 3: Pre-Launch Checklist**

Before switching DNS:
- [ ] All content transferred
- [ ] All pages tested
- [ ] Forms work and send emails
- [ ] Analytics installed
- [ ] SEO elements in place
- [ ] Redirects configured
- [ ] SSL certificate ready
- [ ] Backup of old site created
- [ ] Team trained on updates

**Step 4: The Switch**

**Option A: Instant Switch**  
Update DNS to point to new React site. Takes 24-48 hours to propagate.

**Pros:** Clean break  
**Cons:** No going back easily

**Option B: Subdomain Testing**  
Launch at new.yourdomain.com first, test with real users, then switch.

**Pros:** Lower risk  
**Cons:** Delays full launch

**Option C: Gradual Rollout**  
Use CloudFlare or similar to route percentage of traffic to new site.

**Pros:** Test with real traffic  
**Cons:** More complex setup

**Most common: Option A (instant switch) after thorough staging testing.**

**Step 5: Monitor Closely**

First 48 hours are critical:

Watch:
- Google Search Console (errors, indexing issues)
- Google Analytics (traffic drops)
- Server logs (404 errors)
- Contact forms (are they working?)
- Social media mentions (anyone complaining?)

Be ready to fix issues immediately.

### **Phase 7: Post-Launch Monitoring**

**Week 1:**
- Check Google Search Console daily
- Monitor traffic levels
- Fix any 404 errors immediately
- Address user-reported issues
- Test forms repeatedly

**Week 2-4:**
- Watch organic traffic trends
- Compare to pre-migration levels
- Request re-indexing for key pages
- Monitor rankings for key terms
- Collect user feedback

**Month 2-3:**
- Analyze performance improvements
- Compare load speeds to old site
- Review conversion rates
- Check SEO rankings recovery
- Measure bounce rate changes

**Typical timeline:**
- Week 1: Minor traffic dip (normal)
- Week 2-3: Traffic normalizes
- Week 4-6: Traffic often increases (faster site = better rankings)
- Month 3+: Full SEO benefits realized

### **Common Migration Problems (And Solutions)**

**Problem 1: Rankings Drop**

**Causes:**
- URLs changed without redirects
- Content not transferred properly
- Meta tags missing
- Sitemap not submitted

**Solution:**
- Implement 301 redirects immediately
- Request re-indexing in Search Console
- Verify all meta tags present
- Check and resubmit sitemap

**Problem 2: Images Not Loading**

**Causes:**
- Wrong file paths
- Images still pointing to WordPress URLs
- Optimization broke images

**Solution:**
- Update all image paths
- Host images on new server
- Check image optimization settings

**Problem 3: Forms Not Working**

**Causes:**
- Email service not configured
- API keys missing
- Endpoint incorrect

**Solution:**
- Test all forms thoroughly
- Check email service integration
- Verify API configurations

**Problem 4: Slow Performance**

**Causes:**
- Not using Next.js Image optimization
- Not implementing proper caching
- Unnecessary JavaScript loading

**Solution:**
- Implement Next.js Image component
- Configure proper caching headers
- Audit and reduce JavaScript bundle size

**Problem 5: 404 Errors Everywhere**

**Causes:**
- Redirects not configured
- URLs didn't match old structure
- Internal links broken

**Solution:**
- Map every old URL to new URL
- Implement comprehensive redirect file
- Fix internal links

### **SEO Impact: What to Really Expect**

**Immediate (Week 1-2):**
- 5-15% traffic dip (temporary)
- Google re-crawling and re-indexing
- Some ranking volatility

**Short-term (Week 3-6):**
- Traffic returns to baseline
- Rankings stabilize
- Speed improvements start helping

**Long-term (Month 3+):**
- 10-30% traffic increase (from speed improvements)
- Better rankings (faster sites rank higher)
- Lower bounce rate
- Higher conversion rate

**Real example from our migrations:**
- Week 1: 12% traffic drop
- Week 4: Back to baseline
- Month 3: 18% above pre-migration
- Month 6: 34% above pre-migration

The speed improvement alone is worth it.

### **Cost Breakdown: What to Budget**

**DIY Migration (If you're technical):**
- Time investment: 80-120 hours
- Hosting: $0-20/month
- Tools/services: $0-50/month
- **Total: Mostly your time**

**Freelancer:**
- Development: $2,000-5,000
- Content transfer: $500-1,500
- Testing/QA: $500-1,000
- **Total: $3,000-7,500**

**Small Agency (Like Us):**
- Full migration: $3,000-8,000
- Includes design refresh: $5,000-12,000
- Ongoing support: $200-500/month
- **Total: $3,000-12,000 depending on complexity**

**Traditional Agency:**
- Discovery phase: $5,000-10,000
- Design: $10,000-20,000
- Development: $15,000-30,000
- **Total: $30,000-60,000**

**Most small businesses spend: $3,000-8,000**

### **Ongoing Maintenance: React vs WordPress**

**WordPress Monthly Costs:**
- Hosting: $30-100
- Security monitoring: $30-50
- Plugin licenses: $20-100
- Maintenance: $50-200
- Emergency fixes: $100-500 (sporadic)
- **Total: $230-950/month**

**React Monthly Costs:**
- Hosting: $0-20 (often free)
- CMS (if used): $0-50
- Maintenance: $0-100
- Emergency fixes: Rare
- **Total: $0-170/month**

**Annual savings with React: $2,000-10,000+**

### **When to Hire Help vs DIY**

**DIY if:**
- You're a developer
- Site is small (under 20 pages)
- You have time (100+ hours)
- No complex functionality
- You enjoy technical challenges

**Hire help if:**
- Not technical
- Site has 20+ pages
- Complex features
- Can't afford downtime
- Want it done fast
- Value your time highly

Most business owners hire help. The time saved and risk mitigation are worth it.

### **The Decision Matrix**

**Definitely migrate if your site is:**
- Loading over 4 seconds
- Getting hacked regularly
- Crashing under traffic
- Costing $200+/month in maintenance
- Using 20+ plugins

**Consider migrating if your site is:**
- Loading 2-4 seconds
- Costing $100-200/month
- Using 10-20 plugins
- Difficult to update
- Needs redesign anyway

**Maybe stick with WordPress if:**
- Site loads under 2 seconds
- No security issues
- Low maintenance costs
- You love WordPress editor
- No complaints from users

### **Your Migration Checklist**

**Before starting:**
- [ ] Full WordPress backup
- [ ] Complete site audit
- [ ] Content inventory
- [ ] Functionality requirements documented
- [ ] Budget approved
- [ ] Timeline set
- [ ] Developer/agency hired (or DIY plan ready)

**During migration:**
- [ ] Regular backups
- [ ] Staging site for testing
- [ ] Content transfer tracking
- [ ] Regular progress updates
- [ ] Team training scheduled

**Before launch:**
- [ ] Every page tested
- [ ] All forms tested
- [ ] Speed tests passed
- [ ] SEO elements verified
- [ ] Redirects configured
- [ ] Analytics installed
- [ ] Backup plan ready

**After launch:**
- [ ] Monitor daily first week
- [ ] Fix issues immediately
- [ ] Track traffic trends
- [ ] Collect user feedback
- [ ] Measure improvements

### **The Bottom Line**

Migrating from WordPress to React isn't a weekend project. But it's also not as scary as it sounds.

For most business sites: 4-6 weeks, $3,000-8,000, and you have a faster, more secure, more modern website.

The speed improvement alone often pays for the migration within months through better conversions and rankings.

Is it worth it? If your WordPress site is costing you in speed, security, or maintenance headaches—absolutely.

Your competitors are already making the switch. The question is: how long can you afford to wait?`;

export const metadata: Metadata = {
  title: story.metadataTitle,
  description: story.metadataDescription,
};

export default function WordpressToReactMigrationGuideStory() {
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Migration Playbook</p>
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
            <p className="text-slate-600">See how other teams modernize their stacks without losing momentum.</p>
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
