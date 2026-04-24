"use client";

import { useState, useEffect } from "react";

const industries = [
  {
    id: 1,
    title: "Banking & Financial Services",
    description: "Supporting banks, payment providers, and financial institutions as they modernise core platforms and channels.",
    outcomes: [
      "Strengthen cybersecurity across core and digital banking systems",
      "Reduce fraud exposure with secure, data‑driven controls",
      "Meet evolving regulatory and compliance requirements"
    ],
    aiUseCases: [
      { useCase: "Fraud Detection", description: "Real‑time anomaly detection", example: "Visa, Mastercard", solution: "ML scoring engine + real‑time monitoring" },
      { useCase: "Conversational Banking", description: "AI chatbots for customers", example: "Bank of America Erica", solution: "Gen‑AI assistant with RAG" },
      { useCase: "Credit Risk Scoring", description: "Predict loan defaults", example: "Capital One", solution: "ML risk models integrated with loan systems" },
      { useCase: "AML Monitoring", description: "Detect suspicious activity", example: "HSBC", solution: "Graph‑based AML models" },
      { useCase: "Personalized Offers", description: "Tailored product recommendations", example: "Revolut", solution: "Recommendation engine" }
    ]
  },
  {
    id: 2,
    title: "Public Sector & Government",
    description: "Helping public institutions design, deliver, and operate services that citizens and businesses can rely on.",
    outcomes: [
      "Protect citizen data and national digital infrastructure",
      "Improve resilience of mission‑critical public systems",
      "Ensure compliance across ministries, agencies, and digital services"
    ],
    aiUseCases: [
      { useCase: "Citizen Service Automation", description: "AI chatbots for public services", example: "Singapore GovTech", solution: "Multilingual RAG chatbot" },
      { useCase: "Predictive Policing", description: "Crime hotspot prediction", example: "LAPD pilots", solution: "ML hotspot forecasting" },
      { useCase: "Smart City Ops", description: "Traffic, waste, utilities optimization", example: "Dubai Smart City", solution: "IoT + AI orchestration" },
      { useCase: "Document Automation", description: "Automate forms & workflows", example: "HMRC", solution: "RPA + AI extraction" },
      { useCase: "Policy Analytics", description: "Data‑driven policymaking", example: "EU climate models", solution: "AI simulation + scenario modelling" }
    ]
  },
  {
    id: 3,
    title: "Energy & Utilities",
    description: "Working with energy and utility providers on platforms that support operations, customers, and regulators.",
    outcomes: [
      "Secure OT/IT environments against operational disruption",
      "Enhance grid and plant reliablity across distributed assets",
      "Improved safety across high-risk operational developments"
    ],
    aiUseCases: [
      { useCase: "Predictive Maintenance", description: "Detect turbine/transformer failures", example: "GE", solution: "IoT + ML anomaly detection" },
      { useCase: "Smart Grid Optimization", description: "Balance load & prevent outages", example: "National Grid", solution: "Grid‑level optimization" },
      { useCase: "Renewable Forecasting", description: "Predict solar/wind output", example: "Iberdrola", solution: "Weather + ML forecasting" },
      { useCase: "Demand Prediction", description: "Forecast consumption", example: "UK ESO", solution: "ML demand engine" },
      { useCase: "Drone Inspections", description: "Automated asset inspection", example: "Shell", solution: "CV + autonomous drones" }
    ]
  },
  {
    id: 4,
    title: "Healthcare",
    description: "Supporting healthcare providers and partners with platforms that handle sensitive data and critical services.",
    outcomes: [
      "Safeguard patient information and clinical systems",
      "Maintain compliance with health data regulations",
      "Ensure reliability of digital and administrative platforms"
    ],
    aiUseCases: [
      { useCase: "AI Imaging", description: "Detect anomalies in scans", example: "Viz.ai", solution: "AI imaging models" },
      { useCase: "Virtual Wards", description: "Remote monitoring", example: "NHS", solution: "Wearables + AI alerts" },
      { useCase: "Triage Chatbots", description: "Symptom assessment", example: "Babylon", solution: "Guard‑railed medical chatbot" },
      { useCase: "Clinical Decision Support", description: "Evidence‑based recommendations", example: "Oncology AI tools", solution: "CDSS integrated with EHR" },
      { useCase: "Admin Automation", description: "Reduce clinician paperwork", example: "Ambient AI scribes", solution: "AI note‑taking + RPA" }
    ]
  },
  {
    id: 5,
    title: "Mining & Natural Resources",
    description: "Enabling mining and resources organisations to connect operational, financial, and partner ecosystems.",
    outcomes: [
      "Improve workforce and site safety across remote operations",
      "Secure operational technologies and connected equipment",
      "Reduce environmental and operational exposure"
    ],
    aiUseCases: [
      { useCase: "Predictive Equipment Maintenance", description: "Detect failures in heavy machinery", example: "Rio Tinto", solution: "IoT + ML maintenance" },
      { useCase: "Ore Grade Prediction", description: "Optimize extraction quality", example: "BHP", solution: "ML geological modelling" },
      { useCase: "Autonomous Haulage", description: "Self‑driving mining trucks", example: "Komatsu AHS", solution: "AI‑driven fleet automation" },
      { useCase: "Safety Monitoring", description: "Detect hazards in real time", example: "Anglo American", solution: "CV + sensor fusion" },
      { useCase: "Energy Optimization", description: "Reduce fuel & power usage", example: "Vale", solution: "AI energy‑efficiency models" }
    ]
  },
  {
    id: 6,
    title: "Telecommunications",
    description: "Working with telecom operators and service providers on platforms that support connectivity and digital services.",
    outcomes: [
      "Strengthen network and infrastructure security",
      "Protect customer data across digital channels",
      "Maintain resilience across high‑availability systems"
    ],
    aiUseCases: [
      { useCase: "Network Optimization", description: "Predict congestion & outages", example: "Vodafone", solution: "AI network orchestration" },
      { useCase: "Customer Service Automation", description: "AI chatbots for support", example: "MTN", solution: "Gen‑AI customer assistant" },
      { useCase: "Churn Prediction", description: "Identify customers likely to leave", example: "Airtel", solution: "ML churn models" },
      { useCase: "Fraud Detection", description: "SIM fraud, subscription fraud", example: "Orange", solution: "Real‑time anomaly detection" },
      { useCase: "Predictive Maintenance", description: "Tower & fiber monitoring", example: "AT&T", solution: "IoT + ML fault prediction" }
    ]
  },
  {
    id: 7,
    title: "Manufacturing",
    description: "Helping manufacturers connect production, supply chain, and commercial platforms.",
    outcomes: [
      "Secure production lines and connected factory systems",
      "Minimize downtime risks across automated environments",
      "Protect supply chain and operational data flows"
    ],
    aiUseCases: [
      { useCase: "Predictive Maintenance", description: "Detect machine failures", example: "Siemens", solution: "IoT + ML" },
      { useCase: "Quality Inspection", description: "Detect defects via vision", example: "BMW", solution: "Computer vision QA" },
      { useCase: "Supply Chain Optimization", description: "Predict disruptions", example: "Toyota", solution: "ML forecasting" },
      { useCase: "Digital Twins", description: "Simulate factory operations", example: "GE", solution: "Real‑time simulation" },
      { useCase: "Robotics Automation", description: "AI‑driven robots", example: "Tesla", solution: "Autonomous robotic workflows" }
    ]
  },
  {
    id: 8,
    title: "Retail & Distribution",
    description: "Supporting retailers and distributors as they align store, e-commerce, and fulfilment operations.",
    outcomes: [
      "Protect customer and transaction data",
      "Secure digital commerce and omnichannel platforms",
      "Reduce vulnerabilities across logistics and inventory systems"
    ],
    aiUseCases: [
      { useCase: "Demand Forecasting", description: "Predict product demand", example: "Walmart", solution: "ML forecasting" },
      { useCase: "Personalized Marketing", description: "Tailored recommendations", example: "Amazon", solution: "Recommendation engine" },
      { useCase: "Inventory Optimization", description: "Reduce stockouts", example: "Zara", solution: "AI inventory planning" },
      { useCase: "Computer Vision Checkout", description: "Automated checkout", example: "Amazon Go", solution: "CV‑based checkout" },
      { useCase: "Price Optimization", description: "Dynamic pricing", example: "Uber, airlines", solution: "AI price‑elasticity models" }
    ]
  },
  {
    id: 9,
    title: "Education",
    description: "Transforming education institutions with advanced technology solutions for modern learning environments and streamlined administrative operations.",
    outcomes: [
      "Safeguard sensitive client and case information",
      "Ensure confidentiality across digital workflows",
      "Maintain compliance with data protection regulations"
    ],
    aiUseCases: [
      { useCase: "Personalized Learning", description: "Adaptive learning paths", example: "Khan Academy AI", solution: "ML learning models" },
      { useCase: "Automated Grading", description: "AI‑assisted marking", example: "Coursera", solution: "NLP grading tools" },
      { useCase: "Student Risk Prediction", description: "Identify at‑risk learners", example: "US universities", solution: "ML dropout prediction" },
      { useCase: "Virtual Tutors", description: "AI teaching assistants", example: "Duolingo Max", solution: "Gen‑AI tutor" },
      { useCase: "Admin Automation", description: "Automate school workflows", example: "EdTech platforms", solution: "RPA + AI document processing" }
    ]
  },
  {
    id: 10,
    title: "Legal & Professional Services",
    description: "Supporting legal and professional services firms as they digitise workflows and client interaction.",
    outcomes: [
      "Protect student and institutional data",
      "Secure digital learning  and administrative platforms",
      "Ensure continuity across academic systems"
    ],
    aiUseCases: [
      { useCase: "Contract Review", description: "AI extracts clauses & risks", example: "Kira Systems", solution: "NLP contract analysis" },
      { useCase: "Legal Research Automation", description: "Summaries & case retrieval", example: "Lexis+ AI", solution: "Gen‑AI research assistant" },
      { useCase: "E‑Discovery", description: "Identify relevant documents", example: "Relativity", solution: "AI document classification" },
      { useCase: "Compliance Monitoring", description: "Track regulatory changes", example: "BigLaw firms", solution: "AI regulatory intelligence" },
      { useCase: "Document Drafting", description: "AI‑assisted drafting", example: "Harvey AI", solution: "Gen‑AI drafting engine" }
    ]
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
          background: linear-gradient(135deg, #ffffff 0%, #fff5f5 50%, #fff0f0 100%);
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

      <div style={{ background: 'linear-gradient(135deg, #fff5f5 0%, #ffffff 50%, #fff0f0 100%)' }}>
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
                  Strategic Priorities for Your Industry
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

              {/* AI Use Cases Table */}
              <div style={{
                marginTop: '3rem',
                textAlign: 'left'
              }}>
                <h4 style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#8b0000',
                  marginBottom: '1.5rem',
                  textAlign: 'center'
                }}>
                  AI Use Cases
                </h4>
                <div style={{
                  background: 'rgba(139, 0, 0, 0.03)',
                  border: '1px solid rgba(139, 0, 0, 0.15)',
                  borderRadius: '0.75rem',
                  overflow: 'hidden'
                }}>
                  {/* Table Header */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '0.75rem',
                    padding: '1rem',
                    background: 'rgba(139, 0, 0, 0.1)',
                    borderBottom: '1px solid rgba(139, 0, 0, 0.15)',
                    fontWeight: '600',
                    fontSize: '0.8rem',
                    color: '#8b0000'
                  }}>
                    <div>Use Case</div>
                    <div>Description</div>
                    <div>Example</div>
                    <div>Solution</div>
                  </div>
                  {/* Table Rows */}
                  {industries[activeIndustry].aiUseCases.map((row, index) => (
                    <div
                      key={index}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(4, 1fr)',
                        gap: '0.75rem',
                        padding: '1rem',
                        borderBottom: index < industries[activeIndustry].aiUseCases.length - 1 ? '1px solid rgba(139, 0, 0, 0.08)' : 'none',
                        fontSize: '0.8rem',
                        background: index % 2 === 0 ? 'white' : 'rgba(139, 0, 0, 0.02)'
                      }}
                    >
                      <div style={{ fontWeight: '600', color: '#1a1a1a' }}>{row.useCase}</div>
                      <div style={{ color: '#4a5568' }}>{row.description}</div>
                      <div style={{ color: '#4a5568' }}>{row.example}</div>
                      <div style={{ color: '#4a5568' }}>{row.solution}</div>
                    </div>
                  ))}
                </div>
              </div>
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
