"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CybersecurityPage() {
  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      minHeight: '100vh'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            marginBottom: '1.5rem',
            letterSpacing: '-0.025em',
            lineHeight: 1.1
          }}>
            Cybersecurity
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Protect critical systems, data, and users with enterprise-grade security architecture, threat detection, and compliance management designed for complex environments.
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
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: '#8b0000',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              🔒 Book Security Assessment
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                backgroundColor: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              Request Security Review
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
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
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Security by Design, Not by Accident
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              We embed security into every layer of your technology stack, from infrastructure to applications, ensuring comprehensive protection against evolving threats while maintaining business agility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Cybersecurity Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "Security Architecture & Posture Management",
                description: "Design and implement comprehensive security frameworks that protect your entire technology ecosystem.",
                features: ["Zero Trust architecture", "Security baselines", "Cloud security posture", "Identity & access management"]
              },
              {
                title: "Threat Detection & Monitoring",
                description: "Advanced threat intelligence and real-time monitoring to detect and respond to security incidents.",
                features: ["SIEM implementation", "Threat hunting", "Security analytics", "24/7 monitoring"]
              },
              {
                title: "Risk, Compliance & Governance",
                description: "Ensure regulatory compliance and establish robust governance frameworks for enterprise security.",
                features: ["Risk assessments", "Compliance automation", "Policy management", "Audit support"]
              },
              {
                title: "Incident Readiness & Response",
                description: "Prepare for and respond to security incidents with minimal business impact and rapid recovery.",
                features: ["Incident response planning", "Forensic analysis", "Breach containment", "Recovery procedures"]
              },
              {
                title: "Application Security",
                description: "Secure applications throughout the development lifecycle with comprehensive testing and protection.",
                features: ["Secure code review", "Penetration testing", "DevSecOps integration", "API security"]
              },
              {
                title: "Cloud Security",
                description: "Protect cloud infrastructure and applications with specialized security controls and configurations.",
                features: ["Cloud security posture", "Container security", "Data protection", "Network security"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.6)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '1rem',
                  padding: '2rem',
                  height: '100%'
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.6,
                  color: '#9ca3af',
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
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
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem',
        backgroundColor: 'rgba(5, 5, 5, 0.5)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Compliance & Standards
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              "ISO 27001",
              "SOC 2 Type II",
              "GDPR",
              "HIPAA",
              "PCI DSS",
              "NIST Framework",
              "CIS Controls",
              "COBIT"
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'rgba(139, 0, 0, 0.1)',
                  border: '1px solid rgba(139, 0, 0, 0.2)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem',
                  textAlign: 'center'
                }}
              >
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#ffffff'
                }}>
                  {standard}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section style={{
        padding: 'clamp(3rem, 6vw, 4rem) 1rem'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
            fontWeight: '600',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            Security Implementation Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                phase: "Assess",
                title: "Security Assessment",
                description: "Comprehensive evaluation of current security posture, vulnerabilities, and compliance gaps.",
                duration: "2-4 weeks"
              },
              {
                phase: "Design",
                title: "Security Architecture",
                description: "Design security controls and frameworks tailored to your specific risks and requirements.",
                duration: "3-6 weeks"
              },
              {
                phase: "Implement",
                title: "Deploy Controls",
                description: "Implement security technologies, processes, and training across the organization.",
                duration: "6-12 weeks"
              },
              {
                phase: "Monitor",
                title: "Continuous Monitoring",
                description: "Ongoing threat detection, compliance monitoring, and security operations support.",
                duration: "Ongoing"
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                <div style={{
                  width: '4rem',
                  height: '4rem',
                  borderRadius: '50%',
                  backgroundColor: '#8b0000',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                  fontSize: '1.5rem',
                  fontWeight: '700'
                }}>
                  {index + 1}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#ffffff'
                }}>
                  {phase.phase}
                </h3>
                <h4 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  {phase.title}
                </h4>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: '#9ca3af',
                  marginBottom: '1rem'
                }}>
                  {phase.description}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: '#6b7280',
                  fontWeight: '500'
                }}>
                  {phase.duration}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 6rem) 1rem',
        textAlign: 'center',
        backgroundColor: 'rgba(139, 0, 0, 0.1)'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            Strengthen Your Security Posture
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Protect your organization with comprehensive cybersecurity solutions designed for the complex threat landscape of Africa and the Middle East.
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
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: '#8b0000',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              🔒 Book Security Assessment
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1rem 2rem',
                backgroundColor: 'transparent',
                color: '#ffffff',
                textDecoration: 'none',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'all 0.15s ease-in-out'
              }}
            >
              Request Security Review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
