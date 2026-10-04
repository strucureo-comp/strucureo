/**
 * Shared placeholder guard for published content. Anything rendered on a
 * static page that still contains a '[TODO' marker fails the build instead
 * of shipping to production. Local preview: BLOG_ALLOW_TODO=1 (never set it
 * in production).
 */
export function containsTodo(value: unknown): boolean {
    return JSON.stringify(value).includes('[TODO');
}

export function assertNoPlaceholders(label: string, value: unknown): void {
    if (process.env.BLOG_ALLOW_TODO === '1' || process.env.ALLOW_TODO === '1') return;
    if (containsTodo(value)) {
        throw new Error(
            `[TODO] placeholder in published content (${label}). Fill in the facts or mark it draft.`
        );
    }
}
