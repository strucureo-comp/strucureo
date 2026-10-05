import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Sectors } from '@/components/sections/Sectors';
import { SectorFlow } from '@/components/sections/SectorFlow';
import { Uniqueness } from '@/components/sections/Uniqueness';
import { RemoteOps } from '@/components/sections/RemoteOps';
import { VisualIntro } from '@/components/sections/VisualIntro';
import { Contact } from '@/components/sections/Contact';
import { FAQAccordion } from '@/components/FAQAccordion';

export const metadata: Metadata = {
    title: {
        default: 'Strucureo Engineering Studio: UAE & India',
        template: '%s | Strucureo'
    },
    description: 'Engineering studio in the UAE and India: Build delivers custom software in days, Labs researches AI agents, Industries ships industry products.',
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
        title: 'Strucureo | Engineering Studio: Build, Labs & Industries',
        description: 'Strucureo helps startups and small businesses build websites, AI chatbots, ERP systems, and custom software delivered in days — plus Labs research and ready-made industry products.',
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
        title: 'Strucureo | Engineering Studio: Build, Labs & Industries',
        description: 'Websites, AI Chatbots, ERPs, and custom software delivered in days — plus Labs research and industry products.',
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
    return (
        <main className="bg-[#ffffff] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#ffffff] overflow-x-hidden antialiased">
            <Hero />
            <Sectors />
            <SectorFlow />
            <Uniqueness />
            <RemoteOps />
            <VisualIntro />
            <Contact />
        <section className="pt-8 border-t border-[#111111]/10 mt-8">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">FAQ</h2>
            <FAQAccordion items={[
                {{ question: "What does Strucureo Build offer?", answer: "Custom software, AI chatbots, ERP systems, and industry products built in days — not months." }},
                {{ question: "How fast can Strucureo build a website or software product?", answer: "Most projects ship in days: Discovery, Build, Launch. Complex products take weeks; simple MVPs ship in under a week." }},
                {{ question: "Who is Strucureo's founder?", answer: "Aathish, a full-stack engineer who started Strucureo to ship real products fast, with an engineering studio in the UAE and India." }},
                {{ question: "Does Strucureo work with international clients?", answer: "Yes — remote-first, timezone-flexible, English-speaking team across UAE and India, serving startups and small businesses worldwide." }},
                {{ question: "What technologies does Strucureo use?", answer: "Next.js, React, Node, PostgreSQL, AWS, Vercel, and AI/ML stacks tailored to each project." }},
                {{ question: "How much does custom software development cost with Strucureo?", answer: "Fixed-price scoping on Discovery; transparent pricing before Build starts. Startups and small businesses get predictable costs, no surprise invoices." }},
                {{ question: "What is the Strucureo development process?", answer: "Discovery, Build, Launch, then 48-hour monitoring. Each phase has a clear gate and a PR review before deploy." }},
                {{ question: "Can Strucureo help with an existing project that has problems?", answer: "Yes — we audit, fix, and modernize legacy codebases, from migrations to performance and SEO hardening." }},
                {{ question: "Does Strucureo work with startups based in Dubai / UAE?", answer: "Yes — local team in Dubai, remote-first, timezone-aligned, UAE-incorporated engagements supported." }},
                {{ question: "Can Strucureo build software for businesses in India with local payment gateway integration?", answer: "Yes — UPI, Razorpay, and Indian payment rails are first-class, with compliance and local testing." }},
                {{ question: "What is the typical cost of custom software development in UAE / India?", answer: "Fixed-price Discovery, then Build. Transparent quotes before work starts; no hourly surprises." }},
                {{ question: "What makes Strucureo different from other engineering studios?", answer: "We ship in days, not months. Labs researches AI agents, Build delivers custom software, Industries ships ready-made products — all under one roof." }},
            ]} />
        </section>
        </main>
    );
}
