export type CaseStudyCategory = 'saas' | 'ecommerce' | 'consultants' | 'agencies' | 'education';

export type LinkType = {
  href: string;
  label: string;
};

export type CaseStudyQuickStat = {
  label: string;
  value: string;
};

export type CaseStudy = {
  id: string;
  eyebrow: string;
  title: string;
  headline: string;
  image: string;
  alt: string;
  stats: CaseStudyQuickStat[];
  story: string;
  results: string[];
  techStack: string[];
  category: CaseStudyCategory;
  cta: LinkType;
  blogLink: LinkType;
  servicesLinks: LinkType[];
};

export const caseStudyFilters: { id: 'all' | CaseStudyCategory; label: string; description: string }[] = [
  { id: 'all', label: 'All Cases', description: 'Every project in one place.' },
  { id: 'saas', label: 'SaaS', description: 'Launch-ready funnels for software companies.' },
  { id: 'ecommerce', label: 'E-Commerce', description: 'Stores that start selling in days.' },
  { id: 'consultants', label: 'Consultants', description: 'Service businesses winning inbound.' },
  { id: 'agencies', label: 'Agencies', description: 'Studios and experts scaling pipeline.' },
  { id: 'education', label: 'Education', description: 'Learning platforms built for growth.' },
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'education-consultant-platform',
    eyebrow: 'Education Consultant Platform',
    title: 'Education Consultant Platform',
    headline: '43+ Pages. 2 Dashboards. Growing 300% in organic traffic.',
    image: 'https://res.cloudinary.com/kinhcode01/image/upload/v1763626083/Vispaico/Images/StartinDE_Cover_cx3mgr.webp',
    alt: 'Screens from the Education Consultant dashboards and website',
    stats: [
      { label: 'Pages', value: '43+' },
      { label: 'Dashboards', value: '2' },
      { label: 'Stack', value: 'Next.js + Storyblok' },
    ],
    story:
      "This education consultancy needed a site that could manage global student applications and ship long-form SEO content about study paths. Standard builders were too rigid. We shipped custom dashboards, a headless CMS, and automated workflows for admissions counselors—everything launched in 3 days.",
    results: [
      '$800/mo → Growth Content retainer for ongoing SEO plays',
      '$400/mo → Maintenance + uptime coverage for admissions season',
      'Lifetime value: $14,400 over the first 18 months (and still growing)',
      'Organic leads up 150 in the first month thanks to the content engine',
    ],
    techStack: ['Next.js', 'Vercel', 'Storyblok', 'Custom API', 'Make.com automations'],
    category: 'education',
    cta: { href: '/portfolio/startinde', label: 'See the Dashboard' },
    blogLink: { href: '/library/stories/education-consultant-platform-building-a-28-page-student-portal-in-72-hours', label: 'Read how we built this' },
    servicesLinks: [
      { href: '/services#growth-content', label: 'Growth Content' },
      { href: '/services#maintenance', label: 'Maintenance + Uptime' },
    ],
  },
  {
    id: 'urban-market-ecommerce',
    eyebrow: 'DTC E-Commerce Store',
    title: 'Urban Market E-Commerce',
    headline: '20+ products live. $1,200 orders per day within week one.',
    image: 'https://res.cloudinary.com/kinhcode01/image/upload/v1761023680/Vispaico/Images/cover_vispea_vhzsbl.webp',
    alt: 'Vispea Apparel storefront showing product grid and checkout flow',
    stats: [
      { label: 'Products', value: '20+' },
      { label: 'Flows', value: '4 automations' },
      { label: 'Stack', value: 'Shopify + Next.js' },
    ],
    story:
      'A retail founder needed a store live before a product drop. We rebuilt their cluttered Shopify theme with a headless storefront, automated Klaviyo flows, and bundled upsells. We delivered the entire experience—product data import, checkout flows, and shipping rules—in 4 days.',
    results: [
      'Average order value +38% after bundling and post-purchase offers',
      '15% repeat purchase rate triggered by the automation flows',
      '$1,200/day in orders by day four of launch',
      'Monthly maintenance retainer keeps campaigns and inventory synced',
    ],
    techStack: ['Next.js', 'Shopify', 'Klaviyo', 'Stripe', 'Vercel'],
    category: 'ecommerce',
    cta: { href: '/portfolio/vispea', label: 'View the Store' },
    blogLink: { href: '/library/stories/e-commerce-launch-from-0-to-1200-daily-orders-in-30-days', label: 'See the launch breakdown' },
    servicesLinks: [
      { href: '/services#maintenance', label: 'Maintenance + Uptime' },
      { href: '/services#conversion', label: 'Conversion Optimization' },
    ],
  },
  {
    id: 'b2b-saas-lp',
    eyebrow: 'SaaS Growth Landing Page',
    title: 'SignalBridge SaaS Launch',
    headline: 'Converted 12% of traffic into trials. 60 signups per month.',
    image: '/images/portfolio/pixel-forge-ai/cover.jpg',
    alt: 'SignalBridge landing page with conversion-focused hero section',
    stats: [
      { label: 'Conversion', value: '12%' },
      { label: 'Sections', value: '9' },
      { label: 'Stack', value: 'Next.js + HubSpot' },
    ],
    story:
      'SignalBridge needed a landing page that did more than look pretty—it had to convert cold traffic into product trials. We rebuilt their story, layered in social proof, wired chatbot support, and hooked forms directly into HubSpot workflows. The entire funnel, from copy to design to analytics, shipped in 72 hours.',
    results: [
      '60 net new product trials per month from paid + organic traffic',
      'CTA and pricing section tested → +19% click-through rate',
      'Booked a Growth Content retainer to fuel the top of funnel',
      'HubSpot + Slack alerts keep the sales team inside the loop',
    ],
    techStack: ['Next.js', 'HubSpot', 'PostHog', 'Slack webhooks', 'Vercel'],
    category: 'saas',
    cta: { href: '/portfolio/pixel-forge-ai', label: 'See Live Landing Page' },
    blogLink: { href: '/library/stories/e-commerce-launch-from-0-to-1200-daily-orders-in-30-days', label: 'Why we chose this stack' },
    servicesLinks: [
      { href: '/services#conversion', label: 'Conversion Optimization' },
      { href: '/services#growth-content', label: 'Growth Content' },
    ],
  },
  {
    id: 'local-service-firm',
    eyebrow: 'Local Service Business',
    title: 'Car and Motorbike Rentals',
    headline: '40 qualified leads in the first month. Booking load doubled.',
    image: 'https://res.cloudinary.com/kinhcode01/image/upload/v1765178605/Vispaico/Images/rivercity_cover_qlxtcv.webp',
    alt: 'Precision Dental Studio site showing appointment booking flow',
    stats: [
      { label: 'Leads', value: '40/mo' },
      { label: 'Automations', value: '3' },
      { label: 'Stack', value: 'Next.js + Airtable' },
    ],
    story:
      'The rental agency relied on phone calls and paper forms. We built a conversion-focused site with service and informational pages, travel stories, and an automated intake flow that books directly into their CRM. Appointment reminders and follow-up sequences now run without staff intervention.',
    results: [
      'Booking rate doubled because the form routes leads in under a minute',
      '3-page local SEO cluster ranking on page one within 45 days',
      'Maintenance plan keeps uptime at 99.98% while the agency sleeps',
      'Customers receive automated aftercare emails via the Growth Content plan',
    ],
    techStack: ['Vite', 'Vercel', 'Airtable', 'Calendly', 'Supabase'],
    category: 'consultants',
    cta: { href: '/portfolio/rivercity-bike-rentals', label: 'View Booking Flow' },
    blogLink: { href: '/library/stories/local-seo-domination-2026', label: 'See the SEO playbook' },
    servicesLinks: [
      { href: '/services#maintenance', label: 'Maintenance + Uptime' },
      { href: '/services#growth-content', label: 'Growth Content' },
    ],
  },
  {
    id: 'creative-agency-showcase',
    eyebrow: 'Agency / Freelancer',
    title: 'Studio Foxfire Portfolio',
    headline: '$45K in client projects booked. 3 weeks after launch.',
    image: '/images/portfolio/codify-academy/cover.jpg',
    alt: 'Studio Foxfire portfolio displaying project grid and case callouts',
    stats: [
      { label: 'Proposals', value: '11' },
      { label: 'Lead Forms', value: '3' },
      { label: 'Stack', value: 'Next.js + Notion' },
    ],
    story:
      'Foxfire moved from a Behance gallery to a proper sales asset. We built a storytelling-heavy portfolio with filters by service, living inside a Notion-powered CMS so the team can swap case studies without touching code.',
    results: [
      '$45k pipeline of approved proposals within 21 days',
      'Lead capture automations route into Slack + Notion for fast replies',
      'Maintenance retainer covers deploys and accessibility checks monthly',
      'Content retainer adds a new case narrative every 2 weeks',
    ],
    techStack: ['Next.js', 'Notion CMS', 'Zapier', 'Slack', 'Vercel'],
    category: 'agencies',
    cta: { href: '/portfolio/codify-academy', label: 'View Portfolio Build' },
    blogLink: { href: '/library/stories/24-hour-website-delivery', label: 'How we sprinted this build' },
    servicesLinks: [
      { href: '/services#conversion', label: 'Conversion Optimization' },
      { href: '/services#growth-content', label: 'Growth Content' },
    ],
  },
  {
    id: 'vispaico-growth-engine',
    eyebrow: 'Vispaico (Our Own Stack)',
    title: 'Vispaico Growth Engine',
    headline: 'Dogfooding our $899 offer. 70% of revenue now recurring.',
    image: 'https://res.cloudinary.com/kinhcode01/image/upload/v1763646382/Vispaico/Images/Vispaico_Homepage_yxrezs.webp',
    alt: 'Vispaico Growth Website hero with highlighted metrics',
    stats: [
      { label: 'Launch', value: '72 hours' },
      { label: 'Content', value: '8 posts/mo' },
      { label: 'Stack', value: 'Next.js + Storyblok' },
    ],
    story:
      'We run the exact playbook we sell. The Vispaico site was rebuilt in 3 days with the Growth Website sprint, then fed by the same Growth Content retainer we offer clients. Every article, case study, and CTA is wired to the same services you see on this page.',
    results: [
      '70% of revenue now comes from monthly retainers sold off the site',
      'Newsletter doubled in 60 days thanks to pillar articles and interlinks',
      'Maintenance stack keeps Core Web Vitals in the 90s across the board',
      'Conversion audits booked straight from the Articles → Services flow',
    ],
    techStack: ['Next.js', 'Storyblok', 'Vercel', 'Plausible Analytics', 'Make.com'],
    category: 'agencies',
    cta: { href: '/vispaico-growth-website', label: 'See the $899 offer' },
    blogLink: { href: '/library/stories/how-to-audit-your-website-for-wcag2_2-compliance', label: 'Why we audit every sprint' },
    servicesLinks: [
      { href: '/services#growth-content', label: 'Growth Content' },
      { href: '/services#conversion', label: 'Conversion Optimization' },
    ],
  },
];
