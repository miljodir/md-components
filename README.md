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

## Kjøre opp utviklingsmiljø for Storybook lokalt

Klon dette repoet og gjør følgende:

```bash
npm install
npm run storybook
```

### Eslint og Prettier

Tooling EsLint og Prettier er aktivert i dette prosjektet. Ved lagring av en fil blir den automatisk formatert samt at eslint utfører autofixer som fjerning av ubrukte importer. Eslint gir også andre varsler som fek.s at variabler er definert men ikke brukt.

Dette er for å sikre at koden som skrives følger de samme standardene, at man unngår feil i koden, at man unngår whitespace-diffs, og at man bruker mindre tid på utvikling. Vennligst sjekk at eslint og prettier er installert og utfører formatering og autofixes ved lagring.

### Eksempler og kode

I [Storybook](https://miljodir.github.io/md-components) finnes alle tilgjengelige komponenter, eksempler på bruk, samt all HTML for alle komponenter.

## Bidrag og/eller endringer

Alle skal kunne bidra med komponenter til biblioteket, og også foreslå endringer. Selve komponentene ligger i `packages/react` og tilhørende css ligger i `packages/css`.

Dersom du ønsker endringer eller ønsker å bidra med nye komponenter, gjøres dette som en PR i dette repoet. Dersom det er en ny komponent, kreves det en reactkomponent med tilhørende css (i sine respektive mapper i strukturen), samt en story for komponenten. Denne legges i `stories`, se en eksisterende story for detaljer om hvordan bygge denne. Husk også i inkludere komponenten som en eksport i `packages/react/index.tsx`, og registrere css importen i `packages/css/index.css`.

For nye komponenter med tilhørende css, skal det også opprettes en README.md fil i mappen for css-fila, som beskriver HTML-strukturen til komponenten. Dette fordi man skal kunne bruke css-filen til å bygge komponenten selv, uten å inkludere React-komponenten. Se en eksisterende css-fil og README.md i `packages/css/..` for eksempler på oppbygging av README-fil.

Før man lager nye komponenter skal design defineres i [Figma](https://www.figma.com/files/943790322753665785/project/42920500/Milj%C3%B8direktoratets-designsystem?fuid=1167043987031502102). For å få tilgang til Figma, send en foresørsel til [ithelp](mailto:ithjelp@miljodir.no)

NB! Alle PR-er skal merges som en squash commit. Dette for å holde historikken ren og oversiktlig, og få en release-log som er lett å lese.

### Labels på pull-requests

Alle pull requests krever nå at de legges på en label (`major`, `minor` eller `patch`). Disse vil brukes for å automatisk bumpe pakke versjonene før de publiseres til npm.
Labels er fortsatt påkrevd selv om pakkene ikke berøres (f.eks. bare storybook endringer), men dette vil heller ikke kjøre workflowene som bumper pakker og dytter til npm.

### Releases

Når prosjektet har fått relevante endringer, eks en major med breaking changes, eller nye komponenter, eller viktige endringer i eksisterende komponenter, kan det gjøres en release. Dette gjøres ved å lage en ny tag i git, pushe denne til remote, og opprette release fra Github "Releases" menyen. Sett taggen på committen som ble merget etter GitHub Actions har bumpet pakker, og navngi den etter versjonen som ble bumpet.

For å tagge en commit og pushe til remote, gjør følgende:

```bash
git tag -a v0.0.0 -m "Version 0.0.0"
git push origin v0.0.0
```

### Breaking changes

Ved breaking changes, gjør en ny release. Skriv i releasen en god beskrivelse av hva som er endret, og hva som kan være nødvendig å endre i eksisterende kode for å tilpasse seg endringene. Eksempel [her](https://github.com/miljodir/md-components/releases/tag/v2.0.0). Kommenter (hvis relevant) også selve koden med hva som er endret, eks:

```javascript
export interface MdAutocompleteProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | null;
  options: MdAutocompleteOptionProps[];
  defaultOptions?: MdAutocompleteOptionProps[];
  /**
   * Replaces previous 'onChange'-prop for listening to changes in selected option.
   * onChange-prop is now reserved as a standard prop om the inner html input element.
   */
  onSelectOption(_e: MdAutocompleteOptionProps): void;
  /**
   * Replaces previous 'size'-prop for reducing overall width of component from large to either medium or small.
   * Size-prop is now reserved as a standard prop on the inner html input element to specify its width.
   */
  mode?: 'large' | 'medium' | 'small';
}
```
