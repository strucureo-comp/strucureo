'use client';

import React from 'react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';

export const Team = () => {
  return (
    <Section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div className="relative z-10">
          <AnimatedText text="The Engineering Team" className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8" />
          <AnimatedText
            text="No silos. No shortcuts. No compromises."
            className="text-sm uppercase tracking-widest opacity-40 mb-12 block"
            delay={0.2}
          />

          {/* Abstract Network Map Visual */}
          <div className="relative w-full aspect-video border border-[#111111]/10 rounded-xl overflow-hidden bg-[#f9f9f9]/50 backdrop-blur-sm">
            <div className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: 'radial-gradient(circle at 50% 50%, #111111 2px, transparent 2px)',
                backgroundSize: '40px 40px'
              }}
            />
            {/* Connected Nodes */}
            <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#111111] rounded-full animate-pulse" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#111111] rounded-full shadow-lg shadow-black/20" />
            <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-[#111111] rounded-full animate-pulse" />

            {/* Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
              <line x1="25%" y1="25%" x2="50%" y2="50%" stroke="black" strokeWidth="1" />
              <line x1="50%" y1="50%" x2="75%" y2="66%" stroke="black" strokeWidth="1" />
              <line x1="25%" y1="25%" x2="75%" y2="66%" stroke="black" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            <div className="absolute bottom-4 right-4 text-[10px] font-mono opacity-40 uppercase">
              IST Anchored / Global Scale
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center">
          <AnimatedText
            text="A multidisciplinary team of engineers driven by research, precision, and technical excellence."
            className="text-2xl md:text-3xl leading-tight font-medium mb-8"
            delay={0.3}
          />
          <AnimatedText
            text="Strucureo is a globally distributed, IST-anchored studio. We are full-stack engineers, cloud architects, and AI specialists working as one. Every system is the result of shared ownership and engineering discipline."
            className="text-lg text-[#6E6E6E] leading-relaxed"
            delay={0.4}
          />
        </div>
      </div>
    </Section>
  );
};
