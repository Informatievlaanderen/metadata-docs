---
icon: lucide/book-open-check
---

# DCAT-AP-VL

Dit is het top-level Vlaams applicatieprofiel, waarin je onder andere Datasets en Dataservices kan beschrijven. Hieronder vind je een overzicht van de entiteiten die in het applicatieprofiel beschreven worden.

# Entiteiten

## [Agent](http://purl.org/dc/terms/Agent)

| Eigenschap | URI                                         | Kardinaliteit |
| ---------- | ------------------------------------------- | ------------- |
| naam       | [foaf:name](http://xmlns.com/foaf/0.1/name) | 1..n          |

## [Catalogus](http://www.w3.org/ns/dcat#Catalog)

| Eigenschap                | URI                                                         | Kardinaliteit |
| ------------------------- | ----------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)     | 0..n          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)     | 1..n          |
| contactinformatie         | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint) | 1..1          |
| heeftDataService          | [dcat:service](http://www.w3.org/ns/dcat#service)           | 0..n          |
| heeftDataset              | [dcat:dataset](http://www.w3.org/ns/dcat#dataset)           | 0..n          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)       | 1..1          |
| licentie                  | [dct:license](http://purl.org/dc/terms/license)             | 0..1          |
| record                    | [dcat:record](http://www.w3.org/ns/dcat#record)             | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                 | 1..n          |
| uitgever                  | [dct:publisher](http://purl.org/dc/terms/publisher)         | 1..1          |

## [CatalogusRecord](http://www.w3.org/ns/dcat#CatalogRecord)

| Eigenschap                       | URI                                                                                                                    | Kardinaliteit |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------- | ------------- |
| aanmaakdatum                     | [dct:issued](http://purl.org/dc/terms/issued)                                                                          | 0..1          |
| alternatieveIdentificator        | [adms:identifier](http://www.w3.org/ns/adms#identifier)                                                                | 0..n          |
| bronMetadatarecord               | [dct:source](http://purl.org/dc/terms/source)                                                                          | 0..1          |
| bronMetadataRecordLandingspagina | [mdcat:bronMetadataRecordLandingspagina](https://data.vlaanderen.be/ns/metadata-dcat#bronMetadataRecordLandingspagina) | 0..1          |
| conform                          | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                                                                  | 0..n          |
| hoofdonderwerp                   | [foaf:primaryTopic](http://xmlns.com/foaf/0.1/primaryTopic)                                                            | 1..1          |
| identificator                    | [dct:identifier](http://purl.org/dc/terms/identifier)                                                                  | 1..1          |
| titel                            | [dct:title](http://purl.org/dc/terms/title)                                                                            | 0..n          |
| wijzigingsdatum                  | [dct:modified](http://purl.org/dc/terms/modified)                                                                      | 1..1          |

## [CatalogusResource](http://www.w3.org/ns/dcat#Resource)

| Eigenschap | URI                                                 | Kardinaliteit |
| ---------- | --------------------------------------------------- | ------------- |
| relatie    | [dct:relation](http://purl.org/dc/terms/relation)   | 0..n          |
| uitgever   | [dct:publisher](http://purl.org/dc/terms/publisher) | 1..1          |

## [Contactinfo](http://www.w3.org/2006/vcard/ns#Kind)

| Eigenschap    | URI                                                        | Kardinaliteit |
| ------------- | ---------------------------------------------------------- | ------------- |
| contactpagina | [foaf:page](http://xmlns.com/foaf/0.1/page)                | 0..1          |
| e-Mail        | [vcard:hasEmail](http://www.w3.org/2006/vcard/ns#hasEmail) | 0..1          |

## [Contactpunt](http://schema.org/ContactPoint)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Dataservice](http://www.w3.org/ns/dcat#DataService)

| Eigenschap                           | URI                                                                                                                            | Kardinaliteit |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------- |
| alternatieveIdentificator            | [adms:identifier](http://www.w3.org/ns/adms#identifier)                                                                        | 0..n          |
| beschrijving                         | [dct:description](http://purl.org/dc/terms/description)                                                                        | 0..n          |
| biedtInformatieAanOver               | [dcat:servesdataset](http://www.w3.org/ns/dcat#servesdataset)                                                                  | 0..n          |
| conformAanProtocol                   | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                                                                          | 0..n          |
| contactinformatie                    | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint)                                                                    | 1..1          |
| creatiedatum                         | [dct:created](http://purl.org/dc/terms/created)                                                                                | 0..1          |
| endpointbeschrijving                 | [dcat:endpointDescription](http://www.w3.org/ns/dcat#endpointDescription)                                                      | 1..1          |
| endpointURL                          | [dcat:endpointURL](http://www.w3.org/ns/dcat#endpointURL)                                                                      | 1..1          |
| identificator                        | [dct:identifier](http://purl.org/dc/terms/identifier)                                                                          | 1..1          |
| landingspagina                       | [dcat:landingPage](http://www.w3.org/ns/dcat#landingPage)                                                                      | 0..n          |
| landingspaginaVoorAuthenticatie      | [mdcat:landingspaginaVoorAuthenticatie](https://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorAuthenticatie)           | 0..1          |
| landingspaginaVoorGebruiksinformatie | [mdcat:landingspaginaVoorGebruiksinformatie](https://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorGebruiksinformatie) | 0..1          |
| landingspaginaVoorStatusinformatie   | [mdcat:landingspaginaVoorStatusinformatie](https://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorStatusinformatie)     | 0..1          |
| levensfase                           | [mdcat:levensfase](https://data.vlaanderen.be/ns/metadata-dcat#levensfase)                                                     | 0..1          |
| licentie                             | [dct:license](http://purl.org/dc/terms/license)                                                                                | 0..1          |
| ontwikkelingstoestand                | [mdcat:ontwikkelingstoestand](https://data.vlaanderen.be/ns/metadata-dcat#ontwikkelingstoestand)                               | 0..1          |
| publicatiedatum                      | [dct:issued](http://purl.org/dc/terms/issued)                                                                                  | 0..1          |
| rechten                              | [dct:rights](http://purl.org/dc/terms/rights)                                                                                  | 0..n          |
| relatie                              | [dct:relation](http://purl.org/dc/terms/relation)                                                                              | 0..n          |
| statuut                              | [mdcat:statuut](https://data.vlaanderen.be/ns/metadata-dcat#statuut)                                                           | 0..n          |
| thema                                | [dcat:theme](http://www.w3.org/ns/dcat#theme)                                                                                  | 0..n          |
| titel                                | [dct:title](http://purl.org/dc/terms/title)                                                                                    | 1..n          |
| toegankelijkheid                     | [dct:accessRights](http://purl.org/dc/terms/accessRights)                                                                      | 1..1          |
| trefwoord                            | [dcat:keyword](http://www.w3.org/ns/dcat#keyword)                                                                              | 0..n          |
| uitgever                             | [dct:publisher](http://purl.org/dc/terms/publisher)                                                                            | 1..1          |
| versie                               | [dcat:version](http://www.w3.org/ns/dcat#version)                                                                              | 0..1          |
| wijzigingsdatum                      | [dct:modified](http://purl.org/dc/terms/modified)                                                                              | 0..1          |

## [Dataset](http://www.w3.org/ns/dcat#Dataset)

| Eigenschap                | URI                                                                  | Kardinaliteit |
| ------------------------- | -------------------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)              | 0..n          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)              | 1..n          |
| conform                   | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                | 0..n          |
| contactinformatie         | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint)          | 1..1          |
| creatiedatum              | [dct:created](http://purl.org/dc/terms/created)                      | 0..1          |
| distributie               | [dcat:distribution](http://www.w3.org/ns/dcat#distribution)          | 0..n          |
| eigenaar                  | [dct:rightsHolder](http://purl.org/dc/terms/rightsHolder)            | 0..n          |
| geografischeDekking       | [dct:spatial](http://purl.org/dc/terms/spatial)                      | 0..n          |
| herkomst                  | [dct:provenance](http://purl.org/dc/terms/provenance)                | 0..n          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)                | 1..1          |
| inSerie                   | [dcat:inSeries](http://www.w3.org/ns/dcat#inSeries)                  | 0..*          |
| landingspagina            | [dcat:landingPage](http://www.w3.org/ns/dcat#landingPage)            | 0..n          |
| publicatiedatum           | [dct:issued](http://purl.org/dc/terms/issued)                        | 0..1          |
| relatie                   | [dct:relation](http://purl.org/dc/terms/relation)                    | 0..n          |
| statuut                   | [mdcat:statuut](https://data.vlaanderen.be/ns/metadata-dcat#statuut) | 0..n          |
| thema                     | [dcat:theme](http://www.w3.org/ns/dcat#theme)                        | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                          | 1..n          |
| toegankelijkheid          | [dct:accessRights](http://purl.org/dc/terms/accessRights)            | 1..1          |
| trefwoord                 | [dcat:keyword](http://www.w3.org/ns/dcat#keyword)                    | 0..n          |
| uitgever                  | [dct:publisher](http://purl.org/dc/terms/publisher)                  | 1..1          |
| versie                    | [dcat:version](http://www.w3.org/ns/dcat#version)                    | 0..1          |
| voorbeeldweergave         | [adms:sample](http://www.w3.org/ns/adms#sample)                      | 0..n          |
| wijzigingsdatum           | [dct:modified](http://purl.org/dc/terms/modified)                    | 0..1          |

## [DatasetSerie](http://www.w3.org/ns/dcat#DatasetSeries)

| Eigenschap                | URI                                                                             | Kardinaliteit |
| ------------------------- | ------------------------------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)                         | 1..1          |
| belanghebbendeWetgeving   | [dcatap:applicableLegislation](http://data.europa.eu/r5r/applicableLegislation) | 0..*          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)                         | 1..*          |
| contactinformatie         | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint)                     | 1..1          |
| geografischeDekking       | [dct:spatial](http://purl.org/dc/terms/spatial)                                 | 0..*          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)                           | 1..1          |
| periodiciteit             | [dct:accrualPeriodicity](http://purl.org/dc/terms/accrualPeriodicity)           | 0..1          |
| publicatieDatum           | [dct:issued](http://purl.org/dc/terms/issued)                                   | 0..1          |
| temporeleDekking          | [dct:temporal](http://purl.org/dc/terms/temporal)                               | 0..*          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                                     | 1..*          |
| uitgever                  | [dct:publisher](http://purl.org/dc/terms/publisher)                             | 1..1          |
| wijzigingsdatum           | [dct:modified](http://purl.org/dc/terms/modified)                               | 0..1          |

## [DateTime](http://www.w3.org/2001/XMLSchema#dateTime)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Distributie](http://www.w3.org/ns/dcat#Distribution)

| Eigenschap                | URI                                                            | Kardinaliteit |
| ------------------------- | -------------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)        | 0..n          |
| conform                   | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)          | 0..n          |
| downloadURL               | [dcat:downloadURL](http://www.w3.org/ns/dcat#downloadURL)      | 0..1          |
| formaat                   | [dct:format](http://purl.org/dc/terms/format)                  | 0..1          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)          | 1..1          |
| licentie                  | [dct:license](http://purl.org/dc/terms/license)                | 0..1          |
| rechten                   | [dct:rights](http://purl.org/dc/terms/rights)                  | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                    | 0..n          |
| toegangsURL               | [dcat:accessURL](http://www.w3.org/ns/dcat#accessURL)          | 1..1          |
| verdeler                  | [geodcatap:distributor](http://data.europa.eu/930/distributor) | 0..1          |
| wordtAangebodenDoor       | [dcat:accessService](http://www.w3.org/ns/dcat#accessService)  | 0..n          |

## [Frequentie](http://purl.org/dc/terms/Frequency)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [HerkomstVerklaring](http://purl.org/dc/terms/ProvenanceStatement)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Identificator](http://www.w3.org/ns/adms#Identifier)

| Eigenschap                   | URI                                                                                                         | Kardinaliteit |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| gestructureerdeIdentificator | [generiek:gestructureerdeIdentificator](http://data.vlaanderen.be/ns/generiek#gestructureerdeIdentificator) | 0..1          |
| notatie                      | [skos:notation](http://www.w3.org/2004/02/skos/core#notation)                                               | 0..1          |
| toegekendDoor                | [dct:creator](http://purl.org/dc/terms/creator)                                                             | 0..1          |
| toegekendDoor(String)        | [adms:schemaAgency](http://www.w3.org/ns/adms#schemaAgency)                                                 | 0..1          |
| toegekendOp                  | [dct:issued](http://purl.org/dc/terms/issued)                                                               | 0..1          |

## [JuridischeBepaling](http://purl.org/dc/terms/RightsStatement)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [LicentieDocument](http://purl.org/dc/terms/LicenseDocument)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Literal](http://www.w3.org/2000/01/rdf-schema#Literal)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [LiteralVoorTijdsinformatie](http://www.w3.org/2000/01/rdf-schema#Literal)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Plaats](http://purl.org/dc/terms/Location)

| Eigenschap  | URI                                                      | Kardinaliteit |
| ----------- | -------------------------------------------------------- | ------------- |
| boundingBox | [dcat:bbox](http://www.w3.org/ns/dcat#bbox)              | 0..n          |
| centroïde   | [dcat:centroid](http://www.w3.org/ns/dcat#centroid)      | 0..n          |
| geometrie   | [locn:geometry](http://www.w3.org/ns/locn#geometry)      | 0..n          |
| plaatsnaam  | [rdfs:label](http://www.w3.org/2000/01/rdf-schema#label) | 0..n          |


## [Rechtsgrond](http://data.europa.eu/eli/ontology#LegalResource)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [RelatieQualificatie](http://www.w3.org/ns/dcat#Relationship)

| Eigenschap   | URI                                                                                                                                            | Kardinaliteit |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| bronresource | [mdcat:RelatieQualificatie.catalogusResource.source](https://data.vlaanderen.be/ns/metadata-dcat#RelatieQualificatie.catalogusResource.source) | 1..1          |
| rol          | [dcat:hadRole](http://www.w3.org/ns/dcat#hadRole)                                                                                              | 1..1          |

## [Standaard](http://purl.org/dc/terms/Standard)

| Eigenschap      | URI                                                             | Kardinaliteit |
| --------------- | --------------------------------------------------------------- | ------------- |
| beschrijving    | [dct:description](http://purl.org/dc/terms/description)         | 0..n          |
| publicatiedatum | [dct:issued](http://purl.org/dc/terms/issued)                   | 0..1          |
| specificatieURL | [rdfs:seeAlso](http://www.w3.org/2000/01/rdf-schema#seeAlso)    | 0..1          |
| titel           | [dct:title](http://purl.org/dc/terms/title)                     | 0..n          |
| type            | [dct:type](http://purl.org/dc/terms/type)                       | 0..n          |
| versie          | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)    | 0..1          |
| voorkeurslabel  | [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel) | 0..1          |

## [String](http://www.w3.org/2001/XMLSchema#string)

| Eigenschap | URI | Kardinaliteit |
| ---------- | --- | ------------- |

## [Tijdsperiode](http://purl.org/dc/terms/PeriodOfTime)

| Eigenschap | URI                                                           | Kardinaliteit |
| ---------- | ------------------------------------------------------------- | ------------- |
| eindDatum  | [dcat:endDate](http://www.w3.org/ns/dcat#endDate)             | 0..1          |
| heeftEinde | [time:hasEnd](http://www.w3.org/2006/time#hasEnd)             | 0..1          |
| heeftStart | [time:hasBeginning](http://www.w3.org/2006/time#hasBeginning) | 0..1          |
| startDatum | [dcat:startDate](http://www.w3.org/ns/dcat#startDate)         | 0..1          |

## [Voorbeeldweergave](http://www.w3.org/ns/dcat#Distribution)

| Eigenschap   | URI                                                       | Kardinaliteit |
| ------------ | --------------------------------------------------------- | ------------- |
| beschrijving | [dct:description](http://purl.org/dc/terms/description)   | 0..n          |
| downloadURL  | [dcat:downloadURL](http://www.w3.org/ns/dcat#downloadURL) | 1..1          |
| mediatype    | [dcat:mediatype](http://www.w3.org/ns/dcat#mediatype)     | 0..1          |
| titel        | [dct:title](http://purl.org/dc/terms/title)               | 0..n          |