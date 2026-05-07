"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

type ServiceCard = {
  tag: string;
  title: string;
  description: string;
  price: string;
  href: string;
  featured?: boolean;
  badge?: string;
};

const services: ServiceCard[] = [
  {
    tag: "AI Website + Agent",
    title: "A site that works while you sleep",
    description: "Next.js website with an embedded AI agent trained on your business. Handles leads, bookings, and FAQs around the clock — without hiring a single support person.",
    price: "from $3,500 · retainer from $300/mo",
    href: "/services/ai-website-agent",
    featured: true,
    badge: "Most requested",
  },
  {
    tag: "Infrastructure",
    title: "Your own private AI stack",
    description: "Self-hosted LLMs, Open WebUI, Postiz, and n8n on your company's servers. Full data ownership. No third-party exposure.",
    price: "from $5,000 · managed from $500/mo",
    href: "/services/private-ai-stack",
  },
  {
    tag: "SEO & Content",
    title: "Traffic that compounds",
    description: "AI-accelerated long-form content in EN, DE, and ES. Keyword strategy, CMS publishing, and organic leads — on autopilot within 90 days.",
    price: "from $1,200/mo",
    href: "/services/seo-content",
  },
  {
    tag: "Automation",
    title: "Workflows that eliminate manual work",
    description: "n8n pipelines, AI lead generation, CRM sync, and reporting automation. Built custom for your operations.",
    price: "from $2,500 per project",
    href: "/services/workflow-automation",
  },
  {
    tag: "Social Media",
    title: "One post becomes ten",
    description: "Full content creation, repurposing, and publishing across every platform. We run your entire social presence — you review and approve.",
    price: "from $1,800/mo · fully managed",
    href: "/services/social-media-automation",
  },
  {
    tag: "Consulting",
    title: "Your AI roadmap in two days",
    description: "We audit your operations, identify the highest-ROI automation wins, and hand you a prioritized 90-day plan.",
    price: "from $2,000 · workshop + full report",
    href: "/services/ai-consulting",
  },
  {
    tag: "Training",
    title: "Get your team using AI this week",
    description: "A focused 2-day workshop tailored to your industry, your tools, and your workflows. Practical skills, not theory.",
    price: "from $2,000 per session",
    href: "/services/ai-onboarding",
  },
  {
    tag: "E-Commerce",
    title: "A store that sells while you sleep",
    description: "Next.js storefront with AI product recommendations and an automated support agent. Built for conversion, not just looks.",
    price: "from $5,000",
    href: "/services/ai-ecommerce",
  },
];

const ServiceCardComponent = ({ service }: { service: ServiceCard }) => {
  const card = (
    <article
      className={`flex min-h-[240px] flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 transition-colors hover:border-[#444440] text-[var(--text-primary)]`}
      style={service.featured ? { borderColor: '#3a3a36' } : undefined}
    >
      {service.badge && (
        <div className="flex justify-end">
          <span className="rounded-[20px] border border-[var(--border)] bg-[var(--bg-elevated)] px-[10px] py-[3px] text-[10px] text-[var(--text-secondary)]">
            {service.badge}
          </span>
        </div>
      )}
      <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {service.tag}
      </span>
      <h3 className="mt-[10px] text-[18px] font-[600] text-[var(--text-primary)]">{service.title}</h3>
      <p className="mt-2 text-[14px] leading-[1.7] text-[var(--text-secondary)]">{service.description}</p>
      <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4 text-[13px] text-[var(--text-muted)]">
        <span>{service.price}</span>
        <span aria-hidden="true">→</span>
      </div>
    </article>
  );

  return (
    <Link href={service.href} className="group">
      {card}
    </Link>
  );
};

const ServicesOverviewContent: React.FC = () => {
  const { openModal } = useContactModal();
  const container = 'mx-auto w-full max-w-[1100px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero — no CTA, cards drive action */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="What we build" />
          <h1 className="mt-4 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            Every layer of your AI stack. Delivered.
          </h1>
          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            We don&apos;t sell software licenses or templates. We build, deploy,
            and manage complete AI systems for companies that are serious
            about competing in the next decade.
          </p>
        </div>
      </section>

      {/* 2×4 Services Grid */}
      <section id="services" className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Core services" />
          <h2 className="mt-4 text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            The full AI stack. Every layer covered.
          </h2>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCardComponent key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} text-center`}>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            Not sure which service fits?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            Tell us what you&apos;re trying to solve. We&apos;ll tell you exactly
            what to build — and whether we&apos;re the right team to do it.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              type="button"
              onClick={openModal}
              className="rounded-[7px] bg-[var(--accent)] px-6 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Book a free scoping call →
            </button>
          </div>
          <p className="mt-[10px] text-[12px] text-[var(--text-muted)]">
            No pitch. No pressure. Just clarity.
          </p>
        </div>
      </section>
    </main>
  );
};

export default ServicesOverviewContent;
