"use client";

import { useState } from "react";
import { Metadata } from "next";
import Link from "next/link";

const faqs = [
  {
    question: "Do you handle small events as well as large ones?",
    answer:
      "Yes. Abhima Events manages celebrations of every scale. Our standard of execution remains unchanged, regardless of size.",
  },
  {
    question: "Do you take multiple events on the same date?",
    answer:
      "We limit engagements to ensure focused leadership and flawless delivery.",
  },
  {
    question: "Can you manage traditional and modern events together?",
    answer:
      "Absolutely. Cultural authenticity and contemporary design coexist seamlessly in our work.",
  },
  {
    question: "Do you offer destination wedding planning?",
    answer:
      "Yes. We curate destination weddings across India and select global locations.",
  },
  {
    question: "How involved do clients need to be?",
    answer:
      "As much or as little as preferred. We take full operational responsibility.",
  },
  {
    question: "How do you ensure privacy?",
    answer:
      "All events are managed with strict confidentiality and discretion. All client information and event details are handled with strict confidentiality.",
  },
];

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold text-charcoal pr-8">
          {question}
        </span>
        <span className="flex-shrink-0 text-antique-gold">
          {isOpen ? (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${
          isOpen ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="text-charcoal/70 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <h1 className="text-4xl md:text-5xl font-semibold text-charcoal mb-6 text-center">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-charcoal/70 text-center leading-relaxed">
            Clarity on how we work, what we value, and how we serve.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="mx-auto max-w-[800px] px-6 md:px-10">
          <div className="divide-y divide-charcoal/10 border-t border-charcoal/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-ivory">
        <div className="mx-auto max-w-[800px] px-6 md:px-10 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-charcoal mb-6">
            Still Have Questions?
          </h2>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center px-8 bg-antique-gold text-white font-medium transition-colors hover:bg-charcoal"
          >
            Reach Out to Us
          </Link>
        </div>
      </section>
    </>
  );
}
