"use client";

import { useEffect } from "react";

const CALENDLY_URL = "https://calendly.com/brightnickson63/30min";

export default function CalendarPage() {

  // No scroll/animation effects needed for static site

  return (
    <>
      {/* Add responsive styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .calendar-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        
        @media (max-width: 767px) {
          .calendar-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      <div style={{
        backgroundColor: '#ffffff',
        color: '#000000',
        minHeight: '100vh'
      }}>
        {/* Hero Section */}
        <section className="calendar-hero" style={{
          padding: 'clamp(3rem, 8vw, 8rem) 1.5rem',
          textAlign: 'center',
          maxWidth: 'clamp(500px, 80vw, 1200px)',
          margin: '0 auto'
        }}>
          <h1 className="section-heading" style={{
            fontSize: 'clamp(1.75rem, 5vw, 4rem)',
            fontWeight: '700',
            color: '#000000',
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            Speak with a Technology Expert
          </h1>
          <p className="section-heading" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#4a5568',
            lineHeight: '1.8',
            maxWidth: 'clamp(400px, 70vw, 800px)',
            margin: '0 auto',
            fontWeight: '400'
          }}>
            Book a 30‑minute conversation with a Mauna Kea Consulting specialist to discuss your challenges, opportunities, and next steps.
          </p>
        </section>

        {/* Calendar Section */}
        <section className="calendar-iframe" style={{
          padding: 'clamp(2rem, 4vw, 4rem) 1.5rem',
          maxWidth: 'clamp(500px, 90vw, 1200px)',
          margin: '0 auto'
        }}>
          <div style={{
            backgroundColor: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '1rem',
            overflow: 'hidden',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
            minHeight: '600px'
          }}>
            <div style={{
              width: '100%',
              height: '600px',
              position: 'relative'
            }}>
              <iframe
                src={CALENDLY_URL}
                title="Book time with Mauna Kea Consulting"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  position: 'absolute',
                  top: 0,
                  left: 0
                }}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Information Section */}
        <section className="calendar-info" style={{
          padding: 'clamp(3rem, 8vw, 8rem) 1.5rem',
          maxWidth: 'clamp(500px, 90vw, 1200px)',
          margin: '0 auto'
        }}>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#000000',
            marginBottom: 'clamp(2rem, 4vw, 4rem)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            textAlign: 'center'
          }}>
            What to Expect
          </h2>
          
          <div className="calendar-grid" style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 4rem)'
          }}>
            <div style={{
              textAlign: 'center',
              padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 3vw, 4rem)',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                color: '#8b0000'
              }}>
                30
              </div>
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Minute Session
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Focused conversation about your current challenges and opportunities
              </p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 3vw, 4rem)',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                color: '#8b0000'
              }}>
                Expert
              </div>
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Guidance
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Direct access to senior consultants with deep technical expertise
              </p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: 'clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 3vw, 4rem)',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1.5rem)',
                color: '#8b0000'
              }}>
                Actionable
              </div>
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Next Steps
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Clear recommendations and potential pilot projects to prove value
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
