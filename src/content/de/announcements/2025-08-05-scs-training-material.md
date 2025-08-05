---
postType: announcements
title: 'Sovereign Cloud Stack (SCS) Trainings'
date: '2025-08-05'
language: 'de'
authors:
    - name: 'Kurt Garloff'
slug: 'scs-training-material'
template: 'post'
---

## SCS Trainingsprogramm im Rahmen von govstack

Digitale Souveränität ist nicht nur in Europa ein großes Thema; auch in anderen
Regionen der Welt wollen Unternehmen, Organisationen und staatliche Stellen die
Kontrolle über die Daten behalten und lokale Kompetenzen, Innovationskraft und
Wertschöpfung fördern. Das [govstack Projekt](https://govstack.global/)
unterstützt dies durch die Bereitstellung von
[Standards](https://www.govstack.global/our-offerings/govspecs/) für Bausteine
für digitale Lösungen sowie durch Test/Demoumgebungen, Wissensvermittlung und
einen Marktplatz für standardkonforme offene Lösungen. Das
[Sovereign Cloud Stack](https://sovereigncloudstack.org/) (SCS) Projekt arbeitet sehr
gerne mit govstack [zusammen](https://scs.community/de/2024/12/04/GovStack/) und
durfte zur Spezifikation des
[Cloud Bausteins](https://govstack.gitbook.io/bb-cloud-infrastructure) beitragen.
Die SCS Referenzimplementierung ist auch auf dem Marketplace als konforme Lösung gelistet.

Für die Wissensvermittlung wurde gemeinsam ein Programm entworfen, welches darin
besteht, dass aus mehreren Elementen besteht:

1. Ein Vorbereitung der Teilnehmer durch Online Material
2. Eine einwöchiges Cloud Fundamentals Schulung
3. Ein paar Monate praktische Arbeit an Testumgebungen, Cloud-in-a-Box, ...
4. Ein einwöchiges Training "SCS für Fortgeschrittene und Betreiber"

Das Ziel ist es, dass engagierte Teilnehmer:innen nach dem Durchlaufen des Kurses die
Fähigkeit besitzen, grundlegend den Betrieb einer SCS Cloud (sowohl Virtualisierungsschicht
als auch Containerschicht) sicherzustellen -- und dabei nur vereinzelt auf die Hilfe
eines Partners angewiesen zu sein, der Wartung und Support sicherstellt.

## SCS in Afrika

Der erste fortgeschrittene Kurs im Rahmen dieses Programms fand im Mai 2025 in
Nairobi (Kenia) statt -- mit gut 20 Teilnehmer:innen aus Djibouti, Somalia und
Kenia. Diese hatten zuvor Fundamentals Schulungen durchlaufen, für die Karsten
Samaschke (VanillaCore) einige Termine in Afrika durchgeführt hatte. Die Trainings
wurden durch die [ITU](https://itu.int/)(Internationale Fernmeldeunion, Genf) und
die [GIZ](https://giz.de/) (Gesellschaft für Internationale Zusammenarbeit, Bonn)
organisiert und aus deren Fördergeldern finanziert. Für die französischsprachigen
Teilnehmer:innen waren vom GIZ Simultanübersetzer vor Ort, so dass eine lückenlose
Kommunikation möglich war, ohne fortgeschrittene Französischkenntnisse aller Trainer
vorauszusetzen.

Der Kurs in Nairobi wurde vom Autor zusammen mit Karsten Samaschke durchgeführt.
Die Teilnehmer:innen waren hoch motiviert und mit Enthusiasmus bei der Sache;
allerdings war die praktische Arbeit mit Testumgebungen im Vorfeld nur vereinzelt gelungen,
da die notwendige Infrastruktur in den Ländern anders als geplant nicht bereitgestellt
werden konnte. Insofern dürfte auch für die besten Teilnehmer:innen nach dem Training
weitere praktische Übung oder gar ein weiteres Training notwendig sein, um das Ziel
eines weitgehend selbständigen Betriebs einer SCS Cloud mit guter Zuverlässigkeit
zu erreichen.

![Karsten über Cluster Interna](20250515_155925.jpg)

## Cloud-in-a-Box als Trainingsumgebung

Das Training bestand aus vielen kleinen Modulen, in denen ein Thema erklärt wurde und
anschließend in praktischen Aufgaben von den Teilnehmer:innen mit Unterstützung der
Trainer selbständig bearbeitet wurden. Die Demonstrationen und insbesondere die Übungen
wurden alle auf einer Cloud-in-a-Box (CiaB) vor Ort durchgeführt, so dass eine Abhängigkeit
von guter Netzverbindung nach Europa vermieden wurde. Die CiaB war ein Minicomputer mit
8 Zen4 Kernen (16 HTs), 96GB RAM und 2x4TB NVMe und hat sich dabei bewährt, Block- und
Object Storage (mit Ceph), Virtualisierung (mit OpenStack) und viele Kubernetes Cluster
(mit SCS Cluster Stacks) bereitzustellen und mit Nutzer- und Betreiberrollen zu bearbeiten.
Die Teilnehmer:innen hatten von ihren Microsoft-, Linux- und Apple-Laptops über ein lokal
bereitgestelltes WLAN und Wireguard VPN- Verbindungen direkten Zugriff auf die CiaB.

## SCS Trainingsmaterial

Für das Training wurden Schulungsmaterialien angefertigt; diese wurden von der ITU ausgeschrieben
und bezahlt. Der Autor hat mit S7n Cloud Services GmbH den Auftrag erhalten und sie zusammen mit
[dNation s.r.o.](https://dnation.cloud/),
[VanillaCore](https://vanillacore.de/) und 
[OSISM GmbH](https://osism.tech/) angefertigt.
Sie wurden zum Training fertiggestellt und in und nach der Woche nochmal deutlich überarbeitet und
verbessert. Der Struktur des Trainings folgend bestehen sie aus Kapiteln, in denen nach jedem
Wissensblock entsprechend Aufgaben ("Assignments") vorgeschlagen sind, die von Teilnehmer:innen
mit Unterstützung der Trainer entsprechend zu bearbeiten sind. Diese praktischen Übungen wurden
zu einem großen Teil durchgeführt, aber nicht in jedem Fall alle, weil die verfügbare Zeit
gemanagt werden musste.

Das Material besteht aus einer Sammlung von Markdown-Dateien; aus diesen lassen sich leicht Folien
schneiden (was mit dem Folienmodus von HedgeDoc realisiert wurde). Andererseits lässt sich daraus
ein (Stand Anfang August 2025) 85 seitiges Buch als PDF erstellen, das man auch als Unterlage in
Form eines eBooks oder von Papier nutzen kann.

Die ITU hat eingewilligt, die Trainingsunterlagen unter einer Open-Source Lizenz zur Verfügung
zu stellen. Die Unterlagen stehen seit einigen Wochen unter der
[CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.de) Lizenz auf
<https://github.com/SovereignCloudStack/scs-training/> zur Verfügung. Die Lizenz erfordert die
Namensnennung der Autoren (BY) und die Weitergabe eigener Verbesserungen unter derselben Lizenz (SA)
und wurde bewusst gewählt, um Verbesserungen auch dem gemeinsamen Dokument zugute kommen zu lassen.
Die Marken Sovereign Cloud Stack und SCS sind weiterhin Eigentum der
[OSBA](https://osb-alliance.de/); eine Nutzung in Form von Anbieten von SCS-Trainings sollte
durch Mitglieder und in Abstimmung mit dem 
[Forum SCS-Standards](https://www.sovereigncloudstack.org/de/network/) der OSBA geschehen;
damit soll auch eine konsistente Darstellung und eine hohe Qualität sichergestellt werden.
Die Mitarbeit dort, die Durchführung von Trainings und die Weiterentwicklung des Materials
ist ausdrücklich erwünscht!

## Danksagung

Der Autor möchte sich bei der ITU für die Finanzierung der Trainingsmaterialien und der
Einwilligung in die Freigabe unter CC-BY-SA-4.0 bedanken; ferner bei der GIZ für die
Organisation und Finanzierung des Trainings in Kenia. dNation, VanillaCore und OSISM haben
wesentliche Beiträge geleistet, auch ihnen gilt der Dank!

