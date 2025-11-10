---
title: "The European Commission's Cloud Sovereignty Framework"
authors:
    - name: 'Kurt Garloff'
    - name: 'Felix Kronlage-Dammers'
postType: announcements
language: de
date: '2025-10-29'
slug: euSovCloud
template: 'post'
---

## Rahmenwerke für digitale Souveränität in Cloud-Infrastrukturen

### Digitale Souveränität des Sovereign Cloud Stacks

Von Anfang an stand bei der Sovereign Cloud Stack (SCS)-Initiative der Anspruch im Vordergrund, digitale Souveränität weiter zu fassen als die reine Datenkontrolle. Inspiriert von der [Definition des Digitalgipfels 2018](https://www.de.digital/DIGITAL/Redaktion/DE/Digital-Gipfel/Download/2018/p2-digitale-souveraenitaet-und-kuenstliche-intelligenz.pdf) und den vielfältigen Diskussionen über die Bedürfnisse von Infrastrukturnutzenden definierte das SCS-Projekt vier zentrale Bereiche digitaler Souveränität, in denen die Anforderungen systematisch zusammengefasst wurden:

1. Datensouveränität (SCS-1):  
Die Fähigkeit, Daten sicher zu speichern und zu verarbeiten sowie die Kontrolle darüber zu behalten, mit wem sie geteilt werden. Sicherheit, Kontrollmechanismen und rechtliche Schutzmaßnahmen sind Grundvoraussetzungen, um dies zu gewährleisten.

2. Wechselfähigkeit des Anbieters (SCS-2):  
Die Vermeidung von Lock-in-Effekten durch den Einsatz von Diensten oder APIs, die nur bei einem (oder sehr wenigen) Anbietern verfügbar sind, was den Wechsel oder die Föderation von Infrastrukturanbietern erschwert.  

3. Technologische Souveränität (SCS-3):  
Die Fähigkeit, Cloud-Technologien frei zu nutzen, zu studieren, anzupassen und weiterzuentwickeln. Dies kommt den Anbietern zugute und somit indirekt auch den Nutzenden – und direkt jenen, die ihre eigene Infrastruktur betreiben, wenn sie dies als vorteilhaft erachten.

4. Betriebliche Kompetenz (SCS-4):  
Dokumentation und Transparenz im Kontext betrieblicher Werkzeuge und Prozesse, zwecks Aufbau der Fähigkeiten zum zuverlässigen Betrieb einer Infrastrukturplattform. Hierdurch  werden auch kleinere Akteure befähigt, erfolgreich Cloud-Plattformen für ihre eigenen Bedürfnisse oder für externe Kunden zu betreiben.  

Diese Definition wurde 2022 im [Cloud Report](/pdfs/CloudReport_2022_01_DigiSov.pdf) und in der Zeitschrift [„Datenschutz und Datensicherheit“](https://rdcu.be/cWdBJ) veröffentlicht und war entscheidend für die strategischen Diskussionen im Sovereign Cloud Stack-Projekt.
Auch wenn sie von keiner Standardisierungsorganisation offiziell übernommen wurde, hat sie zweifellos andere inspiriert, über Datensouveränität hinauszudenken – beispielsweise das [GovStack-Projekt](https://govstack.global/). Die Definition wurde in vielen Diskussionen, sowohl auf der Bühne als auch abseits davon, genutzt und hat sich dabei als äußerst wirkungsvoll und zukunftsfähig erwiesen.
Die aktuelle geopolitische Lage motiviert Organisationen zunehmend dazu, ihre Resilienz und Abhängigkeiten sorgfältig zu prüfen. Man kann beobachten, wie manche dieser Diskussionen aus dem Ruder laufen – etwa durch Versuche, Verwirrung zu stiften, indem behauptet wird, digitale Souveränität sei nicht eindeutig definiert, oder durch Anbieter, die versuchen, ihre bestehenden Angebote durch minimale Schutzmaßnahmen gegen ausländischen Datenzugriff als „souverän“ darzustellen („Sovereign Washing“).
Organisationen, die an echter IT-Resilienz interessiert sind, sollten sich nicht von solchen Marketingstrategien täuschen lassen.

### EU Kommision

Vor wenigen Tagen hat die Europäische Kommission ihr [Cloud Sovereignty Framework](https://commission.europa.eu/document/09579818-64a6-4dd5-9577-446ab6219113_en) veröffentlicht, der einen weiten Blick auf Souveränität wirft. Die [EuroStack-Initiative](https://eurostack.eu/) hat dazu einen [Vergleich](https://euro-stack.com/blog/2025/10/cloud-sovereignty-framework-comparison) mit ihrer eigenen Definition angestellt.
Das sind insgesamt gute Nachrichten – auch wenn die Vielzahl unterschiedlicher Perspektiven auf den ersten Blick verwirrend erscheinen mag, ergänzen sie sich gut. Im nächsten Abschnitt wird dies näher erläutert.

## Vergleich der Souveränitätskategorien der EU-Kommission, des SCS und von EuroStack

Die folgende Tabelle stellt die Souveränitätsziele der Europäischen Kommission den Souveränitätskategorien des SCS gegenüber.

| Souveränitätsziele EU-Kommission | Beschreibung | SCS |
|----------------------------------|--------------|-----|
| SOV-1: Strategische Souveränität (15 %) | EU-Behörde mit Schutz vor Kontrollwechsel, Finanzierung aus EU-Mitteln, Investitionen und Schaffung von Arbeitsplätzen in der EU, Beteiligung an EU-Initiativen sowie Widerstandsfähigkeit gegenüber Anfragen zur Dienstunterbrechung | SCS ermöglicht lokalen Anbietern den Betrieb, verfügt jedoch über keine entsprechende Souveränitätskategorie. |
| SOV-2: Rechtliche und juristische Souveränität (10 %) | Anwendbares Recht, Schutz vor der Anwendung von Nicht-EU-Recht, internationale Regelwerke, Standort des geistigen Eigentums | Dies ist Teil der SCS-Definition der Datensouveränität (SCS-1), die den Datenzugriff auf Grundlage von Rechtsordnungen ausschließt, die von der EU nicht anerkannt werden. |
| SOV-3: Daten- und KI-Souveränität (10 %) | Kontrolle über Daten und Verschlüsselungsschlüssel liegt beim Kunden (nicht beim Anbieter); Transparenz beim Datenzugriff und Möglichkeit zur endgültigen Löschung; Datenspeicherung und -verarbeitung ausschließlich innerhalb der EU, ohne Rückgriff auf außereuropäische Systeme; KI-Modelle unter EU-Kontrolle, basierend auf europäischen Technologiestacks | Lokale Anbieter sollten über geeignete Prozesse verfügen, um einen sicheren Betrieb zu gewährleisten. Die Software aus dem SCS-Ökosystem unterstützt dies beispielsweise durch Funktionen zur Datenverschlüsselung und die Integration von Hardware Security Modules (HSM). Die Datensouveränität (SCS-1) bildet dabei die Grundlage, ohne die die übrigen Kategorien in der SCS-Taxonomie nur eingeschränkt wirksam sind. |
| SOV-4: Betriebliche Souveränität (20 %) | Vermeidung von Anbieterabhängigkeit durch Unterstützung der Migration zu anderen EU-Anbietern; betriebliche Kompetenzen von EU-Personal; Talentpool; operativer Support durch Zulieferer, die dem EU-Recht unterliegen; vollständige Verfügbarkeit technischer Dokumentation, Quellcode und betriebliches Know-how zur langfristigen Autonomie; Standort kritischer Zulieferer. | Die Operational Skills (SCS-4) des SCS verfolgen sehr ähnliche Ziele – gehen jedoch noch einen Schritt weiter, indem sie Transparenz nicht nur für Anbietende, sondern auch für Nutzende mitdenken. Die Vermeidung von Anbieterabhängigkeiten wird in der SCS-Taxonomie durch die Kategorie Provider Switching Capability (SCS-2) adressiert, die die Bereitstellung standardisierter APIs und Systemverhalten voraussetzt. |
| SOV-5: Souveränität der Lieferkette (20 %) | Ort der Hardwaremontage, Herkunft der Firmware, Standort und Rechtsrahmen der Softwareentwicklung, Architektur, Verpackung, Distribution und Governance; Abhängigkeit von Nicht-EU-Anbietern oder proprietären Technologien; Transparenz in der Lieferkette mit Prüf- und Audit-Rechten. | SCS befürwortet ausdrücklich die Entwicklung und Nutzung von offener Hardware, hat jedoch nicht das Ziel, in die Hardwareproduktion selbst einzugreifen. Mit seiner Kategorie der Technologischen Souveränität (SCS-3) verwendet SCS in seinen Referenzimplementierungen ausschließlich offen entwickelten Open-Source-Code. Dieses offene Entwicklungsmodell und die entsprechenden Lizenzen gewährleisten eine breite Befähigung der Nutzenden. Dabei betrachtet SCS den geografischen Standort von Mitwirkenden oder Governance-Strukturen nicht als relevant, sofern es sich um offen entwickelten Open-Source-Code handelt. |
| SOV-6: Technologische Souveränität (15 %) | Möglichkeit der Integration mit anderer Technologie über gut dokumentierte, nicht-proprietäre APIs oder Protokolle, idealerweise auf Basis weit verbreiteter Standards; Open-Source-Verfügbarkeit der Software; architektonische Dokumentation; Unabhängigkeit bei HPC-Fähigkeiten (High Performance Computing). | Standardisierte und weit verbreitete Schnittstellen und Protokolle sind ein zentraler Bestandteil, um die Anforderungen der Provider Switching Capability (SCS-2) zu erfüllen. Die Nutzung von Open-Source-Software wiederum ist entscheidend für die Umsetzung der Technologischen Souveränität (SCS-3) im SCS-Modell. Dabei legt SCS großen Wert darauf, dass Open-Source-Software offen entwickelt wird, um eine Kontrolle durch einzelne Anbieter zu vermeiden – ein Risiko, das in der Branche bereits mehrfach dazu geführt hat, dass Open-Source-Veröffentlichungen eingestellt wurden. |
| SOV-7: Sicherheits- und Compliance-Souveränität (10 %) | Zertifizierungen (z. B. ISO, ENISA), Einhaltung von GDPR, NIS, DORA usw.; Security Operations Center und Incident-Response-Teams unter EU-Rechtshoheit; Sicherheitsüberwachung, Kontrolle durch Kunden oder EU-Behörden, EU-konforme Meldung von Sicherheitsvorfällen, Patch-Management-Fähigkeiten sowie Unterstützung von EU-Sicherheitsaudits. | Einige SCS-Anbieter verfügen über ISO- und BSI-Zertifizierungen. Die Software aus dem SCS-Ökosystem unterstützt zeitnahe Sicherheitsupdates, indem CI-Systeme (Continuous Integration) eingesetzt werden, und veröffentlicht Sicherheitswarnungen zu kritischen Schwachstellen. Dies ist Teil des Datensouveränitätsansatzes (SCS-1) von SCS. |
| SOV-8: Ökologische Nachhaltigkeit (5 %) | Energieeffiziente Infrastruktur (z. B. PUE), Kreislaufwirtschaft, Erfassung von CO₂-Emissionen und Wasserverbrauch. | Dieser Bereich wird bei SCS selbst nicht abgedeckt – jedoch unterstützt SCS das Schwesterprojekt [ECO:DIGIT](https://ecodigit.de/), das sich mit dem Ressourcenverbrauch von Cloud-Infrastrukturen als Teil der Umweltauswirkungen von Softwareanwendungen befasst. |


Verglichen mit dem EuroStack-Kommentar legt SCS einen deutlich stärkeren Fokus auf Open Source, während das Prinzip „Buy European!“ eine geringere Rolle spielt.

Die Struktur des europäischen Marktes begünstigt im Vergleich zum US-Markt kleinere Anbieter; gerade auf Plattformmärkten mit ausgeprägten Netzwerkeffekten sind europäische Akteure daher im Nachteil. Dieser Nachteil lässt sich jedoch durch enge Zusammenarbeit ausgleichen – und der mit Abstand effektivste Weg dazu ist die Kooperation im Open-Source-Bereich.

Offen entwickelte Open-Source-Software verleiht ihren Nutzenden und Mitwirkenden naturgemäß ein hohes Maß an Kontrolle und Einfluss – wodurch der geografische Standort der Beitragenden oder sogar der Sitz der Trägerorganisation zu einer nachrangigen Frage wird. Anders verhält es sich bei Open-Source-Projekten, die unter der Kontrolle eines einzelnen Anbieters stehen, und selbstverständlich auch bei proprietärer Software. Dennoch würden wir uns mehr Beiträge zu Open Source von europäischer Entwicklerinnen und Entwickler wünschen – insbesondere aus großen Unternehmen, da wir hier einen deutlichen Unterschied zwischen Europa und den USA beobachten.
In Open-Source-Communities entsteht Einfluss durch aktive Beiträge; ein gutes Governance-Modell (wie es Open-Source-Stiftungen typischerweise fördern) achtet auf Meritokratie und die Anerkennung von Leistung innerhalb der Community. Das Risiko einer feindlichen Übernahme der Governance ist bei solchen Projekten entsprechend gering.

Mit zunehmender europäischer Beteiligung ist allerdings zu erwarten, dass künftig mehr Open-Source-Projekte auch formell aus Europa heraus gesteuert werden.

Bei der Analyse digitaler Souveränität im Kontext von Infrastrukturlösungen betrachtet SCS das Thema systematisch aus der Perspektive der Nutzerorganisationen:
Welche Abhängigkeiten und damit verbundenen Risiken bestehen für den Anwendenden?
Eine starke Abhängigkeit von einem einzelnen Anbieter schwächt die Resilienz, selbst wenn dieser Anbieter europäisch ist (und somit geringeren geopolitischen Risiken unterliegt).
Die Wechselmöglichkeit von Anbietern (SCS-2) sowie der starke Fokus auf Open Source (SCS-3) und Open Operations (SCS-4) sind direkte Konsequenzen dieses Denkansatzes.
Im Rahmen der EU-Kommission ist dieser Nutzerfokus nicht in gleicher Klarheit ausgearbeitet.
Zusammenfassend lässt sich sagen, dass der Souveränitätsrahmen der EU-Kommission weitgehend auf den SCS-Kategorien aufbaut und insgesamt ein sehr umfassendes Konzept darstellt.
Während SCS strategische und ökologische Aspekte nicht explizit abdeckt, legt es ein stärkeres Gewicht auf die Befähigung der Nutzerorganisationen.
Angesichts des ursprünglichen Ausgangspunkts der Debatte – nämlich der „Sovereign-Washing“-Marketingstrategien – sind dies vergleichsweise kleine Unterschiede, und der hohe Grad an inhaltlicher Übereinstimmung ist insgesamt sehr ermutigend.


## Zeitenwende moment?

In diesem Jahr wurde viel über digitale Souveränität gesprochen - mit einer sehr variierenden Qualität des Diskurses. Da bislang keine offizielle Definition aus einer anerkannten Institution vorlag, konnten interessierte Akteure den Markt bewusst verunsichern – was die Verbreitung wirklich souveräner Lösungen deutlich bremste.
Mit der Definition der EU-Kommission ändert sich das nun.

Man darf mit deutlicher Kritik dieser interessierten Kreise rechnen – etwa mit dem Argument, dass das Festhalten an all diesen Zielen die Digitalisierung, Innovation und Wettbewerbsfähigkeit in Europa ausbremse. Doch das ist ein gutes Zeichen: Es zeigt, dass die Kommission auf dem richtigen Weg ist. Oder, um es mit dem wohl fälschlich Mahatma Gandhi [zugeschriebenen Zitat](https://www.snopes.com/fact-check/first-they-ignore-you/) zu sagen:
Es zeigt, dass die Souveränitätsbewegung die Phase des Ignoriertwerdens hinter sich gelassen hat.

Das Cloud Sovereignty Framework der EU-Kommission wird allerdings nur dann Wirkung entfalten, wenn er konkret angewendet und umgesetzt wird.

Das aktuelle Vergabeverfahren der Generaldirektion DIGIT (DG DIGIT) folgt genau diesem Ansatz:
In ihrem [Vergabeverfahren über 180 Millionen Euro](https://commission.europa.eu/news-and-media/news/commission-moves-forward-cloud-sovereignty-eur-180-million-tender-2025-10-10_en) liegt der Fokus auf digitaler Souveränität, wobei Mindestanforderungen für die Erreichung der Souveränitätsziele aus dem Rahmenwerk festgelegt sind.

er Auftrag kann an bis zu vier Anbieter vergeben werden – was die Resilienz erhöht, auch wenn keine explizite Kompatibilität untereinander vorgeschrieben ist.
Das ist eine äußerst positive Entwicklung für all jene Gemeinschaften, Organisationen und Unternehmen, die in den vergangenen Jahren Zeit und Ressourcen in den Aufbau souveräner Strukturen investiert haben – in Infrastrukturkompetenz, Open-Source-Projekte und allgemein in Plattformen, die Nutzende befähigen, anstatt sie einzusperren.
Es besteht berechtigte Hoffnung, dass ihre Arbeit nun endlich Anerkennung findet.
Es ist zu erwarten, dass andere öffentliche Einrichtungen, die ähnliche Ziele wie die EU-Kommission verfolgen, sowie private Unternehmen mit hohen Anforderungen an Resilienz, diesem Beispiel folgen werden - indem sie sich auf das Rahmenwerk beziehen, Resilienzkriterien stärker gewichten und Mindestanforderungen in ihren Ausschreibungen verankern.
Die Zeit, in der Europa die neuen geopolitischen Realitäten ignorieren konnte, sollte endgültig vorbei sein!
Wenn das geschieht, könnten wir rückblickend auf diesen Moment als den Punkt schauen,
an dem ein neuer Markt für wirklich souveräne IT-Infrastrukturplattformen entstanden ist ein echter „Zeitenwende“-Moment.
Und wir hoffen sehr, dass es so kommt.
