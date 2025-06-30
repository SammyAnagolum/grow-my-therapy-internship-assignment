"use client"

import { useState } from "react";

const FAQAccordion = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Do you accept insurance?",
            answer:
                "I am an out-of-network provider, but I provide superbills to help you claim reimbursement from your insurance.",
        },
        {
            question: "Are online sessions available?",
            answer:
                "Yes—all virtual sessions via Zoom.",
        },
        {
            question: "What is your cancellation policy?",
            answer:
                "24-hour notice required.",
        },
        {
            question: "What is a superbill?",
            answer:
                "A superbill is a detailed receipt you can submit to your insurance for possible reimbursement.",
        },
        {
            question: "How do I schedule a session?",
            answer:
                'Please use the "Schedule a Consultation" button above or contact me via the form below.',
        },
    ];

    return (
        <div className="w-full max-w-2xl mx-auto">
            {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-primary">
                    <button
                        className="w-full text-left py-4 font-semibold text-xl flex justify-between items-center transition-colors hover:text-primary focus:outline-none font-freight-sans-pro"
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        aria-expanded={openIndex === idx}
                        aria-controls={`faq-panel-${idx}`}
                    >
                        {faq.question}
                        <span
                            className={`ml-2 transition-transform duration-300 ${openIndex === idx ? "rotate-180" : ""}`}
                            aria-hidden="true"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                    </button>
                    <div
                        id={`faq-panel-${idx}`}
                        className={`overflow-hidden transition-all duration-300 ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                        aria-hidden={openIndex !== idx}
                    >
                        <div className="pb-4 text-lg text-dark font-freight-sans-pro-light">{faq.answer}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FAQAccordion;