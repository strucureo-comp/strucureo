import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { breadcrumbList } from '@/lib/jsonld';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';
import { FAQAccordion } from '@/components/FAQAccordion';

const SITE_URL = 'https://www.strucureo.com';

export const metadata: Metadata = {
    title: 'Notes from the studio | Strucureo',
    description: 'Notes from our engineering studio: what we learn building software, researching ideas and shipping industry products.',
    alternates: {
        canonical: `${SITE_URL}/blog`,
        types: {
            'application/rss+xml': `${SITE_URL}/blog/rss.xml`,
        },
    },
    openGraph: {
        title: 'Notes from the studio | Strucureo',
        description: 'Notes from our engineering studio: what we learn building software, researching ideas and shipping industry products.',
        url: `${SITE_URL}/blog`,
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
        title: 'Notes from the studio | Strucureo',
        description: 'Notes from our engineering studio: what we learn building software, researching ideas and shipping industry products.',
    },
};

function formatDate(iso: string): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [year, month, day] = iso.split('-').map(Number);
    return `${String(day).padStart(2, '0')} ${months[month - 1]} ${year}`;
}

export default function BlogIndexPage() {
    const posts = getAllPosts();
    const breadcrumbSchema = breadcrumbList([
        { name: 'Home', url: `${SITE_URL}/` },
        { name: 'Blog', url: `${SITE_URL}/blog` },
    ]);

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <SiteHeader />

            <PageHero
                eyebrow="Blog"
                title="Notes from the studio"
                intro="Notes from our engineering studio: what we learn building software, researching ideas and shipping industry products."
                definition="Notes from Strucureo, an engineering studio in the UAE and India. Short essays on building software, researching ideas and shipping industry products."
            />

            {posts.length === 0 ? (
                <Section>
                    <p className="text-xl md:text-2xl font-light text-[#6E6E6E] leading-relaxed">
                        New posts are on the way.
                    </p>
                </Section>
            ) : (
                <Section>
                    <ul className="border-t border-[#111111]/10">
                        {posts.map((post) => (
                            <li key={post.slug} className="border-b border-[#111111]/10">
                                <a
                                    href={`/blog/${post.slug}`}
                                    className="group grid gap-4 py-10 md:grid-cols-[160px_1fr_auto] md:gap-8 md:items-start transition-opacity hover:opacity-70"
                                >
                                    <div className="flex flex-row gap-4 md:flex-col md:gap-2">
                                        <time
                                            dateTime={post.date}
                                            className="font-mono text-xs uppercase tracking-[0.2em] opacity-40"
                                        >
                                            {formatDate(post.date)}
                                        </time>
                                        <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                                            {post.category}
                                        </span>
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-bold tracking-tight mb-3">
                                            {post.title}
                                        </h2>
                                        <p className="leading-relaxed text-[#6E6E6E] max-w-xl">
                                            {post.summary}
                                        </p>
                                    </div>
                                    <ArrowRight className="w-6 h-6 mt-1 opacity-40 group-hover:translate-x-2 transition-transform duration-500" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Section>
            )}

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
