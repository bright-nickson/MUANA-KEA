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
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(5, 5, 5, 0.8)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        padding: '3rem 0'
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
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Company Info */}
          <div>
            <h3 style={{
              fontSize: '1rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Mauna Kea Consulting
            </h3>
            <p style={{
              fontSize: '0.875rem',
              lineHeight: '1.5',
              color: '#9ca3af',
              marginBottom: '1rem'
            }}>
              Architecting the unseen backbone of enterprise technology across Africa and the Middle East.
            </p>
            <div style={{
              display: 'flex',
              gap: '0.5rem',
              fontSize: '0.75rem',
              color: '#6b7280'
            }}>
              <span>San Francisco</span>
              <span>•</span>
              <span>New York</span>
              <span>•</span>
              <span>London</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
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
                  Advisory & Roadmaps
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
                  Integration & Development
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
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 style={{
              fontSize: '0.875rem',
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
              fontSize: '0.875rem',
              fontWeight: '600',
              marginBottom: '1rem',
              color: '#ffffff'
            }}>
              Newsletter
            </h4>
            <p style={{
              fontSize: '0.875rem',
              color: '#9ca3af',
              marginBottom: '1rem'
            }}>
              Stay updated with our latest insights and technology trends.
            </p>
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: '0.5rem' }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '0.375rem',
                  color: '#ffffff',
                  fontSize: '0.875rem'
                }}
              />
              <motion.button
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease-in-out'
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#a31414'}
                onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = '#8b0000'}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          fontSize: '0.75rem',
          color: '#6b7280'
        }}>
          <div>
            2024 Mauna Kea Consulting. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link 
              href="/privacy" 
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.15s ease-in-out'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#6b7280'}
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                transition: 'color 0.15s ease-in-out'
              }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#6b7280'}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
