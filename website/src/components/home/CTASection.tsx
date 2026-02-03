"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Card scale in
      gsap.fromTo(
        cardRef.current,
        { scale: 0.8, opacity: 0, rotateX: 10 },
        {
          scale: 1,
          opacity: 1,
          rotateX: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Text stagger
      gsap.fromTo(
        ".cta-text",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 70%",
          },
        }
      );

      // Floating particles
      gsap.to(".cta-particle", {
        y: "random(-30, 30)",
        x: "random(-20, 20)",
        opacity: "random(0.3, 0.8)",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.5,
          from: "random",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-ivory overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-20 relative z-10">
        <div
          ref={cardRef}
          className="relative rounded-[40px] overflow-hidden"
          style={{ perspective: "1000px" }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal to-charcoal/90" />
          
          {/* Animated gradient overlay */}
          <div 
            className="absolute inset-0 opacity-50"
            style={{
              background: "linear-gradient(45deg, transparent 30%, rgba(184, 143, 20, 0.3) 50%, transparent 70%)",
              backgroundSize: "200% 200%",
              animation: "gradient-shift 5s ease infinite",
            }}
          />

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="cta-particle absolute top-10 left-20 w-3 h-3 bg-gold/30 rounded-full" />
            <div className="cta-particle absolute top-1/3 right-16 w-2 h-2 bg-gold/40 rounded-full" />
            <div className="cta-particle absolute bottom-20 left-1/3 w-4 h-4 bg-gold/20 rounded-full" />
            <div className="cta-particle absolute bottom-1/4 right-1/4 w-2 h-2 bg-gold/50 rounded-full" />
            <div className="cta-particle absolute top-1/2 left-10 w-3 h-3 bg-gold/25 rounded-full" />
          </div>

          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(184, 143, 20, 0.5) 1px, transparent 1px),
                linear-gradient(90deg, rgba(184, 143, 20, 0.5) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16 md:py-24 text-center">
            {/* Icon */}
            <div className="cta-text inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-gold/10 border border-gold/30">
              <svg className="w-10 h-10 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
              </svg>
            </div>

            {/* Headline */}
            <h2 className="cta-text text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6 leading-tight">
              Begin a <span className="text-gold">Timeless</span> Celebration
            </h2>

            {/* Supporting text */}
            <p className="cta-text text-lg md:text-xl text-ivory/60 mb-10 max-w-xl mx-auto">
              If your celebration matters, it deserves thoughtful stewardship. 
              Let&apos;s create something extraordinary together.
            </p>

            {/* CTA Buttons */}
            <div className="cta-text flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group relative px-10 py-5 bg-gold text-charcoal font-semibold text-lg rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_50px_rgba(184,143,20,0.4)]"
              >
                <span className="relative z-10 flex items-center gap-3 justify-center">
                  Start Your Journey
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-[#D4A853] to-gold bg-[length:200%_100%] animate-shimmer" />
              </Link>

              <Link
                href="tel:+919876543210"
                className="group px-10 py-5 border-2 border-ivory/30 text-ivory font-semibold text-lg rounded-full transition-all duration-300 hover:bg-ivory/10 hover:border-ivory hover:scale-105"
              >
                <span className="flex items-center gap-3 justify-center">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call Us
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Add keyframes for gradient animation */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}
