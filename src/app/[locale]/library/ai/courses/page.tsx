import type { Metadata } from 'next';
import Link from 'next/link';
import { aiCourses } from '@/data/ai-courses';
import AiPageShell from '@/components/AiPageShell';

export const metadata: Metadata = {
  title: 'AI Courses in Haiphong',
  description: 'Small, practical English-language AI courses in Haiphong, Vietnam.',
};

export default function CoursesPage() {
  return (
    <AiPageShell>
      <section className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-3xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-400">Vispaico AI · Haiphong</p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">Learn AI by building something useful.</h1>
          <p className="max-w-2xl text-xl leading-8 text-[var(--text-secondary)]">
            Small, hands-on courses for people who want to stop watching demos and start making working systems.
            Taught in English. Held in Haiphong, Vietnam.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {aiCourses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.id}`}
              className="card-spotlight group relative rounded-[10px] border border-[var(--border)] bg-[var(--bg-surface)] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.16)] transition hover:-translate-y-1 hover:border-[#444440]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">Course {course.number} · {course.level}</p>
              <h2 className="mt-4 text-3xl font-semibold group-hover:text-orange-400">{course.title}</h2>
              <p className="mt-4 text-[var(--text-secondary)]">{course.duration}</p>
              <span className="mt-8 inline-block font-semibold text-orange-400">See the course →</span>
            </Link>
          ))}
        </div>

      </section>
    </AiPageShell>
  );
}
