"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HealthcarePage() {
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
            Healthcare
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Secure, compliant, and innovative digital transformation solutions for healthcare providers, pharmaceutical companies, and medical device manufacturers across Africa and the Middle East.
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
              Book Healthcare Consultation
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
              Request HIPAA Compliance Assessment
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
              Healthcare Challenges
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Patient Data Security",
                  description: "Protect sensitive patient information and medical records while enabling secure data sharing for coordinated care."
                },
                {
                  title: "Regulatory Compliance",
                  description: "Navigate complex healthcare regulations including HIPAA, GDPR, and regional healthcare data protection laws."
                },
                {
                  title: "Digital Health Integration",
                  description: "Integrate electronic health records, telemedicine, and digital health platforms while ensuring interoperability."
                },
                {
                  title: "Operational Efficiency",
                  description: "Optimize hospital operations, resource allocation, and patient care delivery through advanced analytics and automation."
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
              Healthcare Solutions
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Electronic Health Records (EHR)",
                  description: "Deploy secure, interoperable EHR systems with advanced analytics and patient portal integration.",
                  outcomes: ["Improved patient care", "Data interoperability", "Clinical insights", "Patient engagement"]
                },
                {
                  title: "Telemedicine Platforms",
                  description: "Build comprehensive telehealth solutions with video consultations, remote monitoring, and digital prescriptions.",
                  outcomes: ["Expanded access", "Reduced costs", "Convenience", "Continuous care"]
                },
                {
                  title: "Healthcare Analytics",
                  description: "Implement advanced analytics for population health, predictive modeling, and clinical decision support.",
                  outcomes: ["Better outcomes", "Cost reduction", "Predictive insights", "Quality improvement"]
                },
                {
                  title: "Medical Imaging & AI",
                  description: "Deploy AI-powered medical imaging analysis and diagnostic support systems for radiology and pathology.",
                  outcomes: ["Faster diagnosis", "Improved accuracy", "Workflow efficiency", "Decision support"]
                },
                {
                  title: "Pharmacy Management Systems",
                  description: "Create integrated pharmacy management solutions with inventory control, prescription management, and clinical integration.",
                  outcomes: ["Medication safety", "Inventory optimization", "Workflow efficiency", "Cost control"]
                },
                {
                  title: "Clinical Trial Management",
                  description: "Develop platforms for clinical trial management, patient recruitment, and research data analytics.",
                  outcomes: ["Trial efficiency", "Data integrity", "Patient recruitment", "Research acceleration"]
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
              Healthcare Compliance Standards
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem'
            }}>
              {[
                "HIPAA Compliance",
                "HITECH Act",
                "GDPR & Data Protection",
                "FDA Regulations",
                "ISO 27001",
                "SOC 2 Type II",
                "HL7 Standards",
                "FHIR Interoperability"
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
              Transform Healthcare Delivery
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              marginBottom: '2rem'
            }}>
              From telemedicine pilots to comprehensive digital health platforms, we help healthcare organizations innovate while maintaining security and compliance.
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
                Request Healthcare Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
