'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { EASE_LUXURY } from '@/lib/animations';

export const Method = () => {
  const steps = [
    {
      num: '01',
      title: 'Research',
      desc: 'We deeply understand the problem, constraints, and long-term goals before writing a single line of code.'
    },
    {
      num: '02',
      title: 'Architecture',
      desc: 'Systems are designed for scale, performance, and security from day one.'
    },
    {
      num: '03',
      title: 'Engineering',
      desc: 'Clean, maintainable, high-performance code built with discipline and clarity.'
    },
    {
      num: '04',
      title: 'Optimization',
      desc: 'We test, refine, and optimize until the system performs under real pressure.'
    }
  ];

  return (
    <Section>
      <AnimatedText text="The Strucureo Method" className="text-xs uppercase tracking-[0.2em] mb-16 block opacity-50" />
      <div className="max-w-5xl mx-auto">
        {steps.map((step, i) => {
          const MethodStep = () => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: '-15%' });

            return (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.8, ease: EASE_LUXURY }}
                className="flex flex-col md:flex-row md:items-start py-12 border-b border-[#111111]/10 last:border-0"
              >
                <span className="text-xs font-mono opacity-40 w-24 mb-4 md:mb-0 pt-2">Step {step.num}</span>
                <div className="flex-grow">
                  <h3 className="text-3xl md:text-5xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg md:text-xl text-[#6E6E6E] max-w-3xl leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            );
          };

          return <MethodStep key={i} />;
        })}
      </div>
    </Section>
  );
};
