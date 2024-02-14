# Komponentbibliotek for Miljødirektoratet

Består av CSS og React-komponenter for Miljødirektoratet.

Her ligger det kode som implementerer noen utvalgte designelementer, henholdsvis med CSS for styling, og tilhørende React på JavaScript-siden. Koden er publisert som npm-pakker på [npm](https://www.npmjs.com/org/miljodirektoratet), noe som er nødvendig for å få versjonert og tilgjengeliggjort kode for andre utviklere på en god måte. Koden er open-source og lisensiert under MIT-lisens.
Hvilke komponenter som er lagd ligger synlig på [Storybook-en](https://miljodir.github.io/md-components).

Merk! Alle endringer skal godkjennes av Miljodirektoratets kommunikasjonsavdeling og kostnader som påløper for å få endringene implementert skal i de fleste tilfeller dekkes av prosjektet/systemet som ønsker endringen.

## Npm-pakker

Det finnes to npm-pakker som er fritt tilgjengelige fra [npm](https://www.npmjs.com/org/miljodirektoratet). Disse er:

- [md-react](https://www.npmjs.com/package/@miljodirektoratet/md-react) for React komponenter. Kildekoden for denne pakken finnes i dette repoet, i mappen `packages/react`.
- [md-css](https://www.npmjs.com/package/@miljodirektoratet/md-css) for tilhørende CSS. Kildekoden for denne pakken finnes i dette repoet, i mappen `packages/css`.

Dersom React-pakken skal benyttes, _må_ også CSS-pakken brukes.

### Installasjon

Installer pakken(e) fra npm:

```bash
npm install @miljodirektoratet/md-react @miljodirektoratet/md-css
```

Dersom du kun ønsker å bruke CSS (hvis du f.eks ikke bruker React i ditt prosjekt), installerer du kun `@miljodirektoratet/md-css`.

### Bruk

For å bruke pakkene i ditt React prosjekt, importer den komponenten du ønsker å ta i bruk, samt tilhørende CSS:

```javascript
import { MdButton } from '@miljodirektoratet/md-react';
import '@miljodirektoratet/md-css';
```

`@miljodirektoratet/md-css` kan også importeres på overordnet nivå (alle klasser er prefikset med `md-`), slik at stilingen blir tilgjengelig på hele prosjektet. Dette bør gjøres dersom du skal stile komponenter som ikke er laget i React, HTML-strukturen for alle komponentene kan ses i Storybook, denne må da følges.

### Eslint og Prettier

Tooling EsLint og Prettier er aktivert i dette prosjektet. Ved lagring av en fil blir den automatisk formatert samt at eslint utfører autofixer som fjerning av ubrukte importer. Eslint gir også andre varsler som fek.s at variabler er definert men ikke brukt.

Dette er for å sikre at koden som skrives følger de samme standardene, at man unngår feil i koden, at man unngår whitespace-diffs, og at man bruker mindre tid på utvikling. Vennligst sjekk at eslint og prettier er installert og utfører formatering og autofixes ved lagring.

### Eksempler og kode

I [Storybook](https://miljodir.github.io/md-components) finnes alle tilgjengelige komponenter, eksempler på bruk, samt all HTML for alle komponenter.

## Bidrag og/eller endringer

Alle skal kunne bidra med komponenter til biblioteket, og også foreslå endringer. Selve komponentene ligger i `packages/react` og tilhørende css ligger i `packages/css`.

Dersom du ønsker endringer eller ønsker å bidra med nye komponenter, gjøres dette som en PR i dette repoet. Dersom det er en ny komponent, kreves det en reactkomponent med tilhørende css (i sine respektive mapper i strukturen), samt en story for komponenten. Denne legges i `stories`, se en eksisterende story for detaljer om hvordan bygge denne. Husk også i inkludere komponenten som en eksport i `packages/react/index.tsx`, og registrere css importen i `packages/css/index.css`.

For nye komponenter med tilhørende css, skal det også opprettes en README.md fil i mappen for css-fila, som beskriver HTML-strukturen til komponenten. Dette fordi man skal kunne bruke css-filen til å bygge komponenten selv, uten å inkludere React-komponenten. Se en eksisterende css-fil og README.md i `packages/css/..` for eksempler på oppbygging av README-fil.

Før man lager nye komponenter skal design defineres i [Figma](https://www.figma.com/file/6BUqOC0xQZz6AggPvI2iSR/MD---Designsystem?node-id=0%3A1&t=6GlPVAsZW9HT0IEs-0). For å få tilgang til Figma, send en foresørsel til [ithelp](mailto:ithjelp@miljodir.no)

## Kjøre opp utviklingsmiljø for Storybook lokalt

Klon dette repoet og gjør følgende:

```bash
npm install
npm run storybook
```

## Labels på pull-requests

Alle pull requests krever nå at de legges på en label (`major`, `minor` eller `patch`). Disse vil brukes for å bumpe pakke versjonene før de publiseres til npm.
Labels er fortsatt påkrevd selv om pakkene ikke berøres (f.eks. bare storybook endringer), men dette vil heller ikke kjøre workflowene som bumper pakker og dytter til npm.
