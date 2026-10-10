import { Metadata } from 'next';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { Contact } from '@/components/sections/Contact';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Section } from '@/components/shared/Section';

export const metadata: Metadata = {
    title: 'From Manual Work to a System: How Strucureo Works',
    description: 'How Strucureo moves a business from manual, scattered work to a working system: diagnose, design options and agree a fixed-price roadmap, build, support.',
    alternates: { canonical: 'https://www.strucureo.com/approach' },
    openGraph: {
        title: 'From Manual Work to a System: How Strucureo Works',
        description: 'Diagnose the root cause, compare options, agree a fixed-price roadmap, build in milestones, support after launch.',
        url: 'https://www.strucureo.com/approach',
        siteName: 'Strucureo',
        type: 'website',
    },
};

const steps = [
    {
        n: '01',
        title: 'Diagnose',
        body: 'We find the root cause of the problem before building anything. A spreadsheet that keeps breaking is usually a symptom. We work out what is actually going wrong, so the system we build fixes the cause and not just the surface.',
    },
    {
        n: '02',
        title: 'Design Options',
        body: 'We show you more than one way to solve the problem, each with its trade-offs, and we agree a fixed-price roadmap before any code is written. You choose with the facts in front of you, not after the work has started.',
    },
    {
        n: '03',
        title: 'Build',
        body: 'We build in focused milestones, so you always know where things stand. Delivery is days to a few weeks, depending on scope.',
    },
    {
        n: '04',
        title: 'Launch & Support',
        body: 'We support, optimize and scale after launch. Real users find what testing missed, so the weeks after launch are part of the project.',
    },
];

export default function ApproachPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111]">
            <SiteHeader />
            <Section className="bg-white">
                <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-4xl">
                    <AnimatedText text="How we work" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                        From manual work to a working system
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-16">
                        Strucureo moves a business from manual, scattered work to a
                        working system in five steps: diagnose the root cause, compare
                        options, agree a fixed-price roadmap, build in milestones, and
                        support after launch.
                    </p>

                    <div className="space-y-12">
                        {steps.map((step) => (
                            <div key={step.n} className="border-t border-[#111111]/10 pt-6">
                                <div className="flex items-baseline gap-4 mb-3">
                                    <span className="font-mono text-xs uppercase tracking-widest opacity-40">{step.n}</span>
                                    <h2 className="text-2xl md:text-3xl font-bold">{step.title}</h2>
                                </div>
                                <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-2xl">{step.body}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 border-t border-[#111111]/10 pt-10">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                            How to decide what to automate first
                        </h2>
                        <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-2xl mb-4">
                            Start with work that is repeated, follows clear rules, and
                            takes time every week. Do not automate a process that nobody
                            has defined yet; define it first. Keep people on the
                            decisions, the exceptions and the new ideas.
                        </p>
                    </div>

                    <div className="mt-12 border-t border-[#111111]/10 pt-10">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-6">
                            Where AI helps, and where people decide
                        </h2>
                        <p className="text-lg text-[#6E6E6E] leading-relaxed max-w-2xl">
                            AI and automation are good at repeatable steps. People decide
                            what is worth building, handle the cases that do not fit the
                            rules, and have the new ideas. We design systems around that
                            split.
                        </p>
                    </div>

                    <p className="mt-16 text-lg text-[#6E6E6E]">
                        See our <a href="/services" className="underline underline-offset-4 hover:opacity-60">services</a>,{' '}
                        <a href="/labs" className="underline underline-offset-4 hover:opacity-60">Labs research</a> and{' '}
                        <a href="/faq" className="underline underline-offset-4 hover:opacity-60">FAQ</a>, or start a
                        conversation below.
                    </p>
                    <p className="mt-4 text-sm uppercase tracking-widest opacity-40">Updated 2026-10-10</p>
                </div>
            </Section>
            <Contact />
        </main>
    );
}
