"use client";

import { FormEvent, useState, useEffect, useRef } from "react";
import Link from "next/link";

const areasOfInterest = [
  "Cloud",
  "Security", 
  "Data",
  "AI",
  "HPC",
  "Training"
];

export default function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // No scroll/animation effects needed for static site

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    
    // Prevent double submission
    if (submitting) {
      return;
    }
    
    setError(null);
    setSuccess(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      company: String(formData.get("company") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      role: String(formData.get("role") ?? "").trim(),
      areaOfInterest: String(formData.get("areaOfInterest") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      honeypot: String(formData.get("website") ?? ""),
    };

    console.log("CONTACT PAYLOAD:", payload);

    if (!payload.name || !payload.email || !payload.message || !payload.areaOfInterest) {
      setError("Please complete the required fields before submitting.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (payload.message.length < 20) {
      setError("Please provide enough detail so we can route your enquiry appropriately.");
      return;
    }

    try {
      setSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const json = (await response.json()) as { success?: boolean; error?: string };

      if (!response.ok || !json.success) {
        throw new Error(json.error || "We were unable to submit your message. Please try again.");
      }

      setSuccess("Thank you. Your message has been received and we will be in touch.");
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "We were unable to submit your message. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <style jsx>{`
        .contact-form-grid{
          display: grid;
          grid-template-columns: 1fr;
          gap: clamp(2rem, 4vw, 3rem);
          align-items: start;
        }
        @media (min-width: 768px) {
          .contact-form-grid{
            grid-template-columns: 1fr 1.2fr;
            gap: clamp(2rem, 4vw, 4rem);
          }
        }
        
        /* Responsive form fields */
        @media (min-width: 640px) {
          .form-field-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        
        /* Ensure proper spacing on mobile */
        @media (max-width: 639px) {
          .form-field-grid {
            grid-template-columns: 1fr !important;
          }
        }
        
        /* Center align info section on mobile */
        @media (max-width: 767px) {
          .contact-info-section {
            text-align: center !important;
          }
          .contact-info-section > div:last-child {
            margin: 0 auto !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <div style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <section className="contact-hero" style={{
          padding: 'clamp(2rem, 6vw, 8rem) clamp(1rem, 3vw, 1.5rem)',
          textAlign: 'center',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          <h1 className="section-heading" style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: '700',
            color: '#ffffff',
            marginBottom: '1.5rem',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            Contact Mauna Kea Consulting
          </h1>
          <p className="section-heading" style={{
            fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
            color: '#9ca3af',
            lineHeight: '1.8',
            maxWidth: '800px',
            margin: '0 auto',
            fontWeight: '400'
          }}>
            Use this form for formal requests, pilots, proposals, training, and partnerships.
          </p>
        </section>

        {/* Contact Form Section */}
        <section className="contact-form" style={{
          padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 1.5rem)',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          <div className="contact-form-grid" style={{
            alignItems: 'start'
          }}>
            {/* Info Section */}
            <div style={{
              textAlign: 'left'
            }} className="contact-info-section">
              <h2 className="section-heading" style={{
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '700',
                color: '#ffffff',
                marginBottom: '2rem',
                letterSpacing: '-0.03em',
                lineHeight: '1.1'
              }}>
                Let&apos;s Start a Conversation
              </h2>
              <p style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.125rem)',
                lineHeight: '1.8',
                color: '#9ca3af',
                marginBottom: '1.5rem'
              }}>
                Whether you&apos;re modernizing cloud infrastructure, strengthening security, unlocking data value, deploying AI, or accelerating workloads with HPC — we&apos;re ready to help.
              </p>
              
              <div style={{
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                backgroundColor: 'rgba(10, 10, 10, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1rem',
                textAlign: 'center',
                maxWidth: 'clamp(300px, 40vw, 400px)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem'
                }}>
                  Prefer to talk?
                </h3>
                <p style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#9ca3af',
                  marginBottom: '2rem',
                  lineHeight: '1.6'
                }}>
                  If you already know the topic and stakeholders, you can book time directly.
                </p>
                <Link
                  href="/calendar"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 3vw, 2rem)',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '0.75rem',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    fontWeight: '600',
                    transition: 'all 0.2s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#a31414';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#8b0000';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Book time with an expert →
                </Link>
              </div>
            </div>

            {/* Form Section */}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              style={{
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                backgroundColor: 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '1.5rem',
                width: '100%',
                maxWidth: '100%',
                boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
                position: 'relative',
                boxSizing: 'border-box'
              }}
            >
              {/* Form Header */}
              <div style={{
                textAlign: 'center',
                marginBottom: 'clamp(2rem, 4vw, 3rem)'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
                  fontWeight: '700',
                  color: '#ffffff',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.025em',
                  lineHeight: '1.2'
                }}>
                  Send us a message
                </h3>
                <p style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#9ca3af',
                  lineHeight: '1.6',
                  margin: 0
                }}>
                  We&apos;ll respond within 24 hours
                </p>
              </div>

              <div className="form-field-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label htmlFor="name" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Name <span style={{ color: '#8b0000' }}>*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      transition: 'all 0.2s ease-in-out',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = '#8b0000';
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="company" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      transition: 'all 0.2s ease-in-out',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = '#8b0000';
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
              </div>

              <div className="form-field-grid" style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div>
                  <label htmlFor="email" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Email <span style={{ color: '#8b0000' }}>*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      transition: 'all 0.2s ease-in-out',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = '#8b0000';
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
                <div>
                  <label htmlFor="role" style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.5rem'
                  }}>
                    Role
                  </label>
                  <input
                    id="role"
                    name="role"
                    type="text"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '0.75rem',
                      color: '#ffffff',
                      fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                      transition: 'all 0.2s ease-in-out',
                      boxSizing: 'border-box'
                    }}
                    onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = '#8b0000';
                      e.currentTarget.style.outline = 'none';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    }}
                    onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                    }}
                  />
                </div>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label htmlFor="areaOfInterest" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  Area of interest <span style={{ color: '#8b0000' }}>*</span>
                </label>
                <input
                  type="text"
                  id="areaOfInterest"
                  name="areaOfInterest"
                  required
                  placeholder="e.g., Cloud Migration, Cybersecurity, AI Implementation, etc."
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    color: '#ffffff',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    transition: 'all 0.2s ease-in-out',
                    boxSizing: 'border-box'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              <div style={{ marginBottom: '2rem' }}>
                <label htmlFor="message" style={{
                  display: 'block',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '0.5rem'
                }}>
                  Message <span style={{ color: '#8b0000' }}>*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  style={{
                    width: '100%',
                    padding: '1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.75rem',
                    color: '#ffffff',
                    fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                    resize: 'vertical',
                    transition: 'all 0.2s ease-in-out',
                    boxSizing: 'border-box',
                    fontFamily: 'inherit',
                    minHeight: '120px'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
                    e.currentTarget.style.outline = 'none';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>

              {/* Honeypot field for basic spam protection */}
              <div style={{ display: 'none' }} aria-hidden="true">
                <label htmlFor="website">Leave this field blank</label>
                <input 
                  id="website" 
                  name="website" 
                  type="text" 
                  autoComplete="off"
                  tabIndex={-1}
                  style={{ display: 'none' }}
                />
              </div>

              {error ? (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#ef4444',
                    margin: 0
                  }}>
                    {error}
                  </p>
                </div>
              ) : success ? (
                <div style={{
                  padding: '1rem',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '0.75rem',
                  marginBottom: '1.5rem'
                }}>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#10b981',
                    margin: 0
                  }}>
                    {success}
                  </p>
                </div>
              ) : null}

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)'
              }}>
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    padding: '1rem 2rem',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '0.75rem',
                    fontSize: '1rem',
                    fontWeight: '600',
                    cursor: submitting ? 'not-allowed' : 'pointer',
                    opacity: submitting ? 0.7 : 1,
                    transition: 'all 0.2s ease-in-out',
                    width: '100%'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!submitting) {
                      e.currentTarget.style.backgroundColor = '#a31414';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
                    if (!submitting) {
                      e.currentTarget.style.backgroundColor = '#8b0000';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  {submitting ? "Sending…" : "Submit"}
                </button>
                <p style={{
                  fontSize: '0.875rem',
                  color: '#6b7280',
                  textAlign: 'center'
                }}>
                  We use the details you provide only to follow up on this enquiry.
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
}
