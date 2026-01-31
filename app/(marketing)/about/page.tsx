"use client";

// Removed GSAP scroll effects for static layout

export default function AboutPage() {
  // All GSAP/ScrollTrigger scroll effects removed. Static layout only.
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
        
        /* Hero section responsive grid */
        @media (min-width: 768px) {
          .hero-section > div:first-of-type {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        
        @media (max-width: 767px) {
          .hero-section > div:first-of-type {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
        }
        
        /* Infinite scroll animation */
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .partner-scroll {
          display: flex;
          animation: scroll 15s linear infinite;
        }
        
        .partner-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
      
      {/* Hero Section */}
      <section className="hero-section" style={{
        position: 'relative',
        minHeight: 'clamp(60vh, 80vh, 80vh)',
        display: 'flex',
        alignItems: 'center',
        padding: 'clamp(2rem, 5vw, 4rem) 1.5rem',
        backgroundColor: '#ffffff',
      }}>
        
        {/* Hero Content - Grid Layout */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: 'clamp(600px, 90vw, 1200px)',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(2rem, 4vw, 4rem)',
          alignItems: 'center'
        }}>
          {/* Left Aligned Text Content */}
          <div style={{
            textAlign: 'left'
          }}>
            <h1 className="section-heading" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '800',
              color: '#000000',
              marginBottom: 'clamp(1rem, 2.5vw, 1.5rem)',
              letterSpacing: '-0.04em',
              lineHeight: '1.1'
            }}>
              About Mauna Kea Consulting
            </h1>
            <p className="section-heading" style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#4a5568',
              lineHeight: '1.8',
              marginBottom: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '400'
            }}>
              We are a technology consulting and managed services firm focused on enabling organizations across Africa and the Middle East to compete, grow, and innovate through Cloud, Cybersecurity, Data, AI, and High Performance Computing solutions.
            </p>
          </div>
          
          {/* Right Side Image */}
          <div style={{
            position: 'relative',
            height: 'clamp(300px, 40vw, 400px)',
            borderRadius: '1rem',
            overflow: 'hidden',
            border: '1px solid rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}>
              {/* Subtle overlay for better text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)'
              }} />
            </div>
          </div>
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
            alignItems: 'center',
            gridTemplateColumns: '1fr 1fr'
          }}>
            {/* Left Side - Image */}
            <div style={{
              position: 'relative',
              height: 'clamp(350px, 40vw, 450px)',
              borderRadius: '1rem',
              overflow: 'hidden',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            }}>
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
                {/* Subtle overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)'
                }} />
              </div>
              
              {/* Quote overlay on image */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                padding: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderRadius: '0.75rem',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              }}>
                <blockquote style={{
                  margin: 0,
                  fontStyle: 'italic',
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: '-1rem',
                    left: '-0.5rem',
                    fontSize: '3rem',
                    color: '#8b0000',
                    opacity: '0.3',
                    fontFamily: 'serif'
                  }}>
                    "
                  </div>
                  <p style={{
                    fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                    lineHeight: '1.6',
                    color: '#1a202c',
                    margin: '0 0 1rem 0',
                    fontWeight: '500',
                    paddingLeft: '1rem'
                  }}>
                    Technology transformation should be deliberate, measurable, and aligned with business outcomes.
                  </p>
                  <footer style={{
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    color: '#718096',
                    fontWeight: '400',
                    textAlign: 'right',
                    margin: 0
                  }}>
                    — Our Core Philosophy
                  </footer>
                </blockquote>
              </div>
            </div>
            
            {/* Right Side - Text Content */}
            <div style={{
              textAlign: 'left',
              paddingLeft: 'clamp(1rem, 2vw, 2rem)'
            }}>
              <h2 className="section-heading" style={{
                fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                fontWeight: '700',
                color: '#000000',
                marginBottom: 'clamp(1.5rem, 3vw, 2rem)',
                letterSpacing: '-0.03em',
                lineHeight: '1.1'
              }}>
                Our Story
              </h2>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(1rem, 2vw, 2rem)'
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
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach-section" style={{
        padding: 'clamp(4rem, 8vw, 8rem) 1.5rem',
        backgroundColor: '#ffffff',
        position: 'relative'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(139, 0, 0, 0.03) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: 'clamp(600px, 90vw, 1400px)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
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
            gap: 'clamp(4rem, 6vw, 6rem)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            alignItems: 'start'
          }}>
            {/* Approach 1 - Strategic Alignment */}
            <div style={{
              position: 'relative',
              textAlign: 'center'
            }}>
              {/* Large Number */}
              <div style={{
                fontSize: 'clamp(4rem, 6vw, 6rem)',
                fontWeight: '800',
                color: '#8b0000',
                marginBottom: '1rem',
                opacity: '0.15'
              }}>
                01
              </div>
              
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '300px',
                marginBottom: '2rem',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} />
              </div>
              
              {/* Content */}
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}>
                Strategic Alignment
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                Every technology decision serves a clear business purpose with measurable ROI and strategic impact.
              </p>
            </div>
            
            {/* Approach 2 - Pragmatic Execution */}
            <div style={{
              position: 'relative',
              textAlign: 'center'
            }}>
              {/* Large Number */}
              <div style={{
                fontSize: 'clamp(4rem, 6vw, 6rem)',
                fontWeight: '800',
                color: '#8b0000',
                marginBottom: '1rem',
                opacity: '0.15'
              }}>
                02
              </div>
              
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '300px',
                marginBottom: '2rem',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} />
              </div>
              
              {/* Content */}
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}>
                Pragmatic Execution
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                Start small, prove value, then scale with confidence through iterative delivery and continuous improvement.
              </p>
            </div>
            
            {/* Approach 3 - Knowledge Transfer */}
            <div style={{
              position: 'relative',
              textAlign: 'center'
            }}>
              {/* Large Number */}
              <div style={{
                fontSize: 'clamp(4rem, 6vw, 6rem)',
                fontWeight: '800',
                color: '#8b0000',
                marginBottom: '1rem',
                opacity: '0.15'
              }}>
                03
              </div>
              
              {/* Image */}
              <div style={{
                position: 'relative',
                height: '300px',
                marginBottom: '2rem',
                borderRadius: '1rem',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }} />
              </div>
              
              {/* Content */}
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}>
                Knowledge Transfer
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400',
                maxWidth: '400px',
                margin: '0 auto'
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
        backgroundColor: '#f8fafc',
        position: 'relative'
      }}>
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '1000px',
          height: '1000px',
          background: 'radial-gradient(circle, rgba(139, 0, 0, 0.02) 0%, transparent 70%)',
          borderRadius: '50%',
          zIndex: 0
        }} />
        
        <div style={{
          maxWidth: 'clamp(600px, 90vw, 1400px)',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
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
            Global Impact, Regional Focus
          </h2>
          
          <div className="impact-grid" style={{
            display: 'grid',
            gap: 'clamp(3rem, 5vw, 5rem)',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            marginTop: 'clamp(2rem, 4vw, 4rem)'
          }}>
            {/* Africa Section */}
            <div style={{
              position: 'relative',
              textAlign: 'center'
            }}>
              {/* Map/Image Background */}
              <div style={{
                position: 'relative',
                height: '250px',
                marginBottom: '2rem',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  {/* Subtle overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)'
                  }} />
                </div>
                
                {/* Region Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)'
                }}>
                  AFRICA
                </div>
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}>
                Africa
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400',
                marginBottom: '1.5rem',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Emerging markets with explosive growth potential and digital transformation opportunities.
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                {['Nigeria', 'Kenya', 'South Africa', 'Egypt', 'Morocco', 'Ghana', 'Rwanda'].map((country, index) => (
                  <span key={index} style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#8b0000',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(139, 0, 0, 0.08)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(139, 0, 0, 0.2)'
                  }}>
                    {country}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Middle East Section */}
            <div style={{
              position: 'relative',
              textAlign: 'center'
            }}>
              {/* Map/Image Background */}
              <div style={{
                position: 'relative',
                height: '250px',
                marginBottom: '2rem',
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: 'url("https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  {/* Subtle overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, rgba(139, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.2) 100%)'
                  }} />
                </div>
                
                {/* Region Badge */}
                <div style={{
                  position: 'absolute',
                  top: '1.5rem',
                  left: '1.5rem',
                  padding: '0.5rem 1rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  borderRadius: '2rem',
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  boxShadow: '0 2px 8px rgba(139, 0, 0, 0.3)'
                }}>
                  MIDDLE EAST
                </div>
              </div>
              
              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: '600',
                color: '#000000',
                marginBottom: '1rem',
                letterSpacing: '-0.025em'
              }}>
                Middle East
              </h3>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                lineHeight: '1.7',
                color: '#4a5568',
                fontWeight: '400',
                marginBottom: '1.5rem',
                maxWidth: '500px',
                margin: '0 auto'
              }}>
                Digital transformation hubs with ambitious vision and rapid technology adoption.
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                maxWidth: '400px',
                margin: '0 auto'
              }}>
                {['UAE', 'Saudi Arabia', 'Qatar', 'Bahrain', 'Oman', 'Kuwait'].map((country, index) => (
                  <span key={index} style={{
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    color: '#8b0000',
                    padding: '0.25rem 0.75rem',
                    backgroundColor: 'rgba(139, 0, 0, 0.08)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(139, 0, 0, 0.2)'
                  }}>
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Strategic Technology Partners */}
          <div style={{
            marginTop: 'clamp(4rem, 6vw, 6rem)',
            padding: 'clamp(2rem, 4vw, 3rem)',
            backgroundColor: '#ffffff',
            textAlign: 'center',
            overflow: 'hidden',
            position: 'relative'
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
            
            {/* Infinite Loop Container */}
            <div style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden'
            }}>
              {/* Animated Row */}
              <div className="partner-scroll" style={{
                display: 'flex',
                width: 'fit-content'
              }}>
                {/* First set of partners */}
                {['NVIDIA', 'Microsoft', 'Odoo'].map((partner, index) => (
                  <div key={index} style={{
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    fontWeight: '600',
                    color: '#4a5568',
                    padding: '1rem 2rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    minWidth: '150px',
                    margin: '0 0.5rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease-in-out'
                  }}>
                    {partner}
                  </div>
                ))}
                {/* Duplicate set for seamless loop */}
                {['NVIDIA', 'Microsoft', 'Odoo'].map((partner, index) => (
                  <div key={`duplicate-${index}`} style={{
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    fontWeight: '600',
                    color: '#4a5568',
                    padding: '1rem 2rem',
                    backgroundColor: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    textAlign: 'center',
                    minWidth: '150px',
                    margin: '0 0.5rem',
                    whiteSpace: 'nowrap',
                    transition: 'all 0.3s ease-in-out'
                  }}>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
