import type { Metadata } from 'next';
import { Building2, Globe, CreditCard } from 'lucide-react';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { NumberedRow } from '@/components/shared/NumberedRow';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';
import { breadcrumbList, faqPageNode } from '@/lib/jsonld';
import { assertNoPlaceholders } from '@/lib/guard';

const SITE_URL = 'https://www.strucureo.com';

const faqItems = [
    {
        question: 'Does Strucureo work with startups based in India?',
        answer: 'Yes. We serve businesses in Chennai, Bangalore and Mumbai, and work with clients across India. We build custom software, automation and operational systems fitted to how your business runs.'
    },
    {
        question: 'What is the typical cost of custom software development in India?',
        answer: 'Pricing depends on scope. We work on fixed-price roadmaps agreed before any code is written, with transparent pricing. Contact us with your requirements for a tailored quote and timeline.'
    },
    {
        question: 'Can you integrate local payment gateways like Razorpay or UPI?',
        answer: 'Yes. We can integrate domestic payment gateways like Razorpay, Cashfree and PayU, alongside UPI and standard gateways like Stripe.'
    },
    {
        question: 'How fast can you build and launch a product?',
        answer: 'We prioritize speed without sacrificing quality. Most websites and operational MVPs are delivered in days to a few weeks, allowing Indian founders to go to market and test hypotheses rapidly.'
    },
    {
        question: 'What does Strucureo Build deliver in India?',
        answer: 'Websites, AI chatbots, ERP systems and startup MVPs, delivered in days to a few weeks, depending on scope, with one dedicated contact. India specifics are covered where they count — serving Chennai, Bangalore and Mumbai, domestic gateways like Razorpay, Cashfree, PayU and UPI, and transparent fixed-price roadmaps.'
    },
    {
        question: 'Do you only work with companies in Chennai?',
        answer: 'We work with startups and small businesses across Chennai, Bangalore, Mumbai and India, through the same remote process. Write to support@strucureo.com if you need to meet and we will confirm availability.'
    }
];

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'India', url: `${SITE_URL}/india` },
]);

const faqSchema = faqPageNode(faqItems);

export const metadata: Metadata = {
        title: 'Software & Automation Studio in India | Strucureo',
    description: 'Custom software, process automation, AI chatbots and ERP for businesses in Chennai, Bangalore and Mumbai. Fixed scope, one dedicated contact, support after launch.',
    keywords: [
        'engineering studio India',
        'software studio Chennai',
        'custom software development India',
        'startup MVP development Chennai',
        'software development company Bangalore',
        'ERP systems India'
    ],
    alternates: {
        canonical: `${SITE_URL}/india`,
    },
    openGraph: {
    title: 'Software & Automation Studio in India | Strucureo',
        description: 'Custom software, process automation, AI chatbots and ERP for businesses in Chennai, Bangalore and Mumbai. Fixed scope, one dedicated contact, support after launch.',
        url: `${SITE_URL}/india`,
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

export default function IndiaPage() {
    assertNoPlaceholders('india FAQs', faqItems);

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
                eyebrow="India"
                title="Software and automation studio for businesses in India"
                intro="Strucureo is an engineering studio that builds custom software, process automation, AI chatbots and ERP systems for businesses in Chennai, Bangalore and Mumbai. Every project starts with the root cause of the problem and a fixed-price roadmap."
                definition="Strucureo is an engineering studio serving businesses in Chennai, Bangalore and Mumbai. Through Strucureo Build it delivers custom software, AI chatbots, ERP systems and MVPs in days to a few weeks, depending on scope."
            />

            <Section>
                {[
                    {
                        icon: Building2,
                        title: 'Local Expertise',
                        desc: 'With leadership based in Chennai, we understand the local business environment and engineering standards.',
                    },
                    {
                        icon: Globe,
                        title: 'INR Pricing',
                        desc: 'Transparent, fixed-price contracts in Indian Rupees. No hidden fees or unexpected costs.',
                    },
                    {
                        icon: CreditCard,
                        title: 'Local Integrations',
                        desc: 'We can integrate local payment gateways like Razorpay, Cashfree and UPI.',
                    },
                ].map((feature, index) => (
                    <NumberedRow
                        key={feature.title}
                        index={index}
                        titleTag="h2"
                        icon={<feature.icon className="w-12 h-12 text-[#111111]" />}
                        title={feature.title}
                        desc={feature.desc}
                    />
                ))}
            </Section>

            <section className="px-6 py-20 md:px-12 lg:px-24 bg-[#f9f9f9]">
                <div className="mx-auto max-w-3xl">
                    <p className="mb-4 text-xs uppercase tracking-[0.2em] opacity-40">
                        India FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our Indian clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
