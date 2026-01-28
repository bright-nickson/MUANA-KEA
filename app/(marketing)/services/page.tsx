"use client";

import { ServiceCard } from "@/components/ServiceCard";

const managedServiceTiers = [
  {
    title: "Basic",
    description:
      "Foundational monitoring, incident response, and runbook execution for lower-risk workloads.",
  },
  {
    title: "Premium",
    description:
      "Enhanced SLAs, deeper observability, and joint change governance for business-critical platforms.",
  },
  {
    title: "Enterprise",
    description:
      "End-to-end operational ownership, 24/7 coverage, and alignment with internal risk and compliance frameworks.",
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <section aria-labelledby="services-heading" className="space-y-6">
        <div className="max-w-3xl space-y-4">
          <h1
            id="services-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Services
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Mauna Kea Consulting provides a connected set of advisory, delivery, and run services so
            you can move from strategy to supported platform without fragmenting accountability.
          </p>
        </div>
      </section>

      <section aria-labelledby="advisory-heading" className="space-y-4">
        <h2
          id="advisory-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Advisory & Roadmaps
        </h2>
        <ServiceCard
          title="Advisory & Roadmaps"
          description="Structured guidance on where to invest, how to sequence change, and how to govern technology portfolios across markets."
          bullets={[
            "Target-state architecture and portfolio views for core platforms.",
            "Pragmatic roadmaps that respect funding, regulatory, and organisational constraints.",
            "Decision forums and metrics that keep leadership aligned as delivery progresses.",
          ]}
        />
      </section>

      <section aria-labelledby="consultancy-heading" className="space-y-4">
        <h2
          id="consultancy-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Consultancy
        </h2>
        <ServiceCard
          title="Consultancy"
          description="Hands-on consulting engagements focused on unblocking specific programmes, platforms, or architectural decisions."
          bullets={[
            "Programme reviews and rescue engagements for challenged initiatives.",
            "Architecture and design authority support for major transformation.",
            "Independent options analysis across vendors and delivery models.",
          ]}
        />
      </section>

      <section aria-labelledby="integration-heading" className="space-y-4">
        <h2
          id="integration-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Integration & Software Development
        </h2>
        <ServiceCard
          title="Integration & Software Development"
          description="Design and build services that connect core systems with new channels, partners, and data platforms."
          bullets={[
            "API-led and event-driven integration patterns for legacy and modern estates.",
            "Engineering teams focused on reliability, observability, and run-readiness from day one.",
            "Delivery approaches matched to your internal capability and vendor landscape.",
          ]}
        />
      </section>

      <section aria-labelledby="cyber-heading" className="space-y-4">
        <h2
          id="cyber-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Cybersecurity Services
        </h2>
        <ServiceCard
          title="Cybersecurity Services"
          description="Security services that balance regulatory expectations, operational realities, and programme timelines."
          bullets={[
            "Security architecture and control design aligned to regional regulations and standards.",
            "Security-by-design support for new platforms and integration initiatives.",
            "Pragmatic remediation roadmaps that prioritise real risk reduction.",
          ]}
        />
      </section>

      <section aria-labelledby="managed-heading" className="space-y-4">
        <h2
          id="managed-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Managed Services
        </h2>
        <p className="max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
          Tiered managed services give you a consistent operating model for critical platforms while
          allowing you to choose the level of coverage and responsibility split that fits each
          environment.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {managedServiceTiers.map((tier) => (
            <ServiceCard
              key={tier.title}
              title={tier.title}
              description={tier.description}
            />
          ))}
        </div>
      </section>

      <section aria-labelledby="training-heading" className="space-y-4">
        <h2
          id="training-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Training & Enablement
        </h2>
        <ServiceCard
          title="Training & Enablement"
          description="Targeted enablement for architecture, engineering, operations, and risk teams involved in new platforms."
          bullets={[
            "Working sessions and playbooks, not generic classroom training.",
            "Shadowing and co-delivery so internal teams own patterns and decisions.",
            "Operational readiness exercises that test monitoring, incident, and change processes.",
          ]}
        />
      </section>

      <section aria-labelledby="support-heading" className="space-y-4">
        <h2
          id="support-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Technical Support
        </h2>
        <ServiceCard
          title="Technical Support"
          description="Structured L2/L3 support models for platforms we help you design and build."
          bullets={[
            "Clear ownership boundaries between your teams, vendors, and Mauna Kea Consulting.",
            "Runbooks and knowledge bases created as part of delivery, not as an afterthought.",
            "Support models aligned to operational hours and escalation paths that work in practice.",
          ]}
        />
      </section>

      <section aria-labelledby="asset-heading" className="space-y-4">
        <h2
          id="asset-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Asset Management
        </h2>
        <ServiceCard
          title="Asset Management"
          description="Visibility and control over technology assets that underpin your core services."
          bullets={[
            "Inventories that are kept live through integration with existing tooling.",
            "Asset data connected to risk, lifecycle, and cost decisions.",
            "Support for audits, renewals, and optimisation initiatives.",
          ]}
        />
      </section>

      <section aria-labelledby="blockchain-heading" className="space-y-4">
        <h2
          id="blockchain-heading"
          className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
        >
          Blockchain
        </h2>
        <ServiceCard
          title="Blockchain"
          description="Focused use of distributed ledger technologies where they solve real problems in payments, identity, and asset tracking."
          bullets={[
            "Use-case evaluation grounded in regulatory, operational, and ecosystem realities.",
            "Design and integration of blockchain components into existing enterprise architectures.",
            "Run and support models that recognise the shared nature of distributed platforms.",
          ]}
        />
      </section>
    </div>
  );
}
