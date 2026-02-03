"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    title: "Weddings & Ceremonial Celebrations",
    description: "Tradition-honouring weddings and rituals, curated with elegance and intention.",
    href: "/experiences#weddings",
    number: "01",
  },
  {
    title: "Corporate & Brand Experiences",
    description: "Purpose-driven corporate events executed with clarity and professionalism.",
    href: "/experiences#corporate",
    number: "02",
  },
  {
    title: "Private & Social Celebrations",
    description: "Intimate and milestone gatherings, elevated with thoughtful design.",
    href: "/experiences#private",
    number: "03",
  },
  {
    title: "Spiritual & Cultural Events",
    description: "Respectfully managed spiritual and cultural assemblies.",
    href: "/experiences#spiritual",
    number: "04",
  },
];

export default function ExperiencesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );

      // Cards stagger animation with 3D effect
      const cards = cardsRef.current?.querySelectorAll(".experience-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { 
            opacity: 0, 
            y: 100,
            rotateX: -15,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 bg-charcoal overflow-hidden isolate">
      {/* Animated background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="mb-16 md:mb-20 text-center">
          <span className="inline-block px-4 py-2 mb-6 text-sm text-gold bg-gold/10 rounded-full border border-gold/20">
            What We Create
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-ivory mb-6">
            Signature <span className="text-gold">Experiences</span>
          </h2>
          <p className="text-lg md:text-xl text-ivory/60 max-w-2xl mx-auto">
            Curated celebrations across every meaningful milestone.
          </p>
        </div>

        {/* Experiences Grid - Minimal Luxury */}
        <div ref={cardsRef} className="space-y-1">
          {experiences.map((experience, index) => (
            <Link
              key={experience.title}
              href={experience.href}
              className="experience-card group relative block py-10 md:py-12 border-b border-white/10 transition-all duration-500 hover:border-gold/30"
            >
              <div className="flex items-start justify-between gap-8">
                {/* Number */}
                <span 
                  className="text-lg text-gold/40 font-light tracking-wider mt-1"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {experience.number}
                </span>

                {/* Content */}
                <div className="flex-1">
                  <h3 
                    className="text-3xl md:text-4xl lg:text-5xl font-light text-ivory mb-4 group-hover:text-gold transition-colors duration-500 tracking-wide"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {experience.title}
                  </h3>
                  <p 
                    className="text-base md:text-lg text-ivory/50 leading-relaxed max-w-2xl font-light"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    {experience.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-white/10 group-hover:border-gold/50 group-hover:bg-gold/10 transition-all duration-500">
                  <svg 
                    className="w-5 h-5 text-ivory/40 group-hover:text-gold transform group-hover:translate-x-1 transition-all" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <Link
            href="/experiences"
            className="group inline-flex items-center gap-3 px-8 py-4 text-gold border-2 border-gold/30 rounded-full transition-all duration-300 hover:bg-gold hover:text-charcoal hover:border-gold hover:scale-105"
          >
            <span className="font-semibold">View All Experiences</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
