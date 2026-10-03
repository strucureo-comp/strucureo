import type { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

const SITE_URL = 'https://strucureo.com';

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
    description: 'Frequently asked questions about working with Strucureo, our process, pricing, and team. Learn how we build websites, AI chatbots, ERP systems, and custom software fast.',
    alternates: {
        canonical: `${SITE_URL}/faq`,
    },
    openGraph: {
        title: 'FAQ | Strucureo',
        description: 'Frequently asked questions about working with Strucureo, our process, pricing, and team.',
        url: `${SITE_URL}/faq`,
        siteName: 'Strucureo',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'FAQ | Strucureo',
        description: 'Frequently asked questions about working with Strucureo, our process, pricing, and team.',
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

            <nav className="flex items-start justify-between px-6 py-8 text-xs font-medium uppercase tracking-[0.2em] md:px-12 lg:px-24">
                <a
                    href="/"
                    className="flex flex-col transition-opacity hover:opacity-50"
                >
                    <span>Strucureo</span>
                    <span className="mt-1 opacity-40">FAQ</span>
                </a>
                <div className="flex gap-5 opacity-60">
                    <a href="/" className="transition-opacity hover:opacity-100">
                        Home
                    </a>
                    <a
                        href="https://portfolio.strucureo.com"
                        className="transition-opacity hover:opacity-100"
                    >
                        Work
                    </a>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="px-6 pb-20 pt-12 md:px-12 md:pt-24 lg:px-24">
                <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
                    <div className="lg:col-span-8">
                        <p className="mb-6 text-xs uppercase tracking-[0.24em] opacity-40">
                            FAQ
                        </p>
                        <h1 className="max-w-5xl text-5xl font-bold leading-[0.9] tracking-tighter md:text-7xl lg:text-8xl">
                            Questions and answers.
                        </h1>
                    </div>
                    <div className="lg:col-span-4">
                        <p className="text-lg font-light leading-relaxed text-[#6E6E6E] md:text-xl">
                            Everything you need to know about working with Strucureo — our
                            process, pricing, and team.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ List */}
            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-4xl">
                    <div className="grid gap-0 divide-y divide-[#111111]/10">
                        {faqs.map((faq, index) => (
                            <details
                                key={index}
                                className="group py-8 first:pt-0 last:pb-0"
                            >
                                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left">
                                    <h2 className="text-xl font-bold tracking-tight md:text-2xl">
                                        {faq.question}
                                    </h2>
                                    <ChevronDown className="h-5 w-5 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                                </summary>
                                <div className="mt-4">
                                    <p className="leading-relaxed text-[#6E6E6E]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still have questions CTA */}
            <section className="border-t border-[#111111]/10 px-6 py-20 md:px-12 lg:px-24">
                <div className="mx-auto max-w-4xl text-center">
                    <h2 className="mb-6 text-3xl font-bold tracking-tighter md:text-5xl">
                        Still have questions?
                    </h2>
                    <p className="mb-8 text-lg leading-relaxed text-[#6E6E6E]">
                        Reach out with your specific requirements and we will get back to you
                        with clear answers and a path forward.
                    </p>
                    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                        <a
                            href="/"
                            className="inline-flex items-center gap-3 border-b border-[#111111] pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                        >
                            Back to home
                        </a>
                        <span className="hidden text-[#6E6E6E] sm:block">or</span>
                        <a
                            href="https://portfolio.strucureo.com"
                            className="inline-flex items-center gap-3 border-b border-[#111111] pb-2 text-sm font-bold uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                        >
                            View our work
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}