'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from '@/i18n/navigation';
import ContactForm from '@/components/ContactForm';

type HeroContent = {
  badge: string;
  title: string;
  description: string;
  cta: string;
};

type WhyCard = {
  icon: string;
  title: string;
  text: string;
};

type ServiceItem = {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
  price?: string;
  note?: string;
};

type ServicesContent = {
  title: string;
  intro: string;
  items: ServiceItem[];
  outro?: string;
};

type ComplianceContent = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
  note: string;
};

type ProcessStep = {
  title: string;
  description: string;
};

type ProcessContent = {
  title: string;
  subtitle: string;
  steps: ProcessStep[];
};

type ResultsContent = {
  title: string;
  items: {
    value: string;
    label: string;
  }[];
  note?: string;
};

type TestimonialContent = {
  quote: string;
  name: string;
  role: string;
};

type ContactContent = {
  title: string;
  description: string;
  notePrefix: string;
  emailLinkText: string;
  noteSuffix: string;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: 'easeOut' as const }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const }
  }
};

const WPShopifySolutionsClientPage = () => {
  const t = useTranslations('Services.WPShopifySolutions');

  const hero = t.raw('hero') as HeroContent;
  const why = t.raw('why') as { title: string; cards: WhyCard[] };
  const services = t.raw('services') as ServicesContent;
  const compliance = t.raw('compliance') as ComplianceContent;
  const process = t.raw('process') as ProcessContent;
  const results = t.raw('results') as ResultsContent;
  const testimonial = t.raw('testimonial') as TestimonialContent;
  const contact = t.raw('contact') as ContactContent;

  return (
    <motion.div
      className="bg-white text-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-emerald-900 py-20" variants={itemVariants}>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_65%)]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center text-white">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-200">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{hero.title}</h1>
          <p className="max-w-3xl text-lg text-white/80">{hero.description}</p>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-emerald-400 via-sky-400 to-blue-500 px-8 py-3 text-lg font-semibold text-slate-900 shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            {hero.cta}
          </Link>
        </div>
      </motion.section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>{why.title}</motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {why.cards.map((card) => (
              <motion.div
                key={card.title}
                className="h-full rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                variants={cardVariants}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-2xl">
                  <span aria-hidden="true">{card.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900">{card.title}</h3>
                <p className="mt-3 text-base text-slate-600">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>{services.title}</motion.h2>
          {services.intro && (
            <motion.p className="mx-auto mt-4 max-w-3xl text-center text-base text-slate-600" variants={itemVariants}>
              {services.intro}
            </motion.p>
          )}
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service) => (
              <motion.div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-white bg-white p-8 shadow-md"
                variants={cardVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-2xl text-emerald-600" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {service.price && <div className="mt-6 text-sm font-semibold uppercase tracking-wide text-emerald-600">{service.price}</div>}
                {service.note && <div className="mt-2 text-xs text-slate-500">{service.note}</div>}
              </motion.div>
            ))}
          </div>
          {services.outro && (
            <p className="mt-10 text-center text-sm text-slate-500">{services.outro}</p>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>{compliance.title}</motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {compliance.items.map((item) => (
              <motion.div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-base text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-slate-500">{compliance.note}</p>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>{process.title}</motion.h2>
          <motion.p className="mt-4 text-center text-base text-slate-600" variants={itemVariants}>
            {process.subtitle}
          </motion.p>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {process.steps.map((step) => (
              <motion.div
                key={step.title}
                className="h-full rounded-3xl border border-white bg-white p-6 shadow-sm"
                variants={cardVariants}
              >
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-200/60 bg-gradient-to-br from-emerald-50 via-white to-sky-50 p-10 shadow-md">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>{results.title}</motion.h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {results.items.map((item) => (
              <motion.div
                key={item.label}
                className="rounded-3xl border border-white/60 bg-white p-6 text-center shadow-sm"
                variants={cardVariants}
              >
                <div className="text-3xl font-bold text-emerald-600">{item.value}</div>
                <p className="mt-3 text-sm text-slate-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
          {results.note && <p className="mt-8 text-center text-sm text-slate-500">{results.note}</p>}
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-10 text-center shadow-md">
          <blockquote className="text-xl font-medium text-slate-900">“{testimonial.quote}”</blockquote>
          <div className="mt-6 flex items-center justify-center gap-3 text-left">
            <Image
              src="/images/testimonials/LenaH.webp"
              alt={testimonial.name}
              width={56}
              height={56}
              className="h-14 w-14 rounded-full object-cover shadow-sm"
            />
            <div className="text-sm text-slate-600">
              <h4 className="text-lg font-semibold text-slate-900">{testimonial.name}</h4>
              <p>{testimonial.role}</p>
              <div className="mt-2 flex items-center gap-1 text-amber-400" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, index) => (
                  <FontAwesomeIcon key={index} icon={faStar} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-blue-500/40 bg-gradient-to-r from-slate-950 via-blue-900 to-emerald-900 p-12 text-center text-white shadow-xl">
          <motion.h2 className="text-3xl font-bold md:text-4xl" variants={itemVariants}>
            {contact.title}
          </motion.h2>
          <motion.p className="mt-6 text-base text-white/80" variants={itemVariants}>
            {contact.description}
          </motion.p>
          <div className="mt-10 mx-auto w-full max-w-xl text-left">
            <ContactForm />
          </div>
          <div className="mt-8 text-sm text-white/70">
            {contact.notePrefix}{' '}
            <Link href="mailto:crew@vispaico.com" className="text-emerald-300 underline-offset-2 hover:underline">
              {contact.emailLinkText}
            </Link>{' '}
            {contact.noteSuffix}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default WPShopifySolutionsClientPage;
