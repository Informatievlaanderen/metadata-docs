---
title: Glossary
icon: lucide/book-search
---

# Glossary

## Algemeen

**Metadata Vlaanderen**  
Centrale Vlaamse voorziening voor het beschrijven, beheren en ontsluiten van metadata over datasets, dataservices en catalogi volgens vaste metadata standaarden. Metadata Vlaanderen is een bron van metadata voor meerdere portalen zoals, e.g., [Datavindplaats](https://www.vlaanderen.be/datavindplaats), het [Belgische Data Portaal](data.gov.be), het [Europees data portaal](https://data.europa.eu/) en het [INSPIRE Geoportal](https://inspire-geoportal.ec.europa.eu/srv/dut/catalog.search#/home). Door het once-only principe worden dubbele beschrijvingen vermeden.

**Metadatarecord**  
Een beschrijving van een dataset, dataservice, datasetserie of catalogus, aangemaakt via een sjabloon (ISO of DCAT). Elk record doorloopt een workflow gaande van ontwerp tot publicatie.

**Sjabloon (template)**  
Vooraf gedefinieerde structuur die bepaalt welke metadata-elementen beschikbaar en verplicht zijn (bv. ISO-dataset, DCAT-dataset, dataservice, (sub)catalogus).  zie de FAQ voor een keuze steun.


## Rollen & rechten

### Binnen de Editor

**Editor**  
Gebruiker die metadatarecords mag aanmaken en bewerken binnen één of meerdere groepen (organisaties). De editor kan records indienen maar niet finaal publiceren.  

**Hoofdeditor**  
Gebruiker met bijkomende rechten om ingediende records te beoordelen en de workflowstatus te wijzigen richting publicatie. 

**Admin (Metadata Vlaanderen)**  
Gebruiker met beheersrechten over configuratie, sjablonen, groepen, validatieregels en publicatie-instellingen. Admins ondersteunen editoren en bewaken de kwaliteit en consistentie. 

**Groep (organisatie)**  
Context waarbinnen metadatarecords worden aangemaakt en beheerd. Rechten zijn gekoppeld aan de groep waarvoor een gebruiker is aangemeld. 


### Binnen een record

**Uitgvever**

**Eigenaar**

**Contactinformatie**


## Workflow & statussen

**Ontwerp**  
Initiële status van een metadatarecord. Het record is zichtbaar voor de editor maar nog niet ingediend voor publicatie.  

**Intern ingediend**  
Status waarbij een editor het record ter beoordeling indient bij de hoofdeditor.  Deze kan een record goedkeuren voor publicaties, depubliceren of verwijderen.

**Gepubliceerd**  
Status waarbij het record publiek zichtbaar is en kan worden geharvest door externe portalen zoals Datavindplaats. Binnenkort kunnen records ook privaat gepubliceerd worden om intern beheer van datasets mogelijk te maken.

**Historisch archief**  
Status voor metadata van datasets of services die niet langer actueel zijn maar omwille van historiek raadpleegbaar blijven.  


## Recordtypes

**Dataset**  
Metadatarecord dat een gegevensverzameling beschrijft. Kan geografisch en INSPIRE gericht (volgens ISO-standaarden) of geografisch/ niet-geografisch zijn (volgens DCAT standaarden) zijn.  
Elk dataset heeft een minimale geografische component, de dekking  van de gegevens, zoals het Vlaams Gewest of een bepaalde gemeente.

**Dataservice**  
Metadatarecord dat een dienst beschrijft waarmee data geraadpleegd of opgevraagd kunnen worden (bv. API, downloadservice). Een dataservicerecord wordt gelinked aan het datasetrecord dat de service verdeelt en beschrijft daarbovenop een aantal eigen eigenschappen.

**Datasetserie**  
Samenhangende reeks datasets die variëren in tijd, versie of geografische afbakening, maar inhoudelijk vergelijkbaar zijn. In het verleden was dit alleen beschikbaar binnen de ISO-context maar sinds de omschakeling naar versie 3 van het DCAT vocabularium kunnen ook DCAT datasetseries beschreven worden. 

**Subcatalogus**  

!!! info

   In oudere documentation soms ook 'virtuele catalogus'.

Recordtype dat een verzameling van metadatarecords groepeert. Wordt gebruikt om aanbod thematisch, organisatorisch of functioneel te structureren. Dit is een breder concept dan series en leidt tot een eigen portaal om data van een gelijke bron of thema in de kijker te zetten. Dit is aanbevolen voor alle verzamelingen die niet alleen versies doorheen de tijd of locaties van een zelfde concept weergeven.
Voorbeelden omvatten verzamelingen van alle beschikbare datasets over historische kaarten, groeperingen per provincie of gemeente etc.  

**Objectencatalogus** 

Verklaring van de attributen in een datataset.


## Standaarden & profielen

**ISO-metadata**  
Internationale standaard voor het beschrijven van geografische datasets en services, gebruikt binnen GDI Vlaanderen.  

**DCAT-AP**  
Europees applicatieprofiel voor het beschrijven van open data en dataservices.  

**DCAT-AP Vlaanderen (DCAT-AP-VL)**  
Vlaams profiel op DCAT-AP met bijkomende verplichtingen en aanbevelingen.  


## Publicatie & doorstroming

**Datavindplaats**  
Vlaams dataportaal waar gepubliceerde metadata uit Metadata Vlaanderen zichtbaar en doorzoekbaar worden. 

**Harvesting**  
Automatisch ophalen en synchroniseren van metadata tussen Metadata Vlaanderen en externe portalen of knooppunten.  

**Once-only principe**  
Principe waarbij metadata één keer wordt beschreven en vervolgens hergebruikt en doorgestroomd naar meerdere toepassingen. 