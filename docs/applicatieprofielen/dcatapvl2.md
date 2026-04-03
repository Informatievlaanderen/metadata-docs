---
icon: lucide/calendar-off
---

# DCAT-AP Vlaanderen (DCAT2)

Dit is het `DCAT-AP Vlaanderen` applicatieprofiel, gebaseerd op het vocabularium `DCAT2`. Dit profiel implementeert het moederprofiel [Metadata DCAT](metadatadcat2) en versoepelt het om ook **open** metadata records te beschrijven.

!!! warning

    Een nieuwe versie is in opmaak, op basis van `DCAT3`. Deze kan je vinden op [de volgende pagina](dcatapvl3.md).


# Applicatieprofiel

| Eigenschap | Waarde                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------- |
| Titel      | DCAT-AP Vlaanderen                                                                        |
| URL        | <https://data.vlaanderen.be/doc/applicatieprofiel/DCAT-AP-VL/erkendestandaard/2022-04-21> |
| Versie     | 2022-04-21                                                                                |
| Licentie   | https://data.vlaanderen.be/id/licentie/modellicentie-gratis-hergebruik/v1.0               |

# Entiteiten

## [Agent](http://purl.org/dc/terms/Agent)

| Eigenschap | URI                                         | Type       | Type URI                                                                | Kardinaliteit |
| ---------- | ------------------------------------------- | ---------- | ----------------------------------------------------------------------- | ------------- |
| naam       | [foaf:name](http://xmlns.com/foaf/0.1/name) | TaalString | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |

## [Catalogus](http://www.w3.org/ns/dcat#Catalog)

| Eigenschap                | URI                                                         | Type              | Type URI                                                                | Kardinaliteit |
| ------------------------- | ----------------------------------------------------------- | ----------------- | ----------------------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)     | Identificator     | [adms:Identifier](http://www.w3.org/ns/adms#Identifier)                 | 0..n          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)     | TaalString        | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| contactinformatie         | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint) | Contactinfo       | [vcard:Kind](http://www.w3.org/2006/vcard/ns#Kind)                      | 1..1          |
| heeftDataService          | [dcat:service](http://www.w3.org/ns/dcat#service)           | Dataservice       | [dcat:DataService](http://www.w3.org/ns/dcat#DataService)               | 0..n          |
| heeftDataset              | [dcat:dataset](http://www.w3.org/ns/dcat#dataset)           | Dataset           | [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset)                       | 0..n          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)       | Literal           | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 1..1          |
| licentie                  | [dct:license](http://purl.org/dc/terms/license)             | Licentie Document | [dct:LicenseDocument](http://purl.org/dc/terms/LicenseDocument)         | 1..1          |
| record                    | [dcat:record](http://www.w3.org/ns/dcat#record)             | Catalogus Record  | [dcat:CatalogRecord](http://www.w3.org/ns/dcat#CatalogRecord)           | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                 | TaalString        | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| uitgever                  | [dct:publisher](http://purl.org/dc/terms/publisher)         | Agent             | [dct:Agent](http://purl.org/dc/terms/Agent)                             | 1..1          |

## [CatalogusRecord](http://www.w3.org/ns/dcat#CatalogRecord)

| Eigenschap                       | URI                                                                                                                                                              | Type               | Type URI                                                                | Kardinaliteit |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------------------- | ------------- |
| aanmaakdatum                     | [dct:issued](http://purl.org/dc/terms/issued)                                                                                                                    | DateTime           | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| alternatieveIdentificator        | [adms:identifier](http://www.w3.org/ns/adms#identifier)                                                                                                          | Identificator      | [adms:Identifier](http://www.w3.org/ns/adms#Identifier)                 | 0..n          |
| bronMetadatarecord               | [dct:source](http://purl.org/dc/terms/source)                                                                                                                    | URI                | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| bronMetadataRecordLandingspagina | [http://data.vlaanderen.be/ns/metadata-dcat#bron metadata record landingspagina](http://data.vlaanderen.be/ns/metadata-dcat#bron metadata record landingspagina) | URI                | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| conform                          | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                                                                                                            | Standaard          | [dct:Standard](http://purl.org/dc/terms/Standard)                       | 0..n          |
| hoofdonderwerp                   | [foaf:primaryTopic](http://xmlns.com/foaf/0.1/primaryTopic)                                                                                                      | Catalogus Resource | [dcat:Resource](http://www.w3.org/ns/dcat#Resource)                     | 1..1          |
| identificator                    | [dct:identifier](http://purl.org/dc/terms/identifier)                                                                                                            | Literal            | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 1..1          |
| titel                            | [dct:title](http://purl.org/dc/terms/title)                                                                                                                      | TaalString         | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| wijzigingsdatum                  | [dct:modified](http://purl.org/dc/terms/modified)                                                                                                                | DateTime           | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 1..1          |

## [CatalogusResource](http://www.w3.org/ns/dcat#Resource)

| Eigenschap | URI                                                 | Type               | Type URI                                            | Kardinaliteit |
| ---------- | --------------------------------------------------- | ------------------ | --------------------------------------------------- | ------------- |
| relatie    | [dct:relation](http://purl.org/dc/terms/relation)   | Catalogus Resource | [dcat:Resource](http://www.w3.org/ns/dcat#Resource) | 0..n          |
| uitgever   | [dct:publisher](http://purl.org/dc/terms/publisher) | Agent              | [dct:Agent](http://purl.org/dc/terms/Agent)         | 1..1          |

## [Concept](http://www.w3.org/2004/02/skos/core#Concept)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Contactinfo](http://www.w3.org/2006/vcard/ns#Kind)

| Eigenschap    | URI                                                        | Type | Type URI                                                       | Kardinaliteit |
| ------------- | ---------------------------------------------------------- | ---- | -------------------------------------------------------------- | ------------- |
| contactpagina | [foaf:page](http://xmlns.com/foaf/0.1/page)                | URI  | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource) | 0..1          |
| e-Mail        | [vcard:hasEmail](http://www.w3.org/2006/vcard/ns#hasEmail) | URI  | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource) | 0..1          |

## [Contactpunt](http://schema.org/ContactPoint)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Dataservice](http://www.w3.org/ns/dcat#DataService)

| Eigenschap                           | URI                                                                                                                                                                | Type                | Type URI                                                                | Kardinaliteit |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------- | ----------------------------------------------------------------------- | ------------- |
| aanmaakdatum                         | [dct:issued](http://purl.org/dc/terms/issued)                                                                                                                      | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| alternatieveIdentificator            | [adms:identifier](http://www.w3.org/ns/adms#identifier)                                                                                                            | Identificator       | [adms:Identifier](http://www.w3.org/ns/adms#Identifier)                 | 0..n          |
| beschrijving                         | [dct:description](http://purl.org/dc/terms/description)                                                                                                            | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| biedtInformatieAanOver               | [dcat:servesdataset](http://www.w3.org/ns/dcat#servesdataset)                                                                                                      | Dataset             | [dcat:Dataset](http://www.w3.org/ns/dcat#Dataset)                       | 0..n          |
| conform                              | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                                                                                                              | Standaard           | [dct:Standard](http://purl.org/dc/terms/Standard)                       | 0..n          |
| contactinformatie                    | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint)                                                                                                        | Contactinfo         | [vcard:Kind](http://www.w3.org/2006/vcard/ns#Kind)                      | 1..1          |
| creatiedatum                         | [dct:created](http://purl.org/dc/terms/created)                                                                                                                    | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| endpointbeschrijving                 | [dcat:endpointDescription](http://www.w3.org/ns/dcat#endpointDescription)                                                                                          | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 1..1          |
| endpointURL                          | [dcat:endpointURL](http://www.w3.org/ns/dcat#endpointURL)                                                                                                          | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 1..1          |
| identificator                        | [dct:identifier](http://purl.org/dc/terms/identifier)                                                                                                              | Literal             | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 1..1          |
| landingspagina                       | [dcat:landingPage](http://www.w3.org/ns/dcat#landingPage)                                                                                                          | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..n          |
| landingspaginaVoorAuthenticatie      | [http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorAuthenticatie](http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorAuthenticatie)           | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| landingspaginaVoorGebruiksinformatie | [http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorGebruiksinformatie](http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorGebruiksinformatie) | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| landingspaginaVoorStatusinformatie   | [http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorStatusinformatie](http://data.vlaanderen.be/ns/metadata-dcat#landingspaginaVoorStatusinformatie)     | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| levensfase                           | [http://data.vlaanderen.be/ns/metadata-dcat#levensfase](http://data.vlaanderen.be/ns/metadata-dcat#levensfase)                                                     | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..1          |
| licentie                             | [dct:license](http://purl.org/dc/terms/license)                                                                                                                    | Licentie Document   | [dct:LicenseDocument](http://purl.org/dc/terms/LicenseDocument)         | 1..1          |
| ontwikkelingstoestand                | [http://data.vlaanderen.be/ns/metadata-dcat#ontwikkelingstoestand](http://data.vlaanderen.be/ns/metadata-dcat#ontwikkelingstoestand)                               | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..1          |
| rechten                              | [dct:rights](http://purl.org/dc/terms/rights)                                                                                                                      | Juridische bepaling | [dct:RightsStatement](http://purl.org/dc/terms/RightsStatement)         | 0..n          |
| statuut                              | [http://data.vlaanderen.be/ns/metadata-dcat#statuut](http://data.vlaanderen.be/ns/metadata-dcat#statuut)                                                           | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 1..n          |
| thema                                | [dcat:theme](http://www.w3.org/ns/dcat#theme)                                                                                                                      | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..n          |
| titel                                | [dct:title](http://purl.org/dc/terms/title)                                                                                                                        | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| toegankelijkheid                     | [dct:accessRights](http://purl.org/dc/terms/accessRights)                                                                                                          | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 1..1          |
| trefwoord                            | [dcat:keyword](http://www.w3.org/ns/dcat#keyword)                                                                                                                  | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 0..n          |
| versie                               | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)                                                                                                       | String              | [xsd:string](http://www.w3.org/2001/XMLSchema#string)                   | 0..1          |
| wijzigingsdatum                      | [dct:modified](http://purl.org/dc/terms/modified)                                                                                                                  | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 1..1          |

## [Dataset](http://www.w3.org/ns/dcat#Dataset)

| Eigenschap                | URI                                                                                                      | Type                | Type URI                                                                | Kardinaliteit |
| ------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------- | ------------- |
| aanmaakdatum              | [dct:issued](http://purl.org/dc/terms/issued)                                                            | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)                                                  | Identificator       | [adms:Identifier](http://www.w3.org/ns/adms#Identifier)                 | 0..n          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)                                                  | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| conform                   | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)                                                    | Standaard           | [dct:Standard](http://purl.org/dc/terms/Standard)                       | 0..n          |
| contactinformatie         | [dcat:contactPoint](http://www.w3.org/ns/dcat#contactPoint)                                              | Contactinfo         | [vcard:Kind](http://www.w3.org/2006/vcard/ns#Kind)                      | 1..1          |
| creatiedatum              | [dct:created](http://purl.org/dc/terms/created)                                                          | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| distributie               | [dcat:distribution](http://www.w3.org/ns/dcat#distribution)                                              | Distributie         | [dcat:Distribution](http://www.w3.org/ns/dcat#Distribution)             | 0..n          |
| eigenaar                  | [dct:rightsHolder](http://purl.org/dc/terms/rightsHolder)                                                | Agent               | [dct:Agent](http://purl.org/dc/terms/Agent)                             | 0..n          |
| geografischeDekking       | [dct:spatial](http://purl.org/dc/terms/spatial)                                                          | Plaats              | [dct:Location](http://purl.org/dc/terms/Location)                       | 0..n          |
| herkomst                  | [dct:provenance](http://purl.org/dc/terms/provenance)                                                    | Herkomst Verklaring | [dct:ProvenanceStatement](http://purl.org/dc/terms/ProvenanceStatement) | 0..n          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)                                                    | Literal             | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 1..1          |
| landingspagina            | [dcat:landingPage](http://www.w3.org/ns/dcat#landingPage)                                                | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..n          |
| statuut                   | [http://data.vlaanderen.be/ns/metadata-dcat#statuut](http://data.vlaanderen.be/ns/metadata-dcat#statuut) | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 1..n          |
| thema                     | [dcat:theme](http://www.w3.org/ns/dcat#theme)                                                            | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                                                              | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| toegankelijkheid          | [dct:accessRights](http://purl.org/dc/terms/accessRights)                                                | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 1..1          |
| trefwoord                 | [dcat:keyword](http://www.w3.org/ns/dcat#keyword)                                                        | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 0..n          |
| versie                    | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)                                             | String              | [xsd:string](http://www.w3.org/2001/XMLSchema#string)                   | 0..1          |
| voorbeeldweergave         | [adms:sample](http://www.w3.org/ns/adms#sample)                                                          | Distributie         | [dcat:Distribution](http://www.w3.org/ns/dcat#Distribution)             | 0..n          |
| wijzigingsdatum           | [dct:modified](http://purl.org/dc/terms/modified)                                                        | DateTime            | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 1..1          |

## [DateTime](http://www.w3.org/2001/XMLSchema#dateTime)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Distributie](http://www.w3.org/ns/dcat#Distribution)

| Eigenschap                | URI                                                            | Type                | Type URI                                                                | Kardinaliteit |
| ------------------------- | -------------------------------------------------------------- | ------------------- | ----------------------------------------------------------------------- | ------------- |
| alternatieveIdentificator | [adms:identifier](http://www.w3.org/ns/adms#identifier)        | Identificator       | [adms:Identifier](http://www.w3.org/ns/adms#Identifier)                 | 0..n          |
| beschrijving              | [dct:description](http://purl.org/dc/terms/description)        | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| conform                   | [dct:conformsTo](http://purl.org/dc/terms/conformsTo)          | Standaard           | [dct:Standard](http://purl.org/dc/terms/Standard)                       | 0..n          |
| downloadURL               | [dcat:downloadURL](http://www.w3.org/ns/dcat#downloadURL)      | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 1..1          |
| formaat                   | [dct:format](http://purl.org/dc/terms/format)                  | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..1          |
| identificator             | [dct:identifier](http://purl.org/dc/terms/identifier)          | Literal             | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 1..1          |
| licentie                  | [dct:license](http://purl.org/dc/terms/license)                | Licentie Document   | [dct:LicenseDocument](http://purl.org/dc/terms/LicenseDocument)         | 1..1          |
| mediatype                 | [dcat:mediatype](http://www.w3.org/ns/dcat#mediatype)          | Concept             | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..1          |
| rechten                   | [dct:rights](http://purl.org/dc/terms/rights)                  | Juridische bepaling | [dct:RightsStatement](http://purl.org/dc/terms/RightsStatement)         | 0..n          |
| titel                     | [dct:title](http://purl.org/dc/terms/title)                    | TaalString          | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| toegangsURL               | [dcat:accessURL](http://www.w3.org/ns/dcat#accessURL)          | URI                 | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 1..1          |
| verdeler                  | [geodcatap:distributor](http://data.europa.eu/930/distributor) | Agent               | [dct:Agent](http://purl.org/dc/terms/Agent)                             | 0..1          |
| wordtAangebodenDoor       | [dcat:accessService](http://www.w3.org/ns/dcat#accessService)  | Dataservice         | [dcat:DataService](http://www.w3.org/ns/dcat#DataService)               | 0..n          |

## [HerkomstVerklaring](http://purl.org/dc/terms/ProvenanceStatement)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Identificator](http://www.w3.org/ns/adms#Identifier)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [JuridischeBepaling](http://purl.org/dc/terms/RightsStatement)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [LicentieDocument](http://purl.org/dc/terms/LicenseDocument)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Literal](http://www.w3.org/2000/01/rdf-schema#Literal)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [Plaats](http://purl.org/dc/terms/Location)

| Eigenschap  | URI                                                      | Type       | Type URI                                                                | Kardinaliteit |
| ----------- | -------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- | ------------- |
| boundingBox | [dcat:bbox](http://www.w3.org/ns/dcat#bbox)              | Literal    | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 0..n          |
| centroïDe   | [dcat:centroid](http://www.w3.org/ns/dcat#centroid)      | Literal    | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 0..n          |
| geometrie   | [locn:geometry](http://www.w3.org/ns/locn#geometry)      | Literal    | [rdfs:Literal](http://www.w3.org/2000/01/rdf-schema#Literal)            | 0..n          |
| plaatsnaam  | [rdfs:label](http://www.w3.org/2000/01/rdf-schema#label) | TaalString | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 0..n          |

## [RelatieQualificatie](http://www.w3.org/ns/dcat#Relationship)

| Eigenschap                | URI                                                                                                                                                                                | Type               | Type URI                                                    | Kardinaliteit |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ----------------------------------------------------------- | ------------- |
| catalogusResource(Source) | [http://data.vlaanderen.be/ns/metadata-dcat#RelatieQualificatie.catalogusResource.source](http://data.vlaanderen.be/ns/metadata-dcat#RelatieQualificatie.catalogusResource.source) | Catalogus Resource | [dcat:Resource](http://www.w3.org/ns/dcat#Resource)         | 1..1          |
| catalogusResource(Target) | [http://data.vlaanderen.be/ns/metadata-dcat#RelatieQualificatie.catalogusResource.target](http://data.vlaanderen.be/ns/metadata-dcat#RelatieQualificatie.catalogusResource.target) | Catalogus Resource | [dcat:Resource](http://www.w3.org/ns/dcat#Resource)         | 1..1          |
| rol                       | [dcat:hadRole](http://www.w3.org/ns/dcat#hadRole)                                                                                                                                  | Concept            | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept) | 1..1          |

## [Standaard](http://purl.org/dc/terms/Standard)

| Eigenschap      | URI                                                             | Type       | Type URI                                                                | Kardinaliteit |
| --------------- | --------------------------------------------------------------- | ---------- | ----------------------------------------------------------------------- | ------------- |
| aanmaakdatum    | [dct:issued](http://purl.org/dc/terms/issued)                   | DateTime   | [xsd:dateTime](http://www.w3.org/2001/XMLSchema#dateTime)               | 0..1          |
| beschrijving    | [dct:description](http://purl.org/dc/terms/description)         | TaalString | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| specificatieURL | [rdfs:seeAlso](http://www.w3.org/2000/01/rdf-schema#seeAlso)    | URI        | [rdfs:Resource](http://www.w3.org/2000/01/rdf-schema#Resource)          | 0..1          |
| titel           | [dct:title](http://purl.org/dc/terms/title)                     | TaalString | [rdf:langString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString) | 1..n          |
| type            | [dct:type](http://purl.org/dc/terms/type)                       | Concept    | [skos:Concept](http://www.w3.org/2004/02/skos/core#Concept)             | 0..n          |
| versie          | [owl:versionInfo](http://www.w3.org/2002/07/owl#versionInfo)    | String     | [xsd:string](http://www.w3.org/2001/XMLSchema#string)                   | 0..1          |
| voorkeurslabel  | [skos:prefLabel](http://www.w3.org/2004/02/skos/core#prefLabel) | String     | [xsd:string](http://www.w3.org/2001/XMLSchema#string)                   | 0..1          |

## [String](http://www.w3.org/2001/XMLSchema#string)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [TaalString](http://www.w3.org/1999/02/22-rdf-syntax-ns#langString)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |

## [URI](http://www.w3.org/2000/01/rdf-schema#Resource)

| Eigenschap | URI | Type | Type URI | Kardinaliteit |
| ---------- | --- | ---- | -------- | ------------- |