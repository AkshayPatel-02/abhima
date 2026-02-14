"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Services", href: "/services" },
  { name: "Destinations", href: "/destinations" },
  { name: "FAQs", href: "/faqs" },
  { name: "Contact", href: "/contact" },
];

/**
 * Design-compliant Header following ABHIMA Events Design Document
 * 
 * Design Rules:
 * - NON-STICKY navigation (disappears on scroll)
 * - Height: 80px fixed
 * - Background: Ivory solid (100% opacity)
 * - Border-bottom: 1px solid Charcoal 10%
 * - Active state: Antique Gold underline (2px, centered) on desktop
 * - Mobile: Full-screen Ivory overlay with slide-in (0.3s ease-in-out)
 * - NO shimmer effects, NO staggered animations
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="bg-ivory border-b border-charcoal-10">
      {/* Desktop Navigation */}
      <nav className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Abhima Events Logo"
              className="h-10 w-10 transition-opacity duration-200 group-hover:opacity-80"
            />
            <span className="font-poppins font-semibold text-xl text-charcoal tracking-tight uppercase transition-colors duration-200 group-hover:text-gold">
              Abhima Events
            </span>
          </Link>

          {/* Desktop Nav Links - Centered */}
          <div className="hidden lg:flex lg:items-center lg:gap-10 flex-1 justify-center">
            {navigation.filter(item => item.name !== 'Contact').map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  relative font-poppins text-base transition-colors duration-200
                  ${isActive(item.href)
                    ? "text-charcoal"
                    : "text-charcoal hover:text-charcoal-70"
                  }
                `}
              >
                {item.name}
                {isActive(item.href) && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-full h-0.5 bg-gold" />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop - Pushed right */}
          <div className="hidden lg:block flex-none">
            <Button href="/contact" variant="primary" size="small">
              Begin Conversation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-charcoal hover:text-gold transition-colors duration-200"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={mobileMenuOpen}
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
            aria-hidden="true"
          />

          {/* Menu Panel - Slide in from right */}
          <div
            className="fixed inset-y-0 right-0 w-full max-w-sm bg-ivory px-6 py-6 shadow-xl"
            style={{
              animation: "slideInRight 0.3s ease-in-out",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Abhima Events Logo"
                  className="h-8 w-8"
                />
                <span className="font-poppins font-semibold text-xl text-charcoal tracking-tight uppercase">
                  Abhima Events
                </span>
              </div>
              <button
                type="button"
                className="p-2 text-charcoal hover:text-gold transition-colors duration-200"
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
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    py-4 px-4 font-poppins font-medium text-lg rounded-lg
                    transition-all duration-200
                    ${isActive(item.href)
                      ? "text-gold bg-gold/10 border-l-3 border-gold"
                      : "text-charcoal hover:text-gold hover:bg-charcoal-5"
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile CTA */}
            <div className="mt-10 pt-8 border-t border-charcoal-10">
              <Button
                href="/contact"
                variant="primary"
                onClick={() => setMobileMenuOpen(false)}
              >
                Begin Conversation
              </Button>
            </div>

            {/* Contact Info */}
            <div className="absolute bottom-8 left-6 right-6">
              <p className="text-charcoal-50 text-sm mb-2 font-poppins">Get in touch</p>
              <div className="flex flex-col gap-2 text-sm">
                <a
                  href="mailto:info@abhimaevents.com"
                  className="text-charcoal hover:text-gold transition-colors font-poppins"
                >
                  info@abhimaevents.com
                </a>
                <a
                  href="tel:+919876543210"
                  className="text-charcoal hover:text-gold transition-colors font-poppins"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
