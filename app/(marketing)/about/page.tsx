"use client";

import { useEffect } from "react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export default function AboutPage() {
  const { sectionEntry, textReveal } = useGsapScroll();

  useEffect(() => {
    // Section entry animations
    sectionEntry(".about-section");
    sectionEntry(".philosophy-section");
    sectionEntry(".regions-section");
    sectionEntry(".partners-section");
    
    // Text reveal for headings
    textReveal(".about-heading");

  }, [sectionEntry, textReveal]);

  return (
    <>
      <section className="about-section" aria-labelledby="company-overview-heading" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h1
            id="company-overview-heading"
            className="about-heading"
            style={{
              fontSize: '2rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            Company Overview
          </h1>
          <p 
            className="about-heading"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '1rem'
            }}
          >
            Mauna Kea Consulting is a technology consulting and managed services firm focused on
            helping enterprises in Africa and the Middle East design, deliver, and operate critical
            platforms. We work with C-suite, IT leadership, and architecture teams to turn strategic
            technology initiatives into operational reality.
          </p>
          <p 
            className="about-heading"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '1rem'
            }}
          >
            Our mission is to accelerate digital transformation by combining deep technical expertise
            with regional market understanding, enabling organizations to compete, grow, and innovate
            through Cloud, Cybersecurity, Data, AI, and High Performance Computing solutions.
          </p>
        </div>
      </section>

      <section className="philosophy-section" aria-labelledby="core-philosophy-heading" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2
            id="core-philosophy-heading"
            className="about-heading"
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            Core Philosophy
          </h2>
          <p 
            className="about-heading"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '1rem'
            }}
          >
            We believe that technology transformation should be deliberate, measurable, and aligned
            with business outcomes. Our approach is built on three fundamental principles:
          </p>
          <ul style={{
            listStyle: 'none',
            padding: 0,
            margin: 0
          }}>
            <li style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}>
              <span style={{ position: 'absolute', left: 0, color: '#8b0000' }}>•</span>
              <strong>Strategic Alignment:</strong> Every technology decision must serve a clear business purpose
            </li>
            <li style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}>
              <span style={{ position: 'absolute', left: 0, color: '#8b0000' }}>•</span>
              <strong>Pragmatic Execution:</strong> Start small, prove value, then scale with confidence
            </li>
            <li style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '0.5rem',
              paddingLeft: '1rem',
              position: 'relative'
            }}>
              <span style={{ position: 'absolute', left: 0, color: '#8b0000' }}>•</span>
              <strong>Knowledge Transfer:</strong> Build internal capability, not dependency
            </li>
          </ul>
        </div>
      </section>

      <section className="regions-section" aria-labelledby="operating-regions-heading" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2
            id="operating-regions-heading"
            className="about-heading"
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            Operating Regions
          </h2>
          <p 
            className="about-heading"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '1rem'
            }}
          >
            We specialize in serving high-growth markets across Africa and the Middle East,
            bringing global expertise with local context to deliver solutions that work in your
            specific environment.
          </p>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1rem',
            marginTop: '1.5rem'
          }}>
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(10, 10, 10, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.5rem'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                Africa
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
                margin: 0
              }}>
                Nigeria, Kenya, South Africa, Egypt, Morocco
              </p>
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: 'rgba(10, 10, 10, 0.6)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '0.5rem'
            }}>
              <h4 style={{
                fontSize: '1rem',
                fontWeight: '600',
                color: '#ffffff',
                marginBottom: '0.5rem'
              }}>
                Middle East
              </h4>
              <p style={{
                fontSize: '0.875rem',
                color: '#9ca3af',
                margin: 0
              }}>
                UAE, Saudi Arabia, Qatar, Bahrain, Oman
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="partners-section" aria-labelledby="strategic-partners-heading" style={{ marginBottom: '4rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '0 1.5rem' }}>
          <h2
            id="strategic-partners-heading"
            className="about-heading"
            style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#ffffff',
              marginBottom: '1rem'
            }}
          >
            Strategic Partners
          </h2>
          <p 
            className="about-heading"
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.625',
              color: '#d1d5db',
              marginBottom: '1rem'
            }}
          >
            We partner with leading technology providers to deliver comprehensive solutions
            that leverage the best tools and platforms available in the market.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '3rem',
            flexWrap: 'wrap',
            marginTop: '2rem'
          }}>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              NVIDIA
            </div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              Microsoft
            </div>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: '500',
              color: '#ffffff'
            }}>
              Odoo
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
