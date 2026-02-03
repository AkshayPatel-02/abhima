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

      // Destination cards stagger
      gsap.fromTo(
        ".destination-card",
        { opacity: 0, scale: 0.8, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".destinations-grid",
            start: "top 80%",
          },
        }
      );

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
    <section ref={sectionRef} className="relative py-24 md:py-40 bg-gradient-to-b from-ivory via-white to-ivory overflow-hidden">
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

      {/* Destinations Grid */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20">
        <div className="destinations-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {destinations.map((dest, index) => (
            <div
              key={dest.name}
              className={`destination-card group relative p-6 rounded-2xl border border-charcoal/10 bg-white hover:border-gold/50 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer ${
                dest.featured ? "md:col-span-1" : ""
              }`}
            >
              {/* Featured badge */}
              {dest.featured && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">★</span>
                </div>
              )}

              {/* Location Icon */}
              <div className="w-12 h-12 mb-4 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>

              {/* City Name */}
              <h3 className="text-lg font-semibold text-charcoal group-hover:text-gold transition-colors">
                {dest.name}
              </h3>
              <p className="text-sm text-charcoal/50">{dest.country}</p>
            </div>
          ))}
        </div>

        {/* Regional & International */}
        <div className="mt-16 text-center">
          <div ref={mapRef} className="relative inline-block">
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="px-6 py-3 rounded-full bg-charcoal/5 border border-charcoal/10">
                <span className="text-charcoal/70">🇮🇳 Telangana & Andhra Pradesh</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-charcoal/5 border border-charcoal/10">
                <span className="text-charcoal/70">🇮🇳 Pan-India Coverage</span>
              </div>
              <div className="px-6 py-3 rounded-full bg-gold/10 border border-gold/30">
                <span className="text-gold font-medium">🌍 International on Request</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-3 px-8 py-4 text-charcoal border-2 border-charcoal/20 rounded-full transition-all duration-300 hover:bg-charcoal hover:text-ivory hover:border-charcoal hover:scale-105"
          >
            <span className="font-semibold">Explore All Destinations</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
