'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { EASE_LUXURY } from '@/lib/animations';

export const Uniqueness = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const items = [
    {
      title: 'R&D-Driven Engineering',
      desc: "We don't start with templates. We start with research. Every solution is engineered from first principles, tested, refined, and validated."
    },
    {
      title: 'Speed Without Sacrifice',
      desc: 'Faster development is meaningless without quality. We move fast because our systems are designed right from the beginning.'
    },
    {
      title: 'Performance & Security',
      desc: 'Performance and security are not features added later. They are embedded into the architecture itself.'
    }
  ];

  return (
    <Section className="min-h-[60vh] flex flex-col justify-center">
      <AnimatedText text="What Makes Strucureo Different" className="text-xs uppercase tracking-[0.2em] mb-8 md:mb-16 block opacity-50" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 border-t border-[#111111]/10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ delay: index * 0.2, duration: 1.5, ease: EASE_LUXURY }}
            className={`
              pt-8 pb-4 pr-8
              ${index !== 2 ? 'md:border-r border-[#111111]/10' : ''}
              ${index !== 0 ? 'border-t md:border-t-0 border-[#111111]/10 md:pt-8 pt-12' : ''}
            `}
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">{item.title}</h3>
            <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};
