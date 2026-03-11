---
icon: lucide/user-round-search
title: Datavindplaats publicatie
---

# Minimale metadatering voor publicatie op Datavindplaats

> Instapgids binnen het Vlaamse metadata-ecosysteem


## Introductie

### Doelstelling van deze handleiding

De Vlaamse overheden beschikken gezamenlijk over een schat aan data, services en informatie, die niet altijd even goed te vinden zijn. Met Datavindplaats biedt het agentschap Digitaal Vlaanderen een etalage van geografische en niet-geografische Datasets en Services die in Metadata Vlaanderen beschreven staan. 

Voor gebruikers van Datavindplaats is het belangrijk dat het overzicht van data zo compleet mogelijk is en dat de getoonde informatie voldoet om aan de gewenste data te raken. Zo is het voor niet-publieke data bijvoorbeeld ook belangrijk om een concreet aanspreekpunt te beschrijven. Voor uitgevers van data is het niet altijd even evident, welke metadata noodzakelijk zijn om de data vindbaar te maken op Datavindplaats. 

**De doelstelling van deze handleiding is om zowel voor generieke open of gesloten data volgens DCAT-AP als geografische data (ISO-19115/ISO-19139, deels in overeenstemming met de GDI-Vlaanderen Best Practices v2.0) de minimale vereisten voor een publicatie op Datavindplaats te beschrijven.**

De editor van Metadata Vlaanderen heeft al automatische validatie, om in overeenstemming met ISO- of DCAT- standaarden te zijn. Deze validatiemechanismen wijzen de gebruiker op verplichte velden. Alleen als geen enkele validatie fout meer opduikt, kan een draft-record gepubliceerd worden. Eens een record op Metadata Vlaanderen door dit proces geraakt is verschijnt het ook op Datavindplaats.

**Omdat de technische vereisten lager zijn dan vereisten voor gebruikers die met de data aan de slag willen gaan, geven wij aanbevelingen voor een betere gebruikerservaring. De mogelijkheden om data grondig te beschrijven, volgens ISO- of DCAT-standaarden gaan veel verder.** Wij raden aan om op deze basisgegevens zo veel mogelijk metadata toe te voegen, in functie van de aard van uw data. De Best Practices hierrond zijn hier te vinden. 

Belangrijk om te weten: de metadata die ingegeven worden op Metadata Vlaanderen worden niet alleen getoond in een gebruikersinterface, maar ook gebruikt voor filtering, sortering, groepering en hergebruik via de Datavindplaats-API en via externe catalogi. Bepaalde metadata velden zijn daarom functioneel bepalend voor zichtbaarheid en gedrag, ook als ze technisch niet verplicht zijn.

### Metadata records toevoegen

Deze instapgids richt zich in eerste instantie tot metadata-editors en gaat ervan uit dat je kan inloggen op Metadata Vlaanderen. **Wie voor het eerst de Metadata Vlaanderen Editor gebruikt of metadata aanmaakt, vindt in bovenvermeld Best Practices document belangrijke achtergrondinformatie en uitleg van concepten.** 

Een ISO- of DCAT-record kan worden aangemaakt na aanmelding op Metadata Vlaanderen, voor de groep (= organisatie) waarvoor je bent aangemeld. Onder ‘Metadata beheer’ bestaat de optie ‘Record toevoegen’.  Datasets en services volgen eigen sjablonen.  

Voor geografische datasets is er een sjabloon voorzien dat de ISO-normen volgt. Voor niet-geografische datasets staan er actueel 3 verschillende sjablonen klaar (Figuur 1). Het is mogelijk om een generiek metadata-sjabloon te gebruiken dat de Europese DCAT-AP-2.0 standaard volgt. Deze data komen ook op Datavindplaats terecht maar er ontbreken in dit sjabloon velden met bijkomende, voor Vlaamse metadata geëiste of aanbevolen, specificaties.

**In de meeste gevallen zal de lezer van deze handleiding gebruik willen maken van de sjabloon voor Open Data, volgens DCAT-AP-VL 2.0 (Sectie 3).** Voorlopig is er ook nog een sjabloon specifiek voor Gesloten Data (= metadata-DCAT v.2.0), maar deze wordt in 2026 uitgefaseerd. 

Wie meerdere gelijkaardige records wil aanmaken via de Editor kan ook een record dupliceren en als tijdelijk sjabloon gebruiken (Record beheren/ Dupliceer) (Figuur 2).

## Context en principes van metadata binnen Datavindplaats

Deze handleiding beschrijft de **minimaal benodigde metadata** die nodig zijn om datasets en services zichtbaar te maken op de **Datavindplaats** via **Metadata Vlaanderen**. Ze moet gelezen worden binnen het bredere Vlaamse, Belgische en Europese metadata-ecosysteem.

### Datavindplaats als ecosysteem

Datavindplaats is geen afzonderlijke catalogus, maar een **geïntegreerde vind- en ontsluitingslaag** bovenop:
- Metadata Vlaanderen (operationele metadatahub)
- GeoNetwork (ISO- en DCAT-editing & validatie)
- Vlaamse, Belgische en Europese portalen (o.a. Geopunt, INSPIRE Geoportal, EU Open Data Portal)

Metadata die hier worden ingevoerd, **stromen door** naar meerdere kanalen en worden gebruikt voor:
- vindbaarheid
- filtering
- hergebruik
- monitoring en rapportering (o.a. INSPIRE)

### ISO, DCAT en INSPIRE

Voor geografische datasets geldt:
- ISO 19115/19139 is het bronsjabloon
- ISO-metadata worden automatisch vertaald naar DCAT via het GeoDCAT-AP-VL mappingprofiel
- DCAT is de gemeenschappelijke taal waarmee metadata:
    - in Datavindplaats worden getoond
    - naar andere catalogi worden geëxporteerd
    - voor INSPIRE-monitoring worden gebruikt

ISO en DCAT zijn dus geen alternatieven, maar onderdelen van één keten. 

### Minimale aangifte ≠ maximale conformiteit

Een metadatarecord dat voldoet aan de **minimale aangifte**:
- kan technisch gepubliceerd worden
- kan zichtbaar zijn op Datavindplaats

Maar:
- is niet automatisch INSPIRE-conform
- is niet automatisch geschikt voor Europese rapportering
- is niet noodzakelijk kwaliteitsvol voor hergebruik

Deze handleiding focust op de instap (minimale vereisten).
Voor INSPIRE, GDI-verplichtingen en kwaliteitsvolle hergebruikscenario’s zijn aanvullende inhoudelijke keuzes noodzakelijk. **Minimale metadatering is bedoeld als instap voor publicatie, maar vormt geen garantie op optimale vindbaarheid, hergebruik of INSPIRE-conformiteit.**

### Once-only principe

Metadata worden één keer correct beschreven en wordt daarna hergebruikt in:
- meerdere portalen
- verschillende filters
- monitoring- en rapportageprocessen

Metadata zijn dus deel van de **infrastructuur**, en geen formulier.


> **Wat Datavindplaats effectief met metadata doet**
>
> Datavindplaats gebruikt metadata niet enkel om records te tonen, maar ook om ze te verwerken.
> De metadata worden via een API gebruikt voor:
> -	filtering
> -	sortering
> -	groepering
> -	facetten
> -	contextweergave
> -	hergebruik in andere catalogi
>
> **Metadata sturen zichtbaarheid**
> Bepaalde metadata-velden bepalen of een dataset:
> -	zichtbaar is
> -	publiek of niet-publiek wordt beschouwd
> -	in filters en zoekresultaten verschijnt
> Voorbeelden: toegangsrechten, thema’s, datums, rollen
>
> **Metadata sturen vindbaarheid**
> Datavindplaats groepeert en filtert datasets op basis van:
> -	categorieën en thema’s
> -	organisaties (uitgever/eigenaar)
> -	datatypes (dataset, service, distributie)
> Onvolledige of foutieve metadata leidt tot verminderde vindbaarheid.
>
> **Metadata sturen sortering**
> Records worden standaard gesorteerd op basis van de meest recente datum.
> Zonder correcte datums kunnen datasets lager of onvoorspelbaar verschijnen.
>
> **Metadata zijn once-only**
> Metadata die in Metadata Vlaanderen worden ingevoerd:
> -	stromen door naar Datavindplaats
> -	kunnen geharvest worden door andere portalen
> -	worden gebruikt voor monitoring en rapportering
> Fouten of leegtes worden daardoor **meervoudig herhaald**.
>
> **Minimale metadatering is een startpunt**
> Minimale metadatering maakt publicatie mogelijk, maar:
> -	garandeert geen optimale zichtbaarheid
> -	garandeert geen hergebruik
> -	garandeert geen INSPIRE-conformiteit
> Bewuste invulling van metadata verhoogt de kwaliteit en het bereik van de dataset.
> **Goede metadatering zorgt ervoor dat datasets niet alleen gepubliceerd worden, maar ook effectief gevonden, begrepen en hergebruikt worden.**


## Minimale metadata voor generieke data (DCAT-AP-VL)

### Overzicht


| Tab          | Veldnaam          | Korte omschrijving                                                    | Nodig in DCAT-AP-VL | Te zien op DataVindplaats |
| ------------ | ----------------- | --------------------------------------------------------------------- | ------------------- | ------------------------- |
| Dataset      | Titel             | De naam van de dataset.                                               | :lucide-check:      | :lucide-x:                |
|              | Beschrijving      | Een korte samenvatting van de data                                    | :lucide-check:      | :lucide-x:                |
|              | Organisatie       | Organisatie die de dataset beheert                                    | :lucide-check:      | :lucide-x:                |
|              | Trefwoord         | Sleutelwoorden of zinnen die het onderwerp van de content samenvatten | :lucide-check:      | :lucide-x:                |
|              | Contactinformatie | Wie is verantwoordelijk voor deze data                                | :lucide-check:      | :lucide-x:[^1]            |
|              | Toegankelijkheid  | Publiek of niet publiek                                               | :lucide-check:      | :lucide-x:                |
|              | Taal              | Taal van de inhoud in het record                                      | :lucide-x:          | :lucide-x:                |
| Distributies | Titel             | Naam van de resource                                                  | :lucide-check:      | :lucide-x:                |
|              | Omschrijving      | Specifieke uitleg per distributie                                     | :lucide-check:      | :lucide-x:                |
|              | URL               | Link naar resource                                                    | :lucide-check:      | :lucide-x:                |
| Record       | Wijzigingsdatum   | Datum van de laatste wijziging van het metadatarecord                 | :lucide-check:      | :lucide-check:            |
|              | Taal              | Taal van de metadatering                                              | :lucide-x:          | :lucide-x:                |
| Overzicht    | Voorbeeldweergave | Een thumbnail van de data                                             | :lucide-x:          | :lucide-check:            |

[^1]: E-mail en/of URL

### Uitleg per TAB en veld (DCAT-AP VL)

#### Dataset

##### Titel

Wordt getoond in de catalogus en zoekresultaten. Gebruik een duidelijke, korte titel.

##### Beschrijving

Beschrijf de inhoud en het doel van de dataset.

##### Trefwoord

Een trefwoord wordt minimaal vereist voor publicatie volgens huidig sjabloon/validatie in Metadata Vlaanderen. 

##### Thema's (Categorieën)

Datavindplaats gebruikt categorieën om datasets te groeperen in de navigatiebalk. Zonder thema is je dataset moeilijker te vinden voor gebruikers die bladeren door een onderwerp.

Selecteer minimaal één thema uit de lijst van **Europese Data Thema**'s (bijv. `ENVI - Milieu`, `TRAN - Transport`).

!!! info

    Gebruik "Trefwoorden" voor specifieke termen (bv. "zonnepanelen"), maar gebruik "Thema's" voor de hoofdgroep. 

##### Versie

De informatie hier heeft geen impact op de publicatie op Datavindplaats, maar is van belang als meerdere versies van een dataset omschreven worden. Datavindplaats toont automatisch een Wijzigingsdatum. Dit kan verschillen van de publicatiedatum (creatie van een publieke toegang en de creatiedatum (aanmaak van de data).

##### Contactinformatie

Op Datavindplaats wordt slechts één contactinformatie gebruikt: de uitgever (publisher).

Binnen Metadata Vlaanderen/Datavindplaats wordt aanbevolen en vaak vereist door validatie dat dct:publisher minstens een e-mail en/of URL bevat.

!!! info
    Bij de omzetting van ISO naar DCAT worden de metadata afgeleid op basis van de ISO-rollen, volgens de volgorde: publisher → owner → custodian → pointOfContact.

#### Distributies

In een record op Datavindplaats gaat een sectie Distributie verschijnen, onafhankelijk van de ingegeven informatie in deze sectie. Als de beschreven dataset in verschillende formaten of versies ter beschikking staat, moet voor elk instantie een eigen sectie ‘Distributie’ aangemaakt en ingevuld worden.

##### Titel

De titel van de distributie kan het format bevatten of een alternatieve naam.

##### Beschrijving

Deze vrije tekst kan bijvoorbeeld instructies voor gebruik omvatten.

##### URL

Er moet verplicht een URL aangegeven worden. Elke correct geformatteerde link (beginnend met http(s)://) naar een landingspagina of een downloadactie krijgt een ‘Downloadknop’ op Datavindplaats, die de landingspagina opent of het bestand rechtstreeks downloadt.

##### Licentie (Cruciaal voor Open Data)

Om je dataset als **Open Data** te laten verschijnen op Datavindplaats, moet er één van de vier modellicenties voor hergebruik van overheidsinformatie en open data ingevuld worden.

Typ geen vrije tekst. Selecteer de **Modellicentie voor gratis hergebruik** (of Creative Commons Zero) uit de keuzelijst.

!!! technisch
    Het systeem heeft de achterliggende link (URI) van de licentie nodig (bijv. http://data.vlaanderen.be/id/licentie/modellicentie-gratis-hergebruik/v1.0). Alleen dan werkt de filter "Open Data".

##### Formaat

Geef per distributie expliciet het formaat aan uit de lijst (bijv. CSV, JSON, PDF, SHP).

Gebruikers kunnen op Datavindplaats filteren op formaat. Als je dit leeg laat, weten ontwikkelaars niet of de data machineleesbaar is.

#### Record

##### Identificator

Dit verplichte veld kan niet aangepast worden en is de stabiele, unieke link naar dit metadata-record.

##### Wijzigingsdatum

Dit verplicht veld kan niet aangepast worden.

##### Taal

Het verwijderen van de taal ‘Nederlands’ leidt tot het verdwijnen van taal-specifieke velden in andere tabs (titel en beschrijving in tab dataset). Minstens één taal wordt vereist. Als een extra taal ingegeven wordt verschijnt ingevulde informatie met een taal-indicatie op Metadata Vlaanderen.


## Minimale metadata voor services en API's

### Waarom services apart beschrijven?

Aan een (bron)dataset kunnen een of meerdere services (of API’s) gelinkt zijn, die bewerkingen, selecties, projecties etc. op de brondata kunnen uitvoeren. Idealiter worden deze als aparte objecten gezien die aan elkaar gekoppeld moeten worden. 

- Dataset type record: Beschrijft wat het is (Inhoud, definities).
- Service type record: Beschrijft hoe je er technisch bij komt (Endpoints, operaties). Er kunnen meerdere brondatasets aan gekoppeld worden. Voorbeeld: Een service die historische kaarten verzamelt: [Raadpleegdienst voor historische cartografie Metadata Vlaanderen](https://metadata.vlaanderen.be/srv/dut/catalog.search#/metadata/10a61124-ef79-d4f7-07fd-252e-10b7-5aa3-a38d5f8e).


### ISO 19119: Services voor Geografische Data (WMS/WFS)

Voor geografische services (WMS, WFS, WMTS) gebruik je een ander sjabloon dan voor datasets. Dit zijn de 4 minimale vereisten voor een werkende service-beschrijving:

#### Service Type (Verplicht)
- Geeft aan of het om een kijk- of downloaddienst gaat.
- Instructie: Kies de juiste waarde uit de codelijst (niet typen!):
    - view (voor WMS/WMTS)
    - download (voor WFS/ATOM)
    - discovery (voor CSW)

#### Connectie (connectPoint)
- De technische "deurbel" van de service.
- Instructie: Vul hier de Capabilities-URL in.
    - Fout: https://mijnserver.be/kaart (Dit is een webpagina)
    - Goed: https://mijnserver.be/wms?request=GetCapabilities&service=WMS (Dit is de technische link)

#### Koppeling met Dataset (OperatesOn) Cruciaal!
- Zonder dit veld _zweeft_ je service los in de catalogus. De gebruiker ziet de service, maar weet niet welke dataset erin zit.
- Instructie: In de sectie Gekoppelde bronnen (OperatesOn) moet je de Dataset selecteren die door deze service ontsloten wordt.
    - Actie: Zoek op de titel van je dataset en selecteer de UUID. Hierdoor ontstaat de relatie: Service X toont Dataset Y.

#### Service Operaties (Operations)
- Welke commando's begrijpt de service?
- Instructie: Voeg minimaal één operatie toe met de juiste naam en DCP (Distributed Computing Platform = HTTP):
    - Voor WMS: GetMap
    - Voor WFS: GetFeature

### DCAT-AP-VL: Data Services (API's)

In DCAT 2.0 (en de Datavindplaats) worden services beschreven als dcat:DataService. Dit is essentieel voor API's die niet geografisch zijn (bijv. een REST API met sensordata) (Tabel 2).

Tabel 2 Minimale checklist voor Data Services


| Veld                                             | Instructie & Belang                                                                                                                          |
| ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Endpoint URL (dcat:endpointURL)                  | **Verplicht**. De "root" locatie van de service.</br>_Voorbeeld_: https://api.vlaanderen.be/v1/scholen                                                                                            |
| Endpoint Beschrijving (dcat:endpointDescription) | **Sterk aanbevolen**. Link naar de technische documentatie (Swagger/OpenAPI/ReDoc). </br>_Waarom?_ Ontwikkelaars hebben dit nodig om de API te kunnen bouwen.                                                                         |
| Bedient Dataset (dcat:servesDataset)             | **Cruciaal**. De koppeling naar de dataset.</br>_Instructie_: Link hier naar het metadatarecord van de dataset. Als je dit vergeet, verschijnt de API niet bij de dataset op Datavindplaats. |
| Conformiteit (dct:conformsTo)  | Geeft aan welke standaard de API volgt.</br>_Voorbeeld_: OpenAPI 3.0 of OGC API Features. |
| Licentie | **Vergeet dit niet!** Vaak zetten mensen een licentie op de data, maar vergeten ze de service. Zonder licentie op de service durven bedrijven deze niet in te bouwen in hun apps. |

> **De "Gouden Regel" voor Services**
> Een service is pas nuttig als hij gekoppeld is aan data.
> -	ISO: Vul altijd het veld `OperatesOn` in.
> -	DCAT: Vul altijd het veld `ServesDataset` in.
> Doe je dit niet? Dan is je service een _lege huls_ in de zoekresultaten.


## Minimale metadata voor geografische data (ISO-19115/19139)

### Overzicht

De volgende tabel (Tabel 3) geeft per tab in de editor van sjabloon voor geografische gegevens een overzicht over alle velden, die ofwel volgens ISO-19115/19139 verplicht zijn om een record zichtbaar te maken op Datavindplaats, of aangeraden worden, omdat ze op Datavindplaats getoond worden: 

Tabel 3 Minimale checklist voor het aanmaken van een Iso-record

| Tab                               | Veldnaam                                                | Korte omschrijving                                    | Verplicht                                           | Staat op DVP |
| --------------------------------- | ------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------- | ------------ |
| Identificatie                     | Titel dataset(serie)                                    | Naam van dataset of service, duidelijk en beknopt     | :lucide-check:                                                  | :lucide-check:           |
| Versiedatum                       | Creatiedatum, Publicatiedatum of wijzigingsdatum        | :lucide-check:                                                    | :lucide-check:                                                  |              |
| Versie                            | Datum van versie, kan verschillen van publicatiedatum   | :lucide-x:                                                   | :lucide-check:                                                  |              |
| Dataset(serie) identifier         | Unieke ID                                               | :lucide-check:                                                    | :lucide-x:                                                 |              |
| Inhoud                            | Samenvatting                                            | Korte beschrijving van inhoud en doel                 | :lucide-check:                                                  | :lucide-check:           |
|                                   | Status                                                  | Continu geactualiseerd, compleet, historisch archief… | :lucide-x:                                                 | :lucide-check:           |
|                                   | Frequentie                                              | Keuzemenu: ritme van updates                          | :lucide-x:                                                 | :lucide-check:           |
|                                   | Contact gegevens                                        | Gegevens voor de rol ‘uitgever’ (publisher)           |                                                     | :lucide-check:           |
|                                   |                                                         |                                                       | Gegevens voor de rol ‘uitgever’ (publisher)         | Minstens 1   | Fallback
|                                   |                                                         |                                                       | Gegevens voor de rol ‘eigenaar’ (owner)             | Minstens 1   | Fallback
|                                   |                                                         |                                                       | Gegevens voor de rol ‘beheerder’                    | Minstens 1   | Fallback
|                                   |                                                         |                                                       | Gegevens voor de rol ‘contactpunt’ (pointOfContact) | Minstens 1   | Fallback
|                                   | Trefwoorden                                             | Gestandaardiseerde termen (ISO-topics, DCAT-subjects) | :lucide-x:                                                 | :lucide-check:           |
|                                   | Ruimtelijk schema                                       | Vector of raster                                      | :lucide-x:                                                 | In Filter    |
|                                   | Toepassingsschaal                                       | Bv. 1/10000                                           | :lucide-x:                                                 | :lucide-check:           |
|                                   | Grondresolutie                                          | In m                                                  | :lucide-x:                                                 | :lucide-check:           |
|                                   | Taalinstellingen                                        | Hoofdtaal van metadata (bv. Nederlands)               | :lucide-check:                                                  | :lucide-x:          |
|                                   | Categorie                                               | VB Natuur en milieu                                   | Linkt naar Data.gov.be thema’s                      | :lucide-check:           | :lucide-check:
|                                   | Geografische begrenzing*                                | Bv. Vlaams Gewest                                     | :lucide-check:                                                  | :lucide-check:           |
| Referentie-systeem                | Referentiesysteem                                       | Bv. Lambert 1972, EPSG:31370                          | :lucide-check:                                                  | :lucide-check:           |
| KWALITEIT                         | Algemene beschrijving herkomst                          | Vrije tekst                                           | :lucide-check:                                                  | :lucide-x:          |
|                                   | Omschrijving Bron                                       | Vrije tekst                                           | :lucide-check:                                                  | :lucide-x:          |
| Conformiteit                      | Conformiteit                                            | Referentie naar standaard (DCAT-AP of INSPIRE/ISO)    | :lucide-check:                                                  | :lucide-x:          |
| Toegangs- en gebruiks-beperkingen | Licentie & toegangsrechten                              | Juridische status (bv. Creative Commons)              | :lucide-x:                                                 | :lucide-check:           |
| Distributie                       | Distributies                                            | Werkende URL’s naar API, download, WMS/WFS + formaat  | :lucide-check:                                                  | :lucide-check:           |
| Meta-Metadata                     | Contactinformatie                                       | Organisatie + e-mail/URL voor aanspreekpunt           | :lucide-check:                                                  | :lucide-check:           |
| Organisatie                       | Naam van de organisatie die als Uitgever wordt getoond. | :lucide-x:                                                   | :lucide-check:                                                  |              |
| Overzicht                         | Voorbeeldweergave                                       | Thumbnail van de dataset                              | :lucide-x:                                                 | :lucide-check:           |

De volgende informatie wordt ook op Datavindplaats weer gegeven, maar moet niet handmatig worden ingevuld worden in de editor:

- Gepubliceerd: Datum van aanmaak van het record
- Laatst gewijzigd: Datum van de laatste wijziging


### Uitleg per TAB en veld (ISO-19115/19139)

Waar kan, zijn er door Digitaal Vlaanderen al default-waarden voorzien. Bijvoorbeeld: referentiesystemen. Let dus altijd goed op wanneer default-waarden ingevuld zijn (zeker bij een waarde ‘0’) en controleer aandachtig alle elementen.

Vele secties kunnen ook volledig verwijderd worden waarna ze niet meer voorkomen in de validatie. Verwijderen is onomkeerbaar/risicovol! Dit kan een fout beeld van volledigheid geven. Verwijder velden alleen als je zeker bent met je actie.

**Globaal**:

- Niet ingevuld = functioneel afwezig

- Metadata-elementen die niet zijn ingevuld, worden niet meegenomen in filtering, sortering of groepering in Datavindplaats.

#### Identificatie 

##### Titel

Wordt getoond in de catalogus en zoekresultaten. Gebruik een duidelijke en beknopte Nederlandse titel. Gebruik dus geen afkortingen, deze kan je best houden voor de alternatieve titel.

##### Versiedatum

Minimaal één van de drie opties Creatiedatum, Publicatiedatum of Wijzigingsdatum invullen.

**Impact op Datavindplaats**: Datavindplaats sorteert records op basis van de meest recente datum (bijvoorbeeld modified, issued of created). Ontbrekende of foutieve datums kunnen ertoe leiden dat datasets lager of onvoorspelbaar worden weergegeven.

> Checklist Versiebeheer: kiezen tussen updaten of nieuw aanmaken:
> Vraag: Ik heb nieuwe data. Wat moet ik doen?
> 1. Is het een correctie of actualisatie van een bestaande dataset?
>     - _Voorbeeld_: De adressenlijst wordt elke nacht bijgewerkt.
>     - **Actie**: Bewerk het bestaande metadata-record. Pas de "Wijzigingsdatum" aan naar vandaag. Behoud dezelfde FileIdentifier (UUID).
>     - _Resultaat_: De dataset blijft vindbaar onder dezelfde link, maar stijgt in de sortering op "Laatst gewijzigd".
> 2. Is het een nieuwe jaargang of een bevroren toestand (snapshot)?
>     - _Voorbeeld_: "Bodemgebruikskaart 2024" (naast die van 2023).
>     - **Actie**: Maak een kopie (duplicaat) van het record. Geef het een nieuwe Titel (met jaartal) en een nieuwe FileIdentifier. Zet de status van het oude record (2023) eventueel op "Historisch archief".
>     - _Resultaat_: Beide jaren blijven vindbaar. De gebruiker kan de historie raadplegen.


##### Versie

Een opmerking over de versie. Dit veld heeft op dit moment een asterisk maar is niet verplicht.

##### Dataset identificator 

Een uniek ID. Deze sectie kan technisch verwijderd worden, maar kan niet hersteld worden. Het record moet dan opnieuw aangemaakt worden. Er wordt nog een technische oplossing uitgewerkt om dit op te vangen. Tot deze is ingebouwd, mag deze sectie niet handmatig worden verwijderd.

**Opgelet: Identifiers zijn systeemkritisch**: Identifiers worden gebruikt voor harvesting, deduplicatie, relaties tussen records en updates. Een foutief of instabiel identifiergebruik kan leiden tot dubbele records of foutieve publicaties in Datavindplaats en externe catalogi.

##### Naam van de dataset(serie)

Heeft op dit moment een asterisk maar is niet verplicht.

#### Inhoud

##### Samenvatting

Beschrijf de inhoud en het doel van de dataset of service.

##### Status

Niet verplicht maar aanbevolen: zijn de data gearchiveerd, continue geactualiseerd, compleet of in ontwikkeling (nog niet compleet)?

##### Contactpunt 

Om een contact op Datavindplaats te zien verschijnen moet er contact informatie ingevuld zijn. Als Best Practices-richtlijn wordt voorgesteld om minimaal de uitgever als contactpunt op te geven, ook de eigenaar, beheerder en verdeler kunnen opgenomen worden. Ook is het zo dat indien je alle rollen op jou neemt als organisatie, je de contactgegevens telkens moet herhalen per rol die beschreven wordt. De rollen zijn

- Beheerder - Partij die verantwoordelijkheid heeft geaccepteerd en zorg draagt voor het beheer van de data
- Eigenaar - Partij die eigenaar is van de data => verschijnt op Datavindplaats
- Verdeler - Partij die de data verstrekt 
- Contactpunt - Partij waarmee contact kan worden opgenomen voor het vergaren van kennis of verstrekking van de data
- Uitgever - Partij die de data publiceert => verschijnt op Datavindplaats

!!! info
    Lees meer over rollen onder punt 4.7 in de Best Practices gids.

> **Let op bij meerdere rollen**
> Bij de transformatie naar Datavindplaats wordt slechts één contact overgenomen (volgens een vaste voorkeur). Plaats daarom de belangrijkste organisatie eerst. De Fallback-logica:
> -	publisher → owner → custodian → pointOfContact
> -	Dit zijn ISO-rollen (CI_RoleCode) die gebruikt worden om bij omzetting naar DCAT één dct:publisher af te leiden.
> -	Bij meerdere rollen: **eerste wint**


##### Frequentie

Er zijn twee soorten van gegevens: de continu beheerde datasets en de discrete versies van datasets (versie-dataset).

- Continu beheerde datasets zijn deze die in een zeer hoge updatefrequentie wijzigen. Ze worden minimaal wekelijks geactualiseerd en ze kunnen tot op de seconde worden beheerd. 
- Discrete versies van datasets kennen daarentegen een tragere updatefrequentie en worden als het ware op bepaalde ogenblikken in de tijd als ‘snapshots’ van dat moment vrijgegeven.

!!! info
    Lees meer onder punt 3.1 in de Best GDI Best Practices over de correcte Versiebeheer.

##### Trefwoorden

Niet technisch verplicht maar voor INSPIRE wel nodig. Je kunt naast losse eigen trefwoorden ook trefwoorden uit een bestaande thesaurus (gecontroleerde trefwoordenlijst) opnemen. Sowieso moet voor INSPIRE-datasets minimaal één trefwoord uit de thesaurus “GEMET – INSPIRE themes” en één trefwoord uit de thesaurus “GEMET – Concepten” worden toegevoegd. Prioritaire datasets moeten voor INSPIRE het betreffende trefwoord uit de thesaurus “INSPIRE priority data set” opnemen, in functie van correcte monitoring en rapportering bij Europa.

**Gebruik in Datavindplaats**
Categorieën en trefwoorden worden gebruikt om datasets te groeperen en te filteren in Datavindplaats.
Deze metadata bepalen in welke thematische context een dataset wordt aangeboden en hoe ze teruggevonden wordt.

!!! info
    Lees meer hierover onder punt 4.20 in de Best Practices

> **Verplicht voor vindbaarheid**: Om je dataset zichtbaar te maken in de **Thema-filters** (facetten) van Datavindplaats, moet je minimaal één trefwoord selecteren uit een officiële thesaurus.
> -	**Aanbevolen Thesaurus**: Gebruik de "**GDI-Vlaanderen Trefwoorden**" of de "**Europees Data Thema**" thesaurus in de editor.
> -	**Wat gebeurt er als ik dit niet doe?** Je dataset is dan alleen vindbaar als iemand exact jouw titel intypt in de zoekbalk, maar verschijnt niet als iemand klikt op de categorie "Leefmilieu" of "Mobiliteit" in de zijbalk.


##### Categorie

Een ISO-Topic is verplicht. Deze sectie kan verwijderd worden, maar niet hersteld worden. Het record moet dan opnieuw aangemaakt worden. Er wordt nog een technische oplossing uitgewerkt om dit op te vangen. Tot deze is ingebouwd, mag deze sectie niet handmatig worden verwijderd.

Let op: er is een default waarde, die in de meeste gevallen wel moet aangepast worden.

##### Ruimtelijk schema

Als ‘Vector’ aangegeven wordt, kan een Schaal toegevoegd worden.  In het geval van ‘Grid’ (Raster) data een resolutie. Hoewel niet verplicht kunnen data op Datavindplaats hierdoor beter gefilterd worden. Opgelet: De default waarde is 0 en moet vervangen worden.

##### Taal

Hier beschrijf je de taal die in het metadatarecord wordt gebruikt. In veel gevallen is Nederlands de default waarde. Voeg extra talen toe indien nodig. 

##### Begrenzing

Een geografische dataset moet een geografische begrenzing hebben. Als de sectie per ongeluk verwijderd werd, kan het hersteld worden door één van de knoppen “Voeg één begrenzing toe voor elk sleutelwoord” of “Voeg één begrenzing toe voor alle sleutelwoorden” (zie Figuur 3). 

#### Referentiessysteem

##### Horizontaal en/of verticaal referentiesysteem 

Het standaard systeem voor België is al ingevuld met [Lambert 1972/ Belgian Lambert 1972](http://www.opengis.net/def/crs/EPSG/0/31370). Dit veld kan leeg gemaakt worden, maar wij raden dit sterk af omdat dit impact heeft op het GIS-hergebruik.

!!! info
    Onder punt 4.11 in het Best Practices document zijn meer details te vinden.

#### Kwaliteit

##### Niveau kwaliteitsinformatie

Waarop zich de informatie betrekt: standaard is dit op datasetniveau.

##### Algemene beschrijving herkomst

Een minimum aan informatie over de herkomst van de data wordt geëist.

##### Omschrijving bron

Een minimum aangifte van de bron wordt geëist. In geval van verwerkte data kan ook het contact van de oorspronkelijke eigenaar aangegeven worden.

#### Conformiteit

Als een ISO-sjabloon gebruikt wordt en de data gepubliceerd kunnen worden, voldoen ze automatisch aan ISO-19139.

ISO-validiteit betekent niet automatisch INSPIRE-conformiteit; daarvoor zijn bijkomende inhoudelijke vereisten van toepassing.

#### Toegangs-en gebruiksbeperkingen (accessRights)

**Opgelet: Functioneel verplicht voor zichtbaarheid**
Als geen toegangs- of gebruiksbeperking wordt opgegeven, beschouwt Datavindplaats de dataset of service als **niet publiek**. Dit kan ertoe leiden dat het record niet zichtbaar is of niet kan gebruikt worden in een filter, ook al is het technisch gepubliceerd.

##### Beperkingen

Deze informatie wordt niet in de Datavindplaatsrecord getoond maar hierop wordt de catalogus gefilterd (Figuur 4). Meerdere velden hebben een asterisk maar geen detail is strikt noodzakelijk voor publicatie.

!!! info
    Sectie 4.21 in de Best Practices document levert achtergrondkennis over de types licenties en gebruiksbeperkingen

!!! warning
    **Let op**: Typ de licentie **niet** als vrije tekst in (bijv. "Gratis gebruik").

    -	**Waarom**? Datavindplaats gebruikt een filter "Licentie". Dit filter werkt alleen als de licentie gekoppeld is aan een officiële code (URI). Vrije tekst wordt door de computer niet herkend als "Open Data".
    -	**Hoe wel**? Gebruik de zoekbalk in de editor en selecteer de "**Modellicentie voor gratis hergebruik**" uit de lijst die verschijnt. Controleer of de link (URI) http://data.vlaanderen.be/id/licentie/modellicentie-gratis-hergebruik/v1.0 automatisch wordt ingevuld (Figuur 4).



##### Toegankelijkheid

Naast de licentie voor gebruik van de data is er ook nog een onderscheid in de toegankelijkheid. Het is aangeraden om de optie ‘geen beperking op de publieke toegang’ aan te geven voor publieke overheidsdata (Figuur 6). Ook hierop kan gefilterd worden op Datavindplaats.

**Als geen beperking beschreven wordt, gaat Datavindplaats de data als niet publiek tonen.**


#### Distributies

Deze sectie vereist technisch gezien geen details om een record te kunnen publiceren, maar is cruciaal om een gebruiker naar de data te leiden.  => Sectie 4.30 in de Best Practices geeft instructies over de juiste omgang met distributies.

##### Distributieformaten

In deze sectie kunnen formaten van bestanden (bijvoorbeeld ‘Esri Shape’) aangegeven worden, die op Datavindplaats onder ‘Distributie’ apart getoond worden, als in de sectie ‘Online bronnen’ een juiste link naar de downloadlocatie gelegd wordt (zie Tabel 4 voor de exacte protocollen). Als bestanden in verschillende formaten via dezelfde link beschikbaar zijn, volstaat een link en verschijnen de formaten als aparte distributies met dezelfde link.

##### Verdeler

Geef idealiter de contactinformatie van de verdeler Dit komt niet op Datavindplaats terecht.

##### Online Bronnen 

Voeg een nieuwe connectie toe met de knop “+ Online bronnen”. Hier kan je statische links naar downloadbare bestanden toevoegen of dynamische links naar webservices. Voor niet publieke data wordt een algemene landingspagina van je organisatie aangeraden. **Belangrijk**: Het invullen van een URL alleen is niet voldoende. Je moet het juiste protocol selecteren uit de keuzelijst, zie Tabel 4. Dit protocol vertelt het systeem (en Geopunt) wat het met de link moet doen, bv. een kaart tonen of een bestand downloaden.

!!! note
    Hoe Datavindplaats links interpreteert
    -	Downloadbaar bestand (ZIP, CSV, GML, …) → Distributie
    -	WMS, WFS, WMTS, WCS, API, CSW → Dataservice
    Een foutieve invulling kan ertoe leiden dat een distributie of service niet correct verschijnt in Datavindplaats.
    Zonder distributie is een dataset technisch zichtbaar, maar functioneel niet bruikbaar voor eindgebruikers.


| Type Link            | Te selecteren Protocol (Exacte waarde) | Resultaat op Datavindplaats/Geopunt                                                                         |
| -------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| **WMS (Kaartlaag)**  | OGC:WMS-1.3.0-http-get-map             | Toont de kaartviewer. De gebruiker kan de laag direct bekijken. (Essentieel voor Geopunt "Bekijk op kaart") |
| **Directe Download** | WWW:DOWNLOAD-1.0-http--download        | Directe downloadknop. Het bestand wordt direct binnengehaald.                                               |
| **Landingspagina**   | WWW:LINK-1.0-http--link                | Link naar webpagina. De gebruiker wordt doorgestuurd naar een externe pagina (bv. voor niet-publieke data). |
| **WFS (Ruwe data)**  | OGC:WFS-2.0.0-http-get-feature         | Maakt het mogelijk voor GIS-software om de data technisch bevragen.                                         |
   
#### Meta-metadata

##### Contact

Er zijn velden in meerdere tabs voor contactpunten mbt gebruik, over de voorbewerking, de bron van de data en voor het beheer van de metadata. Indien van toepassing wordt aanbevolen om deze volledig in te vullen, **maar voor publicatie is alleen de naam van de organisatie in de tab Meta-metadata strikt noodzakelijk**.

Vermeld bij voorkeur minstens één keer je naam, een organisatie, je rol (contactpunt is vooringesteld) en een aanspreekpunt (e-mail of URL). Op Datavindplaats wordt onderaan van de dataset je website en E-mailadres getoond (Figuur 7), als beide gegevens in deze tab aangegeven worden.

Als alleen een naam ingevuld wordt, verschijnt op Datavindplaats geen contactsectie.


## Bijlage: Minimale metadatering voor publicatie op Datavindplaats -2-pager voor metadata-editors

**Doel van deze gids**

Deze 2-pager helpt je om **snel en correct metadata in te vullen** zodat datasets en services:

- zichtbaar zijn op Datavindplaats,
- correct gefilterd en gesorteerd worden,
- en bruikbaar zijn voor hergebruik.
Dit is een **instapgids**: technisch correct publiceren ≠ maximale kwaliteit of conformiteit.


**Wat Datavindplaats doet met metadata**

Datavindplaats is **API-gedreven**. Metadata worden gebruikt voor:

- filtering (thema, organisatie, open/niet-open),
- sortering (op datums),
- navigatie & facetten,
- doorstroming naar andere catalogi (Vlaams, Belgisch, Europees).
**Niet ingevuld = functioneel afwezig.**



**Minimale vereisten (samengevat)**

- Altijd nodig voor zichtbaarheid 
    - Titel & beschrijving
    - Toegangsrechten (accessRights)
        _Opgelet: Niet ingevuld = niet publiek_
    - Minstens één correcte datum (modified, issued of created)
    - Uitgever (publisher)
       _(afgeleid via ISO-rollen indien nodig)_
- Sterk aanbevolen
    - Thema / categorie → bepaalt filters & vindbaarheid
    - Distributie (download of service) → anders is de dataset “leeg”
    - Correcte identifiers → vermijden van duplicaten



**ISO ↔ DCAT in het kort**
- ISO (geo) en DCAT (open/generiek) zijn geen alternatieven, maar delen één keten.
- ISO-metadata worden automatisch vertaald naar DCAT (GeoDCAT-AP-VL).
- Datavindplaats werkt intern altijd met DCAT-concepten.

**Rollen: hoe werkt het echt?**
In DCAT is er één uitgever (publisher).
Bij omzetting vanuit ISO wordt deze afgeleid via:
`publisher` → `owner` → `custodian` → `pointOfContact` 

- Dit zijn ISO-rollen die gebruikt worden om één DCAT-uitgever te bepalen.
- Plaats de belangrijkste organisatie eerst.

**Datums & versies (heel belangrijk)**
- Datavindplaats sorteert op de meest recente datum.
- Gebruik:
    - Update → zelfde dataset, nieuwe modified
    - Nieuwe versie/snapshot → nieuw record

Tip: twijfel? → update is meestal correct.


**Identifiers**
- Identifiers zijn systeemkritisch:
    - harvesting
    - deduplicatie
    - updates
- Verwijder ze niet en wijzig ze niet lichtzinnig.


**Distributie of service?**
Gebruik deze beslisregel:
- Downloadbaar bestand (ZIP, CSV, GML, …)
    - > Distributie
- WMS / WFS / API / CSW / endpoint
    - > Dataservice

