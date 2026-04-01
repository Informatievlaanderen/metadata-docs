---
title: Glossary
---

# Glossary


## Algemeen

**Metadata Vlaanderen**  
Centrale Vlaamse voorziening voor het beschrijven, beheren en ontsluiten van metadata over datasets, dataservices en catalogi. Metadata Vlaanderen harvest en distribueert metadata naar o.a. Datavindplaats en de data strommd door naar [Belgische](data.gov.be) en [Europese portalen](https://data.europa.eu/) en [het INSPIRE Geoportal](https://inspire-geoportal.ec.europa.eu/srv/dut/catalog.search#/home). Door het once-only principe worden dubbele beschrijvingen niet meer nodig. Daarvoor moeten de omschrijvingen vaste standarden volgen, die in de Editor gevalideerd worden. Daarvoor stellen wij gerichte sjabloonen ter beschikking.

**Metadatarecord**  
Een beschrijving van een dataset, dataservice, datasetserie of catalogus, aangemaakt via een sjabloon (ISO of DCAT). Elk record doorloopt een workflow van ontwerp tot publicatie.  

**Sjabloon (template)**  
Vooraf gedefinieerde structuur die bepaalt welke metadata-elementen beschikbaar en verplicht zijn (bv. ISO-dataset, DCAT-dataset, dataservice, (sub)catalogus).  zie de FAQ voor een keuze steun.

---

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


---

## Workflow & statussen

**Ontwerp**  
Initiële status van een metadatarecord. Het record is zichtbaar voor de editor maar nog niet ingediend voor publicatie.  

**Intern ingediend**  
Status waarbij een editor het record ter beoordeling indient bij de hoofdeditor.  DEze kan een reocrd goedkeuren voor publicaties, depubliceren of verwijderen.

**Gepubliceerd**  
Status waarbij het record publiek zichtbaar is en kan worden geharvest door externe portalen zoals Datavindplaats.  
Binnenkort kunnen records ook private gepubliceerd worden om een intern beheer van datatsets mogelijk te maken.

**Historisch archief**  
Status voor metadata van datasets of services die niet langer actueel zijn maar omwille van historiek raadpleegbaar blijven.  
---

## Recordtypes

**Dataset**  
Metadatarecord dat een gegevensverzameling beschrijft. Kan geografisch en INSPIRE gericht (volgens ISO-standarden) of geografisch/ niet-geografisch zijn (volgens DCAT- standarden) zijn.  
Elk dataset heft een minimale geografische component, de decking  van de gegevens, zoals het Vlaams Gewest of een bepaalde gemeente.

**Dataservice**  
Metadatarecord dat een dienst beschrijft waarmee data geraadpleegd of opgevraagd kan worden (bv. API, downloadservice). Een Dataservice record wordt gelinked aan de Dataset record, die de service verdeelt maar heeft enkele eigene specificaties nodig.

**Datasetserie**  
Samenhangende reeks datasets die variëren in tijd, versie of geografische afbakening, maar inhoudelijk vergelijkbaar zijn. In het verleden was dit alleen beschikbaar binnen de ISO-context maar sinds de schakeling naar DCAT-3 vocabularium kunnen ook DCAT-Series beschreven worden. 

**Subcatalogus**  
*In oudere documentation soms ook 'virtuele catalogus'.*
Recordtype dat een verzameling van metadatarecords groepeert. Wordt gebruikt om aanbod thematisch, organisatorisch of functioneel te structureren. Dit is een breder concept dan series en leidt tot een eigen subportal om data van een gelijke bron of thema in de kijker te zetten. Dit is aanbevolen voor alle verzamelingen die niet alleen versies doorheen de tijd of locatie van een zelfde concept weergeven.
Voorbeelden omvatten verzamelingen van alle beschikbare datasets over historische kaarten, groeperingen per provincie of gemeente etc.  

**Objectencatalogus** 

Verklaring van de attributen in een datataset.

---

 

## Standaarden & profielen

**ISO-metadata**  
Internationale standaard voor het beschrijven van geografische datasets en services, gebruikt binnen GDI Vlaanderen.  

**DCAT-AP**  
Europees applicatieprofiel voor het beschrijven van open data en dataservices.  

**DCAT-AP Vlaanderen (DCAT-AP-VL)**  
Vlaams profiel op DCAT-AP met bijkomende verplichtingen en aanbevelingen.  


---

## Publicatie & doorstroming

**Datavindplaats**  
Vlaams dataportaal waar gepubliceerde metadata uit Metadata Vlaanderen zichtbaar en doorzoekbaar worden. 

**Harvesting**  
Automatisch ophalen en synchroniseren van metadata tussen Metadata Vlaanderen en externe portalen of knooppunten.  

**Once-only principe**  
Principe waarbij metadata één keer wordt beschreven en vervolgens hergebruikt en doorgestroomd naar meerdere toepassingen. 

---

