"use client";

import { useEffect } from "react";
import Link from "next/link";

const solutions = [
  {
    id: "cloud",
    title: "Cloud Transformation",
    description: "Modernize infrastructure, applications, and operations with secure, scalable cloud platforms.",
    outcomes: [
      "Faster deployment",
      "Optimized costs", 
      "Improved resilience",
      "Ready for AI and data at scale"
    ],
    cta: { text: "Start with a Cloud Pilot", href: "/calendar" },
    icon: "",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
    imageAlt: "Cloud computing infrastructure with digital transformation visualization"
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    description: "Protect critical systems, data, and users in an increasingly complex threat landscape.",
    capabilities: [
      "Security posture assessments",
      "Threat detection & monitoring",
      "Compliance and risk management",
      "Incident readiness & response"
    ],
    cta: { text: "Request a Security Review", href: "/contact" },
    icon: "",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Cybersecurity digital lock and protection systems"
  },
  {
    id: "data",
    title: "Data & Intelligence",
    description: "Turn Data Into a Strategic Asset. We help organizations design, build, and operate complete data ecosystems from raw data ingestion to advanced analytics, data science, and AI‑ready platforms.",
    capabilities: [
      "Data Engineering & Pipelines",
      "Data Platforms & Architecture",
      "Analytics & Business Intelligence",
      "Data Science & Advanced Analytics",
      "Data Governance & Management",
      "AI‑Ready Data Foundations"
    ],
    cta: { text: "Build Your First Dashboard", href: "/calendar" },
    icon: "",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Data analytics dashboard with charts and visualizations"
  },
  {
    id: "ai",
    title: "Artificial Intelligence (AI)",
    description: "Deploy AI that drives real business value. From strategy and data readiness to model development and MLOps, we help enterprises operationalize AI at scale.",
    capabilities: [
      "AI Strategy & Roadmap",
      "Machine Learning Model Development",
      "MLOps & Model Deployment",
      "Computer Vision & NLP Solutions",
      "AI Governance & Ethics",
      "Generative AI Integration"
    ],
    cta: { text: "Explore AI Use Cases", href: "/calendar" },
    icon: "",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Artificial intelligence and machine learning visualization"
  },
  {
    id: "hpc",
    title: "High Performance Computing (HPC)",
    description: "Unlock computational power for research, simulation, and data-intensive workloads with cutting-edge HPC solutions.",
    capabilities: [
      "HPC Cluster Design & Deployment",
      "GPU Acceleration & Optimization",
      "Workload Management & Scheduling",
      "Storage Solutions for Big Data",
      "Cloud HPC & Hybrid Solutions",
      "Performance Tuning & Benchmarking"
    ],
    cta: { text: "Assess Your HPC Needs", href: "/calendar" },
    icon: "",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "High performance computing server room with supercomputers"
  }
];

export function CoreSolutions() {
  // No scroll/animation effects needed for static site

  return (
    <>
      <style jsx>{`
        @media (min-width: 640px) {
          .solutions-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .solutions-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    <section className="core-solutions-section" style={{
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 1.5rem)',
      backgroundColor: 'rgba(5, 5, 5, 0.5)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 4rem)'
        }}>
          <h2 className="solutions-heading" style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Our Core Solutions
          </h2>
          <p className="solutions-heading" style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
            lineHeight: '1.6',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(0.5rem, 2vw, 1rem)'
          }}>
            End‑to‑end technology solutions designed for scale, security, and measurable business impact
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(1.5rem, 3vw, 2rem)'
        }} className="solutions-grid">
          {solutions.map((solution, index) => (
            <div 
              key={solution.id}
              className="solution-card"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image */}
              <div style={{
                height: 'clamp(150px, 25vw, 200px)',
                backgroundImage: `url(${solution.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}>
                {/* Dark overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
                }} />
                
                {/* Icon overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontSize: '2rem',
                  zIndex: 1
                }}>
                  {solution.icon}
                </div>
              </div>
              
              {/* Content */}
              <div style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em'
                }}>
                  {solution.title}
                </h3>
                
                <p style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  lineHeight: '1.6',
                  color: '#9ca3af',
                  marginBottom: '1.5rem'
                }}>
                  {solution.description}
                </p>
                
                {/* Outcomes/Capabilities */}
                <div style={{
                  marginBottom: '2rem',
                  flex: 1
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {solution.outcomes ? 'Key Outcomes' : 'Capabilities'}
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {(solution.outcomes || solution.capabilities)?.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        style={{
                          fontSize: '0.875rem',
                          color: '#9ca3af',
                          marginBottom: '0.5rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#8b0000'
                        }}>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <Link
                  href={solution.cta.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease-in-out',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#a31414';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#8b0000';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {solution.cta.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
