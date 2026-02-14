"use client";

import { useState, useEffect } from "react";

/**
 * Mobile-only "Back to Top" control following Design Document
 * 
 * Design Rules:
 * - Show after 75% scroll depth on mobile only
 * - Position: Bottom-right, 24px from edges
 * - Style: Text-only ("↑ Top") or minimal up-arrow
 * - Charcoal 70% opacity, Poppins Regular 14px
 * - Background: Ivory 90% opacity, 8px border-radius
 * - Smooth scroll to top (0.5s ease-out)
 * - Fade out when user scrolls above 50% depth
 */
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      // Show after 75% scroll, hide above 50%
      if (scrollPercentage > 75) {
        setShow(true);
      } else if (scrollPercentage < 50) {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!show) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-40
        lg:hidden
        px-3 py-2 rounded-lg
        bg-ivory/90 backdrop-blur-sm
        text-charcoal-70 
        font-poppins text-sm
        transition-opacity duration-200
        hover:text-charcoal
        shadow-sm
      "
      aria-label="Back to top"
    >
      ↑ Top
    </button>
  );
}
