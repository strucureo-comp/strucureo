'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Microscope, Settings, Share2 } from 'lucide-react';
import { motion, Easing } from 'framer-motion';

export const Culture = () => {
  const items = [
    {
      title: 'R&D First',
      desc: 'Every solution begins with research, experimentation, and validation.',
      icon: Microscope,
      animation: { rotate: [0, -10, 10, -10, 0], transition: { duration: 2, repeat: Infinity, repeatDelay: 3 } } as any
    },
    {
      title: 'Discipline by Default',
      desc: 'Clean architecture. Performance and security are embedded defaults, never afterthoughts.',
      icon: Settings,
      animation: { rotate: 360, transition: { duration: 8, ease: "linear", repeat: Infinity } } as any
    },
    {
      title: 'Shared Ownership',
      desc: "Every engineer owns the outcome. We deliver business value, not just code.",
      icon: Share2,
      animation: { scale: [1, 1.1, 1], transition: { duration: 2, repeat: Infinity, repeatDelay: 1 } } as any
    }
  ];

  return (
    <Section className="min-h-[50vh]">
      <AnimatedText text="Engineering Culture" className="text-xs uppercase tracking-[0.2em] mb-8 md:mb-12 block opacity-50" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <AnimatedText
              key={i}
              delay={i * 0.2}
              className="block"
              text={
                <div className="pr-4 group cursor-default">
                  <div className="mb-6 w-12 h-12 bg-black/5 rounded-full flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <motion.div animate={item.animation} whileHover={{ scale: 1.2 }}>
                      <Icon className="w-5 h-5" />
                    </motion.div>
                  </div>
                  <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                  <p className="text-[#6E6E6E] leading-relaxed">{item.desc}</p>
                </div>
              }
            />
          );
        })}
      </div>
    </Section>
  );
};
