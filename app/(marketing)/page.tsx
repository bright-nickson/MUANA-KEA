"use client";
import { PremiumNav } from "../../components/PremiumNav";
import { SlidingHero } from "../../components/SlidingHero";
import { CoreSolutions } from "../../components/CoreSolutions";
export default function HomePage() {
  return (
    <div
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <PremiumNav />
      <SlidingHero />
      {/* About Mauna Kea Consulting Section */}
      <section className="about-section" style={{
        position: 'relative',
        padding: 'clamp(2rem, 5vw, 4rem) 1rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        {/* Content Layer - Above parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            About Mauna Kea Consulting
          </h2>
          <p className="section-heading" style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.125rem)',
            lineHeight: '1.6',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Mauna Kea Consulting is a technology consulting firm focused on enabling organizations across Africa and the Middle East to compete, grow, and innovate through Cloud, Cybersecurity, Data, AI, and High Performance Computing.
          </p>
        </div>
      </section>

      {/* Why Mauna Kea Section */}
      <section className="why-section" style={{
        position: 'relative',
        padding: 'clamp(2rem, 5vw, 4rem) 1rem',
        backgroundColor: 'rgba(5, 5, 5, 0.5)',
        textAlign: 'center',
      }}>
        {/* Content Layer - Above parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.75rem, 6vw, 2.5rem)',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Why Mauna Kea Consulting
          </h2>
          <p className="section-heading" style={{
            fontSize: 'clamp(0.95rem, 3vw, 1.125rem)',
            lineHeight: '1.6',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Digital transformation in high‑growth markets requires more than technology. It requires execution.
            We combine deep technical expertise, regional understanding, and a pilot‑to‑scale delivery model to help organizations modernize, secure, and future‑proof their operations.
          </p>
        </div>
      </section>

      <CoreSolutions />

      {/* Partners Section */}
      <section className="partners-section" style={{
        position: 'relative',
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Content Layer - Above parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2
        }}>
          <h2 className="section-heading" style={{
            fontSize: '2rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '2rem'
          }}>
            Our Partners
          </h2>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4rem',
            flexWrap: 'wrap'
          }}>
            <div className="partner-logo" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              NVIDIA
            </div>
            <div className="partner-logo" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
*** End Patch
              Microsoft
            </div>
            <div className="partner-logo" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              AWS
            </div>
            <div className="partner-logo" style={{
              fontSize: '1.5rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              Google Cloud
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
