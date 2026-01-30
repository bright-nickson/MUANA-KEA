"use client";

import { useEffect } from "react";

export function SmoothScroll() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const navHeight = 80; // Account for fixed nav
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }
        }
      }
    };

    // Add click event listener to the document
    document.addEventListener('click', handleAnchorClick);

    // Clean up event listener
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return null;
}
