import type { Post } from '@/lib/blog';

export const whyThreeArms: Post = {
    slug: 'why-build-labs-industries',
    title: 'Why we organized Strucureo into Build, Labs and Industries',
    summary: 'The same problems repeat across client work. Our three arms — Build, Labs and Industries — solve them once and reuse the answers.',
    date: '2026-10-05',
    updated: '2026-10-05',
    category: 'Company',
    draft: false,
    takeaways: [
        'Strucureo runs three arms — Build, Labs and Industries — so client work feeds research and research feeds products.',
        'Labs only researches problems that repeat across real projects; everything else stays in Build.',
        'Clients benefit directly: reused, tested modules mean shorter timelines and fewer unknowns.',
    ],
    body: [
        {
            type: 'paragraph',
            segments: [
                { text: 'Strucureo is an engineering studio with three arms: ' },
                { text: 'Build', bold: true },
                { text: ' for client software, ' },
                { text: 'Labs', bold: true },
                { text: ' for research, and ' },
                { text: 'Industries', bold: true },
                { text: ' for ready-made industry products. This post explains why we chose that shape, and how work flows between the three.' },
            ],
        },
        { type: 'heading', level: 2, text: 'One shape loses the learning' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Most of our client work starts the same way. A startup or a small business brings us a problem, we diagnose it, and we build the smallest system that solves it properly. The builds differ, but the underlying problems repeat: login and access control, an admin view over the same data the customer sees, a chatbot trained on the same kinds of documents, a report the owner checks every Monday morning.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'When every project is a standalone engagement, that repetition is pure cost. We solve access control in March, then solve it again in June, slightly differently, because nothing carried over. The client pays for the same thinking twice, and we get faster at typing but not wiser at building. That felt wrong, so we changed the shape of the company to keep what each project teaches us.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Three arms, one loop' },
        {
            type: 'paragraph',
            segments: [
                { text: 'Strucureo Build', bold: true },
                { text: ' is where client work happens: websites, AI chatbots, ERP systems and startup MVPs, delivered in days. Build meets real business problems directly, which makes it a strong source of research questions. Nothing in Labs starts from a trend report. It starts from problems clients have struggled with.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Strucureo Labs', bold: true },
                { text: ' takes the problems that repeat and researches them properly. A prototype gets tested against real client needs, and what survives is hardened into a documented, reusable module. What does not survive is written up and set aside, which is also valuable: knowing what failed, and why, is part of the asset.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'Strucureo Industries', bold: true },
                { text: ' packages proven Labs work into ready-made products for specific industries. The core is shared and already tested; each deployment configures it to one team. And the loop closes: new clients and hardened modules return to Build, so the next custom project starts from a stronger position than the last one did.' },
            ],
        },
        { type: 'heading', level: 2, text: 'What this changes for clients' },
        {
            type: 'paragraph',
            segments: [
                { text: 'For a client, the practical difference is speed and risk. A Build project that can reuse a tested module skips the riskiest part of the work: the part where an untested approach meets real users for the first time. Timelines shrink because the unknowns shrink, not because anyone works longer hours.' },
            ],
        },
        {
            type: 'paragraph',
            segments: [
                { text: 'It also changes the conversation at the start. Instead of asking what features you want, we can often show you something close to the finished shape on the first call, because a previous client needed nearly the same thing. You react to something concrete instead of imagining from a blank page, and the scope that comes out of that conversation is far more honest.' },
            ],
        },
        { type: 'heading', level: 2, text: 'Early days, open loop' },
        {
            type: 'paragraph',
            segments: [
                { text: 'We are early in this loop. Build already delivers client work, and Labs and Industries grow out of what that work teaches us. What we can already say is that the direction is set: every project should leave the studio stronger than it found it, and every client should benefit from the ones before them.' },
            ],
        },
    ],
};
