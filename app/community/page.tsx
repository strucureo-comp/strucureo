import { Metadata } from 'next';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { Contact } from '@/components/sections/Contact';
import { AnimatedText } from '@/components/shared/AnimatedText';
import { Section } from '@/components/shared/Section';

export const metadata: Metadata = {
    title: 'Strucureo Community: Systems for Work, People for Ideas',
    description: 'We are starting a community built on one idea: systems and AI carry repeatable work, new ideas still come from people. Tell us what you are working on.',
    alternates: { canonical: 'https://www.strucureo.com/community' },
    openGraph: {
        title: 'Strucureo Community: Systems for Work, People for Ideas',
        description: 'We are starting a community built on one idea: systems and AI carry repeatable work, new ideas still come from people.',
        url: 'https://www.strucureo.com/community',
        siteName: 'Strucureo',
        type: 'website',
    },
};

export default function CommunityPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111]">
            <SiteHeader />
            <Section className="bg-white">
                <div className="px-6 md:px-12 lg:px-24 py-16 md:py-24 max-w-3xl">
                    <AnimatedText text="Community" className="text-xs uppercase tracking-[0.2em] mb-6 block opacity-50" />
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8">
                        Systems for the work. People for the ideas.
                    </h1>
                    <p className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed mb-6">
                        We are starting a community around one idea: AI and systems can
                        carry the repeatable work, but new ideas, creative leaps and real
                        innovation come from people. It is early.
                    </p>
                    <p className="text-lg text-[#6E6E6E] leading-relaxed mb-12">
                        If you build, research or run a business and want to help shape
                        it, tell us what you are working on.
                    </p>
                    <a
                        href="/#contact"
                        className="inline-block px-8 py-4 bg-[#111111] text-white font-bold tracking-widest text-sm hover:bg-black/80 transition-colors uppercase"
                    >
                        Tell us what you are working on
                    </a>
                    <p className="mt-16 text-lg text-[#6E6E6E]">
                        Read <a href="/approach" className="underline underline-offset-4 hover:opacity-60">how we work</a> and{' '}
                        <a href="/labs" className="underline underline-offset-4 hover:opacity-60">what Labs researches</a>.
                    </p>
                </div>
            </Section>
            <Contact />
        </main>
    );
}
