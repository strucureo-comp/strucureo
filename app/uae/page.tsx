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
        question: 'Does Strucureo work with startups based in Dubai / UAE?',
        answer: 'Yes. We are specifically structured to support businesses across Dubai, Abu Dhabi, and the wider UAE. Whether you need a local corporate website, an MVP for a DIFC-based startup, or custom operations software, our team is equipped to deliver rapidly while accommodating your timezone.'
    },
    {
        question: 'What is the typical cost of custom software development in the UAE?',
        answer: 'We provide highly competitive pricing for the UAE market. While costs depend heavily on the project scope, typical MVP builds start from $X (approx. AED X). We operate transparently and provide a fixed-price roadmap before writing any code.'
    },
    {
        question: 'Can you integrate local payment gateways like PayTabs or Telr?',
        answer: 'Absolutely. We specialize in robust API integrations and have deep experience connecting platforms to MENA-specific payment processors like PayTabs, Telr, Checkout.com, and Stripe.'
    },
    {
        question: 'How fast can you build and launch a product?',
        answer: 'We prioritize speed without sacrificing quality. Most websites and operational MVPs are delivered in days to a few weeks, making us the ideal technical partner for fast-moving businesses in the UAE.'
    },
    {
        question: 'What does Strucureo Build deliver in the UAE?',
        answer: 'The same Build offering as everywhere: websites, AI chatbots, ERP systems and startup MVPs, delivered in days with one dedicated contact. UAE specifics are handled where they matter — timezone overlap, MENA payment gateways like PayTabs, Telr and Checkout.com, and fixed pricing in AED. [TODO: confirm AED billing]'
    },
    {
        question: 'Do you only work with companies in Dubai?',
        answer: 'No. We support businesses across Dubai, Abu Dhabi, Sharjah and the wider Emirates, all through the same remote process and shared portal. [TODO: confirm whether in-person meetings are offered in the UAE]'
    }
];

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'UAE', url: `${SITE_URL}/uae` },
]);

const faqSchema = faqPageNode(faqItems);

export const metadata: Metadata = {
        title: 'Strucureo Build in UAE: Custom Software & AI',
    description: 'Strucureo, an engineering studio, builds custom software, AI chatbots, ERP systems and MVPs for Dubai, Abu Dhabi and the UAE — in days.',
    keywords: [
        'engineering studio UAE',
        'software studio Dubai',
        'AI chatbot development company UAE',
        'engineering studio Dubai',
        'custom software development UAE',
        'startup MVP development Dubai'
    ],
    alternates: {
        canonical: `${SITE_URL}/uae`,
    },
    openGraph: {
    title: 'Strucureo Build in UAE: Custom Software & AI | Strucureo',
        description: 'Elite software engineering for businesses across the UAE.',
        url: `${SITE_URL}/uae`,
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

export default function UAEPage() {
    assertNoPlaceholders('uae FAQs', faqItems);

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
                eyebrow="United Arab Emirates"
                title="Elite software engineering for the UAE."
                intro="We build custom software, AI chatbots, and startup MVPs for forward-thinking businesses in Dubai, Abu Dhabi, and across the Emirates — delivered in days, not months."
                definition="Strucureo is an engineering studio serving businesses across Dubai, Abu Dhabi and the Emirates. Through Strucureo Build it delivers custom software, AI chatbots, ERP systems and MVPs in days."
            />

            <Section>
                {[
                    {
                        icon: Building2,
                        title: 'Local Expertise',
                        desc: 'Understanding the unique business landscape and compliance requirements of the UAE market.',
                    },
                    {
                        icon: Globe,
                        title: 'AED Pricing',
                        desc: 'Transparent, fixed-price contracts in your preferred currency with no hidden fees.',
                    },
                    {
                        icon: CreditCard,
                        title: 'MENA Integrations',
                        desc: 'Deep experience connecting platforms to local payment gateways and corporate systems.',
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
                        UAE FAQ
                    </p>
                    <h2 className="mb-8 text-4xl font-bold tracking-tighter md:text-6xl">
                        Common questions from our UAE clients.
                    </h2>
                    <FAQAccordion items={faqItems} />
                </div>
            </section>

            <Contact />
        </main>
    );
}
