import { whyThreeArms } from '@/content/blog/why-three-arms';
import { deliverInDays } from '@/content/blog/deliver-in-days';
import { repeatedProblems } from '@/content/blog/repeated-problems';

export type PostCategory = 'Build' | 'Labs' | 'Industries' | 'Company';

export type InlineSegment = {
    text: string;
    bold?: boolean;
    href?: string;
};

export type Block =
    | { type: 'heading'; level: 2 | 3; text: string }
    | { type: 'paragraph'; segments: InlineSegment[] }
    | { type: 'list'; items: InlineSegment[][] }
    | { type: 'quote'; segments: InlineSegment[] };

export type Post = {
    slug: string;
    title: string;
    summary: string;
    /** ISO date, e.g. '2026-10-05' */
    date: string;
    category: PostCategory;
    body: Block[];
    /** Drafts are excluded from the index, sitemap, RSS and static params. */
    draft: boolean;
};

const allPosts: Post[] = [whyThreeArms, deliverInDays, repeatedProblems];

/**
 * Build-time safety net: a published post must never contain a
 * placeholder. This runs inside getAllPosts/getPost, which execute
 * during prerendering, so a leak fails the build instead of shipping.
 * Local preview of unfinished posts: BLOG_ALLOW_TODO=1 (never set in production).
 */
function assertPublishedClean(posts: Post[]) {
    if (process.env.BLOG_ALLOW_TODO === '1') return;
    const offenders = posts
        .filter((post) => !post.draft && JSON.stringify(post).includes('[TODO'))
        .map((post) => post.slug);
    if (offenders.length > 0) {
        throw new Error(
            `Blog posts contain [TODO] placeholders but are marked as published: ${offenders.join(', ')}. ` +
            `Fill in the facts or set draft: true.`
        );
    }
}

function countWords(post: Post): number {
    const text: string[] = [post.title, post.summary];
    for (const block of post.body) {
        if (block.type === 'heading') {
            text.push(block.text);
        } else if (block.type === 'list') {
            for (const item of block.items) {
                text.push(item.map((segment) => segment.text).join(' '));
            }
        } else {
            text.push(block.segments.map((segment) => segment.text).join(' '));
        }
    }
    return text.join(' ').split(/\s+/).filter(Boolean).length;
}

/** Estimated reading time in whole minutes, ~200 words per minute. */
export function readingTime(post: Post): number {
    return Math.max(1, Math.ceil(countWords(post) / 200));
}

/** '2026-10-05' -> '05 Oct 2026'. Manual parts, no timezone surprises. */
export function formatDate(iso: string): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const [year, month, day] = iso.split('-').map(Number);
    return `${String(day).padStart(2, '0')} ${months[month - 1]} ${year}`;
}

/** All published posts, newest first. Throws at build time on placeholder leaks. */
export function getAllPosts(): Post[] {
    const published = allPosts
        .filter((post) => !post.draft)
        .sort((a, b) => (a.date < b.date ? 1 : -1));
    assertPublishedClean(published);
    return published;
}

export function getPost(slug: string): Post | undefined {
    const post = allPosts.find((item) => item.slug === slug);
    if (post && !post.draft) assertPublishedClean([post]);
    return post;
}

export function getPrevNext(slug: string): { prev?: Post; next?: Post } {
    const posts = getAllPosts();
    const index = posts.findIndex((post) => post.slug === slug);
    if (index === -1) return {};
    return {
        prev: posts[index + 1],
        next: posts[index - 1],
    };
}
