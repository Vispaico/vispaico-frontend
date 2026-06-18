"use client";

import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';

type Conviction = {
  title: string;
  body: string;
};

const convictions: Conviction[] = [
  {
    title: 'Ownership is the foundation.',
    body: "A business that runs on tools it doesn't control is one platform change away from a crisis. Every AI system, every model, every piece of infrastructure we deploy, the client owns it outright. No licensing traps. No vendor lock-in. No data leaving your control.",
  },
  {
    title: 'Privacy is not a feature. It is a requirement.',
    body: "Sending your company's sensitive data to third-party AI APIs is a liability we don't accept for our clients. Everything we build runs on private infrastructure: your servers, your models, your data, your rules. GDPR, data sovereignty, and competitive confidentiality are designed in from day one, not bolted on after.",
  },
  {
    title: 'Infrastructure control means strategic freedom.',
    body: "When you control the infrastructure, you control your future. You can adapt, scale, and pivot without asking anyone's permission or renegotiating a license. That's the difference between renting AI capability and owning your AI strategy.",
  },
  {
    title: 'Real partnerships outlast vendor relationships.',
    body: "We don't optimize for retainers. We optimize for outcomes. That means being honest when something isn't the right move, transferring full knowledge when we're done, and building systems that work without us. A partner who makes themselves indispensable is not a partner, we choose to be replaceable by design.",
  },
  {
    title: 'Custom deployment beats off-the-shelf every time.',
    body: "Your business is not a template. Your workflows, your data, your people, your constraints — they're unique. Off-the-shelf AI tools force you to adapt to them. Custom deployment adapts the system to you. That's the difference between a tool you fight with and infrastructure that works for you.",
  },
];

const AboutPageClient = () => {
  const contentWidth = 'mx-auto w-full max-w-[720px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* SECTION 1 — PAGE OPENER */}
      <section className="px-6 pt-[80px]">
        <div className={contentWidth}>
          <p
            className="text-[16px] leading-[1.8] text-[var(--text-secondary)] italic pb-[32px] border-b border-[var(--border)]"
          >
            Vispaico builds private AI operating systems for companies that take ownership, privacy, and infrastructure control seriously. We are not a marketing agency. We are not a generic AI consultancy. We deploy custom AI infrastructure on your servers, under your control, and we build long-term partnerships, not vendor dependencies. Based in Haiphong, Vietnam. Working with clients across the US, EU, LATAM, and SEA.
          </p>
        </div>
      </section>

      {/* SECTION 2 — MAIN EDITORIAL CONTENT */}
      <section className="px-6 pb-[96px]">
        <div className={contentWidth}>
          {/* — HEADING 1 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            I&apos;ve been building things for 20 years. This is what I learned.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            My name is Niels. I grew up in East Germany, spent years working across England, Belgium, and the Netherlands, mostly inside the automotive industry, moving between factories, client sites, and boardrooms where decisions got made slowly and shipped even slower.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            I wrote my first lines of code two decades ago after i moved to Spain. Since then I&apos;ve watched the technology change completely, three or four times over. What hasn&apos;t changed is the gap between what&apos;s technically possible and what most businesses actually have running.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            That gap is what Vispaico exists to close.
          </p>

          {/* — HEADING 2 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            Why Vietnam. Why now.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            After 15 years of airports, hotels, and meetings that moved nothing forward, I landed in Haiphong. Met my wife. Started a family. Decided I was done relocating every two years but not done building.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Vietnam gave me something I didn&apos;t expect, clarity. Away from the noise of European tech culture, I could see more plainly what businesses actually needed versus what the industry kept selling them. Expensive websites that didn&apos;t convert. AI tools bolted on as afterthoughts. Agencies that optimized for retainers, not results.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            I started Vispaico in 2019 with a straightforward conviction: build things properly, ship them fast, and make sure the client owns everything when you&apos;re done.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            That conviction hasn&apos;t changed. The scale of what we build has.
          </p>

          {/* — HEADING 3 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            What we build → private AI operating systems.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            We build private AI operating systems. That means a complete, integrated layer of AI infrastructure — deployed on your servers, trained on your data, controlled by your team that powers every part of your business.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            A Company Brain that knows your policies, products, and processes. A Company Analyst that turns your data into decisions. A Company Operator that watches your operations for risks and bottlenecks. All of it private. All of it owned by you.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            When I started Vispaico in 2019, the most valuable thing I could give a small business was a fast, modern website for a price that didn&apos;t require a board meeting. That still exists. But the more significant opportunity, the one that changes the trajectory of a company, is the full AI infrastructure layer. Private servers running your own language models. Agents trained on your specific business. Systems that operate without a team of people manually running them.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Most businesses know this is coming. Very few know how to build it, integrate it, and own it outright. That is the problem we solve, and it is the only work we care about.
          </p>

          {/* — HEADING 4 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            How we work → long-term partnerships, not vendor relationships.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            We take on a limited number of clients at any given time. Not as a scarcity tactic, because the quality of what we deliver depends on focused attention, and focused attention has a real limit.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Every client gets one point of contact. Every project has a clear scope before work begins. Every system we build gets documented, transferred, and deployed on infrastructure the client controls, nothing we build creates dependency on us.
          </p>

          {/* — CONVICTION SECTION — */}
          <div className="mt-[48px]">
            <div className="h-px w-full bg-[var(--border)]" />

            <div className="my-[40px] pl-[24px] border-l-[2px] border-[var(--border)]">
              <p className="text-[18px] font-[500] text-[var(--text-primary)] leading-[1.6] italic">
                We do not build dependency. We build capability that you own entirely, the infrastructure, models, code, and data. On your servers. Under your control. That is the only way we work.
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)] mb-[48px]" />
          </div>

          {/* — HEADING 5 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            What we stand for.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Twenty years of building things across five countries has left me with a few convictions about how technology should be built, owned, and operated.
          </p>

          {convictions.map((conviction, index) => (
            <div
              key={conviction.title}
              className={`mb-[28px] pb-[28px] ${
                index === convictions.length - 1
                  ? ''
                  : 'border-b border-[var(--border)]'
              }`}
            >
              <p className="text-[14px] font-[600] text-[var(--text-primary)] mb-[6px] tracking-[-0.01em]">
                {conviction.title}
              </p>
              <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.8]">
                {conviction.body}
              </p>
            </div>
          ))}

          {/* — HEADING 6 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            If you are reading this.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            You are probably evaluating whether Vispaico is the right team to build your private AI operating system. A Company Brain for your organization. A Company Analyst connected to your data. A Company Operator monitoring your operations.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            The best way to find out if we are the right fit is a 20-minute conversation. No pitch deck. No discovery process with five stakeholders. Just a direct conversation about what you are trying to build and whether we are the team to build it on your infrastructure, under your control.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            If we are not the right fit, we will tell you, and point you toward someone who is.
          </p>

          {/* — SIGNATURE BLOCK — */}
          <div className="mt-[48px] pt-[32px] border-t border-[var(--border)] flex items-center gap-[16px]">
            <Image
              src="/images/niels_ceo.webp"
              alt="Niels, Founder of Vispaico"
              width={64}
              height={64}
              className="rounded-full object-cover"
            />
            <div>
              <p className="text-[15px] font-[500] text-[var(--text-primary)]">— Niels</p>
              <p className="text-[13px] text-[var(--text-muted)] mt-[4px]">Founder, Vispaico</p>
              <p className="text-[13px] text-[var(--text-muted)] mt-[2px]">Haiphong, Vietnam</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — CTA BLOCK */}
      <section className="px-6 pb-[96px]">
        <div className={`${contentWidth} text-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-[40px]`}>
          <h3 className="text-[18px] font-[600] text-[var(--text-primary)]">
            Build Your Company&apos;s AI Workforce.
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-[1.75] mt-[10px] max-w-[400px] mx-auto">
            Start with knowledge. Expand into analytics. Evolve into a fully operational AI layer that continuously supports your business.
          </p>
          <div className="mt-[24px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#8A8880] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-white transition-opacity hover:opacity-90"
            >
              Book an AI Strategy Call →
            </Link>
          </div>
          <p className="text-[13px] text-[var(--text-muted)] mt-[12px]">
            or email{' '}
            <a
              href="mailto:niels@vispaico.com"
              className="text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              niels@vispaico.com
            </a>{' '}
            — I read and reply to everything personally.
          </p>
        </div>
      </section>
    </main>
  );
};

export default AboutPageClient;
