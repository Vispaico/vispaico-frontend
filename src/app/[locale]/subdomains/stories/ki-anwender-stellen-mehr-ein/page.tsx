// src/app/subdomains/stories/ai-adopters-hire-more/page.tsx

import type { Metadata } from 'next';
import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'ki-anwender-stellen-mehr-ein';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function AiAdoptersHireMoreStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Trend-Bericht</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <section className="space-y-6">
          <p>
            Die Wirtschaft mag stürmisch erscheinen, aber die jüngste Umfrage von Mercury unter 1.500 Gründern zeigt, dass Teams in der Frühphase optimistischer sind, als die Schlagzeilen vermuten lassen. Das Vertrauen steigt, und die Teams, die auf KI setzen, vergrößern den Leistungsabstand.
          </p>
          <p>
            Diese Befragten umfassen Unternehmen, die jünger als sechs Jahre sind, aus den Bereichen Software, Dienstleistungen, Einzelhandel und Handel. Ihre Antworten zeichnen ein Bild von Gründern, die sich schneller anpassen, als die Marktturbulenzen sie erschüttern können.
          </p>
          <figure className="overflow-hidden rounded-2xl bg-slate-100">
            <Image
              src="https://res.cloudinary.com/kinhcode01/image/upload/v1759821820/Vispaico/Images/Articles/founders_office_fjdqa9.webp"
              alt="Gründer, die in einem Studio zusammenarbeiten"
              width={800}
              height={600}
              className="h-auto w-full object-cover"
              priority
            />
          </figure>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Die Stimmungsprüfung: Gründer sind überraschend entspannt</h2>
          <p>
            Siebenundachtzig Prozent der Gründer gaben an, dass sie zuversichtlicher in ihr Unternehmen blicken als im Vorjahr, und nur drei Prozent verloren an Vertrauen. Die Inflation schadete 36 % der Befragten, doch 38 % gaben an, dass sie neue Möglichkeiten eröffnete, da Käufer nach besseren Optionen suchten.
          </p>
          <p>
            Starke KI-Anwender treiben den Optimismus an. Sechzig Prozent dieser Teams meldeten einen deutlichen Vertrauensschub im Vergleich zu nur 28 % der Unternehmen, die nicht in KI investieren.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Finanzierungsstrategien werden kreativ</h2>
          <p>
            Vergiss die alte „VC beschaffen oder sterben“-Mentalität. Dreiundsiebzig Prozent der befragten Unternehmen haben in ihrer letzten Runde weniger als 5 Millionen US-Dollar aufgenommen und mischen die Kapitalquellen frei. Dienstleistungsunternehmen setzen auf Bootstrapping, während Tech-Teams Engel und Kredite kombinieren. Einzelhandelsmarken setzen stark auf umsatzbasierte Finanzierung.
          </p>
          <p>Teams, die mehrere Finanzierungsquellen kombinierten, hatten eine um 40 % höhere Wahrscheinlichkeit, die 5-Millionen-Dollar-Marke zu überschreiten. Diversifizieren oder stagnieren.</p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">KI-Unternehmen leben in der Zukunft</h2>
          <p>Unternehmen, die stark in KI investieren, kürzen nicht – sie skalieren.</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>79 % der starken KI-Anwender stellen aufgrund von KI-Tools mehr Mitarbeiter ein.</li>
            <li>Sie haben eine dreimal höhere Wahrscheinlichkeit, ihre Teams aktiv zu skalieren.</li>
            <li>68 % berichten von aktivem Wachstum gegenüber 13 % der Unternehmen, die keine KI einsetzen.</li>
          </ul>
          <p>
            KI ersetzt keine Menschen – sie verstärkt sie. Vertriebs-, Marketing- und Kundenteams erhalten neue Mitarbeiter, um mit der Nachfrage Schritt zu halten.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Die Revolution der Auftragnehmer ist real</h2>
          <p>
            Einundsechzig Prozent der Unternehmen bezeichneten sich als auf Auftragnehmer angewiesen. Vierundsechzig Prozent tun dies, um schnell Kapazitäten zu schaffen, und 32 % wollen vom ersten Tag an eine globale Reichweite. Starke KI-Anwender geben viermal häufiger an, dass sie sehr auf flexible Teams angewiesen sind.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Alle geben mehr aus – aber klüger</h2>
          <p>
            Neunundsiebzig Prozent der Gründer erhöhten in diesem Jahr ihre Ausgaben, wobei KI und Automatisierung den größten Teil des Budgets ausmachten. Dreiundsiebzig Prozent erhöhten diese Posten und 55 % schichteten Geld von alten Tools um, um sie zu finanzieren.
          </p>
          <p>
            Der anhaltende Schmerzpunkt ist die Änderung der F&E-Steuer von 2022 – 73 % gaben an, dass sie dem Unternehmen geschadet habe, was einige dazu zwang, F&E zu kürzen und die Einstellung zu verlangsamen. Erleichterung ist auf dem Weg, jetzt, da die Politik korrigiert wurde.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Das Fazit: Der Wandel im Spielbuch ist real</h2>
          <p>Leistungsstarke Gründer teilen vier Merkmale:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Mischen von Finanzierungsquellen, anstatt auf eine zu setzen.</li>
            <li>KI zur Verstärkung von Teams einsetzen, nicht um sie zu ersetzen.</li>
            <li>Aufbau globaler Auftragnehmernetzwerke vom ersten Tag an.</li>
            <li>Klug ausgeben und schnell umschichten.</li>
          </ul>
          <p>
            Signifikante KI-Anwender verzeichneten eine zu 93 % positive Prognose gegenüber 71 % für alle anderen. Dieser Unterschied ist eine Denkweise, nicht nur ein Werkzeug. Die Teams, die den Wandel annehmen, steuern den Markt, anstatt darauf zu reagieren.
          </p>
          <p>
            Die Startup-Wirtschaft lahmt nicht – sie entwickelt sich weiter. Wenn Du gerade baust, bist Du Teil der Gruppe, die die Regeln neu schreibt. Tausche ein wenig Doom-Scrolling-Zeit gegen Bauen ein – die Zukunft sieht von hier aus rosig aus.
          </p>
        </section>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Weiter entdecken</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Gedanken zum alltäglichen Chaos
            </h2>
            <p className="text-slate-600">Weitere Notizen zu Gedanken, die uns durch den Kopf gehen.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {relatedStories.map((related) => (
              <Link
                key={related.routeSegment}
                href={`${storiesBasePath}/${related.routeSegment}`}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-300 hover:shadow-md"
              >
                <p className="text-xs uppercase tracking-[0.35em] text-blue-500">
                  {publishDateFormatter.format(new Date(related.publishDate))}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900 group-hover:text-blue-500">{related.title}</h3>
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">{related.excerpt}</p>
                <span className="mt-4 inline-flex items-center text-sm font-semibold text-blue-500">
                  Lies diese Geschichte
                  <svg
                    aria-hidden
                    className="ml-2 h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>

          <div className="flex justify-center pt-4">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-400 hover:text-blue-500"
            >
              Zurück zu allen Artikeln
              <svg aria-hidden className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 12h16m-7-7 7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
