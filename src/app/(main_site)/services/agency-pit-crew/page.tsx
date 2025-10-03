// /src/app/(main_site)/services/agency-pit-crew/page.tsx

'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGaugeHigh,
  faCalendarXmark,
  faUserSlash,
  faScrewdriverWrench,
  faFileLines,
  faLaptopCode,
  faRocket,
  faClock,
  faBolt,
  faTriangleExclamation,
  faCheckCircle,
  faArrowRight,
  faEnvelope,
  faPlus,
  faPhone
} from '@fortawesome/free-solid-svg-icons';

const pitCrewBriefPath = '/services/agency-pit-crew/brief';

const painPoints = [
  {
    icon: faGaugeHigh,
    title: "WordPress is Killing Your Credibility",
    description:
      "Your clients expect fast, modern sites. You’re stuck explaining why their homepage takes 6 seconds to load.",
  },
  {
    icon: faCalendarXmark,
    title: "Deadlines Are Piling Up",
    description:
      "Three projects due next week. Your dev team is already working weekends. Something’s gotta give.",
  },
  {
    icon: faUserSlash,
    title: "You’re Turning Down Work",
    description:
      "Great clients, profitable projects—but you can’t say yes because you don’t have the hands to build it.",
  },
  {
    icon: faScrewdriverWrench,
    title: "You Know WordPress Isn’t the Answer",
    description:
      "React, Gatsby, Vite—you know these are better. But you don’t have time to learn or rebuild everything.",
  },
];

const solutionHighlights = [
  "Full websites (React, Gatsby, Vite)",
  "High-converting landing pages",
  "WordPress escapes (we migrate + modernize)",
  "Deployment included, every time",
  "1 month maintenance after delivery",
];

const differentiators = [
  "You Keep the Credit — We’re invisible. The win is yours.",
  "We Speak Human — No dev jargon. Just clear updates and fast results.",
  "Built for Speed — 24-hour delivery starts here. Need it faster? We’ve got you.",
];

const processSteps = [
  {
    icon: faFileLines,
    title: "Brief Us",
    description:
      "Fill out our project form (takes 1 minute) or jump on a quick chat. Tell us what’s stuck, what you need, and when you need it.",
  },
  {
    icon: faLaptopCode,
    title: "We Build",
    description:
      "You’ll get a timeline within 1 hour. Then we get to work. You’ll see progress updates, not radio silence.",
  },
  {
    icon: faRocket,
    title: "You Launch",
    description:
      "We deliver, deploy, and hand you the keys. Tested, shipped, and ready to show your client. Plus 1 month of maintenance included.",
  },
];

const pricingTiers = [
  {
    name: "Standard",
    speed: "24-Hour Delivery",
    description: "Perfect for projects with a little breathing room",
    features: [
      "Full build (website or landing page)",
      "React, Gatsby, or Vite",
      "Deployment + setup",
      "3 months maintenance",
      "Unlimited revisions during build",
    ],
    examples: [
      "5-page marketing site: $2,400",
      "Landing page with form integration: $800",
      "WordPress → React migration: $3,200",
    ],
    cta: "Request a Quote",
    href: pitCrewBriefPath,
    accent: "from-emerald-400 to-emerald-600",
    icon: faClock,
  },
  {
    name: "Rush",
    speed: "12-Hour Delivery",
    description: "Perfect for ‘client meeting is tomorrow’ situations",
    features: [
      "Everything in Standard",
      "Priority queue (we start immediately)",
      "Real-time progress updates",
      "Off-hours support",
    ],
    examples: [
      "5-page marketing site: $3,600 (+50%)",
      "Landing page with form integration: $1,200 (+50%)",
      "WordPress → React migration: $4,800 (+50%)",
    ],
    cta: "I Need This Yesterday",
    href: pitCrewBriefPath,
    accent: "from-amber-400 to-amber-600",
    icon: faBolt,
  },
  {
    name: "Emergency",
    speed: "6-Hour Delivery",
    description: "Perfect for launch day emergencies",
    features: [
      "Everything in Rush",
      "Dedicated team (we drop everything)",
      "Direct line to us",
      "Live collaboration if needed",
    ],
    examples: [
      "5-page marketing site: $4,800 (+100%)",
      "Landing page with form integration: $1,600 (+100%)",
      "Critical fixes/launches: Custom quote (we’ll tell you in 15 min)",
    ],
    cta: "Emergency Request",
    href: pitCrewBriefPath,
    accent: "from-rose-500 to-red-600",
    icon: faTriangleExclamation,
  },
];

const stats = [
  { label: "Projects Delivered", value: "138+" },
  { label: "In Action Since", value: "2019" },
  { label: "Avg. Turnaround", value: "24hr" },
  { label: "On-Time Delivery", value: "100%" },
];

const logos = [
  'NorthPeak Creative',
  'ForgeLab Agency',
  'Signal Studio',
  'Brightside Collective',
  'EchoWave Media',
  'Canvas & Co.',
];

const testimonials = [
  {
    quote:
      "We had a client site that needed to launch before a major press feature. Vispaico turned it around in 14 hours—fully deployed, no issues. Saved our reputation.",
    author: "Creative Director",
    role: "Boutique Agency",
  },
  {
    quote:
      "Our team was stuck maintaining slow WordPress sites we built years ago. The Pit Crew modernized three of them in one week. Our clients are thrilled, and we’re not embarrassed anymore.",
    author: "Founder",
    role: "Marketing Agency",
  },
  {
    quote:
      "We landed a dream client but didn’t have the dev capacity. Vispaico became our invisible team—delivered flawlessly, and the client never knew. We’re using them for everything now.",
    author: "Agency Owner",
    role: "Design Studio",
  },
];

const fitChecklist = [
  "You’re an agency, studio, or consultancy with more work than hands",
  "You need websites or landing pages built, but dev is your bottleneck",
  "You’re tired of explaining why WordPress is slow (and want to escape it)",
  "You’ve turned down projects because you couldn’t deliver on time",
  "You want a dev partner who’s fast, reliable, and invisible to your clients",
];

const faqs = [
  {
    question: "Do we have to commit to a retainer?",
    answer:
      "Nope. One project, ongoing support, or somewhere in between—you choose. No long-term contracts unless you want one.",
  },
  {
    question: "What if we need changes after delivery?",
    answer:
      "You get 1 month of maintenance included. Tweaks, fixes, updates—we’ve got you covered.",
  },
  {
    question: "Can you work with our existing design/brand?",
    answer:
      "Absolutely. You provide the design, we build it. Or we can collaborate on design if needed.",
  },
  {
    question: "How do revisions work?",
    answer:
      "Unlimited revisions during the build phase. We don’t stop until you’re happy to show it to your client.",
  },
  {
    question: "What if our client wants to own the code?",
    answer: "It’s theirs. Full ownership, clean code, documented so anyone can maintain it.",
  },
  {
    question: "Do you sign NDAs?",
    answer: "Yes, every time. Your clients never know we exist unless you want them to.",
  },
  {
    question: "Can you handle backend/database work?",
    answer: "Yes. We’re not just frontend—if it needs to work, we build it.",
  },
  {
    question: "What happens if we miss a deadline?",
    answer:
      "We haven’t yet. If something goes sideways on our end, you’ll know immediately—and we’ll make it right.",
  },
];

export default function AgencyPitCrewPage() {
  return (
    <div className="bg-gray-950 text-gray-100">
      <main className="flex flex-col">
        <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.15),_transparent_60%)]" />
          <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-12 px-6 py-20 lg:grid lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Agency Pit Crew</p>
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Your Agency’s Secret Weapon When Deadlines Won’t Wait
              </h1>
              <p className="text-lg text-gray-300 lg:text-xl">
                We build websites and landing pages for agencies who can’t afford to say “not yet” to their clients. Modern tech. Fast delivery. You keep the credit.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href={pitCrewBriefPath}
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  Start a Project
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-lg border border-orange-500/50 px-6 py-3 text-lg font-semibold text-orange-300 transition duration-300 hover:border-orange-300 hover:text-orange-200"
                >
                  See Pricing Examples
                </Link>
              </div>
            </div>
            <div className="grid gap-4">
              <div className="flex flex-col gap-4 rounded-3xl bg-gray-900/60 p-6 shadow-lg backdrop-blur">
                <div className="flex flex-col gap-3 rounded-2xl border border-red-500/50 bg-gradient-to-br from-red-500/20 to-transparent p-5">
                  <span className="text-sm font-semibold uppercase tracking-widest text-red-300">Before</span>
                  <p className="text-sm text-gray-300">Cluttered WordPress dashboard, stressed team, deadline alerts everywhere.</p>
                </div>
                <div className="flex flex-col gap-3 rounded-2xl border border-emerald-500/50 bg-gradient-to-br from-emerald-500/20 to-transparent p-5">
                  <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">After</span>
                  <p className="text-sm text-gray-200">Clean, modern site launching fast. Happy client. Your logo on the deck.</p>
                </div>
              </div>
              <div className="rounded-3xl border border-gray-800 bg-gray-900/60 p-6 backdrop-blur">
                <p className="text-sm uppercase tracking-[0.3em] text-gray-400">Speed Readout</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-emerald-400">24h</span>
                  <span className="text-sm text-gray-400">Avg. Delivery</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-gray-800">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900/70 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">The Problem</p>
              <h2 className="mt-4 text-4xl font-bold">Sound Familiar?</h2>
              <p className="mt-3 text-lg text-gray-300">
                You shouldn’t have to choose between quality, speed, and keeping clients happy.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {painPoints.map((point) => (
                <div key={point.title} className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6 shadow-lg transition hover:-translate-y-1 hover:border-amber-400/60">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/20 text-amber-300">
                    <FontAwesomeIcon icon={point.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{point.title}</h3>
                  <p className="mt-3 text-sm text-gray-400">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-sm uppercase tracking-[0.4em] text-amber-400">The Solution</p>
                <h2 className="text-4xl font-bold text-white">Meet Your Agency Pit Crew</h2>
                <p className="text-lg text-gray-300">
                  We’re the dev team you call when your pipeline’s full and your deadline’s tomorrow. No long onboarding, no tech jargon, no surprises—just modern websites and landing pages delivered fast, so you can keep your clients (and your sanity).
                </p>
                <div>
                  <h3 className="text-xl font-semibold text-white">What We Build</h3>
                  <ul className="mt-4 space-y-3">
                    {solutionHighlights.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="mt-1 h-4 w-4 text-emerald-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div className="rounded-3xl border border-gray-800 bg-gray-900/80 p-8">
                  <h3 className="text-xl font-semibold text-white">What Makes Us Different</h3>
                  <ul className="mt-4 space-y-4 text-gray-300">
                    {differentiators.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-amber-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl border border-emerald-500/30 bg-gradient-to-r from-emerald-500/20 to-transparent p-8">
                  <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Before / After</p>
                  <p className="mt-3 text-gray-200">
                    Before: WordPress chaos, overloaded devs, missed deadlines.
                  </p>
                  <p className="mt-2 text-gray-200">
                    After: Lightning-fast builds, calm clients, your agency looking like the hero.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-900/60 py-20">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">How It Works</p>
              <h2 className="mt-4 text-4xl font-bold">Dead Simple Process</h2>
              <p className="mt-3 text-lg text-gray-300">From “we’re stuck” to “it’s live” in as fast as 24 hours.</p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {processSteps.map((step, index) => (
                <div key={step.title} className="relative rounded-3xl border border-gray-800 bg-gray-950/70 p-8 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                      <FontAwesomeIcon icon={step.icon} className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold text-gray-500">Step {index + 1}</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-sm text-gray-400">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <div className="absolute -right-6 top-1/2 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-800 lg:flex">
                      <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 text-gray-500" />
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Link
                href={pitCrewBriefPath}
                className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Start Your Project
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Turnaround & Pricing</p>
              <h2 className="mt-4 text-4xl font-bold">Speed That Fits Your Panic Level</h2>
              <p className="mt-3 text-lg text-gray-300">Pricing based on real projects. No hidden fees, no surprise invoices.</p>
            </div>
            <div className="mt-12 grid gap-8 lg:grid-cols-3">
              {pricingTiers.map((tier) => (
                <div
                  key={tier.name}
                  className="group relative flex flex-col rounded-3xl border border-gray-800 bg-gray-950/80 p-8 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-orange-400/70"
                >
                  <div className={`absolute inset-x-0 top-0 h-1 rounded-t-3xl bg-gradient-to-r ${tier.accent}`} />
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.3em] text-gray-500">{tier.name}</p>
                      <h3 className="mt-2 text-3xl font-semibold text-white">{tier.speed}</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-500/20 text-orange-300">
                      <FontAwesomeIcon icon={tier.icon} className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-gray-400">{tier.description}</p>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-amber-300">What you get</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-2">
                          <span className="text-emerald-400">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-sm font-semibold uppercase tracking-widest text-amber-300">Example projects</h4>
                    <ul className="mt-3 space-y-2 text-sm text-gray-300">
                      {tier.examples.map((example) => (
                        <li key={example}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex-1" />
                  <Link
                    href={tier.href}
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-300 group-hover:scale-105"
                  >
                    {tier.cta}
                    <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-gray-400">
              Pricing varies by scope. These are real examples. Fill out our brief for an exact quote within 1 hour.
            </p><br/>
            <p className="text-sm text-center text-gray-400">Prefer direct contact? Email us at: {' '} <span>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4 text-orange-400" /></span>
              <a href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
              crew@vispaico.com
              </a> | Emergency Phone 24/7:{' '}
              <a href="tel:+84822992665" className="text-orange-300 underline-offset-2 hover:underline"><FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4 text-orange-400" />
              +84 (0) 822 992 665
              </a>
            </p>
          </div>
        </section>

        <section className="bg-gray-900/70 py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-8">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Proof (*Anonymised)</p>
                  <h2 className="mt-4 text-4xl font-bold">Agencies Who Trust Us to Deliver</h2>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-2xl border border-gray-800 bg-gray-950/70 p-6">
                      <p className="text-3xl font-bold text-emerald-400">{stat.value}</p>
                      <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-gray-400">We’ve shipped for</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {logos.map((logo) => (
                      <div key={logo} className="flex h-16 items-center justify-center rounded-xl border border-gray-800 bg-gray-950/70 text-sm font-semibold text-gray-400">
                        {logo}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                {testimonials.map((testimonial) => (
                  <blockquote key={testimonial.quote} className="rounded-3xl border border-gray-800 bg-gray-950/80 p-8 shadow-lg">
                    <p className="text-lg text-gray-200">“{testimonial.quote}”</p>
                    <footer className="mt-4 text-sm text-gray-400">
                      — {testimonial.author}, {testimonial.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Who It’s For</p>
              <h2 className="mt-4 text-4xl font-bold">You’re a Perfect Fit If:</h2>
            </div>
            <div className="mt-10 space-y-4">
              {fitChecklist.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-gray-800 bg-gray-950/70 p-5">
                  <FontAwesomeIcon icon={faCheckCircle} className="mt-1 h-5 w-5 text-emerald-400" />
                  <p className="text-base text-gray-300">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-lg text-gray-300">If you checked even one box, we should talk.</p>
            <div className="mt-8 flex justify-center">
              <Link
                href={pitCrewBriefPath}
                className="inline-flex items-center rounded-full border border-gray-700 px-6 py-3 text-base font-semibold text-gray-100 transition hover:border-orange-400 hover:text-orange-200"
              >
                Let’s Talk About Your Project
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
            </div><br/>
            <p className="text-sm text-center text-gray-400">Prefer direct contact? Email us at: {' '} <span>
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4 text-orange-400" /></span>
              <a href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
              crew@vispaico.com
              </a> | Emergency Phone 24/7:{' '}
              <a href="tel:+84822992665" className="text-orange-300 underline-offset-2 hover:underline"><FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4 text-orange-400" />
              +84 (0) 822 992 665
              </a>
            </p>
          </div>
        </section>

        <section className="bg-gray-900/80 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm uppercase tracking-[0.4em] text-amber-400">FAQ</p>
              <h2 className="mt-4 text-4xl font-bold">Questions You’re Probably Asking</h2>
            </div>
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-gray-800 bg-gray-950/70 p-6 transition hover:border-orange-400/70"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
                    <span>{faq.question}</span>
                    <FontAwesomeIcon
                      icon={faPlus}
                      className="ml-4 h-3 w-3 text-gray-500 transition group-open:rotate-45 group-open:text-orange-300"
                    />
                  </summary>
                  <p className="mt-4 text-sm text-gray-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-500/10 to-transparent" />
          <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-3xl border border-gray-800 bg-gray-950/80 p-12 text-center shadow-2xl">
            <p className="text-sm uppercase tracking-[0.4em] text-amber-400">Final Call</p>
            <h2 className="text-4xl font-bold text-white">Got a Project That’s Stressing You Out?</h2>
            <p className="text-lg text-gray-300">
              Fill out our 1-minute brief and we’ll tell you exactly how fast we can turn it around—usually within 1 hour.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                href={pitCrewBriefPath}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
              >
                Start a Project
                <FontAwesomeIcon icon={faArrowRight} className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href={pitCrewBriefPath}
                className="inline-flex items-center justify-center rounded-full border border-gray-700 px-8 py-3 text-lg font-semibold text-gray-100 transition hover:border-orange-400 hover:text-orange-200"
              >
                Just Ask a Question
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 h-4 w-4 text-orange-400" />
              Email us at{' '}
              <a href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
                crew@vispaico.com
              </a>
            </p>
            <p className="text-sm text-gray-400">
              <FontAwesomeIcon icon={faPhone} className="mr-2 h-4 w-4 text-orange-400" />
              Emergency Phone 24/7:{' '}
              <a href="tel:+84822992665" className="text-orange-300 underline-offset-2 hover:underline">
                +84 (0) 822 992 665
              </a>
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
