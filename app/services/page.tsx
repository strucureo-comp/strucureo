import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    Bot,
    Code2,
    Database,
    Layout,
    Rocket,
    Workflow,
} from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { buildServiceNodes, breadcrumbList } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

type PageProps = {
    params: Promise<{ locale: string }>;
};

type Service = {
    title: string;
    description: string;
    includes: string[];
    icon: LucideIcon;
};

const services: Service[] = [
    {
        title: 'Website Development',
        description:
            'Conversion-focused marketing sites, service websites, landing pages, and product pages built for speed, SEO, and trust.',
        includes: ['Next.js builds', 'SEO foundations', 'Responsive UI', 'Analytics setup'],
        icon: Layout,
    },
    {
        title: 'AI Chatbot Development',
        description:
            'Customer support bots, internal assistants, and AI workflows connected to your documents, systems, and escalation paths.',
        includes: ['Knowledge base setup', 'Lead capture', 'Human handoff', 'Workflow automation'],
        icon: Bot,
    },
    {
        title: 'ERP & Operations Systems',
        description:
            'Custom dashboards and business systems for teams that need clean workflows instead of spreadsheet chaos.',
        includes: ['Inventory flows', 'Order management', 'Role access', 'Reporting dashboards'],
        icon: Database,
    },
    {
        title: 'Custom Software',
        description:
            'Purpose-built tools for unique business problems, from internal portals to customer-facing platforms.',
        includes: ['Architecture planning', 'API integrations', 'Admin panels', 'Secure data flows'],
        icon: Code2,
    },
    {
        title: 'Startup MVP Development',
        description:
            'Lean product builds that help founders validate an idea quickly without overbuilding the first version.',
        includes: ['Product scope', 'Clickable flows', 'Launch build', 'Iteration roadmap'],
        icon: Rocket,
    },
    {
        title: 'Automation & Cloud Support',
        description:
            'System cleanup, deployment automation, cloud setup, and operational improvements for existing products.',
        includes: ['Cloud deployment', 'CI/CD setup', 'Performance fixes', 'Monitoring basics'],
        icon: Workflow,
    },
];

const serviceAnchors: Record<string, string> = {
    'Custom Software': 'software',
    'Automation & Cloud Support': 'software',
    'AI Chatbot Development': 'chatbots',
    'ERP & Operations Systems': 'erp',
    'Website Development': 'websites',
    'Startup MVP Development': 'mvp',
};

const processSteps = [
    {
        title: 'Diagnose',
        description:
            'We clarify the business problem, current bottlenecks, users, constraints, and success metrics.',
    },
    {
        title: 'Design Options',
        description:
            'You receive practical solution paths with tradeoffs around speed, cost, complexity, and long-term scale.',
    },
    {
        title: 'Build Fast',
        description:
            'We ship in focused milestones, keep scope visible, and avoid unnecessary engineering ceremony.',
    },
    {
        title: 'Launch & Support',
        description:
            'We help deploy, monitor, document, and improve the system after real users start using it.',
    },
];

const deliveryStandards = [
    'Clear technical scope before build',
    'Modern responsive interface',
    'Secure authentication and access patterns when needed',
    'Documented integrations and admin flows',
    'Performance and SEO basics included',
    'Post-launch support path',
];

const faqItems = [
    {
        question: 'What does Strucureo Build offer?',
        answer:
            'Strucureo Build delivers custom software development, AI chatbot development, web development, ERP system development, startup MVP builds, and cloud automation. We deliver focused software for startups and small businesses in days, not months.',
    },
    {
        question: 'How fast can Strucureo build a website or software product?',
        answer:
            'Strucureo specializes in rapid development. Most websites and MVPs are delivered in days to a few weeks, depending on scope. We follow a structured 4-step process: Diagnose, Design Options, Build Fast, and Launch & Support.',
    },
    {
        question: 'Who is the founder of Strucureo?',
        answer:
            'Strucureo was founded on February 26, 2026, by Nagaratinam S. Under his leadership as Managing Director, the team brings expertise in software engineering, business strategy, and operations.',
    },
    {
        question: 'Does Strucureo work with international clients?',
        answer:
            'Yes. Strucureo serves clients globally, with a focus on the United States, United Arab Emirates, Germany, Russia, and India. We operate as a remote engineering studio and can work across time zones.',
    },
    {
        question: 'What technologies does Strucureo use?',
        answer:
            'Strucureo builds with modern technologies including Next.js, React, TypeScript, Tailwind CSS, Three.js for 3D experiences, Supabase for backend services, and various AI/ML tools for automation and chatbot development.',
    },
    {
        question: 'How much does custom software development cost with Strucureo?',
        answer:
            'Pricing depends on project scope and complexity. Strucureo offers focused, cost-effective builds for startups and small businesses. Contact us with your requirements for a tailored quote and timeline.',
    },
    {
        question: 'Does Strucureo work with startups based in Dubai / UAE?',
        answer: 'Yes. We are specifically structured to support businesses across Dubai, Abu Dhabi, and the wider UAE. Whether you need a local corporate website, an MVP for a DIFC-based startup, or custom operations software, our team is equipped to deliver rapidly while accommodating your timezone.',
    },
    {
        question: 'Can Strucureo build software for businesses in India with local payment gateway integration (UPI, Razorpay, etc.)?',
        answer: 'Yes. We frequently integrate domestic payment gateways like Razorpay, Cashfree, and PayU, alongside direct UPI integrations and standard gateways like Stripe to ensure your platform meets local consumer expectations.',
    },
    {
        question: 'What is the typical cost of custom software development in UAE / India?',
        answer: 'Pricing depends on scope. Every engagement starts with diagnosis and a fixed-price roadmap agreed before any code is written. Contact us with your requirements for a tailored quote and timeline.',
    },
    {
        question: 'What does Strucureo Build not do?',
        answer:
            'Build does not do open-ended staff augmentation, take over large legacy codebases sight unseen, or promise fixed timelines before diagnosis. Every engagement starts with a defined scope and a chosen solution path. Research without a client problem belongs in Labs, and packaged products belong in Industries.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
        },
    })),
};

const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Strucureo Software Development Process',
    description:
        'Our 4-step structured approach to building software products quickly and effectively.',
    totalTime: 'P2W',
    step: processSteps.map((step, index) => ({
        '@type': 'HowToStep',
        name: step.title,
        text: step.description,
        url: `${SITE_URL}/services#step-${index + 1}`,
        position: index + 1,
    })),
};

const listedServiceNames = [
    'Website Development',
    'AI Chatbot Development',
    'ERP & Operations Systems',
    'Startup MVP Development',
];

const serviceSchema = {
    '@context': 'https://schema.org',
    '@graph': buildServiceNodes(
        services
            .filter((service) => listedServiceNames.includes(service.title))
            .map((service) => ({ name: service.title, description: service.description }))
    ),
};

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'Build', url: `${SITE_URL}/services` },
]);

export const metadata: Metadata = {
    title: 'Custom Software, Automation, AI Chatbots & ERP | Strucureo',
    description: 'Strucureo Build turns manual work into systems: custom software, process automation, AI chatbots, ERP, websites and MVPs. Fixed scope, one contact.',
    keywords: [
        'custom software development',
        'AI chatbot development',
        'web development',
        'ERP system development',
        'startup MVP development',
        'cloud automation',
        'Next.js development',
        'software agency',
        'engineering studio',
        'rapid software development',
    ],
    alternates: {
        canonical: `${SITE_URL}/services`,
    },
    openGraph: {
        title: 'Custom Software, Automation, AI Chatbots & ERP | Strucureo',
        description: 'Strucureo Build turns manual work into systems: custom software, process automation, AI chatbots, ERP, websites and MVPs.',
        url: `${SITE_URL}/services`,
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

export default function ServicesPage() {
    assertNoPlaceholders('services FAQs', faqItems);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* Structured Data Scripts */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="Strucureo Build"
                title="Custom software and automation for complex business problems"
                intro="Strucureo Build designs and builds the software that replaces manual, scattered work: custom software, process automation, AI chatbots, ERP systems, websites and MVPs. Every project starts with a diagnosis and a fixed-price roadmap."
                definition="Strucureo Build is the client software arm of Strucureo, an engineering studio in the UAE and India. It turns manual, scattered work into working systems."
                points={[
                    { number: '01', label: 'Days to a few weeks, by scope' },
                    { number: '02', label: 'One dedicated contact' },
                    { number: '03', label: 'Support after launch' },
                ]}
            />

            <SplitList
                eyebrow="Strucureo Build"
                title="What we build"
                intro="Each build can be delivered as a focused project or combined into a larger product build."
            >
                {services.map((service, index) => (
                    <NumberedRow
                        key={service.title}
                        id={serviceAnchors[service.title]}
                        index={index}
                        icon={<service.icon className="w-12 h-12 text-[#111111]" />}
                        title={service.title}
                        desc={service.description}
                        extra={
                            <p className="mt-6 leading-relaxed text-[#6E6E6E]">
                                {service.includes.join(' · ')}
                            </p>
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Process" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="Structured from first call to launch."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="The goal is not just to write code. The goal is to reduce ambiguity, choose the right technical path, and ship something that can survive real usage."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {processSteps.map((step, index) => (
                            <NumberedRow
                                key={step.title}
                                index={index}
                                id={`step-${index + 1}`}
                                size="sm"
                                title={step.title}
                                desc={step.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <SplitList
                eyebrow="Delivery Standard"
                title="Practical, secure, maintainable."
            >
                <div className="border-t border-[#111111]/10">
                    {deliveryStandards.map((standard, index) => (
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
                        Common questions about working with Strucureo.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}