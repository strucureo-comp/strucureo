const SITE_URL = 'https://www.strucureo.com';
const ORG_ID = `${SITE_URL}/#organization`;

export function organizationNode() {
    return {
        '@type': 'Organization',
        '@id': ORG_ID,
        name: 'Strucureo',
        alternateName: 'Strucureo Engineering Studio',
        url: SITE_URL,
        logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/logo.png`,
            width: 512,
            height: 512,
        },
        description:
            'Strucureo is an engineering studio in the UAE and India. Build delivers custom software in days, Labs researches AI agents and reusable modules, Industries turns proven work into industry products.',
        email: 'support@strucureo.com',
        telephone: '+919344275731',
        foundingDate: '2026-02-26',
        sameAs: [
            'https://www.linkedin.com/company/strucureo/',
            'https://github.com/strucureo-comp',
            'https://portfolio.strucureo.com',
        ],
        founder: [{ '@id': `${SITE_URL}/#nagaratinam` }],
        knowsAbout: [
            'custom software development',
            'AI chatbots',
            'ERP systems',
            'MVP development',
            'AI research',
        ],
        areaServed: [
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'India' },
            { '@type': 'DefinedRegion', name: 'Worldwide' },
        ],
    };
}

export function founderNode() {
    return {
        '@type': 'Person',
        '@id': `${SITE_URL}/#nagaratinam`,
        name: 'Nagaratinam S',
        jobTitle: 'Managing Director',
        worksFor: { '@id': ORG_ID },
    };
}

export function websiteNode() {
    return {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'Strucureo',
        publisher: { '@id': ORG_ID },
    };
}

export function armNodes() {
    const arms = [
        {
            id: 'build',
            name: 'Strucureo Build',
            description:
                'Strucureo Build is the client software arm of Strucureo. It delivers websites, AI chatbots, ERP systems and startup MVPs in days.',
        },
        {
            id: 'labs',
            name: 'Strucureo Labs',
            description:
                'Strucureo Labs is the research arm of Strucureo. It turns repeated client problems into tested AI agents and reusable modules.',
        },
        {
            id: 'industries',
            name: 'Strucureo Industries',
            description:
                'Strucureo Industries is the product arm of Strucureo. It packages proven Labs work into ready-made industry products.',
        },
    ];
    return arms.map((arm) => ({
        '@type': 'Organization',
        '@id': `${SITE_URL}/#${arm.id}`,
        name: arm.name,
        description: arm.description,
        parentOrganization: { '@id': ORG_ID },
    }));
}

/** Service markup for the Build services we actually list. Pass the visible items. */
export function buildServiceNodes(items: { name: string; description: string }[]) {
    return items.map((service) => ({
        '@type': 'Service',
        serviceType: service.name,
        provider: { '@id': ORG_ID },
        areaServed: [
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'India' },
        ],
        name: service.name,
        description: service.description,
    }));
}

export function breadcrumbList(items: { name: string; url: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

const faqs = [
    { question: "What does Strucureo Build offer?", answer: "Custom software, AI chatbots, ERP systems, and industry products built in days — not months." },
    { question: "How fast can Strucureo build a website or software product?", answer: "Most projects ship in days: Discovery, Build, Launch. Complex products take weeks; simple MVPs ship in under a week." },
    { question: "Who is Strucureo's founder?", answer: "Aathish, a full-stack engineer who started Strucureo to ship real products fast, with an engineering studio in the UAE and India." },
    { question: "Does Strucureo work with international clients?", answer: "Yes — remote-first, timezone-flexible, English-speaking team across UAE and India, serving startups and small businesses worldwide." },
    { question: "What technologies does Strucureo use?", answer: "Next.js, React, Node, PostgreSQL, AWS, Vercel, and AI/ML stacks tailored to each project." },
    { question: "How much does custom software development cost with Strucureo?", answer: "Fixed-price scoping on Discovery; transparent pricing before Build starts. Startups and small businesses get predictable costs, no surprise invoices." },
    { question: "What is the Strucureo development process?", answer: "Discovery, Build, Launch, then 48-hour monitoring. Each phase has a clear gate and a PR review before deploy." },
    { question: "Can Strucureo help with an existing project that has problems?", answer: "Yes — we audit, fix, and modernize legacy codebases, from migrations to performance and SEO hardening." },
    { question: "Does Strucureo work with startups based in Dubai / UAE?", answer: "Yes — local team in Dubai, remote-first, timezone-aligned, UAE-incorporated engagements supported." },
    { question: "Can Strucureo build software for businesses in India with local payment gateway integration?", answer: "Yes — UPI, Razorpay, and Indian payment rails are first-class, with compliance and local testing." },
    { question: "What is the typical cost of custom software development in UAE / India?", answer: "Fixed-price Discovery, then Build. Transparent quotes before work starts; no hourly surprises." },
    { question: "What makes Strucureo different from other engineering studios?", answer: "We ship in days, not months. Labs researches AI agents, Build delivers custom software, Industries ships ready-made products — all under one roof." },
];

export function faqPageNode(items: { question: string; answer: string }[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.answer,
            },
        })),
    };
}

export function siteGraph() {
    return {
        '@context': 'https://schema.org',
        '@graph': [organizationNode(), founderNode(), websiteNode(), ...armNodes(), faqPageNode(faqs)],
    };
}
