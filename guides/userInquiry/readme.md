# Svartjenesten: En guide for utvikling av løsning for å koble på Dialogen/Nilex

## Inndeling

Tjenesten er delt i tre deler

- Søk
- Chat (copilot)
- Dialogen (Nilex)

De to første vises side ved side, mens den siste ikke vises før brukeren eventuelt trykker på "Send en henvendelse" - da settes `showForm` til true.

Det er en konfigurasjonssetting `showCoPilot` for om chatbot skal vises eller ikke. Hvis den skal vises lastes den in fra en konfigurert URL inn i en iframe.

Forenklet JSX template som illustrerer dette:

```jsx
{this.state.showForm ?
    <div className='c_userinquiry-bar-form-container'>
        <DialogEntryForm />
    </div>
    :    
    {!this.props.showCoPilot &&
        <div className='c_userinquiry-bar-content__search g_row'>
            <SearchForm />
        </div>
    }
    {this.props.showCoPilot &&
    <div className='grid'>
        <div className='c_userinquiry-bar-content__search row'>
            <div className='c_userinquiry-bar-content__search__copilot col-small-12 col-large-6'>
                <SearchForm />
            </div>
                <div className='c_userinquiry-bar-content__search__copilot__frame col-small-12 col-large-6'>
                <span className="c_text-input__label-text">{this.props.coPilotHeading}</span>
                <iframe src={this.props.coPilotUrl} frameBorder="0"></iframe>
            </div>
        </div>           
    </div>
    }
}

```

# Chat (copilot)
Denne komponenten lastes inn som en iframe, og krever at man har satt opp en Copilot eller annen chatbot som kan lastes inn på denne måten. Husk å oppdatere CSP hvis det er i bruk på nettstedet.

# Dialogen / Nilex

## Oppsett

Det må settes opp en Nilex-backend i kundens miljø. Dette gjøres av leverandøren og er utenfor skopet til denne veiledningen.
Backend eksponerer et HTTP-API som andre løsninger kan kommunisere med. Denne veiledningen gjelder innsending av forespørsler.

## Frontend

Siden Nilex' API spesifiserer kravene til innsendte data er det nødvendig at skjemaet inneholder følgende felter:

Om brukeren:

- Navn
- E-postadresse
- Telefonnummer

Forespørsel:

- Emne
- Spørsmål (fritekst)
- 0 eller flere filer

Kategori:

- Denne listen må matche det som er definert i Nilex-systemet.

## Backend

Det er nødvendig å sende data fra frontend til backend, for å ha en trygg kommunikasjon mellom backend og Nilex' backend. Frontend-klienten kan ikke håndtere autentiseringen på en trygg måte.

APIet ser ut til å håndtere både camelCase og PascalCase JSON.

### Autentisering

APIet bruker en HTTP flyt for autentisering. Først henter man ut et JWT token fra dette endepunktet:

```
POST https://{settings.nilexApiUrl}/api/logon/TakeAuthenticationToken?email={settings.Email}&password={settings.Password}
```

Responsen ser slik ut hvis det går bra:

```json
{
  "Result": {
    "Token": "ey...<klippet bort>",
    "IsError": false,
    "AuthResultMessage": null,
    "Expires": "2024-11-26T14:25:53.4752825Z"
  },
  "Success": true,
  "Error": null,
  "UnauthorizedRequest": false
}
```

Deretter sender man med bearer token'et i Authorization header for alle requester, det vil si

```
Authorization: Bearer {token}
```

### Uthenting av bruker

Nilex' lagrer brukere basert på e-post-adressen. Før innsending av forespørsel må man forsøke å søke opp bruker-iden til gitt e-postadresse. Det gjør man ved å sende inn en SearchDto til endepunktet under:

```json
{
  "entityType": "Person",
  "columns": ["Id", "Email", "EMailAddress"],
  "search": "email@domain.com",
  "searchColumns": ["Email", "EMailAddress"]
}
```

```
POST https://{settings.nilexApiUrl}/api/publicapi/getentitylistbyquery
```

Respons:

```json
{
  "Total": 1,
  "Data": [
    {
      "Id": 12345,
      "Email": "epost@domene.no",
      "EMailAddress": "epost@domene.no",
      "EntityType": "Person"
    }
  ],
  "Errors": null,
  "IsError": false
}
```

### Opprettelse av bruker

Dersom brukeren ikke finnes fra før av må det opprettes en ny brukerid. Dette gjøres ved å POSTe en PersonDto til endepunktet under.

```json
{
  "entityType": "Person",
  "email": "email@domain.com",
  "eMailAddress": "email@domain.com",
  "firstName": "Name",
  "fullName": "Name",
  "mobilePhone": "12345678", // numbers only - no + or other characters
  "sysLanguage": "15" //15 == Norwegian - 1 == English
}
```

```
POST https://{settings.nilexApiUrl}/api/publicapi/saveentity
```

### Innsending av forespørsel

Til slutt kan man sende inn forespørselen med bruker-id til innsenderen.

Noen ting å merke seg her:

- BaseEntityStatusId er hardkodet til 1
- CategoryId er definert i Nilex
- baseEndUser er bruker-id fra tidligere steg
- attachment-dto sin "data" er base64-encodet filvedlegg

```json
{
  "baseHeader": "Emne for forespørselen",
  "baseDescription": "Forespørsel brødtekst....", //min 3 characters, max 750
  "baseEntityStatusId": 1,
  "categoryId": "12",
  "entityType": "Ticket",
  "u_Opprinnelse": "https://url.no/siden/dette/er/sendt/fra",
  "baseEndUser": "26333",
  "dynamicProperties": {
    "PageName": "Sidenavn"
  },
  "attachments": [
    {
      "contentType": "ContentType",
      "fileName": "FilNavn",
      "fileSize": "Filstørrelse(bytes)",
      "data": "base64-encoda-data"
    }
  ]
}
```

## Feilsøking

### Får ikke hentet token

Hvis man har feil brukernavn eller passord, vil token-endepunktet indikere det med at IsError: true og AuthResultMessage: "invalid_grant" som her:

```json
{
  "Result": {
    "Token": null,
    "IsError": true,
    "AuthResultMessage": "invalid_grant",
    "Expires": "0001-01-01T00:00:00Z"
  },
  "Success": true,
  "Error": null,
  "UnauthorizedRequest": false
}
```

### 401

Dersom tokenet er ugyldig for en operasjon vil man få feilkode 401 Unauthorized.
Token kan være gått ut på tid eller brukeren har ikke fått tilgang til den operasjonen man prøver å utføre.
