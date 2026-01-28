"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationConfig {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  pinSpacing?: boolean;
  once?: boolean;
  ease?: string;
  duration?: number;
  delay?: number;
  stagger?: number;
}

interface SectionEntryConfig extends ScrollAnimationConfig {
  opacity?: [number, number];
  y?: [number, number];
  x?: [number, number];
  scale?: [number, number];
}

interface TextRevealConfig extends ScrollAnimationConfig {
  stagger?: number;
  y?: [number, number];
  opacity?: [number, number];
}

export const useGsapScroll = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Default animation configuration
  const defaultConfig = {
    ease: "power3.out",
    duration: 0.9,
    start: "top 80%",
    once: true,
  };

  // Section entry animation (fade in + slight upward motion)
  const sectionEntry = (
    elements: string | NodeListOf<Element>,
    config: SectionEntryConfig = {}
  ) => {
    const finalConfig = { ...defaultConfig, ...config };
    
    gsap.fromTo(
      elements,
      {
        opacity: config.opacity?.[0] ?? 0,
        y: config.y?.[0] ?? 24,
      },
      {
        opacity: config.opacity?.[1] ?? 1,
        y: config.y?.[1] ?? 0,
        ease: finalConfig.ease,
        duration: finalConfig.duration,
        delay: config.delay ?? 0,
        scrollTrigger: {
          trigger: config.trigger || elements,
          start: config.start || finalConfig.start,
          once: finalConfig.once,
          scrub: config.scrub,
        },
      }
    );
  };

  // Staggered text reveal for headings
  const textReveal = (
    elements: string | NodeListOf<Element>,
    config: TextRevealConfig = {}
  ) => {
    const finalConfig = { 
      ...defaultConfig, 
      stagger: 0.08,
      ...config 
    };
    
    gsap.fromTo(
      elements,
      {
        opacity: config.opacity?.[0] ?? 0,
        y: config.y?.[0] ?? 16,
      },
      {
        opacity: config.opacity?.[1] ?? 1,
        y: config.y?.[1] ?? 0,
        ease: finalConfig.ease,
        duration: finalConfig.duration,
        delay: config.delay ?? 0,
        stagger: finalConfig.stagger,
        scrollTrigger: {
          trigger: config.trigger || elements,
          start: config.start || finalConfig.start,
          once: finalConfig.once,
          scrub: config.scrub,
        },
      }
    );
  };

  // Parallax effect for background elements
  const parallax = (
    elements: string | NodeListOf<Element>,
    speed: number = 0.5,
    config: ScrollAnimationConfig = {}
  ) => {
    gsap.to(elements, {
      yPercent: -50 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: config.trigger || elements,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        ...config,
      },
    });
  };

  // Scale reveal for cards or featured elements
  const scaleReveal = (
    elements: string | NodeListOf<Element>,
    config: SectionEntryConfig = {}
  ) => {
    const finalConfig = { ...defaultConfig, ...config };
    
    gsap.fromTo(
      elements,
      {
        opacity: config.opacity?.[0] ?? 0,
        scale: config.scale?.[0] ?? 0.95,
        y: config.y?.[0] ?? 20,
      },
      {
        opacity: config.opacity?.[1] ?? 1,
        scale: config.scale?.[1] ?? 1,
        y: config.y?.[1] ?? 0,
        ease: finalConfig.ease,
        duration: finalConfig.duration,
        delay: config.delay ?? 0,
        scrollTrigger: {
          trigger: config.trigger || elements,
          start: config.start || finalConfig.start,
          once: finalConfig.once,
          scrub: config.scrub,
        },
      }
    );
  };

  // Staggered card reveal
  const staggeredCards = (
    elements: string | NodeListOf<Element>,
    config: SectionEntryConfig = {}
  ) => {
    const finalConfig = { 
      ...defaultConfig, 
      stagger: 0.12,
      ...config 
    };
    
    gsap.fromTo(
      elements,
      {
        opacity: config.opacity?.[0] ?? 0,
        y: config.y?.[0] ?? 30,
        scale: config.scale?.[0] ?? 0.98,
      },
      {
        opacity: config.opacity?.[1] ?? 1,
        y: config.y?.[1] ?? 0,
        scale: config.scale?.[1] ?? 1,
        ease: finalConfig.ease,
        duration: finalConfig.duration,
        delay: config.delay ?? 0,
        stagger: finalConfig.stagger,
        scrollTrigger: {
          trigger: config.trigger || elements,
          start: config.start || finalConfig.start,
          once: finalConfig.once,
          scrub: config.scrub,
        },
      }
    );
  };

  // Cleanup scroll triggers on unmount
  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return {
    containerRef,
    sectionEntry,
    textReveal,
    parallax,
    scaleReveal,
    staggeredCards,
    gsap,
    ScrollTrigger,
  };
};
