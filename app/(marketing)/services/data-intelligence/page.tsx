"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function DataIntelligencePage() {
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
            Data & Intelligence
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Transform data into a strategic asset with end-to-end data platforms, advanced analytics, and AI-ready foundations that drive business value and competitive advantage.
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
              📊 Book Data Strategy Session
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
              Request Data Assessment
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
              End-to-End Data Excellence
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              We design, build, and operate complete data ecosystems from raw data ingestion to advanced analytics, data science, and AI-ready platforms that transform how organizations leverage information.
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
            Data & Intelligence Services
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "Data Engineering & Pipelines",
                description: "Build robust data pipelines that ingest, process, and deliver data reliably across your organization.",
                features: ["ETL/ELT pipelines", "Real-time streaming", "Data integration", "Pipeline orchestration"]
              },
              {
                title: "Data Platforms & Architecture",
                description: "Design and implement scalable data platforms that support analytics, ML, and real-time decision making.",
                features: ["Data lakes", "Lakehouses", "Data warehouses", "Data mesh architecture"]
              },
              {
                title: "Analytics & Business Intelligence",
                description: "Transform raw data into actionable insights with interactive dashboards and self-service analytics.",
                features: ["Executive dashboards", "Self-service BI", "Performance metrics", "Data visualization"]
              },
              {
                title: "Data Science & Advanced Analytics",
                description: "Apply machine learning and statistical analysis to solve complex business problems and predict outcomes.",
                features: ["Predictive modeling", "Statistical analysis", "ML operations", "Model deployment"]
              },
              {
                title: "Data Governance & Management",
                description: "Establish comprehensive data governance frameworks that ensure quality, security, and compliance.",
                features: ["Data quality", "Master data management", "Data lineage", "Privacy controls"]
              },
              {
                title: "AI-Ready Data Foundations",
                description: "Prepare your data infrastructure for advanced AI and machine learning initiatives at scale.",
                features: ["Feature engineering", "Training data pipelines", "Model data management", "Data versioning"]
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

      {/* Data Lifecycle Section */}
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
            Complete Data Lifecycle Management
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              {
                stage: "Ingest",
                title: "Data Collection",
                description: "Collect data from all sources with quality validation and enrichment."
              },
              {
                stage: "Process",
                title: "Data Transformation",
                description: "Clean, transform, and enrich data for analysis and consumption."
              },
              {
                stage: "Store",
                title: "Data Storage",
                description: "Store data efficiently with proper organization and security controls."
              },
              {
                stage: "Analyze",
                title: "Data Analytics",
                description: "Extract insights through analytics, ML, and business intelligence."
              },
              {
                stage: " Govern",
                title: "Data Governance",
                description: "Manage data quality, privacy, and compliance throughout the lifecycle."
              },
              {
                stage: "Deploy",
                title: "Data Activation",
                description: "Deploy insights and models to drive business decisions and automation."
              }
            ].map((stage, index) => (
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
                  fontSize: '2rem',
                  marginBottom: '1rem'
                }}>
                  {stage.stage === "Ingest" && "📥"}
                  {stage.stage === "Process" && "⚙️"}
                  {stage.stage === "Store" && "🗄️"}
                  {stage.stage === "Analyze" && "📊"}
                  {stage.stage === " Govern" && "🛡️"}
                  {stage.stage === "Deploy" && "🚀"}
                </div>
                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#ffffff'
                }}>
                  {stage.stage}
                </h3>
                <h4 style={{
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  marginBottom: '0.75rem',
                  color: '#8b0000'
                }}>
                  {stage.title}
                </h4>
                <p style={{
                  fontSize: '0.75rem',
                  lineHeight: 1.5,
                  color: '#9ca3af'
                }}>
                  {stage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
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
            Data Technologies & Platforms
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                category: "Data Platforms",
                technologies: ["Snowflake", "Databricks", "Azure Synapse", "Google BigQuery", "AWS Redshift"]
              },
              {
                category: "Data Processing",
                technologies: ["Apache Spark", "Kafka", "Airflow", "dbt", "Flink"]
              },
              {
                category: "Analytics & BI",
                technologies: ["Tableau", "Power BI", "Looker", "Grafana", "Superset"]
              },
              {
                category: "ML & AI",
                technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "MLflow", "Kubeflow"]
              }
            ].map((category, index) => (
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
                  fontSize: '1rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: '#8b0000'
                }}>
                  {category.category}
                </h3>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.technologies.map((tech, techIndex) => (
                    <li
                      key={techIndex}
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
                      {tech}
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
            Transform Your Data into Competitive Advantage
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Build a data-driven organization with end-to-end data platforms that power analytics, AI, and intelligent decision making across your enterprise.
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
              📊 Book Data Strategy Session
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
              Request Data Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
