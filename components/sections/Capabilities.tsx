'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Cloud, Code2, Bot, Database } from 'lucide-react';
import { useHaptic } from '@/hooks/useHaptic';

const TiltCard = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const { triggerHaptic } = useHaptic();

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseXVal = e.clientX - rect.left;
    const mouseYVal = e.clientY - rect.top;
    const xPct = mouseXVal / width - 0.5;
    const yPct = mouseYVal / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleMouseEnter = () => {
    triggerHaptic(5); // Slight tick on enter
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const Capabilities = () => {
  const capabilities = [
    {
      title: 'Full-Stack Product Engineering',
      desc: 'From R&D to MVP in about 6 weeks. We build robust React/Next.js frontends and Node/Go backends with real‑time features, designed for scale from day one.',
      icon: Code2
    },
    {
      title: 'Cloud Architecture & Migration',
      desc: 'We design and migrate cloud infrastructure on AWS/GCP, cutting infrastructure costs by 30–50% and enabling Kubernetes scaling for high‑load systems.',
      icon: Cloud
    },
    {
      title: 'AI & Automation Solutions',
      desc: 'Implement custom LLMs, RAG pipelines, and n8n workflows that reduce manual operations by 40%+. We automate business logic for efficiency.',
      icon: Bot
    },
    {
      title: 'IoT & Enterprise Data',
      desc: 'Secure IoT implementation and enterprise data pipelines with high‑throughput ingestion and real‑time analytics dashboards.',
      icon: Database
    }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <AnimatedText
            text="Engineering Capabilities"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight"
          />
          <AnimatedText
            text="Practical engineering with proven technologies."
            className="mt-8 text-sm uppercase tracking-widest opacity-40 max-w-xs"
            delay={0.2}
          />
        </div>
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="perspective-1000"
                >
                  <TiltCard
                    className="group relative bg-white border border-[#111111]/10 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-black/5 transition-all duration-300 transform-style-3d bg-white h-full"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none">
                      <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
                    </div>

                    {/* Tech visual decoration */}
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity translate-z-20">
                      <Icon className="w-24 h-24 -mr-8 -mt-8" />
                    </div>

                    <div className="p-8 relative z-10 translate-z-30">
                      <div className="w-12 h-12 bg-[#111111] text-white rounded-lg flex items-center justify-center mb-6 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h4 className="text-xl font-bold mb-4 pr-8">{cap.title}</h4>
                      <p className="text-[#6E6E6E] text-sm leading-relaxed mb-6">
                        {cap.desc}
                      </p>

                      {/* Visual footer for the card */}
                      <div className="pt-6 border-t border-[#111111]/5 flex items-center gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] uppercase font-mono tracking-widest opacity-40">Ready to Deploy</span>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
};
