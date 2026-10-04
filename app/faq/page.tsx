import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

type PageProps = {
    params: Promise<{ locale: string }>;
};

type FAQItem = {
    question: string;
    answer: string;
};

const faqs: FAQItem[] = [
    {
        question: 'What does Strucureo Build offer?',
        answer:
            'Strucureo Build delivers custom software development, AI chatbot development, web development, ERP system development, startup MVP builds, and cloud automation. We deliver focused software for startups and small businesses in days, not months.',
    },
    {
        question: 'How fast can Strucureo build a website or software product?',
        answer:
            'Strucureo specializes in rapid development. Most websites and MVPs are delivered in days to a few weeks, depending on scope. We follow a structured 4-step process: Diagnose, Design Options, Build Fast, and Launch & Support.',
    },
    {
        question: 'Who is the founder of Strucureo?',
        answer:
            'Strucureo was founded on February 26, 2026, by Nagaratinam S. Under his leadership as Managing Director, the team brings expertise in software engineering, business strategy, and operations.',
    },
    {
        question: 'Does Strucureo work with international clients?',
        answer:
            'Yes. Strucureo serves clients globally, with a focus on the United States, United Arab Emirates, Germany, Russia, and India. We operate as a remote engineering studio and can work across time zones.',
    },
    {
        question: 'What technologies does Strucureo use?',
        answer:
            'Strucureo builds with modern technologies including Next.js, React, TypeScript, Tailwind CSS, Three.js for 3D experiences, Supabase for backend services, and various AI/ML tools for automation and chatbot development.',
    },
    {
        question: 'How much does custom software development cost with Strucureo?',
        answer:
            'Pricing depends on project scope and complexity. Strucureo offers focused, cost-effective builds for startups and small businesses. Contact us with your requirements for a tailored quote and timeline.',
    },
    {
        question: 'What is the Strucureo development process?',
        answer:
            'We follow a 4-step structured process: (1) Diagnose — clarify the business problem, users, and success metrics. (2) Design Options — present practical solution paths with tradeoffs. (3) Build Fast — ship in focused milestones. (4) Launch & Support — deploy, monitor, and improve after go-live.',
    },
    {
        question: 'Can Strucureo help with an existing project that has problems?',
        answer:
            'Yes. Our Automation & Cloud Support team covers system cleanup, performance fixes, deployment automation, and operational improvements for existing products. We also offer ongoing support after launching new builds.',
    },
    {
        question: 'Does Strucureo work with startups based in Dubai / UAE?',
        answer: 'Yes. We are specifically structured to support businesses across Dubai, Abu Dhabi, and the wider UAE. Whether you need a local corporate website, an MVP for a DIFC-based startup, or custom operations software, our team is equipped to deliver rapidly while accommodating your timezone.',
    },
    {
        question: 'Can Strucureo build software for businesses in India with local payment gateway integration (UPI, Razorpay, etc.)?',
        answer: 'Yes. We frequently integrate domestic payment gateways like Razorpay, Cashfree, and PayU, alongside direct UPI integrations and standard gateways like Stripe to ensure your platform meets local consumer expectations.',
    },
    {
        question: 'What is the typical cost of custom software development in UAE / India?',
        answer: 'We provide highly competitive pricing for both markets. While costs depend heavily on the project scope, typical MVP builds start from $X (approx. AED X / INR X). We operate transparently and provide a fixed-price roadmap before writing any code.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
        },
    })),
};

export const metadata: Metadata = {
    title: 'FAQ | Strucureo',
    description: 'Frequently asked questions about working with Strucureo, an engineering studio: process, pricing, timelines and team.',
    alternates: {
        canonical: `${SITE_URL}/faq`,
    },
    openGraph: {
        title: 'FAQ | Strucureo',
        description: 'Frequently asked questions about working with Strucureo, an engineering studio: our process, pricing, and team.',
        url: `${SITE_URL}/faq`,
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
        title: 'FAQ | Strucureo',
        description: 'Frequently asked questions about working with Strucureo, an engineering studio: our process, pricing, and team.',
    },
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* FAQPage JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="FAQ"
                title="Questions and answers."
                intro="Everything you need to know about working with Strucureo — our process, pricing, and team."
            />

            <Section>
                <div className="mx-auto max-w-3xl">
                    <FAQAccordion items={faqs} className="mt-0" />
                </div>
            </Section>

            <Contact />
        </main>
    );
}