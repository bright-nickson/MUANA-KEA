"use client";

import { useEffect } from "react";
import Link from "next/link";

const services = [
  {
    id: "consultation",
    title: "Consultation Services",
    description: "Expert consulting for unblocking critical initiatives and architectural decisions.",
    outcomes: [
      "Programme reviews and rescue",
      "Architecture authority support",
      "Independent options analysis"
    ],
    cta: { text: "Schedule Consultation", href: "/calendar" },
    icon: "",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    imageAlt: "Business consultation and strategic advisory"
  }
];

export function CoreServices() {
  // No scroll/animation effects needed for static site

  return (
    <>
      <style jsx>{`
        @media (min-width: 640px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (min-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
      `}</style>
    <section className="core-services-section" style={{
      padding: 'clamp(2rem, 5vw, 4rem) clamp(1rem, 3vw, 1.5rem)',
      backgroundColor: 'rgba(5, 5, 5, 0.5)'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: 'clamp(2rem, 4vw, 4rem)'
        }}>
          <h2 className="services-heading" style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Our Core Services
          </h2>
          <p className="services-heading" style={{
            fontSize: 'clamp(0.95rem, 2.5vw, 1.125rem)',
            lineHeight: '1.6',
            color: '#9ca3af',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 clamp(0.5rem, 2vw, 1rem)'
          }}>
            Expert consulting services designed to transform your business and solve critical challenges
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'clamp(1.5rem, 3vw, 2rem)'
        }} className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className="service-card"
              style={{
                backgroundColor: 'rgba(10, 10, 10, 0.6)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '1rem',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image */}
              <div style={{
                height: 'clamp(150px, 25vw, 200px)',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }}>
                {/* Dark overlay */}
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.7) 100%)'
                }} />
                
                {/* Icon overlay */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  fontSize: '2rem',
                  zIndex: 1
                }}>
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div style={{
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                flex: 1,
                display: 'flex',
                flexDirection: 'column'
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                  fontWeight: '600',
                  color: '#ffffff',
                  marginBottom: '1rem',
                  letterSpacing: '-0.025em'
                }}>
                  {service.title}
                </h3>
                
                <p style={{
                  fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                  lineHeight: '1.6',
                  color: '#9ca3af',
                  marginBottom: '1.5rem'
                }}>
                  {service.description}
                </p>
                
                {/* Outcomes/Capabilities */}
                <div style={{
                  marginBottom: '2rem',
                  flex: 1
                }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#ffffff',
                    marginBottom: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    Key Outcomes
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.outcomes?.map((item, itemIndex) => (
                      <li 
                        key={itemIndex}
                        style={{
                          fontSize: '0.875rem',
                          color: '#9ca3af',
                          marginBottom: '0.5rem',
                          paddingLeft: '1rem',
                          position: 'relative'
                        }}
                      >
                        <span style={{
                          position: 'absolute',
                          left: 0,
                          color: '#8b0000'
                        }}>
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* CTA */}
                <Link
                  href={service.cta.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#8b0000',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    transition: 'all 0.2s ease-in-out',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#a31414';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = '#8b0000';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  {service.cta.text}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}
