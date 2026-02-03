"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const destinations = [
  { name: "Hyderabad", country: "India", featured: true },
  { name: "Chennai", country: "India", featured: true },
  { name: "New Delhi", country: "India", featured: true },
  { name: "Goa", country: "India", featured: false },
  { name: "Jaipur", country: "India", featured: true },
  { name: "Udaipur", country: "India", featured: true },
  { name: "Kerala", country: "India", featured: false },
  { name: "Bangalore", country: "India", featured: true },
  { name: "Mumbai", country: "India", featured: true },
];

export default function DestinationsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".dest-header",
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

      // Infinite horizontal scroll marquee
      const marquee = marqueeRef.current;
      if (marquee) {
        const marqueeContent = marquee.querySelector(".marquee-content") as HTMLElement;
        if (marqueeContent) {
          // Clone content for seamless loop
          const clone = marqueeContent.cloneNode(true);
          marquee.appendChild(clone);

          gsap.to(marquee.querySelectorAll(".marquee-content"), {
            xPercent: -100,
            repeat: -1,
            duration: 30,
            ease: "linear",
          });
        }
      }

    //   // Destination cards stagger
    //   gsap.fromTo(
    //     ".destination-card",
    //     { opacity: 0, scale: 0.8, y: 30 },
    //     {
    //       opacity: 1,
    //       scale: 1,
    //       y: 0,
    //       duration: 0.6,
    //       stagger: 0.08,
    //       ease: "back.out(1.7)",
    //       scrollTrigger: {
    //         trigger: ".destinations-grid",
    //         start: "top 80%",
    //       },
    //     }
    //   );

      // Map animation
      gsap.fromTo(
        mapRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: mapRef.current,
            start: "top 80%",
          },
        }
      );

      // Floating pins on map
      gsap.to(".map-pin", {
        y: "random(-5, 5)",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.3,
          from: "random",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-12 md:py-20 bg-gradient-to-b from-ivory via-white to-ivory overflow-hidden">
      {/* Section Header */}
      <div className="dest-header text-center mb-16 px-6">
        <span className="inline-block px-4 py-2 mb-6 text-sm text-gold bg-gold/10 rounded-full border border-gold/20">
          Our Reach
        </span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-charcoal mb-6">
          Destinations We <span className="text-gold">Serve</span>
        </h2>
        <p className="text-lg md:text-xl text-charcoal/60 max-w-2xl mx-auto">
          Hand-picked locations curated for seamless destination celebrations.
        </p>
      </div>

      {/* Infinite Marquee */}
      <div className="mb-16 overflow-hidden bg-charcoal py-6">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          <div className="marquee-content flex items-center gap-16 px-8">
            {[...destinations, ...destinations].map((dest, i) => (
              <span key={i} className="flex items-center gap-4">
                <span className="text-3xl md:text-4xl font-semibold text-ivory/90 hover:text-gold transition-colors cursor-default">
                  {dest.name}
                </span>
                <span className="w-2 h-2 rounded-full bg-gold" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
