"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  { text: "Celebrations of every scale, one unwavering standard", number: "01" },
  { text: "Deep understanding of Telugu & pan-India traditions", number: "02" },
  { text: "One-stop end-to-end execution", number: "03" },
  { text: "Bespoke experiences, never templated", number: "04" },
  { text: "Trusted Abhima legacy", number: "05" },
];

export default function WhyAbhimaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
          },
        }
      );

      // List items stagger with slide and rotate
      const items = listRef.current?.querySelectorAll(".reason-item");
      if (items) {
        gsap.fromTo(
          items,
          { 
            opacity: 0, 
            x: 100,
            rotateY: -30,
          },
          {
            opacity: 1,
            x: 0,
            rotateY: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Progress bars animation
      const bars = listRef.current?.querySelectorAll(".progress-bar");
      if (bars) {
        gsap.fromTo(
          bars,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 1.5,
            stagger: 0.1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: listRef.current,
              start: "top 75%",
            },
          }
        );
      }

      // Trust statement
      gsap.fromTo(
        ".trust-statement",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".trust-statement",
            start: "top 90%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 bg-ivory overflow-hidden isolate">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-[100px] -translate-x-1/2 translate-y-1/2" />

      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Column - Header */}
          <div ref={headerRef} className="lg:sticky lg:top-32">
            <span className="inline-block px-4 py-2 mb-6 text-sm text-gold bg-charcoal/5 rounded-full border border-charcoal/10">
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6 leading-tight">
              Why <span className="text-gold">Abhima</span> Events
            </h2>
            <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed">
              Every celebration we undertake is guided by a singular standard — 
              one that values trust, precision, and cultural understanding above all.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 pt-10 border-t border-charcoal/10">
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-gold">15+</p>
                <p className="text-sm text-charcoal/60 mt-1">Years Legacy</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-gold">500+</p>
                <p className="text-sm text-charcoal/60 mt-1">Events Curated</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-semibold text-gold">50+</p>
                <p className="text-sm text-charcoal/60 mt-1">Destinations</p>
              </div>
            </div>
          </div>

          {/* Right Column - Elegant List */}
          <div>
            <ul ref={listRef} className="space-y-0">
              {reasons.map((reason, index) => (
                <li 
                  key={index} 
                  className="reason-item group py-8 border-b border-charcoal/10 last:border-b-0 hover:border-gold/20 transition-all duration-500"
                >
                  <div className="flex items-center gap-6">
                    {/* Number */}
                    <span 
                      className="text-sm text-gold/40 font-light tracking-widest w-12"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {reason.number}
                    </span>

                    {/* Text */}
                    <span 
                      className="text-xl md:text-2xl text-charcoal font-light group-hover:text-gold transition-colors duration-500 flex-1"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {reason.text}
                    </span>

                    {/* Decorative line */}
                    <div className="hidden md:block">
                      <div className="w-12 h-px bg-charcoal/10 group-hover:bg-gold/50 group-hover:w-16 transition-all duration-500" />
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust Statement */}
            <div className="trust-statement mt-12 pt-8 border-t border-charcoal/10">
              <p 
                className="text-charcoal/60 italic text-lg font-light"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Trusted by families, institutions, and organisations across India.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
