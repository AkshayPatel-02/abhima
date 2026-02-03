"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function IntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Text reveal animation word by word
      const words = textRef.current?.querySelectorAll(".word");
      if (words) {
        gsap.fromTo(
          words,
          { 
            opacity: 0.2,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      // Decorative elements animation
      gsap.fromTo(
        ".intro-line",
        { scaleX: 0 },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const splitIntoWords = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-[0.3em]">
        {word}
      </span>
    ));
  };

  return (
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-ivory overflow-hidden">
      {/* Decorative gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #B88F14 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-[900px] px-6 md:px-10 relative z-10">
        {/* Decorative line */}
        <div className="intro-line h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-12 origin-center" />

        {/* Introduction Text */}
        <div ref={textRef} className="space-y-10 text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl text-charcoal leading-relaxed font-light">
            {splitIntoWords("From intimate family rituals to grand destination celebrations, Abhima Events curates experiences of every scale with the same uncompromising standard.")}
          </p>
          
          <p className="text-lg md:text-xl text-charcoal/60 leading-relaxed max-w-2xl mx-auto">
            {splitIntoWords("Rooted in tradition and guided by disciplined execution, we manage every detail quietly behind the scenes — so every moment unfolds effortlessly.")}
          </p>
        </div>

        {/* Decorative line */}
        <div className="intro-line h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-12 origin-center" />
      </div>
    </section>
  );
}
