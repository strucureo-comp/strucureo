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
      <motion.div style={{ y }} className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1492138786289-d35ea832da43?q=80&w=2070&auto=format&fit=crop"
          className="w-full h-[120%] object-cover filter grayscale"
          alt="Texture"
        />
      </motion.div>

      <div ref={ref} className="py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1.5, ease: EASE_LUXURY }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] opacity-50 mb-8">Our Promise</p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
            Speed. <br />
            Quality. <br />
            Performance. <span className="text-[#6E6E6E]">Security.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="border-l border-[#ffffff]/30 pl-6 md:pl-8 max-w-xl ml-auto"
        >
          <p className="text-xl md:text-2xl font-light">
            Most teams choose two. <br />
            We engineer all four.
          </p>
        </motion.div>
      </div>
    </Section>
  );
};
