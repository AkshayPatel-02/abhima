"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  // Check if we're on a dark hero page (home)
  const isDarkHero = pathname === "/";

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-charcoal/95 backdrop-blur-lg shadow-lg border-b border-gold/10" 
          : isDarkHero
            ? "bg-transparent"
            : "bg-ivory/80 backdrop-blur-sm border-b border-charcoal/10"
      }`}
    >
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center group-hover:bg-gold/30 transition-colors">
              <span className="text-gold font-bold text-lg">A</span>
            </div>
            <span className={`text-xl font-semibold tracking-tight uppercase transition-colors ${
              scrolled || !isDarkHero ? "text-charcoal" : "text-ivory"
            } group-hover:text-gold`}>
              Abhima
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive(item.href)
                    ? "text-gold bg-gold/10"
                    : scrolled || !isDarkHero
                      ? "text-charcoal/80 hover:text-gold hover:bg-gold/5"
                      : "text-ivory/80 hover:text-gold hover:bg-white/5"
                }`}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="group relative inline-flex h-11 items-center justify-center px-6 bg-gold text-charcoal text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(184,143,20,0.3)]"
            >
              <span className="relative z-10">Begin Conversation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-[#D4A853] to-gold bg-[length:200%_100%] opacity-0 group-hover:opacity-100 animate-shimmer transition-opacity" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className={`lg:hidden p-2 rounded-full transition-colors ${
              scrolled || !isDarkHero 
                ? "text-charcoal hover:bg-charcoal/5" 
                : "text-ivory hover:bg-white/10"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-charcoal px-6 py-6"
            style={{
              animation: "slideIn 0.3s ease-out",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-bold text-lg">A</span>
                </div>
                <span className="text-xl font-semibold tracking-tight text-ivory uppercase">
                  Abhima
                </span>
              </div>
              <button
                type="button"
                className="p-2 text-ivory/80 hover:text-gold rounded-full hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="flex flex-col gap-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-4 py-4 px-4 text-lg font-medium transition-all rounded-xl ${
                    isActive(item.href)
                      ? "text-gold bg-gold/10"
                      : "text-ivory/80 hover:text-gold hover:bg-white/5"
                  }`}
                  style={{
                    animation: `fadeSlideIn 0.4s ease-out ${index * 0.05}s both`,
                  }}
                >
                  <span className="text-sm text-gold/50 font-mono">0{index + 1}</span>
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-10 pt-8 border-t border-ivory/10">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 w-full py-4 bg-gold text-charcoal font-semibold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(184,143,20,0.3)]"
              >
                Begin Conversation
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Contact Info */}
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-ivory/40 text-sm mb-2">Get in touch</p>
              <a href="tel:+919876543210" className="text-ivory/80 hover:text-gold transition-colors">
                +91 98765 43210
              </a>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
