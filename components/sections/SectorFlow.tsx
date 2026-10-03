'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

const flowSteps = [
  {
    title: 'Build reveals real problems',
    description:
      'Client work in Strucureo Build surfaces repeated, real-world problems worth solving once and reusing.',
  },
  {
    title: 'Labs researches and tests solutions',
    description:
      'Strucureo Labs turns those problems into prototypes, AI agents, and reusable modules, tested against real client needs.',
  },
  {
    title: 'Industries packages what works',
    description:
      'Proven Labs work is packaged into ready-made industry products. [TODO: product names]',
  },
  {
    title: 'Back to Build',
    description:
      'New clients and reusable modules return to Build, so the next client project starts faster and stronger.',
  },
];

export const SectorFlow = () => {
  return (
    <Section className="bg-[#f9f9f9]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="relative">
          <div className="relative z-10">
            <AnimatedText
              text="How the sectors work together"
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
            />
            <AnimatedText
              text="One loop: client problems become research, research becomes products, products make client work faster."
              className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
              delay={0.2}
            />
          </div>
        </div>

        <div className="border-t border-[#111111]/10">
          {flowSteps.map((step, index) => (
            <div
              key={step.title}
              className="grid gap-6 border-b border-[#111111]/10 py-10 md:grid-cols-[80px_1fr]"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
                0{index + 1}
              </span>
              <div>
                <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="max-w-xl leading-relaxed text-[#6E6E6E]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
