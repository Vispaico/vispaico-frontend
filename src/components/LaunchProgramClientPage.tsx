'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faServer,
  faRobot,
  faGlobe,
  faComments,
  faChartLine,
  faShareNodes,
  faGear,
  faChartBar,
  faCheck,
  faXmark,
  faClock,
  faBuildingColumns,
  faBolt,
  faShieldHalved,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import React from 'react';
import ContactCTAButton from '@/components/ContactCTAButton';

const iconMap: Record<string, IconDefinition> = {
  server: faServer,
  robot: faRobot,
  globe: faGlobe,
  comments: faComments,
  chartLine: faChartLine,
  shareNodes: faShareNodes,
  gear: faGear,
  chartBar: faChartBar,
  clock: faClock,
  buildingColumns: faBuildingColumns,
  bolt: faBolt,
  shieldHalved: faShieldHalved,
  code: faCode,
};

const LaunchProgramClientPage = () => {
  const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
  const itemVariants = { hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } };
  const containerClass = 'mx-auto w-full max-w-[1100px]';
  const sectionSpacing = 'px-6 py-[64px] md:py-[96px]';
  const heroBadges = ['Vispaico', 'The Complete AI Operating System', '6-Month Program', 'You Own Everything'];

  const problemColumns = [
    {
      title: 'DIY Approach',
      icon: 'gear',
      body: 'You piece together a WordPress site, hire freelancers for SEO, try ChatGPT prompts, manage social yourself. You end up with 10 disconnected subscriptions, no integration between tools, and 18 months of your life spent becoming a part-time tech manager.',
      cost: '$15,000–30,000 · 18+ months · still fragmented',
      type: 'con',
    },
    {
      title: 'Traditional Agency Route',
      icon: 'buildingColumns',
      body: 'You hire an agency for the website, another firm for SEO, a social media manager, an AI consultant who has never shipped production code. They don\'t talk to each other. You become the project manager of your own chaos.',
      cost: '$25,000–50,000+ · 12–18 months · no AI infrastructure',
      type: 'con',
    },
    {
      title: 'The Launch Program',
      icon: 'bolt',
      body: 'Private AI infrastructure, website, AI agents, SEO, content, social media, and automation — built as one connected system, running on servers you own, by one team that knows how every layer works together.',
      cost: '$24,800 · 6 months · you own everything',
      type: 'pro',
    },
  ];

  const deliverables = [
    'Server provisioning and security hardening (VPS or on-premise — your choice)',
    'Self-hosted LLM deployment via Ollama (Llama, Mistral, or model of your choice)',
    'Open WebUI — your team\'s private AI interface, branded and access-controlled',
    'Postiz — self-hosted social media management platform',
    'n8n — workflow automation engine, connected to your internal tools',
    'VPN or SSO access control configured for your team',
    'AI-powered website (Next.js, mobile-first, sub-second load speed)',
    'AI chat agent trained on your business, products, and FAQs — running on your private LLM',
    'Headless CMS — you control content without a developer',
    'Domain, hosting, SSL, and GDPR compliance (1 year covered)',
    'Analytics and conversion tracking configured from day one',
    'Brand voice document — the reference we use for all content',
    'Staff onboarding session for your private AI stack (half-day, remote)',
  ];

  const summaryStats = [
    { stat: '40', label: 'SEO articles published' },
    { stat: '300+', label: 'social posts across all platforms' },
    { stat: '100%', label: 'private infrastructure — your servers' },
    { stat: '6', label: 'months of full execution' },
    { stat: '1', label: 'team. One point of contact.' },
  ];

  const comparisonRows = [
    { service: 'Private AI infrastructure setup', cost: '$5,000–15,000', timeline: '2–4 weeks', included: true },
    { service: 'Self-hosted LLM + Open WebUI', cost: '$3,000–8,000', timeline: '1–2 weeks', included: true },
    { service: 'AI-powered website (Next.js)', cost: '$5,000–15,000', timeline: '4–8 weeks', included: true },
    { service: 'AI chat agent (custom trained)', cost: '$3,000–8,000', timeline: '2–4 weeks', included: true },
    { service: 'SEO strategy + 40 articles', cost: '$12,000–20,000', timeline: '6 months', included: true },
    { service: 'Social media management (6mo)', cost: '$6,000–12,000', timeline: 'ongoing', included: true },
    { service: 'Workflow + lead gen automation', cost: '$3,000–8,000', timeline: '2–4 weeks', included: true },
    { service: 'Analytics + reporting setup', cost: '$1,500–3,000', timeline: '1–2 weeks', included: true },
  ];

  const whoIsFor = [
    "You're launching a business or entering a new market and want a complete, professional AI operation from day one — not a website you'll have to rebuild in 12 months",
    'You handle sensitive company or client data and need AI infrastructure your company fully owns — not a third-party API you can\'t control',
    "You've already spent money on disconnected vendors and want one team that owns the entire outcome",
    'You have a real budget and a real deadline — and need both respected without weekly status calls',
    'You understand that $24,800 over 6 months is less than one mid-level marketing hire — and delivers an infrastructure that keeps running after month 6',
  ];

  const whoIsNotFor = [
    'You need a website in under a week (see our Growth Website — $899, 72 hours)',
    'You want to micromanage every post, every article, and every automation before it goes live — this program moves fast and needs your trust to deliver',
    'Your budget is under $15,000 (we have individual services starting at $600/mo)',
    "You're looking for the cheapest way to get online (we're not it — and we're completely fine with that)",
    'You only need one piece of this — see our individual services instead',
  ];

  const phases = [
    {
      phase: 'Phase 01',
      timeline: 'Weeks 1–3',
      title: 'Infrastructure & Foundation',
      description: 'We architect and deploy your complete private AI stack on servers your company owns. Then we build your customer-facing presence on top of it.',
      items: [
        'Server provisioning and security hardening',
        'Self-hosted LLM deployment (Ollama)',
        'Open WebUI setup — branded and access-controlled',
        'Postiz and n8n installation and configuration',
        'AI-powered website (Next.js) build',
        'AI chat agent trained on your business',
        'Headless CMS configuration',
        'Domain, hosting, SSL, GDPR compliance',
        'Analytics and conversion tracking setup',
        'Brand voice document creation',
        'Staff onboarding session (half-day, remote)',
      ],
    },
    {
      phase: 'Phase 02',
      timeline: 'Weeks 4–8',
      title: 'Content Engine & SEO Launch',
      description: 'With infrastructure live, we turn on the content engine. Articles go out, social pipelines activate, and your AI agents start learning.',
      items: [
        'Keyword research and topical authority mapping',
        'First batch of SEO articles published',
        'Social media content calendar created and approved',
        'Postiz configured for multi-platform publishing',
        'n8n automation pipelines for content repurposing',
        'AI chat agent refined based on early interactions',
        'Analytics dashboard configured with KPIs',
      ],
    },
    {
      phase: 'Phase 03',
      timeline: 'Weeks 9–16',
      title: 'Growth & Optimization',
      description: 'The system is running. Now we optimize based on real data. Content compounds. Agents get smarter. Automation expands.',
      items: [
        'Monthly SEO content production (8–16 articles/mo)',
        'Social media publishing across all platforms',
        'AI agent retraining based on interaction data',
        'n8n workflow expansion — more automations',
        'Monthly performance reports and strategy adjustments',
        'Competitor gap analysis and content optimization',
        'Conversion rate optimization on the website',
      ],
    },
    {
      phase: 'Phase 04',
      timeline: 'Weeks 17–24',
      title: 'Scale & Handover',
      description: 'Final push. Everything is optimized, documented, and ready for you to run independently. We hand over the keys.',
      items: [
        'Full system audit and documentation',
        'AI agent final training and knowledge base update',
        'Complete handover of all infrastructure credentials',
        'Team training on managing the full stack',
        '30-day post-handover support period',
        'Final performance report and growth roadmap',
      ],
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'The Launch Program — Vispaico',
    description: 'One team. Six months. A fully operational AI-powered business with private infrastructure you own.',
    brand: { '@type': 'Brand', name: 'Vispaico' },
    price: '24800',
    priceCurrency: 'USD',
    url: 'https://www.vispaico.com/launch',
    offers: {
      '@type': 'Offer',
      price: '24800',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Vispaico', url: 'https://www.vispaico.com' },
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
        {/* SECTION 1 — HERO */}
        <div className={`${containerClass} ${sectionSpacing}`}>
          <motion.div className="space-y-[88px]" variants={containerVariants} initial="hidden" animate="visible">
            <motion.section className="space-y-8 text-center" variants={itemVariants}>
              <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] uppercase tracking-[0.35em] text-[var(--text-secondary)]">
                {heroBadges.map((badge, index) => (
                  <React.Fragment key={badge}>
                    <span>{badge}</span>
                    {index < heroBadges.length - 1 && <span className="text-[var(--border)]">|</span>}
                  </React.Fragment>
                ))}
              </div>
              <h1 className="text-[clamp(36px,5vw,60px)] font-[600] leading-tight text-[var(--text-primary)]">
                The Launch Program
              </h1>
              <h2 className="text-[clamp(22px,3vw,32px)] font-[500] text-[var(--text-secondary)] max-w-3xl mx-auto">
                Most founders spend 18 months and $50,000+ piecing together a website, a developer, an SEO agency, a social media manager, and an AI consultant — and still end up with disconnected tools, no private infrastructure, and no clear results.
              </h2>
              <p className="text-[clamp(18px,2.5vw,24px)] font-[500] text-[var(--text-secondary)] max-w-3xl mx-auto">
                The Launch Program builds your complete AI operating system — private servers, LLMs, website, agents, content, and automation — integrated, deployed, and handed over to you in six months. You own every piece of it.
              </p>
              <div className="flex flex-col items-center gap-3 mt-8">
                <div className="flex items-baseline gap-3">
                  <span className="text-[clamp(32px,4.5vw,48px)] font-[600] text-[var(--text-primary)]">$24,800</span>
                  <span className="text-[14px] text-[var(--text-secondary)] self-center">· complete program · 6 months · everything included</span>
                </div>
                <p className="text-[13px] text-[var(--text-muted)]">
                  Includes private AI infrastructure, website, agents, SEO, content, social media, and automation. Payment plans available. Scoping call required.
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <ContactCTAButton
                  text="Start Your Project"
                  className="inline-flex items-center justify-center rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                />
              </div>
            </motion.section>

            {/* SECTION 2 — THE PROBLEM */}
            <motion.section className="space-y-8" variants={itemVariants}>
              <div className="space-y-3">
                <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                  Tired of the Old Way?
                </h2>
                <h3 className="text-[clamp(20px,2.5vw,32px)] text-center text-[var(--text-secondary)]">
                  Three paths. Only one delivers everything.
                </h3>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {problemColumns.map((col) => (
                  <div
                    key={col.title}
                    className={`rounded-[20px] border bg-[var(--bg-surface)] p-6 ${
                      col.type === 'pro' ? 'border-[#3a3a36]' : 'border-[var(--border)]'
                    }`}
                  >
                    <div className="text-center mb-4">
                      <FontAwesomeIcon
                        icon={iconMap[col.icon] ?? faServer}
                        className={`text-3xl mb-3 ${col.type === 'pro' ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}
                      />
                      <h3 className={`text-xl font-[600] ${col.type === 'pro' ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
                        {col.title}
                      </h3>
                    </div>
                    <p className={`text-[14px] leading-[1.7] mb-4 ${col.type === 'pro' ? 'text-[var(--text-secondary)]' : 'text-[var(--text-muted)]'}`}>
                      {col.body}
                    </p>
                    <p className={`text-center font-[500] text-[13px] ${col.type === 'pro' ? 'text-[var(--text-primary)]' : 'text-[var(--text-muted)]'}`}>
                      {col.cost}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 3 — WHAT'S INCLUDED */}
            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                What&apos;s Included — Phase 01
              </h2>
              <div className="mt-8 rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-[clamp(22px,3vw,30px)] font-[600] text-[var(--text-primary)]">
                      We build your AI infrastructure from the ground up.
                    </h3>
                    <p className="mt-3 text-[15px] leading-[1.75] text-[var(--text-secondary)] max-w-[700px]">
                      Before anything goes live, we architect and deploy your complete private AI stack — on servers your company owns and controls. No third-party AI APIs handling your sensitive data. No subscription lock-in. Your own models. Your own infrastructure. Then we build your customer-facing presence on top of it.
                    </p>
                  </div>
                  <span className="mt-4 md:mt-0 inline-block rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-4 py-2 text-[11px] font-[500] text-[var(--text-muted)] uppercase tracking-[0.08em] whitespace-nowrap">
                    Weeks 1–3
                  </span>
                </div>
                <div className="grid gap-3 md:grid-cols-2">
                  {deliverables.map((item) => (
                    <p key={item} className="flex items-start gap-3 text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                      <span className="text-green-500 mt-0.5 flex-shrink-0"><FontAwesomeIcon icon={faCheck} size="xs" /></span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.section>

            {/* DELIVERABLES SUMMARY BAR */}
            <motion.section variants={itemVariants}>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {summaryStats.map((stat) => (
                  <div key={stat.stat} className="text-center rounded-[14px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">
                    <p className="text-[clamp(28px,3vw,40px)] font-[600] text-[var(--text-primary)]">{stat.stat}</p>
                    <p className="mt-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 4 — COMPARISON TABLE */}
            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                What It Costs to Build Separately
              </h2>
              <div className="mt-8 rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] overflow-hidden">
                <div className="hidden md:grid md:grid-cols-4 gap-4 px-6 py-4 bg-[var(--bg-elevated)] text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)] border-b border-[var(--border)]">
                  <span>Service</span>
                  <span>Typical cost (market rate)</span>
                  <span>Typical timeline</span>
                  <span className="text-center">Included</span>
                </div>
                {comparisonRows.map((row) => (
                  <div key={row.service} className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 px-6 py-4 border-b border-[var(--border)] last:border-b-0">
                    <span className="text-[14px] text-[var(--text-primary)] font-[500] md:col-span-1">{row.service}</span>
                    <span className="text-[14px] text-[var(--text-secondary)]">{row.cost}</span>
                    <span className="text-[14px] text-[var(--text-secondary)]">{row.timeline}</span>
                    <span className="text-center text-green-500 font-[600] text-[14px]">✓ Included</span>
                  </div>
                ))}
                <div className="px-6 py-4 bg-[var(--bg-elevated)] border-t border-[var(--border)] grid grid-cols-3 gap-4">
                  <span className="text-[14px] font-[600] text-[var(--text-primary)]">Total if purchased separately</span>
                  <span className="text-[14px] font-[600] text-[var(--text-primary)]">$38,500–89,000</span>
                  <span className="text-[14px] font-[600] text-[var(--text-primary)]">18–24 months</span>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[14px] font-[500] text-[var(--text-primary)]">
                  The Launch Program — <span className="text-[var(--text-secondary)]">$24,800 · 6 months · you own everything</span>
                </p>
                <p className="mt-2 text-[12px] text-[var(--text-muted)]">
                  Market rate estimates based on EU and US agency and freelancer pricing, 2025–2026.
                </p>
              </div>
            </motion.section>

            {/* SECTION 5 — WHO THIS IS FOR */}
            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                Who This Is For
              </h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                  <h3 className="text-xl font-[600] text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <span className="text-green-500"><FontAwesomeIcon icon={faCheck} /></span> This is for you if:
                  </h3>
                  <ul className="space-y-3">
                    {whoIsFor.map((item) => (
                      <li key={item} className="text-[14px] leading-[1.7] text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="text-green-500 mt-1.5 flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6">
                  <h3 className="text-xl font-[600] text-[var(--text-primary)] mb-4 flex items-center gap-2">
                    <span className="text-red-500"><FontAwesomeIcon icon={faXmark} /></span> This is NOT for you if:
                  </h3>
                  <ul className="space-y-3">
                    {whoIsNotFor.map((item) => (
                      <li key={item} className="text-[14px] leading-[1.7] text-[var(--text-secondary)] flex items-start gap-2">
                        <span className="text-red-500 mt-1.5 flex-shrink-0">·</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* SECTION 6 — THE 6-MONTH PROCESS */}
            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center">
                How It Works — The 6-Month Program
              </h2>
              <div className="mt-8 space-y-6">
                {phases.map((phase) => (
                  <div key={phase.phase} className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">{phase.phase}</span>
                          <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-3 py-1 text-[11px] font-[500] text-[var(--text-muted)]">
                            {phase.timeline}
                          </span>
                        </div>
                        <h3 className="text-[clamp(20px,2.5vw,26px)] font-[600] text-[var(--text-primary)]">{phase.title}</h3>
                        <p className="mt-2 text-[14px] leading-[1.75] text-[var(--text-secondary)]">{phase.description}</p>
                      </div>
                    </div>
                    <div className="grid gap-2 md:grid-cols-2">
                      {phase.items.map((item) => (
                        <p key={item} className="flex items-start gap-2 text-[13px] leading-[1.7] text-[var(--text-secondary)]">
                          <span className="text-green-500 mt-0.5 flex-shrink-0"><FontAwesomeIcon icon={faCheck} size="xs" /></span>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* SECTION 7 — PAYMENT & LOGISTICS */}
            <motion.section variants={itemVariants}>
              <h2 className="text-[clamp(30px,4vw,44px)] font-[600] text-center mb-8">
                Payment & Logistics
              </h2>
              <div className="max-w-[640px] mx-auto rounded-[20px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 md:p-8">
                <h3 className="text-xl font-[600] text-[var(--text-primary)] mb-4">Payment</h3>
                <p className="text-[14px] leading-[1.75] text-[var(--text-secondary)] mb-4">
                  The program is $24,800 total.
                  Two payment structures:
                </p>
                <ul className="space-y-3 text-[14px] text-[var(--text-secondary)]">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">·</span>
                    <span><strong>Upfront:</strong> $24,800 (saves $1,200 vs installment plan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">·</span>
                    <span><strong>Installment:</strong> $4,800 on signing, then $4,000/mo for 5 months ($24,800 total — same price, spread over 6 months)</span>
                  </li>
                </ul>
                <p className="mt-4 text-[14px] leading-[1.75] text-[var(--text-secondary)]">
                  Payment via bank transfer or Stripe.
                  Phase 01 is fully refundable if we fail to deliver the infrastructure and website on schedule.
                </p>
                <div className="mt-4 pt-4 border-t border-[var(--border)]">
                  <p className="text-[12px] text-[var(--text-muted)] leading-[1.7]">
                    The installment plan is structured so your first payment covers project initiation and your monthly payments align with active delivery phases. No payment is due for a month where we miss a scheduled deliverable.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* SECTION 8 — FINAL CTA */}
            <motion.section id="final-cta" className="text-center" variants={itemVariants}>
              <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
                Ready to build the whole thing properly?
              </h2>
              <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
                Apply for the Launch Program and get a complete AI operating system — private infrastructure, website, agents, content, and automation — built and handed over in 6 months.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4">
                <ContactCTAButton
                  text="Apply for the Launch Program →"
                  className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
                />
                <p className="text-[12px] text-[var(--text-muted)]">or email hola@vispaico.com</p>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default LaunchProgramClientPage;
