import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Sectors } from '@/components/sections/Sectors';
import { SectorFlow } from '@/components/sections/SectorFlow';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';
import { ManualToSystem, SystemsForWork, WhatWeBuild, CommunityStrip } from '@/components/sections/Campaign';
import { FAQAccordion } from '@/components/FAQAccordion';
import { faqPageNode, breadcrumbList } from '@/lib/jsonld';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo: Custom Software & Automation | UAE & India',
        template: '%s | Strucureo'
    },
    description: 'Engineering studio for the UAE and India. We find the root cause, then build the system: custom software, automation, AI chatbots, ERP and websites.',
    keywords: [
        'engineering studio UAE',
        'custom software development India',
        'software studio Dubai',
        'startup MVP development Chennai',
        'AI chatbot development UAE',
        'ERP development India',
        'engineering studio Dubai',
        'software development Bangalore'
    ],
    openGraph: {
        title: 'Strucureo: Custom Software & Automation | UAE & India',
        description: 'Engineering studio for the UAE and India. We find the root cause, then build the system: custom software, automation, AI chatbots, ERP and websites.',
        url: 'https://www.strucureo.com',
        siteName: 'Strucureo',
        locale: 'en_US',
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
        title: 'Strucureo: Custom Software & Automation | UAE & India',
        description: 'We find the root cause, then build the system: custom software, automation, AI chatbots, ERP and websites for the UAE and India.',
        creator: '@strucureo',
        images: ['https://www.strucureo.com/opengraph-image.png']
    },
    alternates: {
        canonical: 'https://www.strucureo.com',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    }
};

export default function Home() {
    const homeFaqs = [
        {
            question: 'What does Strucureo build?',
            answer: 'Websites, AI chatbots, ERP systems, startup MVPs, custom software and automation — delivered in days to a few weeks, depending on scope, with a fixed scope, one dedicated contact, and support after launch.',
        },
        {
            question: 'How fast can Strucureo deliver?',
            answer: 'Most websites and MVPs are delivered in days to a few weeks depending on scope. We diagnose first, agree options, then build in focused milestones.',
        },
        {
            question: 'Does Strucureo work with clients in the UAE and India?',
            answer: 'Yes. We serve clients globally with a focus on the UAE (Dubai, Abu Dhabi) and India (Chennai, Bangalore, Mumbai), overlapping both timezones. See our UAE and India pages for local details.',
        },
        {
            question: 'How much does a project cost?',
            answer: 'Pricing depends on scope. Every engagement starts with diagnosis and a fixed-price roadmap agreed before any code is written. Contact us for a tailored quote and timeline.',
        },
        {
            question: 'How do we start?',
            answer: 'Book a free consultation through the contact form below or write to support@strucureo.com with your requirements. You receive practical solution paths with tradeoffs before committing to a build.',
        },
    ];
    const faqSchema = faqPageNode(homeFaqs);
    const breadcrumbSchema = breadcrumbList([{ name: 'Home', url: 'https://www.strucureo.com' }]);
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <Hero />
            <ManualToSystem />
            <Sectors />
            <SystemsForWork />
            <SectorFlow />
            <WhatWeBuild />
            <Uniqueness />
            <RemoteOps />
            <VisualIntro />
            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Answers before you ask.
                    </h2>
                    <FAQAccordion items={homeFaqs} />
                    <p className="mt-8 text-lg text-[#6E6E6E]">
                        More answers on our <a href="/faq" className="underline underline-offset-4 hover:opacity-60">FAQ page</a>, <a href="/services" className="underline underline-offset-4 hover:opacity-60">services</a>, <a href="/uae" className="underline underline-offset-4 hover:opacity-60">UAE</a> and <a href="/india" className="underline underline-offset-4 hover:opacity-60">India</a> pages.
                    </p>
                </div>
            </section>
            <CommunityStrip />
            <Contact />
        </main>
    );
}
