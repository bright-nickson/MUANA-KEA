"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FinancialServicesPage() {
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
            Banking & Financial Services
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Secure, scalable cloud, data, AI, and cybersecurity solutions designed for the complex regulatory landscape and high-stakes environment of modern financial services.
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
              💰 Book Financial Services Consultation
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
              Explore Financial Solutions
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
            transition={{ duration: 0.6 }}
          >
            <h2 style={{
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              fontWeight: '600',
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Financial Services Challenges
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              The financial services industry faces unique challenges including regulatory compliance, cybersecurity threats, digital transformation pressure, and the need for real-time data processing and analytics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
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
            Financial Services Solutions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "Regulatory Compliance & Risk Management",
                description: "Implement robust compliance frameworks and risk management systems that meet stringent financial regulations.",
                features: ["Regulatory reporting automation", "Risk assessment models", "Compliance monitoring", "Audit trail management"]
              },
              {
                title: "Fraud Detection & Prevention",
                description: "Advanced AI-powered fraud detection systems that identify and prevent fraudulent activities in real-time.",
                features: ["Machine learning models", "Anomaly detection", "Transaction monitoring", "Pattern recognition"]
              },
              {
                title: "Digital Banking Platforms",
                description: "Modern cloud-native banking platforms that deliver seamless customer experiences and operational efficiency.",
                features: ["Mobile banking", "Online banking", "Payment processing", "Customer onboarding"]
              },
              {
                title: "Algorithmic Trading & Risk Analytics",
                description: "High-performance computing solutions for algorithmic trading and sophisticated risk analytics.",
                features: ["Low-latency trading", "Risk modeling", "Portfolio optimization", "Market data analysis"]
              },
              {
                title: "Data Analytics & Business Intelligence",
                description: "Comprehensive data platforms that enable advanced analytics and real-time business intelligence.",
                features: ["Customer analytics", "Performance metrics", "Predictive modeling", "Data visualization"]
              },
              {
                title: "Cybersecurity for Financial Services",
                description: "Enterprise-grade security solutions designed specifically for financial services threats and regulations.",
                features: ["Threat detection", "Data encryption", "Access control", "Security monitoring"]
              }
            ].map((solution, index) => (
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
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {solution.features.map((feature, featureIndex) => (
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

      {/* Use Cases Section */}
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
              Real-World Financial Use Cases
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                useCase: "Real-Time Fraud Detection",
                description: "AI systems that analyze transaction patterns to detect and prevent fraud in milliseconds.",
                impact: "Reduced fraud losses by 40%"
              },
              {
                useCase: "Credit Risk Assessment",
                description: "Machine learning models that provide more accurate credit scoring and risk assessment.",
                impact: "Improved loan approval accuracy by 25%"
              },
              {
                useCase: "Algorithmic Trading",
                description: "HPC-powered trading algorithms that execute trades in microseconds with optimal pricing.",
                impact: "Increased trading profitability by 30%"
              },
              {
                useCase: "Customer Churn Prediction",
                description: "Predictive analytics that identify customers likely to churn and enable proactive retention.",
                impact: "Reduced customer churn by 35%"
              },
              {
                useCase: "Regulatory Reporting Automation",
                description: "Automated systems that generate and submit regulatory reports with 100% accuracy.",
                impact: "Reduced reporting costs by 60%"
              },
              {
                useCase: "Digital Banking Transformation",
                description: "Cloud-native platforms that enable seamless digital banking experiences across all channels.",
                impact: "Increased digital adoption by 50%"
              }
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
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
                  {useCase.useCase}
                </h3>
                <p style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.6,
                  color: '#9ca3af',
                  marginBottom: '1rem'
                }}>
                  {useCase.description}
                </p>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#ffffff',
                  fontWeight: '600',
                  backgroundColor: 'rgba(139, 0, 0, 0.2)',
                  padding: '0.5rem',
                  borderRadius: '0.375rem',
                  textAlign: 'center'
                }}>
                  {useCase.impact}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
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
            Regulatory Compliance Standards
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              "PCI DSS",
              "SOX Compliance",
              "Basel III",
              "GDPR",
              "CCPA",
              "MiFID II",
              "AML/KYC",
              "FINRA Rules"
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
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
            Transform Your Financial Services
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Partner with us to build secure, compliant, and innovative financial services solutions that meet the demands of today's digital economy.
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
              💰 Book Financial Services Consultation
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
              Explore Financial Solutions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
