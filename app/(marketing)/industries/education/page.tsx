"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function EducationPage() {
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
            Education
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Digital transformation solutions for educational institutions across Africa and the Middle East, focusing on learning management, student engagement, and administrative efficiency.
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
              Book Education Consultation
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
              Request Digital Learning Assessment
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Use Cases & Outcomes */}
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
              Education Use Cases & Outcomes
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Learning Management Systems",
                  useCase: "Deploy comprehensive cloud-based learning management platforms with course delivery, student tracking, and assessment capabilities for hybrid and remote learning.",
                  outcomes: [
                    "50% improvement in student engagement through interactive platforms",
                    "Reduced administrative workload by 40% through automation",
                    "Enhanced accessibility for remote and underserved students",
                    "Real-time progress tracking and intervention capabilities"
                  ]
                },
                {
                  title: "Student Information Systems",
                  useCase: "Implement integrated student information systems with enrollment management, academic records, and financial aid processing for streamlined administrative operations.",
                  outcomes: [
                    "60% reduction in processing time for student registrations",
                    "Improved data accuracy and compliance with educational regulations",
                    "Enhanced student self-service capabilities and satisfaction",
                    "Streamlined reporting for accreditation and compliance"
                  ]
                },
                {
                  title: "Digital Assessment & Analytics",
                  useCase: "Build advanced assessment platforms with AI-powered grading, learning analytics, and personalized learning paths based on student performance data.",
                  outcomes: [
                    "80% reduction in manual grading time through automated systems",
                    "Early identification of at-risk students through predictive analytics",
                    "Personalized learning recommendations improving student outcomes",
                    "Comprehensive learning analytics for curriculum optimization"
                  ]
                },
                {
                  title: "Campus Management Systems",
                  useCase: "Deploy integrated campus management solutions for facilities, resources, scheduling, and security monitoring to optimize campus operations.",
                  outcomes: [
                    "35% improvement in facility utilization through smart scheduling",
                    "Enhanced campus security through integrated monitoring systems",
                    "Reduced operational costs through energy management optimization",
                    "Improved resource allocation and space planning"
                  ]
                },
                {
                  title: "Research Computing & HPC",
                  useCase: "Implement high-performance computing platforms for research institutions, supporting complex simulations, data analysis, and collaborative research projects.",
                  outcomes: [
                    "Accelerated research completion times by 45%",
                    "Enhanced collaboration capabilities for multi-institutional research",
                    "Cost-effective access to advanced computing resources",
                    "Improved research data management and sharing capabilities"
                  ]
                },
                {
                  title: "Educational Data Analytics",
                  useCase: "Create comprehensive data platforms for institutional performance tracking, student success analytics, and strategic planning for educational outcomes.",
                  outcomes: [
                    "Improved institutional decision-making through data-driven insights",
                    "Enhanced student retention through predictive analytics",
                    "Optimized resource allocation based on performance metrics",
                    "Comprehensive reporting for stakeholders and accreditation"
                  ]
                }
              ].map((item, index) => (
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
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#9ca3af',
                    marginBottom: '1.5rem'
                  }}>
                    {item.useCase}
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
                      Business Outcomes:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {item.outcomes.map((outcome, outcomeIndex) => (
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
              Transform Educational Operations
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              marginBottom: '2rem'
            }}>
              From learning management pilots to comprehensive digital campus solutions, we help educational institutions achieve teaching excellence and operational efficiency.
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
                Request Education Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
