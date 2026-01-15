'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export const Culture = () => {
  const items = [
    { title: 'R&D First', desc: 'Every solution begins with research, experimentation, and validation.' },
    {
      title: 'Discipline by Default',
      desc: 'Clean architecture, secure systems, and performance-first thinking are non-negotiable.'
    },
    { title: 'Shared Ownership', desc: "Every engineer owns the outcome, not just their individual task." }
  ];

  return (
    <Section className="min-h-[50vh]">
      <AnimatedText text="Engineering Culture" className="text-xs uppercase tracking-[0.2em] mb-8 md:mb-12 block opacity-50" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, i) => (
          <AnimatedText
            key={i}
            delay={i * 0.2}
            className="block"
            text={
              <div className="pr-4">
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-[#6E6E6E] leading-relaxed">{item.desc}</p>
              </div>
            }
          />
        ))}
      </div>
    </Section>
  );
};
