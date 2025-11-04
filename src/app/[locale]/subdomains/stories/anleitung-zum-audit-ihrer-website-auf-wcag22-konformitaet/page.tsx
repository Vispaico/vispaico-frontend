import type { Metadata } from 'next';
import ReactMarkdown from 'react-markdown';

import { Link } from '@/i18n/navigation';
import { getStoryContext, storiesBasePath } from '@/data/stories';
import { resolveLocale } from '@/i18n/locale-utils';

const ROUTE_SEGMENT = 'anleitung-zum-audit-ihrer-website-auf-wcag22-konformitaet';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  return {
    title: story.metadataTitle,
    description: story.metadataDescription
  };
}

export default async function HowToAuditYourWebsiteForWcag22ComplianceStory({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const resolvedLocale = resolveLocale(locale);
  const { story, relatedStories } = getStoryContext(ROUTE_SEGMENT, resolvedLocale);
  const publishDateFormatter = new Intl.DateTimeFormat(resolvedLocale, {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  const formattedDate = publishDateFormatter.format(new Date(story.publishDate));
  const articleMarkdown = String.raw`![](https://images.unsplash.com/photo-1565665532830-0dfd1facb1a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=2070)

### **Schritt 1: Definiere den Umfang Deines Audits**

Bevor Du mit dem Testen beginnst, musst Du wissen, was Du testest. Frage Dich:

- Welche digitalen Assets prüfen wir? (Die gesamte Website? Bestimmte Seiten? Web-Apps? PDFs?)
- Welches Konformitätslevel streben wir an? (Normalerweise WCAG 2.2 AA, was die Standardempfehlung ist)
- Welche Browser und Geräte müssen wir unterstützen?
- Gibt es bestimmte Benutzerreisen, die wir priorisieren müssen?

Dokumentiere dies klar. Scope Creep ist real, und klare Grenzen machen das Audit schneller und fokussierter.

### **Schritt 2: Führe automatisierte Scans durch**

Automatisierte Tools sind Deine erste Verteidigungslinie. Sie sind schnell, gründlich und fangen viele niedrig hängende Früchte ab.

**Empfohlene automatisierte Tools:**
- **Axe DevTools** – Chrome-Erweiterung, die bei häufigen Problemen unglaublich genau ist
- **WAVE** – Web-Barrierefreiheits-Evaluierungstool, ideal für visuelles Feedback
- **Siteimprove** – Scannen auf Unternehmensebene mit Priorisierung
- **Accessibility Insights** – Microsofts kostenloses Tool, hervorragend für die WCAG-Konformität
- **Browser-Entwicklertools** – Chrome und Firefox haben integrierte Barrierefreiheits-Panels; nutze sie

Führe diese Tools auf Deinen Schlüsselseiten aus. Sie werden Probleme wie fehlenden Alternativtext, Farbkontrastprobleme, fehlende Formularbeschriftungen und ARIA-Fehler kennzeichnen. Dokumentiere alles.

**Profi-Tipp:** Automatisierte Tools fangen vielleicht 40 % der echten Barrierefreiheitsprobleme ab. Der Rest erfordert menschliches Urteilsvermögen und Tests.

### **Schritt 3: Manuelles Testen – Die eigentliche Arbeit beginnt**

Hier findest Du die Probleme, die automatisierte Tools übersehen.

**Tastaturnavigation & Fokusmanagement**

Greif zur Tastatur. Ziehe Deine Maus ab (oder diszipliniere Dich einfach, sie nicht zu benutzen).
- Kannst Du in einer logischen Reihenfolge durch die gesamte Seite tabben?
- Kannst Du jederzeit sehen, welches Element den Fokus hat?
- Kannst Du Schaltflächen und Links mit Enter oder der Leertaste aktivieren?
- Gibt es Tastaturfallen, in denen Du stecken bleibst?
- Kannst Du sich wiederholende Navigation mit Sprunglinks überspringen?

Tastaturnavigation ist absolut grundlegend. Wenn jemand Deine Website nicht mit einer Tastatur navigieren kann, kann er sie nicht benutzen, Punkt.

**Screenreader-Tests**

Dieser Punkt ist nicht verhandelbar. Du musst tatsächlich hören, was ein Screenreader-Benutzer erlebt.

**Tools:**
- **NVDA (Windows)** – Kostenlos, Open-Source, sehr genau
- **VoiceOver (Mac/iOS)** – In Apple-Geräte integriert, Industriestandard
- **JAWS (Windows)** – Industriestandard, kostenpflichtig, umfassend

Wähle eines aus und teste Deine gesamte Benutzerreise. Surfe wie ein Screenreader-Benutzer.

Achte auf:
- Ergibt die Seitenstruktur Sinn, wenn Du sie nicht sehen kannst?
- Werden Bilder richtig mit Alternativtext beschrieben?
- Sind Formularfelder klar beschriftet?
- Kannst Du verstehen, was interaktive Elemente tun?
- Wird dynamischer Inhalt (Dropdowns, Modals, Benachrichtigungen) angesagt?

Mach Dir Notizen. Viele Probleme werden offensichtlich, wenn Du sie hörst.

**Farbkontrast & Visuelles Design**

Überspringe dies nicht. Schlechter Farbkontrast schließt Menschen mit Sehbehinderungen aus und macht Deine Website für alle schwieriger zu bedienen.

**Tools:**
- **Tanaguru Contrast-Finder** – Einfach, kostenlos, präzise
- **Colour Contrast Analyser** – Desktop-Tool, sehr gründlich
- **Chrome DevTools** – Integrierter Kontrastprüfer

Standards: Normaler Text benötigt ein Kontrastverhältnis von mindestens 4,5:1. Großer Text benötigt 3:1. Teste Deine tatsächlichen Farben mit echtem Text.

Überprüfe auch:
- Ist die Textgröße lesbar? (Vermeide alles, was kleiner als 12px ist)
- Gibt es genügend Abstand zwischen Zeilen und Elementen?
- Kommuniziert Farbe allein wichtige Informationen? (z. B. „Fehler in Rot“, ohne auch „Fehler“ zu sagen)

**Interaktion & Dynamische Inhaltsprüfung**

Moderne Websites haben interaktive Elemente: Dropdowns, Modals, Schieberegler, Tabs, Autocomplete-Formulare.

Teste jedes einzelne:
- Können Tastaturbenutzer damit interagieren?
- Kündigen Screenreader Zustandsänderungen an? (z. B. „Akkordeon erweitert“)
- Bleiben Fokusindikatoren sichtbar?
- Wird dynamischer Inhalt für Screenreader angekündigt?

Hier ist die Barrierefreiheit von JavaScript wirklich wichtig. Viele Entwickler erstellen schöne Interaktionen, die für Benutzer von Hilfstechnologien völlig unbrauchbar sind.

### **Schritt 4: Benutzertests mit Menschen mit Behinderungen**

Hier ist die harte Wahrheit: Entwickler und Berater werden, selbst mit den besten Absichten, Dinge übersehen. Echte Benutzer mit Behinderungen werden Probleme finden, an die Du nie gedacht hast.

Wenn Dein Budget es zulässt, beziehe Benutzer mit unterschiedlichen Behinderungen ein:
- Personen, die Screenreader verwenden
- Personen, die nur mit der Tastatur navigieren
- Personen mit motorischen Behinderungen
- Personen mit kognitiven Behinderungen

Lass sie echte Aufgaben auf Deiner Website erledigen. Beobachte, wo sie Schwierigkeiten haben. Höre auf ihr Feedback.

Dies geht nicht nur um Konformität – es geht darum, echte menschliche Erfahrungen zu verstehen. Es verändert für immer, wie Du über Barrierefreiheit denkst.

### **Schritt 5: Dokumentiere Deine Ergebnisse**

Jetzt hast Du Daten von automatisierten Tools, manuellen Tests und Benutzerfeedback. Zeit, sie in einem aussagekräftigen Bericht zusammenzustellen.
Dein Bericht sollte enthalten:

**Für jedes gefundene Problem:**
- Beschreibung des Problems
- Welches WCAG 2.2-Kriterium es verletzt (z. B. „WCAG 2.2 1.4.3 Kontrast (Minimum)“)
- Schweregrad (Kritisch, Hoch, Mittel, Niedrig)
- Welche Seiten betroffen sind
- Screenshots oder Aufnahmen, falls hilfreich
- Klare Vorschläge zur Behebung
- Geschätzter Aufwand für die Behebung

**Gesamtergebnisse:**
- Erreichtes Konformitätslevel (A, AA oder AAA)
- Konformitätsstatus (Konform, Größtenteils konform, Nicht konform)
- Zusammenfassung der wichtigsten Probleme
- Priorisierte Roadmap zur Behebung

Mach es umsetzbar. Das Ziel ist nicht, das Entwicklungsteam zu überfordern – es geht darum, ihnen eine klare Richtung zu geben, was zu beheben ist und warum.

### **Empfohlene Tools – Dein Barrierefreiheits-Toolkit**

**Automatisierte Scan-Tools:**
- Axe DevTools (kostenlos)
- WAVE (kostenlos)
- Siteimprove (kostenpflichtig)
- Accessibility Insights (kostenlos)

**Screenreader:**
- NVDA (kostenlos, Windows)
- VoiceOver (kostenlos, Mac/iOS)
- JAWS (kostenpflichtig, Windows)

**Farbkontrastprüfer:**
- Tanaguru Contrast-Finder (kostenlos)
- Colour Contrast Analyser (kostenlos)

**Browser-Entwicklertools:**
- Chrome DevTools Accessibility Panel (kostenlos)
- Firefox Developer Tools (kostenlos)

**Cross-Device- & Cross-Browser-Tests:**
- BrowserStack (kostenpflichtig)
- Sauce Labs (kostenpflichtig)

**Projektmanagement & Tracking:**
- Jira (kostenpflichtig)
- Trello (kostenlos/kostenpflichtig)
- Asana (kostenlos/kostenpflichtig)

### **Zertifizierung & Dokumentation: Formalisierung Deiner Konformität**

Sobald Du Probleme geprüft und behoben hast, ist es an der Zeit, Deine Konformität formell zu dokumentieren.

**Erstelle eine Erklärung zur Barrierefreiheit**

Dies ist eine öffentliche Erklärung, die Folgendes umreißt:
- Welche Websites/Web-Apps Du als barrierefrei beanspruchst
- Gegen welche Standards Du getestet hast (WCAG 2.2 AA, EN 301 549 usw.)
- Bekannte Einschränkungen oder Probleme
- Datum des Audits
- Wie man Barrierefreiheitsprobleme meldet

Veröffentliche dies auf Deiner Website. Benutzer schätzen Transparenz.

**Stelle einen formellen Konformitätsanspruch aus**

Orientiere Dich an den W3C-Richtlinien und gib Dein Konformitätslevel an:
- **Level A:** Grundlegende Barrierefreiheit
- **Level AA:** Empfohlenes Level, deckt die meisten Bedürfnisse ab
- **Level AAA:** Fortgeschrittene Barrierefreiheit, selten erforderlich

Die meisten Konformitätsanforderungen verlangen Level AA.

**Verwende Standardvorlagen**

Das **Voluntary Product Accessibility Template (VPAT)** ist ein Industriestandard zur Kommunikation der Konformität. Es ist detailliert, aber die Mühe wert – Kunden und Aufsichtsbehörden erwarten es.

Vorlage erhältlich von der Arbeitsgruppe Accessibility Conformance Testing (ACT).

**Richte eine kontinuierliche Überwachung ein**

Einmalige Audits reichen nicht aus. Deine Website ändert sich – Inhalte werden aktualisiert, Funktionen hinzugefügt, Code entwickelt sich weiter.

Richte regelmäßige erneute Audits ein:
- Vierteljährlich für stark frequentierte Websites
- Jährlich für stabile Websites
- Nach größeren Updates oder Neugestaltungen

Dies hält Dich im Laufe der Zeit konform, anstatt später massive Behebungen zu erfordern.

### **Deine Checkliste für das Barrierefreiheits-Audit**

Bevor Du Deine Website für barrierefrei erklärst:
- ✓ Automatisierte Scans auf allen Schlüsselseiten ausgeführt
- ✓ Manuelle Tastaturnavigation von Ende zu Ende getestet
- ✓ Screenreader-Tests abgeschlossen (mindestens NVDA + ein weiteres)
- ✓ Farbkontrast überprüft
- ✓ Formulare und interaktive Elemente getestet
- ✓ Dynamischer Inhalt wird korrekt angekündigt
- ✓ Benutzertests mit Menschen mit Behinderungen durchgeführt
- ✓ Alle Probleme mit Schweregrad und Behebungsschritten dokumentiert
- ✓ Kritische Probleme behoben
- ✓ Konformitätserklärung erstellt
- ✓ VPAT- oder Konformitätsvorlage ausgefüllt
- ✓ Erklärung zur Barrierefreiheit veröffentlicht
- ✓ Plan zur kontinuierlichen Überwachung vorhanden
- ✓ Audit-Bericht bereitgestellt

### **Abschließende Gedanken**

Ein Barrierefreiheits-Audit ist gründlich. Es braucht Zeit. Aber es ist nicht mysteriös oder magisch – es ist systematisches Testen mit den richtigen Werkzeugen und der richtigen Einstellung.

Der Lohn? Eine Website, die für alle funktioniert, den EU-Vorschriften entspricht und Deinen Benutzern tatsächlich dient. Das ist die Mühe wert.

Wenn Du nicht sicher bist, wo Du anfangen sollst, ist das in Ordnung. Genau das machen wir bei Vispaico. Wir prüfen Websites, finden die Probleme, beheben sie und helfen Dir, langfristig konform zu bleiben.

Lass uns ein Web bauen, das für alle zugänglich ist.
`;

  return (
    <>
      <header className="space-y-4">
        <p className="text-xs font-semibold tracking-[0.35em] uppercase text-blue-500">Zugang für alle</p>
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
