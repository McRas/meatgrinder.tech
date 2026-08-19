# AVERTO — strona wizytówka

Statyczna strona: 4 pliki HTML, jeden CSS, dwa JS. Bez frameworka, bez builda,
bez zależności poza fontami z Google Fonts.

## Uruchomienie

Najprościej — otwórz `index.html` w przeglądarce. Wszystko działa (skrypty są
klasyczne, nie moduły ES).

Lokalny serwer (zalecany do testów wideo i cache):

```bash
cd strona
python3 -m http.server 8000
# http://localhost:8000
```

Publikacja: wrzuć całą zawartość katalogu na dowolny hosting statyczny —
zwykły FTP, Netlify, Cloudflare Pages, GitHub Pages. Nic nie trzeba budować.

## Struktura

```
strona/
├── index.html          strona główna (hero na filmie + 3 sekcje)
├── o-nas.html          dedykowana zakładka
├── oferta.html         dedykowana zakładka
├── kontakt.html        dedykowana zakładka + formularz
├── assets/
│   ├── css/style.css   cały styl, tokeny na górze pliku
│   ├── js/i18n.js      słownik PL/EN + przełącznik
│   ├── js/main.js      navbar, menu mobilne, timecode, intro
│   ├── img/            logo, flagi, favicon, poster wideo
│   └── video/          hero.mp4 / hero.webm — patrz README.txt w środku
└── README.md
```

## Co podmienić na starcie

| Element | Gdzie |
|---|---|
| Nazwa firmy | `nav__word` w każdym HTML + tytuły stron + stopka |
| Logo | `assets/img/logo-mark.svg` (znak) i `logo.svg` (znak + nazwa) |
| Film | `assets/video/hero.mp4` — instrukcja w `assets/video/README.txt` |
| Teksty | **wyłącznie** `assets/js/i18n.js` — tekst w HTML to tylko fallback |
| Dane kontaktowe | `index.html` (sekcja kontakt) i `kontakt.html` |
| Kolor akcentu | `--signal` w `style.css` |

## Teksty i tłumaczenia

Każdy przetłumaczalny element ma atrybut `data-i18n="klucz"`. Wartości siedzą
w `assets/js/i18n.js` w obiekcie `DICT`. Żeby dodać nowy tekst:

```html
<p data-i18n="offer.newthing">Tekst zapasowy</p>
```
```js
pl: { "offer.newthing": "Nowy tekst" },
en: { "offer.newthing": "New copy" }
```

Atrybuty (placeholder, aria-label, title) przez `data-i18n-attr="placeholder:klucz"`.
Wybór języka zapisuje się w `localStorage`; przy pierwszej wizycie strona
sprawdza język przeglądarki.

## Flagi

Domyślnie przełącznik to sam tekst `PL / EN` — czyściej pasuje do monospace
i nie zależy od emoji. Flagi SVG są w `assets/img/` i wystarczy je odsłonić:
usuń klasę `lang--text` z `<div class="lang lang--text">` w czterech plikach HTML.

## Formularz kontaktowy

`kontakt.html` ma `action="#"` — nic nie wysyła. Najszybsze podpięcie:

- **Formspree**: `action="https://formspree.io/f/TWOJ_ID" method="post"`
- **Netlify Forms** (gdy hostujesz na Netlify): dodaj `netlify` do `<form>`
- **Własny backend**: podmień `action` na swój endpoint

## Dodanie zakładki Galeria (na przyszłość)

1. `galeria.html` — skopiuj `oferta.html`, podmień treść.
2. W czterech plikach HTML dopisz w `nav__links`:
   `<a href="galeria.html" data-i18n="nav.gallery">Galeria</a>`
3. W `i18n.js` dodaj `"nav.gallery"` dla `pl` i `en`.

Do siatki zdjęć wystarczy `display:grid; grid-template-columns: repeat(auto-fill, minmax(280px,1fr))`
plus `loading="lazy"` na obrazkach. Zdjęcia w WebP, długi bok 1600 px.

## Dostępność i wydajność

- Kontrast tekstu podstawowego `#E6E6E6` na `#050505` ≈ 16:1.
- `prefers-reduced-motion` wyłącza intro, animacje wejścia i smooth scroll.
- Widoczny focus klawiaturowy (bursztynowa obwódka).
- Menu mobilne poniżej 860 px, pełnoekranowe.
- Fonty z Google Fonts. Chcesz zero zewnętrznych requestów — pobierz IBM Plex
  z ibm.com/plex, wrzuć do `assets/fonts/` i podmień `<link>` na `@font-face`.
