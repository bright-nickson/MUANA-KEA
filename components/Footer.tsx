"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribe:", email);
    setEmail("");
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '3rem 0',
        marginTop: 'auto'
      }}
    >
      {/* Background decoration */}
      <div style={{ position: 'absolute', inset: 0 }}>
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '300px',
            height: '300px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(139, 0, 0, 0.1), transparent)',
            borderRadius: '50%'
          }}
        />
      </div>

      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: 'clamp(1.5rem, 4vw, 2rem)',
          marginBottom: '2rem'
        }}
        className="footer-grid">
          {/* Company Info */}
          <div>
            {/* Logo */}
            <div style={{ marginBottom: '1rem' }}>
              <img 
                src="/logo.png"
                alt="Mauna Kea Consulting Logo"
                style={{
                  width: '48px',
                  height: '48px',
                  objectFit: 'contain'
                }}
              />
            </div>
            
            <h3 style={{
              fontSize: 'clamp(0.9rem, 2vw, 1rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Mauna Kea Consulting
            </h3>
            <p style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              lineHeight: '1.5',
              color: '#9ca3af',
              marginBottom: '1rem'
            }}>
              Architecting the unseen backbone of enterprise technology across Africa and the Middle East.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.7rem',
              color: '#6b7280',
              flexWrap: 'wrap'
            }}>
              <span>San Francisco</span>
              <span>•</span>
              <span>New York</span>
              <span>•</span>
              <span>London</span>
              <span>•</span>
              <span>Dubai</span>
              <span>•</span>
              <span>Nairobi</span>
            </div>
            <div style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem'
            }}>
              <a href="#" style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
              }}>
                in
              </a>
              <a href="#" style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
              }}>
                tw
              </a>
              <a href="#" style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#9ca3af',
                textDecoration: 'none',
                transition: 'all 0.2s ease-in-out'
              }}>
                gh
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Cloud Transformation
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Cybersecurity Services
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Data & Intelligence
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  AI Solutions
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/services" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  High Performance Computing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/about" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  About Us
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/industries" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Industries
                </Link>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <Link 
                  href="/contact" 
                  style={{
                    color: '#9ca3af',
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    transition: 'color 0.15s ease-in-out'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Newsletter
            </h4>
            <p style={{
              fontSize: 'clamp(0.8rem, 2vw, 0.875rem)',
              color: '#9ca3af',
              marginBottom: '1.5rem'
            }}>
              Stay updated with our latest insights and technology trends.
            </p>
            <form onSubmit={handleSubscribe} style={{ 
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              <div style={{ position: 'relative' }}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    transition: 'all 0.3s ease-in-out',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.outline = 'none';
                  }}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
                <div style={{
                  position: 'absolute',
                  right: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '1rem',
                  color: '#6b7280',
                  pointerEvents: 'none'
                }}>
                  @
                </div>
              </div>
              <motion.button
                type="submit"
                style={{
                  padding: '0.875rem 1.5rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.75rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  whiteSpace: 'nowrap'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = '#a31414';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(139, 0, 0, 0.3)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.currentTarget.style.backgroundColor = '#8b0000';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Subscribe</span>
                <span style={{ fontSize: '0.75rem' }}>→</span>
              </motion.button>
            </form>
            <p style={{
              fontSize: '0.75rem',
              color: '#6b7280',
              textAlign: 'center',
              marginTop: '0.5rem'
            }}>
              Join 2,000+ tech leaders
            </p>
          </div>
        </div>

        {/* Trust Badges Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem',
          padding: '1.5rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <h5 style={{
            fontSize: '0.8rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            Trusted by Leading Organizations
          </h5>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            opacity: 0.7
          }}>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Fortune 500</span>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Global Banks</span>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Healthcare Leaders</span>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Government Agencies</span>
            <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontWeight: '500' }}>Tech Innovators</span>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: 'clamp(0.65rem, 1.5vw, 0.75rem)',
          color: '#6b7280',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            2024 Mauna Kea Consulting. All rights reserved.
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
