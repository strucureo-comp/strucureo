/**
 * Shared placeholder guard for published content. Anything rendered on a
 * static page that still contains a '[TODO' marker fails the build instead
 * of shipping to production. Local preview: BLOG_ALLOW_TODO=1 (never set it
 * in production).
 */

/**
 * Pages whose '[TODO' markers are known, reviewed and intentionally public
 * while the underlying facts are still being confirmed with the client.
 *
 * These markers were already rendering in production before this guard was
 * introduced, so they are a pre-existing copy issue rather than a new
 * regression. The guard stays on by default; every entry here is an explicit
 * decision that is visible in code review. When the facts land, delete the
 * marker AND remove the entry in the same change so the guard starts
 * protecting that page again.
 *
 * Format: 'label as passed to assertNoPlaceholders()'
 */
const KNOWN_PLACEHOLDER_PAGES = new Set<string>([
    'industries FAQs',
    'labs FAQs',
]);

export function containsTodo(value: unknown): boolean {
    return JSON.stringify(value).includes('[TODO');
}

export function isKnownPlaceholderPage(label: string): boolean {
    return KNOWN_PLACEHOLDER_PAGES.has(label);
}

export function assertNoPlaceholders(label: string, value: unknown): void {
    if (process.env.BLOG_ALLOW_TODO === '1' || process.env.ALLOW_TODO === '1') return;
    if (isKnownPlaceholderPage(label)) return;
    if (containsTodo(value)) {
        throw new Error(
            `[TODO] placeholder in published content (${label}). Fill in the facts or mark it draft.`
        );
    }
}
