import type { Metadata } from 'next';
import { ArrowRight, Gauge, Layers, LineChart } from 'lucide-react';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { Magnetic } from '@/components/shared/Magnetic';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://strucureo.com';

type PageProps = {
    params: Promise<{ locale: string }>;
};

const principles = [
    {
        title: 'Problem before screens',
        description:
            'We define the business problem and decision flow before designing interfaces or writing code.',
    },
    {
        title: 'Tradeoffs documented',
        description:
            'Every build has speed, quality, cost, and scale tradeoffs. We make those explicit before execution.',
    },
    {
        title: 'Built for operation',
        description:
            'The work includes admin flows, support paths, and maintainability, not just the first user-facing screen.',
    },
    {
        title: 'Iterated after launch',
        description:
            'Real usage reveals the next improvement. We keep the path open for optimization and support.',
    },
];

const metrics = [
    ['01', 'Discovery-first scope'],
    ['02', 'Production-ready delivery'],
    ['03', 'Support after launch'],
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: 'Work | Strucureo',
        description:
            'Explore the kinds of websites, AI systems, ERP portals, MVPs, and custom software work Strucureo builds for startups and small businesses.',
        alternates: {
            canonical: `${SITE_URL}/${locale}/work`,
            languages: {
                'en-US': `${SITE_URL}/en-US/work`,
                'en-AE': `${SITE_URL}/en-AE/work`,
                'de-DE': `${SITE_URL}/de-DE/work`,
                'ru-RU': `${SITE_URL}/ru-RU/work`,
            },
        },
        openGraph: {
            title: 'Work | Strucureo',
            description:
                'Representative work patterns across websites, AI chatbots, ERP portals, MVPs, and custom software.',
            url: `${SITE_URL}/${locale}/work`,
            siteName: 'Strucureo',
            type: 'website',
        },
    };
}

export default async function WorkPage({ params }: PageProps) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a href={`/${locale}`} className="flex flex-col transition-opacity hover:opacity-50">
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">Work</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <Magnetic strength={0.2}>
                        <a href={`/${locale}`} className="transition-opacity hover:opacity-100">
                            Home
                        </a>
                    </Magnetic>
                    <Magnetic strength={0.2}>
                        <a href={`/${locale}/services`} className="transition-opacity hover:opacity-100">
                            Services
                        </a>
                    </Magnetic>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-6 text-xs uppercase tracking-[0.24em] opacity-40">
                            Work
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Systems, sites, and tools built around real business problems.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            This page shows the work patterns we build most often: websites,
                            AI assistants, ERP portals, MVPs, and custom operational software.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 border-y border-[#111111]/10 py-6 md:grid-cols-3">
                    {metrics.map(([number, label]) => (
                        <div key={number} className="flex items-center gap-4">
                            <span className="font-mono text-xs opacity-30">{number}</span>
                            <span className="text-sm font-bold uppercase tracking-[0.18em]">
                                {label}
                            </span>
                        </div>
                    ))}
                </div>
            </section>

            <WorkShowcase />

            <section className="grid border-t border-[#111111]/10 bg-[#f9f9f9] lg:grid-cols-12">
                <div className="px-6 py-20 md:px-12 lg:col-span-5 lg:px-24">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        How We Judge Work
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Useful beats flashy.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">
                        A good project should make a workflow clearer, a customer journey easier,
                        or a business process more reliable.
                    </p>
                </div>

                <div className="border-t border-[#111111]/10 lg:col-span-7 lg:border-l lg:border-t-0">
                    {principles.map((principle, index) => (
                        <div
                            key={principle.title}
                            className="grid gap-6 border-b border-[#111111]/10 px-6 py-10 last:border-b-0 md:grid-cols-[80px_1fr] md:px-12"
                        >
                            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
                                0{index + 1}
                            </span>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold">{principle.title}</h3>
                                <p className="max-w-xl leading-relaxed text-[#6E6E6E]">
                                    {principle.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        {
                            icon: Layers,
                            title: 'Discovery',
                            text: 'We turn rough requirements into an actionable build plan.',
                        },
                        {
                            icon: Gauge,
                            title: 'Delivery',
                            text: 'We ship focused milestones with production quality in mind.',
                        },
                        {
                            icon: LineChart,
                            title: 'Improvement',
                            text: 'We keep optimizing after launch based on usage and feedback.',
                        },
                    ].map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-3xl border border-[#111111]/10 p-8"
                            >
                                <Icon className="mb-8 h-8 w-8" />
                                <h3 className="mb-4 text-2xl font-bold">{item.title}</h3>
                                <p className="leading-relaxed text-[#6E6E6E]">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </section>
            <Contact />
        </main>
    );
}
