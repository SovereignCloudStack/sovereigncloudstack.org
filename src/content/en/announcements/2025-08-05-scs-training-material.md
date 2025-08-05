---
postType: announcements
title: 'Sovereign Cloud Stack (SCS) Trainings'
date: '2025-08-05'
language: 'en'
authors:
    - name: 'Kurt Garloff'
slug: 'scs-training-material'
template: 'post'
---

## SCS training program in govstack context

Digital Sovereignty is not just a big topic in Europe; companies, organizations
and governmental authorities in other regions also want to keep in control of
their data and foster local competency, innovation capabilities and value creation.
The [govstack project](https://govstack.global/) supports this by providing
[standards](https://www.govstack.global/our-offerings/govspecs/) for building blocks
of digital solutions and by test/demo environments, knowledge transfer (capacity
building) and a marketplace for standard-conforming open solutions.
The [Sovereign Cloud Stack](https://sovereigncloudstack.org/) (SCS) Project was
glad to [collaborate with govstack](https://scs.community/de/2024/12/04/GovStack/)
and could contribute to the specification of the 
[Cloud Building Block](https://govstack.gitbook.io/bb-cloud-infrastructure).
The SCS reference implementation is also listed as a conforming solution on the
govstack marketplace.

For capacity building, a program has been jointly designed that consists of several
modules:

1. Preparation by the participants with online material
2. A one-week course on Cloud Fundamentals
3. A few months of practical work with test environments, cloud-in-a-box, ...
4. A one-week training "SCS for advanced users and operators"

The goal is to get engaged participants to a level that they have -- after completing
this curriculum -- the skill to ensure basic operations of an SCS cloud (including
both the virtualization and the container layer) and only occasionally need the
help from a partner that provides maintenance and support.

## SCS in Africa

The first advanced training as part of this program happened in Nairobi, Kenya,
in May 2025. 20 participants from Djibouti, Somalia and Kenya participated.
They had all gone though Fundamentals trainings before, which had been conducted
by Karsten Samaschke (VanillaCore) before in Africa on several occasions. Die
trainings were paid for and organized by [ITU](https://itu.int/)(International
Telecommunications Union, Geneva) and [GIZ](https://giz.de/en/)(German Society
for International Cooperation, Bonn). There was live translation into French
for the French-speaking participants, so flawless communication was possible
without requiring advanced French language knowledge from all trainers.

The course was conducted by the author together with Karsten Samaschke.
The participants were highly motivated and enthusiastic about the subject matter.
Unfortunately, they had only scarcely been able to prepare with practical work
beforehand, as the planned test environments could not be provided in the countries.
This also means that additional collection of practical experience and in some
cases even additional training will be required to achieve a mostly self-sufficient
ability to run SCS Clouds with high reliability.

![Karsten on Cluster Internals](20250515_155925.jpg)

## Cloud-in-a-Box as training environment

The training consists on many small chapters in each of which a topic is first being
explained and then practised in practical assignments that the participants are supposed
to work on themselves -- with support from the trainers as needed.
Demonstrations and in particular the practical work was all done on a local Cloud-in-a-Box
(CiaB) system to avoid a dependency on good network connectivity to Europe. The CiaB was
a mini computer with 8 Zen4 cores (16 HTs), 96GB Ram and 2x4TB NVMEs and proved itself as
a reliable basis to provide block and object storage (using Ceph), virtualization (using
OpenStack) and many Kubernetes Clusters (using SCS Cluster Stacks) and supporting the
work on both user and operator roles. The participants had access via a locally provided
WLAN using Wireguard VPN tunnels from their Microsoft, Linux and Apple Laptops to the
CiaB system.

## SCS training material

Course material was created for the training; this was tendered and paid for by the ITU.
The author on behalf of S7n Cloud Services GmbH has received the job and has worked on it with
[dNation s.r.o.](https://dnation.cloud/),
[VanillaCore](https://vanillacore.de/), and 
[OSISM GmbH](https://osism.tech/).
The material was completed for the training, but further improved during the week and afterwards.
Following the structure of the course, it consists of many chapter in which there are practical
assignments after each block of knowledge. The participants are supposed to work on these with
some support by the trainers as needed. Most of the assignments were worked on for real during
the training in Kenya -- a few were skipped to manage the available time.

The material is a collection of markdown files; these can easily be cast into slides which was
done using the slide mode from Hedgedoc on-site. On the other hand, a high-quality (currently
85 page) PDF document can be created which can be handed to participants as eBook or even as
paper.

The ITU has agreed to provide the training material under an Open Source license.
Since a few weeks, the material is available at 
<https://github.com/SovereignCloudStack/scs-training/>
under the [CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/deed.en) license.
The license requires the naming of the authors (BY) and the sharing of own improvements (SA)
under the same license; it has been chosen deliberately to ensure improvements benefit
the common copy. Note that the brands
Sovereign Cloud Stack and SCS continue to be property of the
[OSBA](https://osb-alliance.de/); using the brand by offering SCS-Training should be
done by members and in alignment with the
[Forum SCS-Standards](https://www.sovereigncloudstack.org/en/network/) of the OSBA.
This should ensure a consistent representation and high quality.
Collaboration, performance of trainings and furthering the materials are explicitly\
encouraged.

## Thanks

The author would like to thank ITU for funding and releasing the training material.
He'd like to thank GIZ for organizing and paying for the training in Kenya.
He acknowledges the contributions from dNation, VanillaCore and OSISM to the
training and the materials.
