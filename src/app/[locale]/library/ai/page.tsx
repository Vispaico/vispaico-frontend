import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import { buildCanonical } from '@/lib/seo';
import Image from 'next/image';

type AiHubPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'AiHub.metadata' });

  return {
    title: t('title'),
    description: t('description'),
    alternates: {
      canonical: buildCanonical(locale, '/library/ai')
    }
  };
}

const aiArticles = [
  {
    routeSegment: 'can-i-create-my-own-ai-like-chatgpt',
    title: 'Can I Create My Own AI Like ChatGPT? Here\'s the Real Answer',
    excerpt: 'Thinking about building your own AI like ChatGPT? We break down what it actually takes, what shortcuts exist, and what most people should do instead.',
    category: 'Getting Started',
  },
  {
    routeSegment: 'how-we-built-an-ai-workflow-that-saves-20-hours-per-week',
    title: 'How We Built an AI Workflow That Saves 20 Hours Per Week',
    excerpt: 'We mapped every content step, let AI handle research, drafting, and repurposing, kept humans on strategy and editing.',
    category: 'Practical Guides',
  },
  {
    routeSegment: 'why-your-ai-writing-sounds-fake-and-how-to-fix-it',
    title: 'Why Your AI Writing Sounds Fake (And How to Fix It)',
    excerpt: 'AI output sounds robotic because it copies average corporate language. Here\'s the process we use to give it your voice.',
    category: 'Quality & Tone',
  },
  {
    routeSegment: 'what-happens-when-you-treat-llms-like-employees-not-magic-boxes',
    title: 'What Happens When You Treat LLMs Like Employees (Not Magic Boxes)',
    excerpt: 'Stop throwing one-line prompts at AI. Brief it like a junior hire with context, examples, constraints.',
    category: 'Prompt Engineering',
  },
  {
    routeSegment: 'the-prompt-engineering-framework-we-actually-use-not-the-obvious-one',
    title: 'The Prompt Engineering Framework We Actually Use',
    excerpt: 'Generic prompt tips give generic output. This layered framework covers task type, model choice, context, constraints.',
    category: 'Prompt Engineering',
  },
  {
    routeSegment: 'llm-fundamentals-why-your-ai-assistant-suddenly-forgets-what-you-just-said-and-how-to-fix-it',
    title: 'Why Your AI Assistant Suddenly Forgets What You Just Said',
    excerpt: 'That frustrating moment when your AI acts like it has amnesia? That\'s the context window doing its thing.',
    category: 'LLM Fundamentals',
  },
  {
    routeSegment: 'music-production-and-ai',
    title: 'AI Can\'t Replace Musicians. But It Just Made You 10x Faster',
    excerpt: 'Let AI clear the technical bottlenecks—mixing, mastering, sample hunting—so you can spend more time on the creative decisions.',
    category: 'AI in Practice',
  },
  {
    routeSegment: 'ai-adopters-hire-more',
    title: 'The Startup Scene is Actually Pretty Lit Right Now (And We Have the Data to Prove It)',
    excerpt: 'Wasn\'t AI supposed to replace everyone? Nope. These companies are using AI to get more done, then hiring more people.',
    category: 'AI & Business',
  },
];

const products = [
  {
    name: 'Vispaico Growth Website',
    description: 'Fast website development in 72 hours. Use AI-powered workflows to launch your business online.',
    href: '/vispaico-growth-website',
    icon: '🚀',
  },
  {
    name: 'Growth Services',
    description: 'AI-enhanced SEO, content strategy, and traffic optimization for sustainable growth.',
    href: '/services',
    icon: '📈',
  },
  {
    name: 'Website Speed Optimization',
    description: 'Sub-second load times using modern tech stacks and AI-driven performance analysis.',
    href: '/services',
    icon: '⚡',
  },
];

export default async function AiHubPage({ params }: AiHubPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  const [heroT] = await Promise.all([
    getTranslations({ locale: resolvedLocale, namespace: 'AiHub.hero' }),
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/95 to-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-[0.03]" />
      </div>

      <div className="relative">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-transparent" />
          <div className="container mx-auto px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div className="space-y-6 max-w-3xl">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80">
                  AI Guides & Resources
                </p>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Build with AI, Not Against It
                </h1>
                <p className="text-lg md:text-xl text-blue-100/90 max-w-2xl">
                  Practical guides, real workflows, and honest answers about using AI in your business. No hype, no jargon — just what actually works.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#guides"
                    className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-white font-semibold shadow-lg transition-transform hover:scale-105"
                  >
                    Explore Guides
                  </Link>
                  <Link
                    href="/articles"
                    className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 text-white font-semibold shadow-lg transition-transform hover:scale-105"
                  >
                    All Resources
                  </Link>
                </div>
              </div>
              <div className="relative lg:h-[500px] flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl" />
                  <div className="relative space-y-6">
                    <div className="text-center">
                      <div className="text-6xl mb-4">🤖</div>
                      <h3 className="text-2xl font-bold">20+ Hours SavedWeekly</h3>
                      <p className="text-blue-100/85 mt-2">Our real AI workflow results</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-orange-300">4-6</div>
                        <p className="text-xs text-blue-200/70">Articles/Week</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-300">3.5h</div>
                        <p className="text-xs text-blue-200/70">Per Article</p>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-orange-300">Same</div>
                        <p className="text-xs text-blue-200/70">Quality</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 border-y border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">45+</div>
                <p className="text-sm text-blue-200/70 uppercase tracking-[0.35em]">Published Guides</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">27h</div>
                <p className="text-sm text-blue-200/70 uppercase tracking-[0.35em]">Time Saved/Week</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">72h</div>
                <p className="text-sm text-blue-200/70 uppercase tracking-[0.35em]">Website Launch</p>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-orange-300 mb-2">100%</div>
                <p className="text-sm text-blue-200/70 uppercase tracking-[0.35em]">Quality Maintained</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Products */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80 mb-4">
                AI-Powered Products
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Services Built with AI
              </h2>
              <p className="text-blue-100/90 max-w-2xl mx-auto">
                We practice what we preach. These products are built with the same AI workflows we teach.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {products.map((product) => (
                <Link
                  key={product.name}
                  href={product.href}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <div className="text-4xl mb-4">{product.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition">
                      {product.name}
                    </h3>
                    <p className="text-sm text-blue-200/80">{product.description}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-300">
                      Learn more
                      <svg className="w-4 h-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section id="guides" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-200/80 mb-4">
                Guides & Articles
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Real AI, Real Results
              </h2>
              <p className="text-blue-100/90 max-w-2xl mx-auto">
                Practical guides based on our actual experience building with AI. No theory, just what works.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {aiArticles.map((article) => (
                <Link
                  key={article.routeSegment}
                  href={`/library/stories/${article.routeSegment}`}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition hover:border-orange-400/50 hover:shadow-2xl hover:shadow-orange-500/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-blue-500/5 opacity-0 transition group-hover:opacity-100" />
                  <div className="relative">
                    <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-200 bg-orange-500/10 rounded-full mb-4">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition">
                      {article.title}
                    </h3>
                    <p className="text-sm text-blue-200/80 line-clamp-3">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-orange-300">
                      Read guide
                      <svg className="w-4 h-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/articles"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3 text-white font-semibold shadow-lg transition hover:bg-white/10 hover:border-white/50"
              >
                View All Resources
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl p-8 md:p-12">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/80 to-blue-950/80" />
              <div className="relative max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Build Something Real?
                </h2>
                <p className="text-lg text-blue-100/90 mb-8">
                  Stop getting stuck in AI tutorials. Start building actual products with AI that work for your business.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 text-white font-semibold shadow-lg transition-transform hover:scale-105"
                >
                  Start Your Project
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
