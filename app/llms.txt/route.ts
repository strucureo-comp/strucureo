const SITE_URL = 'https://www.strucureo.com';

const BODY = `# Strucureo

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

## FAQ (short answers)

- What does Strucureo build? Websites, AI chatbots, ERP systems, startup MVPs, custom software and automation, delivered in days to a few weeks, depending on scope.
- How fast? Most websites and MVPs in days to a few weeks depending on scope.
- Where? Globally, with focus on UAE (Dubai, Abu Dhabi) and India (Chennai, Bangalore, Mumbai). Timezone overlap for both.
- Cost? Scope-dependent with a fixed-price roadmap before code. Contact for quote.
- How to start? Free consultation via the contact form or support@strucureo.com.

## Contact

- Website: ${SITE_URL}
- Email: support@strucureo.com
- Phone: +919344275731
- Portfolio: https://portfolio.strucureo.com
- LinkedIn: https://www.linkedin.com/company/strucureo/
- GitHub: https://github.com/strucureo-comp
`;

export async function GET() {
    return new Response(BODY, {
        headers: {
            'Content-Type': 'text/plain; charset=utf-8',
        },
    });
}
