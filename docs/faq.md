---
title: FAQ
icon: lucide/circle-question-mark
---

# FAQ

## Standaarden en versies 

**Ik wil voor de eerste keer data beschrijven - waar moet ik beginnen?**

Een instapgids voor nieuwe gebruikers staat [hier](snelstarten). 

**Wat moet ik invullen om mijn data zichtbaar te maken op Datavindplaats**

Lees de [instructies](minimale.effort.voor.datavindplaats.md) maar hou ook rekening met de [GDI richtlijnen](gdi.best.practice.md)

***Ik zie meerdere secties met contactinformatie, wat moet ik waar invullen?***
Aan elk record kunnen meerdere rollen gekoppeld zijn met eigen contactinformatie. Gebruik de glossary om de verschillen te verkennen en de juiste Organisatiegegevens in te vullen. Per definitie gaat de contactinformatie uit de sectie _Gebruiksinformatie_ (voor DCAT records) en de _Meta-metadata_ (voor ISO records) op Datavindplaats onderaan getoond worden. Indien ingevuld, wordt daar ook de _eigenaar_ en de _uitgever_ apart getoond.


## Specifieke classificaties

**Hoe duid ik aan dat mijn dataset een Hoogwaardige Dataset (HVD) is?**  
Datasets die onder de Europese HVD-wetgeving vallen vereisen bijkomende metadata-elementen zoals _wetgeving_ en _HVD categorie_. Beide elementen worden via een thesaurus gekoppeld aan een record. Er zijn expliciete instructies voorzien op 

## Licensies en rechten 

**Hoe duid ik aan welke rechten de gebruikers op de omschreven datasets hebben?**

**Mijn data was publiek toegankelijk maar nu wordt het niet meer verdeelt. Wat moet in de metadatafiche aangepast worden?**
Verwijder de distributie informatie van het record: 
...
Pas de torgangs en gebruiksbeperkingen aan:
...
 
## De publicatie workflow 

**test 1**


## Datasetseries (ISO en DCAT)

### Wat is een datasetserie?

Een datasetserie:

- groepeert meerdere datasets met een inhoudelijke samenhang (bv. tijdreeksen, geografische dekking, thematische reeks);
- bevat **geen eigen data**, maar verwijst naar onderliggende datasets;
- wordt als apart record beheerd in Metadata Vlaanderen.

Gebruik een datasetserie wanneer datasets logisch als samenhangend geheel moeten gepresenteerd worden.

Binnen Metadata Vlaanderen kunnen datasetseries beschreven worden volgens de ISO-standaard (ISO 19115/19139) en worden deze metadata nadien omgezet naar DCAT via het GeoDCAT-AP-VL mappingprofiel. De mapping tussen beide bepaalt hoe metadata zichtbaar wordt in de Datavindplaats en externe catalogi.

### Datasetseries in ISO  

In ISO is het technisch mogelijk om distributies op serieniveau te beschrijven maar **dit wordt afgeraden binnen Metadata Vlaanderen.** 
Een distributie beschrijft hoe data beschikbaar is (bv. download, API, bestand). Omdat een datasetserie zelf geen data bevat, is het toevoegen van distributies op serieniveau meestal **niet betekenisvol**.

### Datasetseries in DCAT-3 (nieuw)

Een DCAT 3 datasetserie heeft **geen distributies**. Alle toegangsinformatie (downloadURL, accessURL, API, …) hoort bij de distributie secties van de onderliggende datasets.

Bij de omzetting van ISO naar GeoDCAT-AP-VL:

- worden datasetseries gemapt naar `dcat:DatasetSeries`;
- wordt informatie geëvalueerd per element:
  - blijft op serieniveau, **of**
  - wordt toegewezen aan datasets of distributies.

Wanneer distributies op serieniveau worden ingevoerd in ISO worden ze mogelijk genegeerd of foutief geïnterpreteerd in de mapping naar DCAT. Neem contact op met ons als een Serie uitzonderlijk een apart distributie nodig heeft.


**Hoe kunnen editoren dataset series duidelijker beschrijven en navigeerbaar maken?**
We gaan twee zaken toevoegen. Ten eerste een expliciete “series-dimensie” in de metadata van een datasetreeks, via een codelijst (bv. temporeel, geografisch, …), zodat je weet op basis van welke dimensie de reeks is gegroepeerd. Ten tweede ondersteuning voor een duidelijke volgorde/navigatie binnen de reeks (bv. chronologische ordening met indicaties als index/prev/next), zodat gebruikers en systemen eenvoudig door de reeks kunnen bladeren. Dit bestaat zo niet in de huidige DCAT(-AP). Omdat er meerdere redenen kunnen zijn om datasets in een reeks te groeperen, biedt de codelijst flexibiliteit.

**Kunnen we versiebeheer oplossen met DCAT-relaties in plaats van dataset series of subcatalogi, en wanneer gebruik je welke aanpak?**

Gebruik DCAT-relaties voor versie‑lijn van één dataset (bv. dct/hasVersion, dcat/prev, isPartOf/hasPart); dat dekt de koppelingen tussen versies maar vervangt geen dataset serie. Een DCAT-dataset series gebruik je om meerdere afzonderlijke datasets met dezelfde specificaties te groeperen rond één variërende eigenschap (meestal tijd of gebied) en om portaalfunctionaliteit zoals ordening/navigatie te bieden; een “lijst in de tijd” is pas een serie als die structurele invariantie geldt. Subcatalogi zijn geschikt voor brede thematische verzamelingen zonder die invariantie. 


### Relatie met andere recordtypes

Datasetseries als inhoudelijke groepering met beperkte toepassingen vullen andere structuren aan binnen Metadata Vlaanderen:

- **Dataset:** concrete data en toegang (met distributieslinks)  
- **Distributie:** data in een te downloaden vorm​ 
- **Dataservice:**  beschrijving van een specifieke digitale dienst die gegevens levert in een andere vorm van toegang tot de data dan een te downloaden bestand
Voorbeelden: WFS, WMTS, WMS, WCS, CSW
- **Subcatalogus:** thematische bundeling/portaal (brede toepassing) 


## DCAT Dataset Series en services

**Mag ik een service aan een Datasetserie linken?**
Ja, maar alleen als de service alle datasets aanbiedt, die in de serie verzameld zijn of gaan verzameld zijn. Als dit het geval is, dan mag de service aan de serie gelinked worden zoals aan een dataset (door de relatie dcat:servesDataset )
Opgelet: In verband met deze nieuwe feature werd de bestande manier van werken aangepast. De relatie tusse dataset en service kunnen sinds Release 8.5 alleen vanuit de service definierd worden. Je kan niet meer vanuit de editor van een dataset een service linken. 

## Impact op Datavind plaats

**Wat gebeurt er met dataset series (inclusief de ‘tussenvormen’) na de overgang van Geopunt catalogus naar Datavindplaats. Zullen ze vindbaar blijven en welke functies mag je verwachten?** 
Dataset series worden niet genegeerd: ISO-dataset series stromen door en worden gemapt zodat ze vindbaar blijven in Datavindplaats. Voor de duidelijk afgebakende series (bv. op gebied of tijd/versie) voorzien we extra ondersteuning en functionaliteit (zoals consistente beschrijving, mogelijke navigatie/ordening en waar zinvol download- of bundelopties). Voor ‘tussenvormen’ garanderen we in eerste instantie vindbaarheid, maar nog niet dezelfde uitgebreide functies, zeker wanneer een reeks gemengde typen bevat (rasters, vectoren, services) en de verwachtingen over downloads/navigatie onduidelijk zijn. We bouwen dit stapsgewijs uit en vragen concrete use-cases/voorbeelden om de ondersteuning van deze tussenvormen gericht te versterken.

## Impact op harvesting processen

**Wat is de relatie naar de bestaande DCAT-feeds die jullie lezen? Moeten stakeholder nog manueel dingen doen aan de kant van de backend van het Metadata Center of kan dat ook allemaal in die metadata feed gestoken worden?**

Voor datasets en services blijft jullie bestaande DCAT-feed de hoofdbron die we harvesten, dus daarvoor hoef je als stakeholder niets extra’s manueel in de backend te doen. Functionaliteit rond catalogi/subcatalogi en catalogrecords zit vandaag vooral intern bij Metadata Vlaanderen en stroomt nog niet volledig via de feed; we werken aan een uitbreiding zodat ook die relaties via DCAT kunnen aangeleverd worden. Tot die uitbreiding live is, kunnen sommige catalog‑features tijdelijk enkel via de backend of met beperkte automatisering. We communiceren de specificaties en timing, zodat je nadien zoveel mogelijk “feed‑gedreven” kan aanleveren.