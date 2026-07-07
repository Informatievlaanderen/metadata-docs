# Context

Metadata Vlaanderen is het metadata-managementsysteem en de Datavindplaats is de publieksgerichte ontdekkings- en zoeklaag erbovenop. Binnen de context van de handleiding, willen we het vooral hebben over het beheren van metadata via Metadata Vlaanderen, waarbij DVP dan de (een) etalage is.

--> Slide 55 DVP Business Architectuur nog beter begrijpen en eventueel schetsen.


## Historiek binnen Digitaal Vlaanderen
Dublin Core is eigenlijk de "basisset" van metadata. Het is een eenvoudige internationale standaard die afspreekt welke informatie je minimaal over een document, dataset of ander digitaal object moet vastleggen. Denk aan velden zoals titel, beschrijving, maker, datum, onderwerp en taal. Je kan het vergelijken met de basisgegevens op een identiteitskaart: ze vertellen niet alles, maar wel genoeg om iets te herkennen, terug te vinden en te begrijpen. Veel modernere metadata-standaarden, zoals DCAT, bouwen voort op deze basis. Daarom kom je Dublin Core misschien niet vaak rechtstreeks tegen in je dagelijkse werk, maar leeft het wel voort "onder de motorkap" van heel wat metadata- en dataplatformen.

* R1 & R2: Vlaamse open data wordt geïntegreerd in Metadata Vlaanderen, met ondersteuning voor DCAT-AP VL via een plug-in op GeoNetwork 3.8. Ook infrastructuur, technologie en geografische metadata-standaarden worden gemoderniseerd. 
* Release 3 — maart 2022: grote stap naar één geïntegreerde catalogus: geografische data, open data/API’s en gesloten data/services worden samen vindbaar in de Datavindplaats. Er komen 281 extra records bij. 
* Release 4 — juni 2022: focus op verbeteringen en bugfixes, vooral rond GeoDCAT-AP VL mapping, sjablonen en de naamswijziging naar Digitaal Vlaanderen.
* Release 5 & 6 — januari/maart 2023: verdere kwaliteitsverbetering van metadata, o.a. standaardisering van formaten en koppeling van organisaties aan het Organisatieregister. 
* Release 7 — juni 2023: migraties van URL’s/URI’s, aansluiting van nieuwe nodes zoals DWSE en DCJM, en optimalisatie van zoek- en indexeringsmechanismen. 
* Release 8 — februari 2024: administratieve vereenvoudiging door samenvoeging van Metadatacenter en Metadata Vlaanderen, migratie naar GeoNetwork 4.4, AKS, Elasticsearch, nieuwe look-and-feel en veiligere login via ACM/IDM.

## OSLO & Metadata
Metadata wordt gestandaardiseerd zodat verschillende domeinen — geo, open data, API’s en gesloten data/services — op één consistente manier beschreven en vindbaar worden in de Datavindplaats.

Concreet:
* Metadata DCAT vormt het basisprofiel voor alle soorten data en services. 
* DCAT-AP VL en GeoDCAT-AP VL vertalen dit naar respectievelijk open data en geografische data. 
* De standaarden worden geïmplementeerd als sjablonen met validatieregels in GeoNetwork.
* OSLO zorgt zo voor erkenning, interoperabiliteit en hergebruik over domeinen heen. 