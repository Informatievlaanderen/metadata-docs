---
title: Workflow
icon: lucide/workflow
---

# Workflow

Een record krijgt na aanmaak een _workflow status_. Deze kan wijzigen doorheen de tijd, met als uiteindelijk doel _gepubliceerd_ te raken zodat het record zichtbaar wordt voor het publiek. Afhankelijk van de rol die je hebt binnen de applicatie (editor, reviewer, admin) kan je bepaalde aanpassingen aan de status doen. 

Dit werd origineel op [sharepoint](https://vlaamseoverheid.sharepoint.com/:x:/r/sites/aiv/Infocat/_layouts/15/Doc.aspx?sourcedoc=%7B180BC3B1-26C4-4280-9247-CA331DC812DD%7D&file=Flows%2Beditor%2Bhoofdeditor%2Ben%2BBeheerder_asis-tobe.xlsx&action=default&mobileredirect=true&DefaultItemOpen=1) beschreven.

## Flow

```mermaid
flowchart TD
    approved(Goedgekeurd en gepubliceerd)
    approved_for_published(Klaar voor publicatie)
    draft(In ontwerp)
    rejected(Afgekeurd voor publicatie)
    rejected_for_removed(Afgekeurd voor verwijdering)
    rejected_for_retired(Afgekeurd voor depublicatie)
    removed(Verwijderd)
    retired(Gedepubliceerd)
    submitted(Ingediend voor publicatie)
    submitted_for_removed(Ingediend voor verwijdering)
    submitted_for_retired(Ingediend voor depublicatie)

    draft r2@--> approved 
    draft e3@--> removed 
    draft e4@--> submitted 
    approved r11@--> retired 
    approved e1@--> submitted_for_removed 
    approved e2@--> submitted_for_retired 
    approved_for_published r6@--> approved 
    approved_for_published r7@--> rejected 
    approved_for_published r8@--> removed 
    approved_for_published r9@--> submitted 
    rejected e13@--> removed 
    rejected e5@--> submitted 
    retired e6@--> submitted_for_removed 
    retired r14@--> approved
    submitted r5@--> approved 
    submitted r4@--> approved_for_published 
    submitted r3@--> rejected 
    submitted e7@--> removed 
    approved r10@--> removed 
    retired r15@--> removed
    submitted_for_removed r17@--> approved 
    submitted_for_removed e8@--> rejected_for_removed 
    submitted_for_removed r18@--> removed 
    submitted_for_removed r19@--> retired 
    submitted_for_retired r12@--> removed 
    submitted_for_retired r13@--> retired 
    submitted_for_retired e9@--> rejected_for_retired 

    rejected_for_retired -.-> approved
    rejected_for_removed -.-> retired
    rejected_for_removed -.-> approved

    classDef editor stroke:#0f0;
    class e1 editor
    class e2 editor
    class e3 editor
    class e4 editor
    class e5 editor
    class e6 editor
    class e7 editor
    class e8 editor
    class e9 editor
    class e10 editor
    class e11 editor
    class e12 editor
    class e13 editor

    classDef reviewer stroke:#f00;
    class r1 reviewer
    class r2 reviewer
    class r3 reviewer
    class r4 reviewer
    class r5 reviewer
    class r6 reviewer
    class r7 reviewer
    class r8 reviewer
    class r9 reviewer
    class r10 reviewer
    class r11 reviewer
    class r12 reviewer
    class r13 reviewer
    class r14 reviewer
    class r15 reviewer
    class r16 reviewer
    class r17 reviewer
    class r18 reviewer
    class r19 reviewer
    class r20 reviewer
    class r21 reviewer

    classDef draft stroke-dasharray: 5 5;
    class draft,submitted,rejected,approved_for_published draft
```



## Table

| Van                    | Naar                   | Enkel reviewer |
| ---------------------- | ---------------------- | -------------- |
| approved               | removed                | x              |
| approved               | retired                | x              |
| approved               | submitted_for_removed  |                |
| approved               | submitted_for_retired  |                |
| approved_for_published | approved               | x              |
| approved_for_published | rejected               | x              |
| approved_for_published | removed                | x              |
| approved_for_published | submitted              | x              |
| draft                  | approved               | x              |
| draft                  | approved_for_published | x              |
| draft                  | removed                |                |
| draft                  | submitted              |                |
| rejected               | removed                |                |
| rejected               | submitted              |                |
| retired                | submitted_for_removed  |                |
| retired                | approved               | x              |
| retired                | removed                | x              |
| submitted              | approved               | x              |
| submitted              | approved_for_published | x              |
| submitted              | rejected               | x              |
| submitted              | removed                |                |
| submitted_for_removed  | approved               | x              |
| submitted_for_removed  | rejected_for_removed   |                |
| submitted_for_removed  | removed                | x              |
| submitted_for_removed  | retired                | x              |
| submitted_for_retired  | removed                | x              |
| submitted_for_retired  | retired                | x              |
| submitted_for_retired  | rejected_for_retired   |                |


