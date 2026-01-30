"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PartnersPage() {
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
            Strategic Technology Partners
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            We partner with leading technology companies to deliver comprehensive solutions that combine cutting-edge innovation with proven enterprise reliability.
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
              🤝 Become a Partner
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
              Partner Inquiries
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
              Ecosystem of Excellence
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              Our strategic partnerships enable us to deliver end-to-end solutions that leverage the best technologies in cloud, AI, cybersecurity, and enterprise software. Together, we provide our clients with innovative, scalable, and reliable solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Primary Partners */}
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
            Core Technology Partners
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                name: "Microsoft",
                tier: "Technology Partner",
                description: "Microsoft partner delivering Azure cloud solutions, Microsoft 365, Dynamics 365, and Power Platform implementations.",
                capabilities: [
                  "Azure Cloud Services",
                  "Microsoft 365",
                  "Dynamics 365",
                  "Power Platform",
                  "Enterprise Security",
                  "AI & Machine Learning"
                ]
              },
              {
                name: "NVIDIA",
                tier: "Technology Partner",
                description: "NVIDIA partner specializing in GPU-accelerated computing, AI, and high-performance computing solutions.",
                capabilities: [
                  "GPU Computing",
                  "AI & Deep Learning",
                  "High Performance Computing",
                  "Data Science",
                  "Visualization",
                  "Edge Computing"
                ]
              },
              {
                name: "Odoo",
                tier: "Technology Partner",
                description: "Odoo partner implementing comprehensive ERP solutions including inventory, manufacturing, CRM, and financial management.",
                capabilities: [
                  "ERP Implementation",
                  "Inventory Management",
                  "Manufacturing",
                  "CRM & Sales",
                  "Financial Management",
                  "Custom Development"
                ]
              }
            ].map((partner, index) => (
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
                <div style={{
                  marginBottom: '1rem'
                }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    {partner.name}
                  </div>
                  <div style={{
                    fontSize: '0.875rem',
                    color: '#8b0000',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {partner.tier}
                  </div>
                </div>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: '#9ca3af',
                  marginBottom: '1.5rem'
                }}>
                  {partner.description}
                </p>
                <div style={{ marginBottom: '1rem' }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.75rem'
                  }}>
                    Core Capabilities
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {partner.capabilities.map((capability, capIndex) => (
                      <li
                        key={capIndex}
                        style={{
                          fontSize: '0.75rem',
                          color: '#9ca3af',
                          marginBottom: '0.25rem',
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
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
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
            Partner Program Benefits
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                benefit: "Technical Enablement",
                description: "Comprehensive training, certification programs, and technical support to ensure partner success.",
                icon: "🎓"
              },
              {
                benefit: "Joint Go-to-Market",
                description: "Collaborative marketing, sales enablement, and lead generation programs to drive growth.",
                icon: "🚀"
              },
              {
                benefit: "Solution Development",
                description: "Co-development of integrated solutions that address specific customer needs and market opportunities.",
                icon: "💡"
              },
              {
                benefit: "Customer Success",
                description: "Shared commitment to customer success with joint implementation and support models.",
                icon: "🤝"
              },
              {
                benefit: "Market Expansion",
                description: "Access to new markets and customer segments through our extensive network and presence.",
                icon: "🌍"
              },
              {
                benefit: "Revenue Opportunities",
                description: "Multiple revenue streams through services, licensing, and recurring revenue models.",
                icon: "💰"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem'
                }}
              >
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {item.icon}
                </div>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#ffffff'
                }}>
                  {item.benefit}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: '#9ca3af'
                }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Types */}
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
            Partnership Opportunities
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                type: "Technology Partners",
                description: "Technology companies whose products complement our solutions and services.",
                examples: ["Cloud Providers", "Software Vendors", "Hardware Manufacturers"]
              },
              {
                type: "Solution Partners",
                description: "Consulting firms and system integrators who deliver our solutions to customers.",
                examples: ["System Integrators", "Consulting Firms", "Digital Agencies"]
              },
              {
                type: "Channel Partners",
                description: "Resellers and distributors who market and sell our solutions in specific regions.",
                examples: ["Value-Added Resellers", "Distributors", "Regional Partners"]
              },
              {
                type: "Service Partners",
                description: "Specialized service providers who enhance our offerings with complementary services.",
                examples: ["Managed Services", "Support Providers", "Training Partners"]
              }
            ].map((partnerType, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  backgroundColor: 'rgba(10, 10, 10, 0.6)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '0.75rem',
                  padding: '1.5rem'
                }}
              >
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  {partnerType.type}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: '#9ca3af',
                  marginBottom: '1rem'
                }}>
                  {partnerType.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {partnerType.examples.map((example, exampleIndex) => (
                    <li
                      key={exampleIndex}
                      style={{
                        fontSize: '0.75rem',
                        color: '#9ca3af',
                        marginBottom: '0.25rem',
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
                      {example}
                    </li>
                  ))}
                </ul>
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
            Partner with Us for Success
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Join our ecosystem of trusted partners and together deliver exceptional value to customers across Africa and the Middle East.
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
              🤝 Become a Partner
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
              Partner Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
