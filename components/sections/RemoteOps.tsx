'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Globe, Users, Zap, Briefcase, Video, Code } from 'lucide-react';
import { EASE_LUXURY } from '@/lib/animations';

export const RemoteOps = () => {
    const features = [
        {
            icon: Globe,
            title: 'Global Talent Network',
            desc: 'We hire the top 1% of engineering talent globally to ensure continuous 24/7 development cycles.'
        },
        {
            icon: Code,
            title: 'Modern Stack & Tooling',
            desc: 'Collaborative development via GitHub, Vercel, and Linear. Real-time transparency on every commit.'
        },
        {
            icon: Users,
            title: 'Hybrid Engagement',
            desc: 'Remote-first efficiency with on-site availability for kick-offs, workshops, and critical launches globally.'
        }
    ];

    return (
        <Section className="bg-[#f9f9f9]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div className="relative">
                    {/* Abstract Globe Visualization */}
                    <div className="absolute -top-20 -left-20 w-[140%] h-[140%] opacity-10 pointer-events-none z-0">
                        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-spin-slow">
                            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4" />
                            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                            {/* Decorative Nodes relative to center */}
                            <circle cx="140" cy="100" r="2" fill="currentColor" />
                            <circle cx="60" cy="100" r="2" fill="currentColor" />
                            <circle cx="100" cy="140" r="2" fill="currentColor" />
                            <circle cx="100" cy="60" r="2" fill="currentColor" />
                            <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.2" />
                        </svg>
                    </div>

                    <div className="relative z-10">
                        <AnimatedText
                            text="Remote-First Operations"
                            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                        />
                        <AnimatedText
                            text="Geography is not a constraint. It's an advantage."
                            className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                            delay={0.2}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4, duration: 1 }}
                            className="flex flex-wrap gap-4"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full text-sm font-medium shadow-sm">
                                <Video className="w-4 h-4 opacity-50" />
                                <span>Zoom / Meet</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full text-sm font-medium shadow-sm">
                                <Briefcase className="w-4 h-4 opacity-50" />
                                <span>Slack / Discord</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full text-sm font-medium shadow-sm">
                                <Zap className="w-4 h-4 opacity-50" />
                                <span>Linear / Jira</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid gap-8">
                    {features.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2, duration: 0.8, ease: EASE_LUXURY }}
                                className="flex items-start gap-6 group"
                            >
                                <div className="p-3 bg-white border border-black/5 rounded-xl group-hover:scale-110 transition-transform duration-500">
                                    <Icon className="w-6 h-6 text-[#111111]" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-[#6E6E6E] leading-relaxed max-w-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </Section>
    );
};
