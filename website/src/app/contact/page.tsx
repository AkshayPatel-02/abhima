"use client";

import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-6 leading-[1.1]">
            Begin the Conversation
          </h1>
          <p className="font-poppins text-lg md:text-xl text-charcoal-70 leading-relaxed">
            If your celebration matters, it deserves thoughtful stewardship.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-ivory py-12 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <div className="space-y-3">
            <p className="font-poppins text-base text-charcoal">
              <a
                href="mailto:info@abhimaevents.com"
                className="text-gold hover:text-charcoal transition-colors duration-200"
              >
                info@abhimaevents.com
              </a>
            </p>
            <p className="font-poppins text-sm text-charcoal-70">
              Based in Hyderabad | Serving India & Beyond
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[700px]">
          <ContactForm />
        </div>
      </section>
    </>
  );
}
