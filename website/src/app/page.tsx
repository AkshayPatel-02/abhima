"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import InfiniteMarquee from "@/components/ui/InfiniteMarquee";

/**
 * DESIGN DEVIATION NOTE:
 * This component includes minimal parallax effects (10-20px movement) as per user request.
 * This is an intentional deviation from the Design Document which forbids parallax.
 * 
 * Parallax implementation:
 * - Very subtle (max 20px vertical movement)
 * - Only on hero content and experience cards
 * - Smooth, performance-optimized with requestAnimationFrame
 */
export default function HomePage() {
  const heroContentRef = useRef<HTMLDivElement>(null);
  const experienceCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;

        // Hero content - subtle upward parallax (max 20px)
        if (heroContentRef.current) {
          const heroParallax = Math.min(scrollY * 0.15, 20);
          heroContentRef.current.style.transform = `translateY(${heroParallax}px)`;

        }

        // Experience cards - very subtle parallax (max 10px)
        if (experienceCardsRef.current) {
          const cardsTop = experienceCardsRef.current.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;

          if (cardsTop < windowHeight && cardsTop > -500) {
            const cardsParallax = (windowHeight - cardsTop) * 0.02;
            experienceCardsRef.current.style.transform = `translateY(-${Math.min(cardsParallax, 10)}px)`;
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Hero Section with minimal parallax */}
      <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
        <div
          ref={heroContentRef}
          className="relative z-10 container mx-auto px-6 md:px-10 lg:px-20 py-20 md:py-30 text-center max-w-[1200px] transition-all duration-100"
        >

          {/* Main title with subtle fade-in */}
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-6 leading-[1.1] tracking-tight animate-fade-in">
            Crafting Events That Last a Lifetime
          </h1>

          {/* Subtitle */}
          <p className="font-poppins text-lg md:text-xl text-charcoal-70 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Bespoke weddings, corporate gatherings, and private celebrations — curated with precision, discretion, and care.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Button href="/experiences" variant="primary">
              Explore Experiences
            </Button>
            <Button href="/contact" variant="secondary">
              Begin the Conversation
            </Button>
          </div>

          {/* Trust Signal */}
          <div className="max-w-3xl mx-auto animate-fade-in mb-20" style={{ animationDelay: '0.3s' }}>
            <p className="font-poppins text-base text-charcoal-70 leading-relaxed">
              From intimate family rituals to grand destination celebrations, Abhima Events curates experiences of every scale with the same uncompromising standard.
            </p>
          </div>

          {/* Premium Carousel */}
          <div className="w-full animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <InfiniteMarquee />
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-transparent py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <p className="font-poppins text-lg md:text-xl text-charcoal leading-relaxed">
            Rooted in tradition and guided by disciplined execution, we manage every detail quietly behind the scenes — so every moment unfolds effortlessly.
          </p>
        </div>
      </section>

      {/* Signature Experiences with subtle parallax */}
      <section className="bg-transparent py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-12 text-center">
            Signature Experiences
          </h2>

          <div
            ref={experienceCardsRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-transform duration-300"
          >
            {/* Experience Card 1 - Enhanced with premium hover */}
            <div className="border border-charcoal-10 rounded-[4px] p-8 hover:border-gold hover:shadow-lg transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1">
              <h3 className="font-poppins font-semibold text-2xl md:text-[28px] text-charcoal mb-4 group-hover:text-gold transition-colors duration-200">
                Weddings & Ceremonial Celebrations
              </h3>
              <p className="font-poppins text-base text-charcoal-70 leading-relaxed">
                Tradition-honouring weddings and rituals, curated with elegance and intention.
              </p>
            </div>

            {/* Experience Card 2 */}
            <div className="border border-charcoal-10 rounded-[4px] p-8 hover:border-gold hover:shadow-lg transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1">
              <h3 className="font-poppins font-semibold text-2xl md:text-[28px] text-charcoal mb-4 group-hover:text-gold transition-colors duration-200">
                Corporate & Brand Experiences
              </h3>
              <p className="font-poppins text-base text-charcoal-70 leading-relaxed">
                Purpose-driven corporate events executed with clarity and professionalism.
              </p>
            </div>

            {/* Experience Card 3 */}
            <div className="border border-charcoal-10 rounded-[4px] p-8 hover:border-gold hover:shadow-lg transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1">
              <h3 className="font-poppins font-semibold text-2xl md:text-[28px] text-charcoal mb-4 group-hover:text-gold transition-colors duration-200">
                Private & Social Celebrations
              </h3>
              <p className="font-poppins text-base text-charcoal-70 leading-relaxed">
                Intimate and milestone gatherings, elevated with thoughtful design.
              </p>
            </div>

            {/* Experience Card 4 */}
            <div className="border border-charcoal-10 rounded-[4px] p-8 hover:border-gold hover:shadow-lg transition-all duration-300 ease-out group cursor-pointer hover:-translate-y-1">
              <h3 className="font-poppins font-semibold text-2xl md:text-[28px] text-charcoal mb-4 group-hover:text-gold transition-colors duration-200">
                Spiritual & Cultural Events
              </h3>
              <p className="font-poppins text-base text-charcoal-70 leading-relaxed">
                Respectfully managed spiritual and cultural assemblies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Abhima Standard - Enhanced with subtle gradient overlay */}
      <section className="bg-charcoal py-20 md:py-30 relative overflow-hidden">


        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center relative z-10">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-ivory mb-12">
            The Abhima Standard
          </h2>

          <div className="space-y-4 mb-12">
            <p className="font-poppins text-xl text-ivory transform hover:scale-105 transition-transform duration-200 cursor-default">
              Discretion over display.
            </p>
            <p className="font-poppins text-xl text-ivory transform hover:scale-105 transition-transform duration-200 cursor-default">
              Precision over excess.
            </p>
            <p className="font-poppins text-xl text-ivory transform hover:scale-105 transition-transform duration-200 cursor-default">
              Refinement over spectacle.
            </p>
          </div>

          <p className="font-poppins text-lg text-ivory/70 italic">
            Because true luxury is not seen — it is felt.
          </p>
        </div>
      </section>

      {/* Why Abhima Events */}
      <section className="bg-transparent py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-12 text-center">
            Why Abhima Events
          </h2>

          <div className="max-w-[800px] mx-auto space-y-6">
            {[
              'Celebrations of every scale, one unwavering standard',
              'Deep understanding of Telugu & pan-India traditions',
              'One-stop end-to-end execution',
              'Bespoke experiences, never templated',
              'Trusted Abhima legacy'
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-200"
              >
                <span className="flex-shrink-0 w-2 h-2 rounded-full bg-gold mt-2 group-hover:scale-150 transition-transform duration-200"></span>
                <p className="font-poppins text-lg text-charcoal group-hover:text-gold transition-colors duration-200">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <p className="font-poppins text-base text-charcoal-70 text-center mt-12">
            Trusted by families, institutions, and organisations across India.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="bg-transparent py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[1200px]">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-12 text-center">
            Destinations We Serve
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {['Hyderabad', 'Chennai', 'New Delhi', 'Goa', 'Jaipur', 'Udaipur', 'Kerala', 'Bangalore', 'Mumbai'].map((city) => (
              <span
                key={city}
                className="font-poppins text-base text-charcoal px-4 py-2 border border-charcoal-10 rounded-full hover:border-gold hover:text-gold hover:shadow-md transition-all duration-200 cursor-pointer"
              >
                {city}
              </span>
            ))}
          </div>

          <div className="text-center space-y-3">
            <p className="font-poppins text-base text-charcoal-70">
              Telangana & Andhra Pradesh | Across India
            </p>
            <p className="font-poppins text-base text-charcoal-70">
              International destinations on request
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-transparent py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-4xl md:text-[40px] text-charcoal mb-6">
            Begin a Timeless Celebration
          </h2>
          <div className="flex justify-center">
            <Button href="/contact" variant="primary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
