"use client";

import FAQAccordion from "@/components/ui/FAQAccordion";
import Button from "@/components/ui/Button";

const faqs = [
  {
    question: "Do you handle small events as well as large ones?",
    answer: "Yes. Abhima Events manages celebrations of every scale. Our standard of execution remains unchanged, regardless of size."
  },
  {
    question: "Do you take multiple events on the same date?",
    answer: "We limit engagements to ensure focused leadership and flawless delivery."
  },
  {
    question: "Can you manage traditional and modern events together?",
    answer: "Absolutely. Cultural authenticity and contemporary design coexist seamlessly in our work."
  },
  {
    question: "Do you offer destination wedding planning?",
    answer: "Yes. We curate destination weddings across India and select global locations."
  },
  {
    question: "How involved do clients need to be?",
    answer: "As much or as little as preferred. We take full operational responsibility."
  },
  {
    question: "How do you ensure privacy?",
    answer: "All events are managed with strict confidentiality and discretion. All client information and event details are handled with strict confidentiality."
  }
];

export default function FAQsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-ivory pt-32 pb-20 md:pb-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px]">
          <h1 className="font-poppins font-semibold text-5xl md:text-[56px] text-charcoal mb-8 leading-[1.1]">
            Frequently Asked Questions
          </h1>
          <p className="font-poppins text-lg text-charcoal-70 leading-relaxed">
            Common questions about our services, process, and approach.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-ivory py-20 md:py-30 border-t border-charcoal-10">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[900px]">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-ivory py-20 md:py-30">
        <div className="container mx-auto px-6 md:px-10 lg:px-20 max-w-[800px] text-center">
          <h2 className="font-poppins font-semibold text-3xl md:text-4xl text-charcoal mb-4">
            Have More Questions?
          </h2>
          <p className="font-poppins text-base text-charcoal-70 mb-8">
            We're here to help. Reach out to discuss your celebration.
          </p>
          <Button href="/contact" variant="primary">
            Contact Us
          </Button>
        </div>
      </section>
    </>
  );
}
