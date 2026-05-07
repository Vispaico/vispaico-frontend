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
    title: 'Speed is a form of respect.',
    body: "When you move fast and deliver what you said you'd deliver, you're telling the client their time matters. Most agencies haven't figured this out.",
  },
  {
    title: 'Ownership matters more than access.',
    body: "A business that runs on tools it doesn't control is one platform change away from a crisis. Everything we build — infrastructure, content, code — belongs to the client when we're done.",
  },
  {
    title: 'The best technology is invisible.',
    body: "A private AI stack your team uses without thinking about it. A website that loads before the user notices it loading. Automation that runs in the background while you focus on your actual business. That's what good looks like.",
  },
  {
    title: 'Small teams outbuild large ones when the brief is clear.',
    body: "We've never lost a project to a bigger agency because we moved slower. We've won work from bigger agencies because we moved faster and communicated better.",
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
            Vispaico is a small, focused team building AI operating systems for companies that are serious about competing in the next decade. We&apos;re based in Haiphong, Vietnam. We work with clients across US, EU, LATAM, and SEA.
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
            My name is Niels. I grew up in East Germany, spent years working across England, Belgium, and the Netherlands — mostly inside the automotive industry, moving between factories, client sites, and boardrooms where decisions got made slowly and shipped even slower.
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
            Vietnam gave me something I didn&apos;t expect — clarity. Away from the noise of European tech culture, I could see more plainly what businesses actually needed versus what the industry kept selling them. Expensive websites that didn&apos;t convert. AI tools bolted on as afterthoughts. Agencies that optimized for retainers, not results.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            I started Vispaico in 2019 with a straightforward conviction: build things properly, ship them fast, and make sure the client owns everything when you&apos;re done.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            That conviction hasn&apos;t changed. The scale of what we build has.
          </p>

          {/* — HEADING 3 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            What we build now — and why it matters.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            When I started, the most valuable thing I could give a small business was a fast, modern website in 72 hours for a price that didn&apos;t require a board meeting. That still exists. It still matters for the right client.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            But the more significant opportunity — the one that changes the trajectory of a company — is the full AI infrastructure layer. Private servers running your own language models. Agents trained on your specific business. Content and automation systems that operate without a team of people manually running them.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Most businesses know this is coming. Very few know how to build it, integrate it, and own it outright. That&apos;s the problem we solve with the Launch Program — and it&apos;s the work I find most interesting to do.
          </p>

          {/* — HEADING 4 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            How we work.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Small team. Deliberately.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            My oldest son joined Vispaico full-time — he grew up watching this business get built from the ground up and brings a perspective on what actually matters to the next generation of buyers and builders. My younger kids orbit the work too, in the way kids do when they grow up around a parent who builds things at the kitchen table.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            We take on a limited number of clients at any given time. Not as a scarcity tactic — because the quality of what we deliver depends on focused attention, and focused attention has a real limit.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Every client gets one point of contact. Every project has a clear scope before work begins. Every system we build gets documented and transferred — nothing we build creates dependency on us.
          </p>

          {/* — CONVICTION SECTION — */}
          <div className="mt-[48px]">
            <div className="h-px w-full bg-[var(--border)]" />

            <div className="my-[40px] pl-[24px] border-l-[2px] border-[var(--border)]">
              <p className="text-[18px] font-[500] text-[var(--text-primary)] leading-[1.6] italic">
                Everything we build belongs to the client when we&apos;re done. No licensing. No lock-in. No dependency on us. That&apos;s not a selling point — it&apos;s just how it should work.
              </p>
            </div>

            <div className="h-px w-full bg-[var(--border)] mb-[48px]" />
          </div>

          {/* — HEADING 5 — */}
          <h2 className="text-[22px] font-[600] text-[var(--text-primary)] mt-[56px] mb-[16px] tracking-[-0.02em]">
            What I believe.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            Twenty years of building things across five countries has left me with a few convictions I don&apos;t argue about anymore.
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
            If you&apos;re reading this.
          </h2>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            You&apos;re probably evaluating whether Vispaico is the right team for something significant. A full AI infrastructure build. A 6-month Launch Program. A long-term content and automation partnership.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            The best way to find out if we&apos;re the right fit is a 20-minute conversation. No pitch deck. No discovery process with five stakeholders. Just a direct conversation about what you&apos;re trying to build and whether we&apos;re the team to build it.
          </p>

          <p className="text-[15px] font-[400] text-[var(--text-secondary)] leading-[1.85] mb-[16px]">
            If we&apos;re not the right fit, we&apos;ll tell you — and point you toward someone who is.
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
            Let&apos;s talk about what you&apos;re building.
          </h3>
          <p className="text-[14px] text-[var(--text-secondary)] leading-[1.75] mt-[10px] max-w-[400px] mx-auto">
            A 20-minute call. No pitch. Just a direct conversation about whether we&apos;re the right team for your project.
          </p>
          <div className="mt-[24px]">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-[7px] bg-[#8A8880] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-white transition-opacity hover:opacity-90"
            >
              Book a 20-minute call →
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
