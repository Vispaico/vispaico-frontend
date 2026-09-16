import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { aiCourses, getAiCourse } from '@/data/ai-courses';
import AiPageShell from '@/components/AiPageShell';

type Props = { params: Promise<{ courseId: string }> };

export function generateStaticParams() {
  return aiCourses.map((course) => ({ courseId: course.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = getAiCourse((await params).courseId);
  return { title: course ? `Course ${course.number}: ${course.title}` : 'AI Course' };
}

export default async function CoursePage({ params }: Props) {
  const course = getAiCourse((await params).courseId);
  if (!course) notFound();

  return (
    <AiPageShell>
      <article className="mx-auto max-w-5xl px-6 py-20 md:py-28">
        <Link href="/courses" className="text-sm font-semibold text-orange-400">← All courses</Link>
        <header className="mt-10 max-w-4xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Course {course.number} · {course.level}</p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">{course.title}</h1>
          <p className="text-xl text-[var(--text-secondary)]">{course.duration}</p>
          <p className="max-w-3xl text-2xl leading-10">{course.build}</p>
        </header>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Who should attend</h2>
            <p className="leading-8 text-[var(--text-secondary)]">{course.audience}</p>
          </section>
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Where and how</h2>
            {course.formatText ? (
              <p className="leading-8 text-[var(--text-secondary)]">{course.formatText}</p>
            ) : (
              <ul className="space-y-3 text-[var(--text-secondary)]">
                <li>In person in Haiphong, Vietnam.</li>
                <li>English-language delivery.</li>
                <li>Bring your own laptop and build as you learn.</li>
                <li>Open groups and private B2B cohorts available.</li>
              </ul>
            )}
          </section>
        </div>

        <section className="mt-16 space-y-6">
          <h2 className="text-3xl font-semibold">{course.stages ? 'The path' : 'What we cover'}</h2>
          {course.stages ? (
            <div className="overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] shadow-[0_20px_50px_rgba(0,0,0,0.14)]">
              {course.stages.map((stage) => (
                <div key={stage.stage} className="grid gap-2 border-b border-[var(--border)] p-5 last:border-b-0 md:grid-cols-[80px_1fr]">
                  <span className="font-mono text-sm text-orange-400">Stage {stage.stage}</span>
                  <span className="leading-7 text-[var(--text-secondary)]">{stage.capability}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid gap-4">
              {course.sessions.map((session) => <p key={session} className="card-spotlight relative rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-6 leading-8 shadow-[0_20px_50px_rgba(0,0,0,0.14)]">{session}</p>)}
            </div>
          )}
        </section>

        <section className="mt-16 space-y-6">
          <h2 className="text-3xl font-semibold">{course.outcomes ? 'What you leave with' : 'You will learn to'}</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {(course.outcomes ?? course.learn).map((item) => <li key={item} className="card-spotlight relative rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-5">{item}</li>)}
          </ul>
        </section>

        {course.safetyPrinciple && (
          <section className="mt-16 rounded-[10px] border border-orange-500/40 bg-orange-500/[0.06] p-8 shadow-[0_20px_50px_rgba(249,115,22,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-orange-400">The safety principle</p>
            <p className="mt-4 text-xl leading-9 text-[var(--text-primary)]">{course.safetyPrinciple}</p>
          </section>
        )}

        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <h2 className="text-2xl font-semibold">Investment</h2>
            {course.investmentLines ? (
              <ul className="mt-6 space-y-4 text-[var(--text-secondary)]">
                {course.investmentLines.map((line) => <li key={line} className="border-b border-[var(--border)] pb-4 last:border-b-0">{line}</li>)}
              </ul>
            ) : (
              <dl className="mt-6 space-y-4">
                <div className="flex justify-between gap-4 border-b border-[var(--border)] pb-4"><dt>B2C</dt><dd className="text-right">{course.b2cPrice ?? '4,000,000–5,500,000 VND / person'}</dd></div>
                <div className="flex justify-between gap-4"><dt>B2B private cohort</dt><dd className="text-right">{course.b2bPrice ?? '20,000,000–30,000,000 VND / cohort'}</dd></div>
              </dl>
            )}
            {course.investmentNote && <p className="mt-6 text-sm text-[var(--text-muted)]">{course.investmentNote}</p>}
          </div>
          <div className="rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)]">
            <h2 className="text-2xl font-semibold">Completion</h2>
            <p className="mt-4 leading-8 text-[var(--text-secondary)]">Attend, complete the assessment, and finish the capstone. We will give you a course completion certificate.</p>
            <p className="mt-4 leading-8 text-[var(--text-secondary)]">For private cohorts, we can adapt the examples to a cleaned-up company use case after a short technical call.</p>
          </div>
        </section>

        <div className="mt-16 text-center">
          <Link
            href={`/signup?course=${encodeURIComponent(`Course ${course.number} — ${course.title}`)}`}
            className="inline-block rounded-[7px] bg-[#f97316] px-8 py-4 text-lg font-semibold text-white shadow-[0_0_30px_rgba(249,115,22,0.22)] transition hover:bg-[#ea580c]"
          >
            I want to join
          </Link>
        </div>
      </article>
    </AiPageShell>
  );
}
