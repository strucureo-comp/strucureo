'use client';

import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { EASE_LUXURY } from '@/lib/animations';


export const PromiseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <Section className="bg-[#111111] text-[#ffffff] relative overflow-hidden">


      <div ref={ref} className="py-12 relative z-10">
        <div className="mb-24">
          <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-16">Our Promise</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-16">
            {['Speed', 'Quality', 'Performance', 'Security'].map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 1, ease: EASE_LUXURY }}
                className="group relative border-b border-white/10 pb-8 hover:border-white transition-colors duration-500 cursor-default"
              >
                <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white/50 group-hover:text-white transition-colors duration-500">{word}</h2>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-12 h-12 rounded-full border border-white flex items-center justify-center">
                    <span className="text-xs">0{i + 1}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="border-l border-[#ffffff]/30 pl-6 md:pl-8 max-w-xl ml-auto"
        >
          <p className="text-xl md:text-2xl font-light mb-8">
            Most teams choose two. <br />
            We engineer all four.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
