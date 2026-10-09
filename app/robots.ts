import { MetadataRoute } from 'next';

/**
 * Crawler policy.
 *
 * ALLOW_TRAINING_CRAWLERS mirrors the Cloudflare edge: the edge returns 403 to
 * GPTBot, ClaudeBot and CCBot on content paths (measured 2026-10-09, brain
 * FACTS F-013b), so robots.txt now states the same policy instead of
 * advertising an allowance the edge does not honour. This is a config change
 * only — the Cloudflare rule itself is untouched and is owned by the client
 * (brain/QUEUE_C.md QC-02).
 *
 * Search and AI-search bots stay allowed: Googlebot, BingBot, OAI-SearchBot,
 * ChatGPT-User, Claude-SearchBot and PerplexityBot all get 200 at the edge.
 * Google-Extended and Applebot-Extended are grounding control tokens, not
 * fetchers — they fetch nothing, so they are not listed here.
 *
 * To re-allow training crawlers the edge rule must be lifted first; flip this
 * to true only after that.
 */
const ALLOW_TRAINING_CRAWLERS = false;

export default function robots(): MetadataRoute.Robots {
    const rules: MetadataRoute.Robots['rules'] = [
        {
            userAgent: '*',
            allow: '/',
        },
        {
            userAgent: 'Googlebot',
            allow: '/',
        },
        {
            userAgent: 'BingBot',
            allow: '/',
        },
        {
            userAgent: 'OAI-SearchBot',
            allow: '/',
        },
        {
            userAgent: 'ChatGPT-User',
            allow: '/',
        },
        {
            userAgent: 'Claude-SearchBot',
            allow: '/',
        },
        {
            userAgent: 'PerplexityBot',
            allow: '/',
        },
    ];

    if (ALLOW_TRAINING_CRAWLERS) {
        rules.push(
            { userAgent: 'GPTBot', allow: '/' },
            { userAgent: 'ClaudeBot', allow: '/' },
            { userAgent: 'CCBot', allow: '/' },
        );
    } else {
        rules.push(
            { userAgent: 'GPTBot', disallow: '/' },
            { userAgent: 'ClaudeBot', disallow: '/' },
            { userAgent: 'CCBot', disallow: '/' },
        );
    }

    return {
        rules,
        sitemap: 'https://www.strucureo.com/sitemap.xml',
    };
}
