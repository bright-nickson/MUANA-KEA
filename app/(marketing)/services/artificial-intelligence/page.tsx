"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ArtificialIntelligencePage() {
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
            Artificial Intelligence
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Deploy practical, secure, and measurable AI solutions that drive real business value through intelligent automation, predictive analytics, and applied machine learning.
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
              Book AI Strategy Session
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
              Explore AI Use Cases
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section id="overview" style={{
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
              marginBottom: '1.5rem',
              textAlign: 'center'
            }}>
              Practical AI for Business Impact
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              We focus on applied AI that delivers measurable business outcomes, not experimental research. From strategy and data readiness to model development and MLOps, we help enterprises operationalize AI at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" style={{
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
              AI Services & Solutions
            </h2>
          </motion.div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "AI Strategy & Roadmap",
                description: "Develop comprehensive AI strategies aligned with business objectives and technical capabilities.",
                features: ["AI readiness assessment", "Use case identification", "ROI analysis", "Implementation roadmap"]
              },
              {
                title: "Machine Learning Model Development",
                description: "Build and deploy custom ML models that solve specific business problems and deliver measurable value.",
                features: ["Predictive modeling", "Classification systems", "Recommendation engines", "Time series forecasting"]
              },
              {
                title: "MLOps & Model Deployment",
                description: "Establish robust MLOps pipelines for continuous model training, deployment, and monitoring.",
                features: ["Model versioning", "Automated retraining", "Performance monitoring", "A/B testing"]
              },
              {
                title: "Computer Vision & NLP",
                description: "Apply advanced computer vision and natural language processing to automate complex tasks.",
                features: ["Image recognition", "Document processing", "Sentiment analysis", "Language translation"]
              },
              {
                title: "AI Governance & Ethics",
                description: "Ensure responsible AI deployment with proper governance, fairness, and ethical considerations.",
                features: ["Model explainability", "Bias detection", "Privacy protection", "Compliance frameworks"]
              },
              {
                title: "Generative AI Integration",
                description: "Integrate generative AI capabilities for content creation, automation, and enhanced user experiences.",
                features: ["LLM integration", "Content generation", "Chatbot development", "Knowledge management"]
              }
            ].map((service, index) => (
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
            Industry AI Use Cases
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                industry: "Financial Services",
                useCases: [
                  "Fraud detection and prevention",
                  "Credit risk assessment",
                  "Algorithmic trading",
                  "Customer churn prediction"
                ]
              },
              {
                industry: "Healthcare",
                useCases: [
                  "Medical image analysis",
                  "Disease prediction",
                  "Drug discovery",
                  "Personalized treatment plans"
                ]
              },
              {
                industry: "Manufacturing",
                useCases: [
                  "Predictive maintenance",
                  "Quality control automation",
                  "Supply chain optimization",
                  "Production planning"
                ]
              },
              {
                industry: "Retail",
                useCases: [
                  "Demand forecasting",
                  "Customer segmentation",
                  "Price optimization",
                  "Inventory management"
                ]
              },
              {
                industry: "Telecommunications",
                useCases: [
                  "Network optimization",
                  "Customer service automation",
                  "Churn prediction",
                  "Fraud detection"
                ]
              },
              {
                industry: "Energy & Utilities",
                useCases: [
                  "Load forecasting",
                  "Equipment monitoring",
                  "Energy optimization",
                  "Grid management"
                ]
              }
            ].map((industry, index) => (
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
                  {industry.industry}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {industry.useCases.map((useCase, useCaseIndex) => (
                    <li
                      key={useCaseIndex}
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
                      {useCase}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Process Section */}
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
            AI Implementation Process
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                phase: "Discover",
                title: "Use Case Discovery",
                description: "Identify high-impact AI use cases with clear business value and technical feasibility.",
                duration: "2-4 weeks"
              },
              {
                phase: "Prepare",
                title: "Data & Infrastructure",
                description: "Prepare data, infrastructure, and teams for AI development and deployment.",
                duration: "4-6 weeks"
              },
              {
                phase: "Develop",
                title: "Model Development",
                description: "Build, train, and validate AI models with rigorous testing and validation.",
                duration: "6-12 weeks"
              },
              {
                phase: "Deploy",
                title: "Production Deployment",
                description: "Deploy models to production with monitoring, governance, and continuous improvement.",
                duration: "4-8 weeks"
              },
              {
                phase: "Optimize",
                title: "Scale & Optimize",
                description: "Scale AI solutions across the organization and optimize for performance and value.",
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
            Deploy AI That Drives Real Business Value
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Transform your organization with practical AI solutions that deliver measurable outcomes, from intelligent automation to predictive analytics and generative AI.
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
              Book AI Strategy Session
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
              Explore AI Use Cases
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
