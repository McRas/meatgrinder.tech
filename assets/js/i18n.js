/* =========================================================================
   i18n — jeden słownik dla całego serwisu.
   Dodajesz tekst na stronie? Dodaj atrybut data-i18n="klucz" i wpis poniżej.
   Atrybuty (placeholder, aria-label, title) -> data-i18n-attr="placeholder:klucz"
   ========================================================================= */

const DICT = {
  pl: {
    /* --- nawigacja i stopka --- */
    "nav.about":    "O nas",
    "nav.offer":    "Oferta",
    "nav.contact":  "Kontakt",
    "nav.menu":     "Menu",
    "nav.close":    "Zamknij",
    "foot.rights":  "Wszelkie prawa zastrzeżone",
    "foot.made":    "Warszawa, PL",

    /* --- hero --- */
    "hero.eyebrow": "Technika sceniczna · Systemy multimedialne · Rigging",
    "hero.title":   "Zbudujemy Twój <em>event</em>.",
    "hero.sub":     "Oświetlenie eventowe, systemy multimedialne i rigging. Od wsparcia koncepcyjnego, po montaż, obsługę i realizację.",
    "hero.scroll":  "Przewiń",

    /* --- sekcja: o nas --- */
    "about.label":  "01 / O nas",
    "about.title":  "Zapewniamy profesjonalistów.",
    "about.p1":     "Dostarczamy techników, stagehandów i realizatorów dla firm zajmujących się techniką eventową. Dysponujemy zespołem doświadczonych, certyfikowanych specjalistów w tej dziedzinie. Działamy przede wszystkim w obszarze oświetlenia, multimediów i konstrukcji scenicznych oraz riggingu. Przez ostatnie 10 lat w branży pracowaliśmy przy wszelkiego rodzaju sztukach, od wydarzeń stadionowych i festiwali, przez konferencje, po wesela. ",
    "about.p2":     "Nie jest nam obca praca z dokumentacją i rysunkami, natomiast potrafimy też reagować na zmiany i rozwiązywać problemy w czasie rzeczywistym. Do produkcji podchodzimy kompleksowo, od wsparcia przy projekcie, przez policzenie obciążeń obwodów elektrycznych oraz linii sygnałowych, po montaż, obsługę czy nawet realizację wydarzenia z poziomu FOHa.",
    "about.more":   "Więcej o firmie",

    /* --- sekcja: oferta --- */
    "offer.label":  "02 / Oferta",
    "offer.title":  "Zakres usług",
    "offer.lead":   "Cztery obszary, w których pracujemy kompleksowo — od projektu po serwis.",
    "offer.more":   "Pełna oferta",

    "svc.1.name":   "Oświetlenie eventowe",
    "svc.1.desc":   "Montaż oświetlenia scenicznego wraz z okablowaniem. Konfiguracja urządzeń zgodnie z systemem sterowania oświetleniem.",
    "svc.2.name":   "Multimedia",
    "svc.2.desc":   "Montaż ekranów LED, telewizorów i projektorów. Konfiguracja systemów odtwarzania treści, dystrybucja sygnału i obsługa techniczna na miejscu.",
    "svc.3.name":   "Konstrukcje sceniczne / rigging",
    "svc.3.desc":   "Montaż konstrukcji z kratownicy i podwieszanie sprzętu na wciągarkach. Prace wysokościowe z zachowaniem zasad bezpieczeństwa.",
    "svc.4.name":   "Realizacja oświetlenia",
    "svc.4.desc":   "Programowanie scen świetlnych i realizacja na żywo na konsoletach grandMA2 i grandMA3.",
    /*"svc.5.name":   "Produkcja wideo",
    "svc.5.desc":   "Filmy techniczne, dokumentacja realizacji i materiały produktowe. Zdjęcia, montaż, korekcja barwna.",
    "svc.6.name":   "Dystrybucja sprzętu",
    "svc.6.desc":   "Dobór urządzeń pod konkretne zastosowanie, dostawa, konfiguracja startowa i wsparcie techniczne po sprzedaży.",
*/
    /* --- sekcja: kontakt --- */
    "contact.label":   "03 / Kontakt",
    "contact.title":   "W czym możemy Ci pomóc?",
    "contact.lead":    "Zadzwoń, napisz, chętnie też spotkamy się na żywo!",
    "contact.k.mail":  "E-mail",
    "contact.k.phone": "Telefon",
    "contact.k.addr":  "Adres",
    "contact.k.hours": "Godziny",
    "contact.v.hours": "Pon.–Pt. 09:00–17:00\nRealizacje: 24/7",
    "contact.more":    "Dane rejestrowe",

    /* --- podstrona: o nas --- */
    "p.about.title": "O nas",
    "p.about.lead":  "Jesteśmy zespołem techników, stagehandów i realizatorów. Swoją wiedzę i umiejętności zbudowaliśmy w oparciu o 10-letni staż pracy w technologiach sceny. Nasi technicy stale podnoszą swoje kwalifikacje poprzez liczne szkolenia branżowe. ",
    "p.about.h1":    "Jak pracujemy",
    "p.about.b1":    "Jesteśmy z Warszawy, natomiast pracujemy na terenie całej Polski. Dobieramy ludzi w oparciu o wymagane umiejętności i przewidziany zakres prac. ",
    "p.about.h2":    "Czym się zajmujemy",
    "p.about.b2":    "Oświetlenie eventowe, multimedia, rigging. Wsparcie na etapie projektu oświetlenia i zasilania. Realizacja na konsolach MA2 oraz MA3.",
    "p.about.h3":    "Z kim pracujemy",
    "p.about.b3":    "Firmy techniki estradowej, studia designu, preprogrammingi oświetlenia i multimediów, teatry, agencje eventowe.",
    "p.about.spec":  "Dane firmy",
    "p.about.k1":    "Siedziba",
    "p.about.k2":    "Rok założenia",
    "p.about.k3":    "Zespół",
    "p.about.v3":    "8 osób + stała podwykonawcza ekipa techniczna",
    "p.about.k4":    "Zasięg",
    "p.about.v4":    "Polska, wybrane realizacje w UE",

    /* --- podstrona: oferta --- */
    "p.offer.title": "Oferta",
    "p.offer.lead":  "Poniżej zakres, w którym pracujemy na co dzień. Jeśli Twojego tematu tu nie ma — zapytaj, prawdopodobnie i tak wiemy, kto to zrobi dobrze.",
    "p.offer.cta.t": "Potrzebujesz wyceny?",
    "p.offer.cta.b": "Wyślij rider, rzut sali albo opis w trzech zdaniach. Wrócimy z pytaniami i wstępnym kosztorysem.",
    "p.offer.cta.a": "Przejdź do kontaktu",

    /* --- podstrona: kontakt --- */
    "p.contact.title":  "Kontakt",
    "p.contact.lead":   "Zadzwoń, napisz, chętnie też spotkamy się na żywo!",
    "p.contact.form":   "Formularz",
    "p.contact.f.name": "Imię i nazwisko",
    "p.contact.f.mail": "E-mail",
    "p.contact.f.msg":  "Wiadomość",
    "p.contact.f.msgph":"Termin, miejsce, zakres — im więcej szczegółów, tym szybsza odpowiedź.",
    "p.contact.f.send": "Wyślij wiadomość",
    "p.contact.f.note": "Formularz wymaga podpięcia usługi wysyłki — patrz README.",
    "p.contact.reg":    "Dane rejestrowe",
    "p.contact.k.nip":  "NIP",
    "p.contact.k.regon":"REGON",
    "p.contact.k.bank": "Rachunek",

    "lang.aria": "Wybór języka"
  },

  en: {
    /* --- nav & footer --- */
    "nav.about":    "About",
    "nav.offer":    "Services",
    "nav.contact":  "Contact",
    "nav.menu":     "Menu",
    "nav.close":    "Close",
    "foot.rights":  "All rights reserved",
    "foot.made":    "Warsaw, PL",

    /* --- hero --- */
    "hero.eyebrow": "Live production · Multimedia systems · Rigging",
    "hero.title":   "We'll build your <em>event</em>.",
    "hero.sub":     "Event lighting, multimedia systems and rigging. From concept support to installation, operation and live execution.",
    "hero.scroll":  "Scroll",

    /* --- about section --- */
    "about.label":  "01 / About",
    "about.title":  "We supply professionals.",
    "about.p1":     "We supply technicians, stagehands and operators to companies working in event production. We have a team of experienced, certified specialists in this field. We work mainly in lighting, multimedia, and stage structures and rigging. Over the last 10 years in the industry we have worked on every kind of show, from stadium events and festivals, through conferences, to weddings.",
    "about.p2":     "Working with documentation and drawings is nothing new to us, but we can also react to changes and solve problems in real time. We approach production end to end: from project support, through calculating electrical circuit and signal line loads, to installation, operation, and even running the show from FOH.",
    "about.more":   "More about us",

    /* --- offer section --- */
    "offer.label":  "02 / Services",
    "offer.title":  "What we do",
    "offer.lead":   "Four areas we cover end to end — from design to service.",
    "offer.more":   "Full service list",

    "svc.1.name":   "Event lighting",
    "svc.1.desc":   "Installation of stage lighting including cabling. Fixture configuration matched to the lighting control system.",
    "svc.2.name":   "Multimedia",
    "svc.2.desc":   "Installation of LED screens, TVs and projectors. Content playback system setup, signal distribution and on-site technical support.",
    "svc.3.name":   "Stage structures / rigging",
    "svc.3.desc":   "Installation of truss structures and rigging equipment on chain hoists. Work at height carried out to safety standards.",
    "svc.4.name":   "Lighting operation",
    "svc.4.desc":   "Programming lighting cues and live operation on grandMA2 and grandMA3 consoles.",
    /*"svc.5.name":   "Video production",
    "svc.5.desc":   "Technical films, project documentation and product footage. Shooting, editing and colour grading.",
    "svc.6.name":   "Equipment supply",
    "svc.6.desc":   "Hardware matched to the actual use case, delivery, initial configuration and post-sale technical support.",
*/

    /* --- contact section --- */
    "contact.label":   "03 / Contact",
    "contact.title":   "How can we help?",
    "contact.lead":    "Call, write, or let's meet in person — we're happy to.",
    "contact.k.mail":  "Email",
    "contact.k.phone": "Phone",
    "contact.k.addr":  "Address",
    "contact.k.hours": "Hours",
    "contact.v.hours": "Mon–Fri 09:00–17:00\nLive jobs: 24/7",
    "contact.more":    "Registration details",

    /* --- page: about --- */
    "p.about.title": "About",
    "p.about.lead":  "We are a team of technicians, stagehands and operators. We built our knowledge and skills on 10 years of experience in stage technology. Our technicians constantly develop their qualifications through numerous industry training courses.",
    "p.about.h1":    "How we work",
    "p.about.b1":    "We are based in Warsaw, but we work throughout Poland. We select people based on the required skills and the planned scope of work.",
    "p.about.h2":    "What we cover",
    "p.about.b2":    "Event lighting, multimedia, rigging. Support at the lighting and power design stage. Live operation on grandMA2 and grandMA3 consoles.",
    "p.about.h3":    "Who we work with",
    "p.about.b3":    "Live production companies, design studios, lighting and multimedia pre-programmers, theatres, event agencies.",
    "p.about.spec":  "Company data",
    "p.about.k1":    "Head office",
    "p.about.k2":    "Founded",
    "p.about.k3":    "Team",
    "p.about.v3":    "8 in-house + regular subcontracted crew",
    "p.about.k4":    "Coverage",
    "p.about.v4":    "Poland, selected projects across the EU",

    /* --- page: services --- */
    "p.offer.title": "Services",
    "p.offer.lead":  "Below is the scope we cover day to day. If your topic isn't listed — ask anyway, we probably know who does it well.",
    "p.offer.cta.t": "Need a quote?",
    "p.offer.cta.b": "Send a rider, a floor plan or three sentences. We'll come back with questions and a preliminary estimate.",
    "p.offer.cta.a": "Go to contact",

    /* --- page: contact --- */
    "p.contact.title":  "Contact",
    "p.contact.lead":   "Call, write, or let's meet in person — we're happy to.",
    "p.contact.form":   "Message form",
    "p.contact.f.name": "Full name",
    "p.contact.f.mail": "Email",
    "p.contact.f.msg":  "Message",
    "p.contact.f.msgph":"Date, venue, scope — the more detail, the faster the answer.",
    "p.contact.f.send": "Send message",
    "p.contact.f.note": "The form needs a sending service connected — see README.",
    "p.contact.reg":    "Registration details",
    "p.contact.k.nip":  "VAT ID",
    "p.contact.k.regon":"REGON",
    "p.contact.k.bank": "Bank account",

    "lang.aria": "Language"
  },

  de: {
    /* --- Navigation & Footer --- */
    "nav.about":    "Über uns",
    "nav.offer":    "Angebot",
    "nav.contact":  "Kontakt",
    "nav.menu":     "Menü",
    "nav.close":    "Schließen",
    "foot.rights":  "Alle Rechte vorbehalten",
    "foot.made":    "Warschau, PL",

    /* --- Hero --- */
    "hero.eyebrow": "Bühnentechnik · Multimediasysteme · Rigging",
    "hero.title":   "Wir bauen Ihr <em>Event</em>.",
    "hero.sub":     "Eventbeleuchtung, Multimediasysteme und Rigging. Von der Konzeptunterstützung über Aufbau und Betrieb bis zur Durchführung.",
    "hero.scroll":  "Scrollen",

    /* --- Abschnitt: Über uns --- */
    "about.label":  "01 / Über uns",
    "about.title":  "Wir stellen Profis.",
    "about.p1":     "Wir stellen Technikern, Stagehands und Operators für Unternehmen im Bereich Eventtechnik. Wir verfügen über ein Team erfahrener, zertifizierter Fachkräfte. Wir arbeiten vor allem in den Bereichen Beleuchtung, Multimedia sowie Bühnenkonstruktionen und Rigging. In den letzten 10 Jahren in der Branche haben wir bei jeder Art von Veranstaltung mitgewirkt, von Stadion-Events und Festivals über Konferenzen bis hin zu Hochzeiten.",
    "about.p2":     "Die Arbeit mit Dokumentation und Zeichnungen ist uns nicht fremd, wir können aber auch auf Änderungen reagieren und Probleme in Echtzeit lösen. Wir gehen Produktionen ganzheitlich an: von der Unterstützung beim Projekt über die Berechnung der Belastung von Stromkreisen und Signalleitungen bis hin zu Aufbau, Betrieb und sogar der Durchführung der Veranstaltung vom FOH-Platz aus.",
    "about.more":   "Mehr über uns",

    /* --- Abschnitt: Angebot --- */
    "offer.label":  "02 / Angebot",
    "offer.title":  "Leistungsumfang",
    "offer.lead":   "Vier Bereiche, die wir komplett abdecken — von der Planung bis zum Service.",
    "offer.more":   "Vollständiges Angebot",

    "svc.1.name":   "Eventbeleuchtung",
    "svc.1.desc":   "Aufbau der Bühnenbeleuchtung inklusive Verkabelung. Konfiguration der Geräte passend zum Lichtsteuerungssystem.",
    "svc.2.name":   "Multimedia",
    "svc.2.desc":   "Aufbau von LED-Wänden, Fernsehern und Projektoren. Einrichtung der Content-Wiedergabesysteme, Signalverteilung und technische Betreuung vor Ort.",
    "svc.3.name":   "Bühnenkonstruktionen / Rigging",
    "svc.3.desc":   "Aufbau von Traversenkonstruktionen und Anschlagen von Equipment an Kettenzügen. Höhenarbeiten unter Einhaltung der Sicherheitsvorschriften.",
    "svc.4.name":   "Lichtregie",
    "svc.4.desc":   "Programmierung von Lichtszenen und Live-Fahren auf grandMA2- und grandMA3-Pulten.",
    /*"svc.5.name":   "Videoproduktion",
    "svc.5.desc":   "Technische Filme, Projektdokumentation und Produktaufnahmen. Dreh, Schnitt, Farbkorrektur.",
    "svc.6.name":   "Gerätevertrieb",
    "svc.6.desc":   "Auswahl passender Geräte, Lieferung, Erstkonfiguration und technischer Support nach dem Verkauf.",
*/

    /* --- Abschnitt: Kontakt --- */
    "contact.label":   "03 / Kontakt",
    "contact.title":   "Wie können wir helfen?",
    "contact.lead":    "Rufen Sie an, schreiben Sie uns, oder lassen Sie uns persönlich treffen!",
    "contact.k.mail":  "E-Mail",
    "contact.k.phone": "Telefon",
    "contact.k.addr":  "Adresse",
    "contact.k.hours": "Öffnungszeiten",
    "contact.v.hours": "Mo.–Fr. 09:00–17:00\nEinsätze: 24/7",
    "contact.more":    "Firmendaten",

    /* --- Unterseite: Über uns --- */
    "p.about.title": "Über uns",
    "p.about.lead":  "Wir sind ein Team aus Technikern, Stagehands und Operators. Unser Wissen und Können basiert auf 10 Jahren Erfahrung in der Bühnentechnik. Unsere Techniker erweitern ihre Qualifikationen laufend durch zahlreiche Branchenschulungen.",
    "p.about.h1":    "Wie wir arbeiten",
    "p.about.b1":    "Wir kommen aus Warschau, arbeiten aber landesweit in ganz Polen. Wir stellen unser Team je nach benötigten Fähigkeiten und geplantem Arbeitsumfang zusammen.",
    "p.about.h2":    "Womit wir uns befassen",
    "p.about.b2":    "Eventbeleuchtung, Multimedia, Rigging. Unterstützung bei der Planung von Licht und Stromversorgung. Live-Fahren auf grandMA2- und grandMA3-Pulten.",
    "p.about.h3":    "Mit wem wir arbeiten",
    "p.about.b3":    "Bühnentechnikfirmen, Designstudios, Vorprogrammierer für Licht und Multimedia, Theater, Eventagenturen.",
    "p.about.spec":  "Firmendaten",
    "p.about.k1":    "Sitz",
    "p.about.k2":    "Gegründet",
    "p.about.k3":    "Team",
    "p.about.v3":    "8 Personen + feste externe Technikcrew",
    "p.about.k4":    "Einsatzgebiet",
    "p.about.v4":    "Polen, ausgewählte Projekte in der EU",

    /* --- Unterseite: Angebot --- */
    "p.offer.title": "Angebot",
    "p.offer.lead":  "Im Folgenden unser täglicher Leistungsumfang. Ist Ihr Thema nicht dabei — fragen Sie trotzdem, wir wissen wahrscheinlich, wer es gut macht.",
    "p.offer.cta.t": "Brauchen Sie ein Angebot?",
    "p.offer.cta.b": "Schicken Sie einen Rider, einen Raumplan oder drei Sätze Beschreibung. Wir melden uns mit Rückfragen und einem ersten Kostenvoranschlag.",
    "p.offer.cta.a": "Zum Kontakt",

    /* --- Unterseite: Kontakt --- */
    "p.contact.title":  "Kontakt",
    "p.contact.lead":   "Rufen Sie an, schreiben Sie uns, oder lassen Sie uns persönlich treffen!",
    "p.contact.form":   "Formular",
    "p.contact.f.name": "Name",
    "p.contact.f.mail": "E-Mail",
    "p.contact.f.msg":  "Nachricht",
    "p.contact.f.msgph":"Termin, Ort, Umfang — je mehr Details, desto schneller die Antwort.",
    "p.contact.f.send": "Nachricht senden",
    "p.contact.f.note": "Das Formular benötigt einen angebundenen Versanddienst — siehe README.",
    "p.contact.reg":    "Firmendaten",
    "p.contact.k.nip":  "USt-IdNr.",
    "p.contact.k.regon":"REGON",
    "p.contact.k.bank": "Bankverbindung",

    "lang.aria": "Sprache"
  }
};

const STORE_KEY = "averto.lang";

function currentLang() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved && DICT[saved]) return saved;
  const nav = (navigator.language || "pl").toLowerCase();
  if (nav.startsWith("pl")) return "pl";
  if (nav.startsWith("de")) return "de";
  return "en";
}

function applyLang(lang) {
  const dict = DICT[lang] || DICT.pl;
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const val = dict[el.dataset.i18n];
    if (val === undefined) return;
    // dopuszczamy proste znaczniki (<em>, <br>) w słowniku
    if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
    else el.textContent = val;
  });

  document.querySelectorAll("[data-i18n-attr]").forEach(el => {
    el.dataset.i18nAttr.split(";").forEach(pair => {
      const [attr, key] = pair.split(":").map(s => s.trim());
      if (dict[key] !== undefined) el.setAttribute(attr, dict[key]);
    });
  });

  document.querySelectorAll(".lang__btn").forEach(btn => {
    const on = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", on);
    btn.setAttribute("aria-pressed", String(on));
  });

  localStorage.setItem(STORE_KEY, lang);
}

function initI18n() {
  applyLang(currentLang());
  document.querySelectorAll(".lang__btn").forEach(btn => {
    btn.addEventListener("click", () => applyLang(btn.dataset.lang));
  });
}

/* udostępniamy globalnie — bez modułów ES, dzięki czemu strona działa
   również po zwykłym otwarciu pliku index.html w przeglądarce */
window.I18N = { initI18n, applyLang, currentLang, DICT };
