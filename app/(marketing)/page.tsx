"use client";

import { useEffect, useRef } from "react";
import { PremiumNav } from "@/components/PremiumNav";
import { SlidingHero } from "@/components/SlidingHero";
import { CoreSolutions } from "@/components/CoreSolutions";
import { useGsapScroll } from "@/hooks/useGsapScroll";

export default function HomePage() {
  const { sectionEntry, textReveal, staggeredCards, gsap, ScrollTrigger, containerRef } = useGsapScroll();

  useEffect(() => {
    // Text reveal for headings only
    textReveal(".section-heading", { stagger: 0.08 });
    
    // Staggered cards for features
    staggeredCards(".feature-card", { stagger: 0.15 });
    
    // Staggered cards for partners
    staggeredCards(".partner-logo", { stagger: 0.1, y: [20, 0] });

    // REAL PARALLAX - Proper DOM Structure Implementation
    
    // About Section Parallax
    const aboutParallaxLayer = document.querySelector(".about-parallax-layer");
    if (aboutParallaxLayer) {
      gsap.set(aboutParallaxLayer, {
        willChange: "transform"
      });
      
      gsap.to(aboutParallaxLayer, {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Why Section Parallax
    const whyParallaxLayer = document.querySelector(".why-parallax-layer");
    if (whyParallaxLayer) {
      gsap.set(whyParallaxLayer, {
        willChange: "transform"
      });
      
      gsap.to(whyParallaxLayer, {
        yPercent: -25,
        ease: "none",
        scrollTrigger: {
          trigger: ".why-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

    // Partners Section Parallax
    const partnersParallaxLayer = document.querySelector(".partners-parallax-layer");
    if (partnersParallaxLayer) {
      gsap.set(partnersParallaxLayer, {
        willChange: "transform"
      });
      
      gsap.to(partnersParallaxLayer, {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: ".partners-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    }

  }, [textReveal, staggeredCards, gsap, ScrollTrigger]);

  return (
    <div 
      ref={containerRef}
      className="scroll-smooth"
      style={{
        backgroundColor: '#000000',
        color: '#ffffff',
        minHeight: '100vh'
      }}
    >
      <PremiumNav />
      <SlidingHero />
      
      {/* About Mauna Kea Consulting Section */}
      <section className="about-section" style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Parallax Visual Layer - Taller than container */}
        <div className="about-parallax-layer" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '140%', // Taller than container for parallax
          background: 'transparent',
          zIndex: 1
        }} />
        
        {/* Content Layer - Above parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center'
        }}>
          <h2 className="section-heading" style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            About Mauna Kea Consulting
          </h2>
          <p className="section-heading" style={{
            fontSize: '1.125rem',
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
        overflow: 'hidden',
        padding: '4rem 1.5rem',
        backgroundColor: 'rgba(5, 5, 5, 0.5)'
      }}>
        {/* Parallax Visual Layer - Taller than container */}
        <div className="why-parallax-layer" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '130%', // Taller than container for parallax
          background: 'transparent',
          zIndex: 1
        }} />
        
        {/* Content Layer - Above parallax */}
        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="section-heading" style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#ffffff',
            marginBottom: '1rem',
            letterSpacing: '-0.025em'
          }}>
            Why Mauna Kea Consulting
          </h2>
          <p className="section-heading" style={{
            fontSize: '1.125rem',
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
        overflow: 'hidden',
        padding: '4rem 1.5rem',
        maxWidth: '1200px',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Parallax Visual Layer - Taller than container */}
        <div className="partners-parallax-layer" style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '120%', // Taller than container for parallax
          background: 'radial-gradient(circle at 50% 70%, rgba(139, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.05) 50%, transparent 100%)',
          zIndex: 1
        }} />
        
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
