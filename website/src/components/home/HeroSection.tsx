"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const gradientRef = useRef<HTMLDivElement>(null);
  const orb1Ref = useRef<HTMLDivElement>(null);
  const orb2Ref = useRef<HTMLDivElement>(null);
  const orb3Ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline({ delay: 0.3 });

      // Animate gradient orbs floating
      gsap.to(orb1Ref.current, {
        x: "random(-50, 50)",
        y: "random(-30, 30)",
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        x: "random(-40, 40)",
        y: "random(-40, 40)",
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb3Ref.current, {
        x: "random(-60, 60)",
        y: "random(-20, 20)",
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Title animation - split into chars
      if (titleRef.current) {
        const chars = titleRef.current.querySelectorAll(".char");
        tl.fromTo(
          chars,
          { 
            opacity: 0, 
            y: 100,
            rotateX: -90,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 1,
            stagger: 0.03,
            ease: "back.out(1.7)",
          }
        );
      }

      // Subtitle animation
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      );

      // Buttons animation
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("a");
        tl.fromTo(
          buttons,
          { opacity: 0, y: 20, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(2)",
          },
          "-=0.3"
        );
      }

      // Parallax effect on scroll
      gsap.to(gradientRef.current, {
        yPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Scale down hero on scroll
      gsap.to(heroRef.current, {
        scale: 0.9,
        opacity: 0.5,
        borderRadius: "40px",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Split text into characters for animation
  const splitText = (text: string) => {
    return text.split("").map((char, i) => (
      <span
        key={i}
        className="char inline-block"
        style={{ perspective: "1000px" }}
      >
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-charcoal"
    >
      {/* Animated gradient background */}
      <div 
        ref={gradientRef}
        className="absolute inset-0 overflow-hidden"
      >
        {/* Gradient orbs */}
        <div
          ref={orb1Ref}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-[100px] opacity-60"
          style={{
            background: "radial-gradient(circle, #B88F14 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb2Ref}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50"
          style={{
            background: "radial-gradient(circle, #D4A853 0%, transparent 70%)",
          }}
        />
        <div
          ref={orb3Ref}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[150px] opacity-30"
          style={{
            background: "radial-gradient(circle, #8B6914 0%, transparent 60%)",
          }}
        />
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(184, 143, 20, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(184, 143, 20, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise texture overlay */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-padding text-center">
        <div className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gold/10 border border-gold/30 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-gold font-medium tracking-wide">
              Crafting Extraordinary Moments
            </span>
          </div>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold text-ivory mb-6 leading-tight"
            style={{ perspective: "1000px" }}
          >
            <span className="block">{splitText("Abhima")}</span>
            <span className="block mt-2">
              <span className="text-gold">{splitText("Events")}</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-ivory/70 max-w-2xl mx-auto mb-10 font-light"
          >
            A bespoke event curation house — where legacy, culture, and 
            <span className="text-gold"> quiet luxury </span>
            converge to create unforgettable celebrations.
          </p>

          {/* CTA Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/experiences"
              className="group relative px-8 py-4 bg-gold text-charcoal font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(184,143,20,0.4)]"
            >
              <span className="relative z-10">Explore Experiences</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-[#D4A853] to-gold bg-[length:200%_100%] animate-shimmer" />
            </Link>
            <Link
              href="/contact"
              className="group px-8 py-4 border-2 border-gold/50 text-gold font-semibold rounded-full transition-all duration-300 hover:bg-gold/10 hover:border-gold hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center gap-2 justify-center">
                Begin Your Journey
                <svg 
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-ivory/50 text-sm tracking-widest uppercase">Scroll</span>
        <svg 
          className="w-6 h-6 text-gold" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
