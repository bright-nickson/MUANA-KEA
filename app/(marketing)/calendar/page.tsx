"use client";

import { motion } from "framer-motion";

const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/your-org/mauna-kea-consulting";

export default function CalendarPage() {
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
        <section aria-labelledby="calendar-heading" style={{
          marginBottom: '3rem',
          textAlign: 'center'
        }}>
          <motion.h1
            id="calendar-heading"
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
            Speak with a Technology Expert
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
            Book a 30‑minute conversation with a Mauna Kea Consulting specialist to discuss your challenges, opportunities, and next steps.
          </motion.p>
        </section>

        <motion.section
          aria-label="Calendly scheduling"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            backgroundColor: 'rgba(10, 10, 10, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '1rem',
            overflow: 'hidden',
            minHeight: '600px'
          }}
        >
          <div style={{
            aspectRatio: '16/9',
            width: '100%'
          }}>
            <iframe
              src={CALENDLY_URL}
              title="Book time with Mauna Kea Consulting"
              style={{
                width: '100%',
                height: '100%',
                border: 'none'
              }}
              loading="lazy"
            />
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '3rem',
            padding: '2rem',
            backgroundColor: 'rgba(10, 10, 10, 0.6)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '1rem'
          }}
        >
          <h3 style={{
            fontSize: '1.5rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem'
          }}>
            What to Expect
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem'
          }}>
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8b0000',
                marginBottom: '0.5rem'
              }}>
                30-Minute Session
              </h4>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#9ca3af'
              }}>
                Focused conversation about your current challenges and opportunities
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8b0000',
                marginBottom: '0.5rem'
              }}>
                Expert Guidance
              </h4>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#9ca3af'
              }}>
                Direct access to senior consultants with deep technical expertise
              </p>
            </div>
            <div>
              <h4 style={{
                fontSize: '1.125rem',
                fontWeight: '600',
                color: '#8b0000',
                marginBottom: '0.5rem'
              }}>
                Actionable Next Steps
              </h4>
              <p style={{
                fontSize: '0.875rem',
                lineHeight: '1.6',
                color: '#9ca3af'
              }}>
                Clear recommendations and potential pilot projects to prove value
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
