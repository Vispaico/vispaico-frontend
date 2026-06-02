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
    tag: "Company Brain",
    title: "Your company's knowledge. Instantly accessible.",
    description: "Stop losing time searching through documents, emails, drives, and internal systems. The Company Brain becomes the central intelligence layer for your organization.",
    price: "from $4,000 · retainer from $500/mo",
    href: "/services/company-brain",
    featured: true,
    badge: "Core product",
  },
  {
    tag: "Company Analyst",
    title: "Turn company data into decisions",
    description: "Ask business questions in plain language and receive immediate analysis. Connect your sales, operations, finance, and marketing data into one intelligent analyst.",
    price: "from $5,000 · retainer from $800/mo",
    href: "/services/company-analyst",
    featured: true,
    badge: "Core product",
  },
  {
    tag: "Company Operator",
    title: "Monitor operations before problems appear",
    description: "Continuously monitors workflows, projects, sales, support, and finance to identify risks and bottlenecks before they escalate.",
    price: "from $10,000 · managed from $2,000/mo",
    href: "/services/company-operator",
    featured: true,
    badge: "Core product",
  },
  {
    tag: "AI Operations Audit",
    title: "Find your highest-value AI opportunities",
    description: "Before implementing AI, identify where it will create measurable impact. Workflow analysis, knowledge mapping, and a clear roadmap.",
    price: "$1,500 – $3,000 fixed fee",
    href: "/services/ai-operations-audit",
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
            The AI workforce behind modern companies.
          </h1>
          <p className="mt-8 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            We don&apos;t sell software licenses or templates. We build, deploy,
            and manage complete AI systems for companies that are serious
            about competing in the next decade. Most businesses don&apos;t need more tools. They need a system that understands the business, connects knowledge and data, and helps teams make better decisions. Vispaico AIOS is built in three layers:
          </p>
        </div>
        <div className={container}>
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
