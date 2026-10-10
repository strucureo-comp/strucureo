import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Boxes,
    Factory,
    Handshake,
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

type ProductLine = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

const productLines: ProductLine[] = [
    {
        title: 'Ready-made products',
        description:
            'Ready-made products for specific industries, built from proven Labs modules.',
        includes: ['Configuration', 'Guided setup', 'Team training', 'Support path'],
        icon: Factory,
    },
    {
        title: 'Configured to your team',
        description:
            'Ready-made products configured to your team, data and workflow, built from proven Labs modules.',
        includes: ['Configuration', 'Guided setup', 'Team training', 'Support path'],
        icon: Boxes,
    },
    {
        title: 'Early-partner builds',
        description:
            'For industries we have not packaged yet: a Build project shaped into a reusable starting point, with early-partner input.',
        includes: ['Scoped pilot', 'Your feedback', 'Roadmap input'],
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
            'Because the core is proven, launch focuses on setup, training, and adoption rather than ground-up engineering.',
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
            'Strucureo Industries offers ready-made products for specific industries, packaged from proven Strucureo Labs research. The first packages are being shaped with early partners now.',
    },
    {
        question: 'How is this different from a custom Build project?',
        answer:
            'A Build project is custom software designed around your specific problem. An Industries product starts from a proven, ready-made core and is configured to your team — faster to launch, narrower in scope, and shaped by prior deployments.',
    },
    {
        question: 'How do I become an early partner?',
        answer:
            'If your industry is not packaged yet, we can run a scoped Build pilot shaped with your input.',
    },
    {
        question: 'Which industries does Strucureo Industries serve?',
        answer:
            'The first industry packages are being shaped with early partners now, so the list is still open. If your industry is not packaged yet, a scoped Build pilot can become the starting point — and you help define the product.',
    },
    {
        question: 'What does an Industries engagement cost?',
        answer:
            'Pricing depends on the package and the configuration your team needs. Every engagement starts with a scoped pilot, so you approve a fixed shape before committing further.',
    },
    {
        question: 'How do I join the early-partner list?',
        answer:
            'Contact us through the consultation form and tell us your industry and workflow. If there is a matching starting point, we will show it. If not, we will propose a scoped pilot shaped with your team — early partners get direct input into the roadmap.',
    },
    {
        question: 'What does Strucureo Industries not do?',
        answer:
            'Industries does not build fully custom software — that is Build — and does not sell unfinished prototypes — that is Labs. Each product starts from a proven, shared core and is configured to fit.',
    },
];

export const metadata: Metadata = {
    title: 'Strucureo Industries: Products in the Making',
    description: 'Strucureo Industries is shaping its first industry products with early partners, built from proven Labs work. Configured to your team.',
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
        title: 'Strucureo Industries: Ready-Made Products | Strucureo',
        description: 'Ready-made industry products from proven Labs work — plus early-partner pilots for new industries.',
        url: `${SITE_URL}/industries`,
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

export default function IndustriesPage() {
    assertNoPlaceholders('industries FAQs', faqItems);
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Industries', url: `${SITE_URL}/industries` },
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
                eyebrow="Strucureo Industries"
                title="Industry products, shaped with early partners."
                intro="Strucureo Industries packages work that has already proven itself into ready-made products for specific industries. Packaged from proven Labs work — configured to your team instead of built from scratch."
                definition="Strucureo Industries is the product arm of Strucureo, an engineering studio for the UAE and India. It packages proven Labs work into ready-made products for specific industries."
                points={[
                    { number: '01', label: 'Proven in Labs first' },
                    { number: '02', label: 'Configured to your team' },
                    { number: '03', label: 'Early partners welcome' },
                ]}
            />

            <SplitList
                eyebrow="Product Lines"
                title="Starting points"
                intro="The first packages are being shaped with early partners."
            >
                {productLines.map((line, index) => (
                    <NumberedRow
                        key={line.title}
                        index={index}
                        icon={<line.icon className="w-12 h-12 text-[#111111]" />}
                        title={line.title}
                        desc={line.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {line.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Difference" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="How products differ from custom projects."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="Build projects are designed around one client. Industry products start from a shared, proven core and are configured to fit."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {differenceSteps.map((step, index) => (
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

            <SplitList
                eyebrow="Early Partners"
                title="Shape the product for your industry."
            >
                <div className="border-t border-[#111111]/10">
                    {[
                        'Scoped pilot shaped with your team',
                        'Direct input into the roadmap',
                        'Guided setup and training',
                        'Support path after launch',
                        'Early-partner terms',
                        'Availability by industry',
                    ].map((standard, index) => (
                        <NumberedRow
                            key={standard}
                            index={index}
                            size="sm"
                            title={standard}
                        />
                    ))}
                </div>
            </SplitList>

            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions about Industries.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
