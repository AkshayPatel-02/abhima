"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "#", icon: "📷" },
  { name: "LinkedIn", href: "#", icon: "💼" },
  { name: "WhatsApp", href: "https://wa.me/919876543210", icon: "💬" },
];

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".footer-column",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-charcoal text-ivory overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[150px]" />

      {/* Main Footer Content */}
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="footer-column lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold text-xl">A</span>
              </div>
              <span className="text-2xl font-semibold tracking-tight uppercase">
                Abhima
              </span>
            </div>
            <p className="text-sm text-ivory/60 leading-relaxed mb-6">
              A bespoke event curation house — where legacy, culture, and quiet luxury converge.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-ivory/5 border border-ivory/10 flex items-center justify-center text-lg hover:bg-gold/20 hover:border-gold/30 transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h3 className="text-sm font-semibold mb-6 text-gold uppercase tracking-wider">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm text-ivory/60 hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-gold group-hover:w-3 transition-all" />
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h3 className="text-sm font-semibold mb-6 text-gold uppercase tracking-wider">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {["Weddings", "Corporate Events", "Private Parties", "Spiritual Gatherings", "Destination Events"].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-ivory/60 hover:text-gold hover:translate-x-1 transition-all inline-flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-gold group-hover:w-3 transition-all" />
                  {service}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact */}
          <div className="footer-column">
            <h3 className="text-sm font-semibold mb-6 text-gold uppercase tracking-wider">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:info@abhimaevents.com"
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-ivory/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  📧
                </div>
                info@abhimaevents.com
              </a>
              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-ivory/60 hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-ivory/5 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                  📞
                </div>
                +91 98765 43210
              </a>
              <div className="flex items-start gap-3 text-sm text-ivory/60">
                <div className="w-8 h-8 rounded-lg bg-ivory/5 flex items-center justify-center flex-shrink-0">
                  📍
                </div>
                <span>
                  Based in Hyderabad<br />
                  Serving India & Beyond
                </span>
              </div>
            </div>

            {/* Newsletter signup teaser */}
            <div className="mt-8 p-4 rounded-xl bg-ivory/5 border border-ivory/10">
              <p className="text-xs text-ivory/50 mb-3">Stay inspired</p>
              <Link 
                href="/contact"
                className="text-sm text-gold hover:text-ivory transition-colors flex items-center gap-2"
              >
                Subscribe to updates
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="relative z-10 border-t border-ivory/10">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-ivory/40">
              © {new Date().getFullYear()} Abhima Events. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/faqs" className="text-xs text-ivory/40 hover:text-gold transition-colors">
                Privacy Policy
              </Link>
              <Link href="/faqs" className="text-xs text-ivory/40 hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
