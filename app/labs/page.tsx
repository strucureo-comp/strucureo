import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    FlaskConical,
    Puzzle,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://strucureo.com';

type FocusArea = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

const focusAreas: FocusArea[] = [
    {
        title: 'AI Agents',
        description:
            'Assistants and workflows that read your documents, draft answers, and hand off cleanly to humans when needed.',
        includes: ['Document Q&A', 'Lead capture', 'Human handoff', '[TODO: model policy]'],
        icon: Bot,
    },
    {
        title: 'Reusable Modules',
        description:
            'Small, proven building blocks from client work — auth flows, dashboards, and integrations we can reuse with confidence.',
        includes: ['Auth patterns', 'Admin panels', 'Integrations', 'UI blocks'],
        icon: Puzzle,
    },
    {
        title: 'Prototypes',
        description:
            'Fast, throwaway-to-keeper experiments that test an idea with real users before it becomes a product.',
        includes: ['Clickable flows', 'Rapid builds', 'User testing', 'Go/no-go notes'],
        icon: FlaskConical,
    },
];

const graduationSteps = [
    {
        title: 'Spot the pattern',
        description:
            'Strucureo Build client work reveals a problem that keeps repeating across projects.',
    },
    {
        title: 'Research in Labs',
        description:
            'Labs explores approaches, builds a prototype, and tests it against real client needs.',
    },
    {
        title: 'Harden the module',
        description:
            'What works is hardened into a documented, reusable module with clear limits. [TODO: review criteria]',
    },
    {
        title: 'Graduate to Industries',
        description:
            'Proven modules are packaged into ready-made industry products. [TODO: graduation bar]',
    },
];

const faqItems = [
    {
        question: 'What is Strucureo Labs?',
        answer:
            'Strucureo Labs is the research arm of our engineering studio. It turns repeated problems seen in Strucureo Build client work into tested prototypes, AI agents, and reusable modules.',
    },
    {
        question: 'How do Labs ideas become products?',
        answer:
            'Ideas graduate in four steps: spot the pattern in client work, research and prototype in Labs, harden what works into a reusable module, and package proven modules into Strucureo Industries products. [TODO: confirm graduation bar and review process]',
    },
    {
        question: 'Can I commission Labs research?',
        answer:
            'Labs work is driven by problems seen in client projects. If your project surfaces a reusable problem, we will tell you. [TODO: confirm whether standalone Labs engagements are offered]',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Labs: Research & Prototypes | Strucureo',
    description: 'Strucureo Labs is the research arm of our engineering studio: AI agents, reusable modules, and prototypes that turn repeated client problems into products.',
    keywords: [
        'Strucureo Labs',
        'AI agents research',
        'reusable software modules',
        'software prototypes',
        'engineering studio research',
    ],
    alternates: {
        canonical: `${SITE_URL}/labs`,
    },
    openGraph: {
        title: 'Strucureo Labs: Research & Prototypes | Strucureo',
        description: 'AI agents, reusable modules, and prototypes — how Labs turns client problems into products.',
        url: `${SITE_URL}/labs`,
        siteName: 'Strucureo',
        type: 'website',
    },
};

export default function LabsPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <SiteHeader />

            <PageHero
                eyebrow="Strucureo Labs"
                title="Where repeated problems become reusable solutions."
                intro="Labs explores AI agents, reusable modules, and prototypes — then hardens what works so the next build starts faster."
                points={[
                    { number: '01', label: 'Driven by client work' },
                    { number: '02', label: 'Tested with real users' },
                    { number: '03', label: 'Graduates to products' },
                ]}
            />

            <SplitList
                eyebrow="What Labs Researches"
                title="Focus areas"
                intro="Three tracks, all fed by problems seen in Strucureo Build client work. [TODO: confirm focus list]"
            >
                {focusAreas.map((area, index) => (
                    <NumberedRow
                        key={area.title}
                        index={index}
                        icon={area.icon}
                        title={area.title}
                        desc={area.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {area.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Graduation" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="How ideas graduate to products."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="Not every experiment survives. Only work proven against real client needs moves toward Strucureo Industries packaging."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {graduationSteps.map((step, index) => (
                            <NumberedRow
                                key={step.title}
                                index={index}
                                size="sm"
                                title={step.title}
                                desc={step.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions about Labs.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
