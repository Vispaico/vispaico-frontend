import { Locale, defaultLocale } from '@/i18n/config';
import { storySummariesDe } from './stories_de';
import { storySummariesEs } from './stories_es';
import { storySummariesVi } from './stories_vi';

export type StoryCategory = 'speed' | 'tech' | 'growth' | 'case-study' | 'life' | 'other' | 'niels';

export type StoryImage = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

export type StorySummary = {
  routeSegment: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readLength: string;
  metadataTitle: string;
  metadataDescription: string;
  featured?: boolean;
  featuredImage?: StoryImage;
  category: StoryCategory;
};

export type LocalizedStorySummary = StorySummary;

const baseStorySummaries: Array<Omit<StorySummary, 'category'>> = [
  {
    routeSegment: 'the-day-we-stopped-building-everything-and-started-building-right',
    title: 'The Day We Stopped Building Everything (And Started Building Right)',
    excerpt:
      'Five services in 18 months almost killed our focus. This is the honest breakdown of how we cut the noise, doubled down on one offer, and saw clarity beat optionality.',
    publishDate: '2025-12-04',
    readLength: '8 minute read',
    metadataTitle: 'Why We Killed Our Best Ideas (And Why You Should Too) | Vispaico',
    metadataDescription:
      'How saying no to more services helped us say yes to what matters. A story about feature creep, muddled messaging, and the courage to niche down.',
  },
  {
    routeSegment: 'llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it',
    title: 'Why Your AI Assistant Suddenly Forgets What You Just Said (And How to Fix It)',
    excerpt:
      'That frustrating moment when your AI acts like it has amnesia? That\'s the context window doing its thing. Understanding this concept will change how you work with AI forever.',
    publishDate: '2025-11-29',
    readLength: '10 minute read',
    metadataTitle: 'LLM Fundamentals: Why AI Assistants Forget Conversations & How to Fix It | Vispaico',
    metadataDescription:
      'Learn about context windows, tokens, and why AI assistants forget what you said. Essential knowledge for anyone implementing AI tools in their business.',
  },
  {
    routeSegment: 'saas-landing-page-that-converted-12-percent-of-traffic-the-full-story',
    title: "SaaS Landing Page That Converted 12% of Traffic: The Full Story",
    excerpt:
      "Most SaaS landing pages are a cluttered mess of jargon, buzzwords, and vague promises. But what if your landing page could be a lean, mean, conversion machine? What if it could consistently turn 12% of your hard-earned traffic into paying customers?",
    publishDate: '2025-11-19',
    readLength: '8 minute read',
    metadataTitle: "SaaS Landing Page Case Study: How We Achieved a 12% Conversion Rate | Vispaico",
    metadataDescription:
      "Discover the full story behind a SaaS landing page that converted 12% of traffic. A case study on conversion-focused design and data-driven results.",
  },
  {
    routeSegment: 'e-commerce-launch-from-0-to-1200-daily-orders-in-30-days',
    title: "E-Commerce Launch: From 0 to $1,200 Daily Orders in 30 Days",
    excerpt:
      "Starting an online store can feel like shouting into the void. You've got a great product, you've got a beautiful website, but you're not making any sales. What gives?",
    publishDate: '2025-11-18',
    readLength: '7 minute read',
    metadataTitle: "E-Commerce Case Study: 0 to $1,200 Daily Orders in 30 Days | Vispaico",
    metadataDescription:
      "Learn how we helped an e-commerce client go from 0 to $1,200 in daily orders in just 30 days. A case study on the power of a fast, conversion-focused website.",
  },
  {
    routeSegment: 'education-consultant-platform-building-a-28-page-student-portal-in-72-hours',
    title: "Education Consultant Platform: Building a 28-Page Student Portal in 72 Hours",
    excerpt:
      "When an education consultancy came to us with a bold vision, we knew we were in for a challenge. They wanted a comprehensive, 28-page website, complete with a student portal and an admin dashboard. And they needed it in 72 hours.",
    publishDate: '2025-11-17',
    readLength: '6 minute read',
    metadataTitle: "Case Study: 28-Page Student Portal in 72 Hours | Vispaico",
    metadataDescription:
      "Discover how we built a 28-page education consultant platform, complete with a student portal and admin dashboard, in just 72 hours.",
  },
  {
    routeSegment: 'how-to-choose-a-web-developer-10-questions-you-should-ask',
    title: "How to Choose a Web Developer: 10 Questions You Should Ask",
    excerpt:
      "Choosing a web developer can feel like a high-stakes game of poker. You're betting your business on someone you've probably never met, and you're hoping they're not bluffing.",
    publishDate: '2025-11-16',
    readLength: '8 minute read',
    metadataTitle: "How to Choose a Web Developer: 10 Essential Questions to Ask | Vispaico",
    metadataDescription:
      "Don't get burned by a bad web developer. This guide will walk you through the 10 essential questions you should ask before hiring a web developer or agency.",
  },
  {
    routeSegment: 'conversion-optimization-turning-website-visitors-into-customers',
    title: "Conversion Optimization: Turning Website Visitors Into Customers",
    excerpt:
      "Getting traffic to your website is great. But traffic doesn't pay the bills. Customers do. And the process of turning a casual website visitor into a paying customer is where the real magic happens. It's a science and an art known as conversion optimization.",
    publishDate: '2025-11-15',
    readLength: '9 minute read',
    metadataTitle: "Conversion Optimization: A Guide to Turning Visitors Into Customers | Vispaico",
    metadataDescription:
      "Learn the art and science of conversion optimization. This guide will walk you through the process of turning your website visitors into loyal customers.",
  },
  {
    routeSegment: 'website-maintenance-why-ignoring-updates-costs-you-customers',
    title: "Website Maintenance: Why Ignoring Updates Costs You Customers",
    excerpt:
      "Website maintenance is not a luxury; it's an essential part of owning a website. And if you're ignoring your website updates, you're not just risking a technical headache; you're risking your business.",
    publishDate: '2025-11-14',
    readLength: '8 minute read',
    metadataTitle: "Website Maintenance: Why It's a Costly Mistake to Ignore It | Vispaico",
    metadataDescription:
      "Ignoring website maintenance and updates can cost you customers, security, and brand reputation. Learn why website maintenance is crucial for your business.",
  },
  {
    routeSegment: 'seo-content-strategy-that-actually-converts',
    title: "SEO Content Strategy That Actually Converts: A 3-Month Plan",
    excerpt:
      "A real SEO content strategy is not about throwing spaghetti at the wall and hoping something sticks. It's a deliberate, data-driven plan for creating content that attracts your ideal customers, builds trust, and, most importantly, *converts*.",
    publishDate: '2025-11-13',
    readLength: '12 minute read',
    metadataTitle: "SEO Content Strategy That Converts: A 3-Month Plan | Vispaico",
    metadataDescription:
      "Learn how to create an SEO content strategy that actually converts. This 3-month plan will guide you through keyword research, content creation, and analysis.",
  },
  {
    routeSegment: 'from-website-launch-to-800-month-retainer-the-path-to-recurring-revenue',
    title: "From Website Launch to $800/Month Retainer: The Path to Recurring Revenue",
    excerpt:
      "A website is not a 'set it and forget it' kind of thing. A retainer is a monthly agreement with a web development partner to provide ongoing services to help you grow your business.",
    publishDate: '2025-11-12',
    readLength: '9 minute read',
    metadataTitle: "The Path to Recurring Revenue: From Website Launch to Retainer | Vispaico",
    metadataDescription:
      "Learn how to turn your website into a recurring revenue machine. Discover the path from a one-time website launch to a profitable monthly retainer.",
  },
  {
    routeSegment: 'wcag-2-2-aa-compliance-why-accessibility-isnt-optional',
    title: "WCAG 2.2 AA Compliance: Why Accessibility Isn't Optional",
    excerpt:
      "In 2025, with the enforcement of the EU Accessibility Act, website accessibility is no longer optional. It's the law. And WCAG 2.2 AA is the standard you need to meet.",
    publishDate: '2025-11-11',
    readLength: '8 minute read',
    metadataTitle: "WCAG 2.2 AA Compliance: A Guide to Website Accessibility | Vispaico",
    metadataDescription:
      "Understand the importance of WCAG 2.2 AA compliance and the EU Accessibility Act. Learn how to make your website accessible to everyone.",
  },
  {
    routeSegment: 'your-website-should-be-future-proof-why-api-first-architecture-matters',
    title: "Your Website Should Be Future-Proof: Why API-First Architecture Matters",
    excerpt:
      "An API-first architecture is a fancy term for a simple but powerful idea: your website should be built to be flexible, adaptable, and ready for whatever the future throws at it.",
    publishDate: '2025-11-10',
    readLength: '7 minute read',
    metadataTitle: "API-First Architecture: Future-Proof Your Website | Vispaico",
    metadataDescription:
      "Learn why an API-first architecture is the key to a scalable and future-proof website. Discover the benefits of API-first web development for your business.",
  },
  {
    routeSegment: 'vercel-hosting-why-your-website-should-be-serverless',
    title: "Vercel Hosting: Why Your Website Should Be Serverless",
    excerpt:
      "There's a better way to host your website that's faster, safer, and infinitely more scalable than traditional hosting. It's called serverless, and the best way to go serverless is with a platform called Vercel.",
    publishDate: '2025-11-09',
    readLength: '7 minute read',
    metadataTitle: "Vercel Hosting: The Benefits of Serverless for Your Website | Vispaico",
    metadataDescription:
      "Learn why your website should be serverless and how Vercel hosting can help. Discover the benefits of serverless websites, from speed and scalability to security and cost-effectiveness.",
  },
  {
    routeSegment: 'headless-cms-vs-traditional-websites',
    title: "Headless CMS vs. Traditional Websites: Which Is Right for You?",
    excerpt:
      "A headless CMS might just be the hero your business has been waiting for. But what is it? And how is it different from a 'traditional' CMS like WordPress? Let's break it down.",
    publishDate: '2025-11-08',
    readLength: '10 minute read',
    metadataTitle: "Headless CMS vs. Traditional Websites: A Guide for Startups | Vispaico",
    metadataDescription:
      "Is a headless CMS right for you? This guide compares headless CMS vs. traditional websites like WordPress, and helps you choose the best content management system for your startup.",
  },
  {
    routeSegment: 'why-we-use-next-js-for-fast-websites',
    title: "Why We Use Next.js for Fast Websites (And Why It Matters to You)",
    excerpt:
      "In short, Next.js is a React web development framework that allows us to build websites that are not only incredibly fast but also scalable, secure, and SEO-friendly.",
    publishDate: '2025-11-07',
    readLength: '8 minute read',
    metadataTitle: "Why We Use Next.js for Fast Websites | Vispaico",
    metadataDescription:
      "Discover why Next.js is our framework of choice for building high-performance websites. Learn how Next.js development leads to faster, more secure, and SEO-friendly sites.",
  },
  {
    routeSegment: 'website-launch-checklist-48-hours-to-go-live',
    title: "Website Launch Checklist: 48 Hours to Go Live",
    excerpt:
      "The final 48 hours before a website deployment are a minefield of potential disasters. One wrong move, one missed step, and your glorious launch could turn into a fiery explosion of 404 errors, broken images, and unhappy customers.",
    publishDate: '2025-11-06',
    readLength: '8 minute read',
    metadataTitle: "Website Launch Checklist: Your Guide to a Smooth Go-Live | Vispaico",
    metadataDescription:
      "Our comprehensive website launch checklist will guide you through the final 48 hours before your website deployment. Ensure a smooth, stress-free launch.",
  },
  {
    routeSegment: 'launch-fast-iterate-forever-how-to-build-your-website-incrementally',
    title: "Launch Fast, Iterate Forever: How to Build Your Website Incrementally",
    excerpt:
      "Perfectionism is the enemy of progress. Nowhere is this more true than in the world of web design. So many businesses fall into the trap of trying to build the 'perfect' website right out of the gate.",
    publishDate: '2025-11-05',
    readLength: '9 minute read',
    metadataTitle: "Agile Web Design: Launch Fast & Iterate Your Website | Vispaico",
    metadataDescription:
      "Learn how to build your website incrementally with agile web design. Discover the power of a minimum viable website and continuous website iteration.",
  },
  {
    routeSegment: '6-month-vs-3-day-websites-why-waiting-destroys-momentum',
    title: "6-Month vs. 3-Day Websites: Why Waiting Destroys Momentum",
    excerpt:
      'Waiting six months for a website kills momentum, burns budget, and hands customers to faster competitors. This breakdown shows the hidden cost of delays and the upside of launching in three days.',
    publishDate: '2025-11-04',
    readLength: '12 minute read',
    metadataTitle: 'Why Waiting 6 Months for a Website Costs You Money | Vispaico',
    metadataDescription:
      'Launch a website in 3 days instead of 6 months. Learn why speed matters, the hidden costs of waiting, and how fast launches beat slow projects.',
  },
  {
    routeSegment: 'the-72-hour-website-how-we-build-in-3-days',
    title: "The 72-Hour Website: How We Build in 3 Days",
    excerpt:
      'Our 72-hour process shows how design, development, content, and launch come together without the 12-week agency theater—real timelines, tooling, and proof that speed and quality can coexist.',
    publishDate: '2025-11-03',
    readLength: '12 minute read',
    metadataTitle: 'How to Build a Website in 72 Hours | Vispaico',
    metadataDescription:
      "See how Vispaico builds professional websites in 3 days. 72-hour timeline, complete process, real examples, and why it's faster than agencies.",
    featured: true,
    featuredImage: {
      src: 'https://res.cloudinary.com/kinhcode01/image/upload/v1763645123/Vispaico/Images/Vispaico_3_Day_Building_Site_bmhekp.webp',
      alt: 'Vispaico team collaborating on a 72-hour website sprint',
      width: 1600,
      height: 900,
    },
  },
  {
    routeSegment: 'why-your-websites-slow-speed-is-costing-you-customers',
    title: "Why Your Website's Slow Speed Is Costing You Customers",
    excerpt:
      'Every second of load time leaks conversions, rankings, and trust. See the math behind slow sites, why they happen, and how to rebuild for sub-second performance.',
    publishDate: '2025-11-02',
    readLength: '11 minute read',
    metadataTitle: 'Why Website Speed Matters: Slow Sites Cost Money | Vispaico',
    metadataDescription:
      'Slow websites lose customers. Learn how page speed impacts conversion rates, SEO rankings, and revenue. Get a fast website in 72 hours.',
  },
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
];

const categoryMap: Record<string, StoryCategory> = {
  'the-day-we-stopped-building-everything-and-started-building-right': 'niels',
  'why-your-websites-slow-speed-is-costing-you-customers': 'speed',
  'the-72-hour-website-how-we-build-in-3-days': 'speed',
  '6-month-vs-3-day-websites-why-waiting-destroys-momentum': 'speed',
  'launch-fast-iterate-forever-how-to-build-your-website-incrementally': 'speed',
  'website-launch-checklist-48-hours-to-go-live': 'speed',
  'why-we-use-next-js-for-fast-websites': 'tech',
  'headless-cms-vs-traditional-websites': 'tech',
  'vercel-hosting-why-your-website-should-be-serverless': 'tech',
  'your-website-should-be-future-proof-why-api-first-architecture-matters': 'tech',
  'wcag-2-2-aa-compliance-why-accessibility-isnt-optional': 'tech',
  'from-website-launch-to-800-month-retainer-the-path-to-recurring-revenue': 'growth',
  'seo-content-strategy-that-actually-converts': 'growth',
  'website-maintenance-why-ignoring-updates-costs-you-customers': 'growth',
  'conversion-optimization-turning-website-visitors-into-customers': 'growth',
  'how-to-choose-a-web-developer-10-questions-you-should-ask': 'growth',
  'education-consultant-platform-building-a-28-page-student-portal-in-72-hours': 'case-study',
  'e-commerce-launch-from-0-to-1200-daily-orders-in-30-days': 'case-study',
  'saas-landing-page-that-converted-12-percent-of-traffic-the-full-story': 'case-study',
  'quiet-luxury-old-money': 'life',
  'digital-detox-selective-engagement': 'life',
  'learning-for-2026-and-beyond': 'life',
  'music-production-and-ai': 'life',
  'ai-adopters-hire-more': 'life',
  'how-to-audit-your-website-for-wcag2_2-compliance': 'tech',
  'how-to-build-accessible-websites': 'tech',
  'mobile-design-tricks-conversions': 'growth',
  'wordpress-to-react-migration-guide': 'tech',
  'local-seo-domination-2026': 'growth',
  'react-vs-wordpress': 'tech',
  'llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it': 'niels',
  'ai-small-business-marketing': 'growth',
};

export const storySummaries: StorySummary[] = baseStorySummaries.map((entry) => ({
  ...entry,
  category: categoryMap[entry.routeSegment] ?? 'growth',
}));

const fallbackLocale: Locale = defaultLocale;

const localeStoryCollections: Partial<Record<Locale, StorySummary[]>> = {
  de: storySummariesDe,
  es: storySummariesEs,
  vi: storySummariesVi,
};

const getStoryCollection = (locale: Locale = fallbackLocale): StorySummary[] => {
  if (locale === fallbackLocale) {
    return storySummaries;
  }
  return localeStoryCollections[locale] ?? [];
};

export const storiesBasePath = '/library/stories';

export function getStorySummaries(locale: Locale = fallbackLocale): LocalizedStorySummary[] {
  return getStoryCollection(locale);
}

export function getStory(routeSegment: string, locale: Locale = fallbackLocale): LocalizedStorySummary {
  const stories = getStoryCollection(locale);
  const story = stories.find((entry) => entry.routeSegment === routeSegment);
  if (!story) {
    throw new Error(`Story data missing for ${routeSegment} in locale ${locale}`);
  }
  return story;
}

export function createStoryLookup(locale: Locale = fallbackLocale): Record<string, LocalizedStorySummary> {
  return getStoryCollection(locale).reduce<Record<string, LocalizedStorySummary>>((accumulator, story) => {
    accumulator[story.routeSegment] = story;
    return accumulator;
  }, {});
}

export const storyLookup = createStoryLookup();

export function getRelatedStories(routeSegment: string, limit = 4, locale: Locale = fallbackLocale): LocalizedStorySummary[] {
  const availableStories = getStoryCollection(locale).filter((entry) => entry.routeSegment !== routeSegment);

  if (availableStories.length <= limit) {
    return availableStories;
  }

  return availableStories
    .map((value) => ({ value, sortKey: Math.random() }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .slice(0, limit)
    .map(({ value }) => value);
}

export function getStoryContext(routeSegment: string, locale: Locale = fallbackLocale, limit = 4) {
  return {
    story: getStory(routeSegment, locale),
    relatedStories: getRelatedStories(routeSegment, limit, locale)
  };
}