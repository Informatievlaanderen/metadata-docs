---
icon: lucide/proportions
---

# Landschap

Metadata Vlaanderen participeert als Vlaamse bouwsteen in een gefedereerd internationaal landschap.

<!-- ![Image title](../assets/Flag_of_Europe.svg){ width="50" } -->

```mermaid
flowchart TD
    P1[DCJM] -->|harvest| MDV(<a href='https://metadata.vlaanderen.be'>Metadata Vlaanderen</a>)
    P2[DWSE] -->|harvest| MDV
    P3[INBO] -->|harvest| MDV
    P4[DMOW] -->|harvest| MDV
    P5[...] -->|harvest| MDV
    MDV --> |frontend| DVP(<a href='https://www.vlaanderen.be/datavindplaats'>Datavindplaats</a>)
    MDV --> |harvest| datagovbe(<a href='https://data.gov.be'>Belgisch Data Portaal</a>)
    datagovbe --> |harvest| dataeuropa(<a href='https://data.europa.eu'>European data</a>)
    MDV --> |frontend| geopunt(<a href='https://www.geopunt.be/'>Geopunt</a>)
    MDV --> |harvest| inspire(<a href='https://inspire-geoportal.ec.europa.eu'>INSPIRE Geoportal</a>)
```