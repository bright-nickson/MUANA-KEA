"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useGsapScroll } from "@/hooks/useGsapScroll";

const slides = [
  {
    id: 1,
    headline: "Build Faster. Operate Securely. Scale with Confidence.",
    subheadline: "We help organizations across Africa and the Middle East unlock value through Cloud, Cybersecurity, Data, AI, and High Performance Computing — from rapid pilots to enterprise scale.",
    primaryCTA: { text: "Book a Discovery Call", href: "/calendar" },
    secondaryCTA: { text: "Request a Pilot Proposal", href: "/contact" },
    backgroundImage: "/hero-background.jpg",
    imageAlt: "Mauna Kea Consulting hero background",
    slideImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    slideImageAlt: "Modern data center with servers and network infrastructure"
  },
  {
    id: 2,
    headline: "From Strategy to Execution — Without the Risk",
    subheadline: "Mauna Kea Consulting partners with you from strategy, architecture, and pilots through to full‑scale deployment and managed services.",
    primaryCTA: { text: "Explore How We Work", href: "/calendar" },
    secondaryCTA: null,
    backgroundImage: "/hero-background.jpg",
    imageAlt: "Mauna Kea Consulting hero background",
    slideImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    slideImageAlt: "Business team collaborating in modern office meeting room"
  },
  {
    id: 3,
    headline: "Built for Complexity. Designed for Scale.",
    subheadline: "We are a cloud, cybersecurity, data & AI consulting powerhouse focused on the realities of Africa and the Middle East, delivering solutions that meet global standards while adapting to regional needs.",
    primaryCTA: { text: "Talk to an Expert", href: "/calendar" },
    secondaryCTA: null,
    backgroundImage: "/hero-background.jpg",
    imageAlt: "Mauna Kea Consulting hero background",
    slideImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    slideImageAlt: "Modern city skyline representing business growth and technology"
  }
];

export function SlidingHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { gsap, ScrollTrigger } = useGsapScroll();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!heroRef.current) return;

    // Create blur effect on scroll
    gsap.to(heroRef.current, {
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    // Create parallax effect for background
    gsap.to(".hero-background", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });

  }, [gsap, ScrollTrigger]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section 
      ref={heroRef}
      className="sliding-hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Full Screen Background Image */}
      <div 
        className="hero-background"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url('/hero-background.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: '#1a1a1a', // Fallback background
          zIndex: 0
        }}
      >
        {/* Dark overlay for text readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.6) 100%)',
          zIndex: 1
        }} />
      </div>

      {/* Technical Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 2,
        pointerEvents: 'none'
      }}>
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          top: '25%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          top: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
        <div style={{
          position: 'absolute',
          width: '100%',
          height: '1px',
          top: '75%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '1px',
          left: '25%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '1px',
          left: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
        <div style={{
          position: 'absolute',
          height: '100%',
          width: '1px',
          left: '75%',
          backgroundColor: 'rgba(255, 255, 255, 0.05)'
        }} />
      </div>

      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: 'relative',
            zIndex: 10,
            width: '100%',
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}
        >
          {/* Text Content */}
          <div style={{
            gridColumn: 'span 7 / span 8'
          }}>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                fontSize: '10px',
                fontFamily: 'JetBrains Mono, monospace',
                color: '#991b1b',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '2rem'
              }}
            >
              <span style={{
                width: '0.375rem',
                height: '0.375rem',
                backgroundColor: '#991b1b',
                borderRadius: '0.125rem'
              }} />
              Slide {currentSlide + 1} of {slides.length}
            </motion.div>

            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                lineHeight: 1.1,
                fontWeight: '600',
                letterSpacing: '-0.025em',
                color: '#ffffff',
                marginBottom: '1.5rem'
              }}
            >
              {slides[currentSlide].headline}
            </motion.h1>

            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{
                fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                lineHeight: 1.6,
                color: '#9ca3af',
                marginBottom: '2rem',
                maxWidth: '600px'
              }}
            >
              {slides[currentSlide].subheadline}
            </motion.p>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap'
              }}
            >
              <Link
                href={slides[currentSlide].primaryCTA.href}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  backgroundColor: '#8b0000',
                  color: '#ffffff',
                  textDecoration: 'none',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
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
                👉 {slides[currentSlide].primaryCTA.text}
              </Link>

              {slides[currentSlide].secondaryCTA && (
                <Link
                  href={slides[currentSlide].secondaryCTA!.href}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 1.5rem',
                    backgroundColor: 'transparent',
                    color: '#ffffff',
                    textDecoration: 'none',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    transition: 'all 0.15s ease-in-out',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                >
                  👉 {slides[currentSlide].secondaryCTA!.text}
                </Link>
              )}
            </motion.div>
          </div>

          {/* Visual Element */}
          <div style={{
            gridColumn: 'span 5 / span 6',
            height: '400px',
            position: 'relative'
          }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '1rem',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backgroundImage: `url(${slides[currentSlide].slideImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Dark overlay for text readability */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.4) 100%)',
                zIndex: 1
              }} />
              
              {/* Status overlay */}
              <div style={{
                position: 'absolute',
                bottom: '2rem',
                left: '2rem',
                right: '2rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.2)',
                paddingTop: '1rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-end',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#6b7280',
                zIndex: 2
              }}>
                <span>STATUS: ACTIVE</span>
                <span>SECURITY: ENABLED</span>
                <span>PERFORMANCE: OPTIMAL</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div style={{
        position: 'absolute',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 20,
        display: 'flex',
        alignItems: 'center',
        gap: '1rem'
      }}>
        <button
          onClick={goToPrevSlide}
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease-in-out'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          ←
        </button>

        {/* Slide Indicators */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: '0.5rem',
                height: '0.5rem',
                borderRadius: '50%',
                backgroundColor: index === currentSlide ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease-in-out'
              }}
            />
          ))}
        </div>

        <button
          onClick={goToNextSlide}
          style={{
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s ease-in-out'
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
          }}
        >
          →
        </button>
      </div>
    </section>
  );
}
