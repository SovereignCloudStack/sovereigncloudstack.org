# Press Release R8 (for now a headline is missing)

**The internet / Global network (is SCS located anywhere?), 2025-04-09: The Sovereign Cloud Stack community publishes Release 8.** 

While the funding for the Sovereign Cloud Stack (SCS) project by the German Federal Ministry of Economic Affairs and Climate Action (BMWK) ended in December 2024, engaged companies, organizations, and an active open-source community are continuing the maintenance and evolution of the SCS standards, the SCS reference implementation, and the operational skill building. The engineering collaboration results in the publication of the eighth release of the SCS software.

### Increasing relevance of digital sovereignty

When Sovereign Cloud Stack was started in late 2019, it was meant as empowerment for operators and users of cloud technology to have control, value creation and innovation capabilities. With a clear understanding of the various aspects of digital sovereignty, SCS was designed to deliver on all dimensions, empowering IT departments and providers to have control over data (data sovereignty), to have choice and switching capabilities, to have capabilities to shape the technology (technological sovereignty) and work to increase the skills to use and operate such platforms. These topics were important back then, but only a topic for a small community of people that were concerned about the structure of our IT markets. Ever since, the topic has gained visibility and we have seen so-called "sovereign clouds" emerge (trying to address only the data sovereignty angle) but increasingly also broader strategic work, e.g. in the context of the Digital Public Infrastructure work in Germany (e.g. by the Sovereign Tech Agency) and the world (for example the GovStack project and UN's OSPOs for Good initiative). With the EuroStack whitepaper, the discussion has reached Brussels and SCS will happily continue to contribute to the discussion and -- different from many other parties -- to the available set of standards and technologies.

### Avoiding upgrade risks

The SCS project and its products make it easy for providers to keep up-to-date with the current software that is permanently refreshed not just by the SCS community but predominantly by the various upstream projects that SCS builds upon and contributes to. The current release is centered around a robust framework for building and testing the software (CI/CD), which includes tracking dependencies (to build an SBOM), integration tests (for fresh deployments as well as for upgrades) and security tests. The software to perform such continuous testing is part of SCS and can be implemented by operators according to their needs. The SCS community runs infrastructure itself to ensure the reference implementation does not break and to also ensure that the build and testing processes continue to work reliably. Coordinating with operators and connecting them has contributed to smooth transitions to the latest releases. This way SCS helps to avoid the common trap of falling behind with all the fragmentation and security challenges that ensue. Beyond the community support, the technology companies that are the main contributors to the SCS software engineering are happy to provide commercial support and maintenance subscriptions for the fully open SCS software to support operators with their production environments.

### Latest software

The reference implementation SCS R8 contains the latest software from the main projects. Operators have a choice though for some of the components. Most notably, they can choose to stick to old Ubuntu 22.04 LTS (over the default 24.04 LTS), OpenStack 2024.1 (over the default 2024.2) and Ceph Quincy (over Reef). SCS here follows the upstream OpenStack support for so-called "skip-level upgrade release process", which supports direct upgrades for the spring 20xx.1 releases, skipping over one 20xx.2  release. (Traditionally, skipping over releases during an upgrade was not supported.)

On the container side, R8 contains the latest stable Kubernetes Cluster-API software. The included latest Cluster-API implementation for OpenStack (CAPO) now uses the OpenStack Resource Controller (ORC) which replaces the Cluster Stack Provider for OpenStack (CSPO) that was used in the SCS Cluster Stacks before. The Multi-Stage-Addons support is now used in the SCS Cluster Stacks, ensuring smooth upgrades between Kubernetes versions by sequencing upgrades of things like the CCM (Cloud Controller Manager), CNI (Cloud Networking Integration) and CSI (Cloud Storage Integration). Users have a choice between Kubernetes versions, have the option to use the latest stable versions or can upgrade existing clusters to them.

For the operational tooling, SCS has also upgraded the registry (which uses harbor) and the container monitoring solution (from dNation) to the latest versions. They have been in production use by the community already for a number of weeks.

[Chose one quote:]

"Within the funded project period, we have built an engine for doing well-tested, predictable releases that our operator partners can use to stay up-to-date with current technology and security improvements. I'm happy to see this engine continues to be maintained and to work well, and to see the community and the technology companies step up with software engineering, resulting in solid release once more." says Kurt Garloff, S7n GmbH, former CTO of the funded SCS project.

"It's good to have reference implementations of the SCS-Standards evolve to latest technologies and standards. This creates real-world usage of the standards and validates and strengthens them." says Felix Kronlage-Dammers who is heading  the Forum SCS-Standards inside the Open Source Business Alliance (OSBA).

[ More proposals welcome ]

#### About the Sovereign Cloud Stack Project

The Sovereign Cloud Stack (SCS) Project is an open source project, maintained by the SCS community, consisting of various companies, users and developers of SCS and governed by the elected Project Board. An international ecosystem of two dozen companies contribute to the success of Sovereign Cloud Stack, accompanied by the Forum SCS-Standards at the [Open Source Business Alliance (OSBA)](https://osb-alliance.de/). There, open standards for modern, federable, open source cloud and container platforms are developed and fostered, avoiding technical dead-ends and overcoming lock-in. The companies participating in the SCS community develop a modular reference implementation of these standards in an open development process using proven open source components creating regular, predictable releases. At the same time, operational knowledge and practice is made transparently available to minimize the difficulty to operate high-quality and secure cloud services. More than half a dozen providers are using SCS technology in production to operate truly sovereign and GDPR-compliant public cloud offerings. Additional SCS-based cloud infrastructure (public and private clouds) is under construction, for example the Government Cloud in Guinea or the SCS private cloud in [UNICC](https://www.unicc.org/) data centers. SCS also contributes to the [Govstack](https://www.govstack.global/) initiative and to [Gaia-X](https://gaia-x.eu/) and is one of its [lighthouse projects](https://gaia-x.eu/community/lighthouse-projects/). SCS has received funding by the German Federal Ministry of Economic Affairs and Climate Protection (BMWK) 2021 - 2024.

#### References:

- Sovereign Cloud Stack: https://sovereigncloudstack.org/
- Archive (with lots of good info in the news section): https://scs.community/
- Technical Documentation SCS: https://docs.scs.community/docs
- SCS Repositories: https://github.com/SovereignCloudStack
- Release notes: https://docs.scs.community/docs/releases/Release8
- SCS’s notion of digital sovereignty: https://the-report.cloud/why-digital-sovereignty-is-more-than-mere-legal-compliance/ 
