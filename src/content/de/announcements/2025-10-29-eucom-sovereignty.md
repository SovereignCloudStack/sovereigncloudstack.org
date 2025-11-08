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

## Frameworks for Digital Sovereignty in Cloud Infrastructure

### Sovereign Cloud Stack's Digital Sovereignty

Right from the beginning of the Sovereign Cloud Stack initiative, the urge to define digital sovereignty beyond the ability to control data was very prominent. Inspired by the [definition](https://www.de.digital/DIGITAL/Redaktion/DE/Digital-Gipfel/Download/2018/p2-digitale-souveraenitaet-und-kuenstliche-intelligenz.pdf) from DigitalGipfel 2018 and after numerous discussions to understand the needs of infrastructure users, the SCS Project came up with four different areas in which the requirements were sorted:

1. Data Sovereignty (SCS-1): The ability to store and process data securely and keep control of whom it is shared with. Security, controls and jurisdictional safety are prerequisites to fulfill this.
2. Provider switching capability (SCS-2): Avoiding lock-in effect by using services or APIs that are specific to one provider (or very few) which make it hard to switch or federate infrastructure providers.
3. Technological Sovereignty (SCS-3): The ability to freely use, study, adjust and innovate on the cloud technology. This benefits providers and thus users indirectly -- and also directly by running their own infrastructure if they determine this to be beneficial.
4. Operational Skills (SCS-4): The documentation and transparency on operational tools and processes to build the skills to run an infrastructure platform reliably. This empowers also smaller players to be successful in running cloud platforms for their own needs or for their external clients.

This was published in [the cloud report](/assets/CloudReport_2022_01_DigiSov.pdf) and [DuD](https://rdcu.be/cWdBJ) in 2022 and has been key to the strategic discussions in the [Sovereign Cloud Stack](https://sovereigncloudstack.org/) project.
While not being formally adopted by any standardization organization, it has certainly inspired others to think beyond data sovereignty like e.g. the [govstack project](https://govstack.global/) and it was used on and off-stage in many discussions and has held up extremely well there.

The current geopolitical situation does motivate organisations to carefully look into their resilience and dependencies.
One can see some of these conversations derail and observe both attempts to confuse everyone with statements around digital sovereignty not being defined as well as players attempting to sovereign-wash their existing offerings by adding some level of protection against foreign access to data. If organisations are interested in IT resiliency, they need to avoid falling to these marketing schemes.

### EU Commission

A few days ago, the EU commission has published their [Cloud Sovereignty Framework](https://commission.europa.eu/document/09579818-64a6-4dd5-9577-446ab6219113_en), taking a broad view on sovereignty.
The [EuroStack](https://eurostack.eu/) iniative has done a [comparison](https://euro-stack.com/blog/2025/10/cloud-sovereignty-framework-comparison) with their own definition.

This is all good news -- while the multitude of views may look confusing at first sight, these all fit together nicely and the next section looks at this in more detail.

## Comparing EU commission, SCS and EuroStack sovereignty categories

The following table is a mapping from the Commission's Sovereignty Objectives to the SCS sovereignty categories.

| EU Com Objective | Description | SCS |
|------------------|-------------|-----|
| SOV-1: Strategic Sovereignty (15%) | EU authority with protection against change of control, financing from EU, investment and job creation in EU, participation in EU initiatives, resilience against service suspension requests | SCS enables local providers, but does not have a corresponding sovereignty category. |
| SOV-2: Legal & Jurisdictional Sovereignty (10%) | Governing law, non-exposure to non-EU law, international regimes, location of IP | This is part of SCS' definition of Data Sovereignty (SCS-1), which excludes data access based on jurisdiction not accepted by the EU. |
| SOV-3: Data & AI Sovereignty (10%) | Control over data and encryption key from customer (not provider), data access visibility and irreversible removal, data storage and processing in EU without fallback to outside, AI models under EU control using EU technology stacks | Local providers should have the processes in place to ensure secure operations; the software from the SCS ecosystem supports this, e.g. by enabling data encryption and having support for HSM. The data sovereignty (SCS-1) requirement is the base level without which the others are not as useful in the SCS taxonomy. |
| SOV-4: Operational Sovereignty (20%) | Lack of vendor lock-in by supporting migration to other EU providers, operational skills from EU personell, talent pool, operational support from suppliers subject to EU law, full availabilty of tech docs, source code and operational know-how for long-term autonomy, location of critical suppliers | The Operational Skills (SCS-4) from SCS has very similar goals; it goes a bit further though by thinking transparency also for the users, not only providers. The lack of vendor lock-in is dealt with SCS' provider switching capability category (SCS-2), requiring exposing standardized APIs and system behavior |
| SOV-5: Supply Chain Sovereignty (20%) | Hardware assembly location, provenance of firmware, location and jurisdiction of software development, architecture, packaging, distribution and governance, reliance on non-EU vendors or proprietary technologies, visibility into supply-chain with audit rights | While SCS would love for more open hardware to exist and to support it, it does not have a mission to affect hardware creation. With it's Technology Sovereignty category (SCS-3), SCS exclusively uses openly developed open source code in its reference implementation. The open development model and licenses guarantee broad empowerment of the users; SCS does not consider the geographic location of contributors or governance bodies to be relevant for openly developed open source code. |
| SOV-6: Technology Sovereignty (15%) | Integration option with other technology via well-documented non-proprietary APIs or protocols, ideally using widely adopted standards, open source availability of software, architectural documentation, independence in HPC capabilities | The standardized and widely adopted standards are a key component to fulfill the provider switching capability (SCS-2) requirement, whereas using open source software is key to the implementation os SCS' technology sovereignty (SCS-3). SCS wants the open source software to be openly developed, avoiding control from single vendors which could then result in stopping open source releases like we have seen repeatedly in the industry. |
| SOV-7: Security & Compliance Sovereignty (10%) | Certifications (ISO, ENISA, ...), GDPR, NIS, DORA, ..., Security Operation Center and response teams under EU jurisdiction, security monitoring, oversight from customer or EU authority on it, EU-compliant reportng of breaches, patching capability, suportting EU security audits | Some SCS providers have undergone ISO and BSI certifications. Software from the SCS Ecosystem supports the timely patching by having CI systems in place and has published security advisories for high-profile issues. This is part of  SCS' data sovereignty (SCS-1) approach |
| SOV-8: Environmental Sustainability (5%) | Energy-efficient infra (PUE), Circular economy, measurement of carbon emission and water consumption | Not covered - SCS supports a sister project with [ECO:DIGIT](https://ecodigit.de/) which looks at resource consumption of clouds as parts of the environmental impact of software applications. |

Comparing this to the EuroStack commentary, SCS does have a stronger focus on Open Source and a less strong focus on "Buy European!". The structure of the European market favors smaller players compared to the US market; for platform markets with its network effects, European players are thus at a disadvantage. This can be overcome with strong collaboration and the by far most effective way to do so is using Open Source collaboration.

By nature, openly developed Open Source Software grants its users and contributors a huge amount of power -- which makes the geographic location of contributors or even governing foundations a secondary consideration. This may be different for Open Source projects under the control of a single vendor and for sure is different for proprietary code. That said, we would love to see more contributions to Open Source from engineers in Europe, especially from large companies, where we observe a gap between Europe and the US. In Open Source communities, contributions bring influence; a good governance process (as the Open Source foundations typically encourage) respects the meritocracy of good Open Source communities. A hostile takeover of governance is thus not a significant risk for such projects. Nevertheless, with more contributions from Europe, we should over time also see more projects where the official governance is exercised out of Europe.

Analyzing the Digital Sovereigty in the context of infrastructure platforms, SCS systematically looks at it from the user organization's perspective: What are the dependencies and thus risks that a user has? A strong dependence on a single provider is bad for resilience, even if that provider is European (and thus at least less subject to some of the geopolitical risks). The provider switching capability (SCS-2) and the strong focus on Open Source (SCS-3) and Open Operations (SCS-4) are a consequence of this. This is not as clearly worked out in the EU Commission's framework, as it does not have such a clear focus on the user.

The overall conclusion would be that the EU Commission's framework is mostly a superset of the SCS sovereignty and also rather comprehensive. SCS does not explicitly cover the strategic and environmental aspects while having a stronger focus on empowering the user organizations. Given where the discussion started in the of sovereign-washing marketing, these are indeed minor details and the high degree of alignment is very encouraging.

## Zeitenwende moment?

While there was a lot of talk on digital sovereignty this year, the sophistication of looking at it was very varied -- the lack of something coming out of an official body allowed interested parties to confuse the marketplace and slowed the adoption of really sovereign solutions. With the EU commission's definition, this is changing now.

One should expect harsh criticism from these interested parties with messages that the insistence on all of these objectives will slow down digitization, innovation and competitiveness in Europe. This is good, it confirms that the commission is on the right track. Or, using Ghandi's [probably misattributed statement](https://www.snopes.com/fact-check/first-they-ignore-you/), it confirms that the sovereignty movement is past the being ignored stage.

Now, the EUCom's Cloud Sovereignty Framework will only be effective if it is applied and used. DG DIGIT's latest tender is following precisely this: Their [180M€ tender](https://commission.europa.eu/news-and-media/news/commission-moves-forward-cloud-sovereignty-eur-180-million-tender-2025-10-10_en) is putting a focus on digital sovereignty and requires minimum assurance levels for the sovereignty objectives from the framework. The tender can be awarded to up to four providers, this way increasing resilience, though it's not explicitly required for the selected providers to have a high level of compatibility with each other.

This is really good news for the communities, organizations and companies that have invested time and effort on building towards sovereignty in the last years. They have invested into infrastructure skills, Open Source projects and in general platforms that empower users rather than locking them in. There is hope that their work is finally being rewarded.

One should expect that other public sector actors who have similar interests to the EU Commission and private companies that require a high level of resilience will actually follow this model by referencing the framework, weighing resilience criteria high in their tenders and having minimum requirements for them. The period where Europeans can stay in denial mode of the new geopolitical realities really should be over!

If that happens, we may look back at this moment as a point in time that created a new market for really sovereign IT infrastructure platforms. A true "Zeitenwende" moment.
We sure hope so.
