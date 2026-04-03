# Richtlijn GDI-Vlaanderen Best Practices voor Metadata v2.0

## Versionering

### Document Revisie 

| Revisie | Datum      | Contributor(s)                                                                                                    | Commentaar                                                                                                                                                                   |
| ------- | ---------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0.01    | 05/06/2013 | Geraldine Nolf                                                                                                    | Opzet document en introductie van de basisconcepten                                                                                                                          |
| 0.02    | 15/07/2013 | Geraldine Nolf, Marleen Van Damme                                                                                 | - Verdere uitwerking document. </br>- Diepere invulling ISO-elementen die meer uitleg nodig hebben. </br>- Invulling onderdeel datasets vs datasetseries                     |
| 0.03    | 16/07/2013 | Geraldine Nolf                                                                                                    | Aanvullingen algemene informatie Verdeling enkele elementen onder de leden van de subwerkgroep                                                                               |
| 0.04    | 17/07/2013 | Geraldine Nolf                                                                                                    | Verdere uitwerking ISO-element per element                                                                                                                                   |
| 0.05    | 18/07/2013 | Geraldine Nolf                                                                                                    | Verdere uitwerking ISO-element per element                                                                                                                                   |
| 0.06    | 18/07/2013 | Geraldine Nolf                                                                                                    | Verdere uitwerking ISO-element per element                                                                                                                                   |
| 0.07    | 25/08/2013 | Joeri Robbrecht                                                                                                   | Invulling onderdelen rond identificatoren                                                                                                                                    |
| 0.08    | 25/08/2013 | Geraldine Nolf                                                                                                    | Verdere uitwerking ISO-element per element                                                                                                                                   |
| 0.09    | 26/08/2013 | Birgit Bastiaensen                                                                                                | Invulling onderdeel kwaliteit                                                                                                                                                |
| 0.10    | 05/09/2013 | Geraldine Nolf                                                                                                    | Verdere uitwerking ISO-element per element                                                                                                                                   |
| 0.10b   | 09/09/2013 | Dirk De Baere                                                                                                     | Invulling onderdeel constraints                                                                                                                                              |
| 0.10c   | 10/09/2013 | Marleen Van Damme                                                                                                 | Revisie 0.10c                                                                                                                                                                |
| 0.11    | 10/09/2013 | Geraldine Nolf, met revisie en fiat van Marleen VD, Dirk DB, Joeri R                                              | Finalisatie naar eerste voorlopige versie                                                                                                                                    |
| 0.12    | 14/11/2013 | Geraldine Nolf                                                                                                    | Aanvullingen algemene informatie. Toevoeging onderdelen rond objectencatalogus. Finaliseren document v1.0  algemene                                                          |
| 0.13    | 18/11/2013 | Geraldine Nolf                                                                                                    | Versie voor Publicatie => v1.0                                                                                                                                               |
| 0.14    | 26/02/2013 | Geraldine Nolf                                                                                                    | Aanpassingen GDI-Vlaanderen, Thesaurus en Protocols                                                                                                                          |
| 0.15    | 02/03/2015 | Geraldine Nolf                                                                                                    | Aanpassingen Protocols en onderdeel Constraints. Extra tips en voorbeelden toegevoegd                                                                                        |
| 0.16    | 11/04/2017 | Geraldine Nolf                                                                                                    | Aanpassing: best practices toegevoegd hoe je het distributieluik van services en datasets die verspreid worden in services (WMS, WMTS, WFS) idealiter beschrijft in metadata |
| 0.17    | 16/11/2020 | Geraldine Nolf, met revisie van Loes Deventer, Koen De Baets (DQ), Dirk De Baere (Constraints), Tom Callens (GDI) | Aanpassingen hoofdzakelijk t.g.v. de upgrades naar de nieuwe metadatacenters; en de conformiteit met de INSPIRE Technical Guidances 2.0                                      |
| 0.18    | 03/12/2020 | Geraldine Nolf, Loes Deventer                                                                                     | Correctie van enkele tikfouten, aanvulling van ‘name’ element (4.30.3) binnen distributie                                                                                    |

### Contributors

| Versie | Naam               | Rol                    | Organisatie               |
| ------ | ------------------ | ---------------------- | ------------------------- |
| 1.0    | Geraldine Nolf     | Auteur                 | AGIV                      |
|        | Joeri Robbrecht    | Reviewer               | AGIV                      |
|        | Dirk De Baere      | Reviewer               | AGIV                      |
|        | Marleen Van Damme  | Reviewer               | DOV                       |
|        | Birgit Bastiaensen | Reviewer               | Agentschap Ondernemen     |
|        | Hans Van den Heede | Reviewer               | Provincie West-Vlaanderen |
| 2.0    | Geraldine Nolf     | Reviewer               | Informatie Vlaanderen     |
|        | Loes Deventer      | Reviewer               | Informatie Vlaanderen     |
|        | Dirk De Baere      | Reviewer,constraints   | Informatie Vlaanderen     |
|        | Koen De Baets      | Reviewer, data quality | Informatie Vlaanderen     |
|        | Tom Callens        | Reviewer, GDI          | Informatie Vlaanderen     |

### Distributielijst

| Versie | Naam                      | Datum distributie                                                         |
| ------ | ------------------------- | ------------------------------------------------------------------------- |
| 1.0    | AGIV                      | Sinds januari 2013 rapportering en uitwerking                             |
|        | Subwerkgroep Metadata     | Sinds januari 2013 opgestart; sinds maart 2013 rapportering en uitwerking |
|        | GDI Werkgroep             | Sinds juli 2013 rapportering; sinds september 2013 voorgelegd             |
|        | GDI-Vlaanderen Stuurgroep | Sinds september 2013 voorgelegd                                           |
| 2.0    | Informatie Vlaanderen     | Aanpassingen door metadata-team in 2020                                   |
|        | GDI-netwerkoverleg        | Voorgelegd, met toelichting op 24 november 2020                           |
|        | Werkgroep Datamanagement  | Voorgelegd, met toelichting op 17 december 2020                           |
|        | Stuurorgaan               | Wordt voorgelegd, met toelichting op 4 februari 2021                      |

### Goedkeuringen
| Versie | Naam                      | Datum           |
| ------ | ------------------------- | --------------- |
| 1.0    | Subwerkgroep Metadata     | November 2013   |
|        | GDI Werkgroep             | November 2013   |
|        | GDI-Vlaanderen Stuurgroep | November 2013   |
| 2.0    | Informatie Vlaanderen     | November 2020   |
|        | GDI-netwerkoverleg        | November 2020   |
|        | Werkgroep Datamanagement  | December 2020   |
|        | *Stuurorgaan*             | *Februari 2021* |

**Informatie Vlaanderen**

!!! contact

    Havenlaan 88, 1000 Brussel<br/>`+32 (0)2 553 72 02`

    Koningin Maria Hendrikaplein 70, 9000 Gent<br/>`+32 (0)9 276 15 00`
    
    <mailto:informatie.vlaanderen@vlaanderen.be>

Dit is de richtlijn voor de uitwisseling van metadata, versie 2.0 van het GDI-Vlaanderen Best Practices-document voor Metadata, die vanaf 16 november 2020 in voege is.

De richtlijn bevat een formele beschrijving van het GDI-Vlaanderen metadataprofiel. Het werd opgesteld aan de hand van verschillende ISO-standaarden (`ISO 19115:2003` voor metadata van datasets - datasetseries en het technisch corrigendum 1 hiervan; `ISO 19119:2005` voor metadata van services en het amendement 1 hierop; `ISO 19139` voor de codering van metadata in XML) en de INSPIRE-richtlijn (INSPIRE Metadata Implementing Rules; Technical Guidelines 2.0). De richtlijn is geschreven voor de metadata-gebruikersgemeenschap en iedereen die de algemene principes voor het opstellen en uitwisselen van metadata wil kennen.

Het GDI-Vlaanderen Best Practices document voor Metadata v2.0 bevat:

-   In dit document: Een beschrijving van alle metadata-elementen voor datasets, datasetseries, services en objectencatalogi + best practices, tips, trucks en voorbeelden voor het invullen van de elementen.
-   In bijlage: Een invulinstructie voor het beschrijven van metadata voor datasets en datasetseries.
-   In bijlage: Een invulinstructie voor het beschrijven van metadata voor services.
-   In de bijhorende tooling GeoNetwork: Een sjabloon binnen de tool GeoNetwork voor het beschrijven van datasets, datasetseries, services en objectencatalogi.

Deze richtlijn vervangt:

-   De "Richtlijn voor de uitwisseling van metadata, versie 1.0 van het GDI-Vlaanderen Best Practices-document voor Metadata", van 18 november 2013.
-   Het "Technisch GDI-Vlaanderen voorschrift voor Metadata v3", van 7 juni 2011.

Alle documenten van de GDI-Vlaanderen Best Practices voor Metadata v2.0 vind je ook terug op de metadata-webpagina van Informatie Vlaanderen. Alle informatie om metadata van Vlaamse Open data te beschrijven, blijft apart gebundeld buiten dit document om.

Aan de hand van het applicatieprofiel "DCAT Application Profile for data portals in Europe", afgekort DCAT-AP, kan meta-informatie op een eenduidige wijze uitgewisseld worden tussen Open Data catalogi in Europa. DCAT-AP Vlaanderen (DCAT-AP VL) is een specialisatie (geen uitbreiding) van DCAT-AP. Met DCAT-AP VL kan een trapsgewijze aggregatie van de inhoud van Vlaamse Open Data Catalogi gerealiseerd worden zodat de informatie beschikbaar op lokaal of Vlaams niveau ook gevonden kan worden op het federale en Europese niveau. Het stuurorgaan voor het Vlaams Informatie- en ICT-beleid heeft op 3 oktober 2019 DCAT-AP VL erkend als een vrijwillig toe te passen standaard.

Alle beschikbare documenten over [DCAT-AP VL](applicatieprofielen/dcatapvl2) vind je op volgende webpagina's:

-   [DCAT-AP VL applicatieprofiel](https://data.vlaanderen.be/doc/applicatieprofiel/DCAT-AP-VL/)
-   [DCAT-AP VL validator](https://opendata.vlaanderen.be/validator)
-   [DCAT-AP VL handleiding](https://overheid.vlaanderen.be/sites/default/files/media/Digitale%20overheid/Open%20data/PDF2_Handleiding_DCAT-AP_VL_v1.0_def_0.pdf?timestamp=1585322424)

**Inhoud van voorliggend document**

In dit document is extra uitleg te vinden voor elementen die meer uitleg nodig hebben, of op een bepaalde manier ingevuld moeten worden.

Dit document bevat alle "best practices" - op vraag van de gebruikers-editoren - rond metadata van datasets, datasetseries, services en objectencatalogi in het Geografische domein. Je kunt het document best samen lezen met de desbetreffende invulinstructies.

Het eerste onderdeel bevat een inleiding met algemene informatie over metadata en objectencatalogi, een tweede onderdeel vertelt je alle generieke informatie die je als achtergrond moet hebben, alvorens aan het editeren te kunnen beginnen. Het derde en laatste onderdeel bevat alle specifieke informatie, de 'Best Practices', of dus de tips, trucks, aanbevelingen en voorbeelden, element per element; weliswaar opgesplitst per ISO-norm voor de duidelijkheid.

## Metadata - Algemene uitleg

### Achtergrond

GIS-Vlaanderen heeft in 1996 - in afwachting van een ISO-norm - gekozen om metadata op te bouwen volgens een Europese (pre-)norm voor metadata (CEN prEN 27009). Het voormalige AGIV, thans opgegaan in Informatie Vlaanderen, heeft deze norm geïmplementeerd in SPIDI.

Ondertussen is de ISO-norm voor metadata (`ISO 19115:2003`) gepubliceerd.  Deze ISO standaard wordt internationaal en binnen vrijwel alle Europese landen gebruikt en is ook door INSPIRE als de metadatastandaard aangewezen. INSPIRE is bindend binnen de Europese gemeenschap als implementatie omtrent geografische gegevens en dus ook de gerelateerde metadata.

Het voormalige Agentschap voor Geografische Informatie Vlaanderen (AGIV) moest zich daarom richten naar deze ISO norm. Om de bestaande metadata te recupereren is een omzetting gebeurd van CEN prEN 27009 naar `ISO 19115:2003`. De ISO-norm bestaat uit meer dan 400 in te vullen elementen voor datasets en datasetseries, waardoor het aangewezen is opnieuw te werken met een kernset (van verplicht in te vullen velden) en een optionele set voor metadata.

Het allereerste document werd op 23 maart 2011 op de Stuurgroep GDI-Vlaanderen goedgekeurd, waardoor dit document "Vlaamse metadatastandaard voor geografie - GDI-Vlaanderen metadataprofiel" integraal een Aanbeveling GDI-Vlaanderen is geworden.

Op basis van de ervaring sinds 1996 en rekening houdend met zowel de oude als de nieuwe implementatie werd een Best Practices-richtlijn opgesteld. Het reeds bestaande profiel, het "Technisch GDI-Vlaanderen voorschrift voor Metadata v3" van 7 juni 2011 en een mapping naar de nieuwe ISO-norm werden gebruikt om te komen tot de "Richtlijn voor de uitwisseling van metadata, versie 1.0 van het GDI-Vlaanderen Best Practices-document voor Metadata" van 18 november 2013 die voldeed aan de toenmalige eisen die gesteld werden door INSPIRE en je aangeeft hoe je best met elk van de elementen om gaat.

Voor het samenstellen van de Best Practices werd ook beroep gedaan op de Nederlandse expertise inzake. Een sturende vergelijking werd gemaakt met de reeds bestaande Nederlandse metadatastandaard voor geografie 1.1. en zijn opvolgers (Geonovum). Deze is eveneens conform de ISO-norm (`ISO 19115:2003` + Technical Corrigendum 1), `ISO 19110` en `ISO 19139`.

Daarna is het reeds bestaande document verder aangevuld volgens de INSPIRE-richtlijn. INSPIRE Metadata vormt een hoofdstuk van de INSPIRE Directive 2007/2/EC, een kaderrichtlijn. De INSPIRE Implementing Rule for Metadata is een eerste IR door Europa vrijgegeven.

Vervolgens werden de nodige aanpassingen aan de Best Practices-richtlijn gedaan zodat nu ook de metadata voor datasetseries en services zijn opgenomen. Deze services metadata-elementen zijn conform de ISO-norm (`ISO 19119:2005` + Addendum 1) en `ISO 19139`. Alsook conform de INSPIRE Implementing Rule for Metadata, Technical Guidelines 1.3.

Versie 2.0 van deze richtlijn kent vooral verbeteringen ten gevolge van de modernisering van de nieuwe metadatacenters en de gewijzigde conformiteit voor de INSPIRE Implementing Rule for Metadata, Technical Guidelines 2.0.

Huidig document is groeiend, gezien er volgens de noden van de gebruikers nieuwe Best Practices nodig kunnen zijn, die dan worden uitgeschreven en aan deze richtlijn worden bijgevoegd. Uiteraard zullen wijzigingen via release-notes duidelijk beschreven worden, zodat alle gebruikers deze groeiende Best Practices kunnen volgen.

### Wat zijn metadata en waarom is metadata belangrijk?

Door data, diensten (services) en toepassingen te beschrijven, wijs je gebruikers de weg doorheen het aanbod aan (geografische) informatie.  Welke gegevens zijn beschikbaar? Waar kan ik ze vinden? Wat zijn de gebruiksvoorwaarden? Hoe actueel of betrouwbaar is deze informatie?  Metadata beantwoordt deze vragen, voorkomt dat data meermaals wordt aangemaakt en zorgt er voor dat geografisch informatie snel kan gevonden worden.

De letterlijke betekenis van 'metadata' is 'data over data'; of dus de beschrijving(en) van data en dus niet de gegevens zelf. 'Meta' van het Griekse 'μετά' wordt gebruikt om aan te geven dat het een abstractie is van iets, gebruikt om deze aan te vullen.

Metadata beschrijven de kenmerken van de beschikbare (geografische) gegevens en/of services (identificatie, inhoudelijke beschrijving, geografische begrenzing, distributiegegevens en meta-metadata van de data) of van de Vlaamse Open data. Metadata is eveneens belangrijk om gebruikers toe te laten te weten welke gegevens beschikbaar zijn, bij wie en hoe deze gebruikt kunnen worden. Je krijgt als gebruiker via de metadata dus een antwoord op de vragen 'wie, wat, waar, wanneer, waarom en hoe'.

De beschikbaarheid van de beschrijvingen gebeurt via de metadatarecords. Het bijhouden ervan gebeurt via een metadatacenter.

Een metadatarecord is dus als het ware de 'bijsluiter' van een dataset.  Zoals de bijsluiter van een geneesmiddel de samenstelling en de gebruiksvoorschriften bevat, bevat een metadatarecord een technische beschrijving van o.a. de inhoud, structuur, kwaliteit en/of gebruiksbeperkingen van de data of diensten. In beide gevallen is het lezen van de bijsluiter noodzakelijk voor een correct gebruik van het product.

Wanneer metadatarecords worden opgeslagen in een te bevragen systeem ontstaat er een zeer krachtig instrument, namelijk een metadatacenter.  Met behulp van een metadatacenter kan een gebruiker zoeken naar datasets. Een metadatarecord biedt dan de nodige elementen om de geschiktheid van een dataset voor een bepaald gebruik te bepalen. Is de resolutie hoog genoeg? Is de dataset wel gebiedsdekkend? Is de kwaliteit hoog genoeg? Wat zijn de gebruiksbeperkingen. Tegen welke voorwaarden kan deze dataset worden aangeschaft? Het opzetten van een metadatacenter stimuleert het (her)gebruik van datasets en vermijdt het dubbel inzamelen van data. Dit is van groot belang gezien de hoge kostprijs van data-inzameling.

### Wat is een objectencatalogus en waarom is dat belangrijk?

Een objectencatalogus definieert het datamodel, zijnde alle types van objecten, hun operaties, hun attributen, en hun associaties in geografische data, zodat data in bruikbare informatie kan worden omgezet. Een objectencatalogus bevordert het verspreiden, het delen, en het gebruik maken van geografische data door het beter begrijpen van de inhoud en de betekenis van die data.

Een catalogus kan nooit de rijkdom van de geografische realiteit volledig bevatten. Maar zou wel de zekere abstractie - weergegeven in een dataset - zo klaar en duidelijk mogelijk, zo precies mogelijk en in een zo verstaanbaar mogelijke en toegankelijke vorm moeten weergeven voor de gebruikers van de data.

Er zijn twee niveaus van geografische objecten (*geographic features*).  De eerste soort objecten (*feature* *instances*) beschrijft discrete fenomenen, die worden geassocieerd met hun geografische en temporele coördinaten en kunnen voorgesteld worden door specifieke geografische symbolen. De tweede soort objecten (*feature types*) beschrijft de groepering van de eerste soort objecten in klasses met gemeenschappelijke kenmerken.

### Het belang van metadata

De Geografische Data-infrastructuur (GDI) creëert het kader voor de optimalisering van de aanmaak, het onderhoud, de distributie en het gebruik van geografische informatie op verschillende organisatieniveaus (lokaal, provinciaal, regionaal, nationaal en Europees). Hetzelfde doet de Vlaamse dienstenintegrator (VDI) voor open data. Hierbij wordt zowel de openbare als de private sector betrokken. Vanuit een technisch oogpunt vereist de ontwikkeling van een dergelijke infrastructuur een combinatie van technologieën en kennis afkomstig uit een veelheid van disciplines. Maar één van de meest onderscheidende kenmerken van deze infrastructuur zijn de catalogi en de metadata. Ze vormen het kloppend hart en realiseren de vindbaarheid en de interconnectiviteit van de gegevens en de diensten die aangeboden worden door instanties in Vlaanderen.

Welke (geografische) informatie is beschikbaar? Waar is die te vinden en hoe actueel of betrouwbaar is deze informatie? Zijn er raadpleeg- of downloaddiensten beschikbaar voor deze informatie? Zijn die gegevens meteen ook Open data? De publicatie van metadata in een catalogus maakt het aanbod zichtbaar en te bevragen. Metadata gidst de gebruiker doorheen de beschikbare informatie, voorkomt dubbele inwinning en beheer van data en zorgt ervoor dat geografische informatie snel kan worden gevonden.

#### Metadata als essentieel instrument in de informatiehuishouding van de databeheerder

Metadata faciliteren en structureren het databeheer, helpen de databeheerder bij het ontsluiten van het aanbod en optimaliseren de volgende aspecten van de data-infrastructuur:

##### Vinden 

Metadata kan intern in een grote organisatie worden gebruikt om data of services te ontsluiten. Op basis van de beschrijvende kenmerken kan men de juiste dataset zoeken en in viewers of toepassingen tonen en gebruiken.

##### Hergebruik 

Metadata kan voor andere organisaties de kwaliteit van de betreffende datasets inzichtelijk maken. Op basis van de metadata kan men beslissen of deze data of service te gebruiken is, of dat er zelf gegevens ingewonnen en gedigitaliseerd moeten worden.

##### Verrijken 

Op basis van de metadata kan men tot de conclusie komen dat de informatie die men wil vastleggen al grotendeels bestaat. Dit kan er ook toe leiden dat de al bestaande data wordt aangevuld met gegevens, waardoor de dataset voor een grotere doelgroep interessanter wordt.

##### Beheer 

Vanuit het standpunt van het beheer biedt metadata ook de mogelijkheid om de data of service zelf goed te beheren. Zo kunnen alle datasets of services die niet meer actueel zijn makkelijk worden geselecteerd op basis van de metadata. Het is bijvoorbeeld ook mogelijk om alle datasets gemaakt door één persoon of instantie te selecteren.

##### Continuïteit 

Bij vertrek van een medewerker is de kennis over de data en de service niet verloren als deze is vastgelegd in de metadata.

Waardoor:

-   Efficiëntiewinst door hergebruik en verrijken van informatie
-   Verbetering kwaliteit dienstverlening door het gebruik van juiste informatie
-   Mogelijkheden tot beheer van de dataset
-   Continuïteit van kennis over datasets en services

Metadata hoeft niet altijd direct toegang te geven tot de dataset(serie) of service, maar geeft wel aan waar deze dan te verkrijgen is.

Eens metadata gepubliceerd worden in een catalogus, beschikt de gebruiker over een krachtig instrument om te navigeren door het beschikbare aanbod. Metadata aangeboden in een catalogus ondersteunen de gebruiker bij het:

##### Zoeken

De eerste stap in het zoeken (discovery = ontdekken) van (geografische) gegevensbronnen is het zoeken van data en services. Dit zoeken gebeurt in catalogi op basis van een zoekterm waarin data of services met behulp van metadata zijn beschreven.

##### Beoordelen 

Zodra de gebruiker de (geografische) gegevensbron heeft gevonden, is de volgende stap om deze nader te onderzoeken (evaluation) en te bekijken of de gegevensbron voorziet in de behoefte van de gebruiker. Dit gebeurt door de metadatarecord te onderzoeken (exploration).

##### Verkrijgen

Zodra gebruikers de gewenste (geografische) gegevensbron of service hebben gevonden en geëvalueerd, zijn er verschillende manieren om de data te benaderen en te gebruiken. Denk hierbij aan het downloaden of bestellen.

##### Hulpmiddel 

Metadata kan ook essentiële info leveren bij het gebruik van (geografische) data en services. Voorbeelden hiervan zijn de gebruiksbeperkingen en de toepassingsschaal (voor geografische gegevens) en de licentie (voor open data).

### Metadata standaarden

#### Normen en standaarden

Om het opstellen van metadata op een uniforme manier te laten verlopen is het nodig een aantal regels in acht te nemen. GDI-Vlaanderen heeft gekozen om geografische gegevens te beschrijven volgens de vigerende normen en standaarden.

Een norm is een document met afspraken. Deze afspraken zijn gemaakt tussen belanghebbende partijen, kortweg 'instanties in Vlaanderen'.  Meestal zijn dit producenten, handelaren, gebruikers, overheden of consumentenorganisaties. Standaarden worden gebruikt om de uitwisselbaarheid (de interoperabiliteit) te bevorderen.  Interoperabiliteit is 'het vermogen van een bepaald systeem om effectief of correct te functioneren als deel van een ander systeem' (en systeem wordt hier in algemene, brede zin gebruikt).

De vigerende normen voor metadata van geografische gegevens zijn de ISO-norm voor metadata (Dataset(serie)s: `ISO 19115:2003 + Technical Corrigendum 1`; `Services: ISO 19119:2005 + Addendum 1`; en implementatiestandaard voor beide: `ISO 19139`) en de `INSPIRE Implementing Rules for Metadata` (en `Technical Guidelines 2.0`).

Informatie Vlaanderen heeft deze normen geïmplementeerd in de metadatacenters van de GDI-Vlaanderen. Dataproducenten kunnen online gestandaardiseerde metadatarecords bekijken en gestandaardiseerde metadatarecords opstellen, aanpassen en/of verwijderen.

#### De ISO-normen

ISO staat voor International Organization for Standardization. ISO is 's werelds grootste ontwikkelaar en verdeler van internationale standaarden.

Een ISO-norm staat nooit op zichzelf, de norm maakt deel uit van een groter geheel dat wordt gestuurd door "Technical committee 211" van ISO voor het domein van digitale geografische informatie ([www.isotc211.org](http://www.isotc211.org)).

Naast een metadatanorm is er bijvoorbeeld ook een norm voor "Geographic Markup Language", "Positioning services" en "Web Map server interface".  Het metadatamodel is dan ook verweven met tal van andere ISO-normen (bijvoorbeeld `ISO 19110,` `ISO 19139`, `ISO 19119`), waarvan sommige normen zelfs nog in opbouw zijn.

Een ISO-norm is te vergelijken met een grote 'bouwdoos', bestaande uit 'bouwstenen', 'bouwvoorschriften' en 'blauwdrukken', om profielen te bouwen. Elke gebruikersgemeenschap kan bijgevolg zijn eigen specifiek profiel ontwikkelen dat ISO-compatibel is.

Het objectgeoriënteerde datamodel van de `ISO 19115` bijvoorbeeld (kortweg het meta-datamodel) bestaat uit een groot aantal bouwstenen of metadata-elementen. Met attributen en associaties, gebruikt door klassen, gebruikmakend van codelijsten en enumeraties ondersteunt het meta-datamodel, zo goed mogelijk, elk gebruik van metadata voor geografische gegevens (vb. remote sensing, webservice, data catalogus, ...). De architecten van een metadataprofiel kunnen dan in functie van de noden van hun gebruikersgroep een selectie van metadata-elementen maken. Er kan wel niet willekeurig gekozen worden. De structuur van het model moet gerespecteerd worden. Bovendien stellen de bouwvoorschriften dat de basis van elke standaard dezelfde dient te zijn om een minimale uitwisseling van metadata te garanderen. De uitbreiding van het datamodel is ook onderhevig aan bepaalde bouwvoorschriften. Naast een formele beschrijving van het meta-datamodel bevat de norm ook een aantal 'blauwdrukken' of implementatievoorschriften en\ -voorbeelden die verhelderend werken. De formele beschrijving gebeurt door middel van UML-schema's en een beschrijvend woordenboek, 'data dictionary' genoemd.

##### `ISO 19115` standaard - Geographic Information - Metadata 

Deze ISO-norm werd als standaard gebruikt voor Metadata voor datasets en/of datasetseries.

##### `ISO 19115` - Technical Corrigendum 1 standaard - Geographic Information - Metadata 

Alsook het Technisch corrigendum op de `ISO 19115` standaard werd mee opgenomen.

##### `ISO 19115-2` standaard - Geographic Information - Metadata - Part 2: Extensions for imagery and gridded data

Deze ISO-norm werd nog **niet** mee opgenomen in dit metadataprofiel. Voorlopig moet beeld- en rasterdata dus nog steeds via de eerste versie van de `ISO 19115` + Technical corrigendum 1 beschreven worden.

##### `ISO 19119` standaard - Geographic Information - Services 

Deze ISO-norm werd als standaard gebruikt voor Metadata voor services.

##### `ISO 19119` standaard - Geographic Information - Services - Amendment 1: Extensions of the service metadata model

Alsook dit Amendement op de `ISO 19119` standaard werd mee opgenomen.

##### `ISO 19110` - Geographic Information - Methodology for feature cataloguing

Deze ISO-norm werd als standaard gebruikt voor de Beschrijving van objectencatalogi.

Een objectencatalogus of "feature catalogue" bevat een formele beschrijving van de objecten, attributen en relaties van een dataset. Op basis van deze norm heeft Informatie Vlaanderen een profiel en uitwisselingsformaat voor objectencatalogi opgesteld (als addendum op de pure metadata) voor GDI-Vlaanderen.

Een objectencatalogus zal niet intrinsiek voorzien worden in de metadata. Informatie Vlaanderen en de GDI-Vlaanderen besluiten voorlopig nog steeds met een objectencatalogus (opgebouwd volgens ISO-norm 19110) te werken tot de informatiemodellen ingeburgerd zijn. In de toekomst kunnen dan informatiemodellen voor elke (kern)dataset opgebouwd worden, die de objectencatalogus overbodig maken en dus meteen volledig vervangen.

Dit wordt concreet via een verwijzing naar enerzijds de objectencatalogus en het informatiemodel anderzijds gerealiseerd.

#### De INSPIRE richtlijn en Implementing Rules

[INSPIRE](http://inspire.jrc.ec.europa.eu/) is een kaderrichtlijn, de `INSPIRE Directive 2007/2/EC`, met wetgeving die voor alle Europese lidstaten geldt. Oorspronkelijk opgezet vanuit milieutoepassingen zal INSPIRE dankzij zijn brede toepassing leiden tot een algemene Europese geo-informatie infrastructuur.

INSPIRE Metadata vormt een hoofdstuk van de INSPIRE kaderrichtlijn.

Gedetailleerde technische voorzieningen voor de componenten van de Kaderrichtlijn zullen beschreven worden in Implementing Rules (IR). IRs zelf worden voorgelegd aan het Comité (comitology) dat beslist. En eens beslist, worden de IRs opgenomen als regelgeving.

##### INSPIRE Implementing Rules for Metadata

De INSPIRE Implementing Rules for Metadata is een eerste IR door Europa vrijgegeven.

Deze INSPIRE-implementatievoorschriften werden mee opgenomen in het metadataprofiel, zowel de extra vereisten voor Metadata van dataset(serie)s, als voor Metadata voor services.

##### INSPIRE Implementing Rules for Metadata: Technical Guidelines

De Technical Guidelines geeft in detail de vereisten weer die INSPIRE ten aanzien van metadata oplegt, dit voor de aanmaak en het bijhouden van metadata van ruimtelijke datasets, ruimtelijke datasetseries en ruimtelijke data services die overeenkomen met één van de INSPIRE-thema's uit de Annexen I, II en III van de INSPIRE Richtlijn. In deze Technische Guidelines neemt Europa je mee in de implementatie. Hoe je alles technisch voor elkaar krijgt.

Versie 2.0 van deze Guidelines brengt extra duidelijkheid in die aspecten die in de vorige versie (1.3) voor interpretatie vatbaar waren.  Ook zijn goede voorbeelden extra toegevoegd en worden extra aanbevelingen gedaan. Bovendien worden extra mogelijkheden ingevoerd om de metadata goed te kunnen evalueren en/of gebruiken.

### Metadataprofielen

Metadata Vlaanderen brengt metadata van data samen afkomstig uit verschillende domeinen. Op dit moment zijn dat enerzijds Geografische gegevens en services en anderzijds Open data. Elk domein heeft specifieke richtlijnen te volgen (al dan niet verplicht opgelegd), waarin de gegevens best beschreven kunnen worden.

Voor Geografische gegevens en services geldt de richtlijn voor de uitwisseling van metadata, versie 2.0 van het GDI-Vlaanderen Best Practices-document voor Metadata, die vanaf 16 november 2020 in voege
is.

De richtlijn bevat een formele beschrijving van het GDI-Vlaanderen metadataprofiel. Het werd opgesteld aan de hand van verschillende ISO-standaarden (`ISO 19115:2003` voor metadata van datasets - datasetseries en het technisch corrigendum 1 hiervan; `ISO 19119:2005` voor metadata van services en het amendement 1 hierop; `ISO 19139` voor de codering van metadata in XML) en de INSPIRE-richtlijn (INSPIRE Metadata Implementing Rules; Technical Guidelines 2.0). De richtlijn is geschreven voor de metadata-gebruikersgemeenschap en iedereen die de algemene principes voor het opstellen en uitwisselen van metadata wil kennen.

Voor Vlaamse (niet-geografische) Open data geldt de erkende standaard [DCAT-AP VL](applicatieprofielen/dcatapvl2), die vanaf 3 oktober 2019 in voege is als een vrijwillig toe te passen standaard.  Aan de hand van het applicatieprofiel "DCAT Application Profile for data portals in Europe", afgekort DCAT-AP, kan meta-informatie op een eenduidige wijze uitgewisseld worden tussen Open Data catalogi in Europa. DCAT-AP Vlaanderen (DCAT-AP VL) is een specialisatie (geen uitbreiding) van DCAT-AP. Met DCAT-AP VL kan een trapsgewijze aggregatie van de inhoud van Vlaamse Open Data Catalogi gerealiseerd worden zodat de informatie beschikbaar op lokaal of Vlaams niveau ook gevonden kan worden op het federale en Europese niveau. Het stuurorgaan voor het Vlaams Informatie- en ICT-beleid heeft op 3 oktober 2019 DCAT-AP VL erkend als een vrijwillig toe te passen standaard.

In beide domeinen krijgen beheerders van data en diensten via de richtlijn, via best practices, via de standaard en via alle handleidingen die er voor handen zijn tips en trucks om het goed of beter te kunnen doen. Immers hoe beter de data en diensten via metadata gedocumenteerd zijn, hoe sneller deze gevonden worden. Ze verschijnen dan ook beter en gebruiksvriendelijker in de Geopunt-catalogus en/of op het Vlaamse Open Data Portaal, bijvoorbeeld met extra functionaliteiten om de gegevens ook op kaart te tonen of de gegevens ook te downloaden.

Omdat ISO-metadata en DCAT-metadata dezelfde kern aan metadata elementen delen (nl. Dublin Core), is de GDI-Vlaanderen richtlijn voor metadata klaar om het e-gov beleid van de Vlaamse, de Federale en de Europese overheid inzake Open Data ten volle te ondersteunen. Dit betekent dat geografische gegevens, die ook 'Vlaamse Open data' zijn, mogen beschreven worden vanuit de richtlijn voor geografische gegevens en van daaruit doorstromen naar het Vlaams Open Data Portaal, waar ze correct gemapt worden op de DCAT-metadata elementen uit de erkende standaard DCAT-AP VL die daar geldt.

### Nieuwtjes door de nieuwe Metadatacenters (in gebruik genomen op 16 november 2020)

Informatie Vlaanderen geeft jullie graag kort en bondig de belangrijkste aanpassingen mee, door de komst van de nieuwe metadatacenters:

-   Nieuwe metadatacenters:
    -   **Metadata Vlaanderen** (= het voormalige Geopunt-metadatacenter)
        -   Locatie: <https://metadata.vlaanderen.be>
    -   **Metadatacenter** (van Informatie Vlaanderen) (= het voormalige AGIV-metadatacenter)
        -   Locatie: <https://metadata.vlaanderen.be/metadatacenter>
-   Welke aanpassingen zijn er gebeurd?
    -   De grootste verandering is dat metadata van Vlaamse Open data nu
        ook beschreven kunnen worden in het hoofdknooppunt, Metadata
        Vlaanderen.
        -   Metadata van Vlaamse Open data worden beschreven volgens de DCAT-AP VL standaard.
        -   Hiervoor is een 'DCAT-AP v1.2 plug-in voor GeoNetwork 3.8' gebouwd.
    -   De andere veranderingen zijn grote moderniseringen:
        -   Er is een upgrade van de infrastructuur 🡺 de nieuwe toepassingen draaien in de 'cloud';
        -   Er is een upgrade van de technologie 🡺 naar metadata-beheersysteem 'GeoNetwork 3.8';
        -   Er is een upgrade van de metadata-standaard voor het Geografische domein 🡺 dat nu ook conform de 'INSPIRE Technical Guidelines 2.0' is.

### Welk metadatacenter moet je als gebruiker kiezen? 

Wie zijn metadata niet zelf kan aanmaken, kan bij Informatie Vlaanderen terecht. Wij bieden een toepassing aan voor metadata via de opensource-code GeoNetwork, dat aangepast werd volgens de noden van de GDI-Vlaanderen en VDI-gemeenschap. Ook maakte Informatie Vlaanderen de toepassing gebruiksvriendelijk.

Het metadatacenter (van Informatie Vlaanderen) is er voor alle producten (data en/of services) die via Informatie Vlaanderen passeren of er worden aangemaakt.

Sommige organisaties en beleidsdomeinen hebben een eigen protocol rond metadata. Ze maken zelf metadata aan en bieden ze aan via een eigen systeem (bijvoorbeeld DOV, DMOW, MercatorNet). Hun metadata komen uiteindelijk ook in Metadata Vlaanderen terecht. Alle metadatacenters sluiten namelijk op Metadata Vlaanderen hun zoekdienst of feed aan, ook het metadatacenter (van Informatie Vlaanderen).

Tot slot heb je de organisaties die zelf instaan voor de aanmaak en verspreiding van hun producten, maar geen eigen metadatasysteem hebben.  Wie in dat geval is, kan in Metadata Vlaanderen rechtstreeks metadata aanmaken en beheren. Ook de Vlaamse Open data die niet van geografische oorsprong is, wordt hierin gedocumenteerd.

### Komen er veel metadata terecht in zo'n metadatacenter? 

Metadata Vlaanderen is de centrale voorziening voor het beschrijven en het ontsluiten van gegevens in Vlaanderen. Het merendeel van de metadata wordt echter decentraal ingezameld. Verschillende GDI-Vlaanderen partners of Open data beheerders hebben ten behoeve van hun eigen databeheer metadata-knooppunten opgezet. Via de zoekdiensten of feeds van deze knooppunten stromen de metadata door naar Geopunt, en wanneer die gegevens ook 'Vlaamse Open data' zijn, ook naar het Vlaams Open Data Portaal.

Als hoofdknooppunt in het GDI-Vlaanderen netwerk oogst Geopunt (als portaal) dagelijks de beschikbare metadata via de zoekdiensten van de beschikbare metadataknooppunten. Op die manier garanderen we een actueel en volledig aanbod van de in Vlaanderen beschikbare geografische gegevens en diensten, dat eveneens ontsloten wordt naar het Europees metadataknooppunt en het INSPIRE Geoportal. De Open tegenhanger is het Vlaams Open Data Portaal, die wekelijks alle Vlaamse Open data uit het hoofdknooppunt, Metadata Vlaanderen, oogst. Ook hier is er een ontsluiting naar het nationale en Europese Open data portaal.

Via een zoekdienst kunnen geografische gegevensbronnen en diensten, aan de hand van hun metadata, op een efficiënte manier gevonden worden. Voor Open data gebeurt dit via een\ (DCAT-)feed. Lees ook 3.4.

### Metadata als basiscomponent van Geopunt en het Vlaamse Open Pata Portaal

Op de AGIV-trefdag 2013 werd de eerste versie van Geopunt, het Vlaamse geoportaal, gereleased.

Metadata worden in Geopunt op twee manieren ontsloten naar het publiek:

Enerzijds is er Metadata Vlaanderen, de centrale voorziening voor het beschrijven en ontsluiten van geografische gegevens in Vlaanderen.  Metadata Vlaanderen bevat het overzicht van beschikbare geografische datasets en services en richt zich naar de meer gespecialiseerde gebruiker die behoefte heeft aan gedetailleerde beschrijvingen van datasets, datasetseries en services. Databeheerders die niet beschikken over een eigen metadata-infrastructuur, kunnen hier hun metadata documenteren. Het gros van de beschikbare metadatarecords zijn echter afkomstig uit bestaande Vlaamse metadataknooppunten. De inhoud van deze metadataknooppunten wordt dagelijks gesynchroniseerd met Metadata Vlaanderen, zodat een actueel en volledig overzicht kan aangeboden worden.

Aan de andere kant is er de Geopunt-catalogus, die zich met een eenvoudige gebruikersinterface en een samenvatting van de metadata richt tot een breed publiek. De Geopunt-catalogus vertaalt de metadata uit Metadata Vlaanderen naar een toegankelijke synthese net zoals dat het geval is bij de flaptekst van een boek. Deze synthese heeft tot doel de potentiële gebruiker een indruk te geven van de inhoud van een dataset, datasetserie of service. Met de Geopunt-catalogus kan je data vinden, raadplegen in de Geopunt-kaart en veelal direct downloaden. Services van het type WMS (Web Map Service) kan je in de Geopunt-kaart bekijken. Je kunt de WMS of een ander type service (WFS, WMTS, ...) natuurlijk ook in je eigen toepassing gebruiken. Gebruikers die na een eerste kennismaking meer gedetailleerde informatie wensen, kunnen vanuit de Geopunt-catalogus doorklikken naar de gedetailleerde metadata in Metadata Vlaanderen.

Het Vlaams Open Data Portaal (VODAP) is de centrale vindplaats voor Open data van overheden in Vlaanderen. Aan de hand van het applicatieprofiel "DCAT Application Profile for data portals in Europe", afgekort DCAT-AP, kan meta-informatie op een eenduidige wijze uitgewisseld worden tussen Open data catalogi in Europa. DCAT-AP Vlaanderen (DCAT-AP VL) is een specialisatie (geen uitbreiding) van DCAT-AP. Met DCAT-AP VL kan een trapsgewijze aggregatie van de inhoud van Vlaamse Open Data Catalogi gerealiseerd worden zodat de informatie beschikbaar op lokaal of Vlaams niveau ook gevonden kan worden op het federale en Europese niveau. Het stuurorgaan voor het Vlaams Informatie- en ICT-beleid heeft op 3 oktober 2019 DCAT-AP VL erkend als een vrijwillig toe te passen standaard.

Alle beschikbare documenten over DCAT-AP VL vind je op onze webpagina's:

-   [DCAT-AP VL applicatieprofiel](https://data.vlaanderen.be/doc/applicatieprofiel/DCAT-AP-VL/)
-   [DCAT-AP VL validator](https://opendata.vlaanderen.be/validator)
-   [DCAT-AP VL handleiding](https://overheid.vlaanderen.be/sites/default/files/media/Digitale%20overheid/Open%20data/PDF2_Handleiding_DCAT-AP_VL_v1.0_def_0.pdf?timestamp=1585322424)

## Wat je nog moet weten

### Versiebeheer: algemene uitleg - basislogica voor geografische gegevens

Alvorens te starten met editeren, zijn er enkele basisprincipes die uitgelegd moeten worden.

Een metadatarecord staat een-op-een in relatie met zijn dataset / datasetserie / service. Elke keer de gegevens veranderen, moet ook de metadatarecord aangepast worden. Metadata is immers de bijsluiter van de gegevens; en moet 100 % synchroon en up-to-date zijn met zijn gegevens.

#### Basislogica voor metadata van datasets van geografische gegevens

Als editor moet je de basislogica kennen voor de aanmaak van metadata van datasets.

Om dit helemaal te begrijpen, moet het onderscheid in de **soorten gegevens** eerst uitgelegd worden, op grondslag van de wijze waarop omgegaan wordt met historische informatie:

Er zijn twee soorten van gegevens: de **continu beheerde datasets** en de **discrete versies** **van datasets (versie-dataset)**.

-   Continu beheerde datasets zijn deze die in een zeer hoge updatefrequentie wijzigen. Ze worden minimaal wekelijks geactualiseerd en ze kunnen tot op de seconde worden beheerd.
-   Discrete versies van datasets kennen daarentegen een tragere updatefrequentie en worden als het ware op bepaalde ogenblikken in de tijd als 'snapshots' van dat moment vrijgegeven.

Daarnaast moet ook uitgelegd worden dat er **soorten wijzigingen** zijn.

-   Er zijn **wijzigingen aan de metadata die niet samenhangen met wijzigingen aan de gegevens** **zelf**. Hier gaat het dan om correcties in metadata, los van de data. Bijvoorbeeld het aanpassen van een 'dt-fout', het vervolledigen van een metadatarecord, het herformuleren van de samenvatting, ... Dit scenario is het meest eenvoudige scenario voor metadata: hier mag je vertrekken van een bestaand metadatarecord en deze zelf gaan aanpassen. Je mag er geen kopie van maken, je moet dezelfde metadatarecord editeren.
-   Daarnaast bestaan er **wijzigingen aan metadata die wel samenhangen met wijzigingen van de gegevens zelf**. Nu bestaan er opnieuw twee scenario's: ofwel gaat het om **wijzigingen in de gegevens zonder dat het domeinmodel van de data (de datastructuur) is aangepast**; ofwel gaat het om **wijzigingen in de gegevens omdat het domeinmodel van de data (de datastructuur) wel is aangepast**.
    -   In het laatste scenario -**het domeinmodel is aangepast**- spreken we eigenlijk niet meer over dezelfde gegevens, en moet je sowieso een kopie maken van de bestaande metadatarecord, waarna je die kopie kan gaan editeren. Je mag de bestaande metadatarecord niet editeren.  De bestaande metadatarecord wordt eigenlijk een historisch archief, waarbij je de keuze hebt deze nog wel of niet meer te gaan verspreiden.
    -   In het geval dat de gegevens wel wijzigen, maar het **domeinmodel hetzelfde blijft**, spreken we eigenlijk van een update van de data. In dit geval bestaan er nog twee scenario's, afhankelijk van het soort gegevens.
        -   Bij **continu beheerde datasets** kan de oude logica doorgetrokken worden bij updates (zonder wijziging in datamodel), en mag je de metadatarecord zelf gaan updaten. Je mag hier geen kopie maken van de bestaande metadatarecord. In het geval van continue (of zeer frequente) data-updates wordt er immers van uitgegaan dat de meta-informatie over de wijzigingen\* in de dataset-data zelf (of tenminste niet in een "klassieke" metadatarecord) is opgenomen (en dus ook voor de gebruiker toegankelijk (bevraagbaar) is). (\* bv. in de vorm van de 'datums'/tijdstippen waarop objecten zijn ontstaan of gewijzigd, eventueel omwille van een reden/gebeurtenis, door wie, enz.)
        -   Bij de **discrete datasets** kan de oude logica niet doorgetrokken worden bij updates (zonder wijziging in datamodel), en moet je sowieso een kopie gaan maken van de bestaande metadatarecord, waarna je die kopie kan gaan editeren. Je mag de bestaande metadatarecord niet editeren. Ook hier worden de bestaande metadatarecords telkens een historisch archief, waarbij je de keuze hebt deze nog wel of niet meer te gaan verspreiden. Met discrete versies beschrijf je immers de historiek aan de hand van een (aparte) metadatarecord van elke discrete datasetversie, en kan (indien relevant voor de gebruiker) je dus ook de meta-informatie over de wijzigingen van de ene datasetversie naar de volgende, in deze metadata-record kwijt (zowel in het geval dat dat een (pure) dataset-data-update dan wel een wijziging van de datastructuur is (in dat laatste geval wordt ervan uitgegaan dat de data ook wijzigen, zelfs als dat geen strikte data-update/actualisatie is)). Het is dan ook niet onlogisch om dergelijke discrete versies in een datasetreeks onder te brengen, een datasetserie. Het is een manier om dit verhaal te structureren, in dit geval "in de tijd".

**Werkwijze?**

-   Wanneer er een correctie van metadata alleen moet gebeuren, zonder dat er iets aan de gegevens zelf verandert, kan dit door editeren in de metadatarecord zelf.
-   Wanneer er een wijziging door data-update moet gebeuren aan een continue dataset, kan dit eveneens door editeren in de metadatarecord zelf.
-   Wanneer er een wijziging door data-update moet gebeuren aan een discrete dataset, moet je deze metadatarecord eerst dupliceren ('Dupliceer'), waarbij (in de tool GeoNetwork achter de schermen) een nieuwe identificator ('MD_fileIdentifier') voor deze metadatarecord wordt gegenereerd en jij moet zorgen dat alle metadata-elementen die moeten worden aangepast, worden gewijzigd.  Bijvoorbeeld: maak de titel uniek (neem er de versie ook mee op), voeg een bewerking ('Lineage') toe (daarin moet de versie van de gegevens ('Edition') opgenomen worden, met een beschrijving van de doorgevoerde aanpassingen. Zo kan een gebruiker van de gegevens duidelijk de bewerkingen op de gegevens volgen; en ziet hij waar welke aanpassingen ten opzichte van de vorige versie zijn doorgevoerd en hoe belangrijk deze voor hem zijn). Ook moet in de vorige versie van de metadatarecord van dezelfde gegevens het status-element worden aangepast.
    -   Als de vorige versie van de metadatarecord van dezelfde gegevens nog steeds aangeboden blijft, moet de status aangepast worden naar 'historisch archief' en in de toepassing moet de status van dit record op 'Goedgekeurd en gepubliceerd' blijven staan.
    -   Als de vorige versie van de metadatarecord van dezelfde gegevens niet meer aangeboden blijft, moet de status aangepast worden naar 'historisch archief' en in de toepassing moet de status van dit record op 'Gedepubliceerd' komen te staan.
-   Wanneer het gaat om nieuwe gegevens, en dus ook een nieuwe metadata-beschrijving, dan moet een volledige nieuwe metadatarecord aangemaakt worden. Dit kan opnieuw met de dupliceer-functionaliteit gebeuren.
    -   Eventueel kan de vorige versie van de metadatarecord dan ook
        'Gedepubliceerd' moeten worden.

**Effecten op datasetseries?**

Vergeet niet, wanneer de dataset ook deel is van een datasetserie, de metadatarecord van de datasetserie navenant aan te passen. Immers is er geen automatische overerving van datasets naar datasetseries, noch omgekeerd.

**Effecten op objectencatalogi?**

Er moet ook aandacht besteed worden aan de objectencatalogus (het meta-datamodel) die deel is van een metadatarecord. De regel is dat de dataspecificaties eigenlijk bepalen of het nog om dezelfde gegevens gaat al dan niet. Die datastructuur wordt beschreven in een objectencatalogus.

-   Bij updates van gegevens en metadata kan de objectencatalogus exact overgenomen worden. Dan moet vanuit de nieuwe metadatarecord een koppeling gelegd worden naar diezelfde objectencatalogus. Zolang de datastructuur niet verandert, hoeft de versie van de objectencatalogus ook niet mee te veranderen.
-   Bij nieuwe versies van gegevens (nieuw datamodel) en dus ook metadata, moet een nieuwe objectencatalogus worden opgesteld. Als de datastructuur wel verandert, betekent dit dat er een nieuwe objectencatalogus gemaakt moet worden.

Let dus ook goed op, wanneer je aan een objectencatalogus aanpassingen doorvoert. Deze kan immers aan meerdere metadatarecords vasthangen; waardoor je wijzigingen in al die metadatarecords worden doorgevoerd.

**Effecten op services?**

Vergeet niet, wanneer de dataset ook gedistribueerd wordt via een service, de metadatarecord van de service, al dan niet via harvesting, navenant aan te passen. Immers is er geen automatische overerving van datasets naar services, noch omgekeerd.

#### Basislogica voor metadata van datasetseries

De basislogica voor aanpassingen van metadata van datasetseries, volgt dezelfde flow als die voor continu beheerde datasets. Bij updates (zonder wijziging in datamodel), mag je de metadatarecord zelf gaan updaten. Je mag hier geen kopie maken van de bestaande metadatarecord.

#### Basislogica voor metadata van services

De basislogica voor aanpassingen van metadata van services, gebeurt op grondslag van de wijze waarop omgegaan wordt met 'backwards compatibel zijn en blijven' van de service zelf. Zolang voor de eindgebruiker de service hetzelfde blijft doen, kan je de service-update doortrekken in een metadata-update en de metadatarecord zelf gaan updaten. Echter wanneer de service niet meer backwards compatibel is, spreken we van een nieuwe service en moet er ook een kopie gemaakt worden van de metadatarecord.

### Flow van metadatarecords van ontwerp naar publicatie voor geografische gegevens

In de nieuwe metadatacenters (via de tool GeoNetwork) beschikken we niet alleen over een rol "editor" maar ook over een rol "hoofdeditor".  Organisaties die een externe firma (studiebureau) aannemen voor aanmaak of beheer van metadata bij hun data, kunnen zo het werk dat zij verrichten nog controleren voor de metadatarecord wordt gepubliceerd, bijvoorbeeld.

Daarnaast is het zo dat het metadatacenter (van Informatie Vlaanderen) zelf ook een validatiestap voorziet. De flow voor een metadatarecord in dit metadataknooppunt is als volgt (legende: na het '=' wordt de status in het vet aangeduid):

- Start bij editor:
    -   STAP 1: editor editeert = **ontwerp**
    -   STAP 2: editor stuurt ter goedkeuring door naar hoofdeditor = **intern ingediend**
    -   STAP 3: hoofdeditor kijkt na:
        -   Ofwel keurt hij af en keert de metadatarecord terug naar de editor, naar stap 1 én 2.
        -   Ofwel keurt hij goed, naar stap 4.
    -   STAP 4: hoofdeditor (is de enige rol die dit kan) stuurt ter goedkeuring door naar Informatie Vlaanderen = **intern goedgekeurd en ingediend bij Informatie Vlaanderen**
    -   STAP 5: Informatie Vlaanderen kijkt na:
        -   Ofwel keurt Informatie Vlaanderen af en keert de metadatarecord terug naar de (hoofd)editoren, naar stap 1, 2, 3 én 4.
        -   Ofwel keurt Informatie Vlaanderen goed, naar stap 6.
    -   STAP 6: Informatie Vlaanderen publiceert de metadatarecord = **goedgekeurd door Informatie Vlaanderen en gepubliceerd**
- Start bij hoofdeditor:
    -   STAP 1: hoofdeditor editeert = **ontwerp**
    -   STAP 2: hoofdeditor (is de enige rol die dit kan) stuurt ter goedkeuring door naar Informatie Vlaanderen = **intern goedgekeurd en ingediend bij Informatie Vlaanderen**
    -   STAP 3: Informatie Vlaanderen kijkt na:
        -   Ofwel keurt Informatie Vlaanderen af en keert de metadatarecord terug naar de hoofdeditor, naar stap 1 én 2.
        -   Ofwel keurt Informatie Vlaanderen goed, naar stap 4.
-   STAP 4: Informatie Vlaanderen publiceert de metadatarecord =
    **goedgekeurd door Informatie Vlaanderen en gepubliceerd**

Daarentegen wordt de "keuring" door Informatie Vlaanderen in Metadata Vlaanderen niet voorzien. De flow voor een metadatarecord in dit metadataknooppunt is als volgt:

- Start bij editor:
    -   STAP 1: editor editeert = **ontwerp**
    -   STAP 2: editor stuurt ter goedkeuring door naar hoofdeditor = **intern ingediend**
    -   STAP 3: hoofdeditor kijkt na:
        -   Ofwel keurt hij af en keert de metadatarecord terug naar de editor, naar stap 1 én 2.
        -   Ofwel keurt hij goed, naar stap 4.
    -   STAP 4: hoofdeditor (is de enige rol die dit kan) keurt goed en publiceert de metadatarecord = **goedgekeurd en gepubliceerd**

- Start bij hoofdeditor:
    -   STAP 1: hoofdeditor editeert = **ontwerp**
    -   STAP 2: hoofdeditor (is de enige rol die dit kan) publiceert de metadatarecord = **goedgekeurd en gepubliceerd**

Voor Open data, volgens DCAT beschreven, wordt momenteel geen flow gevolgd. Wat aan deze metadata wordt aangepast is steeds publiek.

### Templates en default-waardes in templates ingevuld

Er is een sjabloon voorzien voor de beschrijving van een dataset, een datasetserie en een service; alsook van een objectencatalogus. Zo kan je gemakkelijk volgen welke elementen er per soort metadata/objectencatalogus ingevuld kunnen worden. De verplichte elementen worden aangeduid, de voorwaardelijke (conditionele) elementen eveneens, zodat duidelijk is welke elementen moeten ingevuld worden en welke optioneel, of dus extra aanbevolen in te vullen zijn.

Waar kan, zijn er door Informatie Vlaanderen al default-waarden voorzien.

-   Dit zijn op voorhand ingevulde elementen, omdat ze in alle gevallen dezelfde waarde aannemen binnen de context van de GDI-Vlaanderen.\ Bijvoorbeeld: Metadatastandaard-naam & -versie.
-   Daarnaast zijn op bepaalde plaatsen ook suggesties opgenomen. Ofwel omdat het de meest voorkomende waarden zijn, ofwel om hulp te bieden in mogelijkheden. Bijvoorbeeld: *Referentiesystemen*.

Let dus altijd goed op wanneer default-waarden ingevuld zijn (zeker bij een waarde `0`) en controleer toch alle elementen, zodat de op voorhand ingevulde waarden ook voor jouw metadatarecord opgaan.

### Zoekdienst: conforme CSW-interface beschrijven

Via een zoekdienst kunnen geografische gegevensbronnen en diensten, aan de hand van hun metadata, op een efficiënte manier gevonden worden. Voor Open data gebeurt dit via een\ (DCAT-)feed.

De GDI-Vlaanderen-bepalingen en technische aanbevelingen zijn net zoals die van INSPIRE gebaseerd op het gebruik van de Catalogue Services for the Web (CSW) standaard, gepubliceerd door het Open Geospatial Consortium (OGC). Dit is een implementatiespecificatie die de manier standaardiseert waarop (web)toepassingen metadata over geografische gegevensbronnen en diensten kunnen ontdekken, raadplegen en ondervragen.  INSPIRE gebruikt voor zoekdiensten de term "discovery services". Beiden betekenen exact hetzelfde.

Een Catalogue Service is een systeem wat het "vinden" en "publiceren" van metadata beheert. Daarnaast heeft de service de mogelijkheid om metadata te "oogsten" (harvest) uit andere Catalogue Services `ISO 19115/19119 Application Profile, 2005`.

De metadata van datasets en datasetseries wordt uitgewisseld in de encoding (XML), conform:

-   <http://schemas.opengis.net/iso/19139/20060504/gmd/gmd.xsd> (`ISO 19115` metadata-elementen)
-   <http://eden.ign.fr/xsd/isotc211/iso19110/20090316/gfc/gfc.xsd/>, tot het schema is opgenomen in <http://www.isotc211.org/2005/gfc> (`ISO 19110`-elementen)

Deze encoding is geschikt om tussen OGC catalogues (CSW) te kunnen uitwisselen. Voor de catalogues dient gebruik te worden gemaakt van de volgende schema's:

-   *OGC Catalogue Service (2.0.2)*: Dit zijn de schema's die de interfaces en het core model van de basis Catalogue Service definiëren.
-   *ISO Application Metadata Profile (1.0.0)*: Dit schema is het basis schema van het ISO Application Profile voor de OGC Catalogue Service 2.0.2. Dit schema is verbonden met `ISO 19139`.

| Specificatie                     | Versie | Schema-locatie                                               |
| -------------------------------- | ------ | ------------------------------------------------------------ |
| OGC Catalogue Service            | 2.0.2  | <http://schemas.opengis.net/csw/2.0.2/>                      |
| ISO Metadata Application Profile | 1.0.0  | <http://schemas.opengis.net/csw/2.0.2/profiles/apiso/1.0.0/> |

/// table-caption
Locatie van de relevante XSD-schema's
///

De tegenhanger van een zoekdienst voor geografische gegevens is een (DCAT-)feed voor Vlaamse Open data.

Een DCAT-AP VL feed is een DCAT-AP VL catalogus-bestand dat ophaalbaar is via een URL. Dergelijke DCAT-AP VL feed moet aan een aantal technische voorwaarden voldoen, die beschreven staan in de Open data handleiding (op deze locatie: <https://overheid.vlaanderen.be/open-data-handleiding>).

### Identificerende sleutels (identifiers) in `ISO 19115`

#### Metadatarecord identificatie

In `ISO 19115` wordt de identificatie van metadatarecords geregeld door de fileIdentifier, een tekenreeks opgenomen in het MD_Metadata object. Deze tekenreeks wordt vervangen door een MD_Identifier object in de herziening (januari 2014) van de `ISO 19115` metadata standaard.

Het gebruik van fileIdentifiers in de ISO metadata geeft metadatabeheerders een mechanisme om metadatarecords uniek te identificeren. Dit wordt steeds belangrijker naarmate metadata beheerd wordt in verschillende gedecentraliseerde metadatacatalogi die door een centrale catalogus (Metadata Vlaanderen catalogus) geoogst worden. Er is geen betrouwbare manier om dubbele records te identificeren zonder een unieke identificator.

### Meertaligheid metadata

In deze Best Practices-richtlijn nemen we voorlopig het standpunt in dat metadatarecords enkel in één taal worden voorzien. Meestal zal dit het Nederlands zijn, de standaardtaal voor Vlaanderen.

Dit sluit niet uit dat wanneer de vraag naar meertaligheid in de toekomst opgelegd wordt, dit ook kan/moet toegepast worden.

### Verwante datasets vs. datasetseries vs. datasets

#### Dataset - `ISO 19115:2003` definitie 

Identificeerbare collectie van data (`ISO 34 2002`)

OPMERKING: Een dataset mag een kleinere groep van data zijn, gelimiteerd door beperkingen zoals een geografisch gebied of geo-objecttype ('feature type'), die aanwezig is in een grotere dataset. Theoretisch kan een dataset bestaan uit een enkel geo-object of een attribuut van een geo-object dat aanwezig is in een grotere dataset. Een papieren versie of kaart kan beschouwd worden als een dataset.

De Vlaamse metadatastandaard voor geografie gaat niet uit van het type datasets zoals theoretisch beschreven kan worden.

#### Datasetserie - `ISO 19115:2003` definitie

Verzameling van datasets met dezelfde productspecificaties (`ISO 47 2003`)

Productspecificaties zijn volgens Nederland 'thema, resolutie en methodologie'. Toepassing van metadata op datasetseries maakt het gebruikers van de metadata mogelijk om op een hoger niveau dan individuele datasets data te zoeken. Metadata van datasetseries zijn geschikt voor het zoeken op globale karakteristieken van beschikbare data, maar niet voor diepgaand onderzoek naar de kwaliteit van specifieke datasets. Hiervoor is metadata van datasets noodzakelijk. De hiërarchische relatie tussen een dataset en datasetserie is altijd van verticale aard.

#### Verwante datasets

Volgens `ISO 19115:2003` worden de horizontale relaties tussen datasets vastgelegd in de codelijst DS_AssociationTypeCode (B.5.7).

Nederland neemt net zoals Vlaanderen enkel de 'crossReference' als type van relatie op, waarbij verwante datasets dus duiden op een referentie van de ene dataset naar een andere. (Van de verwante dataset(s) worden altijd de titel en datum ingevoerd.)

#### FIGUUR: 'dataset' - 'datasetserie' - 'verwante datasets'

verwante datasets

DATASET 2018

DATASET 2019

DATASETSERIE

DATASET X

Figuur 1: Interactie tussen de begrippen dataset, datasetserie en verwante dataset

### Verschil template DS - DSS 

#### Hoe maak je metadata van een datasetserie?

-   Vertrek van het metadatasjabloon voor een datasetserie, vanuit de tool GeoNetwork.

Merk op in dit sjabloon zal de serie default ingevuld zijn via:

-   hierarchyLevel: series (zie 4.5)
-   hierarchyLevelName: Datasetserie (zie 4.6)

#### Hoe geef je aan dat een dataset deel uitmaakt van een datasetserie of verwant is met een andere dataset?

-   Zorg voor opname van een `parentIdentifier` (zie 4.4)
-   Geef de naam op van de serie of geaggregeerde dataset waarvan de betrokken dataset deel uitmaakt
-   Geef relatie op via `aggregationInfo` (zie 4.22)

Met de codelijst « DS_AssociationTypeCode » kan je dan het soort relatie vastleggen.

Een voorbeeld van hoe dit er in XML uitziet:

![](media/image3.png){width="6.035395888013999in"
height="3.0729166666666665in"}

#### Hoe kan je linken leggen tusssen datasets en datasetseries in de tool GeoNetwork?

In de tool GeoNetwork kan je via het rechterpaneel een link toevoegen:

-   Van een dataset naar een datasetserie (parent record)
-   Van een datasetserie naar een dataset (child record)

En vervolgens kies je de correcte dataset(serie) uit de gepubliceerde metadatarecords die in de catalogus aanwezig zijn. Deze link wordt enkel in de catalogus gelegd, hierdoor wordt deze link niet weggeschreven in de XML van de metadatarecord zelf.

## Best Practices - Uitleg per element: `ISO 19115` (Datasets / Datasetseries)

### fileIdentifier (ISO element 2) 

Dit element bevat de waarde die een metadatarecord uniek identificeert.  In de `ISO 19115` (Geographic Information - Metadata) wordt deze identificerende sleutel (identifier) als tekenreeks gedefinieerd (/gmd:fileIdentifier/gco:CharacterString). Geadviseerd wordt om gebruik te maken van een betekenisloze identifier zoals een Universal Unique Identifier (UUID, <http://en.wikipedia.org/wiki/UUID>) of een Uniform Resource Identifier (URI, <http://nl.wikipedia.org/wiki/Uniform_Resource_Identifier>) om de uniciteit van de sleutel te garanderen.

Bijvoorbeeld: 17e50f84-5882-40d9-b0ed-7e062d9d26ac (UUID)

Het fileIdentifier-element is geen INSPIRE-verplicht element, maar is essentieel om het oogsten van metadata uit verschillende metadatacatalogi mogelijk te maken. Zonder fileIdentifier in een metadatarecord is het niet mogelijk om dubbele metadatarecords te identificeren. De fileIdentifier faciliteert eveneens de definitie van child-parent relaties tussen metadatarecords.

### language (ISO element 3)

Hier beschrijf je de taal die in de metadatarecord wordt gebruikt. In veel gevallen is Nederlands de default-waarde.

### charachterSet (ISO element 4)

Dit element bevat de volledige naam van de karakter codeerstandaard die gebruikt wordt om de metadatarecord te beschrijven. Er is keuze uit de ISO-codelijst 'MD_CharacterSetCode' (B.5.10). Echter is de meest voorkomende waarde hier UTF-8.

### parentIdentifier (ISO element 5)

Je moet het element alleen invullen als er een dataset(serie) bestaat met een hogere hiërarchie. Je neemt hier de unieke identificator van de metadatarecord (fileIdentifier) op waarvan deze metadatarecord een subset is (de datasetserie bv.).

Zie 3.7 en 3.8 voor de uitleg datasets / datasetseries en zie ook 4.1 voor de uitleg over de fileIdentifier.

### hierarchyLevel (ISO element 6)

Je kiest hier het niveau waarop de metadatarecord betrekking heeft; is het een dataset, datasetserie of service waar de metadata-beschrijving over zal gaan. Volgens `ISO 19115` is een datasetserie een verzameling geografische data die gelijke karakteristieken hebben ten aanzien van het thema, de resolutie en/of methodologie. GDI-Vlaanderen gaat uit van het principe dat een datasetserie pas kan ontstaan wanneer twee of meer datasets met dezelfde productspecificaties gegroepeerd kunnen worden. Zie 3.7 voor meer uitleg.

#### Uitleg dataset

Identificeerbare collectie van data `ISO34 2002` / `ISO 19101:2002`.

Een dataset mag een kleinere groep van data zijn, gelimiteerd door beperkingen zoals een geografisch gebied of geo-objecttype (\"feature type\"), dat aanwezig is in een grotere dataset. De GDI-Vlaanderen metadata Best Practices-richtlijn gaat niet uit van dit soort type datasets.

Zie 3.7 voor meer uitleg.

#### Uitleg datasetserie

Verzameling van datasets met dezelfde productspecificaties `ISO47 2003 ISO 19115:2003`.

Toepassing van metadata op datasetseries maakt het de gebruikers van metadata mogelijk om op een hoger niveau dan individuele datasets gegevens te zoeken en vinden. Metadatarecords van datasetseries zijn geschikt voor het zoeken op globale karakteristieken van beschikbare data, maar niet voor diepgaand onderzoek naar de kwaliteit van specifieke datasets bijvoorbeeld. Hiervoor is metadata van datasets noodzakelijk. Figuur 2 geeft een schematische weergave van de relatie tussen de metadata van datasetseries en datasets weer. De hiërarchische relatie tussen een dataset en datasetserie is altijd van verticale aard.  Zie ook 3.7.

```xml
<figure>
  <img src="media/image4.png" style="width:6.10208in;height:1.93194in" />
  <figcaption><p>Figuur 2: Relatie datasetseries – datasets</p></figcaption>
</figure>
```

#### Uitleg Service

Apart te onderscheiden onderdeel van de functionaliteit die via interfaces door een entiteit wordt aangeboden \[ISO/IEC TR 14252\].

### hierarchyLevelName (ISO element 7)

De naam van het hiërarchie-niveau is meestal 'Dataset', 'Datasetserie' of 'Dienst'.

### contactgegevens (ISO element 8; m.i.v. 374, 375, 376, 378, 387, 388, 407, 408, 409, 389, 380, 381, 382, 384, 385, 386, 390, 396, 397, 379)

Dit element beschrijft de identificatie van de verantwoordelijke organisatie.

Van de organisatie wordt minimum de organisatienaam vastgelegd. Gebruik de volledig uitgeschreven naam van de verantwoordelijke organisatie. De afkorting kan toegevoegd worden aan de organisatienaam.

Ook het e-mailadres is een verplichte waarde binnen de contactgegevens.  Het moet uiteraard het e-mailadres van de verantwoordelijke organisatie zijn.

Daarnaast moet ook aangegeven worden welke rol de verantwoordelijke organisatie opneemt. Bv. contactpunt, eigenaar, beheerder, verdeler, uitgever, bewerker, inwinner, ... De rollen kunnen gekozen worden uit de ISO-codelijst 'CI_RoleCode' (B.5.5). Probeer steeds zo volledig mogelijk te zijn op alle plaatsen waar contactgegevens worden gevraagd, zodat alle rollen en contactgegevens beschikbaar zijn voor de gebruiker.

Verder wordt bij de metadata van de services verwacht door INSPIRE (sinds de Technical Guidelines 2.0) dat de 'CI_ResponsibleParty' via de rol van ISO-beheerder (custiodian) wordt ingevuld voor Interoperable Spatial Data Services. Tot slot moet de onlineResource ook verplicht ingevuld worden. Hiermee kent de gebruiker de locatie (de webpagina) van de organisatie, gebruik makend van een URL.

Opgelet, contactgegevens zijn niet zo vrijblijvend als vaak lijkt. Er hangen, afhankelijk van de soort rol die opgenomen wordt, verschillende verantwoordelijkheden aan vast. Gebruikers zullen en kunnen contact opnemen met vragen, foutmeldingen, ... Maar ook worden bepaalde rollen vanuit deze ISO-standaardisatie verder gemapt naar andere standaarden, of opgepikt i.f.v. monitoring en rapportering.

Bijvoorbeeld:

-   Bepaalde rollen in de ISO-standaardisatie worden gemapt naar de rollen beschikbaar in DCAT-standaardisatie voor het afficheren van de gegevens op het Vlaams Open Data Portaal. Zo wordt de **ISO-uitgever** (publisher) (of indien deze rol ontbreekt dan wordt **ISO-eigenaar** (owner) gebruikt) gemapt naar de dcat:publisher, omdat deze rol verantwoordelijk is voor de uitgave van een 'resource', en 'Publisher' een verplicht element is in DCAT-AP VL.  INSPIRE vereist dan weer dat er minimum een ISO-**contactpunt** (pointOfContact) ingevuld wordt.
-   Voor de toepassing van het GDI-decreet (voor de toevoeging aan de GDI en de monitoring van de ontsluiting), is de **ISO-beheerder** (custodian) dan weer het aanspreekpunt.

Qua aanbeveling in deze Best Practices-richtlijn wordt voorgesteld om naast **contactpunt** dus ook de **eigenaar**, **beheerder, uitgever** en **verdeler** op te nemen. Ook is het zo dat indien je alle rollen op jou neemt als organisatie, je de contactgegevens telkens moet herhalen per rol die beschreven wordt.

  ----------------- ----------------------- ------------------------------------------
  `ISO 19115`                                 
  Codelijst:                                
  CI_RoleCode                               
  (B.5.5)                                   

  **Nederlandse     **Engelse naam**        **Definitie, omschrijving**
  naam**                                    

  verstrekker       resourceprovider        Organisatie die de data verstrekt

  **beheerder**     **custodian**           Partij die verantwoordelijkheid heeft
                                            geaccepteerd en zorg draagt voor het
                                            beheer van de data

  **eigenaar**      **owner**               Partij die eigenaar is van de data

  gebruiker         user                    Partij die de data gebruikt

  **verdeler**      **distributor**         Partij die de data verstrekt

  maker             originator              Partij die de data heeft gecreëerd

  **contactpunt**   **pointOfContact**      Partij waarmee contact kan worden
                                            opgenomen voor het vergaren van kennis of
                                            verstrekking van de data

  inwinner          principalInvestigator   Sleutelpartij verantwoordelijk voor
                                            inzamelen van data en de uitvoering van
                                            onderzoek

  bewerker          processor               Partij die de data heeft bewerkt, zodanig
                                            dat de data is gewijzigd

  **uitgever**      **publisher**           Partij die de data publiceert

  auteur            author                  Partij die auteur is van de data
  ----------------- ----------------------- ------------------------------------------

### dateStamp (ISO element 9)

In dit datumveld neem je de datum op waarop de metadata gemaakt of gewijzigd werd. Het formaat van de datum moet als volgt opgebouwd zijn: `JJJJ-MM-DD` (met koppeltekens).

### metadataStandardName (ISO element 10)

Het is aanbevolen de naam van de standaard die gebruikt wordt hier op te nemen.

-   Als de inhoud van je metadata gemigreerd is, conform de nieuwe versie van de INSPIRE Technical Guidelines 2.0, ziet dat er zo uit:
    -   Voor dataset(serie)s: `ISO 19115/2003/Cor.1:2006/INSPIRE-TG2.0`
    -   Voor services: `ISO 19119:2005/Amd 1:2008/INSPIRE-TG2.0`
-   Als de inhoud van je metadata nog conform de vorige versie van de INSPIRE Technical Guidelines 1.3 is, ziet dat er zo uit:
    -   Voor dataset(serie)s: `ISO 19115/2003/Cor.1:2006`
    -   Voor services: `ISO 19119:2005/Amd 1:2008`

### metadataStandardVersion (ISO element 11)

Het is aanbevolen de versie van de standaard die gebruikt wordt hier op te nemen.

-   Als de inhoud van je metadata gemigreerd is, conform de nieuwe versie van de INSPIRE Technical Guidelines 2.0, ziet dat er zo uit:
    -   GDI-Vlaanderen Best Practices - versie 2.0
-   Als de inhoud van je metadata nog conform de vorige versie van de INSPIRE Technical Guidelines 1.3 is, ziet dat er zo uit:
    -   GDI-Vlaanderen Best Practices - versie 1.0

### referenceSystemInfo (ISO element 13; m.i.v. 186, 187, 208, 207, 208.1)

In dit element voor het gebruikte ruimtelijke referentiesysteem geven we de identificatie mee van het coördinatenstelsel waarop de dataset is gebaseerd. Er kunnen één of meerdere referentiesystemen opgegeven worden. Er moet minstens één horizontaal of verticaal referentiesysteem opgegeven worden.

Deze identificatie gebeurt aan de hand van een `RS_Identifier` (zie ook 3.5), waarvoor minimaal een code dient opgegeven te worden. De toonaangevende autoriteit voor het beheer van codes voor ruimtelijke referentiesystemen is de European Petroleum Survey Group (EPSG). De EPSG-codes kunnen bv. gevonden worden op de website <https://epsg.io>.

De nieuwe metadatacenters laten toe om niet meer alleen de EPSG-code op te geven, maar ook de volledige URL die de gebruiker leidt naar een pagina waar diezelfde code staat, met meer uitleg. Dit gebeurt aan de hand van een "Anchor"-implementatie, in plaats van dit element in te vullen via een "Tekstveld" (characterString). Zo wordt die waarde die je invult echt dereferenceable.

Voor de Belgische Lambert 72 wordt de EPSG-code 31370 gehanteerd, EPSG:4937 voor ETRS89 en EPSG:4326 voor WGS84.

Voor bv. Belge 1972 / Belgian Lambert 72 ziet het er in de nieuwe metadatacenters zo uit in XML-notatie:

```xml
<gmd:referenceSystemInfo>
  <gmd:MD_ReferenceSystem>
    <gmd:referenceSystemIdentifier>
      <gmd:RS_Identifier>
        <gmd:code>
          <gmx:Anchor xlink:href="https://www.opengis.net/def/crs/EPSG/0/31370">Belge 1972 / Belgian Lambert 72</gmx:Anchor>
        </gmd:code>
      </gmd:RS_Identifier>
    </gmd:referenceSystemIdentifier>
  </gmd:MD_ReferenceSystem>
</gmd:referenceSystemInfo>
```

Of in de tool GeoNetwork ziet Belge 1972 / Belgian Lambert 72 er zo uit:

In plaats van of naast het horizontale ruimtelijke referentiesysteem kan ook het verticale ruimtelijke referentiesysteem in de metadata worden opgeslagen. EPSG-code 5621 is toegewezen aan EVRF2007 (European Vertical Reference Frame 2007). In België wordt hoofdzakelijk gebruik gemaakt van TAW (Tweede Algemene Waterpassing), de referentiehoogte die onderhouden wordt door het NGI. TAW is opgenomen in de EPSG-databank als "Ostend Height" en heeft code EPSG:5710, de XML-notatie ziet er zo uit:

```xml
<gmd:referenceSystemInfo>
  <gmd:MD_ReferenceSystem>
    <gmd:referenceSystemIdentifier>
      <gmd:RS_Identifier>
        <gmd:code>
          <gmx:Anchor xlink:href="https://www.opengis.net/def/crs/EPSG/0/5710">Ostend height</gmx:Anchor>
        </gmd:code>
      </gmd:RS_Identifier>
    </gmd:referenceSystemIdentifier>
  </gmd:MD_ReferenceSystem>
</gmd:referenceSystemInfo>
```

In de tool GeoNetwork ziet Ostend Height er zo uit:

Voor de ruimtelijke begrenzing (extent) wordt WGS84 (EPSG:4326) gebruikt. Hiermee wordt het mogelijk gemaakt om op Europees niveau data te doorzoeken.

In de metadatacenters nemen we voor het gebruikersgemak van alle editoren de meest voorkomende in te vullen waarden sowieso op in een suggestielijst, waaruit je dan de waarde die overeenkomt met jouw gegevens kunt kiezen. Mocht er eentje ontbreken, neem contact met ons op om dit correct te laten toevoegen in de suggestielijst.

Let op: Als je geen hoogte- of diepte-waarden in je gegevens hebt, dan neem je geen verticaal referentiesysteem (zoals Ostend Height) op.

### title (ISO element 360)

Zorg ervoor dat de titel van de dataset(serie) of service identificerend is over alle dataset(serie)s of services en hun versies heen; dat het leesbaar Nederlands is (of dus best zonder afkortingen, deze kan je best houden voor de alternatieve titel); en zorg ervoor dat deze niet te lang wordt.

Let wel: een titel kan in de tijd veranderen (bv. een correctie van een tikfout; een nieuwe benaming van de gegevens, naar aanleiding van een decreet; ...). Het is wel wenselijk om zo toekomstgericht mogelijk de titel te benoemen. Als je verwacht dat er nog versies, opnames, ...  volgen, neem je best toch al een soort van versionering in de titel mee op (zie ook punt 3.1).

Alleen ISO element 3 (zie 4.1) 'fileIdentifier' is het enige unieke element waarmee je over alle datasets, datasetseries en services heen een metadatarecord identificerend kunt beschrijven.

### edition (ISO element 363)

De versie-omschrijving van de dataset(serie) moet zeker hier opgenomen worden. Een gebruiker kan aan dit element weten over welke versie de metadataset gaat.

Daarnaast wordt ook naar dit element verwezen in het element 4.32. Per versie van de gegevens wordt daar immers weggeschreven wat de bewerkingen zijn die werden doorgevoerd ten opzichte van de vorige versie ervan.

### identifier (ISO element 365; 207)

Deze identificator bevat de waarde die de dataset, die door de metadata beschreven wordt, uniek identificeert. Identificatoren worden standaard met "MD_Identifier" ingevuld. Alleen bij het referentiesysteem wordt met "RS_Identifier" (ISO element 365; m.i.v. 208, 207, 208.1) gewerkt.

Geadviseerd wordt om voor de code gebruik te maken van een betekenisloze identificator zoals een Universal Unique Identifier (UUID, <http://en.wikipedia.org/wiki/UUID>) of een Uniform Resource Identifier (URI, <http://nl.wikipedia.org/wiki/Uniform_Resource_Identifier>), om de uniciteit van de sleutel te garanderen.

### series

Zie 3.7 voor meer uitleg.

### abstract (ISO element 25)

Hier beschrijf je een korte beschrijving van de dataset(serie)/service.  Alle relevante informatie die een gebruiker nodig heeft om de inhoud van de dataset(serie)/service te kennen, moet hier beschreven zijn.

De beschrijving van waar de gebruiker zijn foutenrapportering kwijt kan, neem je best niet hier op, maar bij het element supplementalInformation onder het onderdeel DataIdentification.

### purpose (ISO element 26)

De reden waarom de dataset(serie) bedoeld is, wordt hier neergeschreven.

Voor gegevens afkomstig van de Vlaamse overheid wordt aangeraden volgende zin toe te voegen: "De gegevens zijn bedoeld voor taken van algemeen belang." Let op, deze zin gaat niet in alle gevallen op.

### status (ISO element 28)

Het element status wordt via een invoerveld met vaste waarden beschreven. Hier is het belangrijk dat jouw metadatarecord de juiste status van de dataset(serie)/service beschrijft. Zie ook 3.1.  Bijvoorbeeld:

- Er is een nieuwe versie van de dataset(serie)/service beschikbaar
  - Er wordt ook een nieuwe metadatarecord voor aangemaakt\
  -  Vergeet dan de metadatarecord van de vorige versie niet mee aan te passen:
    - ofwel wordt de oude versie nog verdeeld en wordt de status op 'historisch archief' gezet en de metadata verder gepubliceerd,
    - ofwel wordt de oude versie niet meer verdeeld en wordt de metadata gedepubliceerd.

### fileName (ISO element 49)

Het wordt aangeraden om een voorbeeldweergave te voorzien. Ofwel kies je een goed beeld om jouw dataset(serie) te representeren; ofwel neem je een veelzeggend voorbeeld uit jouw dataset zelf.

Gebruik voor het voorbeeld best JPEG- of PNG-formaat met een grootte van 800 op 600 pixels. Bij het opladen kies je ervoor meteen ook een kleine versie aan te maken. De kleine versie wordt gebruikt in de zoekresultaten en in het overzicht, zodat de grootte de snelheid niet belemmert. De kleine versie moet dan wel als eerste voorbeeldweergave opgeladen worden.

De JPEG of PNG-extensie voorzie je best wel in kleine letters (bijvoorbeeld .png), zodat het opladen altijd correct slaagt.

Tip: merk op dat in de nieuwe versie van de tool GeoNetwork de voorbeeldweergaven nu in het rechterpaneel moeten worden opgeladen of toegevoegd.

### descriptiveKeywords (ISO element 33; m.i.v. 52, 53, 55, 359, 360, 361, 393, 394, 395)

#### keyword (ISO element 53)

Trefwoorden zijn algemene begrippen die een dataset(serie)/service beschrijven en vooral te bevragen maken. Hoe beter je de trefwoorden kiest, hoe eenvoudiger een gebruiker de best geschikte dataset(serie)/service vindt die hij zoekt.

Je kunt naast losse eigen trefwoorden ook trefwoorden uit een thesaurus gaan opnemen. Sowieso moet voor INSPIRE-datasets minimaal één trefwoord uit de thesaurus "GEMET - INSPIRE themes" en één trefwoord uit de thesaurus "GEMET - Concepten" worden toegevoegd. Prioritaire datasets moeten voor INSPIRE het betreffende trefwoord uit de thesaurus "INSPIRE priority data set" opnemen, in functie van correcte monitoring en rapportering bij Europa.

Net zoals ook een trefwoord uit de thesaurus "Spatial scope" gekozen moet worden voor die INSPIRE monitoring en rapportering. In Vlaanderen kunnen we de datasets quasi default op het Spatial scope trefwoord 'regionaal' indelen. De thesaurus "Vlaamse Regio's" is soortgelijk en kan in de meeste gevallen quasi default met 'Vlaams Gewest' worden ingevuld.

Daarnaast voegt het metadatacenter via de tool GeoNetwork automatisch bij conformiteitscontrole eventuele trefwoorden onder de "GDI-Vlaanderen thesaurus" toe; en raden we sowieso aan de gepaste trefwoorden bij jouw gegevens uit deze laatste thesaurus op te nemen. Let wel, die "GDI-Vlaanderen" trefwoorden kan je enkel toekennen als jouw gegevens ook die status hebben.

Voor Vlaamse Open data kan je ook een trefwoord opnemen uit de thesaurus van de "Data.gov.be themes", omdat deze Open data-thema's lichtjes afwijken van de ISO-categorieën. Indien je geen trefwoord uit deze "Data.gov.be" thesaurus opneemt, wordt de gekozen ISO-categorie zo goed als mogelijk gemapt naar het semantisch best passende Open data-thema.  Voor metadata van services kan je het "Service Type" via een trefwoord uit die thesaurus opnemen.

Sinds versie 2.0 kunnen vrije tekstvelden vervangen worden door "Anchor"-elementen. Via een "Anchor"-element kan je een trefwoord hierdoor ook voorzien van de plek op het internet waar je dit trefwoord kunt vinden (dereferenceable), met zijn betekenis, eventuele vertaling, enz. Voor trefwoorden uit gepubliceerde thesauri is dit een meerwaarde om ze via 'Anchors' op te nemen. Bovendien leggen de INSPIRE Technical Guidelines 2.0 dit ook op om zo te implementeren.

In onderstaande tabel staat het overzicht aan thesauri en wanneer je deze verplicht moet toepassen bij het metadateren:

+----------------------+-----------------------+----------------------+
| Thesaurus            | D                     | Services             |
|                      | atasets/datasetseries |                      |
+:=====================+:======================+:=====================+
| GEMET -- INSPIRE     | Minstens één          |                      |
| themes, version 1.0  | verplicht voor        |                      |
|                      | INSPIRE-datasets      |                      |
+----------------------+-----------------------+----------------------+
| GEMET -- Concepten,  | Minstens één          |                      |
| versie 2.4           | verplicht voor        |                      |
|                      | INSPIRE-datasets      |                      |
+----------------------+-----------------------+----------------------+
| Verordening (EG) nr. | N.v.t.                | Minstens één         |
| 1205/2008 van de     |                       | verplicht voor       |
| Commissie van 3      |                       | INSPIRE-services     |
| december 2008 ter    |                       |                      |
| uitvoering van       |                       |                      |
| Richtlijn 2007/2/EG  |                       |                      |
| van het Europees     |                       |                      |
| Parlement en de Raad |                       |                      |
| betreffende          |                       |                      |
| metagegevens         |                       |                      |
+----------------------+-----------------------+----------------------+
| INSPIRE priority     | Minstens één          | N.v.t.               |
| data set             | verplicht voor        |                      |
|                      | prioritaire           |                      |
|                      | INSPIRE-datasets      |                      |
+----------------------+-----------------------+----------------------+
| INSPIRE-Spatial      | Minstens één          | N.v.t.               |
| scope                | verplicht voor        |                      |
|                      | INSPIRE-datasets      |                      |
+----------------------+-----------------------+----------------------+
| Vlaamse regio's      |                       |                      |
+----------------------+-----------------------+----------------------+
| GDI-Vlaanderen       | Tweeledig:            | Tweeledig:           |
| thesaurus            |                       |                      |
|                      | -   Zelf trefwoorden  | -   Zelf trefwoorden |
|                      |     opnemen die van   |     opnemen die van  |
|                      |     toepassing zijn   |     toepassing zijn  |
|                      |     op jouw gegevens  |     op jouw gegevens |
|                      |                       |                      |
|                      | -   Trefwoorden       | -   Trefwoorden      |
|                      |     worden            |     worden           |
|                      |     automatisch       |     automatisch      |
|                      |     gegenereerd door  |     gegenereerd door |
|                      |     ingebouwde        |     ingebouwde       |
|                      |                       |                      |
|                      |    kwaliteitscontrole |   kwaliteitscontrole |
|                      |     in tool           |     in tool          |
|                      |     GeoNetwork        |     GeoNetwork       |
+----------------------+-----------------------+----------------------+
| GDI-Vlaanderen       | N.v.t.                |                      |
| Service Types        |                       |                      |
+----------------------+-----------------------+----------------------+
| Data.gov.be themes   |                       |                      |
+----------------------+-----------------------+----------------------+
| Eigen thesaurus      |                       |                      |
+----------------------+-----------------------+----------------------+
| Losse trefwoorden    |                       |                      |
+----------------------+-----------------------+----------------------+

##### GEMET - INSPIRE themes, version 1.0 -- thesaurus 

Voor INSPIRE-dataset(serie)s moet tenminste één trefwoord uit de GEMET-thesaurus met de INSPIRE-thema's (<http://inspire.ec.europa.eu/theme/>) gekozen worden, in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van het INSPIRE-thema "Gebiedsbeheer, gebieden waar beperkingen gelden, gereguleerde gebieden en rapportage-eenheden" voor het implementeren met "Anchor"-elementen:

##### GEMET - Concepten, versie 2.4 - thesaurus 

Voor INSPIRE-dataset(serie)s moet tenminste één trefwoord uit de GEMET-thesaurus met de INSPIRE-concepten (<http://www.eionet.europa.eu/gemet/>), in de exacte notatie (met ev.  spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van de GEMET-concepten "geografie" en "luchtfotografie" voor het implementeren met "Anchor"-elementen:

##### Verordening (EG) nr. 1205/2008 van de Commissie van 3 december 2008 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende metagegevens

Voor INSPIRE-services dient er op z'n minst één keyword uit de categorie of subcategorie gekozen te worden uit deel D.4 van de verordening (EG) NR. 1205/2008 van de Commissie (<http://inspire.ec.europa.eu/metadata-codelist/SpatialDataServiceCategory>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van de Dienst kaarttoegang (infoMapAccessService) uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### INSPIRE priority data set thesaurus

In functie van de INSPIRE Monitoring en Rapportering, vraagt Europa om de 'prioritaire datasets' met een trefwoord uit de thesaurus van de "INSPIRE priority data set" aan te duiden (<http://inspire.ec.europa.eu/metadata-codelist/PriorityDataset>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van Agglomerations (Noise Directive) uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### INSPIRE Spatial scope thesaurus

In functie van de INSPIRE Monitoring en Rapportering, vraagt Europa om een trefwoord uit de thesaurus "INSPIRE Spatial scope" te kiezen (<http://inspire.ec.europa.eu/metadata-codelist/SpatialScope>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

In Vlaanderen kunnen we de datasets quasi default met het trefwoord 'Regionaal' aanduiden.

Een voorbeeld in XML van het trefwoord 'Regionaal' uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### Vlaamse Regio's thesaurus

De thesaurus "Vlaamse Regio's" is soortgelijk als de "INSPIRE Spatial scope" en kan vaak default met 'Vlaams Gewest' worden ingevuld, maar ook de provincies en de steden en gemeenten zijn er in gedefinieerd (<https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Vlaamse-Administratieve-Eenheden>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van het trefwoord Vlaams Gewest uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### GDI-Vlaanderen thesaurus

Voor de GDI-Vlaanderen voorzien we eveneens een lijst trefwoorden, van belang om bepaalde kwaliteitseigenschappen aan te geven, of om de dataset(series)/services een bepaald statuut mee te kunnen geven.  Hieronder worden ze opgelijst, met hun bijhorende uitleg en het overzicht.

##### Statuut

-   Toegevoegd GDI-Vl
    -   Pas wanneer en voor zolang dat de gegevens aan de GDI-Vlaanderen zijn toegevoegd, neem je dit trefwoord op uit deze thesaurus.
    -   Op basis van dit trefwoord kan de monitoring voor de GDI gebeuren om het overzicht te kennen van de gegevens die zijn toegevoegd aan de GDI.
-   Herbruikbaar
    -   Pas wanneer en voor zolang je hergebruik hebt toegestaan en de voorwaarden voor zowel commercieel als niet commercieel hergebruik hebt vastgesteld, en waarmee de gegevens dus hergebruikt kunnen worden, neem je dit trefwoord op uit deze thesaurus.
    -   Op basis van dit trefwoord kan de monitoring voor de GDI gebeuren om het overzicht te kennen van de gegevens die herbruikbaar zijn.
-   Vlaamse Open data
    -   Wanneer en voor zolang een regeling voor hergebruik van toepassing is in overeenstemming met hoofdstuk 4 (Hergebruik van overheidsinformatie) van het Bestuursdecreet, neem je dit trefwoord op uit deze thesaurus.
    -   Dit trefwoord wordt gebruikt om Vlaamse Open data eveneens via het Vlaams Open Data Portaal te oogsten en daar publiek te ontsluiten.
-   Vlaamse Open data Service
    -   Wanneer je een Service aanbiedt die werkt op Vlaamse Open data (zoals hierboven bedoeld) en je deze data (ten minste ook) ter beschikking stelt voor hergebruik, neem je dit trefwoord op uit deze thesaurus. 
    -   Dit trefwoord wordt gebruikt om Services op Vlaamse Open data eveneens via het Vlaams Open Data Portaal te oogsten en daar publiek te ontsluiten.
-   Kosteloos
    -   Pas wanneer en voor zolang er aan niemand kosten worden aangerekend voor het gebruik, de verstrekking of het verlenen van toegang tot de gegevens via alle in deze metadatarecord beschreven distributiekanalen / -vormen, neem je dit trefwoord op uit de thesaurus.
    -   Op basis van dit trefwoord weet de gebruiker die gratis gegevens zoekt in één oogopslag welke gegevens kosteloos zijn voor iedereen.
-   Lijst M&R INSPIRE
    -   Wanneer en voor zolang de dataset of dienst is opgenomen in de Belgische Monitoring-lijst, opgemaakt in het kader van de INSPIRE Monitoring & Reporting, neem je dit trefwoord op uit deze thesaurus.
    -   Op basis van dit trefwoord zal het harvesten van INSPIRE-datasets en INSPIRE-diensten door de Europese commissie gebeuren.

Alle trefwoorden die de gegevens een 'statuut' bezorgen, dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via het Metadatacenter of via Metadata Vlaanderen editeert met de tool GeoNetwork.

##### Kwaliteitseigenschappen

-   Metadata INSPIRE-conform
    -   Wanneer jouw metadatarecord INSPIRE-conform is, krijgt hij automatisch dit trefwoord toegekend bij het publiceren ervan via het Metadatacenter of via Metadata Vlaanderen met de tool GeoNetwork. Zo ook bij het harvesten naar Metadata Vlaanderen vanuit een andere CSW-zoekdienst.
    -   Dit trefwoord bezorgt jouw metadatarecord dus een extra kwaliteitslabel.
-   Metadata GDI-Vl-conform
    -   Wanneer jouw metadatarecord conform de GDI-Vlaanderen Best Practices v2.0-richtlijn is, krijgt hij automatisch dit trefwoord toegekend bij het publiceren ervan via het Metadatacenter of via Metadata Vlaanderen met de tool GeoNetwork. Zo ook bij het harvesten naar Metadata Vlaanderen vanuit een andere CSW-zoekdienst.
    -   Dit trefwoord bezorgt jouw metadatarecord dus een extra kwaliteitslabel.

Alle trefwoorden die de gegevens deze 'kwaliteitseigenschappen' bezorgen, worden automatisch door het systeem toegekend bij valideren/publiceren van jouw metadatarecord via het Metadatacenter of via Metadata Vlaanderen met de tool GeoNetwork. Zo ook bij het harvesten naar Metadata Vlaanderen vanuit een andere CSW-zoekdienst.

Het overzicht van alle trefwoorden uit de GDI-Vlaanderen thesaurus, ziet er zo uit:

| Schema-opbouw van de GDI-Vlaanderen thesaurus                                 | Inhoud in XML            | Label                    |
| ----------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/TOEGEVOEGDGDIVL  | Toegevoegd GDI-Vl        | Toegevoegd GDI-Vl        |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/HERBRUIKBAAR     | Herbruikbaar             | Herbruikbaar             |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/VLOPENDATA       | Vlaamse Open data        | Vlaamse Open data        |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/KOSTELOOS        | Kosteloos                | Kosteloos                |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/LIJSTMRINSPIRE   | Lijst M&R INSPIRE    | Lijst M&R INSPIRE        |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/MDINSPIRECONFORM | Metadata INSPIRE-conform | Metadata INSPIRE-conform |
| https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Trefwoorden/MDGDICONFORM     | Metadata GDI-Vl-conform | Metadata GDI-Vl-conform |

Of in XML met de "Anchor"-elementen ziet dit overzicht er zo uit:

##### GDI-Vlaanderen Service Types thesaurus

Voor metadata van services kan je het "Service Type" via een trefwoord uit die thesaurus opnemen (<https://metadata.vlaanderen.be/id/GDI-Vlaanderen-Service-Types>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van het trefwoord OGC:WMS uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### Data.gov.be themes thesaurus

Voor Vlaamse Open data kan je ook een trefwoord opnemen uit de thesaurus van de "Data.gov.be themes" (<http://vocab.belgif.be/auth/datatheme>), in de exacte notatie (met ev. spelfouten en hoofdletters waar toegepast).

Omdat deze Open data-thema's lichtjes afwijken van de ISO-categorieën, kan je zelf een beter passend thema kiezen. Indien je geen trefwoord uit deze "Data.gov.be" thesaurus opneemt, wordt de gekozen ISO-categorie zo goed als mogelijk gemapt naar het semantisch best passende Open data thema.

Dit trefwoord dien je zelf te voorzien, uit de Trefwoordkiezer aan te duiden, als je via de metadatacenters editeert met de tool GeoNetwork.

Een voorbeeld in XML van het trefwoord Energie uit deze thesaurus voor het implementeren met "Anchor"-elementen:

##### Eigen of andere thesaurus

Het is ook mogelijk trefwoorden uit een eigen thesaurus op te geven, of trefwoorden uit een andere thesaurus in te vullen.

#### thesaurusName (ISO element 55; m.i.v. 359, 360, 361, 362, 393, 394, 395)

Is enkel verplicht in te vullen als de trefwoorden die gekozen worden uit een thesaurus afkomstig zijn. Probeer dit zo veel als mogelijk via een "Anchor"-implementatie te documenteren.

Het overzicht van verplicht in te vullen thesauri staat in de tabel hierboven (zie 4.20.1.1).

##### title (ISO element 360)

Zie 4.20.1.1, 4.20.1.2, 0, 0, 0, 0, 4.20.1.7, 0 en 0 voor de juiste schrijfwijze van de hierboven vermelde thesauri. Zeker indien je niet via de metadatacenters editeert met de tool GeoNetwork.

##### date (ISO element 394)

De thesaurus datum hangt samen met de thesaurus die gekozen werd. Je vult er best de publicatiedatum van de thesaurus in.

##### dateType (ISO element 395)

De thesaurus datumtype hangt eveneens samen met de thesaurus die gekozen werd. Er is keuze tussen een creatie-, publicatie-, of revisiedatum. Je vult er best het datumtype 'publicatie' in.

### resourceConstraints (ISO element 35; m.i.v. 67, 68, 69, 68, 70, 71, 72, 73, 68, 74)

(67)MD_Constraints wordt voorbehouden voor het documenteren van **inhoudelijke gebruiksbeperkingen**: voor welk gebruik de resource niet geschikt of bedoeld is. Deze MD_Constraints zijn dus niet (meer(!)) bedoeld voor het documenteren van legale toegangs- of gebruiksbeperkingen.

Meerdere instanties van (67)MD_Constraints/(68)useLimitation kunnen gebruikt worden om meerdere types van inhoudelijke gebruiksbeperkingen te beschrijven.

Maak geen gebruik van (74)MD_SecurityConstraints.

**Toegangsbeperkingen**, in de zin van: "wel/geen beperkingen op de publieke toegang" (de resource bevat wel/niet informatie die "gevoelig" is, zodat niet iedereen zonder meer kan kennis nemen van die informatie in relatie tot de regelingen i.v.m. Openbaarheid van bestuur), worden gedocumenteerd in één en aparte instantie van (69)MD_LegalConstraints/(70)accessConstraints.

Zelfs als er geen beperking is op de publieke toegang, dan dient dit opgenomen te worden.

Bij de invulling wordt gekozen voor (72)otherConstraints (niet (!) voor de andere MD_RestrictionCode zoals copyright, patent, ...) dat ingevuld wordt met een 'gmx:Anchor' verwijzend naar één van de waarden van de Europese INSPIRE-codelijst, op deze locatie: <http://inspire.ec.europa.eu/metadata-codelist/LimitationsOnPublicAccess>*.* Meerdere instanties van (72)otherConstraints zijn mogelijk.

Alle **legale gebruiksregelingen** ((her)gebruiksvoorwaarden, -regelingen, licenties, ...) worden gedocumenteerd in (69)MD_LegalConstraints/(71)useConstraints.

Vul deze altijd in.

Bij de invulling wordt gekozen voor (72)otherConstraints (niet (!) voor de ander ISO-mogelijkheden (MD_RestrictionCode) zoals copyright, patent, ...).

Er kunnen parallel meerdere (her)gebruiksregelingen van toepassing zijn (gebruik voor taken van algemeen belang, hergebruik, ...). Documenteer de verschillende regelingen best in aparte instanties van (72)otherConstraints.

Gebruik indien mogelijk, in elke instantie van (72)otherConstraints een 'gmx:Anchor' met een URI of URL waarin de van toepassing zijnde regeling/licentie kan geraadpleegd worden.

-   Indien je voor hergebruik één van de Vlaamse modellicenties voor hergebruik hanteert, gebruik dan één URI uit <https://data.vlaanderen.be/doc/licentie/>.
-   Een eigen (custom-)licentie voor hergebruik moet je zelf publiceren, en er met een 'gmx:Anchor' naar verwijzen.
-   Voor de regelingen voor taken van algemeen belang kaderend in het GDI-decreet, is (indien van toepassing) het gebruik van volgende URL's aanbevolen:
    -   <https://codex.vlaanderen.be/PrintDocument.ashx?id=1019561> (toegevoegd aan de GDI met gebruiksbepalingen voor Vlaamse instanties); of
    -   <https://codex.vlaanderen.be/PrintDocument.ashx?id=1020931> (toegevoegd aan de GDI met gebruiksbepalingen voor niet-Vlaamse instanties).

Om alles nog makkelijker te maken, heeft Informatie Vlaanderen in de tool GeoNetwork een functionaliteit voorzien bij het editeren, waarbij:

-   het aparte invulblok met Beperkingen op de publieke toegang ((69)MD_LegalConstraints/(70)accessConstraints) reeds ingevuld is met de waarde "Geen beperkingen op de publieke toegang" met betreffende URI-verwijzing
-   je kan kiezen uit een aantal vooraf ingevulde otherConstraints-invulblokken die voor jouw resource van toepassing zijn:
-   Onder de tab: Toegangs-en gebruiksbeperkingen, gebruik de knop '+Beperkingen' om een licentie toe te voegen. Een lijst met de beschikbare mogelijkheden wordt op het scherm getoond. Bij selectie van een beperking, zijn de velden automatisch ingevuld. **update 19/1/2026**
-   Verwijderen van de screenshot hieronder, is verouderd **update 19/1/2026**

### aggregationInfo (ISO element 35.1; m.i.v. 66.1, 66.2, 359, 360, 361, 362, 393, 394, 395, 66.3, 208, 207, 208.1, 66.4)

Zie 3.7.

### spatialResolution (ISO element 38; m.i.v. 59, 60, 56, 57, 61)

Vectordataset(series) moet je via de noemer van de toepassingsschaal (denominator) beschrijven (zie 0); rasterdatasets moeten via de grondresolutie (distance) beschreven worden (zie 4.23.2).

Voor de niet-geografische datasets bevelen we aan de noemer (denominator) in te vullen met 1 (zie 0).

#### denominator (ISO element 57)

Hier wordt alleen de noemer van de schaalbreuk opgenomen. Bijvoorbeeld:

`1 : 25 000` 🡺 noemer (denominator) = `25 000`

Voor vectordata bevelen we aan deze mapping te volgen:

-   grootschalige data 🡺 noemer (denominator) = `1 000`
-   middenschalige data 🡺 noemer (denominator) = `10 000`
-   kleinschalige data 🡺 noemer (denominator) = `100 000`

Voor de niet-geografische data stellen we de noemer (denominator) in op `1`.

#### **distance** (ISO element 61)

Voor rasterdata wordt hier de grondresolutie van de data opgenomen. Bijvoorbeeld: 

```xml
<gco:Distance uom="m">0.25</gco:Distance>
```

### language (ISO element 39) 

Hier beschrijf je de taal die in de dataset(serie)/service wordt gebruikt. In veel gevallen is de waarde Nederlands.

### characterSet (ISO element 40)

Voor INSPIRE verplicht, als voor de uitwisseling van de bron geen GML wordt gebruikt en de gebruikte karakterset geen UTF-8 is. Voor niet-INSPIRE-dataset(serie)s is het verplicht als de waarde niet voldoet aan de ISO/IEC 10646 standaard. UTF-8 en UTF-16 voldoen aan deze standaard.

### topicCategorie (ISO element 41)

Je kan hier de categorie waar jouw dataset(serie)/service toe behoort kiezen uit de lijst van ISO-categorieën, die ook door INSPIRE werden overgenomen.

Wanneer jouw gegevens Vlaamse Open data zijn, wordt deze ISO-categorie ook daar gebruikt en gemapt naar het DCAT-theme; tenzij je zelf een trefwoord gekozen had uit de "Data.gov.be themes" thesaurus (zie 0).

### GeographicIdentifier (ISO element 207)

Beschrijf hier in woorden over welk geografisch gebied jouw gegevens verspreid zijn. Deze term wordt ook gebruikt in zoekacties. Er wordt eveneens een suggestielijst voorgesteld van veel voorkomende termen, zodat ze op eenzelfde manier worden benoemd of geschreven.

### TemporalExtent (ISO element 351)

Het element temporele begrenzing beschrijft de inhoudelijke geldigheid van de gegevens.

Als de gegevens zelf inhoudelijke begin- en einddata hebben, moet voor de begindatum van de temporele begrenzing de allereerste begindatum van de gegevens ingevuld worden; en moet voor de einddatum van de temporele begrenzing de allerlaatste einddatum van de gegevens ingevuld worden.  Ontbreekt deze laatste dan kan je de datum van de volgende herziening van de dataset er ingeven.

Als je gegevens zelf geen inhoudelijke begin- en einddata hebben, dan geldt als begindatum van de temporele begrenzing de einddatum van temporele begrenzing van de vorige versie van de gegevens; en als einddatum van de temporele begrenzing de nieuwe versiedatum van de huidige gegevens.

### contentInfo (ISO element 15; m.i.v. 232, 233, 236, 238, 359, 360, 361, 362, 393, 394, 395)

Een objectencatalogus kan via deze elementen worden toegevoegd, nadat hij zelf beschreven werd. Je kan via het element "includedWithDataset" (element 236) aangeven of er een objectencatalogus-beschrijving vervat zit in de metadatarecord.

Via de CI_Citation en alle volgende elementen (element 359 en volgende) kan je de specifieke objectencatalogus citeren met zijn titel en identificator.

Als je via metadatacenters editeert met de tool GeoNetwork, krijg je daar een hulpmiddel voor handen in het rechterpaneel, om de juiste objectencatalogus uit de totale lijst te kiezen. Uiteraard moet je de objectencatalogus wel eerst beschreven en gepubliceerd hebben, voor je deze kunt kiezen en toevoegen aan je dataset(serie).

Voor meer uitleg over het invullen van de elementen in de objectencatalogus zelf kan je terecht bij onderdeel 6 van dit document.

### distributionInfo (ISO element 17; m.i.v. 270, 271, 284, 285, 286, 272, 279, 280, 374 (all in), 281, 298, 299, 301, 302, 273, 274, 275, 276, 277, 396, 397, 278, 291, 292)

Het luik van de distributionInfo bestaat voor de onLine overdracht uit vijf elementen die met elkaar gecombineerd worden om de distributie volledig te kunnen beschrijven: Linkage, Protocol, Name, Description en Function.

Dit luik kan meerdere keren voorkomen, bijvoorbeeld voor een distributie via een URL naar een zip-bestand, een catalogus, een lokale dataset, een service (zoals een WMS, WMTS, WFS en/of WCS).

De combinatie van de URL (ISO element 397), het protocol dat je daarmee ondersteunt (ISO element 398), de naam (ISO element 400) en de beschrijving (ISO element 401) zorgt ervoor dat je volledigere, correctere en kwalitatievere metadata van je data of dienst beschrijft.  Meer nog, je gegevens worden meer zichtbaar, concreet brengen de waarden, die in deze elementen beschreven worden, meteen meerwaarde in het Geopunt-portaal (zie ook 4.30.2).

Elk van de elementen wordt hieronder uitvoerig beschreven (zie 4.30.1, 4.30.2, 4.30.3 en 4.30.4). Ook telkens met hoe wij concreet aanbevelen dat je dat element opneemt voor een dataset die via een service ontsloten wordt, als voor de service zelf.

Tot slot zie je in de laatste twee hoofdstukken hieronder toegepaste praktijkvoorbeelden van de combinatie van deze vijf metadata-elementen voor onLine bronnen voor de meest gangbare geografische webservices (WMS, WMTS, WFS en WCS), zowel voor de beschrijving van een dataset, die via een service ontsloten wordt (zie 4.30.5), als voor de service zelf (zie 4.30.7).

#### linkage (ISO element 397)

Dit element is verplicht. Het geeft je de link naar meer informatie over de bron en / of er een link is die toegang geeft tot gerelateerde services, ook al is die service zelf ook voorzien van metadata.

Het bevat een valide URL voor de online toegang tot de bron of als er niet een directe link naar de bron aanwezig is naar een locatie waar informatie over de bron beschikbaar is.

De combinatie van de URL (ISO element 397), het protocol dat je daarmee ondersteunt (ISO element 398), de naam (ISO element 400) en de beschrijving (ISO element 401) zorgt ervoor dat je volledigere, correctere en kwalitatievere metadata van jouw data of dienst beschrijft. Meer nog, de gegevens worden zichtbaarder, concreet brengen de waarden, die in deze elementen beschreven worden, meteen meerwaarde in het Geopunt-portaal (zie ook 4.30.2).

##### Linkage voor metadata van **datasets**, die ook via een service ontsloten worden

-   **WMS**: We raden aan om deze URL's in de linkage op te nemen:
    -   Eénmaal opname van GetCapabilities-operatie
    -   Per 'Layer' in de service GetMap-operatie
-   **WMTS**: We raden aan om deze URL's in de linkage op te nemen:
    -   Eénmaal opname van GetCapabilities-operatie
    -   Per 'Layer' in de service GetTile-operatie
-   **WFS**: We raden aan om deze URL's in de linkage op te nemen:
    -   Eénmaal opname van GetCapabilities-operatie
    -   Per 'FeatureType' in de service GetFeature-operatie (! opgepast,
        beperk de request best tot het opvragen van maximum één feature
        via deze URL)
-   **WCS**: We raden aan om deze URL's in de linkage op te nemen:
    -   Eénmaal opname van GetCapabilities-operatie
    -   Per 'CoverageSummary' in de service GetCoverage-operatie

##### Linkage voor metadata van **services**

-   **WMS**: We raden aan om deze URL's in de linkage op te nemen:
    -   GetCapabilities-operatie
-   **WMTS**: We raden aan om deze URL's in de linkage op te nemen:
    -   GetCapabilities-operatie
-   **WFS**: We raden aan om deze URL's in de linkage op te nemen:
    -   GetCapabilities-operatie
-   **WCS**: We raden aan om deze URL's in de linkage op te nemen:
    -   GetCapabilities-operatie

#### protocol (ISO element 398)

Dit element is optioneel, maar het is aanbevolen om het element best op te nemen, zodat je het protocol van de linkage kan beschrijven. Alleen op die manier zal jouw data / service ook zichtbaar gemaakt kunnen worden via de knop 'Bekijk op kaart' in de Geopunt-Catalogus; of zal jouw data automatisch gedownload kunnen worden vanuit de Geopunt-Catalogus.

Het element bevat het protocol voor het afhandelen van de URL in het linkage-element. Er is een suggestielijst van mogelijke protocollen voorzien via de metadatacenters in de tool GeoNetwork. Door gebruik te maken van deze suggestielijst is de invulling van het element software onafhankelijk.

De belangrijkste protocollen uit de suggestielijst voor GDI-Vlaanderen dataset(series) en services zijn hier opgenomen:

| Inhoud in XML                           | Label                                            | Uitleg                                           |
| --------------------------------------- | ------------------------------------------------ | ------------------------------------------------ |
| OGC:WMS                                 | OGC-WMS Web Map Service (endpoint)               | WMS-endpoint                                     |
| OGC:WMS\-1.1.1-http-get-map             | OGC-WMS GetMap operatie (ver 1.1.1)              | WMS Get Map (1.1.1)                              |
| OGC:WMS\-1.1.1-http-get-capabilities    | OGC-WMS GetCapabilities operatie (ver 1.1.1)     | WMS Get Capabilities (1.1.1)                     |
| OGC:WMS\-1.1.1-http-get-featureinfo     | OGC-WMS GetFeatureInfo operatie (ver 1.1.1)      | WMS Get Feature Info (1.1.1)                     |
| OGC:WMS\-1.3.0-http-get-map             | OGC-WMS GetMap operatie (ver 1.3.0)              | WMS Get Map (1.3.0)                              |
| OGC:WMS\-1.3.0-http-get-capabilities    | OGC-WMS GetCapabilities operatie (ver 1.3.0)     | WMS Get Capabilities (1.3.0)                     |
| OGC:WMS\-1.3.0-http-get-featureinfo     | OGC-WMS GetFeatureInfo operatie (ver 1.3.0)      | WMS Get Feature Info (1.3.0)                     |
| OGC:WFS                                 | OGC-WFS Web Feature Service (endpoint)           | WFS-endpoint                                     |
| OGC:WFS\-1.0.0-http-get-capabilities    | OGC-WFS GetCapabilities operatie (ver 1.0.0)     | WFS Get Capabilties (1.0.0)                      |
| OGC:WFS\-1.0.0-http-get-feature         | OGC-WFS GetFeature operatie (ver 1.0.0)          | WFS Get Feature (1.0.0)                          |
| OGC:WFS\-1.0.0-http-describefeaturetype | OGC-WFS DescribeFeatureType operatie (ver 1.0.0) | WFS Describe FeatureType (1.0.0)                 |
| OGC:WFS\-1.1.0-http-get-capabilities    | OGC-WFS GetCapabilities operatie (ver 1.1.0)     | WFS Get Capabilties (1.1.0)                      |
| OGC:WFS\-1.1.0-http-get-feature         | OGC-WFS GetFeature operatie (ver 1.1.0)          | WFS Get Feature (1.1.0)                          |
| OGC:WFS\-1.1.0-http-describefeaturetype | OGC-WFS DescribeFeatureType operatie (ver 1.1.0) | WFS Describe FeatureType (1.1.0)                 |
| OGC:WFS\-1.1.0-http-getgmlobject        | OGC-WFS GetGmlObject operatie (ver 1.1.0)        | WFS Get GMLobject (1.1.0)                        |
| OGC:WFS\-2.0.0-http-get-capabilities    | OGC-WFS GetCapabilities operatie (ver 2.0.0)     | WFS Get Capabilties (2.0.0)                      |
| OGC:WFS\-2.0.0-http-get-feature         | OGC-WFS GetFeature operatie (ver 2.0.0)          | WFS Get Feature (2.0.0)                          |
| OGC:WFS\-2.0.0-http-describefeaturetype | OGC-WFS DescribeFeatureType operatie (ver 2.0.0) | WFS Describe FeatureType (2.0.0)                 |
| OGC:WCS                                 | OGC-WCS Web Coverage Service (endpoint)          | WCS-endpoint                                     |
| OGC:WCS\-1.0.0-http-get-capabilities    | OGC-WCS GetCapabilities operatie (ver 1.0.0)     | WCS Get Capabilties (1.0.0)                      |
| OGC:WCS\-1.0.0-http-get-coverage        | OGC-WCS GetCoverage operatie (ver 1.0.0)         | WCS Get Coverage (1.0.0)                         |
| OGC:WCS\-1.1.0-http-get-capabilities    | OGC-WCS GetCapabilities operatie (ver 1.1.0)     | WCS Get Capabilities (1.1.0)                     |
| OGC:WCS\-1.1.0-http-get-coverage        | OGC-WCS GetCoverage operatie (ver 1.1.0)         | WCS Get Coverage (1.1.0)                         |
| OGC:WCS\-1.1.1-http-get-capabilities    | OGC-WCS GetCapabilities operatie (ver 1.1.1)     | WCS Get Capabilties (1.1.1)                      |
| OGC:WCS\-1.1.1-http-get-coverage        | OGC-WCS GetCoverage operatie (ver 1.1.1)         | WCS Get Coverage (1.1.1)                         |
| OGC:WCS\-2.0.0-http-get-capabilities    | OGC-WCS GetCapabilities operatie (ver 2.0.0)     | WCS Get Capabilties (2.0.0)                      |
| OGC:WCS\-2.0.0-http-get-coverage        | OGC-WCS GetCoverage operatie (ver 2.0.0)         | WCS Get Coverage (2.0.0)                         |
| OGC:WCS\-2.0.1\-http-get-capabilities   | OGC-WCS GetCapabilities operatie (ver 2.0.1)     | WCS Get Capabilities (2.0.1)                     |
| OGC:WCS\-2.0.1\-http-get-coverage       | OGC-WCS GetCoverage operatie (ver 2.0.1)         | WCS Get Coverage (2.0.1)                         |
| OGC:WMTS                                | OGC-WMTS Web Map Tile Service (endpoint)         | WMTS-endpoint                                    |
| OGC:WMTS\-1.0.0-http-get-capabilities   | OGC-WMTS GetCapabilities operatie (ver 1.0.0)    | WMTS Get Capabilities (1.0.0)                    |
| OGC:WMTS\-1.0.0-http-get-tile           | OGC-WMTS GetTile operatie (ver 1.0.0)            | WMTS Get Tile (1.0.0)                            |
| OGC:OGC\-API-Features-landingpage       | OGC-API-Features-landingpage                     | Landingspagina OGC API Features                  |
| OGC:KML                                 | OGC-KML Keyhole Markup Language                  | KML-bestand                                      |
| GLG:KML-2.0-http-get-map                | Google Earth KML service (ver 2.0)               | Google Earth KML service (2.0)                   |
| WWW:DOWNLOAD\-1.0-ftp--download         | Bestand ter directe download over FTP            | Bestand downloaden over FTP                      |
| WWW:DOWNLOAD\-1.0-http--download        | Bestand ter directe download over HTTP           | Bestand downloaden over HTTP                     |
| LINK download-store                     | Indirecte link naar download-store (URL)         | URL naar folder, winkel, … voor directe download |
| WWW:LINK\-1.0-http--atom                | ATOM feed (URL)                                  | Atom-feed                                        |
| WWW:LINK\-1.0-http--link                | Webadres (URL)                                   | Webadres (URL)                                   |
| WWW:LINK\-1.0-http--related             | Gerelateerde link (URL)                          | Gerelateerde link (URL)                          |
| OGC:CSW                                 | OGC-CSW Catalogue Service for the Web (endpoint) | CSW\-endpoint                                    |
| OGC:CSW\-2.0.2-http-get-capabilities    | OGC:CSW GetCapabilities operatie (ver 2.0.2)     | CSW Get Capabilities (2.0.2)                     |
| OGC:CSW\-2.0.2-http-describerecord      | OGC:CSW DescribeRecord operatie (ver 2.0.2)      | CSW Describe Record (2.0.2)                      |
| OGC:CSW\-2.0.2-http-get-records         | OGC:CSW GetRecords operatie (ver 2.0.2)          | CSW Get Records (2.0.2)                          |
| OGC:CSW\-2.0.2-http-get-recordbyid      | OGC:CSW GetRecordById operatie (ver 2.0.2)       | CSW Get Record By Id (2.0.2)                     |
| OGC:CSW\-2.0.2-http-get-domain          | OGC:CSW GetDomain operatie (ver 2.0.2)           | CSW Get Domain (2.0.2)                           |
| OGC:CSW\-2.0.2-http-harvest             | OGC:CSW Harvest operatie (ver 2.0.2)             | CSW Harvest (2.0.2)                              |
| OGC:CSW\-2.0.2-http-transaction         | OGC:CSW Transaction operatie (ver 2.0.2)         | CSW Transaction (2.0.2)                          |

De protocollen die zullen ondersteund worden in de **Geopunt-productdetailpagina** voor de functionaliteit "**Bekijk op kaart**" van een **dataset**, zijn deze, in volgorde van bevragen om te tonen:

1.  OGC:WMTS 🡺 wordt voorlopig echter nog niet ondersteund
2.  OGC:WMS-1.3.0-http-get-map
3.  OGC:WFS 🡺 wordt voorlopig echter nog niet ondersteund

Voorwaarde voor bovenstaande is uiteraard dat die service (van die data) effectief beschikbaar is en zijn URL opgenomen is onder 4.30.1 en zijn naam of laagnaam opgenomen is onder 4.30.3.

De protocollen die zullen ondersteund worden in de **Geopunt-productdetailpagina** voor de functionaliteit "**Bekijk op kaart**" van een **service**, zijn deze, in volgorde van bevragen om te tonen:

1.  OGC:WMTS 🡺 wordt voorlopig echter nog niet ondersteund
2.  OGC:WMS
3.  OGC:WFS 🡺 wordt voorlopig echter nog niet ondersteund

Voorwaarde voor bovenstaande is uiteraard dat die service (van die data) effectief beschikbaar is en zijn URL opgenomen is onder 4.30.1 en zijn naam opgenomen is onder 4.30.3.

De protocollen die momenteel ondersteund worden in de **Geopunt-productdetailpagina** voor de "**Download**"-functionaliteit van een **dataset**, zijn deze, in volgorde van bevragen om te tonen:

1.  WWW:DOWNLOAD-1.0-http---download 🡺 welke naar één bestand kan verwijzen, over HTTP
2.  WWW:DOWNLOAD-1.0-ftp---download 🡺 welke naar één bestand kan verwijzen, over FTP
3.  LINK download-store 🡺 welke naar een externe webpagina kan verwijzen, al dan niet met een 'meerdere bestanden'-structuur

Voorwaarde voor bovenstaande is uiteraard dat die data er ook effectief beschikbaar is en zijn URL opgenomen is onder 4.30.1.

#### name (ISO element 400)

##### Name voor metadata van **datasets**, die ook via een service ontsloten worden

-   **WMS**: We raden aan om de name zo in te vullen:
    -   Voor de GetCapabilities-operatie: Name = Titel (Title) van de Service (uit Capabilities)
    -   Voor de GetMap-operatie, per laag: Name = Naam laag (layer) in de Service
-   **WMTS**: We raden aan om de name zo in te vullen:
    -   Voor de GetCapabilities-operatie: Name = Titel (Title) van de Service (uit Capabilities)
    -   Voor de GetTile-operatie, per laag: Name = Naam laag (layer) in de Service
-   **WFS**: We raden aan om de name zo in te vullen:
    -   Voor de GetCapabilities-operatie: Name = Titel (Title) van de Service (uit Capabilities)
    -   Voor de GetFeature-operatie, per featuretype: Name = Naam featuretype in de Service
-   **WCS**: We raden aan om de name zo in te vullen:
    -   Voor de GetCapabilities-operatie: Name = Titel (Title) van de Service (uit Capabilities)
    -   Voor de GetCoverage-operatie, per coveragesummary: Name = Naam coveragesummary in de Service

##### Name voor metadata van services

We raden aan om de name zo in te vullen:

Capabilities van de webdienst \<Titel van de respectievelijke webdienst\>

Bijvoorbeeld: Capabilities van de webdienst WMS Universiteit Gent

#### description (ISO element 401)

##### Description voor metadata van **datasets**, die ook via een service ontsloten worden

-   **WMS**: We raden aan om de description zo in te vullen:
    -   Voor de GetCapabilities-operatie: Description = Abstract van de Service (uit Capabilities)
    -   Voor de GetMap-operatie, per laag: Description = Titel laag (layer) in de Service
-   **WMTS**: We raden aan om de description zo in te vullen:
    -   Voor de GetCapabilities-operatie: Description = Abstract van de Service (uit Capabilities)
    -   Voor de GetTile-operatie, per laag: Description = Titel laag (layer) in de Service
-   **WFS**: We raden aan om de description zo in te vullen:
    -   Voor de GetCapabilities-operatie: Description = Abstract van de Service (uit Capabilities)
    -   Voor de GetFeature-operatie, per featuretype: Description = Titel featuretype in de Service
-   **WCS**: We raden aan om de description zo in te vullen:
    -   Voor de GetCapabilities-operatie: Description = Abstract van de Service (uit Capabilities)
    -   Voor de GetCoverage-operatie, per coveragesummary: Description = Titel coveragesummary in de Service

##### Description voor metadata van **services**

We raden aan om de description zo in te vullen:

```xml
<gmx:Anchor xlink:href="https://inspire.ec.europa.eu/metadata-codelist/OnLineDescriptionCode/accessPoint">access point</gmx:Anchor>
```

#### function (ISO element 402)

Dit element is optioneel. Het geeft net zoals het protocol element (zie 4.30.2) extra informatie over de URL die in het linkage element (zie 4.30.1) is opgenomen. Echter verwacht INSPIRE in sommige metadatarecords dat dit veld is ingevuld.

We raden aan om de waarde van function op 'informatie' te zetten:

```xml
<gmd:CI_OnLineFunctionCode codeList="https://standards.iso.org/iso/19139/resources/gmxCodelists.xml#CI_OnLineFunctionCode" codeListValue="information"/> 
```

#### Voorbeelden van concrete implementatie voor de OnLine bronnen in de distributie-informatie van de beschrijving van een dataset, ontsloten via een WMS, WMTS en WFS

Bijvoorbeeld:

Metadatarecord van een dataset:

- De dataset is 'Vlaamse Hydrografische Atlas - Zones, 1 maart 2017'.
- Die dataset is als laag opgenomen in de service 'WMS Vlaamse Milieumaatschappij' en 'WFS Vlaamse Hydrografische Atlas - Zones'.
-  De dataset bestaat zelf uit vier entiteiten:
    -   VHA-zones
    -   VHA-bekkens
    -   Namen van de VHA-bekkens
    -   VHA-deelbekkens
-  De WMS 'WMS Vlaamse Milieumaatschappij' waarin deze dataset ontsloten wordt, heeft als Service Naam (uit de URL) 'VMM'. In de WMS worden de vier entiteiten als laag (layer) ontsloten.
-   Er zitten verschillende bronnen (lagen) in de WMS, bijvoorbeeld:
    -   Grenzen van polders, toestand 29/01/2016
    -   Risicozones voor overstromingen
    -   Vlaamse Hydrografische Atlas - Zones, 1 maart 2017
    -   ...
-   De WFS 'WFS Vlaamse Hydrografische Atlas - Zones' waarin deze dataset ontsloten wordt, heeft als Service Naam (uit de URL) 'VHAZones'. In de WFS worden drie van de vier entiteiten als featuretype ontsloten.

Samengevat in volgende drie tabellen, wordt het distributieluik voor OnLine bronnen in Overdracht zo ingevuld voor de dataset 'Vlaamse Hydrografische Atlas - Zones, 1 maart 2017':

##### Dataset ontsloten als WMS

| WMS             | Linkage                                                                                                                                                                                                                                                                                               | Protocol  <br>(in XML)               | Name                             | Description                                                 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------------------- | ----------------------------------------------------------- |
| GetCapabilities | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?service=WMS&version=1.3.0&request=GetCapabilities                                                                                                                                                                               | OGC:WMS\-1.3.0-http-get-capabilities | WMS Vlaamse Milieu\-maatschappij | Web Map Service met data van de Vlaamse Milieumaatschappij. |
| GetMap          | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=default&VERSION=1.3.0&LAYERS=VHAZone&WIDTH=1920&HEIGHT=695&CRS=EPSG:3857&BBOX=388365.25379150285,6594714.3734174045,461744.8009451731,6621276.240746467     | OGC:WMS\-1.3.0-http-get-map          | VHAZone                          | VHA-zones                                                   |
| GetMap          | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=default&VERSION=1.3.0&LAYERS=VHABek&WIDTH=1920&HEIGHT=695&CRS=EPSG:3857&BBOX=176481.8113850644,6531252.530683656,763518.1886149356,6743747.469316344        | OGC:WMS\-1.3.0-http-get-map          | VHABek                           | VHA-bekkens                                                 |
| GetMap          | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=default&VERSION=1.3.0&LAYERS=VHABekLabel&WIDTH=1920&HEIGHT=695&CRS=EPSG:3857&BBOX=388365.25379150285,6594714.3734174045,461744.8009451731,6621276.240746467 | OGC:WMS\-1.3.0-http-get-map          | VHABekLabel                      | Namen van de VHA-bekkens                                    |
| GetMap          | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?SERVICE=WMS&REQUEST=GetMap&FORMAT=image/png&TRANSPARENT=TRUE&STYLES=default&VERSION=1.3.0&LAYERS=VHADeelbek&WIDTH=1920&HEIGHT=695&CRS=EPSG:3857&BBOX=176481.8113850644,6531252.530683656,763518.1886149356,6743747.469316344    | OGC:WMS\-1.3.0-http-get-map          | VHADeelbek                       | VHA-deelbekkens                                             |


##### Dataset ontsloten als WFS

| WFS             | Linkage                                                                                                                                                       | Protocol  <br>(in XML)               | Name                                           | Description                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------------------------------- | -------------------------------------------------------------------- |
| GetCapabilities | https://geoservices.informatievlaanderen.be/ <br>overdrachtdiensten/VHAZones/wfs?service\=WFS&version\=2.0.0&request=GetCapabilities                          | OGC:WFS\-2.0.0-http-get-capabilities | WFS Vlaam\-se Hydro\-gra\-fische Atlas - Zones | Directe downloadservice voor de Vlaamse Hydrografische Atlas - Zones |
| GetFeature      | https://geoservices.informatievlaanderen.be/overdrachtdiensten/VHAZones/wfs?service=WFS&version=2.0.0&request=GetFeature&typename=VHAZones:Vhazone&count=1    | OGC:WFS\-2.0.0-http-get-feature      | VHAZones:Vhazone                               | VHA-zone                                                             |
| GetFeature      | https://geoservices.informatievlaanderen.be/overdrachtdiensten/VHAZones/wfs?service=WFS&version=2.0.0&request=GetFeature&typename=VHAZones:Bekken&count=1     | OGC:WFS\-2.0.0-http-get-feature      | VHAZones:Bekken                                | VHA-bekken                                                           |
| GetFeature      | https://geoservices.informatievlaanderen.be/overdrachtdiensten/VHAZones/wfs?service=WFS&version=2.0.0&request=GetFeature&typename=VHAZones:Deelbekken&count=1 | OGC:WFS\-2.0.0-http-get-feature      | VHAZones:Deelbekken                            | VHA-deelbekken                                                       |

#### Voorbeelden van concrete implementatie voor de OnLine bronnen in de distributie-informatie van de beschrijving van een WMS-, WMTS-, WFS- en WCS-service

##### WMS

De service is 'WMS Vlaamse Milieumaatschappij'.

| WMS             | Linkage                                                                                                                 | Protocol  <br>(in XML) | Name                                                         | Description  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------------------------------------------------------ | ------------ |
| GetCapabilities | https://geoservices.informatievlaanderen.be/raadpleegdiensten/VMM/wms?service=WMS&version=1.3.0&request=GetCapabilities | OGC:WMS                | Capabilities van de webdienst WMS Vlaamse Milieumaatschappij | access point |


##### WMTS

De service is 'agentschap Informatie Vlaanderen WMTS service'.

| WMTS            | Linkage                                                                                                           | Protocol  <br>(in XML) | Name                                                                        | Description  |
| --------------- | ----------------------------------------------------------------------------------------------------------------- | ---------------------- | --------------------------------------------------------------------------- | ------------ |
| GetCapabilities | https://tile.informatievlaanderen.be/ws/raadpleegdiensten/wmts?service=WMTS&version=1.0.0&request=GetCapabilities | OGC:WMTS               | Capabilities van de webdienst agentschap Informatie Vlaanderen WMTS service | access point |


##### WFS

De service is 'WFS Vlaamse Hydrografische Atlas - Zones'.

| WFS             | Linkage                                                                                                                       | Protocol  <br>(in XML) | Name                                                                   | Description  |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ---------------------------------------------------------------------- | ------------ |
| GetCapabilities | https://geoservices.informatievlaanderen.be/overdrachtdiensten/VHAZones/wfs?service=WFS&request=getcapabilities&version=2.0.0 | OGC:WFS                | Capabilities van de webdienst WFS Vlaamse Hydrografische Atlas - Zones | access point |


### dataQualityInfo (ISO element 18, 78, 79, 138, 139, 80, 99, 110/117/125/113, 101, 208, 207, 208, 102, 106, 107, 128, 129, 130, 359, 360, 361, 362, 393, 394, 395, 131, 132, 133, 135, 137)

Dit element is optioneel voor de ISO-standaard, maar wordt voor INSPIRE-datasets wel opgelegd, omdat er minstens een "conformiteit ten aanzien van de INSPIRE-verordening" verwacht wordt en dit via de datakwaliteitsinformatie beschreven wordt.

Indien een evaluatie tegen een specificatie (vb. voor INSPIRE) is gebeurd, moet deze benoemd (title 360, date 394 en dateType 395) en gedocumenteerd (explanation 131 en pass 132) worden. In 4.31.1 staat uitgelegd hoe je dit aanpakt.

Specificeer de dataset waarvoor de kwaliteit werd bepaald bij "scope".

-   Level: aanduiden of het om een dataset of datasetserie gaat (maak gebruik van de waarden uit codelijst MD_ScopeCode).

Verschillende kwaliteits- en kwantiteitscontroles kunnen beschreven worden onder het element DQ_DataQuality. Voorbeelden zijn: een steekproef; of een absolute en relatieve fout van een gemeten waarde ten opzichte van de exacte waarde.

Resultaten van metingen/controles moeten steeds ingevuld worden via een "kwaliteitsrapport".

#### Conformiteit ten aanzien van INSPIRE, via het element DQ_ConformanceResult

Minstens de conformiteit ten aanzien van de INSPIRE-verordening is verplicht op te nemen, extra conformiteiten beschrijven kan ook, maar is optioneel.

Wel is het zo dat je per conformiteit steeds de specificatie zelf (zie 4.31.1.1) moet meegeven waartegen je je conformiteit toetst, de uitleg die je er extra bij geeft (zie 4.31.1.3) en of het al dan niet conform (zie 4.31.1.2) is.

##### specification (element 130)

Je kunt uniek naar een specificatie verwijzen via de combinatie van zijn titel, zijn datum en datumType. Zo kan je in je resultaat verklaren tegen welke specificatie je de dataset of service al dan niet conform verklaart en waarom.

##### title (ISO element 360) {#title-iso-element-360-2 .Kop_Extra}

Geef de specificatie weer in een officiële taal uit de Europese Unie.

Sinds versie 2.0 kunnen vrije tekstvelden vervangen worden door "Anchor"-elementen. Via een "Anchor" element kan je een specificatie hierdoor ook voorzien van de plek op het internet waar je deze specificatie kunt vinden (dereferenceable), met alle bijhorende uitleg, enz. Het vormt een meerwaarde om verwijzingen naar specificaties via 'Anchors' op te nemen. Bovendien leggen de INSPIRE Technical Guidelines 2.0 dit ook op om zo te implementeren.

Een voorbeeld van hoe dit er in XML uitziet:

```xml
<gmd:title>
<gmx:Anchor xlink:href="http://data.europa.eu/eli/reg/2010/1089">VERORDENING (EU) Nr. 1089/2010 VAN DE COMMISSIE van 23 november 2010 ter uitvoering van Richtlijn 2007/2/EG van het Europees Parlement en de Raad betreffende de interoperabiliteit van verzamelingen ruimtelijke gegevens en van diensten met betrekking tot ruimtelijke gegevens</gmx:Anchor>
</gmd:title>
```

Een verwijzing naar een onderdeel van de specificatie mag ook.

Voorbeeld: INSPIRE Data Specification on Hydrography - Technical Guidelines

Opgelet:

-   INSPIRE-conforme metadata **≠** INSPIRE-conforme data
-   INSPIRE-conforme service **≠** INSPIRE-conforme data

##### date (ISO element 394) {#date-iso-element-394-1 .Kop_Extra}

De specificatie datum hangt samen met de specificatie waartegen je valideert. Je vult er best de publicatiedatum van de specificatie in.

##### dateType (ISO element 395) {#datetype-iso-element-395-1 .Kop_Extra}

Het specificatie datumtype hangt eveneens samen met de specificatie waartegen je valideert. Er is keuze tussen een creatie-, publicatie-, of revisiedatum. Je vult er best het datumtype 'publicatie' in.

##### explanation (ISO element 131)

Een element om extra uitleg toe te voegen bij het al dan niet volledig voldoen aan de specificatie.

##### pass (ISO element 132) 

Er zijn drie mogelijke indicaties om de conformiteit van het resultaat aan te geven:

-   Conform (pass=true)
-   Niet conform (pass=false)
-   Niet geëvalueerd (nilReason="unknown")

##### ETF-validator

[In de ETF-validator](http://inspire.jrc.ec.europa.eu/events/conferences/inspire_2012/presentations/222.pdf) kan je jouw data, services of metadata gaan testen.

Link: <https://inspire.ec.europa.eu/validator/about/>?

##### Voorbeeld metadata van conforme data

Op het INSPIRE Geoportal kan je voorbeelden vinden van conforme data.

Link: <https://inspire-geoportal.ec.europa.eu/>

### Statement LI_Lineage (ISO element 83)

Zoals beschreven in de basislogica is het goed om per update van je gegevens een beschrijving van de verandering toe te voegen, samen met de versie (Edition) waar het over gaat. Zo kan een gebruiker heel makkelijk de evolutie van de gegevens volgen, alsook zien wat er precies veranderd is van één versie naar een andere.

## Best Practices - Uitleg per element: `ISO 19119` (Service)

### serviceType

Dit element bevat het type van de service.

Een service type label afkomstig uit een register van services (Type dienst met betrekking tot ruimtelijke gegevens).

Bijvoorbeeld: serviceType = view

Tip: Per metadatarecord kan slechts één serviceType opgenomen worden. Als je een WMS én een WFS wil beschrijven, moet dit gebeuren in twee aparte metadatarecords.

### coupledResource

Dit element geeft informatie (metadata) over de data die in de service beschikbaar wordt gesteld.

Echter sinds versie 2.0 van de INSPIRE Metadata Technical Guidelines wordt dit element niet meer verwacht en hoeft het niet meer ingevuld te worden.

### couplingType

Dit element is verplicht volgens het amendement op `ISO 19119`. Het definieert het type koppeling tussen een service instance en een dataset. De mogelijke waarden zijn vastgelegd in de codelist 'SV_CouplingType'.

De default-waarde is 'tight'.

### containsOperations

Dit metadata-element is verplicht en beschrijft de operaties die de service kan uitvoeren. Per mogelijke operatie wordt dit element opgenomen.

#### operationName

Dit element bevat de naam van de operatie die deze service ondersteunt. De attribuutwaarde kan als default door de applicatie of handmatig worden toegevoegd.

Bijvoorbeeld: GetMap

#### DCP

Dit element bevat het Distributed Computing Platform, of de verdeelde computerplatformen waarop de operatie geïmplementeerd is. Deze waarde is opgenomen in de codelijst 'DCPList'.

Bijvoorbeeld: `HTTP`

#### connectPoint

Via het element linkage onder connectPoint wordt de locatie (via een URL) weergegeven voor de on-line toegang.

### operatesOn

Voorziet de informatie (via een metadatalink) over de dataset(s) waarop de service werkt. Bijvoorbeeld:

```xml
<srv:operatesOn xlink:href="https://metadata.vlaanderen.be/metadatacenter/srv/dut/csw?request=GetRecordById&service=CSW&constraintLanguage=CQL_TEXT&version=2.0.2&resultType=results&ElementSetName=full&typenames=csw:Record&id=a106284c-97f8-4533-ba3b-38d9e4deea2d&OUTPUTSCHEMA=http://www.isotc211.org/2005/gmd" uuidref="995a09ad-ed36-4b3a-b527-76a26ba7f677"/>
```

## Best Practices - Uitleg per element: `ISO 19110` (Objectencatalogus)

### FC_FeatureCatalogue (ISO element 1)

#### Attribute name (ISO element 1.1)

Beschrijf via dit verplichte element de naam van de objectencatalogus.  Dezelfde regels als voor de titel van een dataset(serie)/service gaan hier op (zie 4.12).

#### Attribute versionNumber (ISO element 1.4)

Beschrijf via dit verplichte element de versie van de objectencatalogus.  Dezelfde regels als voor de versie van een dataset(serie)/service gaan hier op (zie 4.13).

#### Attribute versionDate (ISO element 1.5)

Beschrijf via dit verplichte element de versiedatum van de objectencatalogus.

#### Attribute producer (ISO element 1.6)

Beschrijf via dit verplichte element de producent van de objectencatalogus.

#### Role featureType (ISO element 1.8)

Beschrijf via dit verplichte element de link naar de entiteiten/attributen/codelijsten die de objectencatalogus bevat. Dit element kan uiteraard meerdere keren voorkomen, volgens het aantal entiteiten/attributen/codelijsten dat beschreven moet worden binnen de objectencatalogus.

### FC_FeatureType (ISO element 2)

#### Attribute typeName (ISO element 2.1)

Beschrijf via dit verplichte element de naam van de entiteit/attribuut/codelijst. De naam moet echter uniek zijn over de gehele objectencatalogus.

#### Attribute definition (ISO element 2.2)

Beschrijf via dit voorwaardelijke (conditionele) element de definitie van de entiteit/attribuut/codelijst in een natuurlijke taal.

#### Attribute code (ISO element 2.3)

Beschrijf via dit optionele element de code van de entiteit/attribuut/codelijst. Dit moet echter uniek zijn over de gehele objectencatalogus.

#### Attribute isAbstract (ISO element 2.4)

Dit verplichte element geeft weer of de entiteit/attribuut/codelijst abstract is al dan niet.

#### Attribute aliases (ISO element 2.5)

Beschrijf via dit optionele element de aliasnaam, de equivalente naam van de entiteit/attribuut/codelijst.

#### Role featureCatalogue (ISO element 2.8)

Beschrijf via dit verplichte element de link van deze entiteit/attribuut/codelijst naar de objectencatalogus die deze bevat.

#### Role carrierOfCharachteristics (ISO element 2.9)

Beschrijf via dit optionele element de link van deze entiteit/attribuut/codelijst naar de attributen (propertyTypes) die ze bevat.

### FC_PropertyType (ISO element 4)

#### Attribute memberName (ISO element 4.1)

Beschrijf via dit verplichte element de naam van het attribuut binnen de entiteit/attribuut/codelijst.

#### Attribute definition (ISO element 4.2)

Beschrijf via dit voorwaardelijke (conditionele) element de definitie van het attribuut in een natuurlijke taal.

#### Attribute cardinality (ISO element 4.3)

Dit verplichte element geeft de cardinaliteit van het attribuut weer via een minimale en maximale cardinaliteit. Vaak is de waarde 0-1.

### FC_FeatureAttribute (ISO element 8)

#### Attribute code (ISO element 8.1)

Beschrijf via dit verplichte element de code van het attribuut. De code moet echter uniek zijn over de gehele objectencatalogus.

#### Attribute listedValue (ISO element 8.3)

Beschrijf via dit voorwaardelijke (conditionele) element het domein van het attribuut. Als dit element aanwezig is, dan is er een enumeratie voorzien (bijvoorbeeld een codelijst). Als dit element niet aanwezig is, dan is er geen enumeratie voor dit attribuut beschikbaar.

#### Attribute valueType (ISO element 8.4)

Beschrijf via dit voorwaardelijke (conditionele) element het type van het attribuut. Er is een lijst met aangeboden waarden om uit te kiezen.

### FC_ListedValue (ISO element 11)

#### Attribute label (ISO element 11.1)

Beschrijf via dit verplichte element de domeinwaarde van het domein. Dit moet een beschrijvend label zijn dat de waarde uniek beschrijft over het gehele attribuut.

#### Attribute code (ISO element 11.2)

Beschrijf via dit optionele element de domeincode van het domein. Dit kan een numerieke of alfanumerieke code zijn, dat opnieuw de waarde uniek beschrijft over het gehele attribuut.

#### Attribute definition (ISO element 11.3)

Beschrijf via dit optionele element de domeindefinitie van het domein, in een natuurlijke taal.

## References

- [Origineel document](https://vlaamseoverheid.sharepoint.com/:w:/r/sites/aiv/Infocat/_layouts/15/Doc.aspx?sourcedoc=%7BAA8E3450-8A2B-47FE-BD34-A04FFCB3E6A9%7D&file=GDI_Vl_BestPractices_v0_18.docx&action=default&mobileredirect=true&DefaultItemOpen=1)
