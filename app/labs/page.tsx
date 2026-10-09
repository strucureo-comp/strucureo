import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    FlaskConical,
    Puzzle,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { breadcrumbList, faqPageNode } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

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
        includes: ['Document Q&A', 'Lead capture', 'Human handoff'],
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
            'What works is hardened into a documented, reusable module with clear limits.',
    },
    {
        title: 'Graduate to Industries',
        description:
            'Proven modules are packaged into ready-made industry products.',
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
            'Ideas graduate in four steps: spot the pattern in client work, research and prototype in Labs, harden what works into a reusable module, and package proven modules into Strucureo Industries products.',
    },
    {
        question: 'Can I commission Labs research?',
        answer:
            'Labs work is driven by problems seen in client projects. If your project surfaces a reusable problem, we will tell you. Labs does not take standalone research commissions — one-off needs are solved in Build.',
    },
    {
        question: 'How does Strucureo Labs pick what to research?',
        answer:
            'Labs only researches problems that repeat across real Strucureo Build client work. When the same need appears in several projects, it becomes a research candidate. This keeps every prototype anchored to something clients already pay to solve.',
    },
    {
        question: 'How long does Labs research take?',
        answer:
            'It depends on the question the prototype has to answer. Most tracks run alongside active client work so prototypes meet real data and real users early. We publish what graduates and what does not.',
    },
    {
        question: 'Can I buy a Labs prototype directly?',
        answer:
            'No. Prototypes are experiments, not products, and they ship only as part of a Build project or as graduated Industries packages. If your project surfaces a repeating problem, Labs may research it with your knowledge — and you keep the working result.',
    },
    {
        question: 'What does Strucureo Labs not do?',
        answer:
            'Labs does not take on standalone research commissions, chase technology for its own sake, or ship untested prototypes as products. If an idea cannot point to repeated client pain, it waits. One-off needs stay in Build, where they get solved directly without research overhead.',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Labs: Research & Prototypes | Strucureo',
    description: 'Strucureo Labs is the research arm of our engineering studio: AI agents, reusable modules, and prototypes from real client problems.',
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
        images: [
            {
                url: 'https://www.strucureo.com/opengraph-image.png',
                width: 1200,
                height: 630,
                alt: 'Strucureo Engineering Studio'
            }
        ]
    },
};

export default function LabsPage() {
    assertNoPlaceholders('labs FAQs', faqItems);
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Labs', url: `${SITE_URL}/labs` },
    ]);
    const faqSchema = faqPageNode(faqItems);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="Strucureo Labs"
                title="Where repeated problems become reusable solutions."
                intro="Labs explores AI agents, reusable modules, and prototypes — then hardens what works so the next build starts faster."
                definition="Strucureo Labs is the research arm of Strucureo, an engineering studio in the UAE and India. It turns problems that repeat across client work into tested prototypes, AI agents and reusable modules."
                points={[
                    { number: '01', label: 'Driven by client work' },
                    { number: '02', label: 'Tested with real users' },
                    { number: '03', label: 'Graduates to products' },
                ]}
            />

            <SplitList
                eyebrow="What Labs Researches"
                title="Focus areas"
                intro="Three tracks, all fed by problems seen in Strucureo Build client work."
            >
                {focusAreas.map((area, index) => (
                    <NumberedRow
                        key={area.title}
                        index={index}
                        icon={<area.icon className="w-12 h-12 text-[#111111]" />}
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
