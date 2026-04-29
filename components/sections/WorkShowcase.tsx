'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useInView } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';
import { Bot, Boxes, Globe2, Rocket } from 'lucide-react';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { GyroContent } from '@/components/shared/GyroContent';

type WorkProject = {
    title: string;
    category: string;
    summary: string;
    outcome: string;
    stack: string[];
    image: string;
    icon: LucideIcon;
};

const projects: WorkProject[] = [
    {
        title: 'AI Support Automation',
        category: 'AI Chatbot',
        summary:
            'A support assistant pattern for teams that need fast answers, lead capture, and clean human escalation.',
        outcome: 'Lower manual response load and cleaner customer handoff.',
        stack: ['AI workflow', 'Knowledge base', 'Lead routing'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=70&w=800&auto=format&fit=crop',
        icon: Bot,
    },
    {
        title: 'Operations ERP Portal',
        category: 'Internal Software',
        summary:
            'A centralized operations system pattern for replacing scattered spreadsheets with role-based workflows.',
        outcome: 'Cleaner order, inventory, reporting, and admin visibility.',
        stack: ['Dashboards', 'Role access', 'Reporting'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=70&w=800&auto=format&fit=crop',
        icon: Boxes,
    },
    {
        title: 'Startup MVP Launch',
        category: 'Product Build',
        summary:
            'A focused MVP build path for founders who need to validate a product without spending months in planning.',
        outcome: 'A launchable first version with a practical iteration roadmap.',
        stack: ['Next.js', 'Auth', 'Payments/API'],
        image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=70&w=800&auto=format&fit=crop',
        icon: Rocket,
    },
    {
        title: 'High-Performance Service Site',
        category: 'Website',
        summary:
            'A modern service website structure designed around positioning, speed, SEO, and conversion.',
        outcome: 'Clearer messaging, stronger trust signals, and faster page delivery.',
        stack: ['SEO', 'Analytics', 'Responsive UI'],
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=70&w=800&auto=format&fit=crop',
        icon: Globe2,
    },
];

const deckPositions = [
    { y: 0, scale: 1, opacity: 1, rotate: 0 },
    { y: 34, scale: 0.94, opacity: 0.52, rotate: -2 },
    { y: 68, scale: 0.88, opacity: 0.24, rotate: 2 },
    { y: 102, scale: 0.82, opacity: 0, rotate: 0 },
];

const getDeckPosition = (index: number, activeIndex: number) => {
    const relativeIndex = (index - activeIndex + projects.length) % projects.length;
    return deckPositions[Math.min(relativeIndex, deckPositions.length - 1)];
};

const ProjectScrollItem = ({
    project,
    index,
    onActive,
}: {
    project: WorkProject;
    index: number;
    onActive: (index: number) => void;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: '-40% 0px -40% 0px' });
    const Icon = project.icon;

    useEffect(() => {
        if (isInView) {
            onActive(index);
        }
    }, [index, isInView, onActive]);

    return (
        <article
            ref={ref}
            className={`flex min-h-[60vh] items-center border-t border-[#111111]/10 py-12 lg:py-20 transition-[opacity,transform] duration-500 first:border-t-0 lg:min-h-screen ${
                isInView ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-20'
            }`}
        >
            <div className="flex flex-col gap-8 md:flex-row md:gap-12">
                <span className="mt-2 flex-shrink-0 font-mono text-sm tracking-widest text-[#111111]">
                    0{index + 1}
                </span>
                <div>
                    <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#111111] text-white shadow-xl shadow-black/10">
                        <Icon className="h-6 w-6" />
                    </div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] opacity-40">
                        {project.category}
                    </p>
                    <h3 className="mb-6 text-3xl font-bold leading-none tracking-tight md:text-5xl">
                        {project.title}
                    </h3>
                    <p className="max-w-xl text-xl leading-relaxed text-[#6E6E6E]">
                        {project.summary}
                    </p>
                    <div className="mt-8 rounded-3xl bg-[#f5f5f5] p-6">
                        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] opacity-40">
                            Outcome
                        </p>
                        <p className="text-sm font-semibold leading-relaxed">{project.outcome}</p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {project.stack.map((item) => (
                            <span
                                key={item}
                                className="rounded-full border border-[#111111]/10 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-65"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

const ProjectDeck = ({ activeIndex }: { activeIndex: number }) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY, currentTarget } = e;
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / (width / 2);
        const y = (clientY - (top + height / 2)) / (height / 2);
        setTilt({ x: x * 10, y: y * -10 });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <div 
            className="relative mx-auto h-[340px] w-full max-w-[440px] md:h-[430px]"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: '1000px' }}
        >
            {projects.map((project, index) => {
                const position = getDeckPosition(index, activeIndex);
                const relativeIndex = (index - activeIndex + projects.length) % projects.length;

                return (
                    <div
                        key={project.title}
                        style={{
                            transform: `translate3d(0, ${position.y}px, 0) scale(${position.scale}) rotate(${position.rotate}deg) rotateX(${index === activeIndex ? tilt.y : 0}deg) rotateY(${index === activeIndex ? tilt.x : 0}deg)`,
                            opacity: position.opacity,
                            zIndex: projects.length - relativeIndex,
                        }}
                        className="absolute inset-x-0 top-0 overflow-hidden rounded-[2rem] border border-white/40 bg-[#111111] shadow-xl shadow-black/10 transition-[transform,opacity] duration-500 ease-in-out will-change-transform"
                    >
                        <div className="relative aspect-[1.12/1] min-h-[300px] md:min-h-[370px]">
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                sizes="(min-width: 1024px) 32vw, 90vw"
                                loading={index === 0 ? 'eager' : 'lazy'}
                                className="scale-105 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/[0.02] to-[#111111]/85" />
                            <div className="absolute inset-x-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-white/15 px-4 py-3">
                                <span className="h-2 w-2 rounded-full bg-white/80" />
                                <span className="h-2 w-2 rounded-full bg-white/40" />
                                <span className="h-2 w-2 rounded-full bg-white/20" />
                                <span className="ml-auto text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
                                    Project
                                </span>
                            </div>
                            <div className="absolute inset-x-7 bottom-7 text-white">
                                <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.24em] text-white/50">
                                    {project.category}
                                </p>
                                <h4 className="text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export const WorkShowcase = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Section className="relative border-t border-[#111111]/10 bg-white py-0 !overflow-visible">
            <div
                ref={sectionRef}
                className="grid gap-12 lg:grid-cols-[0.78fr_minmax(0,1.18fr)_0.82fr] lg:gap-16"
            >
                <div className="pt-16 md:pt-32">
                    <div className="lg:sticky lg:top-0 lg:flex lg:min-h-screen lg:flex-col lg:justify-center">
                        <AnimatedText
                            text="Representative Builds"
                            className="mb-8 block text-xs uppercase tracking-[0.2em] opacity-50"
                        />
                        <h2 className="mb-8 text-4xl font-bold leading-[0.9] tracking-tighter md:text-6xl">
                            Work <br />
                            <span className="text-[#111111]/20">Patterns.</span>
                        </h2>
                        <p className="max-w-sm text-lg leading-relaxed text-[#6E6E6E]">
                            Project content follows the same scroll reveal used on the homepage.
                            The slideshow behavior is reserved for the image stack on the right.
                        </p>
                    </div>
                </div>

                <div className="lg:pt-0">
                    {projects.map((project, index) => (
                        <ProjectScrollItem
                            key={project.title}
                            project={project}
                            index={index}
                            onActive={setActiveIndex}
                        />
                    ))}
                </div>

                <div className="pb-16 md:pb-32 lg:pb-0 order-first lg:order-last">
                    <div className="sticky top-[15vh] lg:top-0 lg:flex lg:min-h-screen lg:items-center py-8 lg:py-0">
                        <GyroContent strength={40}>
                            <ProjectDeck activeIndex={activeIndex} />
                        </GyroContent>
                    </div>
                </div>
            </div>
        </Section>
    );
};
