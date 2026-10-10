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
            'Strucureo is an engineering studio that turns complex business problems into working systems: custom software, automation, AI chatbots, ERP systems and websites for the UAE and India.',
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
            'custom software',
            'business process automation',
            'AI chatbots',
            'ERP systems',
            'MVP development',
            'websites',
        ],
        areaServed: [
            { '@type': 'Country', name: 'United Arab Emirates' },
            { '@type': 'Country', name: 'India' },
            { '@type': 'DefinedRegion', name: 'Worldwide' },
        ],
        // contactPoint: every value here traces to brain/FACTS.md — the email
        // is F-005 (already in this node), the markets are F-003, and the
        // contact form is the site's own footer form (visible on every page).
        // The full phone number is deliberately omitted: only a masked form
        // is published, and completing it is a client decision (QUEUE_C QC-05).
        contactPoint: [
            {
                '@type': 'ContactPoint',
                contactType: 'sales',
                email: 'support@strucureo.com',
                url: `${SITE_URL}/#contact`,
                availableLanguage: ['English'],
                areaServed: [
                    { '@type': 'Country', name: 'United Arab Emirates' },
                    { '@type': 'Country', name: 'India' },
                ],
            },
        ],
        slogan: 'Clarity against complexity',
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
        '@graph': [organizationNode(), founderNode(), websiteNode(), ...armNodes()],
    };
}
