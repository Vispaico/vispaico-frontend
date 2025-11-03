import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'wie-man-barrierefreie-websites-erstellt';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function HowToBuildAccessibleWebsitesStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`Die gute Nachricht? Barrierefreie Websites zu erstellen ist keine Raketenwissenschaft. Es erfordert nur den richtigen Ansatz, das richtige Wissen und Engagement.

### **Was bedeutet eine barrierefreie Website eigentlich?**

Eine barrierefreie Website ist eine, die von jedem genutzt werden kann – unabhängig von seinen körperlichen Fähigkeiten oder Behinderungen. Das schließt ein:

- **Menschen mit Sehbehinderungen**, die Screenreader verwenden
- **Menschen mit motorischen Behinderungen**, die mit der Tastatur statt mit der Maus navigieren
- **Menschen mit Hörbehinderungen**, die Untertitel für Videos benötigen
- **Menschen mit kognitiven Behinderungen**, die von einem klaren, einfachen Design profitieren
- **Ältere Benutzer**, die oft ähnliche Herausforderungen wie jüngere Menschen mit Behinderungen haben

Barrierefreies Design ist keine separate Projektebene. Es ist in jede Entscheidung eingewoben: wie Du Dein HTML strukturierst, Farben wählst, Alternativtexte schreibst, Formulare gestaltest und Inhalte organisierst.

### **Die Standards: Was Du wissen musst**

**WCAG 2.2 AA** ist der globale Goldstandard für Web-Barrierefreiheit. Es wird vom W3C (World Wide Web Consortium) gepflegt und deckt alles von der Tastaturnavigation bis zur Kompatibilität mit Screenreadern ab. Level AA ist das empfohlene Konformitätslevel – es ist anspruchsvoll, aber für die meisten Websites erreichbar.

**EN 301 549** ist die europäische Norm, die WCAG 2.2 AA widerspiegelt, aber in der gesamten EU rechtsverbindlich ist. Es ist der Standard, den Du erfüllen musst, um den EU-Vorschriften zu entsprechen.

**Das EU-Barrierefreiheitsgesetz (EAA)** schreibt vor, dass alle Websites und digitalen Dienste barrierefrei sein müssen. Die Durchsetzung begann 2025 und gilt für fast alle in der EU tätigen Organisationen – keine Ausreden, keine Ausnahmen.

**BFSG (Barrierefreiheitsstärkungsgesetz)** ist Deutschlands Gesetz zur Stärkung der Barrierefreiheit. Wenn Du auf deutsche Benutzer abzielst oder eine deutsche Präsenz hast, ist dies nicht verhandelbar.

**2. Barrierefreie Websites erstellen: Der Vispaico-Ansatz**

Wenn wir Websites für Kunden erstellen, ist Barrierefreiheit kein nachträglicher Gedanke. Sie ist von Anfang an integriert.

**Strategiephase:** Wir verstehen Dein Publikum und seine Bedürfnisse. Sind Deine Benutzer älter? Haben sie Sehbehinderungen? Verwenden sie Hilfstechnologien? Diese Fragen prägen alles.

**Designphase:** Wir gestalten mit Blick auf Kontrast, Lesbarkeit und Navigation. Farben sind nicht nur hübsch – sie funktionieren auch für farbenblinde Benutzer. Die Typografie ist lesbar. Interaktive Elemente sind für Tastatur- und Screenreader-Benutzer intuitiv.

**Entwicklungsphase:** Saubere HTML-Struktur, semantisches Markup, ARIA-Labels wo nötig, Tastaturnavigation und Screenreader-Tests. Unsere Entwickler wissen, dass Barrierefreiheit nicht verhandelbar ist.

**Testphase:** Automatisierte Tools fangen offensichtliche Probleme ab, aber wir führen auch manuelle Tests mit echten Hilfstechnologien durch. Und idealerweise beziehen wir Benutzer mit Behinderungen ein, um die reale Erfahrung zu testen.

**Audit & Beratung: Was wir anders machen**

Vielleicht hast Du bereits eine Website, die nicht barrierefrei ist. Hier kommt das Audit ins Spiel.

Ein ordnungsgemäßes Barrierefreiheits-Audit ist nicht nur das Ausführen eines automatisierten Scanners und das Abhaken. Es ist eine umfassende Überprüfung, die Folgendes umfasst:

- **Automatisches Scannen**, um allgemeine Probleme zu erkennen
- **Manuelles Testen** mit Tastaturen, Screenreadern und realen Benutzerszenarien
- **Überprüfung von Farbkontrast und visuellem Design**
- **Testen von Formularen und Interaktionen**
- **Echtes Feedback von Benutzern mit Behinderungen**

Anschließend erstellen wir einen priorisierten Bericht mit klaren Empfehlungen. Kritische Probleme werden zuerst behoben. Verbesserungen mit niedriger Priorität können im Laufe der Zeit schrittweise eingeführt werden.

Für Unternehmen, die in der EU tätig sind, helfen wir Dir, die gesetzlichen Anforderungen zu meistern – und stellen sicher, dass Du nicht nur heute konform bist, sondern auch zukunftssicher.

### **Der Business Case für Barrierefreiheit**

Folgendes hat viele unserer Kunden überrascht: Barrierefreie Websites sind nicht nur besser für Menschen mit Behinderungen. Sie sind besser für alle.

Barrierefreies Design verbessert die SEO. Suchmaschinen lieben sauberes, semantisches HTML. Barrierefreie Websites ranken besser.

Barrierefreies Design verbessert die Benutzererfahrung. Eine klarere Navigation und ein einfacheres Design kommen allen Benutzern zugute, insbesondere auf mobilen Geräten.

Barrierefreies Design erweitert Deinen Markt. Du erreichst mehr Menschen. Das bedeutet mehr Kunden, mehr Umsatz.

Barrierefreies Design schafft Vertrauen. Benutzer sehen, dass Du Dich um Inklusivität kümmerst. Das ist ein Markenunterscheidungsmerkmal in einem überfüllten Markt.

### **Was kommt als Nächstes?**

Wenn Du eine neue Website erstellst, bestehe von Anfang an auf Barrierefreiheit. Es ist billiger und einfacher, als sie später nachzurüsten.

Wenn Du eine bestehende Website hast, ist ein Audit der erste Schritt. Es zeigt Dir, wo Du stehst und was als Nächstes zu tun ist.

Die EU-Vorschriften sind da, um zu bleiben. Die Frage ist nicht, ob Du Deine Website barrierefrei machen solltest – sondern ob Du es proaktiv tust oder wartest, bis die Aufsichtsbehörden Dich dazu zwingen.

Wir sind hier, um zu helfen. Ob Du eine neue barrierefreie Website oder ein Audit Deiner bestehenden benötigst, lass uns reden.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Und Zugang für alle</p>
        <h1 className="text-4xl font-semibold text-slate-950 sm:text-5xl">{story.title}</h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500">
          <span>{formattedDate}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>{story.readLength}</span>
        </div>
      </header>

      <div className="space-y-10 text-lg leading-relaxed text-slate-700">
        <div className="prose prose-slate max-w-none">
          <ReactMarkdown>{articleMarkdown}</ReactMarkdown>
        </div>

        <section aria-labelledby="related-stories" className="space-y-6">
          <div className="h-px w-full bg-slate-200" />
          <div className="space-y-2">
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Weiter entdecken</p>
            <h2 id="related-stories" className="text-2xl font-semibold text-slate-950">
              Geschichten von einer vorübergehenden Szene
            </h2>
            <p className="text-slate-600">Weitere Notizen zu Gedanken, die uns durch den Kopf gingen.</p>
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
