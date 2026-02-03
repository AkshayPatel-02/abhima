"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const reasons = [
  { text: "Celebrations of every scale, one unwavering standard", icon: "✨" },
  { text: "Deep understanding of Telugu & pan-India traditions", icon: "🎯" },
  { text: "One-stop end-to-end execution", icon: "🔑" },
  { text: "Bespoke experiences, never templated", icon: "🎨" },
  { text: "Trusted Abhima legacy", icon: "🏆" },
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
            start: "top 70%",
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
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-ivory overflow-hidden">
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

          {/* Right Column - Reasons List */}
          <div style={{ perspective: "1000px" }}>
            <ul ref={listRef} className="space-y-4">
              {reasons.map((reason, index) => (
                <li 
                  key={index} 
                  className="reason-item group p-6 rounded-2xl bg-white border border-charcoal/5 shadow-sm hover:shadow-lg hover:border-gold/30 transition-all duration-300 hover:scale-[1.02]"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <span className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-gold/10 rounded-xl group-hover:bg-gold/20 transition-colors">
                      {reason.icon}
                    </span>

                    <div className="flex-1">
                      {/* Number */}
                      <span className="text-xs text-gold font-semibold tracking-wider mb-2 block">
                        0{index + 1}
                      </span>

                      {/* Text */}
                      <span className="text-lg text-charcoal font-medium group-hover:text-gold transition-colors">
                        {reason.text}
                      </span>

                      {/* Progress bar */}
                      <div className="mt-3 h-1 bg-charcoal/5 rounded-full overflow-hidden">
                        <div 
                          className="progress-bar h-full bg-gradient-to-r from-gold to-gold/50 rounded-full origin-left"
                          style={{ width: `${100 - index * 10}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Trust Statement */}
            <div className="trust-statement mt-8 p-6 rounded-2xl bg-charcoal text-ivory">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-ivory/80 italic flex-1">
                  Trusted by families, institutions, and organisations across India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
