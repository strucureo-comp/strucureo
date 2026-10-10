import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/FAQAccordion';
import { breadcrumbList, faqPageNode } from '@/lib/jsonld';
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

export const faqs: FAQItem[] = [
    {
        question: 'What does Strucureo Build offer?',
        answer:
            'Strucureo Build delivers custom software development, AI chatbot development, web development, ERP system development, startup MVP builds, and cloud automation. We deliver focused software for startups and small businesses in days to a few weeks, depending on scope.',
    },
    {
        question: 'How fast can Strucureo build a website or software product?',
        answer:
            'Most websites and MVPs are delivered in days to a few weeks, depending on scope. We follow a structured process: Diagnose, Design Options, Build, and Launch & Support.',
    },
    {
        question: 'Who is the founder of Strucureo?',
        answer:
            'Strucureo was founded on February 26, 2026, by Nagaratinam S. Under his leadership as Managing Director, the team brings expertise in software engineering, business strategy, and operations.',
    },
    {
        question: 'Does Strucureo work with international clients?',
        answer:
            'Yes. Strucureo works with clients for the UAE and India, and with clients worldwide, overlapping both time zones. We operate as a remote engineering studio.',
    },
    {
        question: 'What technologies does Strucureo use?',
        answer:
            'Strucureo builds with modern technologies including Next.js, React, TypeScript, Tailwind CSS, Three.js for 3D experiences, Supabase for backend services, and various AI/ML tools for automation and chatbot development.',
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
        answer: 'Yes. We can integrate domestic payment gateways like Razorpay, Cashfree and PayU, alongside UPI and standard gateways like Stripe.',
    },
    {
        question: 'What is the typical cost of custom software development in UAE / India?',
        answer:
            'Pricing depends on scope. Every engagement starts with diagnosis and a fixed-price roadmap agreed before any code is written. Contact us with your requirements for a tailored quote and timeline.',
    },
    {
        question: 'What is Strucureo?',
        answer:
            'Strucureo is an engineering studio for the UAE and India. We start by finding the root cause of a problem, show you more than one way to solve it, and build the system you choose: custom software, process automation, AI chatbots, ERP systems, websites and MVPs. Systems carry the repeatable work. People bring the new ideas. Strucureo has three arms: Build, Labs and Industries.',
    },
    {
        question: 'What problems does Strucureo solve?',
        answer:
            'Complex business problems where work is manual, scattered or repeated. We find the root cause, show you options, and build a working system.',
    },
    {
        question: 'Do you only build websites, chatbots and ERP systems?',
        answer:
            'No. Those are some of the ways we solve problems. We also build custom software, automation and startup MVPs, and we start from the problem, not from the product.',
    },
    {
        question: 'Can you move our manual work into a system?',
        answer:
            'Often, yes. We diagnose first, because some work is better kept with people. You see the options and trade-offs before you commit.',
    },
    {
        question: 'How does AI fit with human work at Strucureo?',
        answer:
            'Repeatable work belongs to systems. New ideas come from people. We build the first so people have more room for the second. We use AI and automation for repeatable work, and we keep decisions and new ideas with people.',
    },
    {
        question: 'Is Strucureo a structural engineering company?',
        answer:
            'No. Strucureo is a software and systems studio. It is not a structural or civil engineering firm.',
    },
    {
        question: 'What is the Strucureo community?',
        answer:
            'We are starting a community around one idea: AI and systems carry repeatable work, and new ideas come from people. It is early. Tell us what you are working on through the contact form.',
    },
    {
        question: 'What happens after launch?',
        answer:
            'We provide ongoing support, optimization and scaling as you grow.',
    },
];

const faqSchema = faqPageNode(faqs);

const breadcrumbSchema = breadcrumbList([
    { name: 'Home', url: `${SITE_URL}/` },
    { name: 'FAQ', url: `${SITE_URL}/faq` },
]);

export const metadata: Metadata = {
    title: 'Strucureo FAQ: Services, Process, Timelines and Pricing',
    description: 'Frequently asked questions about working with Strucureo, an engineering studio: process, pricing, timelines and team.',
    alternates: {
        canonical: `${SITE_URL}/faq`,
    },
    openGraph: {
        title: 'Strucureo FAQ: Services, Process, Timelines and Pricing',
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
        title: 'Strucureo FAQ: Services, Process, Timelines and Pricing',
        description: 'Frequently asked questions about working with Strucureo, an engineering studio: our process, pricing, and team.',
    },
};

export default function FAQPage() {
    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            {/* FAQPage + Breadcrumb JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="FAQ"
                title="Questions and answers."
                intro="Everything you need to know about working with Strucureo — our process, pricing, and team."
                definition="These are answers about working with Strucureo, an engineering studio for the UAE and India. They cover process, pricing, timelines and the team behind Build, Labs and Industries."
            />

            <Section>
                <div className="mx-auto max-w-3xl">
                    <FAQAccordion items={faqs} className="mt-0" questionTag="h2" />
                </div>
            </Section>

            <Contact />
        </main>
    );
}