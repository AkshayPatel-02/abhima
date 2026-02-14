"use client";

import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    items: FAQItem[];
    className?: string;
}

/**
 * Design-compliant FAQ Accordion component following ABHIMA Events Design Document
 * 
 * Allowed Animation: Expand/collapse (0.2s ease-out)
 * 
 * States:
 * - Closed: Charcoal 10% border, Plus (+) icon
 * - Open: Antique Gold border, Minus (-) icon
 * 
 * Design Rules:
 * - Question: Poppins SemiBold 20px
 * - Answer: Poppins Regular 16px, line-height 1.6
 * - Smooth height transition only (no stagger or fade effects)
 */
export default function FAQAccordion({ items, className = "" }: FAQAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className={`space-y-4 ${className}`}>
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className={`
              border rounded-[4px] overflow-hidden
              transition-all duration-200 ease-out
              ${isOpen ? 'border-gold' : 'border-charcoal-10'}
            `}
                    >
                        {/* Question Button */}
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-charcoal-5 transition-colors duration-200"
                            aria-expanded={isOpen}
                            aria-controls={`faq-answer-${index}`}
                        >
                            <span className="font-poppins font-semibold text-lg md:text-xl text-charcoal pr-4">
                                {item.question}
                            </span>

                            {/* Icon */}
                            <span
                                className={`
                  flex-shrink-0 w-6 h-6 flex items-center justify-center
                  font-poppins font-medium text-xl
                  transition-colors duration-200
                  ${isOpen ? 'text-gold' : 'text-charcoal'}
                `}
                                aria-hidden="true"
                            >
                                {isOpen ? '−' : '+'}
                            </span>
                        </button>

                        {/* Answer */}
                        <div
                            id={`faq-answer-${index}`}
                            className={`
                overflow-hidden
                transition-all duration-200 ease-out
                ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
              `}
                            role="region"
                            aria-labelledby={`faq-question-${index}`}
                        >
                            <div className="px-6 pb-5 pt-2">
                                <p className="font-poppins text-base text-charcoal leading-relaxed">
                                    {item.answer}
                                </p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
