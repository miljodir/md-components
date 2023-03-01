# Komponentbibliotek for Miljødirektoratet

Består av CSS og React-komponenter for Miljødirektoratet.

Her ligger det kode som implementerer noen utvalgte designelementer, henholdsvis med CSS for styling, og tilhørende React på JavaScript-siden. Koden er publisert som npm-pakker på [npm](https://www.npmjs.com/org/miljodirektoratet), noe som er nødvendig for å få versjonert og tilgjengeliggjort kode for andre utviklere på en god måte. Koden er open-source og lisensiert under MIT-lisens.
Hvilke komponenter som er lagd ligger synlig på [Storybook-en](https://miljodir.github.io/md-components).

## Kjøre opp utviklingsmiljø (storybook)

```
npm install
npm run storybook
```

## Bidrag og/eller endringer

Alle skal kunne bidra med komponenter til biblioteket, og også foreslå endringer. Selve komponentene ligger i `packages/react` og tilhørende css ligger i `packages/css`.

Dersom du ønsker endringer eller ønsker å bidra med nye komponenter, gjøres dette som en PR i dette repoet. Dersom det er en ny komponent, kreves det en reactkomponent med tilhørende css (i sine respektive mapper i strukturen), samt en story for komponenten. Denne legges i `stories`, se en eksisterende story for detaljer om hvordan bygge denne. Husk også i inkludere komponenten som en eksport i `packages/react/index.tsx`, og registrere css importen i `packages/css/index.css`.

For nye komponenter med tilhørende css, skal det også opprettes en README.md fil i mappen for css-fila, som beskriver HTML-strukturen til komponenten. Dette fordi man skal kunne bruke css-filen til å bygge komponenten selv, uten å inkludere React-komponenten. Se en eksisterende css-fil og README.md i `packages/css/..` for eksempler på oppbygging av README-fil.

Før man lager nye komponenter skal design defineres i [Figma](https://www.figma.com/file/6BUqOC0xQZz6AggPvI2iSR/MD---Designsystem?node-id=0%3A1&t=6GlPVAsZW9HT0IEs-0). For å få tilgang til Figma, send en foresørsel til [ithelp](mailto:ithjelp@miljodir.no)

