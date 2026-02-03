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
    icon: "💍",
    gradient: "from-amber-500/20 via-gold/30 to-orange-500/20",
  },
  {
    title: "Corporate & Brand Experiences",
    description: "Purpose-driven corporate events executed with clarity and professionalism.",
    href: "/experiences#corporate",
    icon: "🏛️",
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
  },
  {
    title: "Private & Social Celebrations",
    description: "Intimate and milestone gatherings, elevated with thoughtful design.",
    href: "/experiences#private",
    icon: "🥂",
    gradient: "from-rose-500/20 via-pink-500/20 to-fuchsia-500/20",
  },
  {
    title: "Spiritual & Cultural Events",
    description: "Respectfully managed spiritual and cultural assemblies.",
    href: "/experiences#spiritual",
    icon: "🪷",
    gradient: "from-emerald-500/20 via-teal-500/20 to-cyan-500/20",
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
            start: "top 75%",
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
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-charcoal overflow-hidden">
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

        {/* Experiences Grid */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" style={{ perspective: "1000px" }}>
          {experiences.map((experience, index) => (
            <Link
              key={experience.title}
              href={experience.href}
              className={`experience-card group relative block p-8 md:p-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden transition-all duration-500 hover:border-gold/50 hover:bg-white/10 hover:scale-[1.02] hover:shadow-[0_20px_50px_rgba(184,143,20,0.15)]`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon and Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl">{experience.icon}</span>
                  <span className="text-6xl font-bold text-white/5 group-hover:text-gold/20 transition-colors duration-500">
                    0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-semibold text-ivory mb-4 group-hover:text-gold transition-colors duration-300">
                  {experience.title}
                </h3>

                {/* Description */}
                <p className="text-base md:text-lg text-ivory/60 leading-relaxed mb-6">
                  {experience.description}
                </p>

                {/* Arrow */}
                <div className="flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-sm font-medium">Explore</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-gold/50 rounded-tr-xl" />
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
