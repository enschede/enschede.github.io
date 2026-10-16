# Persoonlijke website

Rustige, responsive React-website met zeven homepageblokken en afzonderlijke HTML-ingangen voor blog, cv en longread. Alle inhoud is voorlopig voorbeeldinhoud. Bodielle.nl was tijdens de bouw niet bereikbaar; de vormgeving is daarom een eigen rustige interpretatie.

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

- `src/content.js`: naam, e-mailadres, fotoreferenties en algemene opvultekst. Zolang het e-mailadres leeg is, verschijnt geen werkende mailknop.
- `src/main.jsx`: zeven blokken, navigatie, blogoverzicht, cv en longread. Voeg voor meer artikelen een nieuwe HTML-ingang en de bijbehorende inhoud toe; registreer de ingang in `vite.config.js`.
- `src/style.css`: kleuren, typografie, layouts en mobiele weergave.
- `index.html`, `blog.html`, `cv.html`, `longread.html`: wijzig de metadata naar de eigen inhoud voor publicatie.

Foto's worden geladen via Unsplash en lettertypen via Google Fonts. Er zijn dus externe verbindingen nodig; bij het uitvallen van lettertypen worden systeemfonts gebruikt. Vervang de voorbeeldfoto's desgewenst door eigen bestanden in `public/images/` en gebruik relatieve afbeeldingspaden. Er is geen CMS of backend nodig.

## GitHub Pages

1. Plaats dit project in een GitHub-repository met de branch `main`.
2. Kies in **Settings → Pages → Build and deployment → Source** voor **GitHub Actions**.
3. Push naar `main` of start de workflow **Deploy website to GitHub Pages** handmatig.

De workflow bouwt de site en publiceert `dist`. De relatieve Vite-base ondersteunt zowel `gebruikersnaam.github.io` als `gebruikersnaam.github.io/repository/`. De aparte `.html`-pagina's werken ook bij direct openen of verversen; er is geen serverrouter nodig. Er is vanuit dit project nog niets gepubliceerd.

## Scripts en toekomstige integraties

Er is geen Content Security Policy, sandbox of scriptfilter toegevoegd dat externe integraties zoals Leadinfo tegenhoudt. Voeg de leverancierssnippet toe aan de vier HTML-bestanden of laad deze eenmalig vanuit een gedeelde integratiemodule in `src/main.jsx`. Houd eigen tokens die geheim moeten blijven buiten deze publieke frontend. Voeg bij het daadwerkelijk inschakelen van tracking de toepasselijke toestemmingslogica toe. Er is nu geen tracking actief.

## Toegankelijkheid

Semantische paginadelen, toetsenbordfocus, skiplink, alt-teksten, een menu met `aria-expanded`, respect voor verminderde beweging en een printweergave voor het cv zijn aanwezig.
