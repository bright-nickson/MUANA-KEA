"use client";

import { motion } from "framer-motion";

export function PremiumHero() {
  return (
    <section 
      className="min-h-screen relative flex items-center pt-16 overflow-hidden"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '4rem',
        overflow: 'hidden'
      }}
    >
      {/* Technical Grid Background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
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

      <div style={{
        width: '100%',
        margin: '0 auto',
        padding: '0 1.5rem',
        position: 'relative',
        zIndex: 10,
        display: 'grid',
        gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        gap: '3rem',
        alignItems: 'flex-end',
        paddingBottom: '5rem'
      }}>
        {/* Text Content */}
        <div style={{
          gridColumn: 'span 7 / span 8'
        }}>
          <motion.div 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            style={{
              overflow: 'hidden',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.75rem',
              fontSize: '10px',
              fontFamily: 'JetBrains Mono, monospace',
              color: '#991b1b',
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }}>
              <span style={{
                width: '0.375rem',
                height: '0.375rem',
                backgroundColor: '#991b1b',
                borderRadius: '0.125rem'
              }} /> 
              System Status: Nominal
            </div>
          </motion.div>
          
          <h1 style={{
            fontSize: '3.75rem',
            lineHeight: 1,
            fontWeight: '500',
            letterSpacing: '-0.025em',
            marginBottom: '3rem',
            color: '#ffffff'
          }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                style={{ display: 'block' }}
              >
                Precision
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 }}
                style={{ display: 'block' }}
              >
                Infrastructure
              </motion.span>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.span 
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.5 }}
                style={{ 
                  display: 'block',
                  color: '#6b7280'
                }}
              >
                For The Future
              </motion.span>
            </div>
          </h1>

          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            style={{ maxWidth: '28rem' }}
          >
            <p style={{
              color: '#9ca3af',
              fontSize: '0.875rem',
              lineHeight: '1.625',
              fontWeight: '300'
            }}>
              We architect the unseen backbone of the Fortune 500. Decoupling complexity, enforcing security, and engineering resilience at scale.
            </p>
          </motion.div>
        </div>

        {/* Abstract Visual Anchor */}
        <div style={{
          gridColumn: 'span 5 / span 6',
          height: '400px',
          position: 'relative',
          width: '100%'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, #121212 0%, #0a0a0a 100%)',
              overflow: 'hidden',
              borderLeft: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0), transparent)',
              backgroundAttachment: 'scroll'
            }} />
            
            {/* Abstract UI overlay simulation */}
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
              color: '#6b7280'
            }}>
              <span>LAT: 41.8781</span>
              <span>NET: SECURE</span>
              <span>LOAD: 42%</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
