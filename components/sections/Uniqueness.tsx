'use client';

import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { ArrowUpRight, Microscope, Zap, CircuitBoard, Users, LifeBuoy } from 'lucide-react';

const ScrollItem = ({ item, index }: { item: any, index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-40% 0px -40% 0px" });

  return (
    <div
      ref={ref}
      className={`py-24 border-t border-[#111111]/10 first:border-t-0 flex flex-col md:flex-row gap-8 md:gap-16 items-start transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-20 blur-sm translate-x-4'}`}
    >
      <div className="flex-shrink-0 mt-2">
        <span className="text-sm font-mono tracking-widest text-[#111111]">0{index + 1}</span>
      </div>
      <div>
        <div className="mb-6">
          <item.icon className="w-12 h-12 text-[#111111]" />
        </div>
        <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-none">{item.title}</h3>
        <p className="text-xl leading-relaxed text-[#6E6E6E] max-w-lg">{item.desc}</p>
      </div>
    </div>
  );
}

export const Uniqueness = () => {
  const items = [
    {
      title: 'Root-cause Problem Analysis',
      desc: "We don't just patch symptoms. We identify and solve the underlying business and technical problems.",
      icon: Microscope
    },
    {
      title: 'Multiple Solutions',
      desc: 'We propose multiple approaches for every problem, allowing you to choose the best trade-off for your needs.',
      icon: CircuitBoard
    },
    {
      title: 'Fast Delivery',
      desc: 'Delivered in days, not months. We use modern stacks and pre-built modules to accelerate development.',
      icon: Zap
    },
    {
      title: 'Dedicated Contact',
      desc: 'You get a single dedicated point of contact who understands your business and manages the entire project.',
      icon: Users
    },
    {
      title: 'Structured Process',
      desc: 'A predictable, engineering-grade process that ensures quality, reliability, and no surprises.',
      icon: ArrowUpRight
    },
    {
      title: 'Ongoing Support',
      desc: 'We don’t just launch and leave. We provide ongoing support, optimization, and scaling as you grow.',
      icon: LifeBuoy
    }
  ];

  return (
    <Section className="relative bg-white pb-0">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div className="lg:w-1/3">
          <div className="lg:sticky lg:top-32">
            <AnimatedText text="Why Clients Choose Strucureo" className="text-xs uppercase tracking-[0.2em] mb-8 block opacity-50" />
            <h2 className="text-4xl md:text-6xl font-bold leading-[0.9] tracking-tighter mb-8">
              Engineering <br />
              <span className="text-[#111111]/20">Standard.</span>
            </h2>
            <p className="text-lg text-[#6E6E6E] max-w-sm leading-relaxed">
              We bring a disciplined, transparent, and high-velocity approach to IT services.
            </p>
          </div>
        </div>

        <div className="lg:w-2/3 pb-24">
          {items.map((item, index) => (
            <ScrollItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
};
