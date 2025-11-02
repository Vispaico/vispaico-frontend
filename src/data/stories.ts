export type StorySummary = {
  routeSegment: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readLength: string;
  metadataTitle: string;
  metadataDescription: string;
  featured?: boolean;
};

export const storySummaries: StorySummary[] = [
  {
    routeSegment: 'how-to-audit-your-website-for-wcag2_2-compliance',
    title: 'How to Audit & Test Your Website for WCAG 2.2 AA Compliance',
    excerpt:
      "If you think testing a website for accessibility just means running an automated tool, we've got news for you: that's maybe 30% of the work. A proper audit is thorough, methodical, and involves multiple layers of testing.",
    publishDate: '2025-11-01',
    readLength: '13 minute read',
    metadataTitle: 'How to Audit Websites for WCAG 2.2 AA: Complete Testing & Compliance Guide | Vispaico',
    metadataDescription:
      'Step-by-step guide to auditing websites for WCAG 2.2 AA, EN 301 549, and EU compliance. Includes tools, testing methods, and certification standards.',
    featured: true,
  },
  {
    routeSegment: 'how-to-build-accessible-websites',
    title: 'How to build Accessible Websites',
    excerpt:
      "Let's be honest: most websites aren't built with accessibility in mind. They work fine for people without disabilities, but they're a nightmare for the 15% of the global population that experience some form of disability. That's over 1.3 billion people you might be excluding.",
    publishDate: '2025-10-22',
    readLength: '7 minute read',
    metadataTitle: 'Accessible Website Design & Compliance: WCAG 2.2 AA, EN 301 549 & EU Regulations | Vispaico',
    metadataDescription:
      'Learn how to create barrier-free websites compliant with WCAG 2.2 AA, EN 301 549, EAA, and BFSG. Expert guide to accessible web design and digital consulting for EU regulations.',
  },
  {
    routeSegment: 'mobile-design-tricks-conversions',
    title: 'Your Mobile Site is Losing Sales Every Hour (Fix These 5 Things Today)',
    excerpt:
      'Mobile traffic is higher than ever, but mobile conversions lag behind desktop. These five design changes can double your mobile conversion rate—and most take less than a day to implement.',
    publishDate: '2025-10-13',
    readLength: '3 minute read',
    metadataTitle: 'Mobile Design Conversion Tips 2025: 5 Tricks That Boost Sales | Vispaico',
    metadataDescription:
      'Over 60% of traffic is mobile, but most sites aren\'t optimized for mobile conversions. These 5 design tricks increase mobile sales without rebuilding your entire site.',
  },
  {
    routeSegment: 'wordpress-to-react-migration-guide',
    title: 'Your WordPress Site is Begging for a Migration (Here\'s the Escape Plan)',
    excerpt:
      "Migrating from WordPress to React sounds intimidating, but it's more straightforward than you think. Here's your complete roadmap—from planning to launch—without the technical jargon.",
    publishDate: '2025-10-17',
    readLength: '12 minute read',
    metadataTitle: 'WordPress to React Migration Guide 2025: Complete Step-by-Step Process | Vispaico',
    metadataDescription:
      'Comprehensive guide to migrating from WordPress to React. Learn the process, SEO impacts, API strategies, and how to make the switch without losing rankings or traffic.',
  },
  {
    routeSegment: 'local-seo-domination-2026',
    title: 'David Can Beat Goliath on Google Maps (Here\'s Exactly How)',
    excerpt:
      'Big brands have big budgets. But local SEO is the great equalizer—where smart strategy beats deep pockets. Here\'s your complete playbook for ranking #1 in your market.',
    publishDate: '2025-10-12',
    readLength: '6 minute read',
    metadataTitle: 'Local SEO 2026: Small Business Guide to Outranking Competitors | Vispaico',
    metadataDescription:
      'Small businesses CAN dominate local Google search. Learn the exact local SEO strategies, Google Maps optimization tactics, and ranking factors that beat bigger competitors.',
  },
  {
    routeSegment: 'freelance-web-design-truths',
    title: 'I Hired a Freelance Web Designer and All I Got Was This Unfinished Website',
    excerpt:
      "Freelance web designers can be amazing—or a nightmare. Before you hire one, here's the honest truth about risks, red flags, and what successful clients wish they'd known from day one.",
    publishDate: '2025-10-15',
    readLength: '7 minute read',
    metadataTitle: 'Freelance Web Designer Truth: What Clients Need to Know Before Hiring | Vispaico',
    metadataDescription:
      "Thinking about hiring a freelance web designer? Here's the unfiltered truth about what can go wrong, red flags to watch for, and smarter alternatives that protect your investment.",
  },
  {
    routeSegment: 'react-vs-wordpress',
    title: 'Your WordPress Site is Slowing You Down (And Your Competitors Know It)',
    excerpt:
      "WordPress isn't bad. It's just old. Built for blogs in 2003, it's being forced to do jobs it was never designed for. React was built for 2025—here's why the migration matters.",
    publishDate: '2025-10-11',
    readLength: '6 minute read',
    metadataTitle: 'React vs WordPress 2025: Why Smart Businesses Are Migrating | Vispaico',
    metadataDescription:
      "WordPress powers 40% of the web—but it's also slow, insecure, and outdated. Here's why modern businesses are switching to React and what you need to know about migration.",
  },
  {
    routeSegment: 'ai-small-business-marketing',
    title: "AI Can Write Your Emails, But It Can't Care About Your Customers",
    excerpt:
      "AI can handle repetitive marketing tasks, analyze data instantly, and generate content at scale. But the best small business marketing still needs human strategy, creativity, and empathy. Here's where to draw the line.",
    publishDate: '2025-10-05',
    readLength: '6 minute read',
    metadataTitle: 'AI Marketing Tools for Small Business 2025: What Works & What Doesn\'t | Vispaico',
    metadataDescription:
      "AI is transforming small business marketing, but it's not replacing humans. Learn which AI tools actually help, what tasks to automate, and where human expertise still matters most.",
  },
  {
    routeSegment: 'emergency-website-launches',
    title: '“We Need a Website by Monday” (Three True Stories from the Panic Zone)',
    excerpt:
      'Sometimes businesses don\'t have six weeks for a website. They have six hours. Here are three real stories of emergency launches—what went wrong, what went right, and how fast website delivery actually saves businesses.',
    publishDate: '2025-10-16',
    readLength: '9 minute read',
    metadataTitle: 'Emergency Website Launches: Real 24-48 Hour Success Stories | Vispaico',
    metadataDescription:
      'When businesses need websites YESTERDAY, what actually happens? Real stories of emergency launches, last-minute saves, and the process that makes impossible deadlines possible.',
  },
  {
    routeSegment: '24-hour-website-delivery',
    title: 'We Built Your Competitor\'s Website in 24 Hours While You Were Still in Meetings',
    excerpt:
      "While traditional agencies waste weeks on discovery calls and mood boards, modern web shops are launching complete websites in a single day. Here's exactly how they do it—and why your business should care.",
    publishDate: '2025-10-09',
    readLength: '5 minute read',
    metadataTitle: '24-Hour Website Delivery: How Modern Agencies Skip the BS | Vispaico',
    metadataDescription:
      'Discover how agencies deliver professional websites in 24 hours. No meetings, no project management fees, just results. Learn the behind-the-scenes process that makes ultra-fast launches possible.',
  },
  {
    routeSegment: 'quiet-luxury-old-money',
    title: 'Why Everyone Suddenly Wants to Look Rich (Without Looking Rich)',
    excerpt:
      "Loud logos are out. Quiet confidence is in. The old money aesthetic and quiet luxury movement reflect a cultural shift toward understated elegance, nostalgia, and timeless style that doesn't scream for attention.",
    publishDate: '2025-09-24',
    readLength: '6 minute read',
    metadataTitle: 'Quiet Luxury & Old Money Aesthetic 2025: The Understated Wealth Trend | Vispaico',
    metadataDescription:
      "From stealth wealth to old money aesthetics, understated luxury is everywhere. Here's why nostalgia and quiet confidence replaced flashy logos in 2025.",
  },
  {
    routeSegment: 'future-is-spatial',
    title: 'The Future is Spatial (And You Can Start Learning It Today)',
    excerpt:
      "Spatial computing is the next big shift in how we interact with digital content. From VR meetings to AR shopping, the future is immersive. Here's your practical guide to getting ready for 2026 and beyond.",
    publishDate: '2025-09-17',
    readLength: '9 minute read',
    metadataTitle: 'Spatial Computing 2026: How to Start Learning VR, AR & the Future | Vispaico',
    metadataDescription:
      "Virtual and augmented reality aren't just for gamers anymore. Learn how spatial computing will change everything by 2026—and how you can start learning today.",
  },
  {
    routeSegment: 'hidden-costs-modern-technology',
    title: "The Real Price of Your Cloud Storage (Spoiler: It's Not Just $2.99/Month)",
    excerpt:
      "Cloud computing seems clean and convenient, but data centers are energy monsters. Add e-waste mountains and cryptocurrency's massive carbon footprint, and our tech habits have serious hidden costs we need to talk about.",
    publishDate: '2025-09-10',
    readLength: '8 minute read',
    metadataTitle: 'Hidden Costs of Technology: E-Waste, Cloud Computing & Privacy | Vispaico',
    metadataDescription:
      "Your cloud storage, crypto investments, and old laptops have environmental costs you're not seeing. Here's the uncomfortable truth about modern tech's impact.",
  },
  {
    routeSegment: 'digital-detox-selective-engagement',
    title: "Your Phone is Exhausting You (And It's Time to Break Up—Just a Little)",
    excerpt:
      "The anti-social media movement isn't about ditching your phone forever—it's about taking back control. Discover why everyone from CEOs to college students is logging off, plus AI tools that help you set boundaries without the FOMO.",
    publishDate: '2025-10-19',
    readLength: '7 minute read',
    metadataTitle: 'Digital Detox Guide 2025: Set Boundaries with Social Media | Vispaico',
    metadataDescription:
      'Feeling drained by your phone? Learn practical digital detox strategies, AI tools that actually help, and how to reclaim your attention without going full hermit mode.',
  },
  {
    routeSegment: 'learning-for-2026-and-beyond',
    title: "Forget Traditional Education. Here's How to Actually Learn Skills for 2026 (And Not Waste 4 Years)",
    excerpt:
      'Skip slow-moving curricula. Learn the skills that matter, build real projects fast, and use AI as your always-on tutor so you can stay ahead of the next wave of work.',
    publishDate: '2025-10-02',
    readLength: '3 minute read',
    metadataTitle: 'How to Start Learning for 2026 and Beyond | Skills That Matter | Vispaico',
    metadataDescription:
      'Traditional education is broken. Learn which skills matter in 2026, where to learn them fast, and how to build a career without wasting years or money.',
  },
  {
    routeSegment: 'music-production-and-ai',
    title: "AI Can't Replace Musicians. But It Just Made You 10x Faster (Here's How)",
    excerpt:
      'Let AI clear the technical bottlenecks—mixing, mastering, sample hunting—so you can spend more time on the creative decisions that give your music a pulse.',
    publishDate: '2025-10-24',
    readLength: '3 minute read',
    metadataTitle: 'Music Production and AI: Tools That Actually Work in 2025 | Vispaico',
    metadataDescription:
      'AI is transforming music production. Learn which tools help with mixing, mastering, composition, and creativity—without replacing your artistry.',
  },
  {
    routeSegment: 'youtube-channels-and-ai',
    title: 'How AI Turned Lazy YouTubers Into Millionaires (And What That Means For You)',
    excerpt:
      'AI handles scripting, editing, thumbnails, and analytics so creators can publish more consistently and stay focused on the story their audience cares about.',
    publishDate: '2025-09-15',
    readLength: '3 minute read',
    metadataTitle: 'YouTube Channels and AI: How to Create Content Faster in 2025 | Vispaico',
    metadataDescription:
      'AI is transforming YouTube content creation. Learn which tools actually work for scripting, editing, thumbnails, and growing your channel in 2025.',
  },
  {
    routeSegment: 'dont-buy-wordpress-themes',
    title: 'Why Buying WordPress Themes is Throwing Money Away (And How AI Builds Better Ones Free)',
    excerpt:
      "Premium themes are bloated, overpriced, and slow. Learn how AI-built themes give you cleaner code, faster sites, and zero recurring fees.",
    publishDate: '2025-10-03',
    readLength: '3 minute read',
    metadataTitle: 'Stop Buying WordPress Themes - Build Your Own With AI | Vispaico',
    metadataDescription:
      'Premium WordPress themes cost hundreds and slow down your site. Learn how to build custom themes and plugins with AI in 2025—faster, lighter, and free.',
  },
  {
    routeSegment: 'ai-tools-that-actually-help-clients',
    title: 'Stop Wasting Money on AI Tools. Here Are the 5 That Actually Work for Your Clients',
    excerpt:
      'We tested the AI platforms that claim to save time and money. These five tools actually deliver measurable results for service businesses.',
    publishDate: '2025-09-19',
    readLength: '2 minute read',
    metadataTitle: 'AI Tools That Actually Help Clients in 2025 | Real Results | Vispaico',
    metadataDescription:
      'Cut through the AI hype. Discover the 5 AI tools that actually save time and money for small businesses, tested and verified for real client results.',
  },
  {
    routeSegment: 'ai-adopters-hire-more',
    title: 'The Startup Scene is Actually Pretty Lit Right Now (And We Have the Data to Prove It)',
    excerpt:
      "Look, we get it. The economy's been giving everyone anxiety lately, and if you're building a business, it probably feels like you're trying to surf in a hurricane sometimes. But here's the thing – Mercury just dropped some seriously interesting data that might make you feel a whole lot better about where things are heading.",
    publishDate: '2025-10-28',
    readLength: '3 minute read',
    metadataTitle: 'Heavy AI adopters are hiring MORE because of AI tools',
    metadataDescription:
      "Wasn't AI supposed to replace everyone? Nope. These companies are using AI to get more done, then hiring more people to handle the extra business.",
  },
  {
    routeSegment: 'seo-and-aeo',
    title: 'SEO is Dead. Long Live AEO. (And Why Your Website Needs Both Right Now)',
    excerpt:
      "Remember when SEO was king? Yeah, those days are gone. Don't panic though. SEO isn't dead—it's just got a twin brother named AEO, and they're both fighting for your attention.",
    publishDate: '2025-09-23',
    readLength: '3 minute read',
    metadataTitle: 'SEO and AEO for Websites: Why You Need Both in 2026 | Vispaico',
    metadataDescription:
      'Stop optimizing for just Google. Learn why AEO (Answer Engine Optimization) is the new SEO and how to dominate both ChatGPT and search engines in 2026.',
  },
];

export const storyLookup = storySummaries.reduce<Record<string, StorySummary>>((accumulator, story) => {
  accumulator[story.routeSegment] = story;
  return accumulator;
}, {});

export const storiesBasePath = '/subdomains/stories';

export function getRelatedStories(routeSegment: string, limit = 4): StorySummary[] {
  const candidates = storySummaries.filter((entry) => entry.routeSegment !== routeSegment);

  if (candidates.length <= limit) {
    return candidates;
  }

  return candidates
    .map((value) => ({ value, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .slice(0, limit)
    .map(({ value }) => value);
}
