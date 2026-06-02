---
icon: lucide/form
title: Sjablonen kiezen
---
# Welke sjabloon is juist voor mijn data?

 Wij onderscheiden tussen datasets en services (met dezelfde keuzes) en bijkomende categorieën zoals objectencatalogi (omschrijving van attributen in datatabellen) en subcatalogi (verzameling van metadatarecords binnen de Metadata Vlaanderen catalogus).

 Als je een _service_ of _dataset_ wilt omschrijven kan je de volgende vragen beantwoorden: 


```mermaid
flowchart TD
    A["Start met een dataset of dataservice"]
    A --> B{"Keuze 1: Geografische dataset conform GDI-Vlaanderen Best Practice en INSPIRE?"}

    B -->|Ja| C["Dataset 
    VL ISO 19139 / GDI"]
  

    B -->|"Nee, het is INSPIRE-onafhankelijke data (kan geo zijn, maar hoeft niet)"| E{"Binnen DCAT dan: Gesloten of open data?"}

    E -->|Gesloten data| F["Gesloten dataset:
     VL DCAT 2 metadata - DCAT"]
    

    E -->|Open data| G{"Keuze 3: Conform aan EU of Vlaamse richtlijnen?"}

    %% EU tak
    G -->|EU richtlijnen| H{"Aan welke Versie wil je conform zijn?"}

    H -->|V3| I["Dataset 
    (EU DCAT 3 - DCAT-AP)"]
    H -->|V2| J["Dataset
     (EU DCAT 2 - DCAT-AP)"]

    J --> K{"Bijkomende Extensie: Beschrijf je mobiliteitsdata?"}
   

    K -->|Ja, Europees| L["Mobiliteitsdataset 
    EU DCAT 2 Mobility DCAT-AP"]
   

    %% Vlaamse tak
    G -->|Vlaamse richtlijnen| M{"Aan welke Versie wil je conform zijn?"}

    M -->|V2| N["Open dataset (VL DCAT 2 - DCAT-AP VL)"]
    M -->|V3| O["Open dataset (VL DCAT 3 - DCAT-AP VL)"]

    N --> K
    

    K -->|Ja, Vlaams| Q["Mobiliteitsdataset 
    VL DCAT 2 Mobility DCAT-AP"]
```
