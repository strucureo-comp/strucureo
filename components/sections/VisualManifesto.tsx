'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';

export const VisualManifesto = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  return (
    <Section className="bg-[#111111] text-[#ffffff] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        <div
          className="w-full h-full [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          style={{
            backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
            backgroundSize: '4rem 4rem',
            opacity: 0.1
          }}
        />
      </div>

      <div ref={ref} className="relative z-10 flex flex-col items-center justify-center text-center py-12 md:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.1, 1, 0.2, 1] }}
          className="relative"
        >
          <h3 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter text-white mix-blend-overlay">
            Clarity against complexity.
          </h3>
        </motion.div>
      </div>
    </Section>
  );
};
