"use client";

import { useState, useEffect } from "react";

const industries = [
  {
    id: 1,
    title: "Banking & Financial Services",
    description: "Supporting banks, payment providers, and financial institutions as they modernise core platforms and channels.",
    outcomes: [
      "Improved resilience and observability for core transaction flows",
      "Roadmaps that balance regulatory change, modernisation, and cost",
      "Delivery structures that align technology change with risk and compliance expectations"
    ],
    stats: { clients: "150+", projects: "500+", experience: "15+ years" }
  },
  {
    id: 2,
    title: "Public Sector & Government",
    description: "Helping public institutions design, deliver, and operate services that citizens and businesses can rely on.",
    outcomes: [
      "Platforms that are robust, auditable, and transparent in their operation",
      "Procurement and delivery models that support long-term maintainability",
      "Cross-agency integration patterns that respect data protection requirements"
    ],
    stats: { clients: "200+", projects: "750+", experience: "20+ years" }
  },
  {
    id: 3,
    title: "Energy & Utilities",
    description: "Working with energy and utility providers on platforms that support operations, customers, and regulators.",
    outcomes: [
      "Integration between OT, IT, and customer-facing systems",
      "Data platforms that support planning, reliability, and reporting",
      "Governance structures that manage risk across complex partner ecosystems"
    ],
    stats: { clients: "100+", projects: "300+", experience: "12+ years" }
  },
  {
    id: 4,
    title: "Healthcare",
    description: "Supporting healthcare providers and partners with platforms that handle sensitive data and critical services.",
    outcomes: [
      "Architectures that protect patient data while enabling collaboration",
      "Operational models that can support high-availability requirements",
      "Change approaches that respect clinical, regulatory, and operational constraints"
    ],
    stats: { clients: "80+", projects: "250+", experience: "10+ years" }
  },
  {
    id: 5,
    title: "Mining & Natural Resources",
    description: "Enabling mining and resources organisations to connect operational, financial, and partner ecosystems.",
    outcomes: [
      "Integration between operational systems, supply chains, and finance",
      "Data capabilities that inform safety, productivity, and sustainability initiatives",
      "Delivery models tuned to remote operations and distributed teams"
    ],
    stats: { clients: "60+", projects: "200+", experience: "8+ years" }
  },
  {
    id: 6,
    title: "Telecommunications",
    description: "Working with telecom operators and service providers on platforms that support connectivity and digital services.",
    outcomes: [
      "Modernisation of BSS/OSS landscapes without disrupting core services",
      "API and event architectures that enable new products and partnerships",
      "Managed services that stabilise complex multi-vendor environments"
    ],
    stats: { clients: "90+", projects: "400+", experience: "18+ years" }
  },
  {
    id: 7,
    title: "Manufacturing",
    description: "Helping manufacturers connect production, supply chain, and commercial platforms.",
    outcomes: [
      "Integration patterns that reduce manual reconciliation and latency",
      "Data visibility for planning, quality, and performance management",
      "Secure connectivity between plants, partners, and corporate functions"
    ],
    stats: { clients: "120+", projects: "350+", experience: "14+ years" }
  },
  {
    id: 8,
    title: "Retail & Distribution",
    description: "Supporting retailers and distributors as they align store, e-commerce, and fulfilment operations.",
    outcomes: [
      "Unified views of inventory, pricing, and customer interactions",
      "Platforms that support new channels without fragmenting operations",
      "Integration with payment, logistics, and partner ecosystems"
    ],
    stats: { clients: "180+", projects: "600+", experience: "16+ years" }
  },
  {
    id: 9,
    title: "Education",
    description: "Working with education providers and partners to modernise learning and administrative platforms.",
    outcomes: [
      "Platforms that support blended and remote learning models",
      "Data capabilities for outcomes tracking and regulatory reporting",
      "Governance that balances innovation with duty-of-care obligations"
    ],
    stats: { clients: "70+", projects: "180+", experience: "9+ years" }
  },
  {
    id: 10,
    title: "Legal & Professional Services",
    description: "Supporting legal and professional services firms as they digitise workflows and client interaction.",
    outcomes: [
      "Matter, document, and knowledge platforms that are secure and accessible",
      "Integration with client, finance, and risk platforms",
      "Change approaches that respect partnership governance and culture"
    ],
    stats: { clients: "50+", projects: "150+", experience: "7+ years" }
  }
];

export default function IndustriesPage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          background: #ffffff;
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
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
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
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%);
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
        
        .industry-number {
          background: linear-gradient(135deg, #8b0000 0%, #dc2626 100%);
          color: white;
          font-weight: 800;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          box-shadow: 0 8px 20px -5px rgba(139, 0, 0, 0.3);
        .industry-card {
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border: 1px solid rgba(139, 0, 0, 0.1);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .industry-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(139, 0, 0, 0.05), transparent);
          transition: left 0.6s ease;
        }
        
        .industry-card:hover::before {
          left: 100%;
        }
        
        .industry-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 30px 60px -15px rgba(139, 0, 0, 0.25);
          border-color: rgba(139, 0, 0, 0.4);
        }
        
        .industry-header {
          position: relative;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(139, 0, 0, 0.05) 0%, rgba(220, 38, 38, 0.02) 100%);
          border-bottom: 1px solid rgba(139, 0, 0, 0.1);
          margin: -2rem -2rem 1.5rem -2rem;
        }
        
        .industry-number {
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
          position: absolute;
          top: 1rem;
          right: 1rem;
        }
        
        .stat-badge {
          background: linear-gradient(135deg, #8b0000 0%, #dc2626 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 50px;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 12px -2px rgba(139, 0, 0, 0.2);
          transition: all 0.3s ease;
        }
        
        .stat-badge:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px -4px rgba(139, 0, 0, 0.3);
        }
        
        @media (max-width: 768px) {
          .industry-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        @media (min-width: 769px) and (max-width: 1024px) {
          .industry-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        @media (min-width: 1025px) {
          .industry-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>

      <div style={{ background: '#ffffff' }}>
        {/* Premium Hero Section */}
        <section className="hero-gradient" style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 'clamp(1rem, 5vw, 2rem)',
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
              Industries We
              <br />
              <span className="gradient-text">Transform</span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              lineHeight: '1.8',
              color: '#4a5568',
              maxWidth: '800px',
              margin: '0 auto 3rem',
              fontWeight: '400'
            }}>
              Mauna Kea Consulting partners with organizations across critical industries to deliver 
              technology solutions that drive operational excellence and business transformation.
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
                Explore Your Industry
              </button>
              <button 
                onClick={() => window.location.href = '/services'}
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
                View All Services
              </button>
            </div>
          </div>
        </section>

        {/* Interactive Industries Section */}
        <section style={{
          padding: 'clamp(3rem, 5vw, 6rem) clamp(1rem, 4vw, 2rem)',
          background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)'
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
                Industry-Specific Solutions
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#4a5568',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                Deep expertise across critical industries with tailored approaches for unique challenges
              </p>
            </div>

            {/* Industry Tabs */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}>
              {industries.map((industry, index) => (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndustry(index)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    border: activeIndustry === index ? '2px solid #8b0000' : '1px solid #e2e8f0',
                    background: activeIndustry === index ? 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)' : 'white',
                    color: activeIndustry === index ? 'white' : '#4a5568',
                    borderRadius: '50px',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {industry.title.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Industry Display */}
            <div className="premium-card" style={{
              padding: '3rem',
              borderRadius: '1.5rem',
              textAlign: 'center'
            }}>
              <div className="industry-number" style={{
                margin: '0 auto 2rem'
              }}>
                {String(industries[activeIndustry].id).padStart(2, '0')}
              </div>
              
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '800',
                marginBottom: '1rem',
                color: '#1a1a1a'
              }}>
                {industries[activeIndustry].title}
              </h3>
              
              <p style={{
                fontSize: '1.125rem',
                color: '#4a5568',
                marginBottom: '2rem',
                lineHeight: '1.8',
                maxWidth: '600px',
                margin: '0 auto 2rem'
              }}>
                {industries[activeIndustry].description}
              </p>
              
              {/* Industry Stats */}
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '1rem',
                marginBottom: '2rem',
                flexWrap: 'wrap'
              }}>
                <span className="stat-badge">{industries[activeIndustry].stats.clients} Clients</span>
                <span className="stat-badge">{industries[activeIndustry].stats.projects} Projects</span>
                <span className="stat-badge">{industries[activeIndustry].stats.experience} Experience</span>
              </div>
              
              <div style={{
                textAlign: 'left',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#8b0000',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  Key Outcomes
                </h4>
                {industries[activeIndustry].outcomes.map((outcome, index) => (
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
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* All Industries Grid */}
        <section style={{
          padding: '6rem 2rem',
          background: '#ffffff'
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
                All Industries
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#4a5568',
                maxWidth: '700px',
                margin: '0 auto',
                lineHeight: '1.8'
              }}>
                Comprehensive expertise across critical sectors
              </p>
            </div>

            <div className="industry-grid" style={{
              display: 'grid',
              gap: '2rem',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))'
            }}>
              {industries.map((industry, index) => (
                <div key={industry.id} className="industry-card" style={{
                  padding: '0',
                  borderRadius: '1.5rem',
                  cursor: 'pointer'
                }}>
                  <div className="industry-header">
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '800',
                      color: '#1a1a1a',
                      margin: 0,
                      paddingRight: '4rem'
                    }}>
                      {industry.title}
                    </h3>
                    <div className="industry-number">
                      {String(industry.id).padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div style={{ padding: '2rem' }}>
                    <p style={{
                      fontSize: '1rem',
                      color: '#4a5568',
                      lineHeight: '1.7',
                      marginBottom: '2rem'
                    }}>
                      {industry.description}
                    </p>
                    
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '1rem'
                    }}>
                      <div style={{
                        display: 'flex',
                        gap: '0.75rem',
                        flexWrap: 'wrap'
                      }}>
                        <span className="stat-badge">{industry.stats.clients} Clients</span>
                        <span className="stat-badge">{industry.stats.projects} Projects</span>
                      </div>
                      <button 
                        onClick={() => {
                          setActiveIndustry(index);
                          const element = document.querySelector('.premium-card');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }
                        }}
                        style={{
                          background: 'linear-gradient(135deg, #8b0000 0%, #dc2626 100%)',
                          color: 'white',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '50px',
                          fontSize: '0.875rem',
                          fontWeight: '700',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                          boxShadow: '0 4px 12px -2px rgba(139, 0, 0, 0.3)',
                          whiteSpace: 'nowrap'
                        }}
                      >
                        Explore →
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise CTA Section */}
        <section style={{
          padding: '6rem 2rem',
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
              Transform Your Industry
            </h2>
            <p style={{
              fontSize: '1.25rem',
              marginBottom: '3rem',
              lineHeight: '1.8',
              opacity: 0.9
            }}>
              Partner with Mauna Kea Consulting to drive innovation and operational excellence in your sector
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
                Start Your Transformation
              </button>
              <button 
                onClick={() => {
                  const content = `
Mauna Kea Consulting - Industry Expertise

Industries We Serve:
${industries.map(ind => `${ind.id}. ${ind.title}`).join('\n')}

Contact us: info@maunakeaconsulting.com
                  `;
                  const blob = new Blob([content], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'MaunaKea-Industries.txt';
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
                Download Industries Overview
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
