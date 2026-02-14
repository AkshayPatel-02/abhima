"use client";

import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Design-compliant Hero Section following ABHIMA Events Design Document
 * 
 * Design Rules:
 * - Clean Ivory background (NO gradients, particles, or orbs)
 * - NO GSAP animations (parallax, scale-on-scroll, character reveals)
 * - NO decorative elements (floating particles, grid overlays, noise textures)
 * - Only Poppins font family (NO Playfair Display or Inter)
 * - Generous white space: 80px vertical padding (desktop), 60px (mobile)
 * - Button hover states only (color transitions, 0.2s ease-out)
 */
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-ivory overflow-hidden">
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-30 text-center max-w-[1200px]">

        {/* Main title */}
        <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-6 leading-[1.1] tracking-tight">
          Where legacy, culture, and quiet luxury converge
        </h1>

        {/* Subtitle */}
        <p className="font-poppins text-lg md:text-xl text-charcoal-70 max-w-3xl mx-auto mb-12 leading-relaxed">
          A bespoke event curation house creating unforgettable celebrations with discretion, precision, and cultural authenticity.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/experiences" variant="primary">
            Explore Experiences
          </Button>
          <Button href="/contact" variant="secondary">
            Begin Conversation
          </Button>
        </div>

        {/* Trust Signal */}
        <div className="mt-16 pt-8 border-t border-charcoal-10 max-w-2xl mx-auto">
          <p className="font-poppins text-sm text-charcoal-50 mb-3">
            Based in Hyderabad | Serving India & Beyond
          </p>
          <div className="flex flex-wrap gap-6 justify-center text-sm text-charcoal-70">
            <span>Weddings & Ceremonial Celebrations</span>
            <span className="text-charcoal-20">•</span>
            <span>Corporate & Brand Experiences</span>
            <span className="text-charcoal-20">•</span>
            <span>Spiritual & Cultural Events</span>
          </div>
        </div>
      </div>
    </section>
  );
}
