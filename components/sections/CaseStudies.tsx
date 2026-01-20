'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { ArrowUpRight } from 'lucide-react';

export const CaseStudies = () => {
    const cases = [
        {
            category: 'Logistics Scale-Up · AI Automation',
            title: '40% Efficiency Gain via Custom LLM Agents',
            metric: '40%',
            metricLabel: 'Ops Cost Reduced',
            desc: 'Designed and deployed a multi-agent AI system for a logistics platform, automating customer support and route planning.',
            color: 'bg-emerald-50 text-emerald-900'
        },
        {
            category: 'Fintech Series B · Cloud Migration',
            title: 'Legacy to Cloud Native Reconstruction',
            metric: '4 Weeks',
            metricLabel: 'Execution Time',
            desc: 'Migrated a high-traffic fintech platform from legacy infrastructure to Google Cloud Run, implementing auto-scaling and reducing downtime.',
            color: 'bg-blue-50 text-blue-900'
        },
        {
            category: 'Manufacturing Enterprise · IoT',
            title: 'Real-Time Sensor Network',
            metric: '100k+',
            metricLabel: 'Events / Second',
            desc: 'Built a high-throughput ingestion pipeline using Go and Kafka for a global manufacturing giant, visualizing sensor data in real-time.',
            color: 'bg-orange-50 text-orange-900'
        }
    ];

    return (
        <Section>
            <div className="mb-16 md:mb-24">
                <AnimatedText
                    text="Proven Impact"
                    className="text-xs uppercase tracking-[0.2em] opacity-40 mb-8 block"
                />
                <AnimatedText
                    text="Engineering that moves the needle."
                    className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight max-w-2xl"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cases.map((study, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 1 }}
                        className="group relative bg-white border border-[#111111]/10 p-8 flex flex-col justify-between min-h-[400px] hover:border-[#111111]/30 transition-colors"
                    >
                        <div>
                            <span className="text-xs font-mono uppercase tracking-widest opacity-50 mb-6 block">{study.category}</span>
                            <h3 className="text-2xl font-bold mb-4 group-hover:underline underline-offset-4 decoration-1">{study.title}</h3>
                            <p className="text-[#6E6E6E] mb-8 leading-relaxed text-sm">
                                {study.desc}
                            </p>
                        </div>

                        <div className="h-24 w-full mb-6 relative overflow-hidden opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                            {/* Mock Charts based on category */}
                            {i === 0 && ( // Efficiency: Smooth rising curve
                                <svg viewBox="0 0 100 40" className="w-full h-full text-emerald-600" preserveAspectRatio="none">
                                    <path d="M0 40 C 30 40, 40 10, 100 5 L 100 40 Z" fill="currentColor" />
                                </svg>
                            )}
                            {i === 1 && ( // Migration: Step down/up
                                <svg viewBox="0 0 100 40" className="w-full h-full text-blue-600" preserveAspectRatio="none">
                                    <path d="M0 40 L 40 40 L 40 10 L 100 10 L 100 40 Z" fill="currentColor" />
                                </svg>
                            )}
                            {i === 2 && ( // IoT: High frequency
                                <svg viewBox="0 0 100 40" className="w-full h-full text-orange-600" preserveAspectRatio="none">
                                    <path d="M0 40 L 10 20 L 20 35 L 30 10 L 40 30 L 50 15 L 60 35 L 70 5 L 80 25 L 90 15 L 100 40 Z" fill="currentColor" />
                                </svg>
                            )}
                        </div>

                        <div>
                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-4xl lg:text-5xl font-bold tracking-tight">{study.metric}</span>
                            </div>
                            <span className="text-xs font-mono uppercase tracking-widest opacity-50">{study.metricLabel}</span>
                        </div>

                        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                            <ArrowUpRight className="w-6 h-6" />
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
