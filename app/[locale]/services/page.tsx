import type { Metadata } from 'next';
import type { LucideIcon } from 'lucide-react';
import {
    ArrowRight,
    Bot,
    Code2,
    Database,
    Layout,
    Rocket,
    ShieldCheck,
    Workflow,
    Wrench,
} from 'lucide-react';

const SITE_URL = 'https://strucureo.com';

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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;

    return {
        title: 'Services | Strucureo',
        description:
            'Explore Strucureo services for websites, AI chatbots, ERP systems, startup MVPs, custom software, automation, and cloud support.',
        alternates: {
            canonical: `${SITE_URL}/${locale}/services`,
            languages: {
                'en-US': `${SITE_URL}/en-US/services`,
                'en-AE': `${SITE_URL}/en-AE/services`,
                'de-DE': `${SITE_URL}/de-DE/services`,
                'ru-RU': `${SITE_URL}/ru-RU/services`,
            },
        },
        openGraph: {
            title: 'Services | Strucureo',
            description:
                'Websites, AI chatbots, ERP systems, MVPs, custom software, automation, and cloud support built with a structured engineering process.',
            url: `${SITE_URL}/${locale}/services`,
            siteName: 'Strucureo',
            type: 'website',
        },
    };
}

export default async function ServicesPage({ params }: PageProps) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a href={`/${locale}`} className="flex flex-col transition-opacity hover:opacity-50">
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">Services</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href={`/${locale}`} className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a href="https://portfolio.strucureo.com" className="transition-opacity hover:opacity-100">
                        Work
                    </a>
                </div>
            </nav>

            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-6 text-xs uppercase tracking-[0.24em] opacity-40">
                            Services
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Focused software builds for teams that need results fast.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            We plan, build, launch, and support practical systems for startups and
                            small businesses, from high-converting websites to internal operations
                            platforms.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 border-y border-[#111111]/10 py-6 md:grid-cols-3">
                    {[
                        ['01', 'Built in days, not months'],
                        ['02', 'One dedicated contact'],
                        ['03', 'Support after launch'],
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
                            What We Build
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Service lines
                        </h2>
                    </div>
                    <p className="max-w-md text-[#6E6E6E]">
                        Each service can be delivered as a focused project or combined into a
                        larger product build.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={service.title}
                                className="group flex min-h-[360px] flex-col justify-between rounded-3xl border border-[#111111]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/30 hover:shadow-2xl hover:shadow-black/5"
                            >
                                <div>
                                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#111111] text-white transition-transform duration-300 group-hover:scale-110">
                                        <Icon className="h-7 w-7" />
                                    </div>
                                    <h3 className="mb-4 text-2xl font-bold tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="leading-relaxed text-[#6E6E6E]">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="mt-8 flex flex-wrap gap-2">
                                    {service.includes.map((item) => (
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
                        Process
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Structured from first call to launch.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">
                        The goal is not just to write code. The goal is to reduce ambiguity,
                        choose the right technical path, and ship something that can survive real
                        usage.
                    </p>
                </div>

                <div className="border-t border-[#111111]/10 md:border-l md:border-t-0">
                    {processSteps.map((step, index) => (
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
                            Delivery Standard
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Practical, secure, maintainable.
                        </h2>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 lg:col-span-7">
                        {deliveryStandards.map((standard) => (
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

            <section className="px-6 pb-24 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <Wrench className="mb-8 h-10 w-10 opacity-60" />
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Need a website, AI tool, ERP, or MVP built properly?
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-8 leading-relaxed text-white/60">
                                Send the problem, current state, and target outcome. We will help
                                define the right build path.
                            </p>
                            <a
                                href={`/${locale}#contact`}
                                className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                            >
                                Start a project
                                <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
