import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { SplitList } from '@/components/shared/SplitList';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Contact } from '@/components/sections/Contact';

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

export const metadata: Metadata = {
    title: 'Nagaratinam S | Strucureo Team',
    description: 'Meet the Strucureo leadership team — Nagaratinam S (MD). Founded February 26, 2026, Strucureo is a remote engineering studio building custom software for startups worldwide.',
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: 'Nagaratinam S | Strucureo Team',
        description: 'Meet the Strucureo leadership team — Nagaratinam S (MD). Founded February 26, 2026, Strucureo is a remote engineering studio building custom software for startups worldwide.',
        url: `${SITE_URL}/about`,
        siteName: 'Strucureo',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nagaratinam S | Strucureo Team',
        description: 'Meet the Strucureo leadership team — Nagaratinam S (MD). Founded February 26, 2026, Strucureo is a remote engineering studio building custom software for startups worldwide.',
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* JSON-LD Person schemas for each founder */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@graph': founders.map((founder) => {
                            const sameAs: string[] = [];

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

            <SiteHeader />

            <PageHero
                eyebrow="About"
                title="Strucureo — led by Nagaratinam S"
                intro="Founded February 26, 2026. A remote engineering studio helping startups and small businesses build custom software, AI tools, and digital products — fast."
                points={[
                    { number: 'Feb 2026', label: 'Founded' },
                    { number: 'Global', label: 'Markets' },
                ]}
            />

            <SplitList
                eyebrow="The Team"
                title="Leadership"
                intro="Driven by expertise in software engineering and business strategy, working to build systems that scale."
            >
                {founders.map((founder, index) => (
                    <NumberedRow
                        key={founder.id}
                        index={index}
                        title={founder.name}
                        desc={
                            <>
                                <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#6E6E6E]">
                                    {founder.role}
                                </p>
                                <p className="text-xl leading-relaxed text-[#6E6E6E] max-w-lg">
                                    {founder.bio}
                                </p>
                            </>
                        }
                        extra={
                            founder.linkedin ? (
                                <a
                                    href={founder.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-6 inline-flex items-center gap-2 border-b border-[#111111]/20 pb-1 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                                    aria-label={`${founder.name} on LinkedIn`}
                                >
                                    LinkedIn
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                            ) : undefined
                        }
                    />
                ))}
            </SplitList>

            <Section className="bg-[#f9f9f9]">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div className="relative">
                        <div className="relative z-10">
                            <AnimatedText text="Approach" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                            <AnimatedText
                                text="Built on structure, driven by outcomes."
                                className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6"
                            />
                            <AnimatedText
                                text="We created Strucureo because too many software projects stall in ambiguity. Our structured process cuts through noise — so clients get working systems, not endless discussions."
                                className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-8 max-w-md"
                                delay={0.2}
                            />
                        </div>
                    </div>

                    <div className="border-t border-[#111111]/10">
                        {values.map((value, index) => (
                            <NumberedRow
                                key={value.title}
                                index={index}
                                size="sm"
                                title={value.title}
                                desc={value.description}
                            />
                        ))}
                    </div>
                </div>
            </Section>

            <Contact />
        </main>
    );
}