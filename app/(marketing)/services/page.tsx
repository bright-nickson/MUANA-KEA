"use client";

import { useState, useEffect } from "react";

const managedServiceTiers = [
  {
    title: "Basic",
    description: "Foundational monitoring, incident response, and runbook execution for lower-risk workloads.",
    features: ["24/7 Monitoring", "Incident Response", "Basic SLAs", "Monthly Reporting"],
    price: "Contact"
  },
  {
    title: "Premium",
    description: "Enhanced SLAs, deeper observability, and joint change governance for business-critical platforms.",
    features: ["Enhanced SLAs", "Advanced Observability", "Change Governance", "Weekly Reporting", "Dedicated Support"],
    price: "Enterprise"
  },
  {
    title: "Enterprise",
    description: "End-to-end operational ownership, 24/7 coverage, and alignment with internal risk and compliance frameworks.",
    features: ["Full Operational Ownership", "24/7 Coverage", "Risk & Compliance", "Real-time Reporting", "Custom Solutions"],
    price: "Custom"
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      id: 1,
      title: "Cybersecurity",
      description: "Protect critical systems, data, and users in an increasingly complex threat landscape.",
      details: [
        "Security posture assessments",
        "Threat detection & monitoring",
        "Compliance and risk management",
        "Incident readiness & response"
      ],
      color: "#8b0000"
    },
    {
      id: 2,
      title: "Data & Intelligence",
      description: "Turn Data Into a Strategic Asset. We help organizations design, build, and operate complete data ecosystems from raw data ingestion to advanced analytics, data science, and AI‑ready platforms.",
      details: [
        "Data Engineering & Pipelines",
        "Data Platforms & Architecture",
        "Analytics & Business Intelligence",
        "Data Science & Advanced Analytics",
        "Data Governance & Management",
        "AI‑Ready Data Foundations"
      ],
      color: "#8b0000"
    },
    {
      id: 3,
      title: "Artificial Intelligence (AI)",
      description: "Deploy AI that drives real business value. From strategy and data readiness to model development and MLOps, we help enterprises operationalize AI at scale.",
      details: [
        "AI Strategy & Roadmap",
        "Machine Learning Model Development",
        "MLOps & Model Deployment",
        "Computer Vision & NLP Solutions",
        "AI Governance & Ethics",
        "Generative AI Integration"
      ],
      color: "#8b0000"
    },
    {
      id: 4,
      title: "High Performance Computing (HPC)",
      description: "Unlock computational power for research, simulation, and data-intensive workloads with cutting-edge HPC solutions.",
      details: [
        "HPC Cluster Design & Deployment",
        "GPU Acceleration & Optimization",
        "Workload Management & Scheduling",
        "Storage Solutions for Big Data",
        "Cloud HPC & Hybrid Solutions",
        "Performance Tuning & Benchmarking"
      ],
      color: "#8b0000"
    },
    
    {
      id: 5,
      title: "AI Training & Enablement",
      description: "Comprehensive AI training programs to upskill your team and build internal AI capabilities.",
      details: [
        "AI Fundamentals & Strategy Workshops",
        "Machine Learning Model Development Training",
        "MLOps & AI Deployment Training",
        "AI Ethics & Governance Education",
        "Custom AI Use Case Development Sessions",
        "Hands-on AI Project Implementation"
      ],
      color: "#8b0000"
    },
    {
      id: 6,
      title: "Application Development",
      description: "Build scalable, secure, and high-performance applications tailored to your business needs.",
      details: [
        "Custom Application Development",
        "Mobile App Development",
        "Web Application Development",
        "API Development & Integration",
        "Microservices Architecture",
        "DevOps & CI/CD Implementation"
      ],
      color: "#8b0000"
    },
    {
      id: 7,
      title: "Cloud Migration & Management",
      description: "Migrate and manage your infrastructure in the cloud with our expert team.",
      details: [
        "Cloud Migration Strategy",
        "Cloud Infrastructure Management",
        "Cloud Security & Compliance",
        "Cloud Cost Optimization",
        "Cloud Monitoring & Support",
        "Cloud HPC & Hybrid Solutions",
        "Performance Tuning & Benchmarking"
      ],
      color: "#8b0000"
    }
  ];

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #fff0f0 100%);
          color: #1a1a1a;
          overflow-x: hidden;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #8b0000 0%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .premium-card {
          background: linear-gradient(135deg, #ffffff 0%, #fff5f5 50%, #fff0f0 100%);
          border: 1px solid rgba(139, 0, 0, 0.1);
          backdrop-filter: blur(10px);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .premium-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px -12px rgba(139, 0, 0, 0.15);
          border-color: rgba(139, 0, 0, 0.3);
        }
        
        .hero-gradient {
          background: linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #fff0f0 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #8b0000, transparent);
          animation: shimmer 3s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        .floating-element {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .service-number {
          background: linear-gradient(135deg, #8b0000 0%, #dc2626 100%);
          color: white;
          font-weight: 800;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          box-shadow: 0 10px 25px -5px rgba(139, 0, 0, 0.3);
        }
        
        .tier-card {
          background: linear-gradient(135deg, #ffffff 0%, #fff5f5 50%, #fff0f0 100%);
          border: 2px solid transparent;
          background-clip: padding-box;
          position: relative;
          transition: all 0.3s ease;
        }
        
        .tier-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(135deg, #8b0000, #dc2626);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .tier-card:hover::before {
          opacity: 1;
        }
        
        .tier-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(139, 0, 0, 0.2);
        }
        
        @media (max-width: 768px) {
          .service-grid {
            grid-template-columns: 1fr !important;
          }
          .tier-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .service-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .tier-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1025px) {
          .service-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .tier-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>

      <div style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #fff0f0 100%)' }}>
        {/* Premium Hero Section */}
        <section className="hero-gradient" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 2rem)',
          position: 'relative'
        }}>
          {/* Floating Background Elements */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139, 0, 0, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 8s ease-in-out infinite'
          }} />
          
          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 0, 0, 0.08) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'float 10s ease-in-out infinite reverse'
          }} />

          {/* Hero Content */}
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            zIndex: 2
          }}>
            <h1 style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              fontWeight: '900',
              lineHeight: '1.1',
              marginBottom: '2rem',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #8b0000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              Our Premium
              <br />
              <span className="gradient-text">Services</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              lineHeight: '1.8',
              color: '#4a5568',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              fontWeight: '400'
            }}>
              Mauna Kea Consulting delivers enterprise-grade advisory, development, and managed services 
              that transform your technology landscape while maintaining operational excellence.
            </p>

            {/* CTA Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '3rem'
            }}>
              <button 
                onClick={() => window.location.href = '/contact'}
                style={{
                  background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px -5px rgba(139, 0, 0, 0.3)'
                }}
              >
                Schedule Consultation
              </button>
              <button 
                onClick={() => window.location.href = '/about'}
                style={{
                  background: 'transparent',
                  color: '#8b0000',
                  border: '2px solid #8b0000',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Services Section */}
        <section style={{
          padding: 'clamp(2rem, 5vw, 6rem) clamp(1rem, 3vw, 2rem)',
          background: 'linear-gradient(180deg, #ffffff 0%, #fff5f5 50%, #fff0f0 100%)'
        }}>
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <h2 style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: '900',
                marginBottom: '1.5rem',
                background: 'linear-gradient(135deg, #1a1a1a 0%, #8b0000 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Comprehensive Service Portfolio
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#4a5568',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                From strategic advisory to operational excellence, our services cover the entire technology lifecycle
              </p>
            </div>

            {/* Service Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: activeService === index ? '2px solid #8b0000' : '1px solid #e2e8f0',
                    background: activeService === index ? 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)' : 'white',
                    color: activeService === index ? 'white' : '#4a5568',
                    borderRadius: '50px',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {service.title}
                </button>
              ))}
            </div>

            {/* Active Service Display */}
            <div className="premium-card" style={{
              padding: '3rem',
              borderRadius: '1.5rem',
              textAlign: 'center'
            }}>
              <div className="service-number" style={{
                margin: '0 auto 2rem',
                fontSize: '2rem'
              }}>
                {String(services[activeService].id).padStart(2, '0')}
              </div>
              
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                {services[activeService].title}
              </h3>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#4a5568',
                marginBottom: '2rem',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                {services[activeService].description}
              </p>
              
              <div style={{
                textAlign: 'left',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                {services[activeService].details.map((detail, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                    padding: '1rem',
                    background: 'rgba(139, 0, 0, 0.05)',
                    borderRadius: '0.75rem',
                    borderLeft: '4px solid #8b0000'
                  }}>
                    <span style={{
                      color: '#8b0000',
                      marginRight: '1rem',
                      fontSize: '1.25rem',
                      fontWeight: 'bold'
                    }}>
                      ✓
                    </span>
                    <span style={{
                      color: '#4a5568',
                      lineHeight: '1.6',
                      fontSize: '0.95rem'
                    }}>
                      {detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enterprise CTA Section */}
        <section style={{
          padding: 'clamp(3rem, 5vw, 6rem) clamp(1rem, 3vw, 2rem)',
          background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '900',
              marginBottom: '2rem'
            }}>
              Ready to Transform Your Enterprise?
            </h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '3rem',
              lineHeight: '1.8',
              opacity: 0.9
            }}>
              Join 500+ enterprises that trust Mauna Kea Consulting for their technology transformation journey
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <button 
                onClick={() => window.location.href = '/contact'}
                style={{
                  background: 'white',
                  color: '#8b0000',
                  border: 'none',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)'
                }}
              >
                Start Your Journey
              </button>
              <button 
                onClick={() => {
                  // Create a simple brochure download
                  const brochureContent = `
Mauna Kea Consulting - Services Brochure

Our Core Services:
1. Cybersecurity
2. Data & Intelligence
3. Artificial Intelligence (AI)
4. High Performance Computing (HPC)
5. AI Training & Enablement
6. Application Development
7. Cloud Migration & Management

Contact us: info@maunakeaconsulting.com
                  `;
                  const blob = new Blob([brochureContent], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'MaunaKea-Services-Brochure.txt';
                  document.body.appendChild(a);
                  a.click();
                  document.body.removeChild(a);
                  window.URL.revokeObjectURL(url);
                }}
                style={{
                  background: 'transparent',
                  color: 'white',
                  border: '2px solid white',
                  padding: '1rem 2.5rem',
                  borderRadius: '50px',
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
