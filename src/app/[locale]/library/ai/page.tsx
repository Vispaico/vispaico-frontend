import { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import { buildCanonical } from '@/lib/seo';

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
      canonical: buildCanonical(locale, '/library/ai'),
    },
  };
}

const aiArticles = [
  {
    routeSegment: 'can-i-create-my-own-ai-like-chatgpt',
    title: "Can I Create My Own AI Like ChatGPT? Here's the Real Answer",
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
    title: "Why Your AI Writing Sounds Fake (And How to Fix It)",
    excerpt: "AI output sounds robotic because it copies average corporate language. Here's the process we use to give it your voice.",
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
    excerpt: "That frustrating moment when your AI acts like it has amnesia? That's the context window doing its thing.",
    category: 'LLM Fundamentals',
  },
  {
    routeSegment: 'music-production-and-ai',
    title: "AI Can't Replace Musicians. But It Just Made You 10x Faster",
    excerpt: 'Let AI clear the technical bottlenecks—mixing, mastering, sample hunting—so you can spend more time on the creative decisions.',
    category: 'AI in Practice',
  },
  {
    routeSegment: 'ai-adopters-hire-more',
    title: 'The Startup Scene is Actually Pretty Lit Right Now (And We Have the Data to Prove It)',
    excerpt: "Wasn't AI supposed to replace everyone? Nope. These companies are using AI to get more done, then hiring more people.",
    category: 'AI & Business',
  },
];

const products = [
  {
    name: 'Vispaico Growth Website',
    description: 'Fast website development in 72 hours. Use AI-powered workflows to launch your business online.',
    href: '/vispaico-growth-website',
  },
  {
    name: 'Growth Services',
    description: 'AI-enhanced SEO, content strategy, and traffic optimization for sustainable growth.',
    href: '/services',
  },
  {
    name: 'Website Speed Optimization',
    description: 'Sub-second load times using modern tech stacks and AI-driven performance analysis.',
    href: '/services',
  },
];

export default async function AiHubPage({ params }: AiHubPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const heroT = await getTranslations({ locale: resolvedLocale, namespace: 'AiHub.hero' });

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      {/* ══════════════════════════════════════
          SECTION 1 — HERO
          ══════════════════════════════════════ */}
      <section className="px-6 pt-[80px]">
        <div className="mx-auto w-full max-w-[720px]">
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {heroT('eyebrow')}
          </p>
          <h1 className="text-[clamp(32px,5vw,48px)] font-[600] mt-[12px] tracking-[-0.025em]">
            {heroT('title')}
          </h1>
          <p className="text-[15px] text-[var(--text-secondary)] leading-[1.8] mt-[16px] max-w-[560px] pb-[40px] border-b border-[var(--border)]">
            {heroT('description')}
          </p>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 2 — ARTICLES GRID
          ══════════════════════════════════════ */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className="mx-auto w-full max-w-[1100px]">
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            Guides &amp; Articles
          </p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1] mt-[4px]">
            Real AI, Real Results
          </h2>
          <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)] mt-[8px] max-w-[520px]">
            Practical guides based on our actual experience building with AI. No theory, just what works.
          </p>

          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {aiArticles.map((article) => (
              <Link
                key={article.routeSegment}
                href={`/library/stories/${article.routeSegment}`}
                className="group flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-[#444440]"
              >
                <span className="inline-block text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
                  {article.category}
                </span>
                <h3 className="text-[17px] font-[600] text-[var(--text-primary)] mt-[8px] mb-[6px] tracking-[-0.015em] group-hover:text-[var(--accent)] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] flex-1">
                  {article.excerpt}
                </p>
                <span className="text-[13px] font-[500] text-[var(--text-secondary)] mt-[12px] transition-colors group-hover:text-[var(--text-primary)]">
                  Read guide →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 3 — PRODUCTS
          ══════════════════════════════════════ */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-surface)] py-[64px] md:py-[96px]">
        <div className="mx-auto w-full max-w-[1100px] px-6">
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            AI-Powered Products
          </p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1] mt-[4px]">
            Services Built with AI
          </h2>
          <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)] mt-[8px] max-w-[520px]">
            We practice what we preach. These products are built with the same AI workflows we teach.
          </p>

          <div className="mt-12 grid gap-3 md:grid-cols-3">
            {products.map((product) => (
              <Link
                key={product.name}
                href={product.href}
                className="group flex flex-col rounded-[10px] border border-[var(--border)] bg-[var(--bg-base)] p-7 transition-colors hover:border-[#444440]"
              >
                <h3 className="text-[18px] font-[600] text-[var(--text-primary)] mb-[6px]">
                  {product.name}
                </h3>
                <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)] flex-1">
                  {product.description}
                </p>
                <span className="text-[13px] font-[500] text-[var(--text-secondary)] mt-[16px] transition-colors group-hover:text-[var(--text-primary)]">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SECTION 4 — CTA
          ══════════════════════════════════════ */}
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className="mx-auto w-full max-w-[720px] text-center rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-[40px]">
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            What&apos;s next
          </p>
          <h2 className="text-[clamp(28px,3.5vw,42px)] font-[600] leading-[1.1] mt-[8px]">
            Ready to Build Something Real?
          </h2>
          <p className="text-[15px] leading-[1.75] text-[var(--text-secondary)] mt-[10px] max-w-[520px] mx-auto">
            Stop getting stuck in AI tutorials. Start building actual products with AI that work for your business.
          </p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Link
              href="/contact"
              className="rounded-[7px] bg-[var(--accent)] px-8 py-3 text-[14px] font-[600] tracking-[0.08em] text-[var(--text-primary)] transition-opacity hover:opacity-90"
            >
              Start Your Project →
            </Link>
            <Link
              href="/aios"
              className="rounded-[7px] border border-[var(--border)] px-8 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
            >
              Explore Vispaico AIOS&trade;
            </Link>
          </div>
          <p className="text-[13px] text-[var(--text-muted)] mt-[12px]">
            {heroT('support')}
          </p>
        </div>
      </section>
    </main>
  );
}
