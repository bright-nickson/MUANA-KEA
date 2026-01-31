"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function TrainingPage() {
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
            Training & Certification
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Role-based technical training and certification programs designed to upskill your teams on cloud, cybersecurity, data, AI, and HPC technologies.
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
              Book Training Consultation
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
              Request Custom Training
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Training Overview */}
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
              Our Training Approach
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Role-Based Training",
                  description: "Tailored curriculum for different roles - from developers and architects to executives and operations teams."
                },
                {
                  title: "Microsoft-Aligned Curriculum",
                  description: "Training programs aligned with Microsoft certification paths and industry best practices."
                },
                {
                  title: "Hands-On Learning",
                  description: "Practical, lab-based training with real-world scenarios and live projects."
                },
                {
                  title: "Virtual & Onsite Delivery",
                  description: "Flexible delivery options including virtual bootcamps, onsite training, and hybrid models."
                }
              ].map((approach, index) => (
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
                    {approach.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#9ca3af'
                  }}>
                    {approach.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Training Programs */}
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
              Training Programs by Role
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Developers & Engineers",
                  description: "Technical deep-dive training for developers and engineers on cloud platforms, programming, and implementation.",
                  courses: [
                    "Cloud Development Fundamentals",
                    "Container Orchestration with Kubernetes",
                    "DevOps & CI/CD Pipelines",
                    "Infrastructure as Code",
                    "Microservices Architecture",
                    "API Development & Integration"
                  ],
                  duration: "3-5 days per course",
                  delivery: ["Virtual", "Onsite", "Hybrid"]
                },
                {
                  title: "Architects & Designers",
                  description: "Advanced training for solution architects and system designers on enterprise architecture and design patterns.",
                  courses: [
                    "Cloud Architecture Design",
                    "Enterprise Architecture Patterns",
                    "Security Architecture",
                    "Data Architecture",
                    "AI/ML Solution Architecture",
                    "HPC System Design"
                  ],
                  duration: "4-6 days per course",
                  delivery: ["Virtual", "Onsite", "Workshop"]
                },
                {
                  title: "Operations & IT Teams",
                  description: "Operational training for IT teams on monitoring, management, and day-to-day operations of cloud and infrastructure.",
                  courses: [
                    "Cloud Operations Management",
                    "Monitoring & Observability",
                    "Incident Management",
                    "Backup & Disaster Recovery",
                    "Cost Optimization",
                    "Security Operations"
                  ],
                  duration: "2-4 days per course",
                  delivery: ["Virtual", "Onsite"]
                },
                {
                  title: "Executives & Leadership",
                  description: "Strategic training for executives and leaders on digital transformation, technology strategy, and business outcomes.",
                  courses: [
                    "Cloud Strategy for Leaders",
                    "Digital Transformation Roadmap",
                    "AI Business Strategy",
                    "Cybersecurity for Executives",
                    "Technology Investment Planning",
                    "Change Management"
                  ],
                  duration: "1-2 days per course",
                  delivery: ["Workshop", "Executive Briefing"]
                },
                {
                  title: "Data Professionals",
                  description: "Specialized training for data engineers, analysts, and scientists on data platforms and analytics.",
                  courses: [
                    "Data Engineering Fundamentals",
                    "Big Data Analytics",
                    "Machine Learning Operations",
                    "Data Governance & Quality",
                    "Real-time Data Processing",
                    "Business Intelligence"
                  ],
                  duration: "3-5 days per course",
                  delivery: ["Virtual", "Onsite", "Hybrid"]
                },
                {
                  title: "Security Professionals",
                  description: "Comprehensive security training for cybersecurity professionals on modern threats and defense strategies.",
                  courses: [
                    "Cloud Security Fundamentals",
                    "Threat Detection & Response",
                    "Security Architecture",
                    "Compliance & Risk Management",
                    "Penetration Testing",
                    "Security Operations Center"
                  ],
                  duration: "3-5 days per course",
                  delivery: ["Virtual", "Onsite", "Lab-based"]
                }
              ].map((program, index) => (
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
                    {program.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    lineHeight: 1.6,
                    color: '#9ca3af',
                    marginBottom: '1.5rem'
                  }}>
                    {program.description}
                  </p>
                  
                  <div style={{
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{
                      fontSize: '0.875rem',
                      fontWeight: '600',
                      color: '#ffffff',
                      marginBottom: '0.75rem'
                    }}>
                      Key Courses:
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0
                    }}>
                      {program.courses.slice(0, 3).map((course, courseIndex) => (
                        <li
                          key={courseIndex}
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
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                    paddingTop: '1rem'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af'
                      }}>
                        Duration: {program.duration}
                      </span>
                    </div>
                    <div>
                      <span style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af'
                      }}>
                        {program.delivery.join(" • ")}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Certification Paths */}
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
              Certification Paths
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Microsoft Certifications",
                  description: "Prepare for Microsoft certification exams with our comprehensive training programs.",
                  certifications: [
                    "Azure Fundamentals (AZ-900)",
                    "Azure Administrator (AZ-104)",
                    "Azure Developer (AZ-204)",
                    "Azure Architect (AZ-305)",
                    "Azure Security Engineer (AZ-500)"
                  ]
                },
                {
                  title: "Cloud Computing",
                  description: "Industry-recognized cloud computing certifications and skills validation.",
                  certifications: [
                    "Cloud Security Knowledge (CCSK)",
                    "Certified Cloud Security Professional (CCSP)",
                    "AWS Certified Solutions Architect",
                    "Google Cloud Professional"
                  ]
                },
                {
                  title: "Data & AI",
                  description: "Data science and AI certifications for modern technology professionals.",
                  certifications: [
                    "Azure Data Fundamentals (DP-900)",
                    "Azure Data Engineer (DP-203)",
                    "Azure AI Engineer (AI-102)",
                    "TensorFlow Developer Certificate"
                  ]
                }
              ].map((path, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'rgba(139, 0, 0, 0.1)',
                    border: '1px solid rgba(139, 0, 0, 0.3)',
                    borderRadius: '1rem',
                    padding: '2rem'
                  }}
                >
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '1rem',
                    color: '#ffffff'
                  }}>
                    {path.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    lineHeight: 1.6,
                    color: '#9ca3af',
                    marginBottom: '1.5rem'
                  }}>
                    {path.description}
                  </p>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {path.certifications.map((cert, certIndex) => (
                      <li
                        key={certIndex}
                        style={{
                          fontSize: '0.8rem',
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
                          ✓
                        </span>
                        {cert}
                      </li>
                    ))}
                  </ul>
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
              Upskill Your Team
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              marginBottom: '2rem'
            }}>
              From pilot training programs to comprehensive certification paths, we help organizations build the technical capabilities needed for digital transformation.
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
                Book Training Assessment
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
                Request Custom Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
