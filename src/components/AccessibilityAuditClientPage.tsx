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
  price: string;
  duration: string;
  cta: string;
};

type BundleItem = {
  icon: string;
  title: string;
  subtitle: string;
};

type RemediationScenario = {
  title: string;
  scope: string;
  cost: string;
  timeline: string;
};

type RemediationContent = {
  title: string;
  introHeading: string;
  introParagraphs: string[];
  scenariosHeading: string;
  scenarios: RemediationScenario[];
  guarantee: {
    heading: string;
    paragraphs: string[];
  };
};

type StandardsContent = {
  title: string;
  items: {
    title: string;
    description: string;
  }[];
};

type ContactContent = {
  title: string;
  description: string;
  cta: string;
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

const AccessibilityAuditClientPage = () => {
  const t = useTranslations('Services.AccessibilityAudit');

  const hero = t.raw('hero') as HeroContent;
  const why = t.raw('why') as { title: string; cards: WhyCard[] };
  const services = t.raw('services') as { title: string; items: ServiceItem[] };
  const bundle = t.raw('bundle') as {
    title: string;
    intro: string;
    items: BundleItem[];
    savings: string;
    price: string;
    description: string;
    cta: string;
  };
  const remediation = t.raw('remediation') as RemediationContent;
  const testimonial = t.raw('testimonial') as { quote: string; name: string; role: string };
  const standards = t.raw('standards') as StandardsContent;
  const contact = t.raw('contact') as ContactContent;

  return (
    <motion.div
      className="bg-white text-slate-900"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-blue-50 py-20" variants={itemVariants}>
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,140,66,0.12),_transparent_60%)]" aria-hidden="true" />
        <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-6 px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-orange-600">
            {hero.badge}
          </span>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-slate-900">{hero.title}</h1>
          <p className="max-w-3xl text-lg text-slate-700">{hero.description}</p>
          <Link
            href="#services"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-105"
          >
            {hero.cta}
          </Link>
        </div>
      </motion.section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl" variants={itemVariants}>{why.title}</motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {why.cards.map((card) => (
              <motion.div
                key={card.title}
                className="h-full rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                variants={cardVariants}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-2xl">
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
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>
            {services.title}
          </motion.h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.items.map((service) => (
              <motion.div
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-white bg-white p-8 shadow-md"
                variants={cardVariants}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 text-2xl text-indigo-600" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-4 text-base text-slate-600">{service.description}</p>
                <ul className="mt-6 space-y-2 text-sm text-slate-600">
                  {service.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 text-2xl font-bold text-slate-900">{service.price}</div>
                <div className="text-sm text-slate-500">{service.duration}</div>
                <Link
                  href="#contact"
                  className="mt-8 inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105"
                >
                  {service.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl rounded-3xl border border-orange-200/60 bg-gradient-to-br from-orange-50 via-white to-rose-50 p-10 shadow-md">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>
            {bundle.title}
          </motion.h2>
          <motion.p className="mt-6 text-center text-base text-slate-600" variants={itemVariants}>
            {bundle.intro}
          </motion.p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {bundle.items.map((item) => (
              <motion.div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-white/60 bg-white/80 p-6"
                variants={cardVariants}
              >
                <div className="text-2xl" aria-hidden="true">{item.icon}</div>
                <div>
                  <strong className="text-slate-900">{item.title}</strong>
                  <p className="text-sm text-slate-600">{item.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center text-sm font-semibold uppercase tracking-wide text-orange-600">{bundle.savings}</div>
          <div className="mt-4 text-center text-3xl font-bold text-slate-900">{bundle.price}</div>
          <p className="mt-4 text-center text-base text-slate-600">{bundle.description}</p>
          <div className="mt-8 flex justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-red-600 px-8 py-3 text-base font-semibold text-white shadow-md transition-transform duration-300 hover:scale-105"
            >
              {bundle.cta}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>
            {remediation.title}
          </motion.h2>
          <div className="mt-8 space-y-4 text-base text-slate-600">
            <h3 className="text-2xl font-semibold text-slate-900">{remediation.introHeading}</h3>
            {remediation.introParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <h3 className="mt-12 text-center text-2xl font-semibold text-slate-900">{remediation.scenariosHeading}</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {remediation.scenarios.map((scenario) => (
              <motion.div
                key={scenario.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                variants={cardVariants}
              >
                <h4 className="text-lg font-semibold text-slate-900">{scenario.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{scenario.scope}</p>
                <p className="mt-3 text-sm text-slate-600">{scenario.cost}</p>
                <p className="mt-3 text-sm text-slate-600">{scenario.timeline}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-900">{remediation.guarantee.heading}</h3>
            {remediation.guarantee.paragraphs.map((paragraph) => (
              <p key={paragraph} className="mt-4 text-base text-slate-600">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-50 via-white to-rose-50 p-10 text-center shadow-md">
          <blockquote className="text-xl font-medium text-slate-900">“{testimonial.quote}”</blockquote>
          <div className="mt-6 flex items-center justify-center gap-3 text-left">
            <Image
              src="/images/testimonials/SarahM.webp"
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

      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <motion.h2 className="text-center text-3xl font-bold md:text-4xl text-slate-900" variants={itemVariants}>
            {standards.title}
          </motion.h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {standards.items.map((standard) => (
              <motion.div
                key={standard.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
                variants={cardVariants}
              >
                <h4 className="text-xl font-semibold text-slate-900">{standard.title}</h4>
                <p className="mt-3 text-base text-slate-600">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-orange-400/40 bg-gradient-to-r from-slate-950 via-rose-900 to-orange-900 p-12 text-center text-white shadow-xl">
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
            <Link href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
              {contact.emailLinkText}
            </Link>{' '}
            {contact.noteSuffix}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AccessibilityAuditClientPage;
