"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const SLIDE_INTERVAL_MS = 9000;

const slides = [
  {
    id: 0,
    eyebrow: "Positioning",
    title: "Trusted technology execution partner",
    body:
      "Mauna Kea Consulting works with C-level and technology leaders to move critical programmes from intent to production across Africa and the Middle East.",
    cta: "Explore Our Approach",
    ctaSecondary: "Schedule Consultation",
  },
  {
    id: 1,
    eyebrow: "Execution model",
    title: "From strategy deck to supported platform",
    body:
      "We design, build, and operate alongside your teams, with clear accountabilities and a disciplined Pilot → Prove → Scale pathway.",
    cta: "View Services",
    ctaSecondary: "Book Expert Session",
  },
  {
    id: 2,
    eyebrow: "Regional value",
    title: "Global practices tuned to regional realities",
    body:
      "Delivery patterns that respect regulatory, connectivity, and talent dynamics while keeping you aligned with global engineering and security standards.",
    cta: "Learn More",
    ctaSecondary: "Contact Us",
  },
];

export function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[activeIndex];

  return (
    <motion.section 
      aria-label="Mauna Kea Consulting positioning" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      style={{ y, opacity }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-crimson/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-crimson-soft/15 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] lg:items-center">
          <div className="space-y-8">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 glass px-6 py-3 rounded-full border border-white/10"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="w-2 h-2 rounded-full bg-crimson"
              />
              <span className="text-sm font-medium text-gradient">Technology consulting & managed services</span>
            </motion.div>

            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-6"
              >
                <motion.p 
                  className="text-sm font-semibold uppercase tracking-[0.3em] text-crimson"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {activeSlide.eyebrow}
                </motion.p>
                
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient leading-tight"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {activeSlide.title}
                </motion.h1>
                
                <motion.p 
                  className="text-lg md:text-xl leading-relaxed text-muted-soft max-w-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {activeSlide.body}
                </motion.p>
              </motion.div>
            </AnimatePresence>

            {/* CTAs */}
            <motion.div 
              className="flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-premium px-8 py-4 rounded-full text-base font-semibold text-white shadow-premium-lg"
                onClick={() => window.location.href = "/calendar"}
              >
                {activeSlide.cta}
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-8 py-4 rounded-full text-base font-semibold text-gradient border border-white/10 hover:bg-white/5 transition-all duration-300"
                onClick={() => window.location.href = "/contact"}
              >
                {activeSlide.ctaSecondary}
              </motion.button>
            </motion.div>

            {/* Slide Indicators */}
            <motion.div 
              className="flex items-center gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {slides.map((slide, index) => (
                <motion.button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? "w-12 bg-crimson"
                      : "w-2 bg-muted hover:bg-muted-soft"
                  }`}
                  aria-label={`Show slide: ${slide.title}`}
                  aria-pressed={index === activeIndex}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </motion.div>
          </div>

          {/* Right Side - Engagement Model */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="card-premium p-8 shadow-premium-lg">
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-gradient">How we typically engage</h3>
                  <p className="text-sm text-muted-soft leading-relaxed">
                    Strategy and architecture working sessions with technology and business leaders,
                    followed by focused pilots that prove value and inform scaled rollout.
                  </p>
                </div>
                
                <div className="space-y-4">
                  {[
                    { title: "Advisory", desc: "Roadmaps, governance, portfolio decisions.", icon: "🎯" },
                    { title: "Execution", desc: "Integration, engineering, and cybersecurity.", icon: "⚡" },
                    { title: "Run", desc: "Managed services for critical platforms.", icon: "🚀" },
                  ].map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      className="glass p-4 rounded-xl border border-white/10 hover:bg-white/5 transition-all duration-300"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gradient">{item.title}</h4>
                          <p className="text-xs text-muted-soft mt-1">{item.desc}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-muted-soft/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-3 bg-muted-soft/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
