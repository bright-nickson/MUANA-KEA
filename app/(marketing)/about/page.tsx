"use client";

import { useEffect } from "react";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export default function AboutPage() {
  const { sectionEntry, textReveal, gsap, ScrollTrigger } = useGsapScroll();

  useEffect(() => {
    // Section entry animations
    sectionEntry(".hero-section");
    sectionEntry(".story-section");
    sectionEntry(".approach-section");
    sectionEntry(".impact-section");
    
    // Text reveal for headings
    textReveal(".section-heading", { stagger: 0.1 });

    // Parallax effect for hero background
    gsap.to(".hero-parallax-layer", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, [sectionEntry, textReveal, gsap, ScrollTrigger]);

  return (
    <>
      {/* Add responsive styles */}
      <style jsx>{`
        @media (min-width: 768px) {
          .story-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .approach-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .impact-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 767px) {
          .story-grid,
          .approach-grid,
          .impact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: 'relative',
        minHeight: 'clamp(60vh, 80vh, 80vh)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        {/* Parallax Background Layer */}
        <div className="hero-parallax-layer" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120%',
          background: 'radial-gradient(circle at 30% 40%, rgba(139, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.02) 50%, transparent 100%)',
          zIndex: 1
        }} />
        
        {/* Hero Content */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          maxWidth: 'clamp(600px, 80vw, 900px)',
          margin: '0 auto'
        }}>
          <h1 className="section-heading" style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: '800',
            color: '#000000',
            marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
            letterSpacing: '-0.04em',
            lineHeight: '1.05'
          }}>
            About Mauna Kea Consulting
          </h1>
          <p className="section-heading" style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
            color: '#4a5568',
            lineHeight: '1.8',
            marginBottom: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '400'
          }}>
            We are a technology consulting and managed services firm focused on enabling organizations across Africa and the Middle East to compete, grow, and innovate through Cloud, Cybersecurity, Data, AI, and High Performance Computing solutions.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section" style={{
        padding: 'clamp(3rem, 8vw, 8rem) 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: 'clamp(600px, 90vw, 1200px)',
          margin: '0 auto'
        }}>
          <div className="story-grid" style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 6rem)',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="section-heading" style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#000000',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                letterSpacing: '-0.03em',
                lineHeight: '1.1',
                textAlign: 'center'
              }}>
                Our Story
              </h2>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1rem, 2vw, 2rem)',
                textAlign: 'center'
              }}>
                <p className="section-heading" style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  lineHeight: '1.8',
                  color: '#4a5568',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Founded with a vision to bridge the gap between global technology capabilities and regional market needs, Mauna Kea Consulting brings together deep technical expertise with local market understanding.
                </p>
                <p className="section-heading" style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                  lineHeight: '1.8',
                  color: '#4a5568',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  We work with C-suite, IT leadership, and architecture teams to turn strategic technology initiatives into operational reality, ensuring that every solution delivers measurable business value.
                </p>
              </div>
            </div>
            <div style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              marginTop: 'clamp(2rem, 4vw, 3rem)'
            }}>
              <div style={{
                fontSize: 'clamp(4rem, 8vw, 12rem)',
                fontWeight: '800',
                color: '#8b0000',
                opacity: '0.1',
                position: 'absolute',
                top: '-2rem',
                left: '-2rem',
                zIndex: 1
              }}>
                "
              </div>
              <blockquote style={{
                position: 'relative',
                zIndex: 2,
                paddingLeft: 'clamp(2rem, 4vw, 3rem)',
                fontStyle: 'italic',
                maxWidth: '400px'
              }}>
                <p className="section-heading" style={{
                  fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
                  lineHeight: '1.6',
                  color: '#1a202c',
                  margin: 0,
                  fontWeight: '500',
                  textAlign: 'center'
                }}>
                  Technology transformation should be deliberate, measurable, and aligned with business outcomes.
                </p>
                <footer style={{
                  marginTop: '1rem',
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#718096',
                  fontWeight: '400',
                  textAlign: 'center'
                }}>
                  — Our Core Philosophy
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section" style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        backgroundColor: '#f8fafc'
      }}>
        <div style={{
          maxWidth: 'clamp(600px, 90vw, 1200px)',
          margin: '0 auto'
        }}>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#000000',
            marginBottom: 'clamp(2rem, 4vw, 4rem)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            textAlign: 'center'
          }}>
            Our Approach
          </h2>
          
          <div className="approach-grid" style={{
            display: 'grid',
            gap: 'clamp(2rem, 4vw, 4rem)'
          }}>
            <div style={{
              textAlign: 'center',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#8b0000'
              }}>
                01
              </div>
              <h3 style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Strategic Alignment
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Every technology decision serves a clear business purpose with measurable ROI and strategic impact.
              </p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#8b0000'
              }}>
                02
              </div>
              <h3 style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Pragmatic Execution
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Start small, prove value, then scale with confidence through iterative delivery and continuous improvement.
              </p>
            </div>
            
            <div style={{
              textAlign: 'center',
              padding: 'clamp(2rem, 4vw, 3rem) clamp(1rem, 2vw, 2rem)'
            }}>
              <div style={{
                fontSize: 'clamp(2rem, 4vw, 4rem)',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                color: '#8b0000'
              }}>
                03
              </div>
              <h3 style={{
                fontSize: 'clamp(1.125rem, 2.5vw, 1.5rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(0.75rem, 1.5vw, 1rem)',
                letterSpacing: '-0.025em'
              }}>
                Knowledge Transfer
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400'
              }}>
                Build internal capability, not dependency, through comprehensive enablement and skill development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Impact Section */}
      <section className="impact-section" style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: 'clamp(600px, 90vw, 1200px)',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="section-heading" style={{
            fontSize: 'clamp(1.75rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#000000',
            marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
            letterSpacing: '-0.03em',
            lineHeight: '1.1'
          }}>
            Global Impact, Regional Focus
          </h2>
          
          <div className="impact-grid" style={{
            gap: 'clamp(2rem, 4vw, 6rem)',
            marginTop: 'clamp(2rem, 4vw, 4rem)'
          }}>
            <div>
              <h3 className="section-heading" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                letterSpacing: '-0.025em',
                textAlign: 'left'
              }}>
                Africa
              </h3>
              <p className="section-heading" style={{
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                lineHeight: '1.8',
                color: '#4a5568',
                marginBottom: 'clamp(1rem, 2vw, 1rem)',
                textAlign: 'left',
                fontWeight: '400'
              }}>
                Emerging markets with explosive growth potential and digital transformation opportunities.
              </p>
              <div style={{
                textAlign: 'left',
                marginTop: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                <div style={{
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                  color: '#718096',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Key Markets
                </div>
                <div style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#1a202c',
                  fontWeight: '500'
                }}>
                  Nigeria • Kenya • South Africa • Egypt • Morocco • Ghana • Rwanda
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="section-heading" style={{
                fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: 'clamp(1rem, 2vw, 1.5rem)',
                letterSpacing: '-0.025em',
                textAlign: 'left'
              }}>
                Middle East
              </h3>
              <p className="section-heading" style={{
                fontSize: 'clamp(0.875rem, 2vw, 1.125rem)',
                lineHeight: '1.8',
                color: '#4a5568',
                marginBottom: 'clamp(1rem, 2vw, 1rem)',
                textAlign: 'left',
                fontWeight: '400'
              }}>
                Digital transformation hubs with ambitious vision and rapid technology adoption.
              </p>
              <div style={{
                textAlign: 'left',
                marginTop: 'clamp(1.5rem, 3vw, 2rem)'
              }}>
                <div style={{
                  fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)',
                  color: '#718096',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em'
                }}>
                  Key Markets
                </div>
                <div style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  color: '#1a202c',
                  fontWeight: '500'
                }}>
                  UAE • Saudi Arabia • Qatar • Bahrain • Oman • Kuwait
                </div>
              </div>
            </div>
          </div>
          
          <div style={{
            marginTop: 'clamp(3rem, 6vw, 6rem)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            borderTop: '1px solid #e2e8f0',
            borderBottom: '1px solid #e2e8f0'
          }}>
            <h3 className="section-heading" style={{
              fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
              fontWeight: '600',
              color: '#000000',
              marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
              letterSpacing: '-0.025em'
            }}>
              Strategic Technology Partners
            </h3>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 'clamp(1rem, 2vw, 1.5rem)',
              flexWrap: 'wrap'
            }}>
              {['NVIDIA', 'Microsoft', 'AWS', 'Google Cloud', 'Oracle', 'Dell Technologies'].map((partner, index) => (
                <span key={index} style={{
                  fontSize: 'clamp(0.75rem, 1.5vw, 1rem)',
                  fontWeight: '500',
                  color: '#4a5568',
                  padding: 'clamp(0.5rem, 1vw, 0.75rem) clamp(1rem, 2vw, 1.5rem)',
                  backgroundColor: '#f8fafc',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0'
                }}>
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
