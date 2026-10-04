import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import { getAllPosts } from '@/lib/blog';
import { SiteHeader } from '@/components/shared/SiteHeader';
import { PageHero } from '@/components/shared/PageHero';
import { Section } from '@/components/shared/Section';
import { Contact } from '@/components/sections/Contact';

const SITE_URL = 'https://www.strucureo.com';

export const metadata: Metadata = {
    title: 'Notes from the studio | Strucureo',
    description: 'What we learn building software, researching new ideas and shipping industry products.',
    alternates: {
        canonical: `${SITE_URL}/blog`,
        types: {
            'application/rss+xml': `${SITE_URL}/blog/rss.xml`,
        },
    },
    openGraph: {
        title: 'Notes from the studio | Strucureo',
        description: 'What we learn building software, researching new ideas and shipping industry products.',
        url: `${SITE_URL}/blog`,
        siteName: 'Strucureo',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Notes from the studio | Strucureo',
        description: 'What we learn building software, researching new ideas and shipping industry products.',
    },
};

function formatDate(iso: string): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [year, month, day] = iso.split('-').map(Number);
    return `${String(day).padStart(2, '0')} ${months[month - 1]} ${year}`;
}

export default function BlogIndexPage() {
    const posts = getAllPosts();

    return (
        <main className="min-h-screen bg-white text-[#111111] selection:bg-[#111111] selection:text-white">
            <SiteHeader />

            <PageHero
                eyebrow="Blog"
                title="Notes from the studio"
                intro="What we learn building software, researching new ideas and shipping industry products."
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
        </main>
    );
}
