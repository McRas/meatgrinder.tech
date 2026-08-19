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
    "about.title":  "Inżynieria, nie improwizacja.",
    "about.p1":     "Pracujemy na styku sceny i instalacji: nagłośnienie, oświetlenie, wideo i LED, a do tego warstwa, o której nikt nie pamięta do momentu awarii — sieć, zasilanie i sterowanie.",
    "about.p2":     "Każdą realizację zaczynamy od dokumentacji: schemat sygnałowy, lista sprzętu, plan obciążeń i rozpiska ekipy. Dzięki temu wiadomo, co i dlaczego stoi na scenie — także wtedy, gdy trzeba coś zmienić na godzinę przed startem.",
    "about.more":   "Więcej o firmie",

    /* --- sekcja: oferta --- */
    "offer.label":  "02 / Oferta",
    "offer.title":  "Zakres usług",
    "offer.lead":   "Sześć obszarów, w których pracujemy kompleksowo — od projektu po serwis.",
    "offer.more":   "Pełna oferta",

    "svc.1.name":   "Realizacje sceniczne",
    "svc.1.desc":   "Nagłośnienie, oświetlenie i wideo dla koncertów, konferencji i eventów firmowych. Sprzęt, ekipa techniczna i obsługa na miejscu.",
    "svc.2.name":   "Ekrany LED",
    "svc.2.desc":   "Dobór rastra, konstrukcja, procesing i kalibracja. Ekrany scenograficzne, tła i ścianki wewnętrzne.",
    "svc.3.name":   "Instalacje AV",
    "svc.3.desc":   "Sale konferencyjne, audytoria i przestrzenie komercyjne. Projekt, montaż, programowanie sterowania i szkolenie użytkownika.",
    "svc.4.name":   "Sieci i niskie prądy",
    "svc.4.desc":   "Sieci LAN/VLAN pod transmisję AV, CCTV, kontrola dostępu i okablowanie strukturalne. Pomiary i dokumentacja powykonawcza.",
    "svc.5.name":   "Produkcja wideo",
    "svc.5.desc":   "Filmy techniczne, dokumentacja realizacji i materiały produktowe. Zdjęcia, montaż, korekcja barwna.",
    "svc.6.name":   "Dystrybucja sprzętu",
    "svc.6.desc":   "Dobór urządzeń pod konkretne zastosowanie, dostawa, konfiguracja startowa i wsparcie techniczne po sprzedaży.",

    /* --- sekcja: kontakt --- */
    "contact.label":   "03 / Kontakt",
    "contact.title":   "Napisz, co masz do zrobienia.",
    "contact.lead":    "Odpowiadamy w ciągu jednego dnia roboczego. Wycenę przygotujemy na podstawie riderów, rzutów lub zwykłego opisu — co masz pod ręką.",
    "contact.k.mail":  "E-mail",
    "contact.k.phone": "Telefon",
    "contact.k.addr":  "Adres",
    "contact.k.hours": "Godziny",
    "contact.v.hours": "Pon.–Pt. 09:00–17:00\nRealizacje: 24/7",
    "contact.more":    "Dane rejestrowe",

    /* --- podstrona: o nas --- */
    "p.about.title": "O nas",
    "p.about.lead":  "Jesteśmy zespołem techników i integratorów. Robimy to, co widać na scenie, i to, co schowane w szafie rack.",
    "p.about.h1":    "Jak pracujemy",
    "p.about.b1":    "Zaczynamy od pytań, nie od oferty. Ustalamy warunki obiektu, wymagania techniczne i realny budżet, a dopiero potem dobieramy sprzęt. Efektem jest dokumentacja, którą można oddać dowolnej ekipie.",
    "p.about.h2":    "Czym się zajmujemy",
    "p.about.b2":    "Technika estradowa, instalacje stałe AV, systemy niskoprądowe i sieci. Prowadzimy też własny dział produkcji wideo — materiały techniczne i dokumentację realizacji nagrywamy sami.",
    "p.about.h3":    "Z kim pracujemy",
    "p.about.b3":    "Agencje eventowe, instytucje kultury, integratorzy i klienci końcowi. Wchodzimy zarówno jako podwykonawca techniczny, jak i generalny wykonawca części AV.",
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
    "p.contact.lead":   "Najszybciej mailem. Przy realizacjach w toku — telefonicznie.",
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
    "nav.about":    "About",
    "nav.offer":    "Services",
    "nav.contact":  "Contact",
    "nav.menu":     "Menu",
    "nav.close":    "Close",
    "foot.rights":  "All rights reserved",
    "foot.made":    "Warsaw, PL",

    "hero.eyebrow": "Live production · AV installations · Low-voltage systems",
    "hero.title":   "We design and commission <em>systems</em> that have to work on the first take.",
    "hero.sub":     "Event production, fixed installations and systems integration. From concept and equipment selection to on-site crew.",
    "hero.scroll":  "Scroll",

    "about.label":  "01 / About",
    "about.title":  "Engineering, not improvisation.",
    "about.p1":     "We work where live production meets fixed installation: audio, lighting, video and LED — plus the layer nobody thinks about until it fails: networking, power and control.",
    "about.p2":     "Every job starts with documentation: signal flow, equipment list, load plan and crew schedule. So it is always clear what is on stage and why — including when something has to change an hour before doors.",
    "about.more":   "More about us",

    "offer.label":  "02 / Services",
    "offer.title":  "What we do",
    "offer.lead":   "Six areas we cover end to end — from design to service.",
    "offer.more":   "Full service list",

    "svc.1.name":   "Live production",
    "svc.1.desc":   "Audio, lighting and video for concerts, conferences and corporate events. Equipment, technical crew and on-site operation.",
    "svc.2.name":   "LED screens",
    "svc.2.desc":   "Pixel pitch selection, structure, processing and calibration. Scenic screens, backdrops and indoor walls.",
    "svc.3.name":   "AV installations",
    "svc.3.desc":   "Meeting rooms, auditoriums and commercial spaces. Design, installation, control programming and user training.",
    "svc.4.name":   "Networks & low voltage",
    "svc.4.desc":   "LAN/VLAN for AV transport, CCTV, access control and structured cabling. Certification and as-built documentation.",
    "svc.5.name":   "Video production",
    "svc.5.desc":   "Technical films, project documentation and product footage. Shooting, editing and colour grading.",
    "svc.6.name":   "Equipment supply",
    "svc.6.desc":   "Hardware matched to the actual use case, delivery, initial configuration and post-sale technical support.",

    "contact.label":   "03 / Contact",
    "contact.title":   "Tell us what needs to happen.",
    "contact.lead":    "We reply within one business day. Send a rider, a floor plan or a plain description — whatever you have.",
    "contact.k.mail":  "Email",
    "contact.k.phone": "Phone",
    "contact.k.addr":  "Address",
    "contact.k.hours": "Hours",
    "contact.v.hours": "Mon–Fri 09:00–17:00\nLive jobs: 24/7",
    "contact.more":    "Company details",

    "p.about.title": "About",
    "p.about.lead":  "We are a team of technicians and integrators. We handle what you see on stage and what stays hidden in the rack.",
    "p.about.h1":    "How we work",
    "p.about.b1":    "We start with questions, not a quote. Venue conditions, technical requirements and the real budget come first; equipment comes after. The result is documentation any crew can pick up.",
    "p.about.h2":    "What we cover",
    "p.about.b2":    "Live production, fixed AV installations, low-voltage systems and networking. We also run an in-house video department — technical content and project documentation are shot by us.",
    "p.about.h3":    "Who we work with",
    "p.about.b3":    "Event agencies, cultural institutions, integrators and end clients. We step in as a technical subcontractor or as the main contractor for the AV scope.",
    "p.about.spec":  "Company data",
    "p.about.k1":    "Head office",
    "p.about.k2":    "Founded",
    "p.about.k3":    "Team",
    "p.about.v3":    "8 in-house + regular subcontracted crew",
    "p.about.k4":    "Coverage",
    "p.about.v4":    "Poland, selected projects across the EU",

    "p.offer.title": "Services",
    "p.offer.lead":  "This is what we do day to day. If your topic is not listed, ask anyway — we usually know who does it properly.",
    "p.offer.cta.t": "Need a quote?",
    "p.offer.cta.b": "Send a rider, a floor plan or three sentences. We will come back with questions and a preliminary estimate.",
    "p.offer.cta.a": "Go to contact",

    "p.contact.title":  "Contact",
    "p.contact.lead":   "Email is fastest. For jobs in progress, call us.",
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
  }
};

const STORE_KEY = "averto.lang";

function currentLang() {
  const saved = localStorage.getItem(STORE_KEY);
  if (saved && DICT[saved]) return saved;
  return (navigator.language || "pl").toLowerCase().startsWith("pl") ? "pl" : "en";
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
