import type { Metadata } from 'next';

import { Link } from '@/i18n/navigation';

export const metadata: Metadata = {
  title: 'SEO Forecasting & Planning (That Actually Works) | Vispaico',
  description:
    "A transparent SEO forecasting model with three scenarios, monthly recalibration, and clear inputs (content velocity, rankings, links, technical health) so you can budget with confidence.",
  alternates: {
    canonical: 'https://vispaico.com/services/seo-forecasting'
  }
};

export default function SeoForecastingExplainerPage() {
  type FaqItem = {
    question: string;
    paragraphs: string[];
    bullets?: string[];
  };

  const faqItems: FaqItem[] = [
    {
      question: 'How accurate are SEO forecasts?',
      paragraphs: [
        "Real talk: ~78% accurate at 12 months based on tracked client data. SEO has too many variables for perfection.",
        "What matters is staying within ~20% of your forecast—that's considered accurate in the industry.",
        'Month 3 is usually too early to be confident. By month 6 you can see real trends. Month 9 gets clearer. Month 12 is where the model becomes reliably predictive.',
        'We track monthly and adjust. When actual results differ by more than ~20%, we identify why and update the forecast forward.'
      ]
    },
    {
      question: 'Why do most SEO forecasts fail?',
      paragraphs: [
        'Optimism bias, hidden methodology, and ignoring reality (competition + algorithm updates + execution variance).',
        'We show conservative, likely, and optimistic scenarios, explain the math, and account for what actually happens.'
      ]
    },
    {
      question: 'What data do you need to forecast accurately?',
      paragraphs: ['Minimum 12 months of performance history, plus your baseline and the plan you will actually execute.'],
      bullets: [
        'Organic traffic trends',
        'Ranking velocity (how fast positions improved)',
        'Indexing rates',
        'Backlink acquisition pace',
        'Current rankings (positions 1–50)',
        'Domain authority + backlink profile',
        'Technical health',
        'Planned publishing, link targets, technical improvements, budget'
      ]
    },
    {
      question: 'Why three scenarios instead of one number?',
      paragraphs: ['Because one number is a lie. Three scenarios set expectations and make the methodology explicit.'],
      bullets: [
        'Conservative (70% confidence): ~35–45% traffic growth',
        'Likely (50% confidence): ~60–80% traffic growth',
        'Optimistic (30% confidence): ~100–130% traffic growth'
      ]
    },
    {
      question: 'How does publishing frequency affect the timeline?',
      paragraphs: ['Publishing more = faster growth, but not linearly. SEO compounds due to indexing + ranking lag.'],
      bullets: ['10 articles/month: ~+30% month 6, ~+65% month 12', '20 articles/month: ~+50% month 6, ~+110% month 12', '5 articles/month: ~+15% month 6, ~+35% month 12']
    },
    {
      question: 'Can you guarantee specific traffic numbers?',
      paragraphs: [
        'No. Anyone who guarantees SEO outcomes is lying.',
        'What we guarantee: transparent assumptions, monthly tracking, and recalibration when reality changes.'
      ]
    },
    {
      question: 'What happens if results fall short of forecast?',
      paragraphs: [
        'We track monthly: traffic vs forecast, rankings vs predicted, content shipped vs plan, links acquired vs target.',
        "If you're off by more than ~20%, we diagnose why (algorithm, competition, content performance, execution) and adjust the forecast forward."
      ]
    },
    {
      question: 'How do you adjust for domain authority and competition?',
      paragraphs: ['Each keyword gets a baseline probability, then we adjust using real-world factors:'],
      bullets: [
        'Domain authority vs competitors (+10% if stronger, -10% if weaker)',
        'Content quality advantage (+15% if demonstrably better than what ranks)',
        'Backlink pace (+10% if faster than competitors, -10% if slower)'
      ]
    },
    {
      question: 'How often do you update the forecast?',
      paragraphs: ['Monthly. Forecasting is not one prediction; it is ongoing calibration based on reality.']
    }
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: [...item.paragraphs, ...(item.bullets ? item.bullets.map((bullet) => `• ${bullet}`) : [])].join('\n')
      }
    }))
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="container mx-auto px-6 py-16 md:py-24 space-y-14">
        <header className="max-w-3xl space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">Vispaico Growth Services</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">SEO Forecasting &amp; Planning</h1>
          <p className="text-lg text-blue-100/90">
            Forecasting isn&apos;t a promise. It&apos;s a transparent model + monthly recalibration so you can budget, execute, and know
            what &ldquo;on track&rdquo; actually means.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-7 py-3 text-base font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Talk to us about a forecast
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-blue-100 transition hover:border-orange-300/70 hover:text-white"
            >
              Back to Growth Services
            </Link>
          </div>
        </header>

        <nav aria-label="On this page" className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-200/80">On this page</h2>
          <ul className="mt-4 grid gap-2 text-blue-100/90 sm:grid-cols-2">
            <li>
              <a className="hover:text-white" href="#what-you-get">
                What you get
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#how-it-works">
                How it works
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#faq">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#proof-and-method">
                Proof + method
              </a>
            </li>
          </ul>
        </nav>

        <section id="what-you-get" className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-semibold">What you get</h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-2">
            <div className="space-y-4 text-blue-100/90">
              <p className="text-base">
                A forecast is only useful if it&apos;s tied to execution. This is designed to be a working document you can run for 12
                months.
              </p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Three-scenario forecast (conservative / likely / optimistic) with explicit confidence</li>
                <li>Keyword probability model (no fake &ldquo;we guarantee #1&rdquo; promises)</li>
                <li>Content velocity + indexing/ranking lag modeled (no linear-growth fantasy)</li>
                <li>Monthly check-ins to compare actual vs forecast and recalibrate</li>
                <li>Clear assumptions list (so everyone knows what changed when results move)</li>
              </ul>
            </div>
            <div className="space-y-4 text-blue-100/90">
              <p className="text-base">
                If you want the deep dive on the thinking behind this model, read the companion story:
              </p>
              <div className="flex flex-col gap-3">
                <Link
                  href="/library/stories/how-to-actually-predict-seo-results-without-lying-about-it"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300 hover:text-white"
                >
                  Read: How to Actually Predict SEO Results
                </Link>
                <Link
                  href="/library/stories/the-research-phase-nobody-budgets-for"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-blue-100 transition hover:border-orange-300/70 hover:text-white"
                >
                  Read: The Research Phase Nobody Budgets For
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-semibold">How it works</h2>
          <ol className="mt-6 space-y-4 text-blue-100/90">
            <li>
              <p className="font-semibold text-white">1) Baseline</p>
              <p className="mt-1">
                Pull 12+ months of organic performance, ranking distribution, indexing behavior, link pace, and technical health.
              </p>
            </li>
            <li>
              <p className="font-semibold text-white">2) Model</p>
              <p className="mt-1">
                Assign a realistic probability per keyword and adjust for authority, content quality, and link velocity.
              </p>
            </li>
            <li>
              <p className="font-semibold text-white">3) Scenarios</p>
              <p className="mt-1">
                Produce conservative/likely/optimistic outcomes based on execution variance and real-world disruption.
              </p>
            </li>
            <li>
              <p className="font-semibold text-white">4) Monthly recalibration</p>
              <p className="mt-1">
                Compare actual vs forecast. If variance exceeds ~20%, diagnose why and update the forward plan.
              </p>
            </li>
          </ol>
        </section>

        <section id="faq" className="rounded-3xl border border-white/10 bg-white/5 p-10 shadow-xl backdrop-blur-xl">
          <h2 className="text-3xl font-semibold">FAQ</h2>
          <div className="mt-8 max-w-4xl space-y-4">
            {faqItems.map((item) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-white/10 bg-slate-950/20 p-6 shadow-sm transition hover:border-orange-300/40"
              >
                <summary className="flex cursor-pointer items-start justify-between gap-6 text-left text-lg font-semibold text-white">
                  <span>{item.question}</span>
                  <span
                    aria-hidden
                    className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-500/20 text-orange-100 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-blue-100/90">
                  {item.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {item.bullets && (
                    <ul className="list-disc space-y-2 pl-5">
                      {item.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </details>
            ))}
          </div>
        </section>

        <section id="proof-and-method" className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-500/20 via-black to-blue-500/10 p-10 shadow-2xl backdrop-blur-xl">
          <h2 className="text-3xl font-semibold text-white">Proof + method (no black boxes)</h2>
          <p className="mt-4 text-blue-100/90 max-w-3xl">
            The goal isn&apos;t to sound confident. The goal is to be useful: clear inputs, clear assumptions, and a model you can
            recalibrate as Google and competitors move.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/library/stories/how-to-actually-predict-seo-results-without-lying-about-it"
              className="inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-6 py-3 text-sm font-semibold text-orange-100 transition hover:border-orange-300 hover:text-white"
            >
              Read the full methodology story
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.02]"
            >
              Get a forecast
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
