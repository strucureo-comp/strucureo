const OrganizationSchema = ({ locale }: { locale: string }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Strucureo",
        "description": "Elite remote full-stack engineering agency serving global enterprises.",
        "url": "https://strucureo.com",
        "logo": "https://strucureo.com/logo.png",
        "sameAs": [
            "https://linkedin.com/company/strucureo",
            "https://twitter.com/strucureo"
        ],
        "serviceArea": [
            { "@type": "Country", "name": "United States" },
            { "@type": "Country", "name": "United Arab Emirates" },
            { "@type": "Country", "name": "Germany" },
            { "@type": "Country", "name": "Russia" }
        ],
        "knowsAbout": [
            "Full-Stack Engineering",
            "Cloud Architecture",
            "AI Systems",
            "Automation"
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
