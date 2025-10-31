import React from 'react';

type Status = 'positive' | 'neutral' | 'negative';

const categories = ['Speed', 'Conversion Clarity', 'Quality', 'Scalability', 'Cost-Efficiency'];

type RowConfig = {
  name: string;
  description: string;
  tone: 'highlight' | 'default';
  cells: { status: Status; text: string }[];
};

const rows: RowConfig[] = [
  {
    name: 'Vispaico',
    description: 'Sprint builds with senior dev oversight',
    tone: 'highlight',
    cells: [
      { status: 'positive', text: 'Live in days, not months' },
      { status: 'positive', text: 'Copy that converts, not placeholders' },
      { status: 'positive', text: 'React sites built to last' },
      { status: 'positive', text: 'Grow without rebuilding' },
      { status: 'positive', text: 'No surprises, no retainers' }
    ]
  },
  {
    name: 'In-house Team',
    description: 'Hiring designers & devs internally',
    tone: 'default',
    cells: [
      { status: 'negative', text: 'Months to hire and ramp' },
      { status: 'neutral', text: 'They know your product, not marketing' },
      { status: 'positive', text: 'Deep brand understanding eventually' },
      { status: 'negative', text: 'Output stops when bandwidth hits' },
      { status: 'negative', text: 'Salaries, benefits, tools—costs add up' }
    ]
  },
  {
    name: 'Agencies',
    description: 'Traditional retainers & scopes',
    tone: 'default',
    cells: [
      { status: 'negative', text: 'Scope creep and endless meetings' },
      { status: 'negative', text: 'Cookie-cutter positioning' },
      { status: 'neutral', text: 'Polished but inflexible' },
      { status: 'negative', text: 'Changes cost more than building' },
      { status: 'negative', text: 'Retainers drain budget fast' }
    ]
  },
  {
    name: 'Freelancers',
    description: 'Solo builders & part-timers',
    tone: 'default',
    cells: [
      { status: 'negative', text: 'Wait for their queue to clear' },
      { status: 'negative', text: 'Conversion thinking varies wildly' },
      { status: 'neutral', text: 'Quality is inconsistent' },
      { status: 'negative', text: "Can't handle growth or 24/7 needs" },
      { status: 'neutral', text: 'Cheap upfront, expensive to maintain' }
    ]
  },
  {
    name: 'AI Tools',
    description: 'DIY prompt-based sites',
    tone: 'default',
    cells: [
      { status: 'positive', text: 'Sketches and drafts in seconds' },
      { status: 'negative', text: 'No strategy, just output' },
      { status: 'negative', text: 'Generic and prone to breaking' },
      { status: 'negative', text: 'Not built for real businesses' },
      { status: 'negative', text: 'Manual fixing becomes the real work' }
    ]
  },
  {
    name: 'DIY Builders',
    description: 'Drag-and-drop templates',
    tone: 'default',
    cells: [
      { status: 'neutral', text: 'Quick to launch v0' },
      { status: 'negative', text: 'Strategy is on you' },
      { status: 'negative', text: 'Outgrow the template fast' },
      { status: 'negative', text: 'Plugins and hacks fracture at scale' },
      { status: 'negative', text: 'Maintenance becomes a second job' }
    ]
  }
];

const statusIcons: Record<Status, string> = {
  positive: '✔',
  neutral: '•',
  negative: '✖'
};

const statusIconClasses: Record<Status, string> = {
  positive: 'text-emerald-300',
  neutral: 'text-amber-300',
  negative: 'text-rose-300'
};

const HomeComparisonSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-gray-950 via-blue-950/90 to-purple-950 py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-200/70">Why teams move to Vispaico</p>
          <h2 className="mt-4 text-4xl font-extrabold text-white md:text-5xl">
            Pick the partner that ships, scales, and converts
          </h2>
          <p className="mt-4 max-w-3xl text-base text-slate-200/80 md:text-lg">
            Quick stack to reality: compare every common route against Vispaico before you sink weeks into the wrong
            team.
          </p>
        </div>

        <div
          className="overflow-x-auto"
          tabIndex={0}
          aria-label="Comparison table scroll area"
        >
          <div className="relative min-w-[960px] rounded-xl border border-white/20 bg-black/20 p-8 backdrop-blur-lg">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 p-0.5" aria-hidden="true">
              <div className="h-full w-full rounded-lg bg-slate-800/95" />
            </div>
            <div className="relative z-10">
              <table className="min-w-full text-left text-sm text-white">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-gray-400 text-xs font-semibold uppercase tracking-wide text-slate-200/80">Option</th>
                    {categories.map(category => (
                      <th
                        key={category}
                        className="py-3 px-4 border-b border-gray-400 text-xs font-semibold uppercase tracking-wide text-slate-200/80"
                      >
                        {category}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map(row => (
                    <tr key={row.name} className={row.tone === 'highlight' ? 'bg-slate-900/70 text-white' : ''}>
                      <th scope="row" className="py-3 px-4 border-b border-gray-600 align-top text-base font-semibold">
                        <div className="flex flex-col gap-1">
                          <span>{row.name}</span>
                          <span className="text-xs font-normal text-slate-300/90 md:text-sm">{row.description}</span>
                        </div>
                      </th>
                      {row.cells.map((cell, idx) => (
                        <td key={idx} className="py-3 px-4 border-b border-gray-600 align-top">
                          <div className="flex items-start gap-3">
                            <span className={`mt-0.5 text-base ${statusIconClasses[cell.status]}`} aria-hidden="true">
                              {statusIcons[cell.status]}
                            </span>
                            <span className="text-sm leading-relaxed text-slate-200">{cell.text}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeComparisonSection;
