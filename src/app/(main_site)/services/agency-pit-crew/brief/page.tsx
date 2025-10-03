import { Metadata } from 'next';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faFlagCheckered, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import AgencyPitCrewBriefForm from '@/components/AgencyPitCrewBriefForm';

export const metadata: Metadata = {
  title: 'Agency Pit Crew | Project Brief',
  description: 'Tell the Vispaico Pit Crew what you need and we’ll get rolling within hours.',
};

const AgencyPitCrewBriefPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-gray-100">
      <div className="mx-auto max-w-4xl px-6 py-16 lg:py-20">
        <Link
          href="/services/agency-pit-crew"
          className="mb-10 inline-flex items-center text-sm font-semibold text-amber-300 transition hover:text-amber-200"
        >
          <FontAwesomeIcon icon={faArrowLeftLong} className="mr-2 h-4 w-4" />
          Back to Pit Crew Overview
        </Link>

        <div className="rounded-3xl border border-gray-800 bg-gray-950/70 p-8 shadow-2xl backdrop-blur">
          <div className="mb-8 space-y-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-amber-300">
              <FontAwesomeIcon icon={faFlagCheckered} className="h-3 w-3" />
              Pit Crew Brief
            </span>
            <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
              Tell Us What’s on the Clock
            </h1>
            <p className="text-base text-gray-300 sm:text-lg">
              Drop the essentials and the pit crew will reply within 1 hour—faster if it’s an emergency.
            </p>
          </div>

          <AgencyPitCrewBriefForm />

          <p className="mt-8 text-center text-sm text-gray-500">
              Prefer direct contact? Email us at: {' '} <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4 text-orange-400" />
            <a href="mailto:crew@vispaico.com" className="text-orange-300 underline-offset-2 hover:underline">
            <span> crew@vispaico.com</span>
            </a><br/><br/>
            Emergency Phone 24/7: <FontAwesomeIcon icon={faPhone} className="h-4 w-4 text-orange-400" />{' '}
            <a href="tel:+84822992665" className="text-orange-300 underline-offset-2 hover:underline">
              +84 (0) 822 992 665
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgencyPitCrewBriefPage;
