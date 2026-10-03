import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    Bot,
    FlaskConical,
    Microscope,
    Puzzle,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';

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
            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a
                    href="/"
                    className="flex flex-col transition-opacity hover:opacity-50"
                >
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">Labs</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href="/" className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a href="/services" className="transition-opacity hover:opacity-100">
                        Build
                    </a>
                    <a href="/industries" className="transition-opacity hover:opacity-100">
                        Industries
                    </a>
                    <a
                        href="https://portfolio.strucureo.com"
                        className="transition-opacity hover:opacity-100"
                    >
                        Work
                    </a>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-6 text-xs uppercase tracking-[0.24em] opacity-40">
                            Strucureo Labs
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Where repeated problems become reusable solutions.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            Labs explores AI agents, reusable modules, and
                            prototypes — then hardens what works so the next
                            build starts faster.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 border-y border-[#111111]/10 py-6 md:grid-cols-3">
                    {[
                        ['01', 'Driven by client work'],
                        ['02', 'Tested with real users'],
                        ['03', 'Graduates to products'],
                    ].map(([number, label]) => (
                        <div key={number} className="flex items-center gap-4">
                            <span className="font-mono text-xs opacity-30">{number}</span>
                            <span className="text-sm font-bold uppercase tracking-[0.18em]">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                            What Labs Researches
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Focus areas
                        </h2>
                    </div>
                    <p className="max-w-md text-[#6E6E6E]">
                        Three tracks, all fed by problems seen in Strucureo
                        Build client work. [TODO: confirm focus list]
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {focusAreas.map((area) => {
                        const Icon = area.icon;

                        return (
                            <article
                                key={area.title}
                                className="group flex min-h-[360px] flex-col justify-between rounded-3xl border border-[#111111]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/30 hover:shadow-2xl hover:shadow-black/5"
                            >
                                <div>
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-white transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold tracking-tight">
                                        {area.title}
                                    </h3>
                                    <p className="leading-relaxed text-[#6E6E6E]">
                                        {area.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {area.includes.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-[#111111]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] opacity-60"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section className="grid border-t border-[#111111]/10 bg-[#f9f9f9] md:grid-cols-2">
                <div className="px-6 py-20 md:px-12 lg:px-24">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        Graduation
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        How ideas graduate to products.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">
                        Not every experiment survives. Only work proven
                        against real client needs moves toward Strucureo
                        Industries packaging.
                    </p>
                </div>

                <div className="border-t border-[#111111]/10 md:border-l md:border-t-0">
                    {graduationSteps.map((step, index) => (
                        <div
                            key={step.title}
                            className="grid gap-6 border-b border-[#111111]/10 px-6 py-10 last:border-b-0 md:grid-cols-[80px_1fr] md:px-12"
                        >
                            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
                                0{index + 1}
                            </span>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                                <p className="max-w-xl leading-relaxed text-[#6E6E6E]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 pb-12 pt-20 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <Microscope className="mb-8 h-10 w-10 opacity-60" />
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Have a problem worth researching?
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-8 leading-relaxed text-white/60">
                                Tell us what keeps repeating in your work. If
                                it fits Labs research, we will explore it
                                through a client build.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                            >
                                Talk to Labs
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions about Labs.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>
        </main>
    );
}
