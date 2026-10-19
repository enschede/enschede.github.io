# Persoonlijke website

Rustige, responsive React-website met zeven homepageblokken en afzonderlijke HTML-ingangen voor blog, Mijn verhaal en longread. Alle inhoud is voorlopig voorbeeldinhoud. De vormgeving is geïnspireerd op Rocked van aThemes (https://athemes.com/theme/rocked/): witte navigatie, een brede fotobanner, stevige koppen en rechte knoppen. Het palet en de fotografie zijn zwart-wit-grijs. Dit is een eigen React-implementatie; het WordPress-theme is niet geïnstalleerd.

## Lokaal bekijken

Gebruik Node.js 22.12 of hoger.

```sh
npm install
npm run dev
```

Open de URL die Vite toont. Productieversie controleren:

```sh
npm run build
npm run preview
```

## Aanpassen

- `src/content.js`: naam, e-mailadres (`email`), telefoon (`phone`), locatie/adres (`location`), LinkedIn-URL (`linkedin`), fotoreferenties en algemene opvultekst. Zolang het e-mailadres leeg is, verschijnt geen werkende mailknop.
- `src/main.jsx`: zeven blokken, navigatie, blogoverzicht, Mijn verhaal en longread. Voeg voor meer artikelen een nieuwe HTML-ingang en de bijbehorende inhoud toe; registreer de ingang in `vite.config.js`.
- `src/style.css`: kleuren, typografie, layouts en mobiele weergave.
- `index.html`, `blog.html`, `mijn-verhaal.html`, `longread.html`: wijzig de metadata naar de eigen inhoud voor publicatie.

Foto's worden geladen via Unsplash en lettertypen via Google Fonts. Er zijn dus externe verbindingen nodig; bij het uitvallen van lettertypen worden systeemfonts gebruikt. Vervang de voorbeeldfoto's desgewenst door eigen bestanden in `public/images/` en gebruik relatieve afbeeldingspaden. Er is geen CMS of backend nodig.

## GitHub Pages

1. Plaats dit project in een GitHub-repository met de branch `main`.
2. Kies in **Settings → Pages → Build and deployment → Source** voor **GitHub Actions**.
3. Push naar `main` of start de workflow **Deploy website to GitHub Pages** handmatig.

De workflow bouwt de site en publiceert `dist`. De relatieve Vite-base ondersteunt zowel `gebruikersnaam.github.io` als `gebruikersnaam.github.io/repository/`. De aparte `.html`-pagina's werken ook bij direct openen of verversen; er is geen serverrouter nodig. Er is vanuit dit project nog niets gepubliceerd.

## Scripts en toekomstige integraties

Er is geen Content Security Policy, sandbox of scriptfilter toegevoegd dat externe integraties zoals Leadinfo tegenhoudt. De aangeleverde Leadinfo-snippet (tracker `LI-6AD4A6F9EACFD`) staat in de head van de vier inhoudelijke HTML-bestanden en laadt asynchroon. De oude cv-URL verwijst alleen door en laadt geen aparte tracker. Houd eigen tokens die geheim moeten blijven buiten deze publieke frontend. Leadinfo wordt bij het openen van de inhoudelijke pagina’s geladen, ook lokaal. Er is geen toestemmingsinterface toegevoegd. Ontvangst van bezoeken in het Leadinfo-account moet na publicatie worden gecontroleerd.

## Toegankelijkheid

Semantische paginadelen, toetsenbordfocus, skiplink, alt-teksten, een menu met `aria-expanded`, respect voor verminderde beweging en een printweergave zijn aanwezig.

De oude URL `cv.html` verwijst door naar `mijn-verhaal.html`, zodat bestaande links blijven werken.

## Herbruikbare contactblokken

`src/components/ContactBlock.jsx` bevat het gedeelde contactblok. Gebruik `<ContactBlock/>` op een pagina of geef optioneel `number="07"` en een eigen `id` mee. De homepage en het eerste verhaal gebruiken dezelfde component.

`src/components/ReactionsBlock.jsx` bevat de uitnodiging om te reageren. Vul `profile.contactFormUrl` in `src/content.js` in om de knop naar het formulier te laten verwijzen. Zolang de URL leeg is, verwijst “Neem contact op” naar het contactblok op dezelfde pagina.
