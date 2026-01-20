const OrganizationSchema = ({ locale }: { locale: string }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Strucureo",
        "description": "Elite software development company and premium IT services partner. We provide remote full-stack engineering, cloud platform development, and AI solutions for startups and scale-ups globally.",
        "url": "https://strucureo.com",
        "logo": "https://strucureo.com/logo.png",
        "sameAs": [
            "https://www.linkedin.com/company/strucureo/",
            "https://twitter.com/strucureo",
            "https://github.com/strucureo-comp"
        ],
        "serviceArea": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Russia" },
            { "@type": "Country", "name": "India" },
            { "@type": "Place", "name": "Global" }
        ],
        "knowsAbout": [
            "Elite Software Development",
            "Premium IT Services",
            "Remote Engineering Studio",
            "Full-Stack Development",
            "Custom Web Applications",
            "Cloud Platform Development",
            "AI Solutions",
            "SaaS Product Development",
            "Enterprise Software",
            "Offshore Development"
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
