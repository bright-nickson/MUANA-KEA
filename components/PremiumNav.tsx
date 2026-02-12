"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function PremiumNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    checkMobile();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @media (max-width: 640px) {
          .nav-logo-full {
            display: none;
          }
          .nav-logo-short {
            display: inline;
          }
        }
        @media (min-width: 641px) {
          .nav-logo-full {
            display: inline;
          }
          .nav-logo-short {
            display: none;
          }
        }
      `}</style>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: '64px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1rem, 3vw, 2rem)',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease-in-out',
          width: '100%',
          maxWidth: '100vw',
          boxSizing: 'border-box'
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
          <img 
            src="/logo.png"
            alt="Mauna Kea Consulting Logo"
            style={{
              width: 'clamp(24px, 4vw, 32px)',
              height: 'clamp(24px, 4vw, 32px)',
              objectFit: 'contain'
            }}
          />
          <Link 
            href="/"
            style={{
              fontSize: 'clamp(0.75rem, 2vw, 1rem)',
              fontWeight: '600',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.025em',
              whiteSpace: 'nowrap'
            }}
            className="nav-logo-text"
          >
            <span className="nav-logo-full">Mauna Kea Consulting</span>
            <span className="nav-logo-short">Mauna Kea</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div style={{ 
          display: isMobile ? 'none' : 'flex',
          alignItems: 'center', 
          gap: '2rem'
        }}>
          <Link 
            href="/"
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            Home
          </Link>
          
          <Link 
            href="/services"
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            Services
          </Link>
          
          <Link 
            href="/industries"
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            Industries
          </Link>
          
          <Link 
            href="/training"
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            Training
          </Link>
          
          <Link 
            href="/about" 
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            About
          </Link>
          
          <Link 
            href="/contact" 
            style={{
              fontSize: '0.875rem',
              fontWeight: '500',
              color: '#9ca3af',
              textDecoration: 'none',
              transition: 'color 0.2s ease-in-out'
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#ffffff'}
            onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => e.currentTarget.style.color = '#9ca3af'}
          >
            Contact
          </Link>
        </div>

        {/* CTA Button - Desktop */}
        <Link 
          href="/calendar" 
          style={{
            display: isMobile ? 'none' : 'inline-flex',
            fontSize: '0.875rem',
            fontWeight: '600',
            backgroundColor: '#8b0000',
            color: '#ffffff',
            padding: '0.5rem 1.25rem',
            borderRadius: '0.5rem',
            textDecoration: 'none',
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
          Book a Call
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: isMobile ? 'flex' : 'none',
            flexDirection: 'column',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
        >
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'all 0.3s ease-in-out',
            transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'all 0.3s ease-in-out',
            opacity: mobileMenuOpen ? 0 : 1
          }} />
          <div style={{
            width: '20px',
            height: '2px',
            backgroundColor: '#ffffff',
            transition: 'all 0.3s ease-in-out',
            transform: mobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }} />
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={{
            position: 'fixed',
            top: '64px',
            left: 0,
            right: 0,
            width: '100%',
            maxWidth: '100vw',
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 40,
            padding: '1rem clamp(1rem, 3vw, 2rem)',
            boxSizing: 'border-box',
            overflowX: 'hidden'
          }}
        >
          {/* Mobile Menu Header */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.75rem',
            marginBottom: '1rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            overflow: 'hidden'
          }}>
            <img 
              src="/logo.png"
              alt="Mauna Kea Consulting Logo"
              style={{
                width: '28px',
                height: '28px',
                objectFit: 'contain',
                flexShrink: 0
              }}
            />
            <span style={{
              fontSize: 'clamp(0.875rem, 2vw, 1rem)',
              fontWeight: '600',
              color: '#ffffff',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}>
              Mauna Kea Consulting
            </span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '100%' }}>
            <Link 
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#9ca3af',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'block',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Home
            </Link>
            <Link 
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#9ca3af',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'block',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              About
            </Link>
            <Link 
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#9ca3af',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'block',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Calendar
            </Link>
            <Link 
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: '#9ca3af',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'block',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Contact
            </Link>
            <Link 
              href="/calendar"
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                backgroundColor: '#8b0000',
                color: '#ffffff',
                padding: '0.75rem 1.25rem',
                borderRadius: '0.5rem',
                textDecoration: 'none',
                textAlign: 'center',
                display: 'block',
                marginTop: '0.5rem',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Book a Call
            </Link>
          </div>
        </motion.div>
      )}
    </>
  );
}
