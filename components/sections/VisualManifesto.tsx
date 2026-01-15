'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';

export const VisualManifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <Section className="bg-[#111111] text-[#ffffff]">
      <div ref={ref} className="flex flex-col items-center justify-center text-center py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          animate={isInView ? { opacity: 0.3, filter: 'blur(0px)' } : { opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="relative mb-8"
        >
          <h3 className="text-3xl sm:text-5xl md:text-8xl font-bold tracking-tight line-through decoration-2 decoration-red-500/50">
            COMPLEXITY
          </h3>
          <p className="text-xs uppercase tracking-[0.5em] mt-4 opacity-50">The Era of Bloat</p>
        </motion.div>

        <motion.div
          initial={{ height: 0 }}
          animate={isInView ? { height: 80 } : { height: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-[1px] bg-[#ffffff]/20 my-4"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 1, ease: [0.1, 1, 0.2, 1] }}
          className="relative mt-8"
        >
          <h3 className="text-4xl sm:text-6xl md:text-9xl font-bold tracking-tighter text-white">CLARITY</h3>
          <p className="text-xs uppercase tracking-[0.5em] mt-6 text-[#ffffff]">Is Our Currency</p>
        </motion.div>
      </div>
    </Section>
  );
};
