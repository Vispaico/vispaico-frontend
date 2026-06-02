"use client";

import React from 'react';
import { Link } from '@/i18n/navigation';
import { useContactModal } from '@/context/ContactModalContext';

const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
    {text}
  </p>
);

type Industry = {
  name: string;
  challenges: string[];
  useCases: string[];
  outcomes: string[];
};

const industries: Industry[] = [
  {
    name: 'Manufacturing',
    challenges: ['Production bottlenecks and downtime', 'Supply chain visibility gaps', 'Quality control inconsistencies', 'Knowledge loss from retiring workers'],
    useCases: ['Predictive maintenance monitoring', 'Production line optimization', 'Quality assurance automation', 'SOP knowledge base for floor workers'],
    outcomes: ['Reduced downtime by up to 30%', 'Improved production efficiency', 'Preserved critical manufacturing knowledge', 'Faster issue resolution on the floor'],
  },
  {
    name: 'Logistics',
    challenges: ['Route optimization complexity', 'Real-time tracking gaps', 'Warehouse inefficiencies', 'Driver and fleet management'],
    useCases: ['Dynamic route optimization', 'Real-time shipment tracking agents', 'Warehouse inventory automation', 'Fleet performance analytics'],
    outcomes: ['Reduced fuel costs by 15–25%', 'Improved on-time delivery rates', 'Warehouse throughput increase', 'Lower fleet maintenance costs'],
  },
  {
    name: 'Professional Services',
    challenges: ['Billable hours leakage', 'Knowledge silos between teams', 'Inefficient project reporting', 'Client communication delays'],
    useCases: ['Automated time and expense tracking', 'Firm-wide knowledge base', 'AI-powered project status reports', 'Automated client updates'],
    outcomes: ['Higher billable utilization', 'Faster project delivery', 'Improved knowledge sharing', 'Stronger client satisfaction'],
  },
  {
    name: 'Consulting',
    challenges: ['Research and analysis bottlenecks', 'Proposal creation inefficiencies', 'Expert knowledge fragmentation', 'Client deliverable consistency'],
    useCases: ['AI-assisted research and analysis', 'Automated proposal generation', 'Engagement knowledge base', 'Deliverable quality monitoring'],
    outcomes: ['Faster proposal turnaround', 'Higher win rates', 'Consistent deliverable quality', 'Scalable expertise across engagements'],
  },
  {
    name: 'Legal',
    challenges: ['Document review overload', 'Research inefficiencies', 'Contract management complexity', 'Compliance monitoring burden'],
    useCases: ['AI-powered document analysis', 'Legal research automation', 'Contract review and risk flagging', 'Compliance monitoring agents'],
    outcomes: ['80% faster document review', 'Reduced research time', 'Lower compliance risk', 'Increased attorney billable capacity'],
  },
  {
    name: 'Healthcare Administration',
    challenges: ['Patient data management', 'Appointment scheduling inefficiencies', 'Regulatory compliance burden', 'Staff communication gaps'],
    useCases: ['Administrative workflow automation', 'Smart appointment scheduling', 'Policy and compliance knowledge base', 'Internal staff Q&A agent'],
    outcomes: ['Reduced administrative overhead', 'Improved patient scheduling efficiency', 'Simplified compliance management', 'Better staff productivity'],
  },
  {
    name: 'Construction',
    challenges: ['Project timeline management', 'Document and blueprint control', 'Subcontractor coordination', 'Safety compliance tracking'],
    useCases: ['Project progress monitoring', 'Document and blueprint AI search', 'Subcontractor communication automation', 'Safety incident prediction'],
    outcomes: ['Fewer project delays', 'Reduced document retrieval time', 'Better subcontractor coordination', 'Improved safety record'],
  },
  {
    name: 'E-commerce',
    challenges: ['Customer support volume', 'Inventory management complexity', 'Personalization at scale', 'Order processing errors'],
    useCases: ['AI customer support agent', 'Demand forecasting and inventory optimization', 'Personalized product recommendations', 'Order fulfillment automation'],
    outcomes: ['24/7 customer support without extra staff', 'Reduced stockouts and overstock', 'Higher conversion rates', 'Lower order error rates'],
  },
  {
    name: 'B2B Services',
    challenges: ['Lead response time delays', 'Sales process inconsistency', 'Account management scalability', 'Service delivery tracking'],
    useCases: ['AI lead qualification and routing', 'Sales playbook automation', 'Account health monitoring', 'Service delivery analytics'],
    outcomes: ['Faster lead response times', 'Higher lead-to-customer conversion', 'Scalable account management', 'Improved service delivery metrics'],
  },
];

const IndustriesPageContent: React.FC = () => {
  const { openModal } = useContactModal();
  const container = 'mx-auto w-full max-w-[900px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* Hero */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <SectionLabel text="Industries" />
          <h1 className="mt-4 text-[clamp(36px,5vw,60px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            AI Systems Built For Your Industry
          </h1>
          <p className="mt-6 max-w-[560px] text-[20px] leading-[1.75] text-[var(--text-secondary)]">
            Every industry has unique challenges. We build private AI operating systems that address yours — from manufacturing floors to law firm document rooms.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={container}>
          <div className="mt-8 flex flex-col gap-12">
            {industries.map((industry) => (
              <article
                key={industry.name}
                className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7"
              >
                <h2 className="text-[22px] font-[600] text-[var(--text-primary)]">{industry.name}</h2>
                <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Common Challenges
                    </p>
                    <ul className="mt-3 space-y-2">
                      {industry.challenges.map((challenge) => (
                        <li key={challenge} className="text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      AI Use Cases
                    </p>
                    <ul className="mt-3 space-y-2">
                      {industry.useCases.map((useCase) => (
                        <li key={useCase} className="text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                      Expected Outcomes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {industry.outcomes.map((outcome) => (
                        <li key={outcome} className="text-[13px] leading-[1.75] text-[var(--text-secondary)]">
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={`${container} text-center`}>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1]">
            Don&apos;t see your industry?
          </h2>
          <p className="mx-auto mt-4 max-w-[560px] text-[16px] leading-[1.75] text-[var(--text-secondary)]">
            We work across many more industries. Tell us about your business and we&apos;ll show you what AI can do for your specific challenges.
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
        </div>
      </section>
    </main>
  );
};

export default IndustriesPageContent;
