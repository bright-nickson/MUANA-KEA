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
          padding: '0 2rem',
          backgroundColor: scrolled ? 'rgba(5, 5, 5, 0.85)' : 'rgba(5, 5, 5, 0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s ease-in-out'
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div 
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: '#8b0000',
              borderRadius: '2px'
            }}
          />
          <Link 
            href="/"
            style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#ffffff',
              textDecoration: 'none',
              letterSpacing: '-0.025em'
            }}
          >
            Mauna Kea Consulting
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
            href="/calendar" 
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
            Calendar
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
            backgroundColor: 'rgba(5, 5, 5, 0.95)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            zIndex: 40,
            padding: '1rem 2rem'
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
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
                display: 'block'
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
                display: 'block'
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
                display: 'block'
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
                display: 'block'
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
                marginTop: '0.5rem'
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
