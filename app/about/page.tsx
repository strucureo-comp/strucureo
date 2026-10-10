import type { Metadata } from 'next';
import { ArrowUpRight } from 'lucide-react';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { breadcrumbList } from '@/lib/jsonld';
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
    title: 'About Strucureo: A Software & Systems Engineering Studio',
    description: 'Strucureo is a software engineering studio. We solve complex problems at the root, let systems do repeatable work, and keep people on new ideas.',
    alternates: {
        canonical: `${SITE_URL}/about`,
    },
    openGraph: {
        title: 'About Strucureo: A Software & Systems Engineering Studio',
        description: 'Strucureo is a software engineering studio. We solve complex problems at the root, let systems do repeatable work, and keep people on new ideas.',
        url: `${SITE_URL}/about`,
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
    twitter: {
        card: 'summary_large_image',
        title: 'About Strucureo: A Software & Systems Engineering Studio',
        description: 'Strucureo is a software engineering studio. We solve complex problems at the root, let systems do repeatable work, and keep people on new ideas.',
    },
};

export default function AboutPage() {
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'About', url: `${SITE_URL}/about` },
    ]);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="About"
                title="About Strucureo"
                intro="Strucureo is an engineering studio that turns complex business problems into working systems: custom software, automation, AI chatbots, ERP systems and websites for the UAE and India. Strucureo is a software and systems studio. It is not a structural or civil engineering firm."
                definition="Strucureo is an engineering studio in the UAE and India, led by Nagaratinam S. It runs three arms — Build, Labs and Industries — for startups and small businesses worldwide."
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

            <Section className="bg-white">
                <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-3xl">
                    <AnimatedText text="What we believe" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-10">What we believe</h2>
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Complex problems are solved at the root.</h3>
                            <p className="text-lg text-[#6E6E6E] leading-relaxed">Patching symptoms makes the next problem. We find the cause first.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Repeatable work belongs to systems.</h3>
                            <p className="text-lg text-[#6E6E6E] leading-relaxed">Software, automation and AI agents should carry the steps that repeat.</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-2">New ideas come from people.</h3>
                            <p className="text-lg text-[#6E6E6E] leading-relaxed">Creative leaps and real innovation come from human minds. We build systems so people have more room for them.</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Section className="bg-[#f9f9f9]">
                <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">Research</h2>
                    <p className="text-lg text-[#6E6E6E] leading-relaxed mb-4">
                        Strucureo Labs studies the problems that repeat across client work and tests solutions against real client needs.{' '}
                        <a href="/labs" className="underline underline-offset-4 hover:opacity-60">Read more about Labs</a>.
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mt-12 mb-6">Where we work</h2>
                    <p className="text-lg text-[#6E6E6E] leading-relaxed">
                        Our focus is the UAE (Dubai, Abu Dhabi) and India (Chennai, Bangalore, Mumbai), and we work with clients globally, overlapping both time zones.
                    </p>
                    <p className="mt-8 text-lg text-[#6E6E6E]">
                        See <a href="/approach" className="underline underline-offset-4 hover:opacity-60">how we work</a>, the{' '}
                        <a href="/community" className="underline underline-offset-4 hover:opacity-60">community</a> we are starting, and our{' '}
                        <a href="/faq" className="underline underline-offset-4 hover:opacity-60">FAQ</a>.
                    </p>
                    <p className="mt-4 text-sm uppercase tracking-widest opacity-40">Updated 2026-10-10</p>
                </div>
            </Section>

            <Contact />
        </main>
    );
}