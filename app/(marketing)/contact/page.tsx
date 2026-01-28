"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
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

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
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
      event.currentTarget.reset();
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
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        <section aria-labelledby="contact-heading" style={{
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <motion.h1
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: '#ffffff',
              marginBottom: '1rem',
              letterSpacing: '-0.025em'
            }}
          >
            Contact Mauna Kea Consulting
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: '1.125rem',
              lineHeight: '1.6',
              color: '#9ca3af',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            Use this form for formal requests, pilots, proposals, training, and partnerships.
          </motion.p>
        </section>

        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'start'
          }}
        >
          {/* Info Section */}
          <div style={{
            fontSize: '0.875rem',
            lineHeight: '1.6',
            color: '#9ca3af'
          }}>
            <p style={{ marginBottom: '1.5rem' }}>
              Whether you're modernizing cloud infrastructure, strengthening security, unlocking data value, deploying AI, or accelerating workloads with HPC — we're ready to help.
            </p>
            
            <div style={{
              padding: '1.5rem',
              backgroundColor: 'rgba(10, 10, 10, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.75rem'
            }}>
              <h3 style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.75rem'
              }}>
                Prefer to talk?
              </h3>
              <p style={{
                fontSize: '0.75rem',
                color: '#9ca3af',
                marginBottom: '1rem'
              }}>
                If you already know the topic and stakeholders, you can book time directly.
              </p>
              <Link
                href="/calendar"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  transition: 'all 0.15s ease-in-out',
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
                👉 Book time with an expert
              </Link>
            </div>
          </div>

          {/* Form Section */}
          <form
            onSubmit={handleSubmit}
            style={{
              padding: '2rem',
              backgroundColor: 'rgba(10, 10, 10, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '1rem'
            }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div>
                <label htmlFor="name" style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: '500',
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
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    transition: 'all 0.15s ease-in-out'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
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
                  fontSize: '0.75rem',
                  fontWeight: '500',
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
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    transition: 'all 0.15s ease-in-out'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <div>
                <label htmlFor="email" style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: '500',
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
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    transition: 'all 0.15s ease-in-out'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
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
                  fontSize: '0.75rem',
                  fontWeight: '500',
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
                    padding: '0.75rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '0.5rem',
                    color: '#ffffff',
                    fontSize: '0.875rem',
                    transition: 'all 0.15s ease-in-out'
                  }}
                  onFocus={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = '#8b0000';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                  onBlur={(e: React.FocusEvent<HTMLInputElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="areaOfInterest" style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '500',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                Area of interest <span style={{ color: '#8b0000' }}>*</span>
              </label>
              <select
                id="areaOfInterest"
                name="areaOfInterest"
                required
                defaultValue=""
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  transition: 'all 0.15s ease-in-out'
                }}
                onFocus={(e: React.FocusEvent<HTMLSelectElement>) => {
                  e.currentTarget.style.borderColor = '#8b0000';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                }}
                onBlur={(e: React.FocusEvent<HTMLSelectElement>) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                }}
              >
                <option value="" disabled style={{ backgroundColor: '#000000' }}>
                  Select an area
                </option>
                {areasOfInterest.map((area) => (
                  <option key={area} value={area} style={{ backgroundColor: '#000000' }}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div style={{ marginBottom: '1rem' }}>
              <label htmlFor="message" style={{
                display: 'block',
                fontSize: '0.75rem',
                fontWeight: '500',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                Message <span style={{ color: '#8b0000' }}>*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  color: '#ffffff',
                  fontSize: '0.875rem',
                  resize: 'vertical',
                  transition: 'all 0.15s ease-in-out'
                }}
                onFocus={(e: React.FocusEvent<HTMLTextAreaElement>) => {
                  e.currentTarget.style.borderColor = '#8b0000';
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
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" autoComplete="off" />
            </div>

            {error ? (
              <p style={{
                fontSize: '0.75rem',
                color: '#ef4444',
                marginBottom: '1rem'
              }}>
                {error}
              </p>
            ) : success ? (
              <p style={{
                fontSize: '0.75rem',
                color: '#10b981',
                marginBottom: '1rem'
              }}>
                {success}
              </p>
            ) : null}

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                type="submit"
                disabled={submitting}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  cursor: submitting ? 'not-allowed' : 'pointer',
                  opacity: submitting ? 0.7 : 1,
                  transition: 'all 0.15s ease-in-out'
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
                fontSize: '0.75rem',
                color: '#6b7280'
              }}>
                We use the details you provide only to follow up on this enquiry.
              </p>
            </div>
          </form>
        </motion.section>
      </motion.div>
    </>
  );
}
