"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function RetailDistributionPage() {
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
            Retail & Distribution
          </h1>
          <p style={{
            fontSize: '1.25rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Digital transformation solutions for retail and distribution companies across Africa and the Middle East, focusing on customer experience, supply chain efficiency, and omnichannel operations.
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
              Book Retail Consultation
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
              Request Omnichannel Assessment
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
              Retail & Distribution Use Cases & Outcomes
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '2rem'
            }}>
              {[
                {
                  title: "Omnichannel Customer Experience",
                  useCase: "Implement unified customer platforms that seamlessly integrate online, mobile, and in-store experiences with real-time inventory visibility and consistent pricing.",
                  outcomes: [
                    "35% increase in customer lifetime value",
                    "Reduced cart abandonment through seamless checkout experiences",
                    "Improved customer satisfaction across all touchpoints",
                    "Real-time inventory visibility preventing stockouts"
                  ]
                },
                {
                  title: "Supply Chain Visibility",
                  useCase: "Deploy end-to-end supply chain tracking systems with IoT sensors, real-time monitoring, and predictive analytics for inventory and logistics optimization.",
                  outcomes: [
                    "40% reduction in stockouts and overstock situations",
                    "Improved delivery accuracy and on-time performance",
                    "Enhanced supplier collaboration and performance tracking",
                    "Reduced logistics costs through route optimization"
                  ]
                },
                {
                  title: "Customer Analytics & Personalization",
                  useCase: "Build comprehensive customer data platforms with AI-powered personalization engines for targeted marketing, recommendations, and loyalty programs.",
                  outcomes: [
                    "50% improvement in marketing campaign effectiveness",
                    "Increased average order value through personalized recommendations",
                    "Enhanced customer retention through targeted loyalty programs",
                    "Real-time customer behavior analysis for instant offers"
                  ]
                },
                {
                  title: "Digital Store Operations",
                  useCase: "Implement smart store technologies including automated checkout, inventory management systems, and staff scheduling optimization for retail efficiency.",
                  outcomes: [
                    "30% reduction in operational costs through automation",
                    "Improved staff productivity and customer service levels",
                    "Enhanced loss prevention through advanced monitoring",
                    "Real-time store performance metrics and dashboards"
                  ]
                },
                {
                  title: "E-commerce Platform Modernization",
                  useCase: "Build scalable, high-performance e-commerce platforms with advanced search, personalized recommendations, and seamless payment processing.",
                  outcomes: [
                    "60% improvement in website loading speeds and performance",
                    "Increased conversion rates through optimized user experience",
                    "Enhanced mobile commerce capabilities and performance",
                    "Scalable infrastructure handling peak shopping seasons"
                  ]
                },
                {
                  title: "Distribution Network Optimization",
                  useCase: "Deploy advanced routing and warehouse management systems with automated inventory tracking and optimized distribution center operations.",
                  outcomes: [
                    "25% reduction in delivery times through route optimization",
                    "Improved warehouse space utilization and efficiency",
                    "Enhanced last-mile delivery capabilities and tracking",
                    "Reduced transportation costs through network optimization"
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
              Transform Retail Operations
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              marginBottom: '2rem'
            }}>
              From omnichannel pilots to comprehensive digital transformation, we help retailers and distributors achieve customer excellence and operational efficiency.
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
                Request Retail Assessment
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
