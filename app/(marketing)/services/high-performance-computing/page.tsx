"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HighPerformanceComputingPage() {
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
            High Performance Computing
          </h1>
          <p style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            lineHeight: 1.6,
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto 2rem'
          }}>
            Unlock computational power for research, simulation, and data-intensive workloads with cutting-edge HPC solutions that accelerate innovation and scientific discovery.
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
              Book HPC Consultation
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
              Assess HPC Needs
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
              Strategic Accelerator for Innovation
            </h2>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: 1.6,
              color: '#9ca3af',
              textAlign: 'center',
              maxWidth: '900px',
              margin: '0 auto'
            }}>
              HPC is not just about raw computing power—it's a strategic accelerator that enables breakthrough research, competitive advantage, and transformational insights across industries.
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
            HPC Services & Solutions
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: "HPC Cluster Design & Deployment",
                description: "Design and deploy custom HPC clusters optimized for your specific workloads and performance requirements.",
                features: ["Architecture design", "Hardware selection", "Network optimization", "Storage solutions"]
              },
              {
                title: "GPU Acceleration & Optimization",
                description: "Leverage GPU computing for parallel processing and acceleration of compute-intensive applications.",
                features: ["GPU cluster setup", "CUDA optimization", "Deep learning frameworks", "Performance tuning"]
              },
              {
                title: "Workload Management & Scheduling",
                description: "Implement efficient workload management systems that maximize resource utilization and minimize wait times.",
                features: ["Job scheduling", "Resource allocation", "Queue management", "Priority systems"]
              },
              {
                title: "Storage Solutions for Big Data",
                description: "Design high-performance storage systems that can handle massive datasets and provide fast access.",
                features: ["Parallel file systems", "Object storage", "Data archiving", "Backup solutions"]
              },
              {
                title: "Cloud HPC & Hybrid Solutions",
                description: "Integrate on-premises HPC with cloud resources for flexible scaling and cost optimization.",
                features: ["Hybrid architecture", "Cloud bursting", "Cost optimization", "Data synchronization"]
              },
              {
                title: "Performance Tuning & Benchmarking",
                description: "Optimize HPC applications and systems for maximum performance and efficiency.",
                features: ["Performance analysis", "Code optimization", "Benchmarking", "Capacity planning"]
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

      {/* Applications Section */}
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
            HPC Applications Across Industries
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                industry: "Energy & Mining",
                applications: [
                  "Seismic data processing",
                  "Reservoir simulation",
                  "Geological modeling",
                  "Resource optimization"
                ]
              },
              {
                industry: "Financial Services",
                applications: [
                  "Risk modeling",
                  "Algorithmic trading",
                  "Portfolio optimization",
                  "Fraud detection"
                ]
              },
              {
                industry: "Research & Science",
                applications: [
                  "Molecular dynamics",
                  "Climate modeling",
                  "Genomic analysis",
                  "Particle physics"
                ]
              },
              {
                industry: "Healthcare & Pharma",
                applications: [
                  "Drug discovery",
                  "Medical imaging",
                  "Clinical trials",
                  "Personalized medicine"
                ]
              },
              {
                industry: "Manufacturing",
                applications: [
                  "Computational fluid dynamics",
                  "Finite element analysis",
                  "Process optimization",
                  "Quality simulation"
                ]
              },
              {
                industry: "AI & Machine Learning",
                applications: [
                  "Deep learning training",
                  "Model optimization",
                  "Large-scale inference",
                  "Neural architecture search"
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
                  {industry.applications.map((application, appIndex) => (
                    <li
                      key={appIndex}
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
                      {application}
                    </li>
                  ))}
                </ul>
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
            HPC Technologies & Platforms
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                category: "Compute Hardware",
                technologies: ["NVIDIA GPUs", "AMD EPYC", "Intel Xeon", "ARM processors", "FPGAs"]
              },
              {
                category: "Interconnect",
                technologies: ["InfiniBand", "Ethernet", "NVLink", "PCIe", "High-speed networking"]
              },
              {
                category: "Storage Systems",
                technologies: ["Lustre", "GPFS", "BeeGFS", "Ceph", "NFS", "Object storage"]
              },
              {
                category: "Software Stack",
                technologies: ["MPI", "OpenMP", "CUDA", "OpenCL", "Slurm", "Kubernetes"]
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
            Accelerate Innovation with HPC
          </h2>
          <p style={{
            fontSize: '1.125rem',
            lineHeight: 1.6,
            color: '#9ca3af',
            marginBottom: '2rem'
          }}>
            Whether you're running complex simulations, training large AI models, or processing massive datasets, our HPC solutions provide the computational power you need to breakthrough barriers and achieve breakthrough results.
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
              Book HPC Consultation
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
              Assess HPC Needs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
