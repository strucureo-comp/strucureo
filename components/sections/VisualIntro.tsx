'use client';

import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { EASE_LUXURY } from '@/lib/animations';

interface BlueprintItemProps {
  number: string;
  title: string;
  sub: string;
  image: string;
  delay: number;
}

const BlueprintItem = ({ number, title, sub, image, delay }: BlueprintItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });

  return (
    <motion.div
      ref={ref}
      className="border-t border-[#111111]/10 py-12 relative group cursor-pointer overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1.2, ease: EASE_LUXURY, delay: delay }}
    >
      <div className="flex items-baseline justify-between relative z-10">
        <div className="flex items-baseline gap-8">
          <span className="text-xs font-mono opacity-40">0{number}</span>
          <h3 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter group-hover:text-white transition-colors duration-500">
            {title}
          </h3>
        </div>
        <motion.div
          initial="rest"
          animate={isHovered ? 'hover' : 'rest'}
          variants={{
            rest: { opacity: 0, x: -20 },
            hover: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 0.5, ease: EASE_LUXURY }}
        >
          <ArrowRight className="w-8 h-8 opacity-50 text-white" />
        </motion.div>
      </div>

      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-0 origin-left"
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
        variants={{
          rest: { opacity: 0, scale: 1.1 },
          hover: { opacity: 1, scale: 1 }
        }}
        transition={{ duration: 0.6, ease: EASE_LUXURY }}
      >
        <div className="absolute inset-0 bg-[#111111]/80 z-10 mix-blend-multiply" />
        <img src={image} alt={title} className="w-full h-full object-cover filter grayscale contrast-125" />
      </motion.div>

      <motion.p
        className="absolute left-[15%] bottom-4 text-sm uppercase tracking-widest opacity-60 text-white z-20"
        initial="rest"
        animate={isHovered ? 'hover' : 'rest'}
        variants={{
          rest: { opacity: 0, y: 10 },
          hover: { opacity: 1, y: 0 }
        }}
      >
        {sub}
      </motion.p>
    </motion.div>
  );
};

export const VisualIntro = () => {
  return (
    <Section className="min-h-[50vh] md:min-h-[80vh] flex flex-col justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
        <div className="lg:col-span-4">
          <AnimatedText text="The Foundation" className="text-xs uppercase tracking-[0.2em] mb-4 block opacity-50" />
        </div>
        <div className="lg:col-span-8">
          <BlueprintItem
            number="1"
            title="RESEARCH"
            sub="First Principles Thinking"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
            delay={0}
          />
          <BlueprintItem
            number="2"
            title="SYSTEMS"
            sub="Architectural Precision"
            image="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
            delay={0.2}
          />
          <BlueprintItem
            number="3"
            title="FUTURE"
            sub="Scalable By Design"
            image="https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop"
            delay={0.4}
          />
        </div>
      </div>
    </Section>
  );
};
