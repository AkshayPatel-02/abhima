"use client";

import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const eventTypes = [
  "Wedding",
  "Corporate Event",
  "Private Celebration",
  "Spiritual/Cultural Event",
  "Other",
];

export default function ContactPage() {
  // Replace with your actual Formspree form ID
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");
  const [selectedEventType, setSelectedEventType] = useState("");

  if (state.succeeded) {
    return (
      <>
        {/* Success State */}
        <section className="min-h-[80vh] flex items-center justify-center bg-ivory">
          <div className="mx-auto max-w-[600px] px-6 md:px-10 text-center">
            <div className="mb-8">
              <svg
                className="w-16 h-16 mx-auto text-antique-gold"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold text-charcoal mb-6">
              Thank you for reaching out
            </h1>
            <p className="text-lg text-charcoal/70 leading-relaxed mb-8">
              Our team will connect with you shortly to understand your 
              celebration in detail.
            </p>
            <a
              href="/"
              className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
            >
              Return Home
            </a>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-12 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            Contact
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            If your celebration matters, it deserves thoughtful stewardship.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12 md:py-20 bg-ivory">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Contact Info (35%) */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold text-charcoal mb-6">
                Get in Touch
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <div>
                  <p className="text-sm text-charcoal/50 mb-1">Email</p>
                  <a
                    href="mailto:info@abhimaevents.com"
                    className="text-lg text-charcoal hover:text-antique-gold transition-colors"
                  >
                    info@abhimaevents.com
                  </a>
                </div>

                {/* WhatsApp */}
                <div>
                  <p className="text-sm text-charcoal/50 mb-1">WhatsApp</p>
                  <a
                    href="https://wa.me/919876543210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-lg text-charcoal hover:text-antique-gold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </div>

                {/* Phone */}
                <div>
                  <p className="text-sm text-charcoal/50 mb-1">Phone</p>
                  <a
                    href="tel:+919876543210"
                    className="text-lg text-charcoal hover:text-antique-gold transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>

                {/* Location */}
                <div className="pt-4">
                  <p className="text-charcoal/70">
                    Based in Hyderabad | Serving India & Beyond
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Enquiry Form (65%) */}
            <div className="lg:col-span-3">
              <div className="bg-white p-8 md:p-10 border border-charcoal/10">
                <h2 className="text-2xl font-semibold text-charcoal mb-8">
                  Begin the Conversation
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm text-charcoal mb-2">
                      Name <span className="text-antique-gold">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-antique-gold focus:outline-none transition-colors"
                      placeholder="Your full name"
                    />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                  </div>

                  {/* Email / Phone */}
                  <div>
                    <label htmlFor="contact" className="block text-sm text-charcoal mb-2">
                      Email / Phone <span className="text-antique-gold">*</span>
                    </label>
                    <input
                      id="contact"
                      type="text"
                      name="contact"
                      required
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-antique-gold focus:outline-none transition-colors"
                      placeholder="Your email or phone number"
                    />
                    <ValidationError prefix="Contact" field="contact" errors={state.errors} />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="eventType" className="block text-sm text-charcoal mb-2">
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={selectedEventType}
                      onChange={(e) => setSelectedEventType(e.target.value)}
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal focus:border-antique-gold focus:outline-none transition-colors"
                    >
                      <option value="">Select event type</option>
                      {eventTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Event Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm text-charcoal mb-2">
                      Event Location
                    </label>
                    <input
                      id="location"
                      type="text"
                      name="location"
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-antique-gold focus:outline-none transition-colors"
                      placeholder="Preferred location or venue"
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label htmlFor="date" className="block text-sm text-charcoal mb-2">
                      Event Date
                    </label>
                    <input
                      id="date"
                      type="text"
                      name="date"
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-antique-gold focus:outline-none transition-colors"
                      placeholder="Tentative date or month"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm text-charcoal mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-4 bg-transparent border border-charcoal/20 text-charcoal placeholder:text-charcoal/40 focus:border-antique-gold focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your celebration..."
                    />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={state.submitting}
                    className="w-full h-14 bg-antique-gold text-white text-lg font-medium transition-colors hover:bg-charcoal disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {state.submitting ? "Sending..." : "Send Enquiry"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
