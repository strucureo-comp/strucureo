'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export type FAQItem = {
    question: string;
    answer: string;
};

export function FAQAccordion({ items, className = 'mt-16', questionTag = 'h3' }: { items: FAQItem[]; className?: string; questionTag?: 'h2' | 'h3' }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const QuestionTag = questionTag;

    return (
        <div className={className}>
            {items.map((item, index) => (
                <div
                    key={index}
                    className="border-b border-[#111111]/10 last:border-b-0"
                >
                    <button
                        type="button"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        className="flex w-full items-center justify-between py-6 text-left transition-opacity hover:opacity-70"
                        aria-expanded={openIndex === index}
                    >
                        <QuestionTag className="pr-8 text-xl font-bold tracking-tight md:text-2xl">
                            {item.question}
                        </QuestionTag>
                        <ChevronDown
                            className={`h-5 w-5 flex-shrink-0 transition-transform duration-300 ${
                                openIndex === index ? 'rotate-180' : ''
                            }`}
                        />
                    </button>
                    <div
                        className={`overflow-hidden transition-all duration-300 ${
                            openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                        }`}
                    >
                        <p className="leading-relaxed text-[#6E6E6E]">{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
