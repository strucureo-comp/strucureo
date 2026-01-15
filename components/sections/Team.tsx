'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export const Team = () => {
  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <AnimatedText text="The Engineering Team" className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8" />
          <AnimatedText
            text="No silos. No shortcuts. No compromises."
            className="text-sm uppercase tracking-widest opacity-40"
            delay={0.2}
          />
        </div>
        <div className="flex flex-col justify-center">
          <AnimatedText
            text="A multidisciplinary team of engineers driven by research, precision, and technical excellence."
            className="text-2xl md:text-3xl leading-tight font-medium mb-8"
            delay={0.3}
          />
          <AnimatedText
            text="Strucureo is built by full-stack engineers, cloud architects, AI specialists, and automation experts working as one. Every system we deliver is the result of collaboration, shared ownership, and engineering discipline."
            className="text-lg text-[#6E6E6E] leading-relaxed"
            delay={0.4}
          />
        </div>
      </div>
    </Section>
  );
};
