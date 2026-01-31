"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PublicSectorGovernmentPage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #050505 0%, #0a0a0a 50%, #050505 100%)',
      color: '#e5e5e5',
      fontFamily: 'Inter, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1rem',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Public Sector & Government
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Secure, scalable, and compliant digital transformation solutions for government agencies and public sector organizations across Africa and the Middle East.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <Link
              href="/calendar"
              style={{
                display: 'inline-flex',
                fontSize: '1rem',
                fontWeight: '600',
                backgroundColor: '#8b0000',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
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
              Book Government Consultation
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                fontSize: '1rem',
                fontWeight: '600',
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '0.75rem 2rem',
                borderRadius: '0.5rem',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
              }}
            >
              Request Security Assessment
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Challenges Section */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem',
        backgroundColor: 'rgba(5, 5, 5, 0.5)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Public Sector Challenges
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Legacy System Modernization",
                  description: "Transform outdated government systems while ensuring continuity of essential public services and data integrity."
                },
                {
                  title: "Cybersecurity & National Security",
                  description: "Protect critical government infrastructure and sensitive citizen data from sophisticated cyber threats and nation-state attacks."
                },
                {
                  title: "Digital Service Delivery",
                  description: "Implement citizen-centric digital services that are accessible, efficient, and secure across all demographics."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Navigate complex government regulations, data sovereignty requirements, and inter-agency compliance standards."
                }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '1rem',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: '#ffffff'
                  }}>
                    {challenge.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#9ca3af'
                  }}>
                    {challenge.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Government Digital Solutions
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Secure Cloud Infrastructure",
                  description: "Deploy government-compliant cloud solutions with data sovereignty, encryption, and secure access controls.",
                  outcomes: ["Data sovereignty compliance", "Enhanced security", "Cost optimization", "Scalable infrastructure"]
                },
                {
                  title: "Digital Identity & Authentication",
                  description: "Implement secure digital identity solutions for citizens, employees, and inter-agency collaboration.",
                  outcomes: ["Secure authentication", "Single sign-on", "Identity verification", "Access management"]
                },
                {
                  title: "E-Government Platforms",
                  description: "Build comprehensive digital platforms for public services, permits, licensing, and citizen engagement.",
                  outcomes: ["Improved service delivery", "Reduced processing times", "Citizen satisfaction", "Transparency"]
                },
                {
                  title: "Cybersecurity Operations",
                  description: "Establish advanced security operations centers with threat monitoring and incident response capabilities.",
                  outcomes: ["Threat detection", "Incident response", "Security monitoring", "Compliance reporting"]
                },
                {
                  title: "Data Analytics & Governance",
                  description: "Create data platforms for policy insights, performance monitoring, and evidence-based decision making.",
                  outcomes: ["Data-driven policies", "Performance insights", "Transparency", "Accountability"]
                },
                {
                  title: "Smart City Solutions",
                  description: "Deploy IoT and AI solutions for urban management, traffic control, and public safety optimization.",
                  outcomes: ["Efficient services", "Resource optimization", "Public safety", "Sustainability"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(10, 10, 10, 0.6)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    borderRadius: '1rem',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.25rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: '#ffffff'
                  }}>
                    {solution.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#9ca3af',
                    marginBottom: '1.5rem'
                  }}>
                    {solution.description}
                  </p>
                  <div style={{
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '1rem'
                  }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '0.75rem'
                    }}>
                      Key Outcomes:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {solution.outcomes.map((outcome, outcomeIndex) => (
                        <li
                          key={outcomeIndex}
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
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem',
        backgroundColor: 'rgba(5, 5, 5, 0.5)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '3rem',
              textAlign: 'center'
            }}>
              Government Compliance Standards
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                "FedRAMP",
                "FISMA Compliance",
                "NIST Framework",
                "GDPR & Data Protection",
                "ISO 27001",
                "SOC 2 Type II",
                "CMMC",
                "Government Cloud Standards"
              ].map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  style={{
                    backgroundColor: 'rgba(139, 0, 0, 0.1)',
                    border: '1px solid rgba(139, 0, 0, 0.3)',
                    borderRadius: '0.5rem',
                    padding: '1rem',
                    textAlign: 'center'
                  }}
                >
                  <span style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff'
                  }}>
                    {standard}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '1.5rem'
            }}>
              Modernize Public Services
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              marginBottom: '2rem'
            }}>
              From pilot projects to full-scale digital transformation, we help government agencies deliver secure, efficient, and citizen-centric services.
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                href="/calendar"
                style={{
                  display: 'inline-flex',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out'
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
                Pilot → Prove → Scale
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  fontSize: '1rem',
                  fontWeight: '600',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  padding: '0.75rem 2rem',
                  borderRadius: '0.5rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                }}
              >
                Request Government Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
