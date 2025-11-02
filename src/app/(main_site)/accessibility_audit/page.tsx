import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Accessibility Audit Service | Vispaico',
  description:
    'Ensure your website is truly accessible to everyone. Comprehensive audits, formal certiﬁcation, and ongoing compliance support.',
};

const services = [
  {
    icon: '🔍',
    title: 'Accessibility Audit',
    description:
      'A comprehensive analysis of your website against WCAG 2.2 AA, EN 301 549, and EU regulations. We identify barriers, prioritize ﬁxes, and provide actionable recommendations.',
    bullets: [
      'Full WCAG 2.2 AA assessment',
      'Automated + manual testing',
      'Detailed audit report with screenshots',
      'Priority-ranked issues (Critical, High, Medium, Low)',
      'Remediation recommendations',
      '60-minute consultation call',
    ],
    price: '$990',
    duration: 'One-time | 5-7 business days',
  },
  {
    icon: '✅',
    title: 'Compliance Certiﬁcation',
    description:
      'After remediation, we formally certify your website as WCAG 2.2 AA compliant. Receive an olicial certiﬁcate and badge to display on your site.',
    bullets: [
      'Full re-audit after ﬁxes',
      'Veriﬁcation of all remediated issues',
      'Formal WCAG 2.2 AA certiﬁcate',
      'Website badge & certiﬁcate (to display)',
      'Compliance documentation',
      'Certiﬁcate valid for 12 months',
    ],
    price: '$590',
    duration: 'One-time | 3-5 business days',
  },
  {
    icon: '🔄',
    title: 'Annual Compliance Review',
    description:
      'Ongoing compliance assurance. We perform yearly audits to ensure your site stays accessible as it evolves, and provide minor ﬁxes included.',
    bullets: [
      'Annual WCAG 2.2 AA audit',
      'New content & feature assessment',
      'Up to 5 minor ﬁxes included',
      'Updated compliance report',
      'Certiﬁcate renewal',
      '2 consultation calls per year',
    ],
    price: '$450/year',
    duration: 'Recurring annual service',
  },
];

const whyCards = [
  {
    icon: '👥',
    title: '15% of the Population',
    text:
      'Over 1.3 billion people worldwide have disabilities. An inaccessible site excludes them—and their business.',
  },
  {
    icon: '⚖',
    title: 'Legal Compliance',
    text:
      'The EU Accessibility Act (EAA) and BFSG require compliance. Non-compliance can result in signiﬁcant ﬁnes and legal exposure.',
  },
  {
    icon: '📈',
    title: 'Better for Everyone',
    text:
      'Accessible design improves SEO, user experience, and conversion rates. It’s not just ethical—it’s smart business.',
  },
  {
    icon: '🏆',
    title: 'Build Trust',
    text:
      'Formal WCAG 2.2 AA certiﬁcation signals your commitment to inclusivity and attracts socially conscious customers.',
  },
];

const standards = [
  {
    title: 'WCAG 2.2 AA',
    description:
      'Web Content Accessibility Guidelines—the global standard for web accessibility. Level AA is the recommended compliance level.',
  },
  {
    title: 'EN 301 549',
    description:
      'European standard for digital accessibility. Speciﬁcally applies to ICT products and services in the EU.',
  },
  {
    title: 'EU Accessibility Act (EAA)',
    description:
      'Mandatory for all websites and apps. Non-compliance can result in ﬁnes and legal action. Enforcement began in 2025.',
  },
  {
    title: 'BFSG (Germany)',
    description:
      'German Barrier-free Strengthening Act. Additional regulations for websites targeting German users or businesses.',
  },
];

export default function AccessibilityAuditPage() {
  return (
    <div className="bg-gradient-to-br from-gray-950 via-slate-950 to-blue-950 text-white">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-transparent" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-blue-200">
            ✓ WCAG 2.2 AA | EN 301 549 | EU Accessibility Act Compliant
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Accessibility Audit Service</h1>
          <p className="max-w-3xl text-lg text-blue-100">
            Ensure your website is truly accessible to everyone. Comprehensive audits, formal certiﬁcation, and ongoing compliance support.
          </p>
          <Link
            href="#services"
            className="inline-flex rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6" id="why">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Why Accessibility Matters</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur"
              >
                <div className="mb-4 text-3xl">{card.icon}</div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="mt-3 text-base text-blue-100">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Our Accessibility Services</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex h-full flex-col rounded-3xl border border-white/10 bg-gray-950/80 p-8 shadow-xl">
                <div className="text-3xl">{service.icon}</div>
                <h3 className="mt-4 text-2xl font-semibold text-white">{service.title}</h3>
                <p className="mt-4 text-base text-blue-100">{service.description}</p>
                <ul className="mt-6 space-y-2 text-base text-blue-100">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-2xl font-bold text-orange-300">{service.price}</div>
                <div className="text-base text-blue-200">{service.duration}</div>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Select Plan
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-gray-950 via-slate-900 to-blue-950 p-10 px-6 text-center shadow-2xl md:px-16">
          <h2 className="text-3xl font-bold md:text-4xl">Complete Accessibility Package</h2>
          <p className="mt-6 text-base text-blue-100">
            Get everything you need for full accessibility compliance, all in one package.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: '🔍',
                title: 'Accessibility Audit',
                subtitle: 'Full WCAG 2.2 AA assessment + recommendations',
              },
              {
                icon: '✅',
                title: 'Compliance Certiﬁcation',
                subtitle: 'Re-audit + formal certiﬁcate + badge',
              },
              {
                icon: '🔄',
                title: 'Annual Review (Year 1)',
                subtitle: 'First year compliance check included',
              },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <strong className="text-white">{item.title}</strong>
                  <p className="text-base text-blue-100">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-sm font-semibold text-orange-300">Save $440 | Normally $2,030</div>
          <div className="mt-4 text-3xl font-bold text-white">$1,590</div>
          <p className="mt-4 text-base text-blue-100">
            Everything you need for complete compliance, start to ﬁnish.
          </p>
          <Link
            href="#contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Get Complete Package
          </Link>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">What If Your Audit Finds Issues?</h2>
          <div className="mt-8 space-y-6 text-sm text-blue-100">
            <h3 className="text-2xl font-semibold text-white">Scope-Based Remediation Pricing</h3>
            <p className="text-base">
            If your audit identiﬁes accessibility issues, the cost to ﬁx them depends entirely on the scope and complexity of work required. There’s no ﬁxed price because every website is dilerent.
            </p>
            <p className="text-base">
              <strong>Here’s how it works:</strong> After the audit, we’ll provide a detailed remediation proposal breaking down exactly what needs to be ﬁxed, why, and the estimated cost based on your speciﬁc issues.
            </p>
          </div>

          <h3 className="mt-12 text-center text-2xl font-semibold text-white">Typical Remediation Scenarios</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: '🟡 Minimal Issues',
                scope: 'Scope: A few low-complexity ﬁxes (alt text, color contrast, ARIA labels)',
                cost: 'Estimated Cost: $500 - $1,500',
                timeline: 'Timeline: 3-5 days',
              },
              {
                title: '🟠 Moderate Issues',
                scope: 'Scope: Multiple issues requiring code updates, form improvements, keyboard navigation ﬁxes',
                cost: 'Estimated Cost: $1,500 - $4,000',
                timeline: 'Timeline: 1-2 weeks',
              },
              {
                title: '🔴 Major Issues',
                scope: 'Scope: Signiﬁcant structural changes, design system updates, accessibility rebuild',
                cost: 'Estimated Cost: $4,000+',
                timeline: 'Timeline: 2-4 weeks+',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-gray-950/80 p-6">
                <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                <p className="mt-3 text-base text-blue-100">{item.scope}</p>
                <p className="mt-3 text-base text-blue-100">{item.cost}</p>
                <p className="mt-3 text-base text-blue-100">{item.timeline}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-8 text-base text-blue-100">
            <h3 className="text-2xl font-semibold text-white">Our Guarantee</h3>
            <p className="mt-4">
              We provide a transparent, itemized proposal before we start any remediation work. No surprises. You’ll know exactly what’s included, how long it takes, and what it costs—before we lift a ﬁnger.
            </p>
            <p className="mt-4">
              And if you choose Vispaico to handle the ﬁxes, we include a re-audit and certiﬁcation package as part of the deal.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/20 via-transparent to-red-600/20 p-10 text-center shadow-xl">
          <blockquote className="text-xl font-medium text-white">
            “We didn’t realize how many users we were excluding until the audit. The ﬁndings were eye-opening, and the certiﬁcation gave us conﬁdence we’re truly accessible now. ”
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-white/20" aria-hidden="true" />
            <div className="text-left text-sm text-blue-100">
              <h4 className="text-lg font-semibold text-white">Sarah M.</h4>
              <p>SaaS Company Founder</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-center text-3xl font-bold md:text-4xl">Compliance Standards We Meet</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {standards.map((standard) => (
              <div key={standard.title} className="rounded-2xl border border-white/10 bg-gray-950/80 p-8 shadow-lg">
                <h4 className="text-xl font-semibold text-white">{standard.title}</h4>
                <p className="mt-3 text-base text-blue-100">{standard.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/15 via-red-600/10 to-transparent p-12 text-center shadow-2xl">
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Ensure Your Website Is Truly Accessible?</h2>
          <p className="mt-6 text-base text-blue-100">
            Start with an audit and get clear, actionable insights into your site’s accessibility status. From there, we’ll guide you toward full compliance.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Start Your Audit Today
          </Link>
          <div className="mt-6 text-sm text-blue-200">
            Questions?{' '}
            <Link href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
              Email us
            </Link>{' '}
            or schedule a free consultation.
          </div>
        </div>
      </section>
    </div>
  );
}
