'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Structure3D } from '@/components/shared/Structure3D';
import { staggerContainer, EASE_LUXURY } from '@/lib/animations';

export const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 py-8 md:py-12 bg-[#ffffff] text-[#111111] relative overflow-hidden">
      <Structure3D />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="flex justify-between items-start text-xs md:text-sm uppercase tracking-widest font-medium opacity-60 z-10"
      >
        <div className="flex flex-col">
          <span>Strucureo</span>
          <span className="opacity-50">Global Engineering Studio</span>
        </div>
        <div className="hidden md:block text-right opacity-80">
          <p>IST Based · Global Reach</p>
        </div>
      </motion.nav>

      <div className="flex-grow flex flex-col justify-center mt-12 md:mt-0 z-10 pb-24 pointer-events-none"> {/* content wrapper */}
        <div className="pointer-events-auto"> {/* Interactive elements wrapper */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="space-y-0 md:space-y-4">
            {['Structured engineering.', 'Creative product thinking.'].map((line, i) => (
              <motion.h1
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 100, letterSpacing: '-0.05em' },
                  visible: {
                    opacity: 1,
                    y: 0,
                    letterSpacing: '-0.03em',
                    transition: { duration: 1.8, ease: EASE_LUXURY }
                  }
                }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] text-[#111111]"
              >
                {line}
              </motion.h1>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 0.8, ease: EASE_LUXURY }}
            className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8"
          >
            <p className="text-xl md:text-2xl font-light text-[#6E6E6E] max-w-2xl leading-relaxed">
              Strucureo combines solid engineering systems with imaginative problem‑solving. We design, build, and run software products and IT platforms for startups and scale‑ups that need reliability and room to innovate.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
