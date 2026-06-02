export type ServicePageData = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    heading: string;
    subhead: string;
    priceAnchor: string;
    ctaText: string;
    ctaLink: string;
  };
  included: {
    label: string;
    heading: string;
    features: string[];
  };
  steps: {
    label: string;
    heading: string;
    items: string[];
  };
  who: {
    label: string;
    heading: string;
    body: string;
  };
  pricing: {
    label: string;
    plans: {
      title: string;
      price: string;
      subtitle?: string;
      features: string[];
      featured?: boolean;
      badge?: string;
      note?: string;
    }[];
  };
  related: {
    heading: string;
    items: {
      tag: string;
      title: string;
      description: string;
      price: string;
      href: string;
    }[];
  };
  cta: {
    heading: string;
    subtext: string;
    button: string;
    link: string;
    emailBelow?: string;
  };
  industriesLink?: {
    text: string;
    href: string;
  };
  addOn?: {
    label: string;
    heading: string;
    subtext: string;
    card: {
      tag: string;
      title: string;
      description: string;
      price: string;
      priceLinkText: string;
      priceLink: string;
      pills: string[];
    };
  };
  statsSection?: {
    label: string;
    heading: string;
    columns: {
      stat: string;
      label: string;
      text: string;
    }[];
  };
  outcomeGrid?: {
    label: string;
    heading: string;
    subtext: string;
    card: {
      tag: string;
      title: string;
      description: string;
      price: string;
      priceLinkText: string;
      priceLink: string;
      pills: string[];
    };
    outcomes: {
      stat: string;
      label: string;
    }[];
  };
};

export const servicePages = {
  aiWebsiteAgent: {
    metadata: {
      title: 'AI Website + Chat Agent — Vispaico',
      description: 'A Next.js website with an embedded AI agent trained on your business. Handles leads, bookings, and FAQs 24/7 — without hiring support staff.',
    },
    hero: {
      label: 'AI Website + Agent',
      heading: 'A website that closes deals while you sleep.',
      subhead: 'Most business websites are digital brochures. Yours will be an active sales and support system — with an AI agent that knows your business inside out.',
      priceAnchor: 'Starting from $3,500 · Retainer from $300/mo',
      ctaText: 'Get a proposal →',
      ctaLink: '/contact',
    },
    included: {
      label: 'Included in every build',
      heading: "Everything you need. Nothing you don't.",
      features: [
        'Next.js website (fast, SEO-ready, scales without limits)',
        'AI chat agent trained on your products, services, and FAQs',
        'Lead capture + qualification via the agent',
        'Automated booking or inquiry routing',
        'Headless CMS — update content without a developer',
        'WCAG 2.2 AA accessibility compliance',
        'Domain + hosting setup (first year covered)',
        '30 days post-launch support',
      ],
    },
    steps: {
      label: 'The process',
      heading: 'From brief to live in 72 hours.',
      items: [
        'You fill one intake form — no meetings, no back-and-forth.',
        'Day 1: We design. You approve.',
        'Day 2: We build. You review.',
        'Day 3: We launch. Your agent goes live.',
        'Week 2: We train the AI on your knowledge base and refine.',
      ],
    },
    who: {
      label: 'Ideal client',
      heading: 'Built for businesses losing leads to slow follow-up.',
      body: "If you're a clinic, law firm, consultancy, rental business, or e-commerce brand getting website visitors who never convert — this is the fix. The AI agent handles the first response instantly, qualifies the lead, and routes serious buyers directly to you. No extra staff. No missed enquiries at 2am.",
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'One-time build',
          price: '$3,500 – $8,000',
          subtitle: 'Depends on scope and number of pages.',
          features: ['Full website build', 'AI agent setup + training', 'CMS configuration', '30 days support'],
        },
        {
          title: 'Monthly retainer',
          price: '$300 – $500 /mo',
          subtitle: 'Optional. Covers maintenance and agent retraining.',
          features: ['Agent knowledge updates', 'Performance monitoring', 'Content edits (up to 4/mo)', 'Priority support'],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'SEO & Content',
          title: 'Traffic that compounds',
          description: 'Long-form content strategy that compounds after launch.',
          price: 'from $1,200/mo',
          href: '/services/seo-content',
        },
        {
          tag: 'Automation',
          title: 'Workflows that eliminate manual work',
          description: 'n8n+AI pipelines that remove manual work.',
          price: 'from $2,500 per project',
          href: '/services/workflow-automation',
        },
      ],
    },
    cta: {
      heading: 'Ready to launch yours?',
      subtext: "We scope every project before you commit. Book a free call and walk away with a clear plan — even if we don't end up working together.",
      button: 'Book a scoping call →',
      link: '/contact',
    },
  },
  privateAiStack: {
    metadata: {
      title: 'Private AI Infrastructure — Vispaico',
      description: "Self-hosted LLMs, Open WebUI, Postiz, and n8n on your company's servers. Full data ownership. No third-party risk.",
    },
    hero: {
      label: 'Private AI Infrastructure',
      heading: "Your company's own AI. On your servers. Under your control.",
      subhead: 'Stop sending sensitive company data to third-party AI APIs. We set up a complete private AI stack — LLMs, interfaces, automation tools — that runs entirely on infrastructure you own.',
      priceAnchor: 'Starting from $5,000 · Managed infra from $500/mo',
      ctaText: 'Get a proposal →',
      ctaLink: '/contact',
    },
    included: {
      label: 'What we deploy',
      heading: 'The full private stack, configured for your team.',
      features: [
        'Self-hosted LLM via Ollama (Llama, Mistral, or custom models)',
        "Open WebUI — your team's private ChatGPT interface",
        'Postiz — self-hosted social media management + scheduling',
        'n8n — workflow automation connected to your internal tools',
        'Server provisioning and hardening (VPS or on-premise)',
        'VPN or SSO access control for your team',
        'Monitoring, uptime alerts, and backup configuration',
        'Staff onboarding session (half-day, remote)',
      ],
    },
    steps: {
      label: 'Deployment process',
      heading: 'Live in under two weeks.',
      items: [
        'Discovery call — we audit your current tools and data flows.',
        'We spec the server requirements and get your approval.',
        'We provision, configure, and secure the full stack.',
        'We connect your internal tools (CRM, docs, Slack, email).',
        'We hand over a fully documented system and onboard your team.',
      ],
    },
    who: {
      label: 'Ideal client',
      heading: 'For companies where data privacy is non-negotiable.',
      body: 'Law firms, medical practices, financial services companies, manufacturers, and any business handling sensitive client data. If GDPR compliance, data sovereignty, or competitive confidentiality matters to you — using public AI APIs is a real risk. A private stack removes that risk entirely while giving your team the same AI capabilities as any tech company.',
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'Setup project',
          price: '$5,000 – $15,000',
          subtitle: 'Depends on stack complexity and number of integrations.',
          features: ['Server provisioning', 'Full stack deployment', 'Integrations', 'Documentation', 'Onboarding session'],
        },
        {
          title: 'Managed infrastructure',
          price: '$500 – $1,500 /mo',
          subtitle: "We keep it running so you don't have to.",
          features: ['Uptime monitoring', 'Security patches', 'Model updates', 'Monthly performance report', 'Priority support'],
        },
      ],
    },
    addOn: {
      label: 'Add-on',
      heading: 'Need a brain behind your stack?',
      subtext: "Most companies that set up a private AI stack also want a custom AI assistant trained on their internal knowledge. We build it as part of the same project.",
      card: {
        tag: 'Knowledge Base',
        title: 'Custom RAG knowledge base',
        description: "An internal AI assistant trained on your company's documents, SOPs, product manuals, and institutional knowledge. Your team gets instant, accurate answers without searching through folders, pinging colleagues, or waiting on a manager.\n\nCommon uses: internal HR assistant, legal document Q&A, product knowledge base for support teams, onboarding assistant for new hires.",
        price: 'from $4,000 · added to any infrastructure project',
        priceLinkText: 'Ask about this add-on →',
        priceLink: '/contact',
        pills: ['Ollama', 'LangChain', 'Your documents', 'Open WebUI'],
      },
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'AI Website + Agent',
          title: 'A site that works while you sleep',
          description: 'Websites with agents that need secure backend stacks.',
          price: 'from $3,500 · retainer from $300/mo',
          href: '/services/ai-website-agent',
        },
        {
          tag: 'Automation',
          title: 'Workflows that eliminate manual work',
          description: 'High-touch integrations that complement private infra.',
          price: 'from $2,500 per project',
          href: '/services/workflow-automation',
        },
        {
          tag: 'Training',
          title: 'Get your team using AI this week',
          description: 'Practical skills, not theory. Tailored to your team.',
          price: 'from $2,000 per session',
          href: '/services/ai-onboarding',
        },
      ],
    },
    cta: {
      heading: 'Want to see what a private stack looks like for your company?',
      subtext: 'Book a scoping call and we will sketch the infrastructure you actually control.',
      button: 'Book a scoping call →',
      link: '/contact',
    },
  },
  seoContent: {
    metadata: {
      title: 'AI-Accelerated SEO & Content — Vispaico',
      description: 'Long-form content strategy, AI-assisted production, and CMS publishing. Organic traffic that compounds month over month.',
    },
    hero: {
      label: 'SEO & Content',
      heading: 'Traffic that compounds.',
      subhead: 'AI-accelerated content production in English, German, and Spanish. Real keyword strategy, consistent publishing, and long-form articles that rank — and feed your social calendar at the same time.',
      priceAnchor: 'from $1,200/mo',
      ctaText: 'Get a proposal →',
      ctaLink: '/contact',
    },
    included: {
      label: "What's included",
      heading: 'One content engine. Multiple channels. Three languages.',
      features: [
        'Keyword research and topical authority mapping',
        '8–16 long-form articles per month (AI-assisted, human-edited)',
        'Available in English, German, and Spanish — simultaneously',
        'On-page SEO (titles, meta, schema markup, internal linking)',
        'CMS publishing — we handle upload and formatting',
        'Content repurposed into social posts via Postiz (each article → LinkedIn, Instagram, X captions)',
        'Monthly performance report: rankings, traffic, leads',
        'Competitor gap analysis (Authority plan)',
      ],
    },
    steps: {
      label: 'The process',
      heading: 'Strategy first. Content second. Rankings third.',
      items: [
        'Month 1: Full keyword audit and 90-day content roadmap.',
        'Weeks 2–4: First batch of articles written, edited, and published.',
        'Month 2: Ranking data comes in — we double down on what works.',
        'Month 3+: Compounding. Each article builds authority for the next.',
      ],
    },
    who: {
      label: 'Ideal client',
      heading: 'For businesses tired of renting attention.',
      body: "Paid ads stop the moment you stop paying. SEO compounds. If you're a B2B service, SaaS, clinic, consultancy, or e-commerce brand in EU or LATAM markets, ranking in your language and your region is one of the highest-ROI investments you can make. We do this in English, German, and Spanish — simultaneously if needed.",
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'Growth',
          price: '$1,200 /mo',
          subtitle: 'One language. Consistent volume. Measurable rankings.',
          features: [
            '8 long-form articles/mo',
            '1 language (EN, DE, or ES)',
            'On-page SEO + CMS publishing',
            'Social repurposing (Postiz)',
            'Monthly performance report',
          ],
        },
        {
          title: 'Authority',
          price: '$2,500 /mo',
          subtitle: 'Multi-language. Maximum compounding. Full pipeline.',
          featured: true,
          badge: 'Most popular',
          features: [
            '16 long-form articles/mo',
            'Up to 3 languages (EN + DE + ES)',
            'Competitor gap analysis',
            'Content repurposed across all social platforms',
            'Weekly performance check-in',
            'Postiz + n8n automation for hands-off publishing',
          ],
        },
      ],
    },
    statsSection: {
      label: 'Why it matters',
      heading: 'English ranks. German converts. Spanish scales.',
      columns: [
        {
          stat: '€2.1T',
          label: 'DACH market GDP',
          text: "German-language SEO is significantly less competitive than English. Ranking is faster, cheaper, and the buyers have serious purchasing power.",
        },
        {
          stat: '700M+',
          label: 'Spanish speakers worldwide',
          text: "LATAM search volume is growing faster than any other region. Most competitors haven't caught up. Getting in now is a long-term moat.",
        },
        {
          stat: '4.2×',
          label: 'ROI vs. paid ads (avg. 12mo)',
          text: "Paid ads stop the moment your budget does. Content compounds. A well-ranked article from month 2 still drives leads in month 24.",
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Social Media',
          title: 'One post becomes ten',
          description: 'Feed each article into Postiz for full social distribution.',
          price: 'from $1,800/mo',
          href: '/services/social-media-automation',
        },
        {
          tag: 'AI Website + Agent',
          title: 'A site that works while you sleep',
          description: 'A performant site to publish all that content.',
          price: 'from $3,500 · retainer from $300/mo',
          href: '/services/ai-website-agent',
        },
        {
          tag: 'Consulting',
          title: 'Your AI roadmap in two days',
          description: 'Strategy before execution. Know what to build first.',
          price: 'from $2,000 · workshop + full report',
          href: '/services/ai-consulting',
        },
      ],
    },
    cta: {
      heading: 'Want to see what topics you should be ranking for?',
      subtext: 'Book a free keyword audit call and we will point you at the search demand map.',
      button: 'Book a free keyword audit call →',
      link: '/contact',
    },
  },
  workflowAutomation: {
    metadata: {
      title: 'AI Workflow Automation — Vispaico',
      description: "n8n pipelines, AI agents, CRM sync, and reporting automation. We eliminate the manual work eating your team's time.",
    },
    hero: {
      label: 'Workflow Automation',
      heading: 'Stop doing manually what a machine can do better.',
      subhead: "We map your operations, find the tasks bleeding your team's time, and automate them with n8n pipelines and AI agents. Most clients recover 10–20 hours per week within the first month.",
      priceAnchor: 'from $2,500 per project',
      ctaText: 'Get a proposal →',
      ctaLink: '/contact',
    },
    included: {
      label: 'Included efforts',
      heading: "We automate the work that shouldn't require a human.",
      features: [
        'Operations audit — we map every manual process in your workflow',
        'n8n pipeline builds (triggered, scheduled, or event-based)',
        'AI agent integration for classification, drafting, and decisions',
        'CRM sync (HubSpot, Pipedrive, Notion, Airtable, custom)',
        'Lead follow-up sequences with AI-personalized messaging',
        'Automated reporting — dashboards updated without exports',
        'Slack/email alert systems for key business events',
        'Full documentation and handover',
      ],
    },
    steps: {
      label: 'The process',
      heading: 'We find the hours. You get them back.',
      items: [
        'Discovery: we spend 90 minutes mapping your current workflows.',
        'We identify the top 3–5 automation wins by time saved and ROI.',
        'We build, test, and deploy each pipeline.',
        'We monitor for 2 weeks and fix any edge cases.',
        'Handover: full documentation so your team can maintain it.',
      ],
    },
    who: {
      label: 'Ideal client',
      heading: 'For operations teams drowning in repetitive work.',
      body: 'Sales teams copy-pasting leads into CRMs. Marketing teams manually publishing reports. Support teams responding to the same 10 questions every day. Operations managers building spreadsheets by hand every Monday morning. If any of that sounds familiar, we can likely automate 80% of it within 2–3 weeks.',
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'Automation project',
          price: '$2,500 – $6,000',
          subtitle: 'Scoped per workflow. Fixed price, no surprises.',
          features: ['Workflow audit', 'Pipeline builds', 'Testing + QA', 'Documentation', '2-week monitoring'],
        },
        {
          title: 'Ongoing retainer',
          price: '$400 – $800 /mo',
          subtitle: 'For teams that want continuous improvement.',
          features: ['Monthly automation review', 'New pipeline builds (1–2/mo)', 'Priority support', 'Performance monitoring'],
        },
      ],
    },
    outcomeGrid: {
      label: 'Most popular pipeline',
      heading: 'AI lead generation system.',
      subtext: "The single highest-ROI automation we build for most clients. An AI agent that finds, contacts, qualifies, and routes leads into your CRM — without a sales team doing the manual work.",
      card: {
        tag: 'Lead Generation',
        title: 'Automated outreach + qualification pipeline',
        description: "Most businesses lose deals not because the lead wasn't interested, but because the follow-up was too slow or too generic. This pipeline changes that.\n\nAn AI agent identifies target prospects, sends personalized outreach, responds to replies, qualifies based on your criteria, and pushes warm leads directly into your CRM — flagged and ready for a human conversation.\n\nWe've seen clients go from 3–4 qualified leads per week to 15–20, without adding a single person to their sales team.",
        price: 'from $3,000 setup · retainer from $400/mo',
        priceLinkText: 'Ask about this pipeline →',
        priceLink: '/contact',
        pills: ['n8n', 'AI agents', 'CRM sync', 'Personalized outreach'],
      },
      outcomes: [
        { stat: '15–20', label: 'qualified leads per week (avg.)' },
        { stat: '< 5 min', label: 'average first response time' },
        { stat: '3–4 weeks', label: 'to full pipeline deployment' },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'AI Website + Agent',
          title: 'A site that works while you sleep',
          description: 'Automate the workflows around your AI assistant.',
          price: 'from $3,500 · retainer from $300/mo',
          href: '/services/ai-website-agent',
        },
        {
          tag: 'Private AI Stack',
          title: 'Your own private AI stack',
          description: 'Secure infra supporting automation.',
          price: 'from $5,000 · managed from $500/mo',
          href: '/services/private-ai-stack',
        },
        {
          tag: 'Consulting',
          title: 'Your AI roadmap in two days',
          description: 'Clarity before you build. Know where automation pays first.',
          price: 'from $2,000 · workshop + full report',
          href: '/services/ai-consulting',
        },
      ],
    },
    cta: {
      heading: 'Tell us what your team does manually every week.',
      subtext: 'Book a workflow audit call and we will show you where automation pays off first.',
      button: 'Book a workflow audit call →',
      link: '/contact',
    },
  },
  aiConsulting: {
    metadata: {
      title: 'AI Readiness Consulting — Vispaico',
      description: 'We audit your operations, find the highest-ROI AI opportunities, and hand you a 90-day implementation roadmap.',
    },
    hero: {
      label: 'AI Consulting',
      heading: 'Know exactly where AI will make your business more money.',
      subhead: 'Before you invest in any AI tool or system, you need to know which problems are actually worth solving. We spend two days with your team, map your operations, and hand you a prioritized roadmap — with honest recommendations, not a sales pitch.',
      priceAnchor: 'from $2,000 · workshop + full report',
      ctaText: 'Book a consulting session →',
      ctaLink: '/contact',
    },
    included: {
      label: "What's included",
      heading: 'Two days in. A clear plan out.',
      features: [
        'Pre-workshop questionnaire and ops mapping (async, before Day 1)',
        'Day 1: Full operations audit with your team (remote or on-site)',
        'Day 2: AI opportunity prioritization and roadmap session',
        'Deliverable: written 90-day AI implementation roadmap',
        'Tool recommendations with honest cost/benefit analysis',
        'Build-vs-buy decisions for every identified opportunity',
        'Optional: we implement the roadmap for you afterward',
      ],
    },
    steps: {
      label: 'The process',
      heading: 'Clarity in two days. Implementation optional.',
      items: [
        'You complete a 30-minute pre-workshop questionnaire.',
        'Day 1: We map every workflow, tool, and manual process in your ops.',
        'We analyze overnight — identifying AI opportunities by ROI.',
        'Day 2: We walk through the ranked opportunities with your team.',
        'Within 5 business days: full written roadmap delivered.',
      ],
    },
    who: {
      label: 'Ideal client',
      heading: 'For leaders who want clarity before they commit.',
      body: "CEOs and operations directors who keep hearing about AI but don't know where to start. Companies that have already bought tools that didn't deliver. Businesses about to make a significant tech investment who want a second opinion. The consulting engagement has a fixed cost and a clear deliverable. You walk away knowing exactly what to build, in what order, and what it will cost — whether you hire us or not.",
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'AI Readiness Workshop',
          price: '$2,000 – $5,000',
          subtitle: 'Price depends on company size and depth of audit.',
          features: [
            'Pre-workshop questionnaire',
            '2-day workshop',
            '90-day roadmap document',
            'Tool recommendations',
            'Build-vs-buy analysis',
            '30-day follow-up call',
          ],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Private AI Stack',
          title: 'Your own private AI stack',
          description: 'Deploy the roadmap you receive.',
          price: 'from $5,000 · managed from $500/mo',
          href: '/services/private-ai-stack',
        },
        {
          tag: 'Automation',
          title: 'Workflows that eliminate manual work',
          description: 'Automate the opportunities you uncover.',
          price: 'from $2,500 per project',
          href: '/services/workflow-automation',
        },
      ],
    },
    cta: {
      heading: 'Not sure if your business is ready for AI?',
      subtext: "That's exactly what the consulting session is for. Book a session and we'll give you clarity.",
      button: 'Book a session →',
      link: '/contact',
    },
  },
  companyBrain: {
    metadata: {
      title: 'Company Brain — Vispaico',
      description: "Stop losing time searching through documents, emails, drives, and internal systems. The Company Brain becomes the central intelligence layer for your organization.",
    },
    hero: {
      label: 'Company Brain',
      heading: "Your Company's Knowledge. Instantly Accessible.",
      subhead: 'Stop losing time searching through documents, emails, drives, and internal systems. The Company Brain becomes the central intelligence layer for your organization.',
      priceAnchor: 'Implementation from $4,000 · Monthly from $500/mo',
      ctaText: 'Book a Knowledge Audit →',
      ctaLink: '/contact',
    },
    included: {
      label: 'What it does',
      heading: 'Instant answers from your entire company knowledge.',
      features: [
        'Answers employee questions instantly',
        'Searches company documentation',
        'Retrieves SOPs and policies',
        'Supports onboarding',
        'Reduces dependency on key employees',
        'Preserves institutional knowledge',
      ],
    },
    steps: {
      label: 'Example questions',
      heading: 'Your team asks. The Brain answers.',
      items: [
        'How do we process customer refunds?',
        'What is our pricing policy?',
        'Where is the latest onboarding document?',
        'Who owns this workflow?',
      ],
    },
    who: {
      label: 'Benefits',
      heading: 'Faster onboarding. Fewer interruptions. Better knowledge sharing.',
      body: "Every minute an employee spends searching for information is lost productivity. The Company Brain ingests your documents, SOPs, policies, and institutional knowledge — giving every team member instant access to the answers they need. New hires onboard faster. Key employee knowledge is preserved. Your entire organization becomes more efficient.",
    },
    pricing: {
      label: 'Pricing',
      plans: [
        {
          title: 'Implementation',
          price: 'Starting at $4,000',
          subtitle: 'One-time setup and knowledge base ingestion.',
          features: ['Knowledge audit', 'Document ingestion', 'RAG pipeline setup', 'Custom training', 'Integration with your tools'],
        },
        {
          title: 'Monthly',
          price: 'Starting at $500 /mo',
          subtitle: 'Ongoing maintenance, updates, and support.',
          features: ['Knowledge base updates', 'Model fine-tuning', 'Usage monitoring', 'Priority support', 'Monthly review'],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Company Analyst',
          title: 'Turn data into decisions',
          description: 'Connect your data sources into one intelligent analyst.',
          price: 'from $5,000 · retainer from $800/mo',
          href: '/services/company-analyst',
        },
        {
          tag: 'AI Operations Audit',
          title: 'Find your highest-value AI opportunities',
          description: 'Identify where AI will create measurable impact first.',
          price: '$1,500 – $3,000 fixed fee',
          href: '/services/ai-operations-audit',
        },
      ],
    },
    cta: {
      heading: 'Ready to unlock your company\'s collective knowledge?',
      subtext: 'Book a Knowledge Audit and we\'ll show you how the Company Brain can transform your organization\'s productivity.',
      button: 'Book a Knowledge Audit →',
      link: '/contact',
    },
    industriesLink: {
      text: 'See how this works in your industry →',
      href: '/industries',
    },
  },
  companyAnalyst: {
    metadata: {
      title: 'Company Analyst — Vispaico',
      description: 'Ask business questions in plain language and receive immediate analysis. Connect your sales, operations, finance, and marketing data into one intelligent analyst.',
    },
    hero: {
      label: 'Company Analyst',
      heading: 'Turn Company Data Into Decisions',
      subhead: 'Ask business questions in plain language and receive immediate analysis. Connect your sales, operations, finance, and marketing data into one intelligent analyst.',
      priceAnchor: 'Implementation from $5,000 · Monthly from $800/mo',
      ctaText: 'Book a Data Assessment →',
      ctaLink: '/contact',
    },
    included: {
      label: 'What it does',
      heading: 'Your data. One question. Instant answers.',
      features: [
        'Analyzes sales performance',
        'Identifies trends',
        'Detects risks',
        'Finds growth opportunities',
        'Generates reports automatically',
      ],
    },
    steps: {
      label: 'Example questions',
      heading: 'Ask your business anything.',
      items: [
        'Why did revenue decline last month?',
        'Which products are growing fastest?',
        'Which customers are likely to churn?',
        'Which region performs best?',
      ],
    },
    who: {
      label: 'Benefits',
      heading: 'Faster decisions. Fewer reports. Real insights.',
      body: "Most companies sit on mountains of data but only extract a fraction of its value. The Company Analyst connects to your existing data sources — CRM, ERP, marketing platforms, financial systems — and turns raw data into actionable insights. No more waiting for reports. No more manual analysis. Ask a question, get an answer.",
    },
    pricing: {
      label: 'Pricing',
      plans: [
        {
          title: 'Implementation',
          price: 'Starting at $5,000',
          subtitle: 'One-time setup and data source integration.',
          features: ['Data source audit', 'Integration setup', 'Custom analytics model', 'Report templates', 'Team training'],
        },
        {
          title: 'Monthly',
          price: 'Starting at $800 /mo',
          subtitle: 'Ongoing analysis, updates, and support.',
          features: ['Data pipeline maintenance', 'New report creation', 'Trend monitoring', 'Executive summaries', 'Priority support'],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Company Brain',
          title: "Your company's knowledge. Instantly accessible.",
          description: 'The knowledge layer that pairs perfectly with data analysis.',
          price: 'from $4,000 · retainer from $500/mo',
          href: '/services/company-brain',
        },
        {
          tag: 'Company Operator',
          title: 'Monitor operations before problems appear',
          description: 'Continuous monitoring of workflows, projects, and KPIs.',
          price: 'from $10,000 · managed from $2,000/mo',
          href: '/services/company-operator',
        },
      ],
    },
    cta: {
      heading: 'Ready to turn your data into decisions?',
      subtext: 'Book a Data Assessment and we\'ll show you how the Company Analyst can unlock insights you didn\'t know you had.',
      button: 'Book a Data Assessment →',
      link: '/contact',
    },
    industriesLink: {
      text: 'See how this works in your industry →',
      href: '/industries',
    },
  },
  companyOperator: {
    metadata: {
      title: 'Company Operator — Vispaico',
      description: 'The Company Operator continuously monitors workflows, projects, sales, support, and finance to identify risks and bottlenecks before they become problems.',
    },
    hero: {
      label: 'Company Operator',
      heading: 'Monitor Operations Before Problems Appear',
      subhead: 'The Company Operator continuously monitors workflows, projects, sales, support, and finance to identify risks and bottlenecks.',
      priceAnchor: 'Implementation from $10,000 · Monthly from $2,000/mo',
      ctaText: 'Schedule an Operations Review →',
      ctaLink: '/contact',
    },
    included: {
      label: 'What it does',
      heading: 'Continuous monitoring. Proactive alerts.',
      features: [
        'Detects operational bottlenecks',
        'Predicts capacity issues',
        'Monitors delivery performance',
        'Tracks KPIs',
        'Identifies customer risk signals',
      ],
    },
    steps: {
      label: 'Example alerts',
      heading: 'Problems caught before they escalate.',
      items: [
        'Project delivery delays detected',
        'Support backlog increasing',
        'Capacity shortage forecasted',
        'Customer churn risk rising',
      ],
    },
    who: {
      label: 'Benefits',
      heading: 'Proactive management. Reduced risk. Scalable operations.',
      body: "Reactive management is expensive. By the time you notice a bottleneck, it's already costing you money. The Company Operator monitors your entire operation in real-time — flagging risks, predicting capacity issues, and giving you the visibility to make decisions before problems escalate. It's like having a COO that never sleeps.",
    },
    pricing: {
      label: 'Pricing',
      plans: [
        {
          title: 'Implementation',
          price: 'Starting at $10,000',
          subtitle: 'One-time setup and full operational integration.',
          features: ['Operations audit', 'KPI framework design', 'Monitoring pipeline setup', 'Alert configuration', 'Dashboard creation'],
        },
        {
          title: 'Monthly',
          price: 'Starting at $2,000 /mo',
          subtitle: 'Ongoing monitoring, updates, and support.',
          features: ['24/7 system monitoring', 'Weekly ops reports', 'Alert tuning', 'Capacity forecasting', 'Executive dashboards'],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Company Analyst',
          title: 'Turn data into decisions',
          description: 'Deeper analysis of the data your Operator monitors.',
          price: 'from $5,000 · retainer from $800/mo',
          href: '/services/company-analyst',
        },
        {
          tag: 'AI Operations Audit',
          title: 'Find your highest-value AI opportunities',
          description: 'Identify where AI will create measurable impact first.',
          price: '$1,500 – $3,000 fixed fee',
          href: '/services/ai-operations-audit',
        },
      ],
    },
    cta: {
      heading: 'Ready to stop reacting and start predicting?',
      subtext: 'Schedule an Operations Review and we\'ll show you how the Company Operator can transform your operational visibility.',
      button: 'Schedule an Operations Review →',
      link: '/contact',
    },
    industriesLink: {
      text: 'See how this works in your industry →',
      href: '/industries',
    },
  },
  aiOperationsAudit: {
    metadata: {
      title: 'AI Operations Audit — Vispaico',
      description: 'Before implementing AI, identify where it will create measurable impact. Workflow analysis, knowledge flow mapping, data readiness assessment, and a clear opportunity roadmap.',
    },
    hero: {
      label: 'AI Operations Audit',
      heading: 'Find The Highest-Value AI Opportunities In Your Business',
      subhead: 'Before implementing AI, identify where it will create measurable impact.',
      priceAnchor: '$1,500 – $3,000 fixed fee',
      ctaText: 'Book An AI Operations Audit',
      ctaLink: '/contact',
    },
    included: {
      label: 'Deliverables',
      heading: 'A clear roadmap. No fluff.',
      features: [
        'Workflow analysis',
        'Knowledge flow mapping',
        'Data readiness assessment',
        'AI opportunity roadmap',
        'Implementation recommendations',
      ],
    },
    steps: {
      label: 'The process',
      heading: 'Clarity in days. Not weeks.',
      items: [
        'Day 1: We map your current workflows and identify bottlenecks.',
        'Day 2: We assess data readiness and knowledge flows.',
        'Day 3: We deliver a prioritized AI opportunity roadmap.',
        'Day 5: Implementation recommendations with clear ROI estimates.',
      ],
    },
    who: {
      label: 'Ideal for',
      heading: 'For companies that want to invest in AI with confidence.',
      body: "You've heard about AI's potential but don't know where to start in your own business. The AI Operations Audit gives you a clear, unbiased assessment of where AI will create the most value — before you spend a dollar on implementation. Fixed fee. Clear deliverables. No pressure to buy more.",
    },
    pricing: {
      label: 'Investment',
      plans: [
        {
          title: 'Fixed Fee',
          price: '$1,500 – $3,000',
          subtitle: 'Depends on company size and operational complexity.',
          features: [
            'Workflow analysis',
            'Knowledge flow mapping',
            'Data readiness assessment',
            'AI opportunity roadmap',
            'Implementation recommendations',
          ],
        },
      ],
    },
    related: {
      heading: 'You might also need',
      items: [
        {
          tag: 'Company Brain',
          title: "Your company's knowledge. Instantly accessible.",
          description: 'The most common first implementation from our audits.',
          price: 'from $4,000 · retainer from $500/mo',
          href: '/services/company-brain',
        },
        {
          tag: 'Company Analyst',
          title: 'Turn data into decisions',
          description: 'Connect your data sources into one intelligent analyst.',
          price: 'from $5,000 · retainer from $800/mo',
          href: '/services/company-analyst',
        },
      ],
    },
    cta: {
      heading: 'Ready to know exactly where AI will pay off?',
      subtext: 'Book an AI Operations Audit and walk away with a clear, prioritized roadmap.',
      button: 'Book An AI Operations Audit',
      link: '/contact',
    },
  },
} as const;
