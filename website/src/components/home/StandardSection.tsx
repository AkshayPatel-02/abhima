"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const principles = [
  { text: "Discretion over display.", color: "text-ivory" },
  { text: "Precision over excess.", color: "text-gold" },
  { text: "Refinement over spectacle.", color: "text-ivory" },
];

export default function StandardSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const principlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Label fade in
      gsap.fromTo(
        ".standard-label",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Principles reveal one by one
      const lines = principlesRef.current?.querySelectorAll(".principle-line");
      if (lines) {
        lines.forEach((line, i) => {
          gsap.fromTo(
            line,
            { 
              opacity: 0, 
              x: i % 2 === 0 ? -100 : 100,
              scale: 0.9,
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 1,
              ease: "power4.out",
              scrollTrigger: {
                trigger: line,
                start: "top 85%",
              },
            }
          );
        });
      }

      // Closing statement
      gsap.fromTo(
        ".closing-statement",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".closing-statement",
            start: "top 90%",
          },
        }
      );

      // Animate decorative elements
      gsap.to(".float-element", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
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
    <section ref={sectionRef} className="relative py-32 md:py-48 bg-charcoal text-ivory overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="float-element absolute top-20 left-10 w-2 h-2 bg-gold/30 rounded-full" />
        <div className="float-element absolute top-40 right-20 w-3 h-3 bg-gold/20 rounded-full" />
        <div className="float-element absolute bottom-32 left-1/4 w-4 h-4 bg-gold/10 rounded-full" />
        <div className="float-element absolute bottom-20 right-1/3 w-2 h-2 bg-gold/25 rounded-full" />
        
        {/* Large gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[200px] opacity-10"
          style={{ background: "radial-gradient(circle, #B88F14 0%, transparent 60%)" }}
        />
      </div>

      <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <div className="standard-label inline-flex items-center gap-3 px-5 py-2 mb-12 rounded-full bg-gold/10 border border-gold/20">
            <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold font-medium tracking-wider uppercase">
              The Abhima Standard
            </span>
          </div>

          {/* Core Principles */}
          <div ref={principlesRef} className="space-y-8 mb-16">
            {principles.map((principle, index) => (
              <div key={index} className="principle-line overflow-hidden">
                <p className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight ${principle.color}`}>
                  {principle.text}
                </p>
              </div>
            ))}
          </div>

          {/* Decorative separator */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-3 h-3 rounded-full bg-gold/30 border border-gold/50" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gold/50" />
          </div>

          {/* Closing Statement */}
          <p className="closing-statement text-xl md:text-2xl text-ivory/60 italic font-light">
            Because true luxury is not seen — <span className="text-gold">it is felt</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
