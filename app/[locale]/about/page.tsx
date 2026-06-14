import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';

const SITE_URL = 'https://strucureo.com';

type PageProps = {
    params: Promise<{ locale: string }>;
};

type Founder = {
    id: string;
    name: string;
    role: string;
    linkedin: string;
    bio: string;
};

const founders: Founder[] = [
    {
        id: 'nagaratinam',
        name: 'Nagaratinam S',
        role: 'Managing Director',
        linkedin: '',
        bio: 'Nagaratinam S is Managing Director at Strucureo, leading the company\'s strategic direction and client relationships, ensuring every build aligns with business goals and delivers measurable outcomes.',
    },
    {
        id: 'balaviyas',
        name: 'Balaviyas Viyas',
        role: 'Chief Executive Officer',
        linkedin: 'https://www.linkedin.com/in/viyas56/',
        bio: 'Balaviyas Viyas is Chief Executive Officer at Strucureo, driving the company\'s vision, growth strategy, and operations — with a focus on helping startups and small businesses ship software faster.',
    },
    {
        id: 'dharini',
        name: 'Dharini Karthik',
        role: 'Chief Operating Officer',
        linkedin: 'https://www.linkedin.com/in/dharini-karthik',
        bio: 'Dharini Karthik is Chief Operating Officer at Strucureo, overseeing delivery, processes, and team coordination to ensure structured, on-time builds with consistent quality across all projects.',
    },
];

const values = [
    {
        title: 'Structured Engineering',
        description:
            'We follow a disciplined 4-step process — Diagnose, Design Options, Build Fast, Launch & Support — to reduce ambiguity and ship reliable systems.',
    },
    {
        title: 'Transparency',
        description:
            'Clear scope, visible progress, and honest tradeoffs. No black boxes. You always know where your project stands.',
    },
    {
        title: 'Speed Without Sacrifice',
        description:
            'We deliver in days, not months — without cutting corners. Fast does not mean fragile.',
    },
    {
        title: 'Long-Term Partnership',
        description:
            'We stay involved after launch. Support, iteration, and improvement are part of how we work.',
    },
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale } = await params;

    const title = 'Dharini Karthik, Balaviyas Viyas & Nagaratinam S | Strucureo Team';
    const description =
        'Meet the Strucureo leadership team — Dharini Karthik (COO), Balaviyas Viyas (CEO), and Nagaratinam S (MD). Founded February 26, 2026, Strucureo is a remote engineering studio building custom software for startups worldwide.';

    return {
        title,
        description,
        alternates: {
            canonical: `${SITE_URL}/${locale}/about`,
            languages: {
                'en-US': `${SITE_URL}/en-US/about`,
                'en-AE': `${SITE_URL}/en-AE/about`,
                'de-DE': `${SITE_URL}/de-DE/about`,
                'ru-RU': `${SITE_URL}/ru-RU/about`,
            },
        },
        openGraph: {
            title,
            description,
            url: `${SITE_URL}/${locale}/about`,
            siteName: 'Strucureo',
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
        },
    };
}

export default async function AboutPage({ params }: PageProps) {
    const { locale } = await params;

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* JSON-LD Person schemas for each founder */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': founders.map((founder) => {
                            const sameAs = [];
                            if (founder.id === 'balaviyas') {
                                sameAs.push('https://www.linkedin.com/in/viyas56/');
                            } else if (founder.id === 'dharini') {
                                sameAs.push('https://www.linkedin.com/in/dharini-karthik');
                            }
                            return {
                                '@type': 'Person',
                                '@id': `https://strucureo.com/#${founder.id}`,
                                name: founder.name,
                                jobTitle: founder.role,
                                url: founder.linkedin || undefined,
                                sameAs,
                                worksFor: {
                                    '@type': 'Organization',
                                    '@id': 'https://strucureo.com/#organization',
                                },
                            };
                        }),
                    }),
                }}
            />

            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a
                    href={`/${locale}`}
                    className="flex flex-col transition-opacity hover:opacity-50"
                >
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">About</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href={`/${locale}`} className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a
                        href="https://portfolio.strucureo.com"
                        className="transition-opacity hover:opacity-100"
                    >
                        Work
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-6 text-xs uppercase tracking-[0.24em] opacity-40">
                            About
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Strucureo — founded by Dharini Karthik, Balaviyas Viyas, and Nagaratinam S
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            Founded February 26, 2026. A remote engineering studio helping
                            startups and small businesses build custom software, AI tools, and
                            digital products — fast.
                        </p>
                    </div>
                </div>

                <div className="mt-16 grid gap-4 border-y border-[#111111]/10 py-6 md:grid-cols-3">
                    {[
                        ['Feb 2026', 'Founded'],
                        ['3', 'Core Members'],
                        ['Global', 'Markets'],
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

            {/* Team Section */}
            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                    <div>
                        <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                            The Team
                        </p>
                        <h2 className="text-4xl font-bold tracking-tighter md:text-6xl">
                            Our founders
                        </h2>
                    </div>
                    <p className="max-w-md text-[#6E6E6E]">
                        Three specialists with expertise in software engineering, business
                        strategy, and operations — working as one focused unit.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {founders.map((founder) => (
                        <article
                            key={founder.id}
                            className="group flex min-h-[320px] flex-col justify-between rounded-3xl border border-[#111111]/10 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#111111]/30 hover:shadow-2xl hover:shadow-black/5"
                        >
                            <div>
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold tracking-tight">
                                        {founder.name}
                                    </h3>
                                    {founder.linkedin && (
                                        <a
                                            href={founder.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#111111]/10 transition-all duration-300 hover:border-[#111111]/30 hover:bg-[#111111] hover:text-white"
                                            aria-label={`${founder.name} on LinkedIn`}
                                        >
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                    )}
                                </div>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#6E6E6E]">
                                    {founder.role}
                                </p>
                            </div>
                            <p className="leading-relaxed text-[#6E6E6E]">{founder.bio}</p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Values / Approach Section */}
            <section className="grid border-t border-[#111111]/10 bg-[#f9f9f9] md:grid-cols-2">
                <div className="px-6 py-20 md:px-12 lg:px-24">
                    <p className="mb-4 text-xs uppercase tracking-[0.24em] opacity-40">
                        Approach
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Built on structure, driven by outcomes.
                    </h2>
                    <p className="max-w-xl text-lg leading-relaxed text-[#6E6E6E]">
                        We created Strucureo because too many software projects stall in
                        ambiguity. Our structured process cuts through noise — so clients get
                        working systems, not endless discussions.
                    </p>
                </div>

                <div className="border-t border-[#111111]/10 md:border-l md:border-t-0">
                    {values.map((value, index) => (
                        <div
                            key={value.title}
                            className="grid gap-6 border-b border-[#111111]/10 px-6 py-10 last:border-b-0 md:grid-cols-[80px_1fr] md:px-12"
                        >
                            <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-30">
                                0{index + 1}
                            </span>
                            <div>
                                <h3 className="mb-3 text-2xl font-bold">{value.title}</h3>
                                <p className="max-w-xl leading-relaxed text-[#6E6E6E]">
                                    {value.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="px-6 py-20 md:px-12 lg:px-24">
                <div className="overflow-hidden rounded-[2rem] bg-[#111111] p-8 text-white md:p-12 lg:p-16">
                    <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
                        <div className="lg:col-span-8">
                            <h2 className="text-4xl font-bold leading-[0.95] tracking-tighter md:text-6xl">
                                Ready to build something?
                            </h2>
                        </div>
                        <div className="lg:col-span-4">
                            <p className="mb-8 leading-relaxed text-white/60">
                                Tell us what you need. We will help define the right path
                                forward — fast.
                            </p>
                            <a
                                href={`/${locale}`}
                                className="inline-flex items-center gap-3 border-b border-white pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                            >
                                Back to home
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}