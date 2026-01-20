'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { ArrowUpRight, Microscope, Zap, CircuitBoard, Users } from 'lucide-react';
import { EASE_LUXURY } from '@/lib/animations';

export const Uniqueness = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  const items = [
    {
      title: 'R&D-Driven Engineering',
      desc: "Every solution is engineered from first principles—designed, tested, and validated instead of copy-pasting templates.",
      icon: Microscope
    },
    {
      title: 'Speed Without Sacrifice',
      desc: 'We focus on speed without sacrificing quality by getting the architecture right at the beginning, preventing technical debt.',
      icon: Zap
    },
    {
      title: 'Embedded Performance',
      desc: 'Performance and security are built into the system core, not added later as optional extras.',
      icon: CircuitBoard
    },
    {
      title: 'Multidisciplinary Team',
      desc: 'An IST-anchored team of full-stack engineers, cloud architects, and AI specialists with shared ownership of outcomes.',
      icon: Users
    }
  ];

  return (
    <Section className="min-h-[60vh] flex flex-col justify-center">
      <AnimatedText text="What Makes Strucureo Different" className="text-xs uppercase tracking-[0.2em] mb-8 md:mb-16 block opacity-50" />

      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-0 border-t border-[#111111]/10">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ delay: index * 0.2, duration: 1.5, ease: EASE_LUXURY }}
              className={`
                pt-8 pb-8 pr-8 pl-8
                border border-transparent
                hover:bg-[#f9f9f9] hover:border-[#111111]/5 hover:shadow-2xl hover:shadow-black/5
                transition-all duration-300 rounded-xl
                ${index % 2 === 0 ? 'md:border-r border-[#111111]/10' : ''}
                ${index >= 2 ? 'md:border-t-0 border-[#111111]/10 md:pt-12' : 'md:border-b border-[#111111]/10'}
                ${index !== 0 && index !== 1 ? 'border-t md:border-t-0 border-[#111111]/10 pt-12' : ''}
                hover:z-10 bg-transparent group relative overflow-hidden
              `}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity duration-500 transform translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-8 h-8" />
              </div>

              <div className="w-12 h-12 bg-[#f0f0f0] rounded-lg flex items-center justify-center mb-6 text-[#111111] group-hover:bg-[#111111] group-hover:text-white transition-colors duration-500">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
              </div>

              <h3 className="text-2xl md:text-3xl font-semibold mb-6">{item.title}</h3>
              <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-sm">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};
