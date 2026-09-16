'use client';

import { FormEvent, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import AiPageShell from '@/components/AiPageShell';

export default function SignupPage() {
  const searchParams = useSearchParams();
  const selectedCourse = searchParams.get('course') ?? '';
  const [status, setStatus] = useState('');
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setStatus('');
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-next-intl-locale': 'en' },
        body: JSON.stringify({ ...data, formType: 'course_signup' }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Please try again.');
      form.reset();
      setStatus('Thanks. We will be in touch with the next course dates.');
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AiPageShell>
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Course signup</p>
        <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">Tell us where to reach you.</h1>
        <p className="mt-6 text-xl leading-8 text-[var(--text-secondary)]">Leave your name, phone, and email. We will send the next dates and help you choose the right course.</p>
        <form onSubmit={handleSubmit} className="mt-12 space-y-6 rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
          {selectedCourse && (
              <div className="rounded-[7px] border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3">
              <p className="text-sm text-[var(--text-muted)]">Course</p>
              <p className="mt-1 font-semibold">{selectedCourse}</p>
            </div>
          )}
          <input type="hidden" name="course" value={selectedCourse} />
          <label className="block"><span className="mb-2 block font-semibold">Name</span><input required name="name" autoComplete="name" className="w-full rounded-[7px] border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500" /></label>
          <label className="block"><span className="mb-2 block font-semibold">Phone</span><input required name="phone" type="tel" autoComplete="tel" className="w-full rounded-[7px] border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500" /></label>
          <label className="block"><span className="mb-2 block font-semibold">Email</span><input required name="email" type="email" autoComplete="email" className="w-full rounded-[7px] border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500" /></label>
          <label className="block"><span className="mb-2 block font-semibold">Notes <span className="font-normal text-[var(--text-muted)]">(optional)</span></span><textarea name="notes" rows={4} className="w-full rounded-[7px] border border-[var(--border)] bg-[var(--bg-base)] px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500" /></label>
          <div className="absolute -left-[5000px]" aria-hidden="true"><input name="b_name" tabIndex={-1} autoComplete="off" /></div>
          <button disabled={submitting} className="w-full rounded-[7px] bg-[#f97316] px-6 py-4 font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.22)] transition hover:bg-[#ea580c] disabled:opacity-60">{submitting ? 'Sending…' : 'Send my details'}</button>
          {status && <p role="status" className="text-center text-sm text-[var(--text-secondary)]">{status}</p>}
        </form>
      </section>
    </AiPageShell>
  );
}
