'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Search, Layers, Code as CodeIcon, Zap } from 'lucide-react';
import { EASE_LUXURY } from '@/lib/animations';

export const Method = () => {
  const steps = [
    {
      num: '01',
      title: 'Research',
      desc: 'We analyze the business problem deeply.',
      icon: Search
    },
    {
      num: '02',
      title: 'Architecture',
      desc: 'We design multiple solution approaches.',
      icon: Layers
    },
    {
      num: '03',
      title: 'Engineering',
      desc: 'You choose the best approach; we build fast.',
      icon: CodeIcon
    },
    {
      num: '04',
      title: 'Optimization',
      desc: 'We test, refine, and optimize for real usage.',
      icon: Zap
    }
  ];

  return (
    <Section className="overflow-hidden">
      <AnimatedText text="Our Structured Development Process" className="text-xs uppercase tracking-[0.2em] mb-16 block opacity-50 text-center" />

      <div className="max-w-7xl mx-auto relative px-4">
        {/* Mobile Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#111111]/10 md:hidden" />

        {/* Animated Connector Line (Desktop) */}
        <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-[2px] z-0 overflow-visible">
          <svg className="w-full h-full overflow-visible">
            <motion.path
              d="M 50 2 H 1200"
              stroke="#111111"
              strokeOpacity="0.1"
              strokeWidth="1"
              fill="none"
            />
            <motion.path
              d="M 50 2 H 1200"
              stroke="#111111"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 relative">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative group">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, duration: 0.8, ease: EASE_LUXURY }}
                  className="flex md:flex-col items-center md:text-center gap-6 md:gap-4 pl-16 md:pl-0"
                >
                  {/* Icon Node */}
                  <div className="absolute left-0 md:static bg-white z-10">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#f5f5f5] rounded-full flex items-center justify-center border border-[#111111]/0 group-hover:border-[#111111]/10 group-hover:bg-[#111111] group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-xl group-hover:scale-110">
                      <Icon className="w-6 h-6 md:w-8 md:h-8" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-2 md:pt-6">
                    <span className="text-[10px] font-mono opacity-30 mb-2 block tracking-widest">STEP 0{step.num}</span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-[#6E6E6E] leading-relaxed max-w-[200px] mx-auto opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>

                {/* Connector Dot for Mobile */}
                <div className="absolute left-[31px] top-8 w-1.5 h-1.5 bg-[#111111] rounded-full z-20 md:hidden opacity-20" />
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};
