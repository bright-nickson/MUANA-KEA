"use client";

import { IndustryCard } from "@/components/IndustryCard";

const industries = [
  {
    title: "Banking & Financial Services",
    description:
      "Supporting banks, payment providers, and financial institutions as they modernise core platforms and channels.",
    outcomes: [
      "Improved resilience and observability for core transaction flows.",
      "Roadmaps that balance regulatory change, modernisation, and cost.",
      "Delivery structures that align technology change with risk and compliance expectations.",
    ],
  },
  {
    title: "Public Sector & Government",
    description:
      "Helping public institutions design, deliver, and operate services that citizens and businesses can rely on.",
    outcomes: [
      "Platforms that are robust, auditable, and transparent in their operation.",
      "Procurement and delivery models that support long-term maintainability.",
      "Cross-agency integration patterns that respect data protection requirements.",
    ],
  },
  {
    title: "Energy & Utilities",
    description:
      "Working with energy and utility providers on platforms that support operations, customers, and regulators.",
    outcomes: [
      "Integration between OT, IT, and customer-facing systems.",
      "Data platforms that support planning, reliability, and reporting.",
      "Governance structures that manage risk across complex partner ecosystems.",
    ],
  },
  {
    title: "Healthcare",
    description:
      "Supporting healthcare providers and partners with platforms that handle sensitive data and critical services.",
    outcomes: [
      "Architectures that protect patient data while enabling collaboration.",
      "Operational models that can support high-availability requirements.",
      "Change approaches that respect clinical, regulatory, and operational constraints.",
    ],
  },
  {
    title: "Mining & Natural Resources",
    description:
      "Enabling mining and resources organisations to connect operational, financial, and partner ecosystems.",
    outcomes: [
      "Integration between operational systems, supply chains, and finance.",
      "Data capabilities that inform safety, productivity, and sustainability initiatives.",
      "Delivery models tuned to remote operations and distributed teams.",
    ],
  },
  {
    title: "Telecommunications",
    description:
      "Working with telecom operators and service providers on platforms that support connectivity and digital services.",
    outcomes: [
      "Modernisation of BSS/OSS landscapes without disrupting core services.",
      "API and event architectures that enable new products and partnerships.",
      "Managed services that stabilise complex multi-vendor environments.",
    ],
  },
  {
    title: "Manufacturing",
    description:
      "Helping manufacturers connect production, supply chain, and commercial platforms.",
    outcomes: [
      "Integration patterns that reduce manual reconciliation and latency.",
      "Data visibility for planning, quality, and performance management.",
      "Secure connectivity between plants, partners, and corporate functions.",
    ],
  },
  {
    title: "Retail & Distribution",
    description:
      "Supporting retailers and distributors as they align store, e-commerce, and fulfilment operations.",
    outcomes: [
      "Unified views of inventory, pricing, and customer interactions.",
      "Platforms that support new channels without fragmenting operations.",
      "Integration with payment, logistics, and partner ecosystems.",
    ],
  },
  {
    title: "Education",
    description:
      "Working with education providers and partners to modernise learning and administrative platforms.",
    outcomes: [
      "Platforms that support blended and remote learning models.",
      "Data capabilities for outcomes tracking and regulatory reporting.",
      "Governance that balances innovation with duty-of-care obligations.",
    ],
  },
  {
    title: "Legal & Professional Services",
    description:
      "Supporting legal and professional services firms as they digitise workflows and client interaction.",
    outcomes: [
      "Matter, document, and knowledge platforms that are secure and accessible.",
      "Integration with client, finance, and risk platforms.",
      "Change approaches that respect partnership governance and culture.",
    ],
  },
];

export default function IndustriesPage() {
  return (
    <div className="space-y-10">
      <section aria-labelledby="industries-heading" className="space-y-6">
        <div className="max-w-3xl space-y-4">
          <h1
            id="industries-heading"
            className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
          >
            Industries
          </h1>
          <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
            Mauna Kea Consulting works with organisations that operate critical services and
            infrastructure. We focus on outcomes that are material to boards, regulators, and
            customers.
          </p>
        </div>
      </section>

      <section aria-label="Industries served" className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2">
          {industries.map((industry) => (
            <IndustryCard
              key={industry.title}
              title={industry.title}
              description={industry.description}
              outcomes={industry.outcomes}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
