import React from 'react';
import ReactMarkdown from 'react-markdown';

const dataDeletionContent = `If you have used Postiz at posting.vispaico.com and want your account data deleted, send an email to:

**admin@vispaico.com**

Please include:

- Your account email address
- The connected platform(s) you want removed
- A brief note that you want your Postiz data deleted

After we verify the request, we will delete or anonymize the relevant account data and connected integration data within a reasonable timeframe, unless retention is required for security, legal, or abuse-prevention purposes.

You can also revoke platform access directly from your connected social platform account settings, such as Facebook, Instagram, LinkedIn, or Google.`;

const containerClass = 'mx-auto w-full max-w-[1100px]';
const sectionPadding = 'px-6 py-[64px] md:py-[96px]';

export default function DataDeletionPage() {
  return (
    <main className="bg-[var(--bg-base)] text-[var(--text-primary)]">
      <section className={sectionPadding}>
        <div className={`${containerClass} space-y-8`}>
          <div className="space-y-4 rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_40px_80px_rgba(0,0,0,0.55)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[var(--text-muted)]">Account data</p>
            <h1 className="text-[clamp(36px,4vw,56px)] font-[600] leading-tight">User Data Deletion Instructions</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl">
              You control your Postiz data. Follow the instructions below to request deletion and we’ll handle the rest quickly.
            </p>
          </div>
          <div className="rounded-[24px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
            <div className="prose prose-invert max-w-none prose-p:text-[var(--text-secondary)] prose-li:text-[var(--text-secondary)] prose-strong:text-[var(--text-primary)] prose-a:text-[var(--accent)] hover:prose-a:text-[var(--text-primary)]">
              <ReactMarkdown>{dataDeletionContent}</ReactMarkdown>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
