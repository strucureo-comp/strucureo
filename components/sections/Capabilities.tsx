'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export const Capabilities = () => {
  const capabilities = [
    {
      title: 'Full-Stack Engineering',
      desc: 'End-to-end system development — from user interfaces to core logic, databases, and APIs.'
    },
    {
      title: 'Cloud Architecture',
      desc: 'Scalable, resilient cloud systems designed for real-world load, cost efficiency, and reliability.'
    },
    { title: 'AI Systems', desc: 'Custom AI solutions that enhance decision-making, automation, and system intelligence.' },
    {
      title: 'Automation',
      desc: 'Intelligent automation that removes manual overhead and accelerates business operations.'
    }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <AnimatedText
            text="Engineering Capabilities"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          />
          <AnimatedText
            text="Custom systems. No shortcuts. No generic solutions."
            className="mt-8 text-sm uppercase tracking-widest opacity-40 max-w-xs"
            delay={0.2}
          />
        </div>
        <div className="lg:col-span-8">
          <div className="space-y-12">
            {capabilities.map((cap, i) => (
              <AnimatedText
                key={i}
                delay={i * 0.1}
                className="block"
                text={
                  <div className="border-b border-[#111111]/10 pb-8 group">
                    <h4 className="text-2xl md:text-4xl font-light tracking-tight mb-3 group-hover:pl-4 transition-all duration-500">
                      {cap.title}
                    </h4>
                    <p className="text-[#6E6E6E] text-lg md:text-xl max-w-2xl group-hover:pl-4 transition-all duration-500">
                      {cap.desc}
                    </p>
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
