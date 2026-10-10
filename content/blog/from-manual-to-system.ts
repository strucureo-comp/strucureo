import type { Post } from '@/lib/blog';

export const fromManualToSystem: Post = {
    slug: 'from-manual-work-to-a-system-where-to-start',
    title: 'From manual work to a system: where to start',
    summary: 'Start with work that repeats, follows clear rules, and takes time every week. Define it first, then automate it. Keep people on the decisions.',
    date: '2026-10-10',
    category: 'Build',
    draft: false,
    takeaways: [
        'Start with work that is repeated, follows clear rules, and takes time every week.',
        'Do not automate a process nobody has defined yet; define it first.',
        'Keep people on the decisions, the exceptions and the new ideas.',
    ],
    body: [
        {
            type: 'paragraph',
            segments: [
                { text: 'Most businesses do not need more software. They need their existing manual work to run itself. The question is where to start, because automating the wrong thing first wastes time and trust.' },
            ],
        },
        {
            type: 'heading',
            level: 2,
            text: 'Pick work that repeats',
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Start with work that is repeated, follows clear rules, and takes time every week. If someone does the same steps most days, that is a candidate. If it happens once a quarter, it usually is not worth a system yet.' },
            ],
        },
        {
            type: 'heading',
            level: 2,
            text: 'Define it before you automate it',
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Do not automate a process that nobody has defined yet. If the steps live in one person\u2019s head, or change depending on who does them, write them down first. A system built on an undefined process just moves the confusion into code.' },
            ],
        },
        {
            type: 'heading',
            level: 2,
            text: 'Watch for the symptoms',
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'A spreadsheet that keeps breaking is usually a symptom, not the problem. So are the same questions arriving again and again, data retyped between tools, and reports rebuilt by hand. These point to repeatable work that has outgrown a manual approach.' },
            ],
        },
        {
            type: 'heading',
            level: 2,
            text: 'Keep people where people matter',
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Keep people on the decisions, the exceptions and the new ideas. A system handles the rule; a person handles what the rule did not anticipate. The split is the design.' },
            ],
        },
        {
            type: 'heading',
            level: 2,
            text: 'How we approach it',
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'We start by finding the root cause, show you more than one way to solve it with the trade-offs, agree a fixed-price roadmap before any code is written, build in focused milestones, and support it after launch. You see the options before you commit.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'If you are weighing which manual step to move into a system first, tell us what you are working on and we will talk it through.' },
            ],
        },
    ],
};
