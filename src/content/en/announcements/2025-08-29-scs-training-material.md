---
postType: announcements
title: 'Sovereign Cloud Stack (SCS) Trainings'
date: '2025-08-29'
language: 'en'
image: '20250515_155925.jpg'
authors:
    - name: 'Kurt Garloff'
slug: 'scs-training-material'
template: 'post'
---

## SCS trainings worldwide: Open training approach for digital sovereignty

The discussion of digital sovereignty has long outgrown the boundaries of
Europe.  Organizations, companies and governments worldwide are looking for
ways to keep control over their own digital infrastructure and their data -
independent, secure and built upon open standards. This is where [Sovereign
Cloud Stack (SCS)](https://sovereigncloudstack.org/) comes into play.

SCS is not just the response to the demand for operating digitally sovereign
infrastructure - it also comes with and educational side. Because true
sovereignty can only emerge when human develop a deep understanding of the used
technology - and gain competency to operate it.

## Collaboration with GovStack: Combining standards, knowledge and practice

A comprehensive training program that fosters digital sovereignty by practice
in operating clouds was developed together with the the international initiative
[GovStack](https://govstack.global/). GovStack globally supports the setup of
digital services by defining standardised building blocks, test and demo
environments as well as a market place for interoperable open solutions.

The Sovereign Cloud Stack (SCS) project [actively contributes to
GovStack](https://scs.community/2024/12/04/GovStack/): SCS provided significant
input for the development of GovStack's [Cloud Infrastructure Building
Block](https://govstack.gitbook.io/bb-cloud-infrastructure).  The SCS reference
implementation is also listed as a conforming solution on the [govstack
market](https://www.govstack.global/software/) - an important milestone in the
quest to provide more trust and international adoption of sovereign cloud
technology.

An important part of the collaboration is a training program, which teaches
both technical foundations and practical experience. It encompasses:

1. Self-study via online material,
2. a one-week course on the foundations,
3. several weeks of practical work with test environments (e.g. "Cloud-in-a-Box"),
4. and an advanced training course with focus on real-world operations.

The goal of this program is to enable engaged participants to operate a
complete SCS cloud environment (including virtualization and container layer
as well as the tooling) on their own -- with occasional support by external
partners.

## SCS in Africa: Successful training in Kenya

An outstanding example for the implementation of this training program is the
first advanced course that took place in Nairobi, Kenya, in May of 2025. Over
20 participants from Kenya, Somalia, and Djibouti gathered for an intense week
of trainings. Most of them had participated in the foundational courses before
which Karsten Samaschke had lead in a number of African countries.

The trainings was organized and paid for by the [ITU](https://itu.int/)
(International Telecommunications Union, Geneva) and
[GIZ](https://giz.de/en/)(German Society for International Cooperation,
Bonn/Eschborn). There was live translation into French for the French-speaking
participants, so everyone was able to actively participate without language
barriers.

The training week in Nairobi was characterized by intense interactions from
highly motivated participants. Some challenges existed - last not least the
common lack of available infrastructure in the participants' home countries to
prepare for the course. Despite this, there was concentrated and active
participation where the participants were able to build a solid foundation of
knowledge and experience. With some further practice and possibly some more
trainings, they will be able to become self-reliant in setting up and
reliably operating an SCS Cloud.

## Learning by Doing: Cloud-in-a-Box as local training environment

The training had a clear structure: Explain, test, apply.
In numerous small modules, topics were introduced and explained.
The participants then got the opportunity to apply the learnings directly
afterwards with practical assignments - with some supervision by the trainers
but largely on their own.

All demonstrations and practice was done locally with a specially prepared
[Cloud-in-a-Box (CiaB)](https://docs.scs.community/docs/iaas/deployment-examples/cloud-in-a-box/).
This small yet powerful training environment did not only make for a
tangible setup but also ensure independence from a stable internet connection
to Europe. The participants thus were enabled to work under realistic conditions - just like
later on for operating real SCS clouds.

The used CiaB was actually a powerful mini computer with 8 Zen4 cores (16 threads),
96GB of RAM, and 2x4TB NVMe storage. All relevant services were running there:
Ceph for block and object storage, OpenStack for the Virtualization and several
Kubernetes clusters managed by SCS Cluster Stacks.

Direct access to the infrastructure was provided via a locally operated WLAN
and via Wireguard tunnels from the participants' laptops - no matter whether
Windows, macOS or Linux was deployed on these. So they could seamlessly
switch between learning and accessing the environment with building practical
experience as cloud users and operators.

## SCS training material: open, flexible and jointly extensible

Training material has been created for this course - modular, practical and
openly available.

The structure of it follows the didactic concept: After each knowledge block
there are practical assignments that should be worked through by the participants,
on their own or with some support by the trainers as needed. During the course
in Nairobi, most of the assignments were actually successfully done, though

The material is [available](https://github.com/SovereignCloudStack/scs-training/)
as a collection of markdown formatted text. It can easily be extended,
transformed into presentation slides (e.g. with HedgeDoc) or transformed
into a PDF booklet (~85 pages as of Aug 2025).

Especially important is that it has been made available under an
an Open Source License ([CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en)).
This license requires attribution to the original authors (BY) and the
republication of own changes under the same license (SA). The license
was chosen deliberately to ensure that future extensions and improvements
would be benefiting the whole community again.

The brands Sovereign Cloud Stack and SCS continue to be owned by the 
[OSBA](https://osb-alliance.com/). Trainings with the SCS name thus should
be done by members and in alignment with the [Forum SCS-Standards]([Forum
SCS-Standards](https://www.sovereigncloudstack.org/en/network/)) of the OSBA.
This ensures a consistent representation and the quality of the trainings.
Collaboration in the forum and the conduct of trainings is explicitly
encouraged. Everyone can this way contribute to further spread sovereign
cloud technology worldwide.

🔗 Download & Contribute: <https://github.com/SovereignCloudStack/scs-training/>

## Acknowledgements

Special thanks go to the ITU for financing and releasing the training
materials and to GIZ for organizing and funding the training course in Kenya,
which was conducted by Karsten Samaschke
([VanillaCore](https://vanillacore.de/) together with myself (Kurt Garloff,
[S7n Cloud Services GmbH](https://garloff.de/s7n/)).  There were furthermore
contributions to the training materials by [dNation
s.r.o.](https://dnation.cloud/), [OSISM GmbH](https://osism.tech/) and the SCS
Community.
