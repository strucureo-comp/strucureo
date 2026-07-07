const OrganizationSchema = () => {
    const schema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://strucureo.com/#organization",
                "name": "Strucureo",
                "alternateName": "Strucureo Software",
                "url": "https://strucureo.com",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://strucureo.com/logo.png",
                    "width": 512,
                    "height": 512
                },
                "description": "IT services and software development company helping startups and small businesses build custom websites, AI chatbots, ERP systems, and software products — delivered in days, not months.",
                "foundingDate": "2026-02-26",
                "sameAs": [
                    "https://www.linkedin.com/company/strucureo/",
                    "https://twitter.com/strucureo",
                    "https://github.com/strucureo-comp"
                ],
                "founder": [
                    { "@id": "https://strucureo.com/#nagaratinam" }
                ],
                "knowsAbout": [
                    "Custom Software Development",
                    "AI Chatbot Development",
                    "Web Development",
                    "ERP Systems",
                    "Startup MVP Development",
                    "Cloud Automation",
                    "Next.js Development",
                    "Full-Stack Engineering"
                ],
                "areaServed": [
                    { "@type": "Country", "name": "United Arab Emirates" },
                    { "@type": "Country", "name": "India" },
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "Germany" }
                ]
            },
            {
                "@type": "Person",
                "@id": "https://strucureo.com/#nagaratinam",
                "name": "Nagaratinam S",
                "jobTitle": "Managing Director",
                "worksFor": { "@id": "https://strucureo.com/#organization" }
            }
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default OrganizationSchema;