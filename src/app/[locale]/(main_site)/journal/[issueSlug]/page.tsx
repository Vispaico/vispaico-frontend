import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getJournalIssue, getJournalIssues, journalBasePath } from '@/data/journal';
import { resolveLocale } from '@/i18n/locale-utils';
import { getTranslations } from 'next-intl/server';

type JournalIssuePageProps = {
  params: Promise<{ locale: string; issueSlug: string }>;
};

export async function generateStaticParams() {
  const issues = getJournalIssues();
  return issues.map((issue) => ({ issueSlug: issue.issueSlug }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; issueSlug: string }> }): Promise<Metadata> {
  const { issueSlug } = await params;
  const issue = getJournalIssue(issueSlug);
  return {
    title: issue.metadataTitle,
    description: issue.metadataDescription,
    alternates: {
      canonical: `https://vispaico.com/journal/${issueSlug}`,
    },
  };
}

export default async function JournalIssuePage({ params }: JournalIssuePageProps) {
  const { locale, issueSlug } = await params;
  const resolvedLocale = resolveLocale(locale);
  const issue = getJournalIssue(issueSlug);
  const allIssues = getJournalIssues().filter((i) => i.issueSlug !== issueSlug);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  const copyT = await getTranslations({ locale: resolvedLocale, namespace: 'Journal.copy' });

  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <article className="mx-auto w-full max-w-[720px] px-6 py-[64px] md:py-[96px]">
        <header className="space-y-5 pb-10 border-b border-[var(--border)]">
          <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            {copyT('issueLabel')} {issue.issueNumber}
          </p>
          <h1 className="text-[clamp(28px,4vw,44px)] font-[600] leading-[1.1] tracking-[-0.025em]">
            {issue.title}
          </h1>
          <div className="flex items-center gap-3 text-[14px] text-[var(--text-muted)]">
            <span>{publishDateFormatter.format(new Date(issue.publishDate))}</span>
            <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden />
            <span>{issue.readLength}</span>
          </div>
        </header>

        <div className="mt-10 text-[16px] leading-[1.8] text-[var(--text-secondary)]">
          <div className="prose prose-invert max-w-none prose-headings:text-[var(--text-primary)] prose-headings:font-[600] prose-a:text-orange-300 prose-strong:text-[var(--text-primary)] prose-code:text-orange-200">
            <ReactMarkdown>{issue.content}</ReactMarkdown>
          </div>
        </div>

        {allIssues.length > 0 && (
          <section aria-labelledby="other-issues" className="mt-16 pt-10 border-t border-[var(--border)]">
            <div className="space-y-2">
              <h2 id="other-issues" className="text-[clamp(22px,3vw,32px)] font-[600] text-[var(--text-primary)]">
                {copyT('otherIssues')}
              </h2>
              <p className="text-[15px] text-[var(--text-secondary)]">
                {copyT('otherIssuesSub')}
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {allIssues.map((related) => (
                <Link
                  key={related.issueSlug}
                  href={`${journalBasePath}/${related.issueSlug}`}
                  className="group rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 transition-colors hover:border-[#444440]"
                >
                  <span className="inline-flex items-center rounded-full border border-orange-400/60 bg-orange-500/20 px-2.5 py-0.5 text-[10px] font-[500] uppercase tracking-[0.08em] text-orange-100">
                    {copyT('issueLabel')} {related.issueNumber}
                  </span>
                  <h3 className="mt-3 text-[16px] font-[600] text-[var(--text-primary)] group-hover:text-orange-200 transition-colors">
                    {related.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-[1.6] text-[var(--text-secondary)] line-clamp-2">
                    {related.excerpt}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <Link
                href="/journal"
                className="inline-flex items-center gap-2 rounded-[7px] border border-[var(--border)] px-6 py-3 text-[14px] font-[500] text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-elevated)] hover:text-[var(--text-primary)]"
              >
                {copyT('backToJournal')}
                <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
                </svg>
              </Link>
            </div>
          </section>
        )}
      </article>
    </main>
  );
}
