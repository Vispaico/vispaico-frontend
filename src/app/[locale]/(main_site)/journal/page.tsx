import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { resolveLocale } from '@/i18n/locale-utils';
import { getJournalIssues, journalBasePath } from '@/data/journal';
import { Link } from '@/i18n/navigation';

type JournalPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const t = await getTranslations({ locale: resolvedLocale, namespace: 'Journal.metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);

  const [heroT, copyT] = await Promise.all([
    getTranslations({ locale: resolvedLocale, namespace: 'Journal.hero' }),
    getTranslations({ locale: resolvedLocale, namespace: 'Journal.copy' }),
  ]);

  const issues = getJournalIssues().reverse();
  const dateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  const containerClass = 'mx-auto w-full max-w-[1100px]';

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className="px-6 py-[64px] md:py-[96px]">
        <div className={containerClass}>
          <header className="space-y-5 max-w-3xl">
            <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
              {heroT('eyebrow')}
            </p>
            <h1 className="text-[clamp(36px,5vw,56px)] font-[600] leading-[1.1] tracking-[-0.025em]">
              {heroT('title')}
            </h1>
            <p className="text-[16px] leading-[1.75] text-[var(--text-secondary)] max-w-2xl">
              {heroT('description')}
            </p>
          </header>
        </div>
      </section>

      <section className="px-6 pb-[64px] md:pb-[96px]">
        <div className={containerClass}>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {issues.map((issue) => {
              const href = `${journalBasePath}/${issue.issueSlug}`;
              return (
                <article
                  key={issue.issueSlug}
                  className="group flex flex-col justify-between rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-7 transition-colors hover:border-[#444440]"
                >
                  <div className="space-y-4">
                    <span className="inline-flex items-center rounded-full border border-orange-400/60 bg-orange-500/20 px-3 py-1 text-[11px] font-[500] uppercase tracking-[0.08em] text-orange-100">
                      {copyT('issueLabel')} {issue.issueNumber}
                    </span>
                    <div className="flex items-center gap-2 text-[13px] text-[var(--text-muted)]">
                      <span>{dateFormatter.format(new Date(issue.publishDate))}</span>
                      <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden />
                      <span>{issue.readLength}</span>
                    </div>
                    <h2 className="text-[18px] font-[600] text-[var(--text-primary)] leading-snug group-hover:text-orange-200 transition-colors">
                      <Link href={href}>{issue.title}</Link>
                    </h2>
                    <p className="text-[14px] leading-[1.7] text-[var(--text-secondary)]">
                      {issue.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <Link
                      href={href}
                      className="inline-flex items-center gap-2 text-[13px] font-[500] text-[var(--text-secondary)] transition-colors group-hover:text-[var(--text-primary)]"
                    >
                      {copyT('readIssue')}
                      <svg aria-hidden className="h-4 w-4 transition group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                      </svg>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
