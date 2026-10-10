import { getAllPosts } from '@/lib/blog';
import { faqs } from '@/app/faq/page';

const SITE_URL = 'https://www.strucureo.com';

export async function GET() {
    const posts = getAllPosts();

    const faqSection = faqs
        .map((faq) => `### ${faq.question}\n\n${faq.answer}`)
        .join('\n\n');

    const blogSection =
        posts.length === 0
            ? 'No published posts yet.'
            : posts
                .map(
                    (post) =>
                        `### ${post.title}\n\n${post.summary}\n\nRead more: ${SITE_URL}/blog/${post.slug}`
                )
                .join('\n\n');

    const body = `# Strucureo — Full Content

> Strucureo is an engineering studio for the UAE and India. Build delivers custom software in days to a few weeks, depending on scope, Labs researches AI agents and reusable modules, Industries turns proven work into industry products. Serving clients globally.

## Arms

- Strucureo Build (${SITE_URL}/services): custom software for clients — websites, AI chatbots, ERP systems and startup MVPs — delivered in days to a few weeks, depending on scope.
- Strucureo Labs (${SITE_URL}/labs): research and prototypes that turn repeated client problems into tested, reusable solutions.
- Strucureo Industries (${SITE_URL}/industries): ready-made products for specific industries, built from proven Labs work.

## Key pages

- Home: ${SITE_URL}/
- Services (Build): ${SITE_URL}/services
- Labs: ${SITE_URL}/labs
- Industries: ${SITE_URL}/industries
- UAE: ${SITE_URL}/uae
- India: ${SITE_URL}/india
- About: ${SITE_URL}/about
- FAQ: ${SITE_URL}/faq
- Blog: ${SITE_URL}/blog
- RSS feed: ${SITE_URL}/blog/rss.xml

## Services

- Website Development: conversion-focused marketing sites, landing pages, Next.js builds with SEO foundations.
- AI Chatbot Development: support bots and assistants with knowledge base setup, lead capture, human handoff.
- ERP & Operations Systems: inventory flows, order management, role access, reporting dashboards.
- Custom Software: internal portals, customer platforms, API integrations, admin panels.
- Startup MVP Development: lean scope, clickable flows, launch build, iteration roadmap.
- Automation & Cloud Support: deployment automation, CI/CD, performance fixes, monitoring basics.

## Process

1. Diagnose: clarify problem, users, constraints, success metrics.
2. Design Options: solution paths with speed/cost/complexity tradeoffs.
3. Build Fast: focused milestones, visible scope.
4. Launch & Support: deploy, monitor, document, improve.

## Pricing

- Fixed-price roadmap agreed before any code is written.
- No open-ended billing. Contact for a tailored quote and timeline.

## Geo focus

- UAE: Dubai, Abu Dhabi and the wider Emirates. MENA payment gateways (PayTabs, Telr, Checkout.com), timezone overlap. See ${SITE_URL}/uae.
- India: Chennai (leadership), Bangalore, Mumbai and India. Razorpay, Cashfree, PayU, UPI integrations. See ${SITE_URL}/india.

## Contact

- Website: ${SITE_URL}
- Email: support@strucureo.com
- Phone: +919344275731
- Portfolio: https://portfolio.strucureo.com
- LinkedIn: https://www.linkedin.com/company/strucureo/
- GitHub: https://github.com/strucureo-comp

## FAQ

${faqSection}

## Blog

${blogSection}
`;

    return new Response(body, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
