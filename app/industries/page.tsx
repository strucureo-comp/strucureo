import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    Boxes,
    Factory,
    Handshake,
    Repeat,
    ShieldCheck,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';

const SITE_URL = 'https://strucureo.com';

type ProductLine = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

const productLines: ProductLine[] = [
    {
        title: '[TODO: Industry name]',
        description:
            'Ready-made product for [TODO: industry] teams, built from proven Labs modules. [TODO: confirm first industries]',
        includes: ['[TODO: scope]', 'Guided setup', 'Team training', 'Support path'],
        icon: Factory,
    },
    {
        title: '[TODO: Industry name]',
        description:
            'Ready-made product for [TODO: industry] teams, built from proven Labs modules. [TODO: confirm first industries]',
        includes: ['[TODO: scope]', 'Guided setup', 'Team training', 'Support path'],
        icon: Boxes,
    },
    {
        title: 'Early-partner builds',
        description:
            'For industries we have not packaged yet: a Build project shaped into a reusable starting point, with early-partner input.',
        includes: ['Scoped pilot', 'Your feedback', 'Priority pricing [TODO]', 'Roadmap input'],
        icon: Handshake,
    },
];

const differenceSteps = [
    {
        title: 'Start from proven work',
        description:
            'Industry products begin as Labs-tested modules from real client builds — not from a blank page.',
    },
    {
        title: 'Configured, not custom-built',
        description:
            'Instead of a full custom project, we configure the ready-made product to your team, data, and workflow.',
    },
    {
        title: 'Faster to value',
        description:
            'Because the core is proven, launch focuses on setup, training, and adoption rather than ground-up engineering. [TODO: confirm timelines]',
    },
    {
        title: 'Keeps improving',
        description:
            'Improvements from each deployment feed back into Labs and return to Build as stronger modules.',
    },
];

const faqItems = [
    {
        question: 'What are Strucureo Industries products?',
        answer:
            'Strucureo Industries offers ready-made products for specific industries, packaged from proven Strucureo Labs research. [TODO: confirm industry and product names]',
    },
    {
        question: 'How is this different from a custom Build project?',
        answer:
            'A Build project is custom software designed around your specific problem. An Industries product starts from a proven, ready-made core and is configured to your team — faster to launch, narrower in scope, and shaped by prior deployments.',
    },
    {
        question: 'How do I become an early partner?',
        answer:
            'If your industry is not packaged yet, we can run a scoped Build pilot shaped with your input. [TODO: confirm early-partner terms, pricing, and availability]',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Industries: Ready-Made Industry Products | Strucureo',
    description: 'Strucureo Industries offers ready-made products for specific industries, packaged from proven Labs research — configured to your team, faster than custom builds.',
    keywords: [
        'Strucureo Industries',
        'industry software products',
        'ready-made business software',
        'engineering studio products',
    ],
    alternates: {
        canonical: `${SITE_URL}/industries`,
    },
    openGraph: {
        title: 'Strucureo Industries: Ready-Made Industry Products | Strucureo',
        description: 'Ready-made industry products from proven Labs work — plus early-partner pilots for new industries.',
        url: `${SITE_URL}/industries`,
        siteName: 'Strucureo',
        type: 'website',
    },
};

export default function IndustriesPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a
                    href="/"
                    className="flex flex-col transition-opacity hover:opacity-50"
                >
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">Industries</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href="/" className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a href="/services" className="transition-opacity hover:opacity-100">
                        Build
                    </a>
                    <a href="/labs" className="transition-opacity hover:opacity-100">
                        Labs
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
                            Strucureo Industries
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Ready-made products for specific industries.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            Packaged from proven Labs work — configured to
                            your team instead of built from scratch.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 border-y border-[#111111]/10 py-6 md:grid-cols-3">
                    {[
                        ['01', 'Proven in Labs first'],
                        ['02', 'Configured to your team'],
                        ['03', 'Early partners welcome'],
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
                            Product Lines
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Starting points
                        </h2>
                    </div>
                    <p className="max-w-md text-[#6E6E6E]">
                        Industry and product names are placeholders until the
                        first packages are confirmed. [TODO: industry names,
                        product names]
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {productLines.map((line) => {
                        const Icon = line.icon;

                        return (
                            <article
                                key={line.title}
                                className="group flex min-h-[360px] flex-col justify-between rounded-3xl border border-[#111111]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/30 hover:shadow-2xl hover:shadow-black/5"
                            >
                                <div>
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-white transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold tracking-tight">
                                        {line.title}
                                    </h3>
                                    <p className="leading-relaxed text-[#6E6E6E]">
                                        {line.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {line.includes.map((item) => (
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
                        Difference
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        How products differ from custom projects.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">
                        Build projects are designed around one client. Industry
                        products start from a shared, proven core and are
                        configured to fit.
                    </p>
                </div>

                <div className="border-t border-[#111111]/10 md:border-l md:border-t-0">
                    {differenceSteps.map((step, index) => (
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

            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12">
                    <div className="lg:col-span-5">
                        <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                            Early Partners
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Shape the product for your industry.
                        </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
                        {[
                            'Scoped pilot shaped with your team',
                            'Direct input into the roadmap',
                            'Guided setup and training',
                            'Support path after launch',
                            'Early-partner terms [TODO]',
                            'Availability by industry [TODO]',
                        ].map((standard) => (
                            <div
                                key={standard}
                                className="flex items-start gap-4 rounded-2xl border border-[#111111]/10 p-5"
                            >
                                <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0" />
                                <span className="text-sm font-medium leading-relaxed">
                                    {standard}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 pb-12 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <Repeat className="mb-8 h-10 w-10 opacity-60" />
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Want a ready-made starting point for your industry?
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-8 leading-relaxed text-white/60">
                                Tell us your industry and workflow. We will show
                                the closest starting point — or a pilot path.
                            </p>
                            <a
                                href="/#contact"
                                className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                            >
                                Talk to us
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
                        Common questions about Industries.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>
        </main>
    );
}
